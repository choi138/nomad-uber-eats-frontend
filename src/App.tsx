import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { gql, useQuery, useReactiveVar } from '@apollo/client';

import { Main, LoginPage, LogoutPage } from './pages';
import { isLoginVar } from './main';

export const App: React.FC = () => {
  const isLogin = useReactiveVar(isLoginVar);
  return isLogin ? <LoginPage /> : <LogoutPage />;
};

export default App;
