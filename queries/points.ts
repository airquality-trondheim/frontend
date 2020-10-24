import { UserElement } from '../types/_types';

const endpoint =
  'http://ec2-18-192-82-31.eu-central-1.compute.amazonaws.com/users/';

export async function fetchUserPoints(
  userID: string,
): Promise<number | undefined> {
  try {
    const response: Response = await fetch(endpoint + userID);
    const userElement: UserElement = await response.json();
    return userElement.points;
  } catch (error) {
    //console.log('Error fetching points');
    //return undefined;
    return 200;
  }
}
