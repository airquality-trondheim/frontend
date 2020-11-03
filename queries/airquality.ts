import axios from 'axios';
import {
  AirqualityData,
  AirqualityForecast,
  AQIData,
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
    let AQI: AQIData = { todayData: [], tomorrowData: [] };
    let NO2_AQI: AQIData = { todayData: [], tomorrowData: [] };
    let PM10_AQI: AQIData = { todayData: [], tomorrowData: [] };
    let PM25_AQI: AQIData = { todayData: [], tomorrowData: [] };
    const currentDate = new Date().getUTCDate();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getUTCDate() + 1);
    const res: Response = await fetch(endpoint);
    const data: AirqualityForecast = await res.json();
    let clock = '';
    let object;
    for (let i = 0; i < data.data.length - 1; i++) {
      let dataDate = new Date(data.data[i].from).getUTCDate();
      clock = data.data[i].from.substring(11, 13);
      object = data.data[i].variables;
      if (dataDate === currentDate) {
        AQI.todayData.push({
          clock: clock,
          value: Math.round(object.AQI.value),
        });
        NO2_AQI.todayData.push({
          clock: clock,
          value: Math.round(object.AQI_no2.value + Number.EPSILON),
        });
        PM10_AQI.todayData.push({
          clock: clock,
          value: Math.round(object.AQI_pm10.value + Number.EPSILON),
        });
        PM25_AQI.todayData.push({
          clock: clock,
          value: Math.round(object.AQI_pm25.value + Number.EPSILON),
        });
      } else if (dataDate === tomorrow.getUTCDate()) {
        AQI.tomorrowData.push({
          clock: clock,
          value: Math.round(object.AQI.value + Number.EPSILON),
        });
        NO2_AQI.tomorrowData.push({
          clock: clock,
          value: Math.round(object.AQI_no2.value + Number.EPSILON),
        });
        PM10_AQI.tomorrowData.push({
          clock: clock,
          value: Math.round(object.AQI_pm10.value + Number.EPSILON),
        });
        PM25_AQI.tomorrowData.push({
          clock: clock,
          value: Math.round(object.AQI_pm25.value + Number.EPSILON),
        });
      }
    }

    const currentHour = new Date().getHours().toString();
    const newIndex = AQI.todayData.findIndex(
      (obj) => obj.clock === currentHour,
    );

    return {
      areacode: areacode,
      AQI: AQI,
      NO2_AQI: NO2_AQI,
      PM10_AQI: PM10_AQI,
      PM25_AQI: PM25_AQI,
      index: newIndex,
    };
  } catch (error) {
    console.log('Could not fetch airquality for given areacode');
    return null;
  }
}
