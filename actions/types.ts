import {
  AchievementCardElement,
  LeaderboardElement,
  UserRanking,
  WeatherElement,
  UserProfile,
  Location,
  Station,
  AQIData,
  currentAqData,
} from '../types/_types';

export type RootAction =
  | WeatherActionTypes
  | LeaderboardActionTypes
  | MapActionTypes
  | AchievementCardActionTypes
  | UserProfileActionTypes
  | AchievementCardActionTypes
  | AirqualityActionTypes
  | LocationsActionTypes;

// Airquality
export const GET_AIRQUALITY_FOR_LOCATION = 'GET_AIRQUALITY_FOR_LOCATION';

type GetAirqualityForStationAction = {
  type: typeof GET_AIRQUALITY_FOR_LOCATION;
  areacode: string;
  AQI: AQIData;
  NO2_AQI: AQIData;
  PM10_AQI: AQIData;
  PM25_AQI: AQIData;
  index: number;
};

export type AirqualityActionTypes = GetAirqualityForStationAction;

// Achievements

export const GET_ACHIEVEMENTCARD = 'GET_ACHIEVEMENT';

type GetAchievementCardAction = {
  type: typeof GET_ACHIEVEMENTCARD;
  data: AchievementCardElement[];
};

export type AchievementCardActionTypes = GetAchievementCardAction;

// Profile

export const GET_USERPROFILE = 'GET_USERPROFILE';
export const PUT_HOMEAREA = 'PUT_HOMEAREA';

type GetUserProfileAction = {
  type: typeof GET_USERPROFILE;
  userProfile: UserProfile;
};

type PutHomeAreaAction = {
  type: typeof PUT_HOMEAREA;
  homeArea: string;
};

export type UserProfileActionTypes = GetUserProfileAction | PutHomeAreaAction;

// Weather
export const GET_WEATHER = 'GET_WEATHER';
export const PUT_LAST_FETCHED = 'PUT_LAST_FETCHED';

type GetWeatherAction = {
  type: typeof GET_WEATHER;
  today: WeatherElement[];
  tomorrow: WeatherElement[];
  lastFetched: Date;
};

type PutLastFetched = {
  type: typeof PUT_LAST_FETCHED;
  lastFetched: Date;
};

export type WeatherActionTypes = GetWeatherAction | PutLastFetched;

// Leaderboard
export const GET_LEADERBOARD = 'GET_LEADERBOARD';
export const GET_USERRANKING = 'GET_USERRANKING';
export const GET_LOCALLEADERBOARD = 'GET_LOCALLEADERBOARD';
export const GET_LOCALUSERRANKING = 'GET_LOCALUSERRANKING';

type GetLeaderboardAction = {
  type: typeof GET_LEADERBOARD;
  data: LeaderboardElement[];
};

type GetUserRankingAction = {
  type: typeof GET_USERRANKING;
  userRanking: UserRanking;
};

type GetLocalLeaderboardAction = {
  type: typeof GET_LOCALLEADERBOARD;
  localData: LeaderboardElement[];
};

type GetLocalUserRankingAction = {
  type: typeof GET_LOCALUSERRANKING;
  localUserRanking: UserRanking;
};

export type LeaderboardActionTypes =
  | GetLeaderboardAction
  | GetUserRankingAction
  | GetLocalLeaderboardAction
  | GetLocalUserRankingAction;

// Map
export const GET_AIR_QUALITY_DATA = 'GET_AIR_QUALITY_DATA';

type GetAirQualityDataAction = {
  type: typeof GET_AIR_QUALITY_DATA;
  data: currentAqData[];
};

export type MapActionTypes = GetAirQualityDataAction;

// Locations
export const GET_STATIONS = 'GET_STATIONS';
export const GET_LOCATIONS = 'GET_LOCATIONS';
export const GET_CURRENT_LOCATION = 'GET_CURRENT_LOCATION';
export const PUT_CURRENT_LOCATION = 'PUT_CURRENT_LOCATION';

type GetStationsAction = {
  type: typeof GET_STATIONS;
  stations: Station[];
};

type GetLocationsAction = {
  type: typeof GET_LOCATIONS;
  locations: Location[];
};

type GetCurrentLocation = {
  type: typeof GET_CURRENT_LOCATION;
  currentLocation: Location;
};

type PutCurrentLocation = {
  type: typeof PUT_CURRENT_LOCATION;
  currentLocation: Location;
};

export type LocationsActionTypes =
  | GetStationsAction
  | GetLocationsAction
  | GetCurrentLocation
  | PutCurrentLocation;
