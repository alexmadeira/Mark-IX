import React, { useEffect } from 'react';
import { FaInstagram, FaLinkedinIn, FaBitbucket } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import { requestProjects } from '~/store/modules/banner/actions';

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
  const dispatch = useDispatch();
  const loaded = useSelector(state => state.banner.loaded);

  useEffect(() => {
    function getProjects() {
      if (!loaded) {
        dispatch(requestProjects(8));
      }
    }
    getProjects();
  }, [dispatch, loaded]);

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
            href="https://bitbucket.org/alexmadeira5/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBitbucket />
          </a>
        </SocialItem>
      </Social>
      <Nav />
    </Container>
  );
}
