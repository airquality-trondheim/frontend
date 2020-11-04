import { View, StyleSheet, ScrollView, Platform } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import AQChart from '../components/airquality/AQChart';
import { height, width } from '../constants/Layout';
import LocationDropdown from '../components/LocationDropdown';
import { RootState } from '../reducers';
import { Dispatch } from 'redux';
import { RootAction } from '../actions/types';
import { getAirQualityDataForLocation } from '../actions/airqualityActions';
import { connect } from 'react-redux';
import InfoButton from '../components/InfoButton';
import AQInfoModal from '../components/airquality/AQInfoModal';

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
  const [modalVisible, setModalVisible] = useState(false);
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

  const updateModalVisible = () => {
    if (!unmounted.current) {
      setModalVisible(!modalVisible);
    }
  };

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
      <View style={styles.topView}>
        <InfoButton onPress={updateModalVisible} />
      </View>
      <AQInfoModal
        onCloseButtonPress={updateModalVisible}
        modalVisible={modalVisible}
        modalOnRequestClose={updateModalVisible}
      />
      <AQChart {...{ name: 'AQI', nameNumber: '', AQ: AQI }} />
      <AQChart {...{ name: 'AQI NO', nameNumber: '2', AQ: NO2_AQI }} />
      <AQChart {...{ name: 'AQI PM', nameNumber: '2.5', AQ: PM10_AQI }} />
      <AQChart {...{ name: 'AQI PM', nameNumber: '10', AQ: PM25_AQI }} />
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
  topView: {
    width: width,
    alignContent: 'flex-end',
    marginRight: 20,
  },
});
