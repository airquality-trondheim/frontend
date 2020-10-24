import { Button } from 'native-base';
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { CLOSEBUTTON, WHITE } from '../constants/Colors';

function CloseButton(props: { onPress: () => void }) {
  return (
    <Button style={styles.button} onPress={props.onPress}>
      <Text style={styles.buttonText}>Lukk</Text>
    </Button>
  );
}

export default CloseButton;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    backgroundColor: CLOSEBUTTON,
    borderRadius: 30,
    padding: 10,
    width: 80,
    height: 40,
    elevation: 2,
    alignSelf: 'center',
  },
  buttonText: {
    color: WHITE,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
