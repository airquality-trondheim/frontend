// Navigation
export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  TabTwo: undefined;
  Map: undefined;
  Competition: undefined;
  Profile: undefined;
};

export type HomeParamList = {
  LandingPage: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

//Achievements
export type AchievementCardGroup = {
  groups: AchievementCardElement[];
};

export type AchievementCardElement = {
  achievementSymbol: number;
  achievementName: string;
  achievementDescription: string;
  achievementGroup: string;
  Date: Date;
};

export type AchievementCardData = {
  data: AchievementCardElement[];
};

export type MapParamList = {
  MapPage: undefined;
};

export type CompetitionParamList = {
  CompetitionPage: undefined;
};


// User
export type UserElement = {
  _id: string;
  username: string;
  points: number;
  __v: 0;
  createdAt: string;
  updatedAt: string;

export type ProfileParamList = {
  ProfilePage: undefined;
  SettingPage: undefined;
  SettingsFavoriteArea: undefined;
  SettingsHelp: undefined;
  SettingsPrivacy: undefined;
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

// Points
export type PointsState = {
  points: number;
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
