import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Search from 'components/Search';
import Party from 'components/Party';

const Head1 = styled.h1`
  color: palevioletred;
  font-size: 1.5em;
  text-align: center;
`;

const App = (): ReactElement => {
  return (
    <>
      <Search />
      <Party />
    </>
  );
};

export default App;
