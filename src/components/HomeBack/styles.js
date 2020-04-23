import styled, { keyframes } from 'styled-components';

const enter = keyframes`
  from {
    opacity: 0;
  to {
    opacity: 1;
  }
`;
export const Container = styled.button`
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;

  animation: ${enter} 2s linear forwards;
`;
