import React, { ReactElement, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import TextInput from 'components/ui-kit/Input/Text';
import Card, { Props as CardProps } from 'components/Game/shared/Card';
import { Container, Section, CardWrapper, Loading } from './styled';
import CHARACTERS from './query';

export interface Props {
  onSelect: CardProps['onClick'];
}

const Search = ({ onSelect }: Props): ReactElement => {
  const [query, setQuery] = useState<string>('rick');
  const [ids, setIds] = useState<Array<number>>([]);
  const { loading, error, data } = useQuery<{
    characters: {
      results: Array<{
        id: number;
        image: string;
        name: string;
      }>;
    };
  }>(CHARACTERS, {
    skip: query.length <= 2,
    variables: { query },
  });

  return (
    <Container>
      <TextInput
        style={{ margin: '10px', width: 'calc(100% - 20px)' }}
        value={query}
        onChange={(target) => {
          setQuery(target.value);
        }}
        idleTime={300}
      />
      <Section>
        {loading && <Loading>loading...</Loading>}
        {data &&
          !loading &&
          !error &&
          data.characters.results
            .filter((character) => !ids.includes(character.id))
            .map((character) => (
              <CardWrapper
                as={Card}
                key={character.id}
                data={character}
                onClick={onSelect}
                onClose={({ id }: { id: number }) => {
                  setIds([...ids, id]);
                }}
              />
            ))}
      </Section>
    </Container>
  );
};

export default Search;
