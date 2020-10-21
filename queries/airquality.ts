import axios from 'axios';
import { locations } from '../constants/Locations';
import store from '../store';
//import store from '../store';
import { AirqualityData, aqStationData } from '../types/_types';

// TODO: Flytte URL?
const apiUrl = 'https://api.nilu.no/aq/utd?areas=trondheim&components=pm10';
const baseUrl = 'https://api.met.no/weatherapi/airqualityforecast/0.1/';

export async function getAQData() {
  // const data = [...store.getState().map.aqData];
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

export async function getDataForComponent(
  station: string,
): Promise<AirqualityData | null> {
  const endpoint = baseUrl + '?station=' + locations[station].eoi;
  const lastFetched = store.getState().airquality.lastFetched;
  const headers = {
    'User-Agent': 'NTNU-Kundestyrtprosjekt sunniva.bk@gmail.com',
    'If-Modified-Since': lastFetched.toUTCString(),
  };
  try {
    let res = await axios.get(endpoint, { headers });
    const updatedLastFetched = new Date(res.headers['last-modified']);
    return {
      location: station,
      time: res.data.data.time,
      lastFetched: updatedLastFetched,
    };
  } catch (error) {
    console.log(error.response['status']);
    return null;
  }
}
