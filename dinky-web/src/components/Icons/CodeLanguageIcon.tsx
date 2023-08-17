/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Icon from '@ant-design/icons';

const IconStyle = {
  height: '16px',
  width: '16px',
};

/**
 *
 * default icon
 * @returns {JSX.Element}
 * @constructor
 */
export const FileIcon = () => {
  return (
    <>
      <Icon
        style={{ ...IconStyle }}
        component={() => (
          <svg
            className="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M848.410947 804.163368H706.56a27.809684 27.809684 0 1 1 0-55.619368h141.850947a36.810105 36.810105 0 0 0 36.163369-36.163368V167.235368a36.810105 36.810105 0 0 0-36.163369-36.163368H392.272842a36.810105 36.810105 0 0 0-36.163368 36.163368v38.938948a27.809684 27.809684 0 0 1-55.619369 0V167.235368A92.591158 92.591158 0 0 1 392.272842 75.452632h456.138105a92.591158 92.591158 0 0 1 91.782737 91.782736v542.369685a93.210947 93.210947 0 0 1-91.782737 94.558315z"
              fill="#83D2EA"
            ></path>
            <path
              d="M717.689263 467.644632h-175.157895a73.647158 73.647158 0 0 1-72.380631-72.380632v-175.157895z m-194.694737-114.041264v41.660632a17.946947 17.946947 0 0 0 16.680421 16.680421h41.714527z"
              fill="#208BB5"
            ></path>
            <path
              d="M639.811368 940.463158H183.673263a92.591158 92.591158 0 0 1-91.782737-91.782737v-545.145263a92.591158 92.591158 0 0 1 91.782737-91.782737h311.511579l239.184842 239.21179v394.940631a93.776842 93.776842 0 0 1-94.558316 94.558316zM183.673263 267.371789a36.810105 36.810105 0 0 0-36.163368 36.163369v542.369684a36.810105 36.810105 0 0 0 36.163368 36.163369h456.138105a36.810105 36.810105 0 0 0 36.163369-36.163369V473.141895L470.150737 267.317895H183.673263z"
              fill="#208BB5"
            ></path>
          </svg>
        )}
      />
    </>
  );
};

/**
 * java icon
 * @returns {JSX.Element}
 * @constructor
 */
export const JavaSvg = () => {
  return (
    <>
      <Icon
        style={{ ...IconStyle }}
        component={() => (
          <svg
            className="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M590.222222 73.955556L859.022222 342.254933V876.088889c0 37.700267-30.5664 68.266667-68.266666 68.266667H233.244444c-37.700267 0-68.266667-30.5664-68.266666-68.266667V142.222222c0-37.700267 30.5664-68.266667 68.266666-68.266666h356.977778z m-11.764622 28.444444H233.244444a39.822222 39.822222 0 0 0-39.799466 38.456889L193.422222 142.222222v733.866667a39.822222 39.822222 0 0 0 38.456889 39.799467L233.244444 915.911111h557.511112a39.822222 39.822222 0 0 0 39.799466-38.456889L830.577778 876.088889V354.053689L578.4576 102.4z"
              fill="#ED5F38"
            ></path>
            <path
              d="M854.755556 370.648178h-215.1424c-45.528178 0-82.551467-36.431644-83.5072-81.737956l-0.017067-1.792V73.955556h28.444444v213.162666c0 29.895111 23.819378 54.232178 53.515378 55.062756l1.564445 0.022755h215.1424v28.444445z"
              fill="#ED5F38"
            ></path>
            <path
              d="M56.888889 489.244444m28.444444 0l853.333334 0q28.444444 0 28.444444 28.444445l0 284.444444q0 28.444444-28.444444 28.444445l-853.333334 0q-28.444444 0-28.444444-28.444445l0-284.444444q0-28.444444 28.444444-28.444445Z"
              fill="#ED5F38"
            ></path>
            <path
              d="M250.453333 757.504c42.752 0 62.464-30.72 62.464-68.096V563.2H267.093333v122.624c0 24.832-7.936 32.256-22.784 32.256-9.216 0-18.944-5.888-25.6-18.944L187.733333 722.432c13.568 23.552 33.024 35.072 62.72 35.072zM445.525333 563.2l59.136 190.72h-48.128l-11.008-43.776h-56.32l-11.008 43.776h-46.592L390.741333 563.2h54.784z m-27.904 34.304h-1.024c-4.608 19.968-9.728 42.24-14.592 61.184l-4.096 16.128h38.912l-4.096-16.128c-5.12-18.944-9.984-41.728-15.104-61.184zM612.437333 753.92L669.525333 563.2h-46.592l-21.504 87.04c-5.376 20.48-9.216 39.936-14.848 60.928h-1.28c-5.376-20.992-9.216-40.448-14.848-60.928L548.693333 563.2h-48.384l57.088 190.72h55.04zM779.093333 563.2l59.136 190.72h-48.128l-11.008-43.776h-56.32l-11.008 43.776h-46.592L724.309333 563.2h54.784z m-27.904 34.304h-1.024c-4.608 19.968-9.728 42.24-14.592 61.184l-4.096 16.128h38.912l-4.096-16.128c-5.12-18.944-9.984-41.728-15.104-61.184z"
              fill="#FFFFFF"
            ></path>
          </svg>
        )}
      />
    </>
  );
};

/**
 * yaml icon
 * @returns {JSX.Element}
 * @constructor
 */
