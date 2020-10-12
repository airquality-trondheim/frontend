import { SessionSchema, SessionSummary } from '../types/_types';
const endpoint =
  'http://ec2-18-192-82-31.eu-central-1.compute.amazonaws.com/session';

export async function postSessionData(
  sessionData: SessionSchema,
): Promise<SessionSummary> {
  console.log(`Send request to ${endpoint}/${sessionData.userId}`);
  // const response: Response = await fetch(endpoint + sessionData.userId, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: sessionData,
  // });
  // const sessionSummaryResponse: SessionSummary = await response.json();
  // return sessionSummaryResponse;
  return {
    distance: 5.4,
    time: '1:05',
    totalPoints: 480,
    activityPoints: 380,
    airQualityPoints: 40,
    achievementPoints: 60,
  };
}
