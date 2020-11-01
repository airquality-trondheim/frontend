import { LeaderboardElement, UserElement, UserRanking } from '../types/_types';
const endpoint =
  'http://ec2-18-192-82-31.eu-central-1.compute.amazonaws.com/leaderboard/';

type Rankings = {
  rankings: UserElement[];
  last: boolean;
};

export async function fetchLeaderboardData(area?: string): Promise<LeaderboardElement[]> {
  try {

    const dir = area === undefined ? 'top?limit=10' : 'top?limit=10&area=' + area;

    const response: Response = await fetch(endpoint + dir);
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
    return area === undefined ? [
      { id: 'raeseeie2', username: 'Slangen', points: 1200 },
      { id: 'raesfsie2', username: 'Minken', points: 1000 },
      { id: 'raesfdie2', username: 'Haren', points: 600 },
      { id: 'raesxsie2', username: 'Blekkspruten', points: 250 },
      { id: 'raesfuie2', username: 'Røyskatten', points: 200 },
      { id: 'raesfuie4', username: 'Uglen', points: 150 },
      { id: 'raesfuie5', username: 'Marken', points: 100 },
      { id: 'raesfuie6', username: 'Katten', points: 80 },
      { id: 'raesfuie7', username: 'Hunden', points: 60 },
      { id: 'raesfuie8', username: 'Ulven', points: 50 },
    ] : [
      { id: 'raeseeie2', username: 'Slangen', points: 1200 },
      { id: 'raesxsie2', username: 'Blekkspruten', points: 250 },
      { id: 'raesfuie2', username: 'Røyskatten', points: 200 },
      { id: 'raesfuie4', username: 'Uglen', points: 150 },
      { id: 'raesfuie6', username: 'Katten', points: 80 },
      { id: 'raesfuie7', username: 'Hunden', points: 60 },
    ];
  }
}

type UserRankingResponse = {
  ranking: number;
  user: UserElement;
};

export async function fetchUserRanking(userID: string, area?: string): Promise<UserRanking> {
  try {

    const dir = area === undefined ? userID : userID + '&area=' + area;

    const response: Response = await fetch(endpoint + 'user/' + dir);
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
  } catch (error) {
    return area === undefined ? {
      ranking: 5,
      user: { id: 'raesfuie2', username: 'Røyskatten', points: 200 },
    } : {
      ranking: 3,
      user: { id: 'raesfuie2', username: 'Røyskatten', points: 200}
    };
  }
}
