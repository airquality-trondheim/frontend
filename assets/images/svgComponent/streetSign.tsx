import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
  <svg id="Capa_1" enable-background="new 0 0 479.058 479.058" height="512" viewBox="0 0 479.058 479.058" width="512" xmlns="http://www.w3.org/2000/svg">

  <g>
    <path d="m311.21 432.901c0-30.491-24.718-55.209-55.209-55.209-30.491 0-55.209 24.718-55.209 55.209v49.099h-44.792v30h200v-30h-44.79z" fill="#51acdf"/>
    <path d="m422.667 55h-263.334v60h263.334l30-30z" fill="#51acdf"/>
    <path d="m352.667 205h-263.334l-30 30 30 30h263.334z" fill="#51acdf"/>
    <path d="m224.848 145h62.303v30h-62.303z" fill="#51acdf"/>
    <path d="m256 347.691c10.993 0 21.495 2.115 31.152 5.923v-58.614h-62.303v58.614c9.656-3.807 20.158-5.923 31.151-5.923z" fill="#51acdf"/>
    <path d="m224.848 0h62.303v25h-62.303z" fill="#51acdf"/>
  </g>

  </svg>
`;

export default () => <SvgXml xml={xml} width="100%" height="100%" />;