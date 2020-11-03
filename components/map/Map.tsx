import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { connect } from 'react-redux';
import { RootState } from '../../reducers';
import { MapActionTypes } from '../../actions/types';
import { Dispatch } from 'redux';
import { getAirQualityData } from '../../actions/mapActions';
import { currentAqData } from '../../types/_types';
import { aqiToColor } from '../../constants/Colors';

enum pollution {
  'Lite' = 1,
  'Moderat',
  'Høyt',
  'Svært høyt',
}

type mapProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

function Map(props: mapProps) {
  const { aqData, fetchAirQualityData } = props;
  const [mapRegion, setMapRegion] = useState(props.region);
  const [aqStations, setAqStations] = useState(props.aqData);

  useEffect(() => {
    fetchAirQualityData();
  }, [fetchAirQualityData]);

  useEffect(() => {
    setAqStations(aqData);
  }, [aqData]);

  return (
    <MapView
      style={styles.map}
      region={mapRegion}
      onRegionChangeComplete={(region) => setMapRegion(region)}
      // showsUserLocation={true}
      showsMyLocationButton={false}
    >
      {aqStations.map((station: currentAqData, i) => {
        return (
          <Marker
            coordinate={{
              latitude: station.latitude,
              longitude: station.longitude,
            }}
            pinColor={aqiToColor[Math.floor(station.data.variables.AQI.value)]}
            key={i}
            title={'Stasjon: ' + station.name}
            description={
              'Luftforurensning' +
              ': ' +
              pollution[Math.floor(station.data.variables.AQI.value)]
            }
          ></Marker>
        );
      })}
    </MapView>
  );
}

const mapDispatchToProps = (dispatch: Dispatch<MapActionTypes>) => {
  return {
    fetchAirQualityData: () => {
      getAirQualityData(dispatch);
    },
  };
};

const mapStateToProps = (state: RootState) => {
  return {
    region: state.map.region,
    aqData: state.map.aqData,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
