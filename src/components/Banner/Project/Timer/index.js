import React, { useState, memo, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setActiveProject, startTimer } from '~/store/modules/banner/actions';

import { Container } from './styles';

function Timer() {
  const delay = 10000;
  // process.env.REACT_APP_BANNER_TIMER;
  const timeOutDelay = delay / 100;

  const dispatch = useDispatch();
  const { active, projects, restart, pause } = useSelector(
    state => state.banner
  );

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

  return <Container percent={timerPercent} delay={timeOutDelay} />;
}

export default memo(Timer);