import styled from 'styled-components';

export const Container = styled.div`
  width: 30px;
  height: 30px;
  background: #fff;
  opacity: 0.6;
  border-radius: 50%;
  cursor: pointer;
  transition: 200ms;
  &:hover {
    opacity: 1;
  }
  &::before,
  &::after {
    content: ' ';
    position: absolute;
    left: 14px;
    top: 5px;
    height: 20px;
    width: 2px;
    background-color: #333;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`;
