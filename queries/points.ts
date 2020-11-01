import { UserElement, Level } from '../types/_types';

const endpoint = 'http://ec2-18-192-82-31.eu-central-1.compute.amazonaws.com/';

type simpleProfile = {
  points: number;
  name: string;
  avatar: string;
};

export async function fetchUserPoints(
  userID: string,
): Promise<simpleProfile | undefined> {
  try {
    const response: Response = await fetch(endpoint + 'users/' + userID);
    const userElement: UserElement = await response.json();
    const levelResponse: Response = await fetch(
      endpoint + 'levels/' + userElement.level,
    );
    const level: Level = await levelResponse.json();
    return {
      points: userElement.points,
      name: userElement.username,
      avatar: level.iconUrl,
    };
  } catch (error) {
    //console.log('Error fetching points');
    //return undefined;
    return {
      points: 200,
      name: 'Røyskatten',
      avatar:
        'https://frisk-airquality.s3.eu-central-1.amazonaws.com/avatars/oyster.png',
    };
  }
}
