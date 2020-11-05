import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { getCurrentLocation, getLocations } from '../actions/locationsActions';
import { RootAction } from '../actions/types';
import AirQualityInfo from '../components/airquality/AirQualityInfo';
import LandingPageCarousel from '../components/LandingPageCarousel';
import LocationDropdown from '../components/LocationDropdown';

type LandingPageProps = ReturnType<typeof mapDispatchToProps>;

function LandingPage(props: LandingPageProps) {
  const { fetchLocations, fetchCurrentLocation } = props;

  useEffect(() => fetchLocations(), [fetchLocations]);

  useEffect(() => fetchCurrentLocation(), [fetchCurrentLocation]);

  return (
    <View accessibilityLabel={'Home screen'} style={styles.screenStyle}>
      <LocationDropdown />
      <AirQualityInfo />
      <LandingPageCarousel />
    </View>
  );
}

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => {
  return {
    fetchLocations: () => {
      getLocations(dispatch);
    },
    fetchCurrentLocation: () => {
      getCurrentLocation(dispatch);
    },
  };
};

export default connect(null, mapDispatchToProps)(LandingPage);

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    alignItems: 'center',
  },
});
