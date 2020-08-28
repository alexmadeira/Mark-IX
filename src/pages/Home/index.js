import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { completeLoadBar } from '~/store/modules/loadBar/actions';

import Banner from '~/components/Banner';

import ProjectPreview from './ProjectPreview';
import { Container } from './styles';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(completeLoadBar());
  }, [dispatch]);

  return (
    <Container data-testid="home-page">
      <Banner />
      <ProjectPreview />
    </Container>
  );
}
