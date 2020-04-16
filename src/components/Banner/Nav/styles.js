import styled from 'styled-components';

import { Spaces, Fonts, Colors } from '~/styles/Metrics';

export const Container = styled.div`
  position: fixed;
  right: 0;
  top: 50%;
  transform: translate(0px, -50%);
  margin: calc(${Spaces.BaseMargin} * 3);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 780px) {
    left: 50%;
    top: initial;
    bottom: 0;
    transform: translate(-50%, 0px);
    flex-direction: row-reverse;
    height: 50px;
    width: 100%;
    margin: calc(${Spaces.BaseMargin} * 3) 0;
  }
`;
export const Step = styled.div`
  font-weight: normal;
  font-size: ${Fonts.Sizes.Banner.step};
  line-height: calc(${Fonts.Sizes.Banner.step});
  margin: calc(${Spaces.BaseMargin} * 2) 0;
  strong {
    font-size: ${Fonts.Sizes.Banner.actualStep};
    line-height: calc(${Fonts.Sizes.Banner.actualStep});
  }
  @media (max-width: 780px) {
    margin: 0 calc(${Spaces.BaseMargin} * 2);
  }
`;

export const Button = styled.a`
  display: flex;
  cursor: pointer;
  width: 45px;
  justify-content: center;
  align-items: center;
  @media (max-width: 780px) {
    height: 45px;
    width: initial;
  }
`;

export const Prev = styled.span`
  background: ${Colors.White};
  height: 15vh;
  width: 1px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: 6px;
    left: -15px;
    height: 30px;
    width: 30px;
    border-right: 1px solid ${Colors.White};
    border-bottom: 1px solid ${Colors.White};
    transform: rotate(45deg);
    @media (max-width: 780px) {
      transform: rotate(-45deg);
      bottom: -15px;
      left: 5px;
      border: 0;
      border-top: 1px solid ${Colors.White};
      border-left: 1px solid ${Colors.White};
    }
  }
  @media (max-width: 780px) {
    width: 15vh;
    height: 1px;
  }
`;
export const Next = styled.span`
  background: ${Colors.White};
  height: 15vh;
  width: 1px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 6px;
    left: -15px;
    height: 30px;
    width: 30px;
    border-left: 1px solid ${Colors.White};
    border-top: 1px solid ${Colors.White};
    transform: rotate(45deg);
    @media (max-width: 780px) {
      transform: rotate(-45deg);
      top: -15px;
      right: 5px;
      left: initial;
      border: 0;
      border-right: 1px solid ${Colors.White};
      border-bottom: 1px solid ${Colors.White};
    }
  }
  @media (max-width: 780px) {
    width: 15vh;
    height: 1px;
  }
`;
