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
  WeatherScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type MapParamList = {
  MapPage: undefined;
};

export type CompetitionParamList = {
  CompetitionPage: undefined;
  LeaderboardScreen: undefined;
  AchievementsScreen: undefined;
};

// Achievements
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

// User
export type UserElement = {
  _id: string;
  username: string;
  points: number;
  __v: 0;
  createdAt: string;
  updatedAt: string;
};

// Profile
export type ProfileParamList = {
  ProfilePage: undefined;
  SettingPage: undefined;
  SettingsFavoriteArea: undefined;
  SettingsHelp: undefined;
  SettingsPrivacy: undefined;
};

// Location
export type Station = {
  name: string;
  eoi: string;
  height: number;
  longitude: number;
  latitude: number;
  grunnkrets: {
    name: string;
    areacode: string;
  };
  delområde: {
    name: string;
    areacode: string;
  };
  kommune: {
    name: string;
    areacode: string;
  };
};

export type Location = {
  _id: string;
  name: string;
  path: string;
  longitude: number;
  latitude: number;
  areacode: string;
  areaclass: string;
  superareacode: string;
};

export type LocationState = {
  stations: Station[];
  locations: Location[];
  currentLocation: Location | null;
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

// Weather
export type WeatherElement = {
  time: string;
  temp: number;
  windSpeed: number;
  rain: number;
  symbol: string;
};

export type WeatherData = {
  today: WeatherElement[];
  tomorrow: WeatherElement[];
  lastFetched: Date;
};

// Airquality
type VariableElement = {
  value: number;
  units: string;
};

export type AirqualityTimeElement = {
  from: string;
  to: string;
  variables: {
    AQI: VariableElement;
    no2_concentration: VariableElement;
    AQI_no2: VariableElement;
    pm10_concentration: VariableElement;
    AQI_pm10: VariableElement;
    pm25_concentration: VariableElement;
    AQI_pm25: VariableElement;
  };
};

export type AirqualityForecast = {
  location: {
    name: string;
    longitude: number;
    latitude: number;
    areacode: string;
  };
  reftime: string;
  data: AirqualityTimeElement[];
};

export type AirqualityData = {
  areacode: string;
  airqualityData: AirqualityTimeElement[];
};
