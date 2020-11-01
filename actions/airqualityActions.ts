import { Dispatch } from 'redux';
import { fetchAirqualityDataForLocation } from '../queries/airquality';
import store from '../store';
import { GET_AIRQUALITY_FOR_LOCATION, RootAction } from './types';

export async function getAirQualityDataForLocation(
  dispatch: Dispatch<RootAction>,
  areacode: string,
) {
  const currentAreacode = store.getState().airquality.areacode;
  if (areacode === currentAreacode) {
    return;
  }
  const aqData = await fetchAirqualityDataForLocation(areacode);
  if (aqData === null) {
    return;
  }
  dispatch({
    type: GET_AIRQUALITY_FOR_LOCATION,
    areacode: aqData.areacode,
    airqualityData: aqData.airqualityData,
  });
}
