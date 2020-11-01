import { GET_USERPOINTS, PointsActionTypes } from '../actions/types';
import { PointsState } from '../types/_types';

const initialState: PointsState = {
  points: 0,
};

export default function (
  state = initialState,
  action: PointsActionTypes,
): PointsState {
  switch (action.type) {
    case GET_USERPOINTS:
      return {
        ...state,
        points: action.points,
      };
    default:
      return state;
  }
}
