import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Parallax, useController } from 'react-scroll-parallax';

import PropTypes from 'prop-types';

import { completeLoadBar } from '~/store/modules/loadBar/actions';
import { requestProject } from '~/store/modules/project/actions';

import cell from '~/assets/temp/01.png';
import Footer from '~/components/Footer';
import HomeBack from '~/components/HomeBack';
import ImageShimmer from '~/components/ImageShimmer';
import Shimmer from '~/components/Shimmer';
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

  const { project, loaded } = useSelector(state => state.project);

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
      <HomeBack className="logo">
        <Emoji />
      </HomeBack>
      <Banner>
        <Parallax y={[-20, 20]} disabled={disabled} tagOuter="figure">
          <ImageShimmer h="100vh" w="100vw" flex={false} className="opacity">
            <img
              src={loaded && project.banner.file.url}
              alt={loaded && project.banner.fileName}
              onLoad={e => e.target.classList.add('loaded')}
            />
          </ImageShimmer>
        </Parallax>
        <Name className={page.isHome && 'hidden'}>
          {loaded ? (
            project.title
          ) : (
            <Shimmer type="line" h="70px" w="300px" flex={false} />
          )}
        </Name>
      </Banner>

      <Header>
        <HeaderTitle>
          {loaded ? (
            <img
              src={loaded && project.logo.file.url}
              alt={loaded && project.logo.fileName}
              onLoad={e => e.target.classList.add('loaded')}
            />
          ) : (
            <Shimmer type="line" h="70px" w="300px" flex={false} />
          )}
        </HeaderTitle>

        <HeaderDescription>
          {loaded ? (
            project.description
          ) : (
            <>
              <Shimmer type="line" h="10px" w="100px" m="0 0 8px 0" />
              <Shimmer type="line" h="10px" w="100px" m="0 0 8px 0" />
              <Shimmer type="line" h="10px" w="100px" m="0 0 8px 0" />
            </>
          )}
        </HeaderDescription>
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
          <ImageShimmer h="100vh" w="100vw" flex={false} className="opacity">
            <img
              src={loaded && project.preview.file.url}
              alt={loaded && project.preview.title}
              onLoad={e => e.target.classList.add('loaded')}
            />
          </ImageShimmer>
        </Parallax>
      </Preview>
      <PreviewScreens>
        <img
          alt={loaded && project.preview.title}
          src={loaded && project.preview.file.url}
          className="top"
          onLoad={e => e.target.classList.add('loaded')}
        />
        <img
          alt={loaded && project.preview.title}
          src={loaded && project.preview.file.url}
          className="bottom"
          onLoad={e => e.target.classList.add('loaded')}
        />
      </PreviewScreens>
      <TextBox>
        <p>{project.technologies}</p>
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
