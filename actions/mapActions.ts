import { Dispatch } from 'redux';

import { GET_AIR_QUALITY_DATA, MapActionTypes } from './types';
import { getAQData } from '../queries/airquality';
import { aqStationData } from '../types/_types';

export async function getAirQualityData(dispatch: Dispatch<MapActionTypes>) {
  const aqData: aqStationData[] = await getAQData();
  dispatch({
    type: GET_AIR_QUALITY_DATA,
    data: aqData,
  });
}
