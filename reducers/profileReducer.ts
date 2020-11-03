import { GET_USERPROFILE, PUT_HOMEAREA, UserProfileActionTypes } from '../actions/types';
import { UserProfile } from '../types/_types';

const initialState: UserProfile = {
  _id: '0',
  username: '0',
  points: 0,
  level: 0,
  avatar: '0',
  achievements: [],
  birthdate: '0',
  homeArea: '0',
  postalcode: '0',
  street: '0',
};

export default function (
  state = initialState,
  action: UserProfileActionTypes,
): UserProfile {
  switch (action.type) {
    case GET_USERPROFILE:
      return {
        ...state,
        _id: action.userProfile._id,
        username: action.userProfile.username,
        points: action.userProfile.points,
        level: action.userProfile.level,
        avatar: action.userProfile.avatar,
        birthdate: action.userProfile.birthdate,
        homeArea: action.userProfile.homeArea,
        postalcode: action.userProfile.postalcode,
        street: action.userProfile.street,
      };
    case PUT_HOMEAREA:
      return {
        ...state,
        homeArea: action.homeArea,
      }
    default:
      return state;
  }
}
