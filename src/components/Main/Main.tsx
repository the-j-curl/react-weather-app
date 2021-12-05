import React from 'react'
import styled from 'styled-components/macro'

import { CurrentWeather, Forecast } from 'components'

export const Main: React.FC = () => {
  return (
    <MainWrapper>
      <p>Main</p>
      <CurrentWeather />
      <Forecast />
    </MainWrapper>
  )
}

const MainWrapper = styled.main`
  border: 1px dotted #000;
`;