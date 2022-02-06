import React from 'react';
import styled from 'styled-components';

import { weatherData } from '../../shared/types';

import { H2, TextSmall } from '../../styles/globalStyles';

type Props = {
  weather: weatherData
};

export const MainWeather: React.FC<Props> = ({ weather }) => {
  return (
    <WeatherContainer>
      <Image src={weather?.current.weather[0]?.icon && `http://openweathermap.org/img/wn/${weather?.current.weather[0]?.icon}@2x.png`} alt='current weather' />
      <TempWrapper>
        <H2>{weather?.current.temp && Math.floor(weather?.current.temp)}&deg;C</H2>
        <TextSmall>Feels like {Math.floor(weather?.current.feels_like)}&deg;C</TextSmall>
      </TempWrapper>
    </WeatherContainer>)
};

const WeatherContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 125px;
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