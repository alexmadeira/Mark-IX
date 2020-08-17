import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Parallax, useController } from 'react-scroll-parallax';

import PropTypes from 'prop-types';

import { completeLoadBar } from '~/store/modules/loadBar/actions';
import { requestProject } from '~/store/modules/projects/actions';

import cell from '~/assets/temp/01.png';
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

  return (
    <Container>
      <HomeBack className="logo" projectId={project.id}>
        <Emoji />
      </HomeBack>
      <Banner>
        <Parallax y={[-20, 20]} disabled={disabled} tagOuter="figure">
          <img src={project.banner} alt="" />
        </Parallax>
        <Name className={page.isHome && 'hidden'}>{project.title}</Name>
      </Banner>

      <Header>
        <HeaderTitle>{project.title}</HeaderTitle>
        <HeaderDescription>{project.description}</HeaderDescription>
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
          <img src={project.banner} alt="" />
        </Parallax>
      </Preview>
      <PreviewScreens>
        <Parallax className="left" x={[-100, 30]} tagOuter="figure">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          />
        </Parallax>
        <Parallax className="right" x={[100, -50]} tagOuter="figure">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1430&q=80"
          />
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
