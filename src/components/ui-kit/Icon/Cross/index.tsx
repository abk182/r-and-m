import React, { ReactElement } from 'react';
import { Container } from './styled';

export interface Props {
  onClick: () => void;
  className?: string;
  style?: { [key: string]: string };
}

const Cross = ({ onClick, className, style }: Props): ReactElement => {
  return <Container onClick={onClick} className={className} style={style} />;
};

export default Cross;