export const YAMLSvg = () => {
  return (
    <>
      <Icon
        style={{ ...IconStyle }}
        component={() => (
          <svg
            className="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M354.40128 0c-87.04 0-157.44 70.55872-157.44 157.59872v275.68128H78.72c-21.6576 0-39.36256 17.69984-39.36256 39.36256v236.31872c0 21.6576 17.69984 39.35744 39.36256 39.35744h118.24128v118.08256c0 87.04 70.4 157.59872 157.44 157.59872h472.63744c87.04 0 157.59872-70.55872 157.59872-157.59872V315.0336c0-41.74848-38.9888-81.93024-107.52-149.27872l-29.11744-29.12256L818.87744 107.52C751.5392 38.9888 711.39328 0 669.59872 0H354.4064z m0 78.72h287.20128c28.35456 7.0912 27.99616 42.1376 27.99616 76.8v120.16128c0 21.6576 17.69984 39.35744 39.36256 39.35744h118.07744c39.38816 0 78.87872-0.0256 78.87872 39.36256v512c0 43.32032-35.55328 78.87872-78.87872 78.87872H354.4064c-43.32544 0-78.72-35.5584-78.72-78.87872v-118.08256h393.91744c21.66272 0 39.36256-17.69472 39.36256-39.35744V472.64256c0-21.66272-17.69984-39.36256-39.36256-39.36256H275.68128V157.59872c0-43.32032 35.39456-78.87872 78.72-78.87872zM261.2736 506.39872h20.16256l65.28 176.64h-23.04l-19.2-54.71744h-65.28l-19.2 54.71744h-23.04l64.31744-176.64z m-181.43744 0.96256h23.99744l40.32 89.27744 41.28256-89.27744h23.99744l-53.76 107.52v68.15744h-22.07744v-67.2l-53.76-108.47744z m290.87744 0h32.64l49.92 143.03744h0.96256l48.95744-143.03744h33.60256v175.67744h-22.08256v-106.55744c0-10.88 0.32256-26.56256 0.96256-47.04256h-0.96256l-52.79744 153.6h-19.2l-52.80256-153.6h-0.95744c1.28 22.4 1.92 38.72256 1.92 48.96256v104.63744h-20.16256V507.36128z m214.08256 0h22.07744v155.52h69.12v20.15744H584.8064V507.36128z m-312.96 23.04c-1.92 8.96-4.80256 18.23744-8.64256 27.83744l-17.28 50.88256h51.84l-18.23744-50.88256c-3.84-10.88-6.4-20.15744-7.68-27.83744z"
              fill="#1890FF"
            ></path>
          </svg>
        )}
      />
    </>
  );
};

/**
 * folder icon
 * @returns {JSX.Element}
 * @constructor
 */
export const FolderSvgExpand = () => {
  return (
    <>
      <Icon
        style={{ ...IconStyle }}
        component={() => (
          <svg
            className="icon"
            viewBox="0 0 1152 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M543.93566 0c75.071953 0 135.935915 59.327963 135.935915 132.607917h386.239759c47.35997 0 85.887946 35.455978 85.887946 79.103951V767.99952H0V0zM1023.99936 255.99984H127.99992v383.99976h895.99944V255.99984z"
              fill="#98C3FF"
            ></path>
            <path
              d="M1151.99928 937.343414V390.399756c0-38.847976-32.31998-70.399956-71.999955-70.399956H71.999955C32.31998 319.9998 0 351.55178 0 390.399756v546.751658C0 985.023384 39.679975 1023.99936 88.831944 1023.99936h974.527391c48.959969 0.192 88.639945-38.783976 88.639945-86.655946z"
              fill="#0E73FF"
            ></path>
          </svg>
        )}
      />
    </>
  );
};

/**
 * folder icon
 * @returns {JSX.Element}
 * @constructor
 */
export const FolderSvgExpanded = () => {
  return (
    <>
      <Icon
        style={{ ...IconStyle }}
        component={() => (
          <svg
            className="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M81.16 540.07333298L0 837.65333298V266.66666698a53.393333 53.393333 0 0 1 53.333333-53.333334h253.413334a52.986667 52.986667 0 0 1 37.713333 15.62l109.253333 109.253334a10.573333 10.573333 0 0 0 7.54 3.126666H842.666667a53.393333 53.393333 0 0 1 53.333333 53.333334v74.666666H173.773333a96.2 96.2 0 0 0-92.613333 70.74z m922-7.113333a52.933333 52.933333 0 0 0-42.386667-20.96H173.773333a53.453333 53.453333 0 0 0-51.453333 39.333333L11.773333 956.66666698a53.333333 53.333333 0 0 0 51.453334 67.333333h787a53.453333 53.453333 0 0 0 51.453333-39.333333l110.546667-405.333334a52.953333 52.953333 0 0 0-9.073334-46.373333z"
              fill="#209BFD"
            ></path>
          </svg>
        )}
      />
    </>
  );
};

/**
 * shell icon
 * @returns {JSX.Element}
 * @constructor
 */
export const ShellSvg = () => {
  return (
    <>
      <Icon
        style={{ ...IconStyle }}
        component={() => (
          <svg
            className="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M144 112h736c17.673 0 32 14.327 32 32v736c0 17.673-14.327 32-32 32H144c-17.673 0-32-14.327-32-32V144c0-17.673 14.327-32 32-32z m112 211.24v72.43a8.81 8.81 0 0 0 3.35 7L386.09 509 259.35 615.37a9.32 9.32 0 0 0-3.35 7v72.43a9.2 9.2 0 0 0 15.15 7L492.7 516.04a9.29 9.29 0 0 0 0-14.2l-221.55-185.6a9.2 9.2 0 0 0-15.15 7zM521.57 624a9.82 9.82 0 0 0-9.57 10v60a9.82 9.82 0 0 0 9.57 10h236.86a9.82 9.82 0 0 0 9.57-10v-60a9.82 9.82 0 0 0-9.57-10H521.57z"
              fill="#000000"
            ></path>
          </svg>
        )}
      />
    </>
  );
};

/**
 * xml icon
 * @returns {JSX.Element}
 * @constructor
 */
