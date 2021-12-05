import React, { useEffect, useState, useCallback } from 'react'
import styled from 'styled-components/macro'

// import { API_KEY } from 'shared/variables';

type weatherData = {
  lat: number,
  lon: number,
  timezone: "America/Chicago",
  timezone_offset: number,
  current: {
    dt: number,
    sunrise: number,
    sunset: number,
    temp: number,
    feels_like: number,
    pressure: number,
    humidity: number,
    dew_point: number,
    uvi: number,
    clouds: number,
    visibility: number,
    wind_speed: number,
    wind_deg: number,
    wind_gust: number,
    // weather: any[],
  }
}

export const CurrentWeather: React.FC = () => {
  const [weather, setWeather] = useState<weatherData>()
  const [error, setError] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  // const [longitude, setLongitude] = useState('-94.04')
  // const [latitude, setLatitude] = useState('33.44')

  // const API_URL = `https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=minutely,hourly,daily&appid=${API_KEY}`
  const API_URL2 = `https://`

  const fetchCurrentWeather: any = useCallback(async () => {
    try {
      setError(null)
      setIsLoading(true)
      const res = await fetch(API_URL2)
      const data = await res.json()
      if (!res.ok) {
        throw Error('Could not fetch data')
      }
      setWeather(data)
      setIsLoading(false)
    } catch (err) {
      setError(err)
      setIsLoading(false)
      console.log(err)
    }
  }, [API_URL2])


  useEffect(() => {
    fetchCurrentWeather()
  }, [fetchCurrentWeather])

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
      <p>Current City | Current Weather</p>
      <p>Timezone: {weather?.timezone}</p>
      <p>Timezone: {weather?.current.temp}</p>
      <p>Sunrise: {weather?.current.sunrise} | Sunset: {weather?.current.sunrise}</p>
      {/* <p>{weather?.weather[0]?.description}</p> */}
    </CurrentContainer>
  )
}

const CurrentContainer = styled.section`
  border: 1px dotted red;
`;