import { GET_USERPROFILE, UserProfileActionTypes } from '../actions/types';
import {UserProfile} from '../types/_types'

const initialState: UserProfile = {
  id: '0',
  username: '0',
  points: 0,
  level: 0,
  symbolUrl: '0',
  mail: '0',
  telefon: '0',
  birthdate: '0',
  location: '0',
  postalcode: '0',
  street: '0',
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
        symbolUrl: action.userProfile.symbolUrl,
        mail:action.userProfile.mail,
        telefon: action.userProfile.telefon,
        birthdate: action.userProfile.birthdate,
        location: action.userProfile.location,
        postalcode: action.userProfile.postalcode,
        street: action.userProfile.street,
      };
    default:
      return state;
  }
}