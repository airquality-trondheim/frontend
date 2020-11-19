import { GET_AIR_QUALITY_DATA, MapActionTypes } from '../actions/types';
import { MapData } from '../types/_types';

const initialState: MapData = {
  region: {
    latitude: 63.429477,
    longitude: 10.39367,
    latitudeDelta: 0.03,
    longitudeDelta: 0.03,
  },
  aqData: [],
};

export default function (
  state = initialState,
  action: MapActionTypes,
): MapData {
  switch (action.type) {
    case GET_AIR_QUALITY_DATA:
      return {
        ...state,
        aqData: action.data,
      };
    default:
      return state;
  }
}
