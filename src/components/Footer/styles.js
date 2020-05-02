import styled from 'styled-components';

import { Colors, Spaces } from '~/styles/Metrics';

export const Container = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 5;
  padding: calc(${Spaces.BasePadding} * 3);
  @media (max-width: 720px) {
    position: initial;
  }
`;

export const Social = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const SocialItem = styled.li`
  list-style: none;
  margin: ${Spaces.BaseMargin} calc(${Spaces.BaseMargin} * 2) 0 0;
  a {
    color: ${Colors.White};
    font-size: 2rem;
    svg {
      transition: all 0.3s ease;
    }
    &:hover {
      svg {
        transform: scale(1.2);
      }
    }
  }
`;
