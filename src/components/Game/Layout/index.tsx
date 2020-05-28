import React, { ReactElement, useState } from 'react';
import Search from './Search';
import Card from 'components/Game/Card';
import { Container, Section, CardWrapper, Head1 } from './styled';

const Game = (): ReactElement => {
  const [rick, setRick] = useState<null | { id: number; name: string; image: string }>(null);
  const [morty, setMorty] = useState<null | { id: number; name: string; image: string }>(null);
  return (
    <Container>
      <Search
        onSelect={(character) => {
          if (character.name.toLowerCase().includes('rick')) {
            setRick(character);
          }
          if (character.name.toLowerCase().includes('morty')) {
            setMorty(character);
          }
        }}
      />
      <Head1>PARTY</Head1>
      <Section>
        <CardWrapper as={Card} data={rick} placeholder="RICK" />
        <CardWrapper as={Card} data={morty} placeholder="MORTY" />
      </Section>
    </Container>
  );
};

export default Game;
