import React, { ReactElement } from 'react';
import Cross from 'components/ui-kit/Icon/Cross';
import { Container, Img, CrossStyled, Placeholder } from './styled';

export interface Props {
  data?: { id: number; image: string; name: string };
  placeholder?: string;
  onClick?: (args: Props['data']) => void;
  onClose?: (args: Props['data']) => void;
  className?: string;
  style?: { [key: string]: string };
}

const Card = ({
  data,
  placeholder,
  onClick,
  onClose,
  className,
  style,
}: Props): ReactElement<Props> => {
  return (
    <Container className={className} style={style}>
      {onClose && <CrossStyled as={Cross} onClick={() => onClose(data)} />}
      {data && (
        <Img
          src={data.image}
          role="button"
          onClick={() => {
            onClick(data);
          }}
        />
      )}
      {!data && <Placeholder>{placeholder}</Placeholder>}
    </Container>
  );
};

export default Card;
