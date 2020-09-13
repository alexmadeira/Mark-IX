import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { completeLoadBar } from '~/store/modules/loadBar/actions';

import { Container } from './styles';

function Tecnology() {
  const dispatch = useDispatch();

  const { slug } = useParams();
  useEffect(() => {
    dispatch(completeLoadBar());
  }, [dispatch]);
  return (
    <Container>
      <h1>{slug}</h1>
    </Container>
  );
}

export default Tecnology;
