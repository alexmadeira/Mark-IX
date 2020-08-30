import React, { useEffect, useCallback, useState } from 'react';
import { FaInstagram, FaLinkedinIn, FaBitbucket } from 'react-icons/fa';

import Scroll from '~/utils/scroll';

import { Container, Social, SocialItem } from './styles';

export default function Footer() {
  const [isDark, setIsDark] = useState(false);

  const toogleMode = useCallback(() => {
    setIsDark(Scroll.darkMode('1/19'));
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', toogleMode);
    return () => {
      window.removeEventListener('scroll', toogleMode);
    };
  });

  return (
    <Container className={isDark && 'dark'}>
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
