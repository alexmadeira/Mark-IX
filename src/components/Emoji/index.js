import React, { useMemo } from 'react';

import emojis from '~/assets/emojis';

import { Container } from './styles';

export default function Emoji({ ...res }) {
  const randonNember = useMemo(() => Math.floor(Math.random() * 2) + 1, []);

  return <Container {...res} src={emojis[randonNember]} />;
}
