import {
  GET_ACHIEVEMENTCARD,
  AchievementCardActionTypes,
} from '../actions/types';
import { AchievementData } from '../types/_types';

const initialState: AchievementData = {
  data: [],
};

export default function (
  state = initialState,
  action: AchievementCardActionTypes,
): AchievementData {
  switch (action.type) {
    case GET_ACHIEVEMENTCARD:
      return {
        ...state,
        data: action.data,
      };

    default:
      return state;
  }
}
