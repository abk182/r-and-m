import React, { ReactElement } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Search = (): ReactElement => {
  return (
    <Container>
      <div>Search</div>
    </Container>
  );
};

export default Search;
