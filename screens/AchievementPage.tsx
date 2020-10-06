import React from 'react';
import { View, StyleSheet } from 'react-native';
import InfoCard from '../components/InfoCard';
import AchievementCarousel from '../components/AchievementCarousel';

function AchievementPage() {
  return (
    <View style={styles.screenStyle}>
      <AchievementCarousel />
    </View>
  );
}

export default AchievementPage;

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
