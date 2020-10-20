import { View } from 'native-base';
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { DARKGRAY } from '../../constants/Colors';

type privacyElementType = {
  header: string;
  desc: string;
};

const PrivacyElement = ({ header, desc }: privacyElementType) => {
  return (
    <View>
      <Text style={styles.privacyElementHeader}>{header}</Text>
      <Text style={styles.privacyElementDesc}>{desc}</Text>
    </View>
  );
};

export default PrivacyElement;

const styles = StyleSheet.create({
  privacyElementHeader: {
    fontSize: 22,
    marginLeft: 20,
    paddingBottom: 5,
  },
  privacyElementDesc: {
    fontSize: 16,
    marginLeft: 20,
    marginRight: 20,
    paddingBottom: 25,
    color: DARKGRAY,
  },
});
