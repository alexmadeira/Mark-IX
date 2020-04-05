import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  @media (max-width: 780px) {
    overflow: auto;
    min-height: 160vh;
  }
  @media (max-width: 800px) and (orientation: landscape) {
    min-height: 200vh;
  }
`;
