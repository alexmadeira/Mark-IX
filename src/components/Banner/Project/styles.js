import styled from 'styled-components';

import { Fonts, Spaces } from '~/styles/Metrics';

export const Title = styled.h3`
  font-weight: normal;
  font-size: ${Fonts.Sizes.Banner.title};
  line-height: calc(${Fonts.Sizes.Banner.title} + 10px);
  transition: all 250ms ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: ${Spaces.BaseMargin};
  @media (max-width: 410px) {
    margin: ${Spaces.BaseMargin} 0;
  }
`;

export const Type = styled.small`
  font-weight: normal;
  font-size: ${Fonts.Sizes.Banner.type};
  line-height: calc(${Fonts.Sizes.Banner.type} + 10px);
  position: relative;
  transition: all 250ms ease;
  transition-delay: 180ms;
  display: flex;
  width: 100%;
  flex: 1;
  margin-top: ${Spaces.BaseMargin};
  @media (max-width: 410px) {
    display: none;
  }
`;

export const Paragraph = styled.p`
  margin-top: calc(${Spaces.BaseMargin}*4);
  font-weight: normal;
  font-size: ${Fonts.Sizes.Banner.paragraph};
  line-height: calc(${Fonts.Sizes.Banner.paragraph} + 10px);
  transition: all 250ms ease;
  transition-delay: 430ms;
  @media (max-width: 970px) {
    font-size: calc(${Fonts.Sizes.Banner.paragraph} + 0.5rem);
    line-height: calc(${Fonts.Sizes.Banner.paragraph} + 0.5rem + 10px);
  }
  @media (max-width: 480px) {
    display: none;
  }
`;

export const Container = styled.div`
  width: 80%;
  @media (max-width: 970px) {
    width: 95%;
  }
`;
