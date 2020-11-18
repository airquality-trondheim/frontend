import { Auth } from 'aws-amplify';
import { LevelResponse, ProfileResponse, UserProfile } from '../types/_types';
const endpoint = 'http://ec2-18-192-82-31.eu-central-1.compute.amazonaws.com/';

export async function fetchUserProfile(): Promise<UserProfile> {
  try {
    const userInformation =
      Auth?.Credentials?.Auth?.user?.signInUserSession?.idToken?.payload;
    const response: Response = await fetch(
      endpoint + 'users/' + userInformation?.sub,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          accesstoken:
            Auth.Credentials.Auth.user.signInUserSession.accessToken.jwtToken,
        },
      },
    );
    const profile: ProfileResponse = await response.json();
    const avatarResponse: Response = await fetch(
      endpoint + 'levels/' + profile.user.level,
    );
    const avatar: LevelResponse = await avatarResponse.json();

    return {
      ...profile.user,
      points: Math.round(profile.user.points),
      avatar: avatar.iconUrl,
    };
  } catch (error) {
    console.log('failed to fetch profile data');
    return {
      _id: '?',
      username: '?',
      points: 0,
      level: 0,
      achievements: [],
      avatar:
        'https://frisk-airquality.s3.eu-central-1.amazonaws.com/avatars/oyster.png',
      homeArea: '?',
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
