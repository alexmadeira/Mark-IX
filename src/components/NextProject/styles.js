import styled from 'styled-components';

import { Spaces } from '~/styles/Metrics';

export const Container = styled.div`
  display: grid;
  width: 1600px;
  max-width: 100%;
  background: #069;
  height: 300px;
  align-self: center;
  margin-bottom: calc(${Spaces.BaseMargin}*10);
  grid-template-columns: 2;
  grid-gap: ${Spaces.BaseMargin};
`;
