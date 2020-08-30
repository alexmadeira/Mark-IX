import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  openMenu,
  closeMenu,
  openProjects,
} from '~/store/modules/menu/actions';

import Scroll from '~/utils/scroll';

import { Container, Hamburguer, MenuContainer, MenuItem } from './styles';

export default function Menu() {
  const dispatch = useDispatch();
  const open = useSelector(state => state.menu.menuOpen);

  const [isDark, setIsDark] = useState(false);

  const toogleMode = useCallback(() => {
    setIsDark(Scroll.darkMode('14/15'));
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', toogleMode);
    return () => {
      window.removeEventListener('scroll', toogleMode);
    };
  });
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
        className={`${open && 'open'} ${isDark && 'dark'}`}
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
