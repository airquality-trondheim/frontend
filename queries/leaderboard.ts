import { LeaderboardElement, UserRanking } from '../types/_types';
const endpoint =
  'http://ec2-18-192-82-31.eu-central-1.compute.amazonaws.com/leaderboard/';

type UserElement = {
  _id: string;
  username: string;
  points: number;
  __v: 0;
  createdAt: string;
  updatedAt: string;
};

type Rankings = {
  rankings: UserElement[];
  last: boolean;
};

export async function fetchLeaderboardData(): Promise<LeaderboardElement[]> {
  const response: Response = await fetch(endpoint + 'top');
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
}

type UserRankingResponse = {
  ranking: number;
  user: UserElement;
};

export async function fetchUserRanking(userID: string): Promise<UserRanking> {
  const response: Response = await fetch(endpoint + 'user/' + userID);
  const userRankingResponse: UserRankingResponse = await response.json();
  const user: LeaderboardElement = {
    id: userRankingResponse.user._id,
    username: userRankingResponse.user.username,
    points: userRankingResponse.user.points,
  };
  const userRanking: UserRanking = {
    ranking: userRankingResponse.ranking,
    user: user,
  };
  return userRanking;
}
