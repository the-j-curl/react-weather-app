import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components/macro';

import { CurrentWeather, Forecast } from 'components';
import { API_KEY } from 'shared/variables';
import { weatherData } from 'shared/types';

export const Main: React.FC = () => {
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
      <p>{error.message}</p>
    )
  }

  if (isLoading) {
    return (
      <p>Loading weather...</p>
    )
  }

  return (
    <MainWrapper>
      <p>Main</p>
      <CurrentWeather weather={weather ? weather : error} error={error} status={status} />
      <Forecast forecastData={weather ? weather?.daily : error} />
    </MainWrapper>
  )
}

const MainWrapper = styled.main`
  border: 1px dotted #000;
`;