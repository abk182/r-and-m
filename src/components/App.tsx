import React, { ReactElement } from 'react';
// import styled from 'styled-components';
import ApolloClient, { gql } from 'apollo-boost';
import Search from 'components/Search';
import Party from 'components/Party';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
});

const App = (): ReactElement => {
  return (
    <ApolloProvider client={client}>
      <>
        <Search />
        <Party />
      </>
    </ApolloProvider>
  );
};

export default App;
