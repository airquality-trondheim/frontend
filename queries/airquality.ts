import axios from 'axios';
//import store from '../store';
import { aqStationData } from '../types/_types';

// TODO: Flytte URL?
const apiUrl =
  // 'http://ec2-18-192-82-31.eu-central-1.compute.amazonaws.com/airquality';
  'https://api.nilu.no/aq/utd?areas=trondheim&components=pm10';

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
