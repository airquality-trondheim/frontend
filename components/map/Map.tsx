import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
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
  }, [props]);

  useEffect(() => {
    setAqStations(props.aqData);
  }, [props.aqData]);

  return (
    <MapView
      style={styles.map}
      region={mapRegion}
      onRegionChangeComplete={(region) => setMapRegion(region)}
      // showsUserLocation={true}
      // showsMyLocationButton={true}
    >
      {aqStations.map((aqStation: aqStationData, i) => {
        return (
          <Marker
            coordinate={{
              latitude: aqStation.latitude,
              longitude: aqStation.longitude,
            }}
            pinColor={colorDict[aqStation.color]}
            key={i}
            title={'Stasjon: ' + aqStation.station}
            description={
              aqStation.component +
              ': ' +
              aqStation.value +
              ' ' +
              aqStation.unit
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
    //paddingTop: 1,
    //marginTop: 45,
  },
});
