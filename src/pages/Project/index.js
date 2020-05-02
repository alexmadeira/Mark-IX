import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import { completeLoadBar } from '~/store/modules/loadBar/actions';
import { setCurrent } from '~/store/modules/page/actions';
import { requestProject } from '~/store/modules/projects/actions';

import HomeBack from '~/components/HomeBack';
import useBanner from '~/hooks/useBanner';

import { Container } from './styles';

function Project({ match: { params } }) {
  const { slug } = params;
  const { bannerPosition } = useBanner();

  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.page.current);
  const { project } = useSelector(state => state.projects);

  useEffect(() => {
    dispatch(requestProject(slug));
  }, [dispatch, slug]);

  useEffect(() => {
    dispatch(completeLoadBar());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setCurrent('Projeto'));
  }, [dispatch]);

  return (
    <Container>
      {currentPage !== 'Home' && bannerPosition >= 0 && (
        <HomeBack projectId={project._id} />
      )}

      <img
        src="https://alexmadeira.sirv.com/mark-viii/imagens/game7/alex-madeira-game7-background.jpg"
        alt=""
      />
      <h1>{project.title}</h1>
      <img
        src="https://alexmadeira.sirv.com/mark-viii/imagens/game7/alex-madeira-game7-destaque-centro.jpg"
        alt=""
      />
    </Container>
  );
}
Project.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ slug: PropTypes.string }).isRequired,
  }).isRequired,
};

export default Project;
