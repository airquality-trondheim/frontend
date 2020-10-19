import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import SettingView from '../components/settingFolder/SettingView';
import settingArray from '../constants/SettingArray';
import useColorScheme from '../hooks/useColorScheme';

function SettingsPage() {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {settingArray.map(createSettingView)}
      </ScrollView>
    </SafeAreaView>
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
  container: {
    flex: 1,
    marginTop: 30,
  },
  scrollView: {
    marginHorizontal: 12,
  },
});
