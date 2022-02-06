import React, { useState } from 'react';
import styled from 'styled-components/macro';

import { convertLocalTime, trimTimeZoneString, capitaliseFirstLetter } from 'shared/variables';
import { weatherData } from 'shared/types';
import { ArrowButton, AdditionalWeather, MainWeather } from 'components';

import { DescriptionText, H2, TextSmall } from '../../styles/globalStyles';

type Props = {
  weather: weatherData
  status: string | null // TODO: Use this to display error message to user if user location has not been recieved 
}

export const CurrentWeather: React.FC<Props> = ({ weather, status }) => {
  const [isPageOne, setIsPageOne] = useState<boolean>(true);
  // TODO: Make the weather data more accurate. IE use morning, afternoon, evenening values. Try to use current time to use these: 'Evening: feels like: -3'
  const handleOnClick = () => {
    setIsPageOne(!isPageOne)
  };

  return (


    <MainContainer>
      <H2>{weather && trimTimeZoneString(weather.timezone)}</H2>
      <TextSmall>Sunrise: {weather?.current.sunrise && convertLocalTime(weather.current.sunrise)} | Sunset: {weather?.current.sunset && convertLocalTime(weather?.current.sunset)}</TextSmall>
      <RegularText>Next Hour</RegularText>
      {isPageOne ?
        <>
          <WeatherWrapper>
            <ArrowButton icon='left' handleOnClick={handleOnClick} />
            <MainWeather weather={weather} />
            <ArrowButton icon='right' handleOnClick={handleOnClick} />
          </WeatherWrapper>
        </>
        :
        <WeatherWrapper>
          <ArrowButton icon='left' handleOnClick={handleOnClick} />
          <AdditionalWeather weather={weather} />
          <ArrowButton icon='right' handleOnClick={handleOnClick} />
        </WeatherWrapper>
      }
      <DescriptionText>{weather && capitaliseFirstLetter(weather.current.weather[0]?.description)}</DescriptionText>
    </MainContainer>

  );
};

const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  padding: 10px; 
  border: 1px solid red;
`;

const RegularText = styled.p`
  margin: 4px 0;
`;

const WeatherWrapper = styled.div`
  display: flex;
  width: 100%;
`;