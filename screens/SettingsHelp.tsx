import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import settingHelpArray from '../constants/SettingHelpArray';
import HelpElement from '../components/settingFolder/HelpElement';

function SettingsHelp() {
  return (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      {settingHelpArray.map(createHelpElement)}
    </ScrollView>
  );
}

type helpElementType = {
  id: number;
  question: string;
  answer: string;
};

const createHelpElement = (helpElement: helpElementType) => {
  return (
    <HelpElement
      key={helpElement.id}
      question={helpElement.question}
      answer={helpElement.answer}
    />
  );
};

export default SettingsHelp;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginTop: 30,
    marginHorizontal: 12,
  },
});
