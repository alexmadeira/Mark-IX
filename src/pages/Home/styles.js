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
