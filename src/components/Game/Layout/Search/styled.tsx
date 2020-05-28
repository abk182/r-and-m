import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
`;

export const Section = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

export const CardWrapper = styled.div`
  margin: 10px;
  width: calc(25% - 20px);
`;

export const Loading = styled.div`
  width: 100%;
  text-align: center;
`;
