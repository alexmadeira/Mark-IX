import styled from 'styled-components';

const openDelay = process.env.REACT_APP_OPEN_PROJECT_TIMER;

export const ProjectContainer = styled.div`
  opacity: 0.2;
  color: #fff;
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

export const Container = styled.div`
  width: 100vw;
  position: absolute;
  left: 50%;
  top: 0;
  height: 100vh;
  overflow: hidden;
  z-index: 2;
  transition: all ${openDelay}ms ease;
  &.open {
    left: 0%;
    overflow: auto;
    height: initial;
    ${ProjectContainer} {
      opacity: 1;
    }
  }
  @media (max-width: 780px) {
    position: initial;
  }
  cursor: pointer;
`;
