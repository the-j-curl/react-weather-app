import React from 'react';

import { Header, Main, Footer } from 'components';
import './App.css';

export const App = () => {
  return (
    <div>
      <Header title={'The Weather App'} />
      <Main />
      <Footer />
    </div>
  );
}
