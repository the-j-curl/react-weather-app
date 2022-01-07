import React from 'react';
import styled from 'styled-components/macro';

import { Description, TextSmall } from 'components/CurrentWeather'

import { convertLocalTime, convertLocalDay, getDay, capitaliseFirstLetter } from 'shared/variables';
// import { dailyForecast } from 'shared/types';

type Props = {
  forecastData: any[]
}

export const Forecast: React.FC<Props> = ({ forecastData }) => {

  const currentDate = new Date().getDate();

  return (
    <ForecastContainer>
      <ForecastWrapper>
        {forecastData && forecastData.map((weather, index) => (
          <TestContainer key={index}>
            <H4>{currentDate !== getDay(weather.dt) ? convertLocalDay(weather.dt) : 'Today'}</H4>
            {/* <p>Sunrise: {convertLocalTime(weather.sunrise)} | Sunset: {convertLocalTime(weather.sunset)}</p> */}
            <ImgSmall src={`http://openweathermap.org/img/wn/${weather.weather[0]?.icon}@2x.png`} alt='weather icon' />
            <DescriptionSmall>{capitaliseFirstLetter(weather.weather[0]?.description)}</DescriptionSmall>
            <TextSmall>Min: {Math.floor(weather.temp.min)}&deg;C | Max: {Math.floor(weather.temp.max)}&deg;C</TextSmall>
          </TestContainer>
        ))}
      </ForecastWrapper>
    </ForecastContainer>
  )
}

const ForecastContainer = styled.section`
  margin: 0 0 20px 0;
`;

const TestContainer = styled.div` // TODO: Rename component
  border-right: 1px solid #c0bcbc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 160px;
  padding: 8px 0;
`;

const ForecastWrapper = styled.div`
  border-top: 1px dotted #c0bcbc;
  display: flex;
  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
	scroll-behavior: smooth;
	::-webkit-scrollbar {
		display: none;
`;

const H4 = styled.h4`
  margin: 0;
`;

const ImgSmall = styled.img`
  width: 75px;
`;

const DescriptionSmall = styled(Description)`
  font-size: 16px;
`;