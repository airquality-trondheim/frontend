import React from 'react';
import { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Dispatch } from 'redux';
import { getAchievementCardData } from '../actions/achievementCardActions';
import { RootAction } from '../actions/types';
import { RootState } from '../reducers';
import { connect } from 'react-redux';
import { AchievementFormatShell } from '../components/Achievements/AchievementFormatShell';

type AchievementCardProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDistpatchToProps>;

const AchievementCard = (props: AchievementCardProps) => {
  const { getAchievementData } = props;

  useEffect(() => {
    getAchievementData();
  }, [getAchievementData]);

  return (
    <View style={styles.centerContent}>
      <AchievementFormatShell {...props} />
    </View>
  );
};

const mapDistpatchToProps = (dispatch: Dispatch<RootAction>) => {
  return {
    getAchievementData: () => {
      getAchievementCardData(dispatch);
    },
  };
};

const mapStateToProps = (state: RootState) => {
  return {
    AchievementCardData: state.achievementcard.data,
  };
};

export default connect(mapStateToProps, mapDistpatchToProps)(AchievementCard);
export { AchievementCardProps };

const styles = StyleSheet.create({
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flex: 1,
  },
});
