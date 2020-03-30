import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, Hamburguer, MenuContainer, MenuItem } from './styles';

export default function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Hamburguer
        className={open && 'open'}
        onClick={() => {
          setOpen(!open);
        }}
      />
      <MenuContainer className={open && 'open'}>
        <MenuItem>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/sobre">Sobre</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/projetos">Projetos</Link>
        </MenuItem>
      </MenuContainer>
    </Container>
  );
}
