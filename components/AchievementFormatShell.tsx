import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AchievementCard, { AchievementCardProps } from './AchievementCard';
import { width, height } from '../constants/Layout';
import { ScrollView } from 'react-native-gesture-handler';
import { BACKGROUNDCOLOR2, BACKGROUNDCOLOR3 } from '../constants/Colors';
import { AchievementFormat } from './AchievementFormat';
import { AchievementCardElement } from '../types/_types';
import { useState } from 'react';

interface accumulatorInterface {
  [key: string]: AchievementCardElement[];
}

const AchievementFormatShell = (dataSet: AchievementCardProps) => {
  let accumulator: accumulatorInterface = {};

  let data = dataSet.AchievementCardData.reduce((r, a) => {
    r[a.achievementGroup] = [...(r[a.achievementGroup] || []), a];
    return r;
  }, accumulator);

  return (
    <View style={styles.outerView}>
      <ScrollView style={{ backgroundColor: BACKGROUNDCOLOR3 }}>
        {Object.keys(data).map((keys) =>
          data[keys].map((data, index) => {
            return AchievementFormat(data, index);
          }),
        )}
      </ScrollView>
    </View>
  );
};

export { AchievementFormatShell };

const styles = StyleSheet.create({
  outerView: {
    justifyContent: 'center',
    alignContent: 'center',
    width: 0.9 * width,
    color: BACKGROUNDCOLOR3,
  },
});
