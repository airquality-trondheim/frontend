import { AirqualityData, AirqualityForecast } from '../types/_types';

const baseUrl =
  'http://ec2-18-192-82-31.eu-central-1.compute.amazonaws.com/air-quality/forecast/';

export async function fetchAirqualityDataForLocation(
  areacode: string,
): Promise<AirqualityData | null> {
  const endpoint = baseUrl + areacode;
  try {
    const res: Response = await fetch(endpoint);
    const data: AirqualityForecast = await res.json();
    return {
      areacode: data.location.areacode,
      airqualityData: data.data,
    };
  } catch (error) {
    console.log('Could not fetch airquality for given areacode');
    return null;
  }
}
