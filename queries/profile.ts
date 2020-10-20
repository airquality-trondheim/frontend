import createWebpackConfigAsync from '@expo/webpack-config/webpack';
import { UserProfile } from '../types/_types';
const endpoint =
  'http://ec2-18-192-82-31.eu-central-1.compute.amazonaws.com/users/';

export async function fetchUserProfile(userID: string): Promise<UserProfile> {
  try {
    const response: Response = await fetch(endpoint + userID);
    const profile: UserProfile = await response.json();
    return profile;
  } catch(error){
    console.log("failed to fetch profile data");
    return {
      id: 'raeseeie2',
      username: 'Røyskatten',
      points: 1200,
      level: 3,
    };
  }
}