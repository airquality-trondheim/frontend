import { SessionSchema, SessionResponse, SessionResult } from '../types/_types';
import { Auth } from 'aws-amplify';

const endpoint =
  'http://ec2-18-192-82-31.eu-central-1.compute.amazonaws.com/users/';

export async function postSessionData(
  sessionData: SessionSchema,
): Promise<SessionResult> {
  console.log(`Send request to ${endpoint}${sessionData.userId}`);
  const data = JSON.stringify(sessionData);
  const token = (await Auth.currentSession()).getAccessToken().getJwtToken();

  const response: Response = await fetch(endpoint + sessionData.userId, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      accesstoken: token, // Vet ikke om dette er riktig måte å gjøre det på
    },
    body: data,
  });
  //const sessionSummaryResponse: SessionResponse = await response.json();
  //return sessionSummaryResponse.sessionResult;
  return {
    millisecondsElapsed: 0,
    metersTraveled: 0,
    avgKmph: 0,
    distancePoints: 0,
    safeZonePoints: 0,
    sumPoints: 0,
  };
}
