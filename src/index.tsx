import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './components/NavBar';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { routes } from './routes';

const client = new ApolloClient({
  uri: 'http://localhost:3000/',
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
      <NavBar/>
      {routes}
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
