import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  position: relative;
  @media (max-width: 780px) {
    flex-direction: column;
    overflow: auto;
    height: initial;
  }
  @media (max-width: 800px) and (orientation: landscape) {
    min-height: 200vh;
  }
`;

export const Preview = styled.div`
  background: #f00;
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
