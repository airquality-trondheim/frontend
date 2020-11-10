import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AchievementCardProps } from './AchievementCard';
import { width } from '../../constants/Layout';
import { ScrollView } from 'react-native-gesture-handler';
import { SEPERATOR, BLACK, WHITE } from '../../constants/Colors';
import { AchievementFormat } from './AchievementFormat';
import { AchievementCardElement } from '../../types/_types';

type accumulatorInterface = {
  [key: string]: AchievementCardElement[];
};

const AchievementFormatShell = (dataSet: AchievementCardProps) => {
  let accumulator: accumulatorInterface = {};

  // Groups achievement data. Returns an object (dictionary) with group names as keys,
  // and lists with the correct elements as values.
  // a: currentElement
  // r: temporary dictionary
  let groupDictionary = dataSet.AchievementCardData.reduce((r, a) => {
    r[a.achievementGroup] = [...(r[a.achievementGroup] || []), a];
    return r;
  }, accumulator);

  //returns the grouped elements as an array of arrays
  let groupArray = Object.keys(groupDictionary).map(
    (keys) => groupDictionary[keys],
  );

  //sorts the groups by their number, specified at character 7 in groupname
  //a and b are the two elements being compared
  groupArray.sort((a, b) => {
    return ((a[0].achievementGroup.charAt(7) as unknown) as number) >
      ((b[0].achievementGroup.charAt(7) as unknown) as number)
      ? 1
      : -1;
  });

  return (
    <ScrollView contentContainerStyle={styles.scrollStyle}>
      <Text style={styles.TextFormat}>Nylig oppnåde bragder</Text>
      <View style={styles.recentStyle}>
        {dataSet.AchievementCardData.slice(
          0,
          //only renders appropriate amount of cards if achieved amount is less than 3
          dataSet.AchievementCardData.length < 3
            ? dataSet.AchievementCardData.length
            : 3,
        ).map((data, index) => {
          return AchievementFormat(data, index, data.date);
        })}
      </View>
      {groupArray.map((achievements, index) => {
        return (
          <View key={index} style={styles.centerContent}>
            <View style={styles.seperatorStyle} />
            <View style={styles.centerContent}>
              <Text style={styles.TextFormat}>
                {achievements[0].achievementGroup}
              </Text>
            </View>
            <View style={styles.groupStyle}>
              {achievements.map((data, index2) => {
                return AchievementFormat(data, index2, data.date);
              })}
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export { AchievementFormatShell };

const styles = StyleSheet.create({
  groupStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: width * 0.83,
  },

  seperatorStyle: {
    backgroundColor: SEPERATOR,
    borderRadius: 20,
    width: width * 0.9,
    height: width * 0.01,
    marginHorizontal: 40,
  },

  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  recentStyle: {
    flexDirection: 'row',
    marginHorizontal: width * 0.0383,
  },

  scrollStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: width,
  },

  TextFormat: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 50,
    color: BLACK,
  },
});
