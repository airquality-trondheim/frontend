import { View, StyleSheet, ScrollView, Platform } from 'react-native';
import React, { useEffect, useRef } from 'react';
import AQChart from '../components/airquality/AQChart';
import { height, width } from '../constants/Layout';
import LocationDropdown from '../components/LocationDropdown';
import { RootState } from '../reducers';
import { Dispatch } from 'redux';
import { RootAction } from '../actions/types';
import { getAirQualityDataForLocation } from '../actions/airqualityActions';
import { connect } from 'react-redux';

type AirQualityScreenProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

function AirQualityScreen(props: AirQualityScreenProps) {
  const {
    currentLocation,
    AQI,
    NO2_AQI,
    PM10_AQI,
    PM25_AQI,
    fetchAirQualityData,
  } = props;
  const unmounted = useRef(false);

  useEffect(() => {
    return () => {
      unmounted.current = true;
    };
  }, []);

  useEffect(() => {
    if (currentLocation) {
      fetchAirQualityData(currentLocation.areacode);
    }
  }, [fetchAirQualityData, currentLocation]);

  return (
    <ScrollView contentContainerStyle={styles.carouselContainerStyle}>
      <View
        style={
          (styles.dropdownView,
          {
            ...(Platform.OS !== 'android' && {
              zIndex: 99,
            }),
          })
        }
      >
        <LocationDropdown />
      </View>
      <AQChart {...{ name: 'AQI', AQ: AQI }} />
      <AQChart {...{ name: 'NO2 AQI', AQ: NO2_AQI }} />
      <AQChart {...{ name: 'PM10 AQI', AQ: PM10_AQI }} />
      <AQChart {...{ name: 'PM2.5 AQI', AQ: PM25_AQI }} />
    </ScrollView>
  );
}

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => {
  return {
    fetchAirQualityData: (areacode: string) => {
      getAirQualityDataForLocation(dispatch, areacode);
    },
  };
};

const mapStateToProps = (state: RootState) => {
  return {
    AQI: state.airquality.AQI,
    NO2_AQI: state.airquality.NO2_AQI,
    PM10_AQI: state.airquality.PM10_AQI,
    PM25_AQI: state.airquality.PM25_AQI,
    currentLocation: state.locations.currentLocation,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AirQualityScreen);

const styles = StyleSheet.create({
  carouselContainerStyle: {
    minHeight: height,
    alignItems: 'center',
  },
  dropdownView: {
    width: width,
    height: height * 0.1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
