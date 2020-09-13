import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Parallax, useController } from 'react-scroll-parallax';

import PropTypes from 'prop-types';

import { completeLoadBar } from '~/store/modules/loadBar/actions';
import { requestProject } from '~/store/modules/project/actions';

import Footer from '~/components/Footer';
import HomeBack from '~/components/HomeBack';
import ImageShimmer from '~/components/ImageShimmer';
import NextProject from '~/components/NextProject';
import Shimmer from '~/components/Shimmer';
import { usePage } from '~/hooks/Page';

import {
  Container,
  Emoji,
  Banner,
  Name,
  Header,
  HeaderLogo,
  HeaderDescription,
  MobileList,
  Preview,
  PreviewScreens,
  Technologies,
  Technology,
} from './styles';

function Project({ banner, disabled }) {
  const { slug = banner } = useParams();

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
              src={project.id ? project.banner.fields.file.url : ''}
              alt={project.id ? project.banner.fields.fileName : ''}
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
        {loaded ? (
          <HeaderLogo
            src={loaded ? project.logo.fields.file.url : ''}
            alt={loaded ? project.logo.fields.fileName : ''}
            onLoad={e => e.target.classList.add('loaded')}
          />
        ) : (
          <Shimmer type="line" h="70px" w="300px" flex={false} />
        )}

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
      <Technologies>
        {loaded &&
          project.technologies.map(technology => (
            <Technology>{technology.fields.name}</Technology>
          ))}
      </Technologies>
      <MobileList>
        {loaded &&
          project.mobile.map(({ fields }) => (
            <li>
              <img src={fields.file.url} alt="" />
            </li>
          ))}
      </MobileList>
      <Preview>
        <Parallax y={[-20, 20]} tagOuter="figure">
          <ImageShimmer h="100vh" w="100vw" flex={false} className="opacity">
            <img
              src={loaded ? project.preview.fields.file.url : ''}
              alt={loaded ? project.preview.title : ''}
              onLoad={e => e.target.classList.add('loaded')}
            />
          </ImageShimmer>
        </Parallax>
      </Preview>
      <PreviewScreens>
        <img
          alt={loaded ? project.preview.title : ''}
          src={loaded ? project.preview.fields.file.url : ''}
          className="top"
          onLoad={e => e.target.classList.add('loaded')}
        />
        <img
          alt={loaded ? project.preview.title : ''}
          src={loaded ? project.preview.fields.file.url : ''}
          className="bottom"
          onLoad={e => e.target.classList.add('loaded')}
        />
      </PreviewScreens>

      <NextProject />
      <Footer />
    </Container>
  );
}
Project.defaultProps = {
  disabled: false,
  banner: false,
};

Project.propTypes = {
  disabled: PropTypes.bool,
  banner: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

export default memo(Project);
