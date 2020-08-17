import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

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
  PreviewMovie,
} from './styles';

function Project({ match: { params }, disabled }) {
  const { slug } = params;

  const dispatch = useDispatch();
  const page = usePage();

  const { project } = useSelector(state => state.projects);

  useEffect(() => {
    dispatch(requestProject(slug));
  }, [dispatch, slug]);

  useEffect(() => {
    dispatch(completeLoadBar());
  }, [dispatch]);

  return (
    <ParallaxProvider>
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
        <PreviewMovie>
          <Parallax y={[-20, 20]} tagOuter="figure">
            <img src={project.banner} alt="" />
          </Parallax>
        </PreviewMovie>
        <PreviewMovie />
        <PreviewMovie />
        <PreviewMovie />
        <Footer />
      </Container>
    </ParallaxProvider>
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
