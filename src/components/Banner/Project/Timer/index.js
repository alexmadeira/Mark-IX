import React, { useState, memo, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setActiveProject, startTimer } from '~/store/modules/banner/actions';

import { useBanner } from '~/hooks/Banner';

import { Container } from './styles';

function Timer() {
  const delay = process.env.REACT_APP_BANNER_TIMER;
  const timeOutDelay = delay / 100;

  const dispatch = useDispatch();
  const { active, projects, restart, pause } = useBanner();

  const [timeOut, setTimeOut] = useState(null);
  const [timerPercent, setTimerPercent] = useState(0);
  const [loadNext, setLoadNext] = useState(false);
  function addTimer() {
    setTimerPercent(prevState => {
      if (prevState + 1 > 100) {
        setLoadNext(true);
      }
      return prevState + 1;
    });
  }

  const clock = useCallback(() => {
    addTimer();
    setTimeOut(
      setTimeout(() => {
        clock();
      }, timeOutDelay)
    );
  }, [timeOutDelay]);

  useEffect(() => {
    if (restart) {
      clearTimeout(timeOut);
      setTimerPercent(0);
      dispatch(startTimer(false));
      clock();
    }
  }, [clock, delay, dispatch, restart, timeOut]);

  useEffect(() => {
    if (pause) {
      clearTimeout(timeOut);
      setTimeOut(false);
    } else if (!timeOut) {
      clock();
    }
  }, [clock, pause, timeOut]);

  useEffect(() => {
    function loadNextBanner() {
      if (loadNext) {
        setLoadNext(false);
        clearTimeout(timeOut);
        const total = projects.length - 1;
        const next = active + 1 > total ? 0 : active + 1;

        dispatch(setActiveProject(next));
      }
    }
    loadNextBanner();
  }, [active, dispatch, loadNext, projects.length, timeOut, timerPercent]);

  useEffect(() => {
    return () => {
      clearTimeout(timeOut);
    };
  }, [timeOut]);

  return (
    <Container
      percent={timerPercent}
      delay={timeOutDelay}
      data-testid="Timer"
    />
  );
}

export default memo(Timer);
