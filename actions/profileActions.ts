import { Dispatch } from 'redux';
import { PUT_HOMEAREA, RootAction } from './types';
import { fetchUserProfile, pushUserArea } from '../queries/profile';
import { GET_USERPROFILE } from './types';

export async function getProfileData(
  userID: string,
  dispatch: Dispatch<RootAction>,
) {
  const newProfileData = await fetchUserProfile(userID);
  dispatch({
    type: GET_USERPROFILE,
    userProfile: newProfileData,
  });
}

export async function putHomeArea(
  area: string,
  dispatch: Dispatch<RootAction>,
) {
  pushUserArea(area);
  dispatch({
    type: PUT_HOMEAREA,
    homeArea: area,
  });
}
