import styled from 'styled-components';

import { Link as RouteLink } from 'react-router-dom';

import { transparentize } from 'polished';

import { Spaces, Colors } from '~/styles/Metrics';

export const Container = styled.div`
  display: grid;
  width: 100%;
  max-width: 100%;

  height: 300px;
  align-self: center;
  margin-bottom: calc(${Spaces.BaseMargin}*10);
  grid-template-columns: 1fr 1fr;
  grid-gap: ${Spaces.BaseMargin};
`;

export const Link = styled(RouteLink)`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  color: ${Colors.White};
  background: ${transparentize(0.45, Colors.Black)};
  font-weight: bold;
  font-size: 6rem;
`;
