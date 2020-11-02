import { UserProfile } from '../types/_types';
const endpoint = 'http://ec2-18-192-82-31.eu-central-1.compute.amazonaws.com/';

export async function fetchUserProfile(userID: string): Promise<UserProfile> {
  try {
    const response: Response = await fetch(endpoint + 'users/' + userID);
    const profile: UserProfile = await response.json();
    const symbolResponse: Response = await fetch(
      endpoint + 'levels/' + profile.level,
    );
    const symbol: string = await symbolResponse.json();

    return {
      ...profile,
      avatar: symbol,
    };
  } catch (error) {
    console.log('failed to fetch profile data');
    return {
      id: 'raeseeie2',
      username: 'Røyskatten',
      points: 1200,
      level: 3,
      avatar:
        'https://frisk-airquality.s3.eu-central-1.amazonaws.com/avatars/oyster.png',
      mail: 'example@mail.com',
      telefon: '999 11 888',
      birthdate: '12.12.1990',
      location: 'Trondheim',
      postalcode: '0789',
      street: 'Trøndergata 1',
    };
  }
}
