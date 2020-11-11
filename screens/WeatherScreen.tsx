import React, { useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView, Platform } from 'react-native';
import WeatherCarouselItem from '../components/weather/WeatherCarouselItem';
import WeatherComponentBig from '../components/weather/WeatherPageItemBig';
import { BLACK, CAROUSELITEM } from '../constants/Colors';
import { height, width } from '../constants/Layout';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RootAction } from '../actions/types';
import { getWeatherData } from '../actions/weatherActions';
import { RootState } from '../reducers';
import { WeatherElement } from '../types/_types';
import LocationDropdown from '../components/LocationDropdown';

type WeatherProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

function WeatherScreen(props: WeatherProps) {
  const { today, tomorrow, currentLocation, fetchWeatherData } = props;
  useEffect(() => fetchWeatherData(), [fetchWeatherData, currentLocation?._id]);

  return (
    <View accessibilityLabel={'Weather screen'} style={styles.screenStyle}>
      <View
        style={
          (styles.mainComponent,
          {
            ...(Platform.OS !== 'android' && {
              zIndex: 99,
            }),
          })
        }
      >
        <View style={styles.dropdownView}>
          <View
            style={{
              ...(Platform.OS !== 'android' && {
                zIndex: 99,
              }),
            }}
          >
            <LocationDropdown />
          </View>
        </View>
        <WeatherComponentBig />
      </View>
      <View style={{ zIndex: 10 }}>
        {today.length > 0 ? (
          <>
            <Text style={styles.text}>I dag</Text>
            <ScrollView horizontal style={styles.scroll}>
              {today.map((weather: WeatherElement, index: number) => (
                <View key={index} style={styles.containerStyle}>
                  <WeatherCarouselItem key={index} weather={weather} />
                </View>
              ))}
            </ScrollView>
            <Text style={styles.text}>I morgen</Text>
            <ScrollView horizontal style={styles.scroll}>
              {tomorrow.map((weather: WeatherElement, index: number) => (
                <View key={index} style={styles.containerStyle}>
                  <WeatherCarouselItem key={index} weather={weather} />
                </View>
              ))}
            </ScrollView>
          </>
        ) : (
          <></>
        )}
      </View>
    </View>
  );
}

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => {
  return {
    fetchWeatherData: () => {
      getWeatherData(dispatch);
    },
  };
};

const mapStateToProps = (state: RootState) => {
  return {
    today: state.weather.today,
    tomorrow: state.weather.tomorrow,
    currentLocation: state.locations.currentLocation,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherScreen);

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  mainComponent: {
    width: width,
    fontSize: 40,
    height: height * 0.38,
    zIndex: 99,
  },
  containerStyle: {
    backgroundColor: CAROUSELITEM,
    width: 0.15 * height,
    height: 0.15 * height,
    borderRadius: 20,
    overflow: 'hidden',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 2,
    paddingTop: 8,
    padding: 8,
    shadowColor: BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    marginTop: 15,
    marginLeft: 10,
    fontSize: 20,
  },
  scroll: {
    height: height * 0.18,
    marginTop: 12,
  },
  dropdownView: {
    width: width,
    alignItems: 'center',
  },
});
