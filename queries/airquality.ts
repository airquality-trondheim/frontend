import axios from 'axios';
import {
  AirqualityData,
  AirqualityForecast,
  aqStationData,
} from '../types/_types';

// TODO: Flytte URL?
const apiUrl = 'https://api.nilu.no/aq/utd?areas=trondheim&components=pm10';
const baseUrl =
  'http://ec2-18-192-82-31.eu-central-1.compute.amazonaws.com/air-quality/forecast/';

export async function getAQData() {
  let result: aqStationData[] = [];
  try {
    let r = await axios.get(apiUrl);
    result = r.data;
    return result;
  } catch (error) {
    console.log(error.response['status']);
    return result;
  }
}

export async function fetchAirqualityDataForLocation(
  areacode: string,
): Promise<AirqualityData | null> {
  const endpoint = baseUrl + areacode;
  try {
    const res: Response = await fetch(endpoint);
    const data: AirqualityForecast = await res.json();
    console.log('aq', data.data);
    return {
      areacode: data.location.areacode,
      airqualityData: data.data,
    };
  } catch (error) {
    console.log('Could not fetch airquality for given areacode');
    return null;
  }
}
