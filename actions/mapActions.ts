import { Dispatch } from 'redux';
import { GET_AIR_QUALITY_DATA, MapActionTypes } from './types';
import { fetchAirqualityDataForLocation } from '../queries/airquality';
import { fetchStations } from '../queries/locations';
import { AirqualityData, currentAqData } from '../types/_types';
import { Station } from '../types/_types';

export async function getAirQualityData(dispatch: Dispatch<MapActionTypes>) {
  const stations: Station[] | undefined = await fetchStations();
  let currentAirQualityData: currentAqData[] = [];

  stations?.forEach(async (station: Station) => {
    const airQualityData: AirqualityData | null = await fetchAirqualityDataForLocation(
      station.eoi,
    );
    if (airQualityData != null) {
      const currentAQIValue: number =
        airQualityData.AQI.todayData[airQualityData.index].value;

      currentAirQualityData.push({
        name: station.name,
        latitude: station.latitude,
        longitude: station.longitude,
        AQI_value: currentAQIValue,
      });
    }
  });
  dispatch({
    type: GET_AIR_QUALITY_DATA,
    data: currentAirQualityData,
  });
}
