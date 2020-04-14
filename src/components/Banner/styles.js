import styled from 'styled-components';

import { saturate, tint } from 'polished';

import RandonEmoji from '~/components/Emoji';
import { Colors, Spaces, Fonts } from '~/styles/Metrics';

export const Container = styled.div`
  max-width: 655px;
  width: 50%;
  background: ${saturate(0.2, tint(0.5, Colors.Base))};
  padding: calc(${Spaces.BasePadding} * 3);
  color: ${Colors.White};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 780px) {
    padding: calc(${Spaces.BasePadding} * 3) calc(${Spaces.BasePadding} * 7)
      calc(${Spaces.BasePadding} * 3) calc(${Spaces.BasePadding} * 3);
    max-width: initial;
    width: 100vw;
    height: auto;
  }

  @media (max-width: 780px) and (orientation: landscape) {
    height: auto;
  }
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
    @media (max-width: 780px) {
      font-size: calc(${Fonts.Sizes.Banner.spotlight});
      line-height: calc(${Fonts.Sizes.Banner.spotlight});
      flex: initial;
      margin-right: ${Spaces.BaseMargin};
    }
  }
  @media (max-width: 980px) and (min-width: 780px) {
    flex-direction: column;
  }
  @media (max-width: 780px) {
    align-items: center;
    justify-content: flex-start;
  }
`;
export const Emoji = styled(RandonEmoji)`
  width: 35%;
  margin-right: calc(${Spaces.BaseMargin}*2);
  transform: rotate(-25deg);
  padding: calc(${Spaces.BasePadding});

  @media (max-width: 980px) and (min-width: 780px) {
    transform: rotate(0deg);
  }

  @media (max-width: 780px) {
    width: 15%;
  }
  @media (max-width: 680px) {
    width: 20%;
  }
  @media (max-width: 390px) {
    width: 35%;
    margin-bottom: calc(${Spaces.BaseMargin}*2);
  }
`;

export const Highlighted = styled.h2`
  font-weight: 300;
  font-size: ${Fonts.Sizes.Banner.highlighted};
  line-height: calc(${Fonts.Sizes.Banner.highlighted} + 10px);
  text-transform: uppercase;
  @media (max-width: 970px) {
    text-align: center;
  }
  @media (max-width: 780px) {
    text-align: left;
  }
`;

export const Project = styled.div`
  width: 80%;
  @media (max-width: 970px) {
    width: 95%;
  }
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
  @media (max-width: 970px) {
    font-size: calc(${Fonts.Sizes.Banner.paragraph} + 0.5rem);
    line-height: calc(${Fonts.Sizes.Banner.paragraph} + 0.5rem + 10px);
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
    @media (max-width: 500px) {
      font-size: 3rem;
    }
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
