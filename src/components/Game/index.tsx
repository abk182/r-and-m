import React, { ReactElement, useState } from 'react';
import Search from './Search';
import Party from './Party';

const Game = (): ReactElement => {
  const [selected, setSelected] = useState<
    Array<null | { id: number; name: string; image: string }>
  >([]);
  console.log(selected);
  return (
    <>
      <Search
        onSelect={({ id, name, image }) => {
          const [rick, morty] = selected;
          if (name.toLowerCase().includes('rick')) {
            setSelected([{ id, name, image }, morty]);
          }
          if (name.toLowerCase().includes('morty')) {
            setSelected([rick, { id, name, image }]);
          }
        }}
      />
    </>
  );
};

export default Game;
