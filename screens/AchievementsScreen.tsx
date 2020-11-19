import React from 'react';
import { View, StyleSheet } from 'react-native';
import AchievementFormatShell from '../components/achievements/AchievementFormatShell';

const AchievementScreen = () => {
  return (
    <View style={styles.centerContent}>
      <AchievementFormatShell />
    </View>
  );
};

export default AchievementScreen;

const styles = StyleSheet.create({
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flex: 1,
  },
});
