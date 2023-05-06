import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ApolloProvider } from '@apollo/client';
import { RecoilRoot } from 'recoil';
import { Global } from '@emotion/react';
import { ApolloClient, InMemoryCache } from '@apollo/client';

import App from './App';
import { globalStyle } from './styles';

const client = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const apolloClient = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
});

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={apolloClient}>
        <RecoilRoot>
          <QueryClientProvider client={client}>
            <Global styles={[globalStyle]} />
            <App />
          </QueryClientProvider>
        </RecoilRoot>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
