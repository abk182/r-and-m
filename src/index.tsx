import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import Game from 'components/Game/Layout';
import { ApolloProvider } from '@apollo/react-hooks';
import { GlobalStyles } from './styled';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
});

const App = (): ReactElement => {
  return (
    <ApolloProvider client={client}>
      <>
        <GlobalStyles />
        <Game />
      </>
    </ApolloProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
