import { Dispatch } from 'redux';
import { GET_AIR_QUALITY_DATA, MapActionTypes } from './types';
import { fetchAirqualityDataForLocation } from '../queries/airquality';
import { fetchStations } from '../queries/locations';
import {
  AirqualityData,
  AirqualityTimeElement,
  currentAqData,
} from '../types/_types';
import { Station } from '../types/_types';

export async function getAirQualityData(dispatch: Dispatch<MapActionTypes>) {
  const stations: Station[] | undefined = await fetchStations();
  let currentAirQualityData: currentAqData[] = [];

  let date = new Date(Date.now());
  date.setHours(date.getHours() + 1);
  date.setMinutes(0);
  date.setSeconds(0);
  let dateString = date.toISOString().split('.')[0] + 'Z';

  stations?.forEach(async (station: Station) => {
    const airQualityData: AirqualityData | null = await fetchAirqualityDataForLocation(
      station.eoi,
    );
    if (airQualityData != null) {
      const currentData: AirqualityTimeElement =
        airQualityData.airqualityData.find((i) => i.from === dateString) ||
        airQualityData.airqualityData[0];

      currentAirQualityData.push({
        name: station.name,
        latitude: station.latitude,
        longitude: station.longitude,
        data: currentData,
      });
    }
  });
  dispatch({
    type: GET_AIR_QUALITY_DATA,
    data: currentAirQualityData,
  });
}
