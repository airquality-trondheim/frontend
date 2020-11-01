import { Dispatch } from 'redux';
import { getDataForComponent } from '../queries/airquality';
import { GET_AIRQUALITYFORSTATION, RootAction } from './types';

export async function getAirQualityDataForStation(
  dispatch: Dispatch<RootAction>,
  station: string,
) {
  const aqData = await getDataForComponent(station);
  if (aqData === null) {
    return;
  }
  dispatch({
    type: GET_AIRQUALITYFORSTATION,
    data: aqData,
  });
}
