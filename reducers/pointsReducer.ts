import { GET_USERPOINTS, PointsActionTypes } from '../actions/types';
import { PointsState } from '../types/_types';

const initialState: PointsState = {
  points: 0,
  name: 'Inkognito Impala',
  avatar: 'https://frisk-airquality.s3.eu-central-1.amazonaws.com/avatars/worm.png',
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
        avatar: action.avatar,
        name: action.name,
      };
    default:
      return state;
  }
}
