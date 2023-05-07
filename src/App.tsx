import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { gql, useQuery, useReactiveVar } from '@apollo/client';

import { LoginRouter, LogoutRouter } from './routers';
import { isLoginVar } from './main';

export const App: React.FC = () => {
  const isLogin = useReactiveVar(isLoginVar);
  return isLogin ? <LoginRouter /> : <LogoutRouter />;
};

export default App;
