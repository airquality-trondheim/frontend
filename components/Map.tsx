import React, { useState, useEffect } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { connect, useDispatch } from 'react-redux';
import { RootState } from '../reducers';
import { MapActionTypes } from '../actions/types';
import { Dispatch } from 'redux';
// import { getAirQualityData } from '../queries/airquality';
import { getAirQualityData } from '../actions/mapActions';
import { aqStationData } from '../types/_types';

// TODO: All settings for map should be in redux, no hardcoding
// TODO: Implement functionality for map: search, location?
// TODO: Fetch NILU data from backend and display in map

type mapProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

function Map(props: mapProps) {
  const [mapRegion, setMapRegion] = useState(props.mapdata.region);
  const [aqStations, setAqStations] = useState(props.mapdata.aqData);

  // TODO: Få til å bruke setAqStations først når redux-oppdatering er ferdig
  useEffect(() => {
    async function loadAirQualityData() {
      console.log('Start');
      console.log(aqStations);
      await props.getAirQualityData();
      console.log('End');
      setAqStations(props.mapdata.aqData);
      console.log(props.mapdata.aqData);
    }
    loadAirQualityData();
    console.log('Exiting useEffect');
  }, []);

  return (
    <MapView
      style={styles.map}
      region={mapRegion}
      onRegionChangeComplete={(region) => setMapRegion(region)}
      showsUserLocation={true}
      showsMyLocationButton={true}
    >
      {/*
      <Marker
        coordinate={{ latitude: 63.429477, longitude: 10.39367 }}
        //anchor={{ x: 0.5, y: 0.5 }}
        pinColor={'green'}
      ></Marker>
      */}

      {aqStations.map((aqStation: aqStationData, i) => {
        return (
          <Marker
            coordinate={{
              latitude: aqStation.latitude,
              longitude: aqStation.longitude,
            }}
            //pinColor={'#' + aqStation.color}
            pinColor={'red'}
            key={i}
          ></Marker>
        );
      })}
    </MapView>
  );
}

const mapDispatchToProps = (dispatch: Dispatch<MapActionTypes>) => {
  return {
    getAirQualityData: async () => {
      await getAirQualityData(dispatch);
    },
  };
};

const mapStateToProps = (state: RootState) => {
  return {
    mapdata: state.map,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);

const styles = StyleSheet.create({
  map: {
    flex: 1,
    paddingTop: 1,
  },
});
