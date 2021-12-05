import React from 'react';
import styled from 'styled-components/macro';

export const Forecast: React.FC = () => {
  return (
    <ForecastContainer>
      <p>5 day forecast will go here</p>
    </ForecastContainer>
  )
}

const ForecastContainer = styled.section`
  border: 1px solid green;
`;
