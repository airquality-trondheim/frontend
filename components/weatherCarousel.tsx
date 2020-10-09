import React, { useEffect } from 'react';
import { StyleSheet, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RootAction } from '../actions/types';
import { getWeatherData } from '../actions/weatherActions';
import { RootState } from '../reducers';

type WeatherProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

export function WeatherCarousel(props: WeatherProps) {
  const { weatherData, fetchWeatherData } = props;
  /*   const [icon, setIcon] = useState('../assets/images/png/cloudy.png');
  const unmounted = useRef(false);

  useEffect(() => {
    return () => {
      unmounted.current = true;
    };
  }, []);
 */
  useEffect(() => fetchWeatherData(63.4099, 10.4359), []);
  /*  useEffect(() => {
    if (!unmounted.current && weatherData.length > 0) {
      setTextIcon('../assets/images/png/' + weatherData[0].symbol + '.png');
      setIcon(require(iconText));
    }
  }, [weatherData]); */

  return (
    <TouchableOpacity
      style={styles.component}
      onPress={() => fetchWeatherData(63.4099, 10.4359)}
    >
      <Text style={styles.headerStyle}>Tiller</Text>
      {weatherData.length > 0 ? (
        <>
          <Text>{'kl.' + weatherData[0].time.split('T')[1].split(':')[0]}</Text>
          <Image
            source={require('../assets/images/png/cloudy.png')}
            style={styles.iconStyle}
          />
          <Text>{weatherData[0].temp}℃</Text>
          <Text>{weatherData[0].rain} mm</Text>
        </>
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );
}

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => {
  return {
    fetchWeatherData: (latitude: number, longitude: number) => {
      getWeatherData(latitude, longitude, dispatch);
    },
  };
};

const mapStateToProps = (state: RootState) => {
  return {
    lastFetched: state.weather.lastFetched,
    weatherData: state.weather.data,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherCarousel);

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 20,
  },
  iconStyle: {
    height: 100,
    width: 100,
  },
  component: {
    display: 'flex',
    alignItems: 'center',
  },
});
