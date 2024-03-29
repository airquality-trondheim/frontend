import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { INFOBUTTON } from '../constants/Colors';

function InfoButton(props: TouchableOpacityProps) {
  return (
    <TouchableOpacity style={styles.infoButton} {...props}>
      <FontAwesome name="info" size={24} color={INFOBUTTON} />
    </TouchableOpacity>
  );
}

export default InfoButton;

const styles = StyleSheet.create({
  infoButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 50,
    borderColor: INFOBUTTON,
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 99,
  },
});
