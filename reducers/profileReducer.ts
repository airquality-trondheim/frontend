import { GET_USERPROFILE, UserProfileActionTypes } from '../actions/types';
import {UserProfile} from '../types/_types'

const initialState: UserProfile = {
  id: '0',
  username: '0',
  points: 0,
  level: 0,
};

export default function(
  state = initialState,
  action: UserProfileActionTypes,
): UserProfile{
  switch(action.type){
    case GET_USERPROFILE:
      return {
        ...state,
        id: action.userProfile.id,        
        username: action.userProfile.username,
        points: action.userProfile.points,
        level: action.userProfile.level,
      };
    default:
      return state;
  }
}