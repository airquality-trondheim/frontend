import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { connect } from 'react-redux';
import { RootState } from '../../reducers';
import { MapActionTypes } from '../../actions/types';
import { Dispatch } from 'redux';
import { getAirQualityData } from '../../actions/mapActions';
import { aqStationData } from '../../types/_types';

type mapProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

function Map(props: mapProps) {
  const [mapRegion, setMapRegion] = useState(props.region);
  const [aqStations, setAqStations] = useState(props.aqData);

  // Android har begrenset med farger tilgjengelig for pinColor, må bruke standard
  // TODO: Flytte til riktig fil hvis dette er løsningen som skal brukes
  const colorDict: { [id: string]: string } = {
    '6ee86e': 'green',
    ff9900: 'yellow',
    ff0000: 'red',
    '990099': 'purple',
  };

  useEffect(() => {
    props.fetchAirQualityData();
  }, []);

  useEffect(() => {
    setAqStations(props.aqData);
  }, [props.aqData]);

  return (
    <MapView
      style={styles.map}
      region={mapRegion}
      onRegionChangeComplete={(region) => setMapRegion(region)}
      showsUserLocation={true}
      provider={'google'}
      // showsMyLocationButton={true}
    >
      {aqStations.map((aqStation: aqStationData, i) => {
        return (
          <View key={i}>
            <Marker
              coordinate={{
                latitude: aqStation.latitude,
                longitude: aqStation.longitude,
              }}
              pinColor={colorDict[aqStation.color]}
              title={'Stasjon: ' + aqStation.station}
              description={
                aqStation.component +
                ': ' +
                aqStation.value +
                ' ' +
                aqStation.unit
              }
            />
            <MapView.Circle
              center={{
                latitude: aqStation.latitude,
                longitude: aqStation.longitude,
              }}
              radius={500}
              strokeWidth={1}
              strokeColor={'#' + aqStation.color}
              fillColor={'#' + aqStation.color + '40'}
            />
          </View>
        );
      })}
      {/* Demo circle for geofencing area */}
      <MapView.Circle
        center={{
          latitude: 63.4041721,
          longitude: 10.4185564,
        }}
        radius={30}
        strokeWidth={1}
        strokeColor={'#cf5444'}
        fillColor={'#cf544440'}
      />
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
    //position: "absolute",
    //paddingTop: 1,
    //marginTop: 45,
  },
});