export const XMLSvg = () => {
  return (
    <>
      <Icon
        style={{ ...IconStyle }}
        component={() => (
          <svg
            className="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M870.4 1024h-716.8A51.2 51.2 0 0 1 102.4 972.8v-921.6A51.2 51.2 0 0 1 153.6 0h569.685333a42.666667 42.666667 0 0 1 30.037334 12.288l155.989333 155.989333a42.666667 42.666667 0 0 1 12.288 30.037334V972.8a51.2 51.2 0 0 1-51.2 51.2zM153.6 34.133333a17.066667 17.066667 0 0 0-17.066667 17.066667v921.6a17.066667 17.066667 0 0 0 17.066667 17.066667h716.8a17.066667 17.066667 0 0 0 17.066667-17.066667V198.314667a7.168 7.168 0 0 0-2.389334-5.802667l-155.989333-155.989333a7.168 7.168 0 0 0-5.802667-2.389334z"
              fill="#4D4D4D"
            ></path>
            <path
              d="M904.533333 204.8h-170.666666a17.066667 17.066667 0 0 1-17.066667-17.066667v-170.666666h34.133333V170.666667h153.6z"
              fill="#4D4D4D"
            ></path>
            <path
              d="M204.8 170.666667h443.733333v34.133333H204.8zM204.8 307.2h614.4v34.133333H204.8zM204.8 443.733333h614.4v34.133334H204.8zM204.8 580.266667h614.4v34.133333H204.8zM204.8 853.333333h614.4v34.133334H204.8zM204.8 716.8h614.4v34.133333H204.8z"
              fill="#B3B3B3"
            ></path>
            <path
              d="M51.2 460.8m17.066667 0l887.466666 0q17.066667 0 17.066667 17.066667l0 273.066666q0 17.066667-17.066667 17.066667l-887.466666 0q-17.066667 0-17.066667-17.066667l0-273.066666q0-17.066667 17.066667-17.066667Z"
              fill="#4295E5"
            ></path>
            <path
              d="M955.733333 477.866667v273.066666H68.266667v-273.066666h887.466666m0-34.133334H68.266667a34.133333 34.133333 0 0 0-34.133334 34.133334v273.066666a34.133333 34.133333 0 0 0 34.133334 34.133334h887.466666a34.133333 34.133333 0 0 0 34.133334-34.133334v-273.066666a34.133333 34.133333 0 0 0-34.133334-34.133334z"
              fill="#267ACB"
            ></path>
            <path
              d="M308.906667 614.4l-55.637334-84.309333h31.061334l40.96 63.488h2.048l41.642666-63.488h29.354667L341.333333 614.4l55.978667 83.968h-30.72l-41.301333-62.122667-43.690667 62.464H252.586667zM587.776 698.709333V576.853333l-49.493333 117.76h-19.797334L467.626667 576.853333v121.856h-24.576v-168.618666h30.72l53.589333 129.024h2.048L580.266667 530.090667h30.378666v168.618666zM771.413333 698.709333h-105.130666v-168.618666h26.282666v144.384h78.848z"
              fill="#FFFFFF"
            ></path>
          </svg>
        )}
      />
    </>
  );
};

/**
 * markdown icon
 * @returns {JSX.Element}
 * @constructor
 */
