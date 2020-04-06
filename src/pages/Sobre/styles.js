import styled from 'styled-components';

import { shade } from 'polished';

import { Spaces, Colors, Fonts } from '~/styles/Metrics';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background: ${shade(0.2, Colors.Base)};
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  padding: calc(${Spaces.BasePadding} * 3);
  @media (max-width: 720px) {
    position: initial;
    text-align: center;
  }
  img {
    width: 100px;
  }
`;

export const ContentBox = styled.div`
  width: 100%;
  padding: calc(${Spaces.BasePadding} * 3)
    calc((${Spaces.BasePadding} * 6) + 100px) 0
    calc((${Spaces.BasePadding} * 6) + 100px);
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1350px) {
    flex-direction: column;
  }
  @media (max-width: 720px) {
    padding: 0 calc(${Spaces.BasePadding} * 3) calc(${Spaces.BasePadding} * 3)
      calc(${Spaces.BasePadding} * 3);
  }
`;

export const Title = styled.h1`
  color: ${Colors.White};
  width: 100%;
  font-size: ${Fonts.Sizes.Sobre.title};
  line-height: calc(${Fonts.Sizes.Sobre.title} +10px);
`;

export const TextBox = styled.div`
  flex: 8;
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

export const CodeBox = styled.div`
  padding: calc(${Spaces.BaseMargin}*4);
  flex: 7;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1350px) {
    padding: calc(${Spaces.BaseMargin}*4) 0;
  }
  img {
    width: 100%;
  }
`;

export const Skills = styled.div`
  width: 50%;
  margin: ${Spaces.BaseMargin};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: calc(${Spaces.BaseMargin}*2);
  padding-bottom: calc((${Spaces.BasePadding} * 3) + 50px);
  @media (max-width: 1550px) {
    width: 70%;
  }
  @media (max-width: 1220px) {
    width: 80%;
  }
  @media (max-width: 1100px) {
    width: 100%;
  }
  @media (max-width: 939px) {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
  }
  @media (max-width: 720px) {
    padding-bottom: 0;
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(auto-fit, minmax(145px, 1fr));
    padding-bottom: 0;
  }
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  list-style: none;
`;

export const ListTitle = styled.li`
  color: ${Colors.White};
  width: 100%;
  font-size: ${Fonts.Sizes.Sobre.subTitile};
  margin-bottom: calc(${Spaces.BaseMargin}*2);
  line-height: calc(${Fonts.Sizes.Sobre.subTitile} +10px);
`;

export const ListList = styled.li`
  color: ${Colors.White};
  width: 100%;
  font-size: ${Fonts.Sizes.Sobre.text};
  line-height: calc(${Fonts.Sizes.Sobre.text} + 10px);
`;

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
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
