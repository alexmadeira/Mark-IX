import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { restartTimer } from '~/store/modules/banner/actions';

import Shimmer from '~/components/Shimmer';

import { Container, Title, Type, Paragraph } from './styles';
import Timer from './Timer';

export default function Project() {
  const dispatch = useDispatch();

  const activeBanner = useSelector(
    state => state.banner.projects[state.banner.active]
  );
  const loaded = useSelector(state => state.banner.loaded);

  useEffect(() => {
    if (loaded) {
      dispatch(restartTimer());
    }
  }, [dispatch, loaded]);

  return (
    <Container className="loaded">
      <Title>
        {loaded ? (
          <span>{activeBanner.title}</span>
        ) : (
          <Shimmer type="line" h="30px" w="100px" flex={false} />
        )}

        <Type>
          {loaded ? (
            activeBanner.type
          ) : (
            <Shimmer type="line" h="10px" w="100px" />
          )}
        </Type>
      </Title>
      <Timer />
      <Paragraph>
        {loaded ? (
          activeBanner.shortDescription
        ) : (
          <>
            <Shimmer type="line" h="10px" w="100px" m="0 0 8px 0" />
            <Shimmer type="line" h="10px" w="100px" m="0 0 8px 0" />
            <Shimmer type="line" h="10px" w="100px" m="0 0 8px 0" />
          </>
        )}
      </Paragraph>
    </Container>
  );
}
