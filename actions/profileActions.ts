import { Dispatch } from 'redux';
import { RootAction } from './types';
import { fetchUserProfile } from '../queries/profile';
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
