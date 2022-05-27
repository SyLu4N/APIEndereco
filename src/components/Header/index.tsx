import React, { useState } from 'react';
import { GoLocation } from 'react-icons/go';
import { BsMoonStarsFill } from 'react-icons/bs';
import { ImSun } from 'react-icons/im';

import { Container, Theme } from './styles';
import { darkTheme, ligthTheme } from '../../styles/themes';

interface NavProps {
  setTheme: (value) => void;
  /* themeStorage: Theme; */
}

type Theme = 'ligthTheme' | 'darkTheme';

export function Header(props: NavProps) {
  const [theme, setThema] = useState<Theme>('darkTheme');
  props.setTheme(theme);

  function handleTheme() {
    if (theme === 'ligthTheme') {
      setThema('darkTheme');
      return props.setTheme(darkTheme);
    }

    if (theme === 'darkTheme') {
      setThema('ligthTheme');
      return props.setTheme(ligthTheme);
    }

    console.log('ai');
  }

  return (
    <Container>
      <nav>
        <h1>
          <GoLocation /> <a href="/">Search Cep</a>
        </h1>

        <Theme type="button" onClick={handleTheme}>
          <button>
            {theme === 'ligthTheme' ? (
              <BsMoonStarsFill size={26} />
            ) : (
              <ImSun size={26} />
            )}
          </button>
        </Theme>
      </nav>
    </Container>
  );
}
