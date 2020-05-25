import React, { ReactElement } from 'react';
import styled from 'styled-components';

const Head1 = styled.h1`
  color: palevioletred;
  font-size: 1.5em;
  text-align: center;
`;

const App = (): ReactElement => {
  return <Head1>Hello!</Head1>;
};

export default App;
