import React, { ReactElement } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Party = (): ReactElement => {
  return (
    <Container>
      <div>Party</div>
    </Container>
  );
};

export default Party;
