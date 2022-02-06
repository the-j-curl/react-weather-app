import React from 'react';
import styled from 'styled-components';

import { weatherData } from 'shared/types';

type Props = {
  weather: weatherData
};

export const AdditionalWeather: React.FC<Props> = ({ weather }) => {
  return (
    <GridContainer>
      <TableLeft>
        <Data>Humidity: <span>{weather.current.humidity}</span></Data>
        <Data>Pressure: <span>{weather.current.pressure}</span></Data>
        <Data>UVI: <span>{weather.current.uvi}</span></Data>
        <Data>Rain: <span>{weather.daily[0].rain}</span></Data>
        <Data>Dew point: <span>{weather.current.dew_point}</span></Data>
      </TableLeft>
      <TableRight>
        <Data>Wind degree: <span>{weather.current.wind_deg}</span></Data>
        <Data>Wind speed: <span>{weather.current.wind_speed}</span></Data>
        <Data>Wind gust: <span>{weather.current.wind_gust}</span></Data>
        <Data>Snow: <span>{weather.daily[0].snow}</span></Data>
        <Data>Visibility: <span>{weather.current.visibility}</span></Data>
      </TableRight>
    </GridContainer>
  );
};

const GridContainer = styled.div`
  height: 125px;
  width: 100%;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 2 1fr;
  padding: 0 2px;
`;

const TableLeft = styled.div`
  grid-column: 1;
`;

const Data = styled.p`
display: flex;
justify-content: space-between;
     margin: 0;
   &:nth-child(odd) {
     background-color: #f3f0f0;
   }

   span {
     font-weight: 500;
   }
`;

const TableRight = styled(TableLeft)`
  grid-column: 2;
`;
