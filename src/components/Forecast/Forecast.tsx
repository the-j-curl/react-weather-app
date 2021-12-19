import React from 'react';
import styled from 'styled-components/macro';

import { convertLocalTime, convertLocalDay } from 'shared/variables';
import { dailyForecast } from 'shared/types';

type Props = {
  forecastData: any[]
}

export const Forecast: React.FC<Props> = ({ forecastData }) => {

  return (
    <ForecastContainer>
      <h3>8 day forecast</h3>
      <ForecastWrapper>
        {forecastData && forecastData.map((weather, index) => (
          <TestContainer key={index}>
            <p>{convertLocalDay(weather.dt)}</p>
            <p>Sunrise: {convertLocalTime(weather.sunrise)} | Sunset: {convertLocalTime(weather.sunset)}</p>
            <p>{weather.weather[0]?.description}</p>
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0]?.icon}@2x.png`} alt='weather icon' />
            <p>Min:{Math.floor(weather.temp.min)}c | Max:{Math.floor(weather.temp.max)}c</p>
          </TestContainer>
        ))}
      </ForecastWrapper>
    </ForecastContainer>
  )
}

const ForecastContainer = styled.section`
  border: 1px solid green;
`;

const TestContainer = styled.div` // TODO: Rename component
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 220px;
`;

const ForecastWrapper = styled.div`
  display: flex;
  overflow: scroll;
`;