import React, { useRef, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LoadingBar from 'react-top-loading-bar';

import { finishedLoadBar } from '~/store/modules/loadBar/actions';
import { Colors } from '~/styles/Metrics';

import { Container } from './styles';

export default function LoadBar() {
  const dispatch = useDispatch();
  const loadBarRef = useRef(null);

  const {
    start: loadBarStart,
    startContinuous: loadBarStartContinuous,
    complete: loadBarComplete,
    progress: loadBarProgress,
  } = useSelector(state => state.loadBar);

  const start = useCallback(() => {
    loadBarRef.current.staticStart();
  }, []);

  const startContinuous = useCallback(() => {
    loadBarRef.current.continuousStart();
  }, []);

  const complete = useCallback(() => {
    loadBarRef.current.complete();
  }, []);

  const addProgress = useCallback(() => {
    loadBarRef.current.add(loadBarProgress);
  }, [loadBarProgress]);

  const onLoaderFinished = useCallback(() => {
    dispatch(finishedLoadBar());
  }, [dispatch]);

  useEffect(() => {
    if (loadBarStart) {
      start();
    }
  }, [loadBarStart, start]);

  useEffect(() => {
    if (loadBarStartContinuous) {
      startContinuous();
    }
  }, [loadBarStartContinuous, startContinuous]);

  useEffect(() => {
    if (loadBarComplete) {
      complete();
    }
  }, [complete, loadBarComplete]);

  useEffect(() => {
    if (loadBarProgress) {
      addProgress();
    }
  }, [addProgress, loadBarProgress]);

  return (
    <Container>
      <LoadingBar
        height={3}
        color={Colors.Base}
        ref={loadBarRef}
        onLoaderFinished={onLoaderFinished}
      />
    </Container>
  );
}
