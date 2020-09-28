import { MapActionTypes } from '../actions/types';

const initialState: mapData = {};

export default function (
  state = initialState,
  action: MapActionTypes,
): MapData {
  switch (action.type) {
    default:
      return state;
  }
}
