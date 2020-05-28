import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  padding: 195px 141px;
`;

export const Section = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

export const CardWrapper = styled.div`
  margin: 10px;
  width: calc(25% - 20px);
  min-height: 100px;
`;

export const Head1 = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 35px;
  text-align: center;
  color: #000000;
`;
