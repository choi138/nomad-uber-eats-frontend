import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { LoginPage, RegisterPage } from '@/pages';

export const LogoutRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
};
