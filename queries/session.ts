import { SessionSchema, SessionResponse, SessionResult } from '../types/_types';
import { Auth } from 'aws-amplify';

const endpoint =
  'http://ec2-18-192-82-31.eu-central-1.compute.amazonaws.com/sessions/users/';

export async function postSessionData(
  sessionData: SessionSchema,
): Promise<SessionResult> {
  const data = JSON.stringify(sessionData);
  const token = (await Auth.currentSession()).getAccessToken().getJwtToken();
  const response: Response = await fetch(`${endpoint}${sessionData.userId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      accesstoken: token,
    },
    body: data,
  });
  const sessionSummaryResponse: SessionResponse = await response.json();
  return sessionSummaryResponse.sessionResult;
}
