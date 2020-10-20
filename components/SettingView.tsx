import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import SettingViewElement from './SettingViewElement';

type SettingViewType = {
  viewHeader: string;
  settingArray: Array<any>;
};

const SettingView = ({ viewHeader, settingArray }: SettingViewType) => {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.settingsView}>
      <Text style={[styles.viewHeader, { color: Colors[colorScheme].text }]}>
        {viewHeader}
      </Text>
      {settingArray.map(createSettingElement)}
    </View>
  );
};

type settingArrayObject = {
  id: number;
  name: string;
  desc: string;
  useOfToggle: boolean;
};

const createSettingElement = (arrayObject: settingArrayObject) => {
  return (
    <SettingViewElement
      key={arrayObject.id}
      elementName={arrayObject.name}
      elementDesc={arrayObject.desc}
      elementTrigger={arrayObject.useOfToggle}
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
