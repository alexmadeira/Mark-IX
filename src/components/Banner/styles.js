import styled from 'styled-components';

import { saturate, tint } from 'polished';

import { Colors, Spaces, Fonts } from '~/styles/Metrics';

export const Container = styled.div`
  max-width: 655px;
  width: 50vw;
  background: ${saturate(0.2, tint(0.5, Colors.Base))};
  padding: calc(${Spaces.BasePadding} * 3);
  color: ${Colors.White};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
export const Header = styled.div`
  width: 100%;
`;

export const Spotlight = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  h1 {
    font-weight: bold;
    font-size: ${Fonts.Sizes.Banner.spotlight};
    line-height: calc(${Fonts.Sizes.Banner.spotlight});
    text-transform: uppercase;
    text-align: left;
    flex: 1;
  }
`;
export const Emoji = styled.img`
  width: 35%;
  margin-right: calc(${Spaces.BaseMargin}*2);
`;

export const Highlighted = styled.h2`
  font-weight: 300;
  font-size: ${Fonts.Sizes.Banner.highlighted};
  line-height: calc(${Fonts.Sizes.Banner.highlighted} + 10px);
  text-transform: uppercase;
`;

export const Project = styled.div`
  width: 80%;
`;
export const Title = styled.h3`
  font-weight: normal;
  font-size: ${Fonts.Sizes.Banner.title};
  line-height: calc(${Fonts.Sizes.Banner.title} + 10px);
`;

export const Timer = styled.div`
  background: #fff;
  width: 100%;
  height: 1px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
    background: ${Colors.White};
    width: 50%;
    height: 5px;
  }
`;

export const Paragraph = styled.p`
  margin-top: calc(${Spaces.BaseMargin}*4);
  font-weight: normal;
  font-size: ${Fonts.Sizes.Banner.paragraph};
  line-height: calc(${Fonts.Sizes.Banner.paragraph} + 10px);
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
