import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { gql, useQuery, useReactiveVar } from '@apollo/client';

import { Main, SignInPage, SignOutPage } from './pages';
import { isSignInVar } from './main';

export const App: React.FC = () => {
  const isSignIn = useReactiveVar(isSignInVar);
  return isSignIn ? <SignInPage /> : <SignOutPage />;
};

export default App;
