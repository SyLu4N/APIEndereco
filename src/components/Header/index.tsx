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

  function handleTheme(e) {
    const el = e.target.parentNode.parentNode;
    el.classList.add('animaTheme');

    if (theme.type === 'dark') {
      props.setTheme(ligthTheme);
      setThema(ligthTheme);

      setTimeout(() => {
        el.classList.remove('animaTheme');
      }, 500);
      return;
    } else {
      props.setTheme(darkTheme);
      setThema(darkTheme);

      setTimeout(() => {
        el.classList.remove('animaTheme');
      }, 500);
      return;
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
              <abbr title="Tema Escuro">
                <BsMoonStarsFill size={26} />
              </abbr>
            ) : (
              <abbr title="Tema Claro">
                <ImSun size={26} />
              </abbr>
            )}
          </button>
        </Theme>
      </nav>
    </Container>
  );
}
