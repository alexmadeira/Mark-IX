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
`;

export const Button = styled.a`
  display: flex;
  cursor: pointer;
  width: 45px;
  justify-content: center;
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
  }
`;
