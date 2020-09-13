import styled from 'styled-components';

import RandonEmoji from '~/components/Emoji';
import { Colors } from '~/styles/Metrics';
import Spaces from '~/styles/Metrics/spaces';

const openDelay = process.env.REACT_APP_OPEN_PROJECT_TIMER;

export const Container = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  overflow-x: hidden;
`;

export const Emoji = styled(RandonEmoji)`
  width: 13rem;
  padding: ${Spaces.BasePadding};
`;

export const Banner = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  margin-bottom: calc(${Spaces.BaseMargin}*10);
  background: #000;
  .parallax-inner {
    .opacity {
      opacity: 0.4;
    }
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: center;
      opacity: 0;
      transition: opacity ${openDelay}ms ease;
      &.loaded {
        opacity: 1;
      }
    }
  }
  @media (max-width: 780px) {
    margin-bottom: 0;
  }
`;

export const Name = styled.h1`
  color: ${Colors.White};
  z-index: 5;
  font-size: 8.5rem;
  line-height: calc(8.5rem + 10px);
  opacity: 1;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: opacity ${openDelay}ms ease;
  &.hidden {
    opacity: 0;
  }
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 100%;
  max-width: 1600px;
  margin: calc(${Spaces.BaseMargin}*10) auto 0 auto;
  @media (max-width: 780px) {
    margin: calc(${Spaces.BaseMargin}*3) auto;
    display: flex;
    flex-direction: column;
  }
`;

export const HeaderLogo = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: calc(${Spaces.BasePadding}*3);
  flex: 1;
  object-fit: contain;
  @media (max-width: 780px) {
    padding: calc(${Spaces.BasePadding});
  }
`;

export const HeaderDescription = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: calc(${Spaces.BasePadding}*3);
  font-size: 2rem;
  line-height: calc(2rem + 10px);
  @media (max-width: 880px) {
    font-size: 2.5rem;
    line-height: calc(2.5rem + 10px);
  }
`;

export const Technologies = styled.p`
  padding: ${Spaces.BasePadding} calc(${Spaces.BasePadding}*3);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 1600px;
  width: 100%;
  margin: 0 auto 0 auto;
  a {
    margin-right: ${Spaces.BaseMargin};
    img {
      width: 5rem;
      transition: all ${openDelay}ms ease;
      filter: grayscale(1);
    }
    &:hover {
      img {
        filter: grayscale(0);
      }
    }
  }
`;

export const Technology = styled.span`
  margin-right: ${Spaces.BaseMargin};
`;

export const MobileList = styled.ul`
  display: flex;
  width: 100%;

  margin: calc(${Spaces.BaseMargin}*5) auto 0 auto;
  padding: calc(${Spaces.BasePadding}*5);
  flex-wrap: wrap;
  li {
    list-style: none;
    flex: 1;
    min-width: 320px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const Preview = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100vh;
  margin-bottom: calc(${Spaces.BaseMargin} * 5);
  .parallax-inner {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      opacity: 0;
      transition: opacity ${openDelay}ms ease;
      &.loaded {
        opacity: 1;
      }
    }
  }
`;

export const PreviewScreens = styled.div`
  width: 100%;
  height: 120vh;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: calc(${Spaces.BaseMargin} * 5);
  img {
    height: 55%;
    opacity: 0;
    transition: opacity ${openDelay}ms ease;
    position: absolute;
    left: 50%;
    &.top {
      transform: translateX(-80%);
      top: 0;
    }
    &.bottom {
      transform: translateX(-20%);
      bottom: 0;
    }

    &.loaded {
      opacity: 1;
    }
  }
  figure {
    position: absolute;
    &.left {
      top: 0;
    }
    &.right {
      bottom: 0;
    }
  }
`;
