// Navigation
export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Map: undefined;
  Competition: undefined;
  Profile: undefined;
};

export type HomeParamList = {
  LandingPage: undefined;
  WeatherScreen: undefined;
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

//Achievementstamp
export type AchievementStamp = {
  timestampEarned: Date;
  achievementId: string;
};

//Profile
export type UserProfile = {
  _id: string;
  username: string;
  points: number;
  level: number;
  achievements: AchievementStamp[];
  avatar: string;
  birthdate: string;
  homeArea: string;
  postalcode: string;
  street: string;
};

//ProfileResponse
export type ProfileResponse = {
  user: {
    _id: string;
    username: string;
    required: true;
    points: number;
    homeArea: string;
    level: number;
    achievements: AchievementStamp[];
    settings: { pushNotification: boolean };
    __v: number;
    createdAt: Date;
    updatedAt: Date;
  };
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
  SettingsAbout: undefined;
  SettingsHelp: undefined;
  SettingsPrivacy: undefined;
};

// Level
export type LevelResponse = {
  levelNo: number;
  name: string;
  iconUrl: string;
  pointThreshold: number;
  pointsRequired: number;
  qty: number;
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
  unit: string;
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

// Map
export type currentAqData = {
  name: string;
  latitude: number;
  longitude: number;
  data: AirqualityTimeElement;
};

export type MapData = {
  region: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  };
  aqData: currentAqData[];
};
