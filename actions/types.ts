import {
  AchievementCardElement,
  aqStationData,
  LeaderboardElement,
  UserRanking,
  WeatherElement,
  UserProfile,
  Location,
  Station,
  AirqualityTimeElement,
} from '../types/_types';

export type RootAction =
  | WeatherActionTypes
  | LeaderboardActionTypes
  | MapActionTypes
  | AchievementCardActionTypes
  | UserProfileActionTypes
  | PointsActionTypes
  | AchievementCardActionTypes
  | AirqualityActionTypes
  | LocationsActionTypes;

// Airquality
export const GET_AIRQUALITY_FOR_LOCATION = 'GET_AIRQUALITY_FOR_LOCATION';

type GetAirqualityForStationAction = {
  type: typeof GET_AIRQUALITY_FOR_LOCATION;
  areacode: string;
  airqualityData: AirqualityTimeElement[];
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

type GetUserProfileAction = {
  type: typeof GET_USERPROFILE;
  userProfile: UserProfile;
};

export type UserProfileActionTypes = GetUserProfileAction;

// Weather
export const GET_WEATHER = 'GET_WEATHER';

type GetWeatherAction = {
  type: typeof GET_WEATHER;
  today: WeatherElement[];
  tomorrow: WeatherElement[];
  lastFetched: Date;
};

export type WeatherActionTypes = GetWeatherAction;

// Leaderboard
export const GET_LEADERBOARD = 'GET_LEADERBOARD';
export const GET_USERRANKING = 'GET_USERRANKING';

type GetLeaderboardAction = {
  type: typeof GET_LEADERBOARD;
  data: LeaderboardElement[];
};

type GetUserRankingAction = {
  type: typeof GET_USERRANKING;
  userRanking: UserRanking;
};

export type LeaderboardActionTypes =
  | GetLeaderboardAction
  | GetUserRankingAction;

// Map
export const GET_AIR_QUALITY_DATA = 'GET_AIR_QUALITY_DATA';

type GetAirQualityDataAction = {
  type: typeof GET_AIR_QUALITY_DATA;
  data: aqStationData[];
};

export type MapActionTypes = GetAirQualityDataAction;

// Points
export const GET_USERPOINTS = 'GET_USERPOINTS';

type GetUserPointsAction = {
  type: typeof GET_USERPOINTS;
  points: number;
};

export type PointsActionTypes = GetUserPointsAction;

// Locations
export const GET_STATIONS = 'GET_STATIONS';
export const GET_LOCATIONS = 'GET_LOCATIONS';
export const GET_CURRENT_LOCATION = 'GET_CURRENT_LOCATION';
export const POST_CURRENT_LOCATION = 'POST_CURRENT_LOCATION';

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

type PostCurrentLocation = {
  type: typeof POST_CURRENT_LOCATION;
  currentLocation: Location;
};

export type LocationsActionTypes =
  | GetStationsAction
  | GetLocationsAction
  | GetCurrentLocation
  | PostCurrentLocation;
