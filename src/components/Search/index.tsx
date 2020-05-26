import React, { ReactElement, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Container, Input } from './styled';

const CHARACTERS = gql`
  query Characters($input: String!) {
    characters(page: 1, filter: { name: $input }) {
      results {
        name
        image
        id
      }
    }
  }
`;

const Search = (): ReactElement => {
  const [input, setInput] = useState<string>('');

  const { loading, error, data } = useQuery(CHARACTERS, {
    skip: input.length <= 2,
    variables: { input },
  });

  console.log({ loading, error, data });

  return (
    <Container>
      <Input value={input} onChange={(e) => setInput(e.target.value)} />
    </Container>
  );
};

export default Search;
