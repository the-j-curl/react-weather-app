export type weatherData = {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  daily: any[];
  current: {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    weather: any[];
  };
};

export type dailyForecast = [
  {
    clouds: number;
    dew_point: number;
    dt: number;
    feels_like: { day: number; night: number; eve: number; morn: number };
    humidity: number;
    moon_phase: number;
    moonrise: number;
    moonset: number;
    pop: number;
    pressure: number;
    rain: number;
    snow: number;
    sunrise: number;
    sunset: number;
    temp: {
      day: number;
      min: number;
      max: number;
      night: number;
      eve: number;
    };
    uvi: number;
    weather: any[];
    wind_deg: number;
    wind_gust: number;
    wind_speed: number;
  },
];
