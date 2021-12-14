import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components/macro';

import { API_KEY, convertLocalTime } from 'shared/variables';
import { weatherData } from 'shared/types';

export const CurrentWeather: React.FC = () => {
  const [weather, setWeather] = useState<weatherData>();
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [latitude, setLatitude] = useState<number | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  const API_URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=minutely,hourly&appid=${API_KEY}`

  const fetchWeather: any = useCallback(async () => {
    try {
      setError(null)
      setIsLoading(true)
      const res = await fetch(API_URL)
      const data = await res.json()
      if (!res.ok) {
        throw Error('Could not fetch data')
      }
      setWeather(data)
      console.log("Weather data:", data)
      console.log("Daily forecast:", data.daily)
      setIsLoading(false)
    } catch (err) {
      setError(err)
      setIsLoading(false)
      console.log(err)
    }
  }, [API_URL]);


  useEffect(() => {
    getLocation()
    if (latitude && longitude) {
      fetchWeather()
      console.log("fetch weather")
    }

  }, [fetchWeather, latitude, longitude]);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        setLongitude(position.coords.longitude);
        setLatitude(position.coords.latitude);
      }, () => {
        setStatus('Unable to retrieve your location');
      });
    }
  };

  if (error) {
    return (
      <CurrentContainer>
        <p>{error.message}</p>
      </CurrentContainer>
    )
  }

  if (isLoading) {
    return (
      <CurrentContainer>
        <p>Loading weather...</p>
      </CurrentContainer>
    )
  }

  return (
    <CurrentContainer>
      <p>Timezone: {weather?.timezone}</p>
      <p>{weather?.current.weather[0]?.description}</p>
      <img src={weather?.current.weather[0]?.icon && `http://openweathermap.org/img/wn/${weather?.current.weather[0]?.icon}@2x.png`} alt='current weather' />
      <p>Temp: {weather?.current.temp && weather?.current.temp}c</p>
      <p>Main: {weather?.current.weather[0]?.main}</p>
      <p>Sunrise: {weather?.current.sunrise && convertLocalTime(weather.current.sunrise)} | Sunset: {weather?.current.sunset && convertLocalTime(weather?.current.sunset)}</p>
      <div>
        <h1>Coordinates</h1>
        <p>{status}</p>
        {latitude && <p>Latitude: {latitude}</p>}
        {longitude && <p>Longitude: {longitude}</p>}
      </div>
    </CurrentContainer>
  )
}

const CurrentContainer = styled.section`
  border: 1px dotted red;
`;