import axios, { AxiosRequestConfig } from 'axios';
import { aqStationData } from '../types/_types';

const apiUrl =
  'http://ec2-18-192-82-31.eu-central-1.compute.amazonaws.com/airquality';

export async function getAQData() {
  const config: AxiosRequestConfig = {
    method: 'get',
    url: apiUrl,
  };
  let result: aqStationData[] = [];
  let r = await axios(config)
    .then((res) => {
      result = res.data;
    })
    .catch((err) => console.log('Error', err));
  return result;
}
