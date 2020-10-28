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
  AirQualityScreen: undefined;
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
export type Location = {
  locationName: string;
  lat: string;
  lon: string;
  eoi: string;
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
    no2_nonlocal_fraction: VariableElement;
    no2_local_fraction_traffic_exhaust: VariableElement;
    no2_local_fraction_shipping: VariableElement;
    no2_local_fraction_heating: VariableElement;
    no2_local_fraction_industry: VariableElement;
    pm10_concentration: VariableElement;
    AQI_pm10: VariableElement;
    pm10_nonlocal_fraction: VariableElement;
    pm10_nonlocal_fraction_seasalt: VariableElement;
    pm10_local_fraction_traffic_exhaust: VariableElement;
    pm10_local_fraction_traffic_nonexhaust: VariableElement;
    pm10_local_fraction_shipping: VariableElement;
    pm10_local_fraction_heating: VariableElement;
    pm10_local_fraction_industry: VariableElement;
    pm25_concentration: VariableElement;
    AQI_pm25: VariableElement;
    pm25_nonlocal_fraction: VariableElement;
    pm25_nonlocal_fraction_seasalt: VariableElement;
    pm25_local_fraction_traffic_exhaust: VariableElement;
    pm25_local_fraction_traffic_nonexhaust: VariableElement;
    pm25_local_fraction_shipping: VariableElement;
    pm25_local_fraction_heating: VariableElement;
    pm25_local_fraction_industry: VariableElement;
    o3_concentration: VariableElement;
    AQI_o3: VariableElement;
    o3_nonlocal_fraction: VariableElement;
  };
};

export type AirqualityData = {
  location: string;
  time: AirqualityTimeElement[];
  lastFetched: Date;
};
