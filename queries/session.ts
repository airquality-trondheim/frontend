import { SessionSchema, SessionResponse, SessionResult } from '../types/_types';
import { Auth } from 'aws-amplify';

const endpoint =
  'http://ec2-18-192-82-31.eu-central-1.compute.amazonaws.com/sessions/users/5f6dde0d71a2bf3507462943';

export async function postSessionData(
  sessionData: SessionSchema,
): Promise<SessionResult> {
  console.log(`Send request to ${endpoint}`); // + sessionData.userId}`);
  console.log(sessionData);
  const data = JSON.stringify(sessionData);
  const token = (await Auth.currentSession()).getAccessToken().getJwtToken();

  const response: Response = await fetch(endpoint, {
    // TODO: Add correct user ID. Currently the one from AWS Auth is not the same as in the db.
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      accesstoken: token, // Vet ikke om dette er riktig måte å gjøre det på
    },
    body: data,
  });
  const sessionSummaryResponse: SessionResponse = await response.json();
  console.log(sessionSummaryResponse);
  return sessionSummaryResponse.sessionResult;
  // return {
  //   millisecondsElapsed: 5100123,
  //   metersTraveled: 2500,
  //   avgKmph: 3.6,
  //   distancePoints: 123.000000000000000005123,
  //   safeZonePoints: 312.1492837591847123,
  //   sumPoints: 1000,
  // };
}
