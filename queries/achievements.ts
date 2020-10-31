import { AchievementCardElement } from "../types/_types";
import { achievements } from '../constants/Achievements'; 

const endpoint =
  'http://ec2-18-192-82-31.eu-central-1.compute.amazonaws.com/';

export async function fetchAchievements(): Promise<AchievementCardElement[] | undefined> {
  try{
    const response: Response = await fetch(endpoint + 'nops'); //temp wrong to fail try
    const achievementList: AchievementCardElement[] = await response.json();

    return achievementList
  } catch(error) {
    return achievements;
  }
};