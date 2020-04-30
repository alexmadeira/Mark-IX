import styled from 'styled-components';

import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.li`
  list-style: none;
`;

export const Preview = styled.video`
  height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: all 250ms ease;
`;

export const Logo = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
  transition: all 250ms ease;
  width: 80%;
`;

export const Link = styled(RouterLink)`
  position: relative;
  width: 100%;
  height: 100%;
  filter: grayscale(1);
  transition: all 250ms ease;
  transform: scale(0.9);
  overflow: hidden;

  &:hover {
    filter: grayscale(0);
    transform: scale(1.1);
    ${Preview} {
      opacity: 1;
    }
    ${Logo} {
      opacity: 0;
    }
  }
`;
