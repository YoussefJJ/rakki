import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import MediaContextProvider from './contexts/store.context';

  // setting ApolloClient
  const client = new ApolloClient({
    uri: 'https://graphql.anilist.co/',
    cache: new InMemoryCache(),
    defaultOptions: {
      query: {
        fetchPolicy: 'cache-first',
      },
    }
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <MediaContextProvider>
        <App />
      </MediaContextProvider>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
