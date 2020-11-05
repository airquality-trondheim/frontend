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
  AirQualityScreen: undefined;
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
  achievementId: string;
  achievementName: string;
  achievementDescription: string;
  achievementGroup: string;
  date?: Date;
};

export type AchievementData = {
  data: AchievementCardElement[];
};

export type AchievementReturnType = {
  achievements: AchievementReturnElement[];
};

export type AchievementReturnElement = {
  _id: string;
  name: string;
  category: string;
  iconUrl: string;
  description: string;
  qty: number;
  __v: number;
  createdAt: Date;
  updatedAt: Date;
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
  homeArea: string;
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
  level: number;
  achievements: AchievementStamp[];
  __v: 0;
  createdAt: string;
  updatedAt: string;
};

// Level
export type Level = {
  levelNo: number;
  name: string;
  iconUrl: string;
  pointThreshold: number;
  pointsRequired: number;
  qty: number;
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
  rank: number | '?';
  user: LeaderboardElement;
};

export type LeaderboardState = {
  data: LeaderboardElement[];
  localData: LeaderboardElement[];
  userRanking: UserRanking;
  localUserRanking: UserRanking;
};

// Points
export type PointsState = {
  points: number;
  name: string;
  avatar: string;
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
  AQI: AQIData;
  NO2_AQI: AQIData;
  PM10_AQI: AQIData;
  PM25_AQI: AQIData;
  index: number;
};

export type AQIData = {
  todayData: Array<{ clock: string; value: number }>;
  tomorrowData: Array<{ clock: string; value: number }>;
};

// Map
export type currentAqData = {
  name: string;
  latitude: number;
  longitude: number;
  AQI_value: number;
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
