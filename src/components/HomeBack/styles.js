import styled from 'styled-components';

import { Spaces } from '~/styles/Metrics';

export const Container = styled.button`
  margin-top: calc((${Spaces.BaseMargin} * 2) + 10px);
  margin-left: calc(${Spaces.BaseMargin} * 2);
  position: absolute;
  background: none;
  border: none;
  z-index: 10;
  opacity: 1;
  transition: all 1000ms ease;
  cursor: pointer;

  &.hidden {
    opacity: 0;
  }
`;
