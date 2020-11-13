import React from 'react';
import { RootState } from '../../reducers';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { width } from '../../constants/Layout';
import { ScrollView } from 'react-native-gesture-handler';
import { SEPERATOR, BLACK } from '../../constants/Colors';
import { AchievementFormat } from './AchievementFormat';
import { AchievementCardElement } from '../../types/_types';

type accumulatorInterface = {
  [key: string]: AchievementCardElement[];
};

type AchievementProps = ReturnType<typeof mapStateToProps>;

const AchievementFormatShell = (props: AchievementProps) => {
  const { AchievementCardData } = props;
  let accumulator: accumulatorInterface = {};

  // Groups achievement data. Returns an object (dictionary) with group names as keys,
  // and lists with the correct elements as values.
  // a: currentElement
  // r: temporary dictionary
  let groupDictionary = AchievementCardData.reduce((r, a) => {
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
      {AchievementCardData[0]?.date ? (
        <>
          <Text style={styles.TextFormat}>Nylig oppnådde bragder</Text>
          <View style={styles.recentStyle}>
            <AchievementFormat data={AchievementCardData[0]} index={0} />
            {AchievementCardData[1]?.date ? (
              <AchievementFormat data={AchievementCardData[1]} index={1} />
            ) : (
              <></>
            )}
            {AchievementCardData[2]?.date ? (
              <AchievementFormat data={AchievementCardData[2]} index={2} />
            ) : (
              <></>
            )}
          </View>
        </>
      ) : (
        <></>
      )}
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
              {achievements.map((data, index2: number) => {
                return AchievementFormat({ data, index: index2 });
              })}
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    AchievementCardData: state.achievementcard.data,
  };
};

export default connect(mapStateToProps)(AchievementFormatShell);

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
