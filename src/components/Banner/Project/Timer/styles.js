import styled from 'styled-components';

import { Colors } from '~/styles/Metrics';

export const Container = styled.div`
  background: #fff;
  width: 100%;
  height: 1px;
  position: relative;
  &::after {
    transition: ${props =>
      props.percent > 0 ? `width ${props.delay}ms linear` : ''};

    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
    background: ${Colors.White};
    width: ${props => props.percent}%;
    height: 5px;
  }
`;
