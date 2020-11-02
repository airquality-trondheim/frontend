import { SessionSchema, SessionResponse, SessionResult } from '../types/_types';
import { Auth } from 'aws-amplify';

const endpoint =
  'http://ec2-18-192-82-31.eu-central-1.compute.amazonaws.com/sessions/users/'; //5f6dde0d71a2bf3507462943';

export async function postSessionData(
  sessionData: SessionSchema,
): Promise<SessionResult> {
  const data = JSON.stringify(sessionData);
  const token = (await Auth.currentSession()).getAccessToken().getJwtToken();
  console.log(`${endpoint}${sessionData.userId}`);
  const response: Response = await fetch(`${endpoint}${sessionData.userId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      accesstoken: token,
    },
    body: data,
  });
  const sessionSummaryResponse: SessionResponse = await response.json();
  console.log(sessionSummaryResponse);
  return sessionSummaryResponse.sessionResult;
}
