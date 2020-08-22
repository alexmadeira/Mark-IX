import styled from 'styled-components';

export const Container = styled.div`
  background-image: linear-gradient(
    -90deg,
    #c1c1c1 0%,
    #f8f8f8 50%,
    #c1c1c1 100%
  );
  width: 100%;
  height: 50px;
  background-size: 400% 400%;
  animation: shimmer 1.2s ease-in-out infinite;

  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }

  height: ${props => props.h};
  width: ${props => props.w};
  margin: ${props => props.m};
  &.flex {
    flex: 1;
    width: 100%;
  }
`;
