import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import { Container } from './styles';

function NextProject() {
  const s = useSelector(state => state.project);
  console.tron.log(s);
  return <Container />;
}

export default memo(NextProject);
