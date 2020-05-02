import React from 'react';
import { FaInstagram, FaLinkedinIn, FaBitbucket } from 'react-icons/fa';

import { Container, Social, SocialItem } from './styles';

export default function Footer() {
  return (
    <Container>
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
