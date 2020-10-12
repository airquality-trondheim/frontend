import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AchievementCard, { AchievementCardProps } from './AchievementCard';
import { width, height } from '../constants/Layout';
import { ScrollView } from 'react-native-gesture-handler';
import {
  BACKGROUNDCOLOR1,
  BACKGROUNDCOLOR3,
  BACKGROUNDCOLOR4,
} from '../constants/Colors';
import { AchievementFormat } from './AchievementFormat';
import { AchievementCardElement } from '../types/_types';
import { useState } from 'react';

interface accumulatorInterface {
  [key: string]: AchievementCardElement[];
}

const AchievementFormatShell = (dataSet: AchievementCardProps) => {
  let accumulator: accumulatorInterface = {};

  let recentAchievements = dataSet.AchievementCardData.sort((a, b) => {
    return a.Date > b.Date ? 1 : -1;
  });

  let data = dataSet.AchievementCardData.reduce((r, a) => {
    r[a.achievementGroup] = [...(r[a.achievementGroup] || []), a];
    return r;
  }, accumulator);

  let arrayData = Object.keys(data).map((keys) => data[keys]);

  return (
    <View style={styles.outerView}>
      <ScrollView
        contentContainerStyle={{
          backgroundColor: BACKGROUNDCOLOR3,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View>
          <Text style={styles.TextFormat}>Nylig oppnåde bragder</Text>
        </View>
        <View
          style={{
            justifyContent: 'flex-start',
            flexDirection: 'row',
            marginHorizontal: 40,
          }}
        >
          {recentAchievements.slice(0, 3).map((data, index) => {
            return AchievementFormat(data, index);
          })}
        </View>
        {arrayData.map((dato, index) => {
          return (
            <View
              key={index}
              style={{ justifyContent: 'center', alignItems: 'center' }}
            >
              <View
                style={{
                  backgroundColor: BACKGROUNDCOLOR1,
                  borderRadius: 20,
                  width: width * 0.8,
                  height: width * 0.02,
                  marginHorizontal: 40,
                }}
              />
              <View style={{ alignItems: 'center' }}>
                <Text style={styles.TextFormat}>
                  {dato[0].achievementGroup}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'flex-start',
                  width: width * 0.82,
                }}
              >
                {dato.map((data, index) => {
                  return AchievementFormat(data, index);
                })}
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export { AchievementFormatShell };

const styles = StyleSheet.create({
  TextFormat: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 50,
    color: 'black',
  },
  outerView: {
    justifyContent: 'center',
    alignContent: 'center',
    width: width,
    color: BACKGROUNDCOLOR3,
  },
});
