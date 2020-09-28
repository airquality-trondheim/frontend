import React, { useState } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { connect } from 'react-redux';
import { RootState } from '../reducers';
import { RootAction } from '../actions/types';
import { Dispatch } from 'redux';

type mapProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

function Map(props: mapProps) {
  const [mapRegion, setMapRegion] = useState(props.mapData.region);

  return (
    <MapView
      style={styles.map}
      region={mapRegion}
      onRegionChangeComplete={(region) => setMapRegion(region)}
      showsUserLocation={true}
      showsMyLocationButton={true}
    >
      {/* Test */}
      <Marker
        coordinate={{ latitude: 63.429477, longitude: 10.39367 }}
        anchor={{ x: 0.5, y: 0.5 }}
        pinColor={'green'}
      ></Marker>
    </MapView>
  );
}

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => {
  return {};
};

const mapStateToProps = (state: RootState) => {
  return {
    mapData: state.map,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
