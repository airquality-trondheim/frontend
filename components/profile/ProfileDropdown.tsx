import { Fontisto } from '@expo/vector-icons';
import { Auth } from 'aws-amplify';
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { getLocations } from '../../actions/locationsActions';
import { getProfileData, putHomeArea } from '../../actions/profileActions';
import { RootAction } from '../../actions/types';
import {
  BACKGROUNDCOLOR2,
  BLACK,
  CAROUSELITEM,
  DARKGRAY,
} from '../../constants/Colors';
import { height, width } from '../../constants/Layout';
import { RootState } from '../../reducers';

type DropdownListItem = {
  label: string;
  value: string;
  icon?: () => JSX.Element;
};

type LocationDropdownProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

function ProfileDropdown(props: LocationDropdownProps) {
  const {
    fetchLocations,
    fetchUserProfile,
    pushHomeArea,
    locations,
    userProfile,
  } = props;
  const [locationList, setLocationList] = useState<DropdownListItem[]>([]);
  const unmounted = useRef(false);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    return () => {
      unmounted.current = true;
    };
  }, []);

  useEffect(() => {
    fetchLocations();
    fetchUserProfile(
      Auth.Credentials.Auth.user.signInUserSession.idToken.payload.sub,
    );
  }, [fetchLocations, fetchUserProfile]);

  useEffect(() => {
    let locList: DropdownListItem[] = [];
    for (let location of locations) {
      locList.push({
        label: location.name,
        value: location._id,
        icon: function Icon() {
          return (
            <Fontisto
              name="direction-sign"
              size={20}
              color={BACKGROUNDCOLOR2}
              style={{ marginRight: width * 0.007 }}
            />
          );
        },
      });
    }
    if (!unmounted.current) {
      setLocationList(locList);
    }
  }, [locations]);

  const updateLocation = (area: DropdownListItem) => {
    pushHomeArea(area.label);
  };

  return (
    <>
      {locationList.length > 1 ? (
        <DropDownPicker
          items={locationList}
          defaultValue={
            locationList.find((value) => value.label === userProfile?.homeArea)
              ?.value || locationList[0].value
          }
          zIndex={999}
          containerStyle={styles.pickerContainer}
          itemStyle={styles.pickerItem}
          activeLabelStyle={styles.pickerSelectedItem}
          arrowColor={BLACK}
          labelStyle={styles.pickerLabel}
          dropDownMaxHeight={height * 0.32}
          dropDownStyle={styles.pickerDropDown}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          style={[
            styles.picker,
            {
              borderBottomLeftRadius: width * 0.05 * (open ? 0 : 1),
              borderBottomRightRadius: width * 0.05 * (open ? 0 : 1),
            },
          ]}
          searchable={true}
          searchableError={() => (
            <Text style={styles.pickerLabel}>Finner ikke område</Text>
          )}
          selectedLabelStyle={styles.selectedElement}
          searchableStyle={styles.pickerLabel}
          onChangeItem={(item) => updateLocation(item)}
        />
      ) : (
        <></>
      )}
    </>
  );
}

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => {
  return {
    fetchLocations: () => {
      getLocations(dispatch);
    },
    fetchUserProfile: (userID: string) => {
      getProfileData(userID, dispatch);
    },
    pushHomeArea: (area: string) => {
      putHomeArea(area, dispatch);
    },
  };
};

const mapStateToProps = (state: RootState) => {
  return {
    locations: state.locations.locations,
    userProfile: state.userprofile,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDropdown);

const styles = StyleSheet.create({
  pickerContainer: {
    width: width * 0.8,
    height: height * 0.06,
    marginTop: height * 0.03,
    marginVertical: height * 0.015,
  },
  pickerItem: {
    justifyContent: 'flex-start',
  },
  pickerSelectedItem: {
    color: DARKGRAY,
  },
  pickerLabel: {
    color: BLACK,
    marginLeft: width * 0.02,
    fontSize: 18,
    fontWeight: 'bold',
  },
  pickerDropDown: {
    backgroundColor: CAROUSELITEM,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: width * 0.05,
    borderBottomRightRadius: width * 0.05,
    borderWidth: width * 0.01,
    borderTopWidth: 0,
    borderColor: BACKGROUNDCOLOR2,
  },
  picker: {
    backgroundColor: CAROUSELITEM,
    borderTopLeftRadius: width * 0.05,
    borderTopRightRadius: width * 0.05,
    borderWidth: width * 0.01,
    borderColor: BACKGROUNDCOLOR2,
    height: height * 0.05,
  },
  selectedElement: {},
});
