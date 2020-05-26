import React, { ReactElement } from 'react';
import ApolloClient from 'apollo-boost';
import Game from 'components/Game';
import { ApolloProvider } from '@apollo/react-hooks';
import './styled';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
});

const App = (): ReactElement => {
  return (
    <ApolloProvider client={client}>
      <Game />
    </ApolloProvider>
  );
};

export default App;
