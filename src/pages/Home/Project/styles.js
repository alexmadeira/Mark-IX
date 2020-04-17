import styled from 'styled-components';

import { Colors } from '~/styles/Metrics';

export const Container = styled.div`
  background: ${Colors.Black};
  width: 100vw;
  position: absolute;
  left: 50%;
  top: 0;
  height: 100vh;
  overflow: hidden;
  z-index: 2;
  opacity: 0.5;
  @media (max-width: 780px) {
    position: initial;
  }
`;

export const ProjectContainer = styled.div`
  opacity: 0.8;
  color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  height: 200vw;
  width: 100%;
  h1 {
    margin-top: 50px;
    text-align: center;
    width: 100%;
  }
  img {
    width: 100%;
  }
`;
