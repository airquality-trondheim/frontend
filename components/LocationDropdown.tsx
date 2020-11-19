import React, { useCallback, useEffect, useRef, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { putCurrentLocation } from '../actions/locationsActions';
import { RootAction } from '../actions/types';
import { BLACK, CAROUSELITEM, GRAY } from '../constants/Colors';
import { height, width } from '../constants/Layout';
import { RootState } from '../reducers';
import { Location } from '../types/_types';

type DropdownListItem = {
  label: string;
  value: string;
};

type LocationDropdownProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

function LocationDropdown(props: LocationDropdownProps) {
  const { updateCurrentLocation, locations, currentLocation } = props;
  const [locationList, setLocationList] = useState<DropdownListItem[]>([]);
  const unmounted = useRef(false);

  useEffect(() => {
    return () => {
      unmounted.current = true;
    };
  }, []);

  useEffect(() => {
    let locList: DropdownListItem[] = [];
    for (let location of locations) {
      locList.push({ label: location.name, value: location._id });
    }
    if (!unmounted.current) {
      setLocationList(locList);
    }
  }, [locations]);

  const updateLocation = useCallback(
    (item: DropdownListItem) => {
      const newCurrentLocation = locations.find(
        (loc: Location) => loc._id === item.value,
      );
      if (newCurrentLocation !== undefined) {
        updateCurrentLocation(newCurrentLocation);
      }
    },
    [locations, updateCurrentLocation],
  );

  useEffect(() => {
    if (!currentLocation && locationList.length > 0) {
      updateLocation(locationList[0]);
    }
  }, [currentLocation, locationList, updateLocation]);

  return (
    <>
      {locationList.length > 0 ? (
        <DropDownPicker
          items={locationList}
          defaultValue={
            locations.find((loc) => loc._id === currentLocation?._id)
              ? currentLocation?._id
              : locationList[0].value
          }
          zIndex={999}
          containerStyle={styles.pickerContainer}
          itemStyle={styles.pickerItem}
          activeLabelStyle={styles.pickerSelectedItem}
          arrowColor={BLACK}
          labelStyle={styles.pickerLabel}
          dropDownMaxHeight={height * 0.5}
          dropDownStyle={styles.pickerDropDown}
          style={styles.picker}
          searchable={true}
          searchableStyle={styles.searchableStyle}
          searchableError={() => <Text>Finner ikke område</Text>}
          onChangeItem={(item: DropdownListItem) => updateLocation(item)}
        />
      ) : (
        <></>
      )}
    </>
  );
}

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => {
  return {
    updateCurrentLocation: (station: Location) => {
      putCurrentLocation(station, dispatch);
    },
  };
};

const mapStateToProps = (state: RootState) => {
  return {
    locations: state.locations.locations,
    currentLocation: state.locations.currentLocation,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationDropdown);

const styles = StyleSheet.create({
  pickerContainer: {
    height: 50,
    width: width * 0.8,
    marginBottom: 20,
    marginTop: 20,
  },
  pickerItem: {
    justifyContent: 'flex-start',
  },
  pickerSelectedItem: {
    color: GRAY,
  },
  pickerLabel: {
    color: BLACK,
  },
  pickerDropDown: {
    backgroundColor: CAROUSELITEM,
  },
  picker: {
    backgroundColor: CAROUSELITEM,
  },
  searchableStyle: {
    color: BLACK,
  },
});
