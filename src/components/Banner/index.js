import React from 'react';
import { FaInstagram, FaLinkedinIn, FaCodeBranch } from 'react-icons/fa';

import useBanner from '~/hooks/useBanner';

import Nav from './Nav';
import Project from './Project';
import {
  Container,
  Header,
  Emoji,
  Spotlight,
  Highlighted,
  Social,
  SocialItem,
} from './styles';

export default function Banner() {
  const { open } = useBanner();

  return (
    <Container className={open && 'open'}>
      <Header>
        <Spotlight>
          <Emoji />
          <h1>Alex</h1>
          <h1>Madeira</h1>
        </Spotlight>
        <Highlighted>DESENVOLVEDOR WEB</Highlighted>
      </Header>
      <Project />
      <Social>
        <SocialItem>
          <a
            href="https://www.instagram.com/alex.c.madeira/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </SocialItem>
        <SocialItem>
          <a
            href="https://www.linkedin.com/in/alex-madeira/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </SocialItem>
        <SocialItem>
          <a
            href="https://github.com/alexmadeira"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaCodeBranch />
          </a>
        </SocialItem>
      </Social>
      <Nav />
    </Container>
  );
}
