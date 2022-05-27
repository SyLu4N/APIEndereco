import React, { useState } from 'react';

import { Container } from './styles';
import { darkTheme, ligthTheme } from '../../styles/themes';

interface NavProps {
  setTheme: (value) => void;
}

type Theme = 'ligthTheme' | 'darkTheme';

export function Nav(props: NavProps) {
  const [theme, setThema] = useState<Theme>('ligthTheme');

  function handleTheme() {
    if (theme === 'ligthTheme') {
      setThema('darkTheme');
      return props.setTheme(darkTheme);
    }

    if (theme === 'darkTheme') {
      setThema('ligthTheme');
      return props.setTheme(ligthTheme);
    }
  }

  return (
    <Container>
      <h1>
        <a href="/">logo</a>
        <button type="button" onClick={handleTheme}>
          Teste
        </button>
      </h1>
    </Container>
  );
}
