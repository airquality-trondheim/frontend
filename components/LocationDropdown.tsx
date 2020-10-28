import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { BLACK, CAROUSELITEM, DARKGRAY } from '../constants/Colors';
import { height, width } from '../constants/Layout';
import { locations } from '../constants/Locations';
import { Location } from '../types/_types';

type DropdownListItem = {
  label: string;
  value: string;
};

function LocationDropdown() {
  const [location, setLocation] = useState<Location>(locations.Tiller);
  const [locationList, setLocationList] = useState<DropdownListItem[]>([
    {
      label: 'Tiller',
      value: 'Tiller',
    },
  ]);
  const unmounted = useRef(false);

  useEffect(() => {
    return () => {
      unmounted.current = true;
    };
  }, []);

  useEffect(() => {
    let locList: DropdownListItem[] = [];
    for (let [key, value] of Object.entries(locations)) {
      locList.push({ label: value.locationName, value: key });
    }
    if (!unmounted.current) {
      setLocationList(locList);
    }
  }, []);

  const updateLocation = (item: DropdownListItem) => {
    if (!unmounted.current) {
      setLocation(locations[item.value]);
    }
  };

  return (
    <DropDownPicker
      items={locationList}
      placeholder={location?.locationName}
      containerStyle={styles.pickerContainer}
      itemStyle={styles.pickerItem}
      activeLabelStyle={styles.pickerSelectedItem}
      arrowColor={BLACK}
      labelStyle={styles.pickerLabel}
      dropDownMaxHeight={height * 0.5}
      dropDownStyle={styles.pickerDropDown}
      style={styles.picker}
      searchable={true}
      searchableError={() => <Text>Finner ikke område</Text>}
      onChangeItem={(item: DropdownListItem) => updateLocation(item)}
    />
  );
}

export default LocationDropdown;

const styles = StyleSheet.create({
  pickerContainer: {
    height: 50,
    width: width * 0.8,
    marginBottom: 20,
  },
  pickerItem: {
    justifyContent: 'flex-start',
  },
  pickerSelectedItem: {
    color: DARKGRAY,
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
});
