import React, { useState, memo } from 'react';

import { Container } from './styles';

function Timer() {
  const [timerPercent, setTimerPercent] = useState(0);
  setTimeout(() => {
    setTimerPercent(100);
  }, 500);
  return <Container percent={timerPercent} />;
}

export default memo(Timer);