export const MarkDownSvg = () => {
  return (
    <>
      <Icon
        style={{ ...IconStyle }}
        component={() => (
          <svg
            className="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326z m1.8 562H232V136h302v216c0 23.2 18.8 42 42 42h216v494zM429 481.2c-1.9-4.4-6.2-7.2-11-7.2h-35c-6.6 0-12 5.4-12 12v272c0 6.6 5.4 12 12 12h27.1c6.6 0 12-5.4 12-12V582.1l66.8 150.2c1.9 4.3 6.2 7.1 11 7.1H524c4.7 0 9-2.8 11-7.1l66.8-150.6V758c0 6.6 5.4 12 12 12H641c6.6 0 12-5.4 12-12V486c0-6.6-5.4-12-12-12h-34.7c-4.8 0-9.1 2.8-11 7.2l-83.1 191-83.2-191z"
              fill="#1296DB"
            ></path>
          </svg>
        )}
      />
    </>
  );
};
export const FlinkSQLSvg = () => (
  <Icon
    style={{ ...IconStyle }}
    component={() => (
      // <svg className="icon" viewBox="0 0 1137 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
      //   <path
      //     d="M764.60758 258.937342l-1.89616 19.340832-2.199546 12.514656 0.834311-0.986003c5.081709-5.840173 10.390957-11.680346 16.458669-17.975597l26.432471-26.091162 2.123699-7.81218c2.995933-10.618496 6.257328-21.123223 9.860033-31.552103l5.460941-15.017588c10.54265-27.115089 23.512385-51.954785 40.691594-76.604866 20.933607-31.097025 62.990437-38.681665 95.869853-16.3449 6.977869 5.460941 12.893888 12.135424 17.217133 19.340833l3.79232 7.432947L1018.996413 212.822729l6.902022 4.095706 8.115565 5.157555c15.510589 10.54265 26.925473 19.720065 36.520043 30.338561 41.715521 42.473985 65.645061 96.780009 67.124066 148.583102 2.389162 71.523157-38.567895 123.515866-97.197164 138.798916l-2.427085 0.493001 6.295251 11.832039c5.423018 11.149421 10.201341 22.753921 14.145354 34.737652l5.840173 20.326836c12.135424 50.58955-6.295251 87.981826-51.310091 99.965558-16.989594 4.930016-35.154807 3.90609-51.461784-2.882163l-31.855489-7.015792 0.796388 7.963872c29.959329 30.148945 27.190935 66.706911 27.987322 91.015682a481.624654 481.624654 0 0 1-6.105635 39.440129c-3.299318 17.899751-7.205408 39.971054-11.642423 66.251833 13.652352 19.037447 27.72186 19.985527 26.356625 56.353877-1.403158 36.330427-49.072622 36.671735-91.660377 40.388209l-10.087572 0.379232-67.806683 0.227539a33.751649 33.751649 0 0 1-6.067713-66.972373l6.067713-0.606771 71.978235-1.327312c-16.155284-17.027517-13.197274-39.060897-6.105635-61.435586 4.702477-14.903818 8.191411-38.871281 10.466803-71.864466 5.423018-17.710135-3.488934-60.790891-21.350762-85.099663-17.823905-24.308772-26.318702-38.378279-26.546241-51.461784-0.303386-13.083504-0.606771-26.432471 7.319178-37.771509 7.888026-11.301114 19.18914-11.528653 35.344424-13.614429 16.155284-2.123699 37.695662 1.744467 54.571486 9.860033l50.855013 17.330902c12.211271 5.612634 17.444672 6.598637 21.388685 5.536788l4.133629-1.365235c1.89616-1.06185 2.199546-2.882163 1.213542-7.963873l-2.654624-11.604499a214.19024 214.19024 0 0 0-19.682141-48.996776l-9.632493-16.079437-9.404954-12.287117-11.680346-14.183278a33.789572 33.789572 0 0 1 32.993185-55.102411c52.902865 12.173348 91.091529-17.141287 89.347062-71.068079-0.986003-34.661806-17.823905-72.812546-48.579621-104.288803a138.647223 138.647223 0 0 0-25.598161-20.85776c-5.68848-3.79232-11.642423-7.243331-17.823904-10.239264a33.827495 33.827495 0 0 1-12.969735-11.376961l-2.882163-5.005862L917.741466 153.548766l-9.632493 14.790048c-6.219405 10.239264-11.680346 20.478529-16.572439 31.097025l-6.826176 16.306977c-6.446944 17.103364-11.983732 34.889345-17.596365 56.505569a33.827495 33.827495 0 0 1-9.253262 15.813975l-11.907885 11.452807c-11.566576 10.846036-22.564305 22.260919-33.031108 34.130881l-6.067712 7.281254-13.27312 10.011725c-14.107431 5.991866-127.801188 66.896527-179.490511 123.591713-20.213066 22.185073-72.281621 106.109117-81.724498 125.905027-11.111498 21.199069-47.138539 22.222996-51.348015 2.351239-4.171552-19.833834-5.916019-72.850469 43.611682-139.936612 40.577825-54.988642 63.369669-63.786824 114.072988-122.719479 22.564305-26.167009 38.529972-52.713249 42.853218-76.301481 4.361168-23.626154 11.073575-79.714569-7.774257-115.969148-58.780962-113.200755-284.727394-101.1791-416.851826-11.301114l1.365236-0.530925 3.033856-0.151693c68.261762 0 103.530339 40.843288 103.530339 103.719955 0 44.294299-10.921882 89.953833-33.941265 152.451268l-13.652353 35.875349-15.624359 38.454125a338.123261 338.123261 0 0 0-26.280778 119.723546 33.827495 33.827495 0 0 1-67.541221-1.972006c1.365235-42.511908 9.4808-84.568738 24.043309-124.501869l7.584641-19.720065 7.963872-19.492525 14.297047-36.178734c23.81577-62.724975 35.534039-107.019273 35.534039-144.639089 0-25.029313-6.143559-34.510113-28.442401-35.951195l-7.243331-0.227539c-73.078008 0.530925-98.676169-97.273011-38.188664-125.336179C378.321854-27.875828 636.54093-34.322772 730.590469 111.18855c26.432471 40.805364 37.961124 90.446835 34.017111 147.710868z m211.839001 63.635131a37.923201 37.923201 0 1 1 0.037923 75.846402 37.923201 37.923201 0 0 1 0-75.846402z"
      //     fill="#D95470"></path>
      //   <path
      //     d="M200.765426 975.230763c19.606295-20.706068 29.428404-46.683461 29.428405-78.008024 0-30.528177-8.418951-53.850946-25.181006-69.968306-10.808112-10.390957-26.77378-18.696138-47.972849-24.87762l-48.314159-14.183277c-18.696138-5.423018-30.869486-10.163418-36.595889-14.183277-8.456874-5.157555-13.652352-15.889821-13.311043-27.418475-0.341309-12.590503 4.816247-24.422541 13.500659-31.172871 9.025722-7.432947 21.0853-11.149421 36.178734-11.149421 13.614429 0 24.953466 2.882163 34.092958 8.608566 13.690276 8.64649 21.047377 23.322769 22.071303 43.95299h56.353877c-1.023926-36.406273-11.983732-64.203979-32.841492-83.355196-20.857761-19.151217-46.114613-28.707863-75.656786-28.707863-35.42027 0-62.269896 10.163418-80.548879 30.414408-18.24106 20.326836-27.418474 45.84915-27.418475 76.529019 0 33.637879 9.4808 58.325883 28.366555 74.139858 11.187344 9.4808 31.362487 18.203137 60.525428 26.280779l29.73179 8.153488c17.406749 4.664554 30.148945 9.973802 38.26451 16.003591 7.736333 5.347171 12.400887 15.472666 12.173348 26.280778 0 19.378756-8.191411 32.613953-24.536312 39.781438-8.64649 3.716474-19.871757 5.536787-33.713725 5.536787-23.133153 0-39.440129-7.015792-48.92093-21.123223-5.195479-7.736333-8.722336-19.454602-10.466803-35.116884H0c0 35.647809 10.466803 63.673055 31.40041 84.037814 20.97153 20.402682 49.679393 30.604023 86.275283 30.604023 35.761579 0 63.445515-10.353034 83.05181-31.097025zM486.55467 1024l30.641946-39.060897-32.34849-36.937198c9.632493-13.007658 16.951671-29.390481 21.881687-49.072622 6.067712-20.592298 9.139491-46.190459 9.139491-76.718636 0-57.643266-14.2212-102.506413-42.625678-134.627364-24.650081-27.72186-55.102411-41.601752-91.394914-41.601751-36.027041 0-66.213909 13.083504-90.408912 39.326359-29.73179 32.083028-44.559761 79.411183-44.559761 142.022388 0 62.156127 14.44874 109.256742 43.422065 141.339771 23.853693 26.66001 54.040562 39.971054 90.598528 39.971054 17.520519 0 32.538107-2.540854 45.128609-7.622564a131.97274 131.97274 0 0 0 26.66001-16.079437L486.55467 1024z m-151.692805-95.794006c-19.833834-20.288913-29.73179-53.888869-29.731789-100.875715 0-40.16067 6.902023-70.271692 20.743991-90.446834 13.841968-20.175143 32.386414-30.224791 55.595413-30.224792 24.76385 0 43.573758 10.504727 56.429723 31.552104 12.893888 20.97153 19.340833 50.70332 19.340832 89.119522 0 16.724132-1.403158 31.40041-4.171552 43.990913-1.820314 8.343104-4.930016 18.089367-9.329107 29.200865l-28.366555-32.993185-30.262714 38.643742 28.328631 32.993185a64.241903 64.241903 0 0 1-32.538106 8.836106c-17.899751 0-33.258647-6.598637-46.07669-19.795911z m385.678955 7.736333h-118.35831v-281.124689h-58.629269v342.711968H720.54082v-61.587279z"
      //     fill="#D95470"></path>
      // </svg>
      <svg
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M688.196267 301.2608l-1.706667 17.408-1.979733 11.264 0.750933-0.887467c4.573867-5.256533 9.352533-10.513067 14.813867-16.1792l23.790933-23.483733 1.911467-7.031467c2.696533-9.557333 5.632-19.012267 8.874666-28.398933l4.9152-13.5168c9.489067-24.405333 21.162667-46.762667 36.625067-68.949333 18.8416-27.989333 56.695467-34.816 86.289067-14.711467 6.280533 4.9152 11.605333 10.922667 15.496533 17.408l3.413333 6.690133L917.162667 259.754667l6.212266 3.6864 7.304534 4.642133c13.960533 9.489067 24.234667 17.749333 32.8704 27.306667 37.546667 38.229333 59.0848 87.108267 60.416 133.7344 2.1504 64.375467-34.7136 111.172267-87.483734 124.928l-2.184533 0.443733 5.666133 10.6496c4.881067 10.0352 9.181867 20.48 12.731734 31.266133l5.256533 18.295467c10.922667 45.533867-5.666133 79.189333-46.1824 89.975467-15.291733 4.437333-31.6416 3.515733-46.318933-2.594134l-28.672-6.314666 0.7168 7.168c26.965333 27.136 24.4736 60.040533 25.1904 81.92a433.493333 433.493333 0 0 1-5.495467 35.498666c-2.9696 16.110933-6.485333 35.976533-10.478933 59.630934 12.288 17.134933 24.951467 17.988267 23.722666 50.722133-1.262933 32.699733-44.168533 33.006933-82.500266 36.352l-9.079467 0.341333-61.0304 0.2048a30.378667 30.378667 0 0 1-5.461333-60.279466l5.461333-0.546134 64.785067-1.194666c-14.5408-15.325867-11.8784-35.157333-5.495467-55.296 4.232533-13.4144 7.3728-34.986667 9.4208-64.682667 4.881067-15.940267-3.140267-54.715733-19.217067-76.5952-16.042667-21.879467-23.688533-34.542933-23.893333-46.318933-0.273067-11.776-0.546133-23.790933 6.587733-33.9968 7.099733-10.171733 17.271467-10.376533 31.812267-12.253867 14.5408-1.911467 33.928533 1.570133 49.117867 8.874667l45.7728 15.598933c10.990933 5.051733 15.701333 5.9392 19.2512 4.983467l3.720533-1.2288c1.706667-0.955733 1.979733-2.594133 1.092267-7.168l-2.389334-10.4448a192.785067 192.785067 0 0 0-17.7152-44.100267l-8.669866-14.472533-8.465067-11.0592-10.513067-12.765867a30.4128 30.4128 0 0 1 29.696-49.595733c47.616 10.9568 81.988267-15.428267 80.418134-63.965867-0.887467-31.197867-16.042667-65.536-43.7248-93.866667a124.791467 124.791467 0 0 0-23.04-18.773333c-5.12-3.413333-10.478933-6.519467-16.042667-9.216a30.446933 30.446933 0 0 1-11.6736-10.24l-2.594133-4.5056L826.026667 206.404267l-8.669867 13.312c-5.597867 9.216-10.513067 18.432-14.916267 27.989333l-6.144 14.677333c-5.802667 15.394133-10.786133 31.402667-15.837866 50.858667a30.446933 30.446933 0 0 1-8.328534 14.2336l-10.717866 10.308267c-10.410667 9.762133-20.309333 20.036267-29.730134 30.72l-5.461333 6.5536-11.946667 9.0112c-12.6976 5.393067-115.029333 60.2112-161.553066 111.240533-18.193067 19.968-65.058133 95.505067-73.557334 113.322667-10.001067 19.080533-42.427733 20.002133-46.216533 2.116266-3.754667-17.851733-5.3248-65.570133 39.253333-125.952 36.522667-49.493333 57.0368-57.412267 102.673067-110.455466 20.309333-23.552 34.679467-47.445333 38.570667-68.676267 3.925333-21.265067 9.966933-71.748267-6.997334-104.379733-52.906667-101.888-256.273067-91.067733-375.1936-10.171734l1.2288-0.477866 2.730667-0.136534c61.44 0 93.184 36.7616 93.184 93.354667 0 39.867733-9.8304 80.964267-30.549333 137.216l-12.288 32.290133-14.062934 34.6112a304.3328 304.3328 0 0 0-23.6544 107.758934 30.446933 30.446933 0 0 1-60.791466-1.774934c1.2288-38.263467 8.533333-76.117333 21.640533-112.059733l6.826667-17.749333 7.168-17.544534 12.868266-32.5632c21.435733-56.456533 31.982933-96.324267 31.982934-130.184533 0-22.528-5.5296-31.061333-25.6-32.3584l-6.519467-0.2048c-65.774933 0.477867-88.814933-87.552-34.372267-112.810667 139.434667-95.368533 371.848533-101.1712 456.4992 29.832534 23.790933 36.727467 34.167467 81.408 30.6176 132.949333z m190.6688 57.275733a34.133333 34.133333 0 1 1 0.034133 68.266667 34.133333 34.133333 0 0 1 0-68.266667z"
          fill="#FF6A00"
          p-id="2688"
        ></path>
        <path
          d="M180.701867 945.9712c17.646933-18.6368 26.487467-42.018133 26.487466-70.212267 0-27.477333-7.5776-48.469333-22.664533-62.976-9.728-9.352533-24.098133-16.827733-43.178667-22.391466l-43.485866-12.765867c-16.827733-4.881067-27.784533-9.147733-32.938667-12.765867-7.611733-4.642133-12.288-14.301867-11.9808-24.6784-0.3072-11.332267 4.334933-21.981867 12.151467-28.0576 8.123733-6.690133 18.978133-10.0352 32.5632-10.0352 12.253867 0 22.459733 2.594133 30.685866 7.748267 12.322133 7.7824 18.944 20.992 19.8656 39.560533h50.722134c-0.9216-32.768-10.786133-57.787733-29.559467-75.025066-18.773333-17.237333-41.506133-25.838933-68.096-25.838934-31.880533 0-56.046933 9.147733-72.4992 27.374934-16.418133 18.295467-24.6784 41.2672-24.6784 68.881066 0 30.276267 8.533333 52.497067 25.531733 66.730667 10.069333 8.533333 28.228267 16.384 54.4768 23.6544l26.760534 7.338667c15.6672 4.1984 27.136 8.977067 34.440533 14.404266 6.9632 4.8128 11.1616 13.9264 10.9568 23.6544 0 17.442133-7.3728 29.354667-22.084267 35.805867-7.7824 3.345067-17.885867 4.983467-30.344533 4.983467-20.821333 0-35.498667-6.314667-44.032-19.012267-4.676267-6.9632-7.850667-17.5104-9.4208-31.607467H0c0 32.085333 9.4208 57.309867 28.2624 75.639467 18.875733 18.363733 44.714667 27.5456 77.653333 27.5456 32.187733 0 57.105067-9.3184 74.752-27.989333zM437.930667 989.866667l27.579733-35.157334-29.115733-33.245866c8.669867-11.707733 15.2576-26.453333 19.694933-44.168534 5.461333-18.5344 8.226133-41.5744 8.226133-69.051733 0-51.882667-12.8-92.2624-38.365866-121.173333-22.186667-24.951467-49.595733-37.444267-82.261334-37.444267-32.426667 0-59.5968 11.776-81.373866 35.396267-26.760533 28.8768-40.106667 71.4752-40.106667 127.829333 0 55.944533 13.0048 98.338133 39.082667 127.214933 21.469867 23.995733 48.64 35.976533 81.544533 35.976534 15.7696 0 29.2864-2.286933 40.618667-6.8608a118.784 118.784 0 0 0 23.995733-14.472534L437.930667 989.866667z m-136.533334-86.2208c-17.851733-18.261333-26.760533-48.503467-26.760533-90.794667 0-36.1472 6.212267-63.249067 18.670933-81.408 12.458667-18.158933 29.149867-27.204267 50.039467-27.204267 22.289067 0 39.2192 9.454933 50.7904 28.398934 11.605333 18.875733 17.408 45.636267 17.408 80.213333 0 15.0528-1.262933 28.2624-3.754667 39.594667-1.6384 7.509333-4.437333 16.2816-8.3968 26.282666l-25.531733-29.696-27.2384 34.781867 25.4976 29.696a57.821867 57.821867 0 0 1-29.2864 7.953067c-16.110933 0-29.934933-5.9392-41.472-17.8176z m347.136 6.9632h-106.530133v-253.0304h-52.770133v308.462933H648.533333v-55.432533z"
          fill="#FF6A00"
          p-id="2689"
        ></path>
      </svg>
    )}
  />
);
export const FlinkSQLEnvSvg = () => (
  <Icon
    style={{ ...IconStyle }}
    component={() => (
      <svg
        className="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M662.235 337.091l-1.219 12.434-1.414 8.046 0.537-0.634c3.267-3.755 6.68-7.51 10.581-11.556l16.994-16.775 1.365-5.022a368.45 368.45 0 0 1 6.339-20.285l3.51-9.655c6.779-17.432 15.117-33.402 26.162-49.25 13.458-19.992 40.496-24.868 61.635-10.508 4.486 3.511 8.29 7.802 11.069 12.435l2.438 4.778 25.526 56.345 4.438 2.633 5.217 3.316c9.972 6.778 17.31 12.678 23.48 19.505 26.818 27.306 42.203 62.22 43.153 95.524 1.536 45.983-24.795 79.409-62.488 89.234l-1.56 0.317 4.047 7.607c3.486 7.168 6.558 14.629 9.094 22.333l3.755 13.068c7.802 32.525-4.048 56.564-32.988 64.269a49.917 49.917 0 0 1-33.085-1.853l-20.48-4.51 0.512 5.12c19.261 19.382 17.481 42.885 17.993 58.513a309.638 309.638 0 0 1-3.925 25.357c-2.121 11.507-4.632 25.697-7.485 42.593 8.777 12.24 17.823 12.849 16.945 36.23-0.902 23.357-31.549 23.577-58.929 25.966l-6.485 0.244-43.593 0.146a21.699 21.699 0 0 1-3.901-43.057l3.9-0.39 46.276-0.853c-10.387-10.947-8.485-25.113-3.926-39.497 3.024-9.582 5.267-24.99 6.73-46.202 3.486-11.386-2.243-39.083-13.727-54.711-11.459-15.628-16.92-24.674-17.067-33.085-0.195-8.411-0.39-16.994 4.706-24.283 5.071-7.266 12.337-7.412 22.723-8.753 10.386-1.366 24.235 1.121 35.084 6.339l32.695 11.142c7.85 3.608 11.215 4.242 13.75 3.56l2.658-0.878c1.22-0.683 1.415-1.853 0.78-5.12l-1.706-7.46a137.704 137.704 0 0 0-12.654-31.501l-6.193-10.337-6.046-7.9-7.51-9.118a21.723 21.723 0 0 1 21.212-35.426c34.012 7.826 58.563-11.02 57.442-45.69-0.634-22.284-11.46-46.811-31.232-67.047a89.137 89.137 0 0 0-16.458-13.41 96.84 96.84 0 0 0-11.459-6.583 21.748 21.748 0 0 1-8.338-7.314l-1.853-3.218-28.55-62.928-6.193 9.509a197.302 197.302 0 0 0-10.654 19.992l-4.389 10.484c-4.144 10.996-7.704 22.43-11.312 36.328a21.748 21.748 0 0 1-5.95 10.167l-7.655 7.363c-7.436 6.973-14.507 14.311-21.236 21.943l-3.9 4.68-8.534 6.437c-9.07 3.852-82.164 43.008-115.395 79.458-12.995 14.263-46.47 68.218-52.541 80.945-7.144 13.628-30.306 14.287-33.012 1.511-2.682-12.751-3.803-46.836 28.038-89.966 26.088-35.352 40.74-41.008 73.338-78.896 14.507-16.823 24.771-33.89 27.55-49.055 2.804-15.19 7.12-51.249-4.998-74.557-37.79-72.777-183.052-65.048-267.995-7.265l0.878-0.342 1.95-0.097c43.886 0 66.56 26.258 66.56 66.682 0 28.477-7.022 57.831-21.82 98.011l-8.778 23.065-10.045 24.722a217.38 217.38 0 0 0-16.896 76.97 21.748 21.748 0 0 1-43.422-1.267 257.867 257.867 0 0 1 15.457-80.043l4.876-12.678 5.12-12.532 9.192-23.26c15.311-40.325 22.845-68.802 22.845-92.988 0-16.092-3.95-22.187-18.286-23.113l-4.657-0.147c-46.982 0.342-63.439-62.537-24.551-80.579 99.596-68.12 265.606-72.265 326.07 21.31 16.994 26.233 24.406 58.148 21.87 94.963z m136.192 40.911a24.381 24.381 0 1 1 0.025 48.762 24.381 24.381 0 0 1 0-48.762z"
          fill="#D95470"
          p-id="12583"
        ></path>
        <path
          d="M299.74 797.598c12.604-13.312 18.919-30.012 18.919-50.151 0-19.627-5.413-34.621-16.189-44.983-6.948-6.68-17.213-12.02-30.842-15.994l-31.061-9.118c-12.02-3.487-19.846-6.534-23.528-9.119-5.437-3.316-8.777-10.215-8.557-17.627-0.22-8.095 3.096-15.702 8.68-20.041 5.802-4.78 13.555-7.168 23.259-7.168 8.752 0 16.042 1.853 21.918 5.534 8.802 5.559 13.531 14.994 14.19 28.258h36.23c-0.658-23.406-7.705-41.277-21.114-53.59-13.41-12.312-29.647-18.456-48.64-18.456-22.772 0-40.034 6.534-51.785 19.553-11.727 13.069-17.628 29.477-17.628 49.201 0 21.626 6.096 37.498 18.237 47.665 7.193 6.095 20.163 11.703 38.912 16.896l19.115 5.242c11.19 2.999 19.383 6.412 24.6 10.289 4.974 3.437 7.973 9.947 7.827 16.896 0 12.458-5.267 20.967-15.775 25.575-5.559 2.39-12.775 3.56-21.674 3.56-14.873 0-25.357-4.51-31.452-13.58-3.34-4.974-5.608-12.508-6.729-22.577h-35.986c0 22.918 6.729 40.935 20.187 54.028 13.483 13.117 31.94 19.675 55.467 19.675 22.991 0 40.79-6.656 53.394-19.992z m183.734 31.354l19.7-25.112-20.797-23.747c6.193-8.363 10.898-18.895 14.068-31.549 3.9-13.239 5.876-29.696 5.876-49.323 0-37.059-9.143-65.901-27.404-86.552-15.848-17.823-35.426-26.746-58.759-26.746-23.161 0-42.569 8.411-58.124 25.283-19.114 20.626-28.647 51.054-28.647 91.307 0 39.96 9.289 70.241 27.916 90.868 15.335 17.14 34.743 25.697 58.246 25.697 11.264 0 20.919-1.633 29.013-4.9a84.846 84.846 0 0 0 17.14-10.338l21.772 25.112z m-97.524-61.586c-12.75-13.044-19.114-34.645-19.114-64.853 0-25.82 4.437-45.178 13.336-58.149 8.9-12.97 20.822-19.431 35.743-19.431 15.92 0 28.013 6.753 36.279 20.285 8.289 13.482 12.434 32.597 12.434 57.295 0 10.752-0.902 20.187-2.682 28.282-1.17 5.363-3.17 11.63-5.998 18.773l-18.237-21.211-19.456 24.844 18.213 21.211a41.301 41.301 0 0 1-20.919 5.681c-11.508 0-21.382-4.242-29.623-12.727z m247.955 4.974h-76.093V591.604h-37.693v220.33h113.786V772.34z"
          fill="#D95470"
          p-id="12584"
        ></path>
        <path
          d="M512 0c282.77 0 512 229.23 512 512s-229.23 512-512 512S0 794.77 0 512 229.23 0 512 0z m0 48.762C256.17 48.762 48.762 256.17 48.762 512S256.17 975.238 512 975.238 975.238 767.83 975.238 512 767.83 48.762 512 48.762z"
          fill="#D95470"
          p-id="12585"
        ></path>
      </svg>
    )}
  />
);

