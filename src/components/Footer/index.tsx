import React from 'react';
import { BsCreditCard2Front } from 'react-icons/bs';
import { BiSend } from 'react-icons/bi';
import { FaLinkedinIn } from 'react-icons/fa';

import { FooterContainer, FooterContent } from './styled';

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <div>
          <h1>SyLu4N</h1>
          <p>Frontend Developer</p>
        </div>
        <nav>
          <a href="https://sylu4n.vercel.app/" target="_blank" rel="noreferrer">
            <BsCreditCard2Front />
            Portfolio
          </a>
          <a
            href="mailto:luaan.carlos@hotmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <BiSend />
            Contato
          </a>
          <a
            href="https://www.linkedin.com/in/luan-sim%C3%B5es-617492236/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
            LinkedIn
          </a>
        </nav>
      </FooterContent>
      <em>© Luan Simões. All right reserved</em>
    </FooterContainer>
  );
}
