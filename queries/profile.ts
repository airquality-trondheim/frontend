import { Auth } from 'aws-amplify';
import { LevelResponse, ProfileResponse, UserProfile } from '../types/_types';
const endpoint = 'http://ec2-18-192-82-31.eu-central-1.compute.amazonaws.com/';

export async function fetchUserProfile(userID: string): Promise<UserProfile> {
  try {
    const response: Response = await fetch(endpoint + 'users/' + userID, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        accesstoken:
          Auth.Credentials.Auth.user.signInUserSession.accessToken.jwtToken,
      },
    });
    const profile: ProfileResponse = await response.json();
    // console.log(profile);
    const avatarResponse: Response = await fetch(
      endpoint + 'levels/' + profile.user.level,
    );
    const avatar: LevelResponse = await avatarResponse.json();

    return {
      ...profile.user,
      avatar: avatar.iconUrl,
      birthdate: '',
      postalcode: '',
      street: '',
    };
  } catch (error) {
    console.log('failed to fetch profile data');
    return {
      _id: 'raeseeie2',
      username: 'Røyskatten',
      points: 1200,
      level: 3,
      achievements: [],
      avatar:
        'https://frisk-airquality.s3.eu-central-1.amazonaws.com/avatars/oyster.png',
      birthdate: '12.12.1990',
      homeArea: 'Trondheim',
      postalcode: '0789',
      street: 'Trøndergata 1',
    };
  }
}

export async function pushUserArea(area: string) {
  try {
    await fetch(
      endpoint +
        'users/' +
        Auth.Credentials.Auth.user.signInUserSession.idToken.payload.sub +
        '/homeArea',
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          accesstoken:
            Auth.Credentials.Auth.user.signInUserSession.accessToken.jwtToken,
        },
        body: JSON.stringify({
          homeArea: area,
        }),
      },
    );

    return;
  } catch (error) {
    console.log('failed to update homearea in profile');
    return;
  }
}
