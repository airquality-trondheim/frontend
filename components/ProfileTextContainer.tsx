import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { BACKGROUNDCOLOR2 } from "../constants/Colors";
import { height, width } from '../constants/Layout';

interface profileTextContainerInterface {
  text: string,
  outerWidth?: number,
}


const ProfileTextContainer = ({
  text, 
  outerWidth = width*0.8,
}: profileTextContainerInterface) => {  

  return (
    <View style={[styles.colouredBorder, {width:outerWidth}]}>
      <View style={styles.iconSphere}/>
        <Text style={styles.textFormat}>{text}</Text>
    </View>
  );
};

export {ProfileTextContainer};

const styles = StyleSheet.create({

  colouredBorder: {
    borderWidth:width*0.01, 
    borderRadius:width*0.05, 
    borderColor:BACKGROUNDCOLOR2, 
    backgroundColor: 'white',
    height:height*0.05,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: height*0.01,
  },

  iconSphere: {
    width: width*0.05,
    height: width*0.05,
    backgroundColor: BACKGROUNDCOLOR2,
    borderRadius: width*0.05,
    marginHorizontal: width*0.02
  },

  textFormat: {
    marginLeft: width*0.04,
    fontSize: 18,
    fontWeight: 'bold',
  },

});