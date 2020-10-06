import {
  GET_ACHIEVEMENTCARD,
  AchievementCardActionTypes,
} from '../actions.ts/types';
import { AchievementCardData } from '../types/_types';

const initialState: AchievementCardData = {
  data: [],
};

export default function (
  state = initialState,
  action: AchievementCardActionTypes,
): AchievementCardData {
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
