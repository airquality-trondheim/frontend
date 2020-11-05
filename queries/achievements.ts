import {
  AchievementCardElement,
  AchievementReturnType,
  AchievementStamp,
  ProfileResponse,
} from '../types/_types';
import { Auth } from 'aws-amplify';

const endpoint = 'http://ec2-18-192-82-31.eu-central-1.compute.amazonaws.com/';

export async function fetchAchievements(): Promise<
  | {
      achievements: AchievementCardElement[];
      achieved: AchievementStamp[];
    }
  | undefined
> {
  try {
    const response: Response = await fetch(endpoint + 'achievements');
    const achievementList: AchievementReturnType = await response.json();
    const returnList: AchievementCardElement[] = achievementList.achievements.map(
      (element) => {
        return {
          achievementId: element._id,
          achievementName: element.name,
          achievementDescription: element.description,
          achievementGroup: element.category,
        };
      },
    );

    const userResponse: Response = await fetch(
      endpoint +
        'users/' +
        Auth.Credentials.Auth.user.signInUserSession.idToken.payload.sub,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          accesstoken:
            Auth.Credentials.Auth.user.signInUserSession.accessToken.jwtToken,
        },
      },
    );

    const profile: ProfileResponse = await userResponse.json();

    return {
      achievements: returnList,
      achieved: profile.user.achievements,
    };
  } catch (error) {
    console.log('failed to fetch achievements');
    return;
  }
}
