import styled from 'styled-components';

const openDelay = process.env.REACT_APP_OPEN_PROJECT_TIMER;

export const ProjectContainer = styled.div`
  opacity: 0.2;
  height: 100vw;
  width: 100%;
  .logo {
    opacity: 0;
  }
`;

export const Container = styled.div`
  width: 100vw;
  position: absolute;
  left: 40%;
  top: 0;
  overflow: hidden;
  z-index: 2;
  transition: all ${openDelay}ms ease;
  &.open {
    left: 0%;
    ${ProjectContainer} {
      opacity: 1;
    }
  }

  @media (max-width: 1560px) {
    left: 50%;
  }
  @media (max-width: 780px) {
    position: relative;
    left: 0%;
    height: 50vh;
    &.open {
      top: -50vh;
      height: 100vh;
    }
  }
  cursor: pointer;
`;
