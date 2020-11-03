import { Location, Station } from '../types/_types';

const endpoint = 'http://ec2-18-192-82-31.eu-central-1.compute.amazonaws.com/';

export async function fetchStations(): Promise<Station[] | undefined> {
  try {
    const response: Response = await fetch(endpoint + 'stations/');
    const stations: Station[] = await response.json();

    return stations;
  } catch (error) {
    console.log('Error fetching stations');
    return;
  }
}

export async function fetchLocations(): Promise<Location[] | undefined> {
  try {
    const response: Response = await fetch(endpoint + 'areas/');
    const locations: Location[] = await response.json();

    return locations;
  } catch (error) {
    console.log('Error fetching locations');
    return;
  }
}
