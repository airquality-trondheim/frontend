import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SettingViewElement from './SettingViewElement';

type SettingViewType = {
  viewHeader: string;
  settingArray: Array<any>;
};

const SettingView = ({ viewHeader, settingArray }: SettingViewType) => {
  return (
    <View style={styles.settingsView}>
      <Text style={styles.viewHeader}>{viewHeader}</Text>
      {settingArray.map(createSettingElement)}
    </View>
  );
};

type settingArrayObject = {
  id: number;
  name: string;
  desc: string;
  useOfToggle: boolean;
  navigateTo?: any;
};

const createSettingElement = (arrayObject: settingArrayObject) => {
  return (
    <SettingViewElement
      key={arrayObject.id}
      elementName={arrayObject.name}
      elementDesc={arrayObject.desc}
      elementTrigger={arrayObject.useOfToggle}
      elementNavigator={arrayObject.navigateTo}
    />
  );
};

export default SettingView;

const styles = StyleSheet.create({
  settingsView: {
    paddingBottom: 30,
  },
  viewHeader: {
    fontSize: 20,
    paddingBottom: 10,
  },
});
