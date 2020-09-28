import { MapActionTypes } from '../actions/types';
import { MapData } from '../types/_types';

const initialState: MapData = {
  region: {
    latitude: 63.429477,
    longitude: 10.39367,
    latitudeDelta: 0.03,
    longitudeDelta: 0.03,
  },
};

export default function (
  state = initialState,
  action: MapActionTypes,
): MapData {
  switch (true) {
    default:
      return state;
  }
}
