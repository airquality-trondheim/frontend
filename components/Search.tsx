import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { StyleSheet, Alert } from 'react-native';

export default function Search() {
  return (
    <GooglePlacesAutocomplete
      styles={{
        container: styles.container,
        listView: styles.listview,
      }}
      minLength={2}
      listViewDisplayed={false}
      returnKeyType={'search'}
      placeholder="Søk"
      fetchDetails={true}
      nearbyPlacesAPI="GooglePlacesSearch"
      query={{
        key: 'AIzaSyCHL8oPEGPnt3jLinGNRhUv1IOOFPplNrY',
        language: 'no',
        types: 'address',
        location: '63.429477, 10.39367', // Get from redux
        radius: 10000,
        strictbounds: true,
      }}
      onPress={(data: any, details: any) => {}}
      textInputProps={{
        clearButtonMode: 'never',
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    minHeight: 50,
    width: '100%',
  },
  listview: {
    marginTop: 50,
    position: 'absolute',
  },
});
