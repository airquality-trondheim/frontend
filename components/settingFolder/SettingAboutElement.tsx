import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Row, View } from 'native-base';
import { DARKGRAY } from '../../constants/Colors';

type settingAboutType = {
  aboutHeader: string;
  aboutDesc: string;
};

const SettingAboutElement = ({ aboutHeader, aboutDesc }: settingAboutType) => {
  return (
    <View style={styles.aboutView}>
      <Row>
        <Text style={styles.aboutHeader}>{aboutHeader}</Text>
      </Row>
      <Row>
        <Text style={styles.aboutText}>{aboutDesc}</Text>
      </Row>
    </View>
  );
};

export default SettingAboutElement;

const styles = StyleSheet.create({
  aboutView: {
    marginLeft: 20,
    marginRight: 15,
    marginBottom: 20,
    paddingTop: 10,
  },
  aboutHeader: {
    fontSize: 22,
  },
  aboutText: {
    fontSize: 18,
    color: DARKGRAY,
  },
});
