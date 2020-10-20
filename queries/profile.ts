import createWebpackConfigAsync from '@expo/webpack-config/webpack';
import { UserProfile } from '../types/_types';
const endpoint =
  'http://ec2-18-192-82-31.eu-central-1.compute.amazonaws.com/';

export async function fetchUserProfile(userID: string): Promise<UserProfile> {
  try {
    const response: Response = await fetch(endpoint + 'users/' + userID);
    const profile: UserProfile = await response.json();
    return {
      ...profile,
      symbolUrl: 'http://thenewcode.com/assets/svg/developer-tea.svg',
    };
  } catch(error){
    console.log("failed to fetch profile data");
    return {
      id: 'raeseeie2',
      username: 'Røyskatten',
      points: 1200,
      level: 3,
      symbolUrl: 'http://thenewcode.com/assets/svg/developer-tea.svg',
      mail: 'example@mail.com',
      telefon: '999 11 888',
      birthdate: '12.12.1990',
      location: 'Trondheim',
      postalcode: '0789',
      street: 'Trøndergata 1',
    };
  }
}
