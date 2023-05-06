import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

import { ApolloProvider, makeVar } from '@apollo/client';
import { RecoilRoot } from 'recoil';
import { Global } from '@emotion/react';
import { ApolloClient, InMemoryCache } from '@apollo/client';

import App from './App';
import { globalStyle } from './styles';

const client = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

export const isSignInVar = makeVar(false);

const apolloClient = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          isSignIn: {
            read() {
              // read is a function that returns the value of the field
              // read는 필드의 값을 반환하는 함수입니다.
              // return Boolean(localStorage.getItem('token'));
              return isSignInVar();
            },
          },
        },
      },
    },
  }),
});

root.render(
  <BrowserRouter>
    <ApolloProvider client={apolloClient}>
      <RecoilRoot>
        <QueryClientProvider client={client}>
          <Global styles={[globalStyle]} />
          <App />
        </QueryClientProvider>
      </RecoilRoot>
    </ApolloProvider>
  </BrowserRouter>,
);
