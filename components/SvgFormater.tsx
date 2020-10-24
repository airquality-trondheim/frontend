import React from 'react';
import { SvgXml } from 'react-native-svg';

interface svgInterface {xml:string};

const SVG = ({xml}:svgInterface) => {
  return <SvgXml xml={xml} width="100%" height="100%" />
};

export default SVG;
