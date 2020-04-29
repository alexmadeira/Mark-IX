import styled from 'styled-components';

import { Fonts, Spaces } from '~/styles/Metrics';

export const Container = styled.div`
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

export const Type = styled.small`
  font-weight: normal;
  font-size: ${Fonts.Sizes.Banner.type};
  line-height: calc(${Fonts.Sizes.Banner.type} + 10px);
  margin-left: calc(${Spaces.BaseMargin}*2);
  padding-left: calc(${Spaces.BaseMargin}*2);
  position: relative;
  &::after {
    content: '';
    background: #ffffff;
    height: 5px;
    width: 20px;
    position: absolute;
    left: -10px;
    top: 50%;
    transform: translateY(-50%);
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
