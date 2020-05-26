import React, { ReactElement, useState, useRef, useEffect } from 'react';
import { StyledInput } from './styled';

export interface Props {
  value: string;
  onChange: (args: Pick<Props, 'value'>) => void;
  idleTime: number;
  style?: { [key: string]: string };
  className?: string;
}

const Input = ({ value, idleTime, onChange, style, className }: Props): ReactElement => {
  const [input, setInput] = useState<string>(value);
  const [isIdle, setIdle] = useState<boolean>(false);
  const timerRef = useRef(null);

  useEffect(
    () => () => {
      clearTimeout(timerRef.current);
    },
    [],
  );

  useEffect(() => {
    if (value != input) {
      setInput(value);
    }
  }, [value]);

  useEffect(() => {
    if (!isIdle) {
      onChange({ value: input });
    }
  }, [isIdle]);

  return (
    <StyledInput
      value={input}
      onChange={(e) => {
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
          setIdle(false);
        }, idleTime);
        setIdle(true);
        setInput(e.target.value);
      }}
      style={style}
      className={className}
    />
  );
};

export default Input;
