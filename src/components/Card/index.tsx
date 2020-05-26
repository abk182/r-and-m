import React, { ReactElement } from 'react';
import { Container, Img, CrossStyled } from './styled';
import Cross from 'components/ui-kit/Icon/Cross';

export interface Props {
  id: number;
  image: string;
  name: string;
  onClick?: (args: Pick<Props, 'id' | 'name' | 'image'>) => void;
  onClose?: (args: Pick<Props, 'id' | 'name' | 'image'>) => void;
  className?: string;
  style?: { [key: string]: string };
}

const Card = ({
  id,
  image,
  name,
  onClick,
  onClose,
  className,
  style,
}: Props): ReactElement<Props> => {
  return (
    <Container className={className} style={style}>
      <CrossStyled as={Cross} onClick={() => onClose({ id, name, image })} />
      <Img
        src={image}
        role="button"
        onClick={() => {
          onClick({ id, name, image });
        }}
      />
    </Container>
  );
};

export default Card;
