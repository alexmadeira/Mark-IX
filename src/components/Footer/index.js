import React from 'react';
import { FaInstagram, FaLinkedinIn, FaBitbucket } from 'react-icons/fa';

import { useScollDarkMode } from '~/hooks/Scoll';

import { Container, Social, SocialItem } from './styles';

export default function Footer() {
  const darkMode = useScollDarkMode('1/19');
  return (
    <Container className={darkMode && 'dark'}>
      <Social>
        <SocialItem>
          <a href="/#">
            <FaInstagram />
          </a>
        </SocialItem>
        <SocialItem>
          <a href="/#">
            <FaLinkedinIn />
          </a>
        </SocialItem>
        <SocialItem>
          <a href="/#">
            <FaBitbucket />
          </a>
        </SocialItem>
      </Social>
    </Container>
  );
}
