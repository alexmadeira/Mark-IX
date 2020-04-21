import styled from 'styled-components';

import { saturate, tint } from 'polished';

import { Colors, Spaces } from '~/styles/Metrics';

export const Container = styled.nav``;

const Squares = styled.em`
  position: relative;
  border: 2px solid ${Colors.White};
  width: 10px;
  height: 10px;
  margin-top: 5px;
  display: flex;
  transition: all 0.5s ease;
  &::after {
    position: absolute;
    content: '';
    border: 2px solid ${Colors.White};
    width: 100%;
    height: 100%;
    right: calc(100% + 8px);
    top: -2px;
    transition: all 0.5s ease;
  }
  &::before {
    position: absolute;
    content: '';
    border: 2px solid ${Colors.White};
    width: 100%;
    height: 100%;
    left: calc(100% + 8px);
    top: -2px;
    transition: all 0.5s ease;
  }
  @media (max-width: 550px) {
    display: none;
  }
`;
export const SquaresTop = styled(Squares)`
  margin-top: 0px;
`;
export const SquaresMiddle = styled(Squares)``;
export const SquaresBottom = styled(Squares)``;

export const SquaresMenu = styled.span`
  position: fixed;
  right: 0;
  bottom: 0;
  margin: calc(${Spaces.BasePadding} * 3);
  margin-top: calc((${Spaces.BasePadding} * 3) + 10px);
  width: 40px;
  height: 40px;
  z-index: 21;
  cursor: pointer;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  &.open {
    ${Squares} {
      margin: 0;
      height: 18px;
    }
    ${SquaresTop} {
      border: 0px solid transparent;
      border-top: 2px solid ${Colors.White};
      width: 13px;
      &::after {
        border: 0 solid transparent;
        border-top: 2px solid ${Colors.White};
        border-left: 2px solid ${Colors.White};
        right: 100%;
      }
      &::before {
        border: 0 solid transparent;
        border-top: 2px solid ${Colors.White};
        border-right: 2px solid ${Colors.White};
        left: 100%;
      }
    }
    ${SquaresBottom} {
      border: 0px solid transparent;
      border-bottom: 2px solid ${Colors.White};
      width: 13px;
      &::after {
        border: 0 solid transparent;
        border-bottom: 2px solid ${Colors.White};
        border-left: 2px solid ${Colors.White};
        right: 100%;
        top: initial;
        bottom: -2px;
      }
      &::before {
        border: 0 solid transparent;
        border-bottom: 2px solid ${Colors.White};
        border-right: 2px solid ${Colors.White};
        left: 100%;
        bottom: -2px;
        top: initial;
      }
    }
    ${SquaresMiddle} {
      border: 0 solid transparent;
      background: ${Colors.White};
      width: 6px;
      height: 6px;
      &::after {
        border: 0 solid transparent;
        border-left: 2px solid ${Colors.White};
        right: 100%;
        top: 50%;
        width: calc(100% + 10.5px);
        height: 13px;
        transform: translate(0px, -50%);
      }
      &::before {
        border: 0 solid transparent;
        border-right: 2px solid ${Colors.White};
        left: 100%;
        top: 50%;
        width: calc(100% + 10.5px);
        transform: translate(0px, -50%);
        height: 13px;
      }
    }
  }
`;

export const ProjectsList = styled.ul`
  position: fixed;
  height: 100%;
  width: 100%;
  opacity: 1;
  left: 50%;
  top: 50%;
  overflow: hidden;
  opacity: 0;
  background: ${saturate(0.2, tint(0.5, Colors.Base))};
  z-index: 20;
  padding: calc(${Spaces.BaseMargin}*4) calc(${Spaces.BaseMargin}*8);
  transition: all 0.5s ease;
  transform: translate(-50%, -50%) scale(0);
  transform-origin: center;
  display: grid;
  grid-gap: calc(${Spaces.BaseMargin}*2);
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  li {
    opacity: 0;
    transition: opacity 0.5s ease;
    transition-delay: 0s;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &.open {
    overflow-y: auto;
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
    li {
      opacity: 1;
      transition-delay: 0.5s;
    }
  }
`;
export const Project = styled.li`
  list-style: none;
  img {
    max-width: 100%;
  }
`;
