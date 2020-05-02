import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import { completeLoadBar } from '~/store/modules/loadBar/actions';
import { requestProject } from '~/store/modules/projects/actions';

import Footer from '~/components/Footer';
import HomeBack from '~/components/HomeBack';

import { Container, Emoji, Banner, Header, Name } from './styles';

function Project({ match: { params } }) {
  const { slug } = params;

  const dispatch = useDispatch();

  const { project } = useSelector(state => state.projects);

  useEffect(() => {
    dispatch(requestProject(slug));
  }, [dispatch, slug]);

  useEffect(() => {
    dispatch(completeLoadBar());
  }, [dispatch]);

  const background =
    'https://compass.jeep.com.br/img-desktop/galeria/new/galeria-desk(2).jpg';

  return (
    <Container>
      <HomeBack className="logo" projectId={project._id}>
        <Emoji />
      </HomeBack>

      <Banner background={background}>
        <Name className="">{project.title}</Name>
      </Banner>
      <Header>
        <h1>{project.title}</h1>
      </Header>
      <Footer />
    </Container>
  );
}
Project.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ slug: PropTypes.string }).isRequired,
  }).isRequired,
};

export default Project;
