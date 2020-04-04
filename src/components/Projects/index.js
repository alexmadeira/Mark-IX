import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo1 from '~/assets/temp/logo1.png';
import logo2 from '~/assets/temp/logo2.png';
import logo3 from '~/assets/temp/logo3.png';

import {
  Container,
  SquaresMenu,
  SquaresTop,
  SquaresMiddle,
  SquaresBottom,
  ProjectsList,
  Project,
} from './styles';

export default function Projects() {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <SquaresMenu
        className={open && 'open'}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <SquaresTop />
        <SquaresMiddle />
        <SquaresBottom />
      </SquaresMenu>
      <ProjectsList className={open && 'open'}>
        <Project>
          <Link to="/projeto/nome-do-projeto">
            <img src={logo1} alt="" />
          </Link>
        </Project>
        <Project>
          <Link to="/projeto/nome-do-projeto">
            <img src={logo2} alt="" />
          </Link>
        </Project>
        <Project>
          <Link to="/projeto/nome-do-projeto">
            <img src={logo3} alt="" />
          </Link>
        </Project>
        <Project>
          <Link to="/projeto/nome-do-projeto">
            <img src={logo1} alt="" />
          </Link>
        </Project>
        <Project>
          <Link to="/projeto/nome-do-projeto">
            <img src={logo2} alt="" />
          </Link>
        </Project>
        <Project>
          <Link to="/projeto/nome-do-projeto">
            <img src={logo3} alt="" />
          </Link>
        </Project>
        <Project>
          <Link to="/projeto/nome-do-projeto">
            <img src={logo1} alt="" />
          </Link>
        </Project>
        <Project>
          <Link to="/projeto/nome-do-projeto">
            <img src={logo2} alt="" />
          </Link>
        </Project>
        <Project>
          <Link to="/projeto/nome-do-projeto">
            <img src={logo3} alt="" />
          </Link>
        </Project>
        <Project>
          <Link to="/projeto/nome-do-projeto">
            <img src={logo1} alt="" />
          </Link>
        </Project>
        <Project>
          <Link to="/projeto/nome-do-projeto">
            <img src={logo2} alt="" />
          </Link>
        </Project>
        <Project>
          <Link to="/projeto/nome-do-projeto">
            <img src={logo3} alt="" />
          </Link>
        </Project>
        <Project>
          <Link to="/projeto/nome-do-projeto">
            <img src={logo1} alt="" />
          </Link>
        </Project>
        <Project>
          <Link to="/projeto/nome-do-projeto">
            <img src={logo2} alt="" />
          </Link>
        </Project>
        <Project>
          <Link to="/projeto/nome-do-projeto">
            <img src={logo3} alt="" />
          </Link>
        </Project>
        <Project>
          <Link to="/projeto/nome-do-projeto">
            <img src={logo1} alt="" />
          </Link>
        </Project>
        <Project>
          <Link to="/projeto/nome-do-projeto">
            <img src={logo2} alt="" />
          </Link>
        </Project>
        <Project>
          <Link to="/projeto/nome-do-projeto">
            <img src={logo3} alt="" />
          </Link>
        </Project>
        <Project>
          <Link to="/projeto/nome-do-projeto">
            <img src={logo1} alt="" />
          </Link>
        </Project>
        <Project>
          <Link to="/projeto/nome-do-projeto">
            <img src={logo2} alt="" />
          </Link>
        </Project>
        <Project>
          <Link to="/projeto/nome-do-projeto">
            <img src={logo3} alt="" />
          </Link>
        </Project>
        <Project>
          <Link to="/projeto/nome-do-projeto">
            <img src={logo1} alt="" />
          </Link>
        </Project>
        <Project>
          <Link to="/projeto/nome-do-projeto">
            <img src={logo2} alt="" />
          </Link>
        </Project>
        <Project>
          <Link to="/projeto/nome-do-projeto">
            <img src={logo3} alt="" />
          </Link>
        </Project>
        <Project>
          <Link to="/projeto/nome-do-projeto">
            <img src={logo1} alt="" />
          </Link>
        </Project>
        <Project>
          <Link to="/projeto/nome-do-projeto">
            <img src={logo2} alt="" />
          </Link>
        </Project>
        <Project>
          <Link to="/projeto/nome-do-projeto">
            <img src={logo3} alt="" />
          </Link>
        </Project>
        <Project>
          <Link to="/projeto/nome-do-projeto">
            <img src={logo1} alt="" />
          </Link>
        </Project>
        <Project>
          <Link to="/projeto/nome-do-projeto">
            <img src={logo2} alt="" />
          </Link>
        </Project>
        <Project>
          <Link to="/projeto/nome-do-projeto">
            <img src={logo3} alt="" />
          </Link>
        </Project>
        <Project>
          <Link to="/projeto/nome-do-projeto">
            <img src={logo1} alt="" />
          </Link>
        </Project>
        <Project>
          <Link to="/projeto/nome-do-projeto">
            <img src={logo2} alt="" />
          </Link>
        </Project>
        <Project>
          <Link to="/projeto/nome-do-projeto">
            <img src={logo3} alt="" />
          </Link>
        </Project>
        <Project>
          <Link to="/projeto/nome-do-projeto">
            <img src={logo1} alt="" />
          </Link>
        </Project>
        <Project>
          <Link to="/projeto/nome-do-projeto">
            <img src={logo2} alt="" />
          </Link>
        </Project>
        <Project>
          <Link to="/projeto/nome-do-projeto">
            <img src={logo3} alt="" />
          </Link>
        </Project>
      </ProjectsList>
    </Container>
  );
}
