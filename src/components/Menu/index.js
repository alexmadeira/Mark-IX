import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  openMenu,
  closeMenu,
  openProjects,
} from '~/store/modules/menu/actions';

import { useScollDarkMode } from '~/hooks/Scoll';

import { Container, Hamburguer, MenuContainer, MenuItem } from './styles';

export default function Menu() {
  const dispatch = useDispatch();
  const open = useSelector(state => state.menu.menuOpen);
  const darkMode = useScollDarkMode('14/15');
  const toggleMenu = () => {
    if (open) {
      dispatch(closeMenu());
    } else {
      dispatch(openMenu());
    }
  };
  const showProjects = () => {
    dispatch(openProjects());
  };

  return (
    <Container>
      <Hamburguer
        className={`${open && 'open'} ${darkMode && 'dark'}`}
        onClick={toggleMenu}
      />
      <MenuContainer className={open && 'open'}>
        <MenuItem>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/sobre">Sobre</Link>
        </MenuItem>
        <MenuItem>
          <button type="button" onClick={showProjects}>
            Projetos
          </button>
        </MenuItem>
      </MenuContainer>
    </Container>
  );
}
