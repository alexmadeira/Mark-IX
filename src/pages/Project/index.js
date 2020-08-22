import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Parallax, useController } from 'react-scroll-parallax';

import PropTypes from 'prop-types';

import { completeLoadBar } from '~/store/modules/loadBar/actions';
import { requestProject } from '~/store/modules/projects/actions';

import cell from '~/assets/temp/01.png';
import tela1 from '~/assets/temp/tela1.png';
import tela2 from '~/assets/temp/tela2.png';
import Footer from '~/components/Footer';
import HomeBack from '~/components/HomeBack';
import { usePage } from '~/hooks/Page';

import {
  Container,
  Emoji,
  Banner,
  Name,
  Header,
  HeaderTitle,
  HeaderDescription,
  MobileList,
  Preview,
  PreviewScreens,
  TextBox,
} from './styles';

function Project({ match: { params }, disabled }) {
  const { slug } = params;

  const { parallaxController } = useController();

  const dispatch = useDispatch();
  const page = usePage();

  const { project } = useSelector(state => state.projects);

  useEffect(() => {
    dispatch(requestProject(slug));
  }, [dispatch, slug]);

  useEffect(() => {
    dispatch(completeLoadBar());
  }, [dispatch]);

  useEffect(() => {
    const handler = () => parallaxController.update();

    window.addEventListener('load', handler);
    return () => window.removeEventListener('load', handler);
  }, [parallaxController]);

  if (!project.name) {
    return null;
  }

  return (
    <Container>
      <HomeBack className="logo" projectId={project.id}>
        <Emoji />
      </HomeBack>
      <Banner>
        <Parallax y={[-20, 20]} disabled={disabled} tagOuter="figure">
          <img src={project.background.url} alt={project.background.name} />
        </Parallax>
        <Name className={page.isHome && 'hidden'}>{project.name}</Name>
      </Banner>

      <Header>
        <HeaderTitle>{project.name}</HeaderTitle>
        <HeaderDescription>{project.longDescription}</HeaderDescription>
      </Header>
      <MobileList>
        <li>
          <img src={cell} alt="" />
        </li>
        <li>
          <img src={cell} alt="" />
        </li>
        <li>
          <img src={cell} alt="" />
        </li>
      </MobileList>
      <Preview>
        <Parallax y={[-20, 20]} tagOuter="figure">
          <img src={project.destaque.url} alt="" />
        </Parallax>
      </Preview>
      <PreviewScreens>
        <Parallax className="left" x={[-100, 0]} tagOuter="figure">
          <img alt={project.destaqueEsquerda.name} src={tela1} />
        </Parallax>
        <Parallax className="right" x={[100, 0]} tagOuter="figure">
          <img alt={project.destaqueDireita.name} src={tela2} />
        </Parallax>
      </PreviewScreens>
      <TextBox>
        <p>
          lorem asdsadas asdasd adasd as orem asdsadas asdasd adasd as orem
          asdsadas asdasd adasd as
        </p>
        <p>
          lorem asdsadas asdasd adasd as orem asdsadas asdasd adasd as orem
          asdsadasd adasd as orem asdsadas asdasd adasd as orem asdsadas asdasd
          adasd as
        </p>
      </TextBox>

      <Footer />
    </Container>
  );
}
Project.defaultProps = {
  disabled: false,
};

Project.propTypes = {
  disabled: PropTypes.bool,
  match: PropTypes.shape({
    params: PropTypes.shape({ slug: PropTypes.string }).isRequired,
  }).isRequired,
};

export default memo(Project);
