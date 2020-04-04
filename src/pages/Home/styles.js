import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  @media (max-width: 780px) {
    overflow: auto;
  }
`;
