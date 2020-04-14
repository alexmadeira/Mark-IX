import React from 'react';
import { FaInstagram, FaLinkedinIn, FaBitbucket } from 'react-icons/fa';

import {
  Container,
  Header,
  Emoji,
  Spotlight,
  Highlighted,
  Project,
  Title,
  Timer,
  Paragraph,
  Social,
  SocialItem,
} from './styles';

export default function Banner() {
  return (
    <Container>
      <Header>
        <Spotlight>
          <Emoji />
          <h1>Alex</h1>
          <h1>Madeira</h1>
        </Spotlight>
        <Highlighted>DESENVOLVEDOR WEB </Highlighted>
      </Header>
      <Project>
        <Title>Mizuno E-commerce</Title>
        <Timer />
        <Paragraph>
          Sed tempus ipsum in ante dignissim sollicitudin. Etiam in enim rutrum,
          blandit nibh vel, vehicula ex. Vivamus odio massa, condimentum vel
          enim ac, rhoncus lacinia libero. Nu llam pellentesque et urna sit amet
          hendrerit. Curabitur vel interdum orci. Donec vel blandit est, dictum
          ultrices mauris.
        </Paragraph>
      </Project>
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
            href="https://bitbucket.org/alexmadeira5/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBitbucket />
          </a>
        </SocialItem>
      </Social>
    </Container>
  );
}