export const LogSvg = () => {
  return (
    <>
      <Icon
        style={{ ...IconStyle }}
        component={() => (
          <svg
            className="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M704 64c35.328 0 64 28.672 64 64v321.7408A288 288 0 0 0 496.5376 896H128c-35.328 0-64-28.672-64-64V128c0-35.328 28.672-64 64-64h576zM480 384h-256a32 32 0 0 0-31.488 26.2656l-0.512 5.7344v32c0 15.7184 11.3152 28.7744 26.2656 31.488l5.7344 0.512h256a32 32 0 0 0 31.488-26.2656L512 448v-32a32 32 0 0 0-26.2656-31.488l-5.7344-0.512z m128-192h-384a32 32 0 0 0-31.488 26.2656l-0.512 5.7344V256c0 15.7184 11.3152 28.7744 26.2656 31.488l5.7344 0.512h384a32 32 0 0 0 31.488-26.2656L640 256v-32a32 32 0 0 0-26.2656-31.488l-5.7344-0.512z"
              fill="#007AF5"
            ></path>
            <path
              d="M736 512a224 224 0 1 1 0 448 224 224 0 0 1 0-448z m0 80.0256a32 32 0 0 0-31.488 26.2144l-0.512 5.7856v128l0.512 5.7344a32.0512 32.0512 0 0 0 25.7536 25.7024l5.7344 0.512h128l5.7344-0.512a32.0512 32.0512 0 0 0 25.7536-25.7024l0.512-5.7856-0.512-5.7344a32.0512 32.0512 0 0 0-25.7536-25.7024l-5.7344-0.512H768v-96.0512l-0.512-5.7344a32 32 0 0 0-31.488-26.2144z"
              fill="#66AFF9"
            ></path>
          </svg>
        )}
      />
    </>
  );
};

