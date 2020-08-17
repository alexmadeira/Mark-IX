import styled from 'styled-components';

import RandonEmoji from '~/components/Emoji';
import { Colors } from '~/styles/Metrics';
import Spaces from '~/styles/Metrics/spaces';

export const Container = styled.div`
  background: #fff;
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
  .parallax-inner {
    img {
      height: 100vh;
      width: 100vw;
      object-fit: cover;
      object-position: center;
    }
  }
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 2;
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
  transition: 500ms;
  &.hidden {
    opacity: 0;
  }
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  max-width: 1600px;
  margin: calc(${Spaces.BaseMargin}*10) auto 0 auto;
  @media (max-width: 780px) {
    margin: calc(${Spaces.BaseMargin}*3) auto;
    display: flex;
    flex-direction: column;
  }
`;

export const HeaderTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: calc(${Spaces.BasePadding}*3);
  font-size: 5rem;
  line-height: calc(5rem + 10px);
  @media (max-width: 780px) {
    padding: calc(${Spaces.BasePadding});
  }
`;

export const HeaderDescription = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: calc(${Spaces.BasePadding}*3);
  font-size: 2rem;
  line-height: calc(2rem + 10px);
  @media (max-width: 880px) {
    font-size: 2.5rem;
    line-height: calc(2.5rem + 10px);
  }
`;

export const MobileList = styled.ul`
  display: flex;
  max-width: 1600px;
  margin: calc(${Spaces.BaseMargin}*5) auto 0 auto;
  padding: calc(${Spaces.BasePadding}*5);
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  overflow-x: scroll;
  @media (max-width: 1400) {
    justify-content: center;
    overflow: initial;
  }
  li {
    list-style: none;
    margin: 0 calc(${Spaces.BaseMargin}*3);
  }
`;

export const PreviewMovie = styled.div`
  background: #069;
  overflow: hidden;
  width: 100%;
  height: 80vh;
  .parallax-inner {
    img {
      width: 100%;
    }
  }
`;
