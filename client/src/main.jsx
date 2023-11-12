import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import Error from './pages/Error';
import Game from './pages/GameBoard';
import Comment from './pages/Comment';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Auth from './utils/auth';
import Instructions from './components/Instructions';

const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <App />
        {Auth.loggedIn() ? (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />

            <Route path="/game" element={<Game />} />
            <Route path="/comment" element={<Comment />} />
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/logout" element={<Logout />} />
            <Route path="/instructions" element={<Instructions />} />
            <Route path="*" element={<Error />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/game" element={<Game />} />
            <Route path="/instructions" element={<Instructions />} />
            <Route path="*" element={<Login />} />
          </Routes>
        )}

      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
