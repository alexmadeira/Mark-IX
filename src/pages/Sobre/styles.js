import styled from 'styled-components';

import { shade } from 'polished';

import { Spaces, Colors, Fonts } from '~/styles/Metrics';

export const Container = styled.div`
  min-height: 100%;
  width: 100%;
  background: ${shade(0.2, Colors.Base)};
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  padding: calc(${Spaces.BasePadding} * 3);
  img {
    width: 100px;
  }
`;

export const ContentBox = styled.div`
  width: 100%;
  padding: calc((${Spaces.BasePadding} * 6) + 100px);
  display: flex;
  flex-wrap: wrap;
`;

export const Title = styled.h1`
  color: ${Colors.White};
  width: 100%;
  font-size: ${Fonts.Sizes.Sobre.title};
  line-height: calc(${Fonts.Sizes.Sobre.title} +10px);
`;

export const SubTitle = styled.h2``;

export const TextBox = styled.div`
  flex: 1;
  margin: calc(${Spaces.BaseMargin}*2) 0;
  padding: calc(${Spaces.BaseMargin}*2) 0;
  border-top: 1px solid ${Colors.White};
  border-bottom: 1px solid ${Colors.White};
`;
export const Text = styled.p`
  color: ${Colors.White};
  width: 100%;
  font-size: ${Fonts.Sizes.Sobre.text};
  line-height: calc(${Fonts.Sizes.Sobre.text} + 10px);
  margin: calc(${Spaces.BaseMargin}*2) 0 0 0;
`;

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: calc(${Spaces.BasePadding} * 3);
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
