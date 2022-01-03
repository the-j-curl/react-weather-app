import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header, Main, Footer, Login, SignUp } from 'components';
import './App.css';

export const App = () => {
  return (
    <BrowserRouter>
      <Header title={'The Weather App'} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Navigate to="/" /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
