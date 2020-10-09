import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CompetitionPageCarousel from '../components/CompetitionPageCarousel';
import { CarouselItem } from '../components/CarouselItem';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RootAction } from '../actions/types';
import { RootState } from '../reducers';
import { getUserPoints } from '../actions/pointsActions';

type CompetitionPageProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

function CompetitionPage(props: CompetitionPageProps) {
  const { points, fetchPoints } = props;

  useEffect(() => {
    // TODO: Change to user's ID after log in is done
    fetchPoints('5f6dde0d71a2bf3507462942');
  }, [fetchPoints]);

  return (
    <View style={styles.screenStyle}>
      <CarouselItem headerText="Hei">
        <Text>Poeng: {points > -1 ? points : 'Kunne ikke hente poeng'}</Text>
      </CarouselItem>
      <CompetitionPageCarousel />
    </View>
  );
}
const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => {
  return {
    fetchPoints: (userID: string) => {
      getUserPoints(userID, dispatch);
    },
  };
};

const mapStateToProps = (state: RootState) => {
  return {
    points: state.points.points,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompetitionPage);

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
