import React from 'react';
import styled from 'styled-components/macro';

import { convertLocalTime, trimTimeZoneString, capitaliseFirstLetter } from 'shared/variables';
import { weatherData } from 'shared/types';

type Props = {
  weather: weatherData
  status: string | null // Use this to display error message to user if user location has not been recieved 
}

export const CurrentWeather: React.FC<Props> = ({ weather, status }) => {

  return (
    <CurrentContainer>
      <HeaderText>{weather && trimTimeZoneString(weather.timezone)}</HeaderText>
      <TextSmall>Sunrise: {weather?.current.sunrise && convertLocalTime(weather.current.sunrise)} | Sunset: {weather?.current.sunset && convertLocalTime(weather?.current.sunset)}</TextSmall>
      <RegularText>Next Hour</RegularText>
      <TemperatureWrapper>
        <Image src={weather?.current.weather[0]?.icon && `http://openweathermap.org/img/wn/${weather?.current.weather[0]?.icon}@2x.png`} alt='current weather' />
        <TempWrapper>
          <HeaderText>{weather?.current.temp && Math.floor(weather?.current.temp)}&deg;C</HeaderText>
          <TextSmall>Feels like {Math.floor(weather?.current.feels_like)}&deg;C</TextSmall>
        </TempWrapper>
      </TemperatureWrapper>
      <Description>{weather && capitaliseFirstLetter(weather.current.weather[0]?.description)}</Description>
    </CurrentContainer>
  )

}

const CurrentContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  padding: 10px; 
`;

const HeaderText = styled.h2`
  font-size: 40px;
  font-weight: 500;
  margin: 2px 0;
`;

export const TextSmall = styled.p`
  font-size: 14px;
  margin: 0;
`;

const TemperatureWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;

const TempWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const Image = styled.img`
  width: 120px;
`;

export const Description = styled.p`
  margin: 6px 0;
  font-size: 20px;
`;

const RegularText = styled.p`
  margin: 4px 0;
`;