import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import SettingView from '../components/SettingView';
import Colors from '../constants/Colors';
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
        <Text
          style={[styles.settingsHeader, { color: Colors[colorScheme].text }]}
        >
          Innstillinger
        </Text>
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
    marginTop: 20,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  settingsHeader: {
    fontSize: 36,
    paddingBottom: 20,
  },
});
