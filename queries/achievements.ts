import { AchievementCardElement, AchievementStamp, UserElement } from "../types/_types";
import { achievements } from '../constants/Achievements';
import { achieved } from '../constants/UserAchievement';
import { Auth } from 'aws-amplify';

const endpoint =
  'http://ec2-18-192-82-31.eu-central-1.compute.amazonaws.com/';

export async function fetchAchievements(): Promise<{achievements: AchievementCardElement[], achieved: AchievementStamp[]} | undefined> {
  try{
    const response: Response = await fetch(endpoint + 'nops'); //temp wrong to fail try
    const achievementList: AchievementCardElement[] = await response.json();
    const profileResponse: Response = await fetch(endpoint + '/user/' + Auth.Credentials.Auth.user.sub);
    const profile: UserElement = await profileResponse.json();

    return {achievements: achievementList, achieved: profile.achievements}
  } catch(error) {
    return {achievements, achieved};
  }
};