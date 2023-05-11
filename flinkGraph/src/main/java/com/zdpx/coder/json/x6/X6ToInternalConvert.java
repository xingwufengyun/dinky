package com.zdpx.coder.json.x6;

import static com.zdpx.coder.graph.Scene.OPERATOR_MAP;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.zdpx.coder.graph.Connection;
import com.zdpx.coder.graph.InputPort;
import com.zdpx.coder.graph.Node;
import com.zdpx.coder.graph.OutputPort;
import com.zdpx.coder.graph.ProcessPackage;
import com.zdpx.coder.graph.Scene;
import com.zdpx.coder.json.ToInternalConvert;
import com.zdpx.coder.operator.Operator;
import com.zdpx.coder.operator.TableInfo;
import com.zdpx.coder.utils.InstantiationUtil;

import lombok.Data;

public final class X6ToInternalConvert implements ToInternalConvert {

    private final Logger log = LoggerFactory.getLogger(this.getClass());

    private static final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public Scene convert(String origin) {

        Map<String, TempNode> tempNodeMap = new HashMap<>();
        Map<String, JsonNode> operatorMap = new HashMap<>();
        Map<String, JsonNode> connectionNodes = new HashMap<>();
        Map<String, JsonNode> processNodes = new HashMap<>();
        try {
            JsonNode x6 = objectMapper.readTree(origin);
            JsonNode cells = x6.path("cells");

            for (JsonNode cell : cells) {
                String id = cell.get("id").asText();
                JsonNode parent = cell.get("parent");
                ArrayNode children = (ArrayNode) cell.get("children");

                String parentStr = null;
                if (parent != null) {
                    parentStr = parent.asText();
                }

                List<String> childrenList = new ArrayList<>();
                if (children != null) {
                    for (JsonNode child : children) {
                        childrenList.add(child.asText());
                    }
                }

                TempNode tempNode = new TempNode(id, cell, parentStr, childrenList);
                tempNodeMap.put(id, tempNode);
            }

            Map<String, Node> nodes = createNodesWithPackage(tempNodeMap);

            processPackage(nodes, tempNodeMap);
            processOperators(nodes, tempNodeMap);
            processConnections(nodes, tempNodeMap);

            ProcessPackage processPackage = new ProcessPackage();
            List<Node> processPackages =
                    nodes.values().stream()
                            .filter(node -> node.getNodeWrapper().getParent() == null)
                            .collect(Collectors.toList());

            processPackages.forEach(t -> t.getNodeWrapper().setParent(processPackage));
            Scene scene = new Scene();
            scene.setProcessPackage(processPackage);
        } catch (JsonProcessingException e) {
            log.error(e.getMessage());
        }
        return null;
    }

    /**
     * 按照从顶层向下初始化垂直信息
     *
     * @param allTempNodes
     * @param topNodes
     * @return
     */
    private Map<String, Node> createNodesWithPackage(Map<String, TempNode> allTempNodes) {
        Map<String, Node> nodes = new HashMap<>();
        for (Map.Entry<String, TempNode> tempNode : allTempNodes.entrySet()) {
            Node node;
            JsonNode cell = tempNode.getValue().getNode();
            String cell_shape = cell.get("shape").asText();
            switch (cell_shape) {
                case "edge":
                    node = new Connection<>();
                    break;
                case "package":
                    node = new ProcessPackage();
                    break;
                default:
                    {
                        node = createOperatorByCode(cell_shape);
                    }
            }
            node.setId(tempNode.getKey());
            node.setNodeWrapper(new X6NodeWrapper());
            nodes.put(tempNode.getKey(), node);
        }
        return nodes;
    }

    private static void processPackage(Map<String, Node> nodes, Map<String, TempNode> tempNodeMap) {
        List<ProcessPackage> processPackages =
                nodes.values().stream()
                        .filter(node -> node instanceof ProcessPackage)
                        .map(node -> (ProcessPackage) node)
                        .collect(Collectors.toList());

        processPackages.forEach(
                t -> {
                    t.getNodeWrapper().setParent(nodes.get(t.getId()));

                    List<String> childrenId = tempNodeMap.get(t.getId()).getChildren();
                    List<Node> childrenNode =
                            nodes.values().stream()
                                    .filter(tt -> childrenId.contains(tt.getId()))
                                    .collect(Collectors.toList());

                    childrenNode.forEach(
                            node -> {
                                TempNode tn = tempNodeMap.get(node.getId());
                                String name =
                                        tn.getNode()
                                                .path("attrs")
                                                .path("text")
                                                .path("text")
                                                .asText();
                                node.setName(name);
                            });
                    t.getNodeWrapper().setChildren(childrenNode);
                });
    }

    private static void processConnections(
            Map<String, Node> nodes, Map<String, TempNode> tempNodeMap) {
        List<Connection<TableInfo>> connections =
                nodes.values().stream()
                        .filter(node -> node instanceof Connection)
                        .map(node -> (Connection) node)
                        .collect(Collectors.toList());

        connections.forEach(
                t -> {
                    TempNode tn = tempNodeMap.get(t.getId());
                    JsonNode cell = tn.getNode();

                    JsonNode source = cell.get("source");
                    String sourceCell = source.get("cell").asText();
                    String sourcePort = source.get("port").asText();
                    Operator sourceOperator = (Operator) nodes.get(sourceCell);
                    OutputPort<TableInfo> outputPort =
                            sourceOperator.getOutputPorts().get(sourcePort);

                    JsonNode target = cell.get("target");
                    String targetCell = target.get("cell").asText();
                    String targetPort = target.get("port").asText();
                    Operator targetOperator = (Operator) nodes.get(targetCell);
                    InputPort<TableInfo> inputPort = targetOperator.getInputPorts().get(targetPort);

                    t.setFromPort(outputPort);
                    t.setToPort(inputPort);
                });
    }

    private void processOperators(Map<String, Node> nodes, Map<String, TempNode> tempNodeMap) {
        List<Operator> operators =
                nodes.values().stream()
                        .filter(node -> node instanceof Operator)
                        .map(node -> (Operator) node)
                        .collect(Collectors.toList());

        operators.forEach(
                t -> {
                    TempNode tn = tempNodeMap.get(t.getId());
                    String name = tn.getNode().path("attrs").path("text").path("text").asText();
                    t.setName(name);

                    JsonNode data = tn.getNode().get("data");
                    if (data != null) {
                        String parameters = data.get("parameters").asText();
                        t.getNodeWrapper().setParameters(parameters);
                    }
                });
    }

    public Operator createOperatorByCode(String code) {
        Class<? extends Operator> cl = OPERATOR_MAP.get(code);
        if (cl == null) {
            String l = String.format("operator %s not exists.", code);
            log.error(l);
            throw new NullPointerException(l);
        }

        return InstantiationUtil.instantiate(cl);
    }

    @Data
    private static class TempNode {

        private final String id;
        private final JsonNode node;
        private final String parent;
        private final List<String> children;

        public TempNode(String id, JsonNode node, String parent, List<String> children) {
            this.id = id;
            this.node = node;
            this.parent = parent;
            this.children = children;
        }
    }
}
