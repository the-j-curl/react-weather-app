import React from 'react';
import styled from 'styled-components/macro';

export const Forecast: React.FC = () => {
  return (
    <ForecastContainer>
      <h3>5 day forecast</h3>
    </ForecastContainer>
  )
}

const ForecastContainer = styled.section`
  border: 1px solid green;
`;
