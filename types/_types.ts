export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  TabTwo: undefined;
  Map: undefined;
  Competition: undefined;
};

export type HomeParamList = {
  LandingPage: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type MapParamList = {
  MapPage: undefined;
};

export type CompetitionParamList = {
  CompetitionPage: undefined;
};

// Leaderboard
export type LeaderboardElement = {
  id: string;
  username: string;
  points: number;
};

export type LeaderboardData = {
  data: LeaderboardElement[];
};

export type UserRanking = {
  ranking: number;
  user: LeaderboardElement;
};

export type LeaderboardState = {
  data: LeaderboardElement[];
  userRanking: UserRanking;
};

// Map
export type aqStationData = {
  _id: string;
  id: number;
  zone: string;
  municipality: string;
  area: string;
  station: string;
  eoi: string;
  component: string;
  fromTime: Date;
  toTime: Date;
  value: number;
  unit: string;
  latitude: number;
  longitude: number;
  timestep: number;
  index: number;
  color: string;
  isValid: boolean;
  __v: number;
};

export type MapData = {
  region: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  };
  aqData: aqStationData[];
};

//Session
export type waypoint = {
  longitude: number;
  latitude: number;
  timestamp: Date;
  pollutionLevel: string;
};

export type SessionSchema = {
  userId: string;
  sessionType: string;
  startTime: Date;
  stopTime: Date;
  waypoints: waypoint[];
};

/*
export type SessionSummary = {
  distance: number;
  time: string;
  totalPoints: number;
  activityPoints: number;
  airQualityPoints: number;
  achievementPoints: number;
};
*/

export type SessionResult = {
  millisecondsElapsed: number;
  metersTraveled: number;
  avgKmph: number;
  distancePoints: number;
  safeZonePoints: number;
  sumPoints: number;
};

export type SessionResponse = {
  userId: string;
  sessionType: string;
  startTime: Date;
  stopTime: Date;
  waypoints: waypoint[];
  sessionResult: SessionResult;
};

export type locationType = {
  coords: {
    accuracy: number;
    altitude: number;
    heading: number;
    latitude: number;
    longitude: number;
    speed: number;
  };
  timestamp: number;
};

export type locationData = {
  locations: locationType[];
};

//Weather
export type WeatherElement = {
  time: string;
  temp: number;
  windSpeed: number;
  rain: number;
  symbol: string;
};

export type WeatherData = {
  data: WeatherElement[];
  lastFetched: Date;
};
