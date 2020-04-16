import React, { useState, memo, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  setActiveProject,
  setRestartTimer,
} from '~/store/modules/banner/actions';

import { Container } from './styles';

function Timer() {
  const delay = process.env.REACT_APP_BANNER_TIMER;

  const dispatch = useDispatch();
  const restart = useSelector(state => state.banner.restart);
  const { active, projects } = useSelector(state => state.banner);

  const [timeOut, setTimeOut] = useState(null);
  const [timerPercent, setTimerPercent] = useState(0);
  const [loadNext, setLoadNext] = useState(false);

  const clock = useCallback(() => {
    setTimeOut(
      setTimeout(() => {
        setTimerPercent(prevState => {
          if (prevState + 10 > 100) {
            setLoadNext(true);
          }
          return prevState + 10;
        });
        clock();
      }, delay)
    );
  }, [delay]);

  useEffect(() => {
    if (restart) {
      clearTimeout(timeOut);
      setTimerPercent(0);
      dispatch(setRestartTimer(false));
      clock();
    } else {
      setTimeout(() => {}, delay);
    }
  }, [clock, delay, dispatch, restart, timeOut]);

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

  return <Container percent={timerPercent} delay={delay} />;
}

export default memo(Timer);
