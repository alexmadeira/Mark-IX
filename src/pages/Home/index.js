import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Banner from '~/components/Banner';
import Menu from '~/components/Menu';
import Projects from '~/components/Projects';
import { completeLoadBar } from '~/store/modules/loadBar/actions';

import Project from './Project';
import { Container } from './styles';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(completeLoadBar());
  }, [dispatch]);

  return (
    <Container>
      <Menu />
      <Projects />
      <Banner />
      <Project />
    </Container>
  );
}
