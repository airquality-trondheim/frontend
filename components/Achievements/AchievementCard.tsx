import React from 'react';
import { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Dispatch } from 'redux';
import { getAchievementCardData } from '../../actions/achievementCardActions';
import { RootAction } from '../../actions/types';
import { width } from '../../constants/Layout';
import { RootState } from '../../reducers';
import { CarouselItem } from '../CarouselItem';
import { connect } from 'react-redux';
import { BACKGROUNDCOLOR2 } from '../../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type AchievementCardProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDistpatchToProps>;

const AchievementCard = (props: AchievementCardProps) => {
  const { AchievementCardData, getAchievementData } = props;
  const navigation = useNavigation();

  useEffect(() => {
    getAchievementData();
  }, [getAchievementData]);

  const lastElement = AchievementCardData[0];
  const secondElement = AchievementCardData[1];

  return (
    <TouchableOpacity onPress={() => navigation.navigate('AchievementsScreen')}>
      <CarouselItem headerText="Bragder">
        <View>
          <View style={{ justifyContent: 'center', flex: 1 }}>
            <View style={styles.seperatorStyle} />
            <View style={[styles.centerContent, { flex: 2 }]}>
              <Text style={[styles.textStyle, { fontSize: 15 }]}>
                Sist oppnådd
              </Text>
              {/*checks if redux functioality has defined element yet,
                and if so displays the Symbol of the most recent achievement*/}
              <MaterialCommunityIcons name="trophy" size={50} color="#111" />
              {/*does the same for the achievement name*/}
              <Text style={[styles.textStyle, { fontSize: 15 }]}>
                {lastElement === undefined ? '' : lastElement.achievementName}
              </Text>
            </View>
          </View>
          <View style={{ justifyContent: 'center', flex: 1 }}>
            <View style={styles.seperatorStyle} />
            <View style={[styles.centerContent, { flex: 2 }]}>
              <Text style={[styles.textStyle, { fontSize: 15 }]}>
                {' '}
                Nest sist oppnådd
              </Text>
              {/*checks if redux functioality has defined element yet,
                and if so displays the Symbol of the second most recent achievement*/}
              <MaterialCommunityIcons name="trophy" size={50} color="#111" />
              {/*does the same for the achievement name*/}
              <Text style={[styles.textStyle, { fontSize: 15 }]}>
                {secondElement === undefined
                  ? ''
                  : secondElement.achievementName}
              </Text>
            </View>
          </View>
        </View>
      </CarouselItem>
    </TouchableOpacity>
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
    Achieved: state.achievementcard.achieved,
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
  textStyle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  seperatorStyle: {
    backgroundColor: BACKGROUNDCOLOR2,
    borderRadius: 20,
    width: width * 0.4,
    height: width * 0.01,
    marginHorizontal: 40,
  },
});
