import { Auth } from 'aws-amplify';
import { LeaderboardElement, UserElement, UserRanking } from '../types/_types';
const endpoint =
  'http://ec2-18-192-82-31.eu-central-1.compute.amazonaws.com/leaderboard/users/';

type Rankings = {
  rankings: UserElement[];
  last: boolean;
};

export async function fetchLeaderboardData(
  area?: string,
): Promise<LeaderboardElement[]> {
  try {
    const dir =
      area === undefined ? 'top?limit=10' : 'top?limit=10&areaName=' + area;
    
    const response: Response = await fetch(endpoint + dir, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        accesstoken:
          Auth.Credentials.Auth.user.signInUserSession.accessToken.jwtToken,
      },
    });
    const rankings: Rankings = await response.json();

    let data: LeaderboardElement[] = [];
    for (let user of rankings.rankings) {
      data.push({
        id: user._id,
        username: user.username,
        points: user.points,
      });
    }
    return data;
  } catch (error) {
    console.log("failed to get leaderboard data");
    return [];
  }
}

type UserRankingResponse = {
  rank: number;
  user: UserElement;
};

export async function fetchUserRanking(
  userID: string,
): Promise<UserRanking> {
  try {
    const dir = userID;

    const response: Response = await fetch(endpoint + dir, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        accesstoken:
          Auth.Credentials.Auth.user.signInUserSession.accessToken.jwtToken,
      },
    });

    const userRankingResponse: UserRankingResponse = await response.json();
    const user: LeaderboardElement = {
      id: userRankingResponse.user._id,
      username: userRankingResponse.user.username,
      points: userRankingResponse.user.points,
    };
    const userRanking: UserRanking = {
      rank: userRankingResponse.rank,
      user: user,
    };
    return userRanking;
  } catch (error) {
    console.log("error fetching userrank");
    return {
      rank: '?',
      user: { id: '?', username: '?', points: 0 },
    };
  }
}

export async function fetchLocalUserRanking(
  userID: string,
  area: string,
): Promise<UserRanking> {
  try {
    const dir = userID + '?areaName=' + area;

    const response: Response = await fetch(endpoint + dir, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        accesstoken:
          Auth.Credentials.Auth.user.signInUserSession.accessToken.jwtToken,
      },
    });

    const userRankingResponse: UserRankingResponse = await response.json();
    const user: LeaderboardElement = {
      id: userRankingResponse.user._id,
      username: userRankingResponse.user.username,
      points: userRankingResponse.user.points,
    };
    const userRanking: UserRanking = {
      rank: userRankingResponse.rank,
      user: user,
    };
    return userRanking;
  } catch (error) {
    console.log("error Local fetching userrank");
    return {
      rank: '?',
      user: { id: '?', username: '?', points: 0 },
    };
  }
}