export const ScalaSvg = () => {
  return (
    <>
      <Icon
        style={{ ...IconStyle }}
        component={() => (
          <svg
            className="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M213.844 203.564l596.4-87.928v197.952l-596.4 87.928zM213.788 457.312l596.4-87.928v197.952l-596.4 87.928zM213.768 710.4l596.392-87.932v197.952L213.768 908.348z"
              fill="#F44336"
            ></path>
            <path
              d="M225.12 366.636l382.416 123.684-11.328 35.028-382.416-123.684zM427.76 245.496l382.416 123.688-11.328 35.028-382.416-123.688zM225.112 620.148l382.416 123.684-11.328 35.032-382.416-123.688zM427.792 498.604l382.416 123.688-11.332 35.028-382.412-123.688z"
              fill="#F44336"
            ></path>
          </svg>
        )}
      />
    </>
  );
};

export const PythonSvg = () => {
  return (
    <>
      <Icon
        style={{ ...IconStyle }}
        component={() => (
          <svg
            className="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M366.635375 495.627875c8.93024999-1.488375 17.8605-2.480625 26.79075-2.48062499h-7.44187499 241.61287499c10.418625 0 20.341125-1.488375 30.26362501-3.969 44.65124999-12.403125 77.3955-52.093125 77.3955-101.20950002V185.053625c0-57.5505-49.116375-101.2095-107.65912501-110.63587501-37.209375-5.9535-91.287-8.93024999-128.00025-8.93024999-36.71325001 0-71.938125 3.472875-103.194 8.93024999C305.115875 90.29374999 288.74374999 123.534125 288.74374999 185.053625v66.48075h223.25625001V288.74374999H216.3095C133.456625 288.74374999 65.983625 387.96874999 65.4875 510.0155v1.9845c0 22.325625 1.9845 43.659 6.449625 63.504C90.29374999 667.78325001 147.84424999 735.25625001 216.3095 735.25625001h35.224875v-106.66687501c0-62.51174999 46.63574999-120.558375 115.101-132.9615z m23.814-283.7835c-22.325625 0-40.68225001-18.356625-40.18612499-40.68225 0-22.325625 17.8605-40.68225001 40.18612499-40.68225s40.68225001 18.356625 40.68225 40.68225c-0.496125 22.82175001-18.356625 40.68225001-40.68225 40.68225z"
              fill="#0075AA"
            ></path>
            <path
              d="M949.086125 434.108375C927.75275001 349.271 872.682875 288.74374999 807.6905 288.74374999h-35.224875v94.75987501c0 78.883875-51.597 135.93825001-115.101 145.86075-6.449625 0.99224999-12.89925001 1.488375-19.34887499 1.48837501H396.402875c-10.418625 0-20.341125 1.488375-30.26362499 3.969-44.65124999 11.907-77.3955 48.62025001-77.3955 96.74437499V834.48125001c0 57.5505 58.046625 91.783125 115.10099998 108.15524999 67.969125 19.845 142.387875 23.317875 224.24850002 0 54.077625-15.379875 107.163-46.63574999 107.16299998-108.15525001v-61.5195h-223.25624999V735.25625001h295.6905c58.54275001 0 109.643625-49.6125 134.449875-122.04675001 10.418625-30.263625 16.372125-64.49625001 16.372125-101.2095 0-27.286875-3.472875-53.5815-9.426375-77.891625z m-316.52775 372.58987501c22.325625 0 40.186125 18.356625 40.186125 40.68224999 0 22.325625-18.356625 40.68225001-40.186125 40.68225001-22.325625 0-40.68225001-18.356625-40.68225-40.68225001 0.496125-22.325625 18.356625-40.68225001 40.68225-40.68225001z"
              fill="#FFD400"
            ></path>
          </svg>
        )}
      />
    </>
  );
};
