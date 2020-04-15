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
