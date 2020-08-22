import styled from 'styled-components';

const openDelay = process.env.REACT_APP_OPEN_PROJECT_TIMER;

export const ProjectContainer = styled.div`
  height: 100vw;
  width: 100%;
  position: relative;
  .logo {
    opacity: 0;
  }
  .parallax-inner {
    transform: translate3d(0px, 0px, 0px) !important;
  }
  footer {
    opacity: 0;
  }
  &::after {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
    background: rgba(0, 0, 0, 0.7);
    transition: all ${openDelay}ms ease;
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
  cursor: pointer;
  &.open {
    left: 0%;
    ${ProjectContainer} {
      &::after {
        content: none;
      }
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
