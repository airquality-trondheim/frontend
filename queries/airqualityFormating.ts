// Levels: 1 -low, 2 -medium, 3 -high, 4 -very high
export function aqiFormatPM25(x: number) {
  let aqi = 1;
  if (x < 0) {
    aqi = 1;
  } else if (x < 30.0) {
    aqi = x / 30.0 + 1;
  } else if (x < 50.0) {
    aqi = (x - 30.0) / (50.0 - 30.0) + 2;
  } else if (x < 150.0) {
    aqi = (x - 50.0) / (150.0 - 50.0) + 3;
  } else {
    aqi = x / 150.0 + 3;
  }
  if (aqi > 4.999) {
    aqi = 4.999;
  }
  return aqi;
}

export function aqiFormatPM10(x: number) {
  let aqi = 1;
  if (x < 0) {
    aqi = 1;
  } else if (x < 60.0) {
    aqi = x / 60.0 + 1;
  } else if (x < 120.0) {
    aqi = (x - 60.0) / (120.0 - 60.0) + 2;
  } else if (x < 400.0) {
    aqi = (x - 120.0) / (400.0 - 120.0) + 3;
  } else {
    aqi = x / 400.0 + 3;
  }
  if (aqi > 4.999) {
    aqi = 4.999;
  }
  return aqi;
}

export function aqiFormatNO2(x: number) {
  let aqi = 1;
  if (x < 0) {
    aqi = 1;
  } else if (x < 100.0) {
    aqi = x / 100.0 + 1;
  } else if (x < 200.0) {
    aqi = (x - 100.0) / (200.0 - 100.0) + 2;
  } else if (x < 400.0) {
    aqi = (x - 200.0) / (400.0 - 200.0) + 3;
  } else {
    aqi = x / 400.0 + 3;
  }
  if (aqi > 4.999) {
    aqi = 4.999;
  }
  return aqi;
}

export function aqiFormatAQI(x: number) {
  let aqi = 1;
  if (x < 0) {
    aqi = 1;
  } else if (x < 2.0) {
    aqi = x / 2.0 + 1;
  } else if (x < 3.0) {
    aqi = (x - 2.0) / (3.0 - 2.0) + 2;
  } else if (x < 4.0) {
    aqi = (x - 3.0) / (4.0 - 3.0) + 3;
  } else {
    aqi = x / 4.0 + 3;
  }
  if (aqi > 4.999) {
    aqi = 4.999;
  }
  return aqi;
}
