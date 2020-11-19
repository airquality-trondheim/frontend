import { View, StyleSheet, ScrollView, Platform } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import AQChart from '../components/airquality/AQChart';
import { height, width } from '../constants/Layout';
import LocationDropdown from '../components/LocationDropdown';
import InfoButton from '../components/InfoButton';
import AQInfoModal from '../components/airquality/AQInfoModal';

function AirQualityScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const unmounted = useRef(false);

  useEffect(() => {
    return () => {
      unmounted.current = true;
    };
  }, []);

  const updateModalVisible = () => {
    if (!unmounted.current) {
      setModalVisible(!modalVisible);
    }
  };

  return (
    <ScrollView
      accessibilityLabel={'Air quality screen'}
      contentContainerStyle={styles.carouselContainerStyle}
    >
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
      <AQChart {...{ name: 'AQI', nameNumber: '', AQ: 'AQI' }} />
      <AQChart {...{ name: 'AQI NO', nameNumber: '2', AQ: 'NO2_AQI' }} />
      <AQChart {...{ name: 'AQI PM', nameNumber: '2.5', AQ: 'PM10_AQI' }} />
      <AQChart {...{ name: 'AQI PM', nameNumber: '10', AQ: 'PM25_AQI' }} />
    </ScrollView>
  );
}

export default AirQualityScreen;

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
