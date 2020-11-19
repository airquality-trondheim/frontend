import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import SettingView from '../components/settingFolder/SettingView';
import settingArray from '../constants/SettingArray';

function SettingsPage() {
  return (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      {settingArray.map(createSettingView)}
    </ScrollView>
  );
}

type settingObjectType = {
  keyID: number;
  viewName: string;
  viewArray: Array<any>;
};

const createSettingView = (settingObject: settingObjectType) => {
  return (
    <SettingView
      key={settingObject.keyID}
      viewHeader={settingObject.viewName}
      settingArray={settingObject.viewArray}
    />
  );
};

export default SettingsPage;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 12,
  },
});
