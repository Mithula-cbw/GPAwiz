import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/commons/Header';


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
    </Routes>
  );
};
