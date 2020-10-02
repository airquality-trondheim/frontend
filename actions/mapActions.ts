import { Dispatch } from 'redux';
import store from '../store';
import { GET_AIR_QUALITY_DATA, MapActionTypes } from './types';
import { getAQData } from '../queries/airquality';
import { aqStationData } from '../types/_types';

export async function getAirQualityData(dispatch: Dispatch<MapActionTypes>) {
  let aqData: aqStationData[] = [];
  aqData = await getAQData();
  dispatch({
    type: GET_AIR_QUALITY_DATA,
    data: aqData,
  });
  console.log('Fetch finished!');
  console.log(aqData);
}
