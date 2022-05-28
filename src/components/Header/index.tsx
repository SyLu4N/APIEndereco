import React, { useState } from 'react';
import { GoLocation } from 'react-icons/go';
import { BsMoonStarsFill } from 'react-icons/bs';
import { ImSun } from 'react-icons/im';

import { Container, Theme } from './styles';
import { darkTheme, ligthTheme } from '../../styles/themes';

interface HeaderProps {
  setTheme: (value: Theme) => void;
  theme: Theme;
}

type darkTheme = {
  type: string;
  body: string;
  text: string;
  info: string;
};

type ligthTheme = darkTheme;

type Theme = ligthTheme | darkTheme;

export function Header(props: HeaderProps) {
  const [theme, setThema] = useState(props.theme);

  function handleTheme() {
    if (theme.type === 'dark') {
      setThema(ligthTheme);
      return props.setTheme(ligthTheme);
    } else {
      setThema(darkTheme);
      return props.setTheme(darkTheme);
    }
  }

  return (
    <Container>
      <nav>
        <h1>
          <GoLocation /> <a href="/">Search Cep</a>
        </h1>

        <Theme onClick={handleTheme} isType={theme.type}>
          <button>
            {theme.type === 'ligth' ? (
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
