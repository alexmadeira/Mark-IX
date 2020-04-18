import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import Menu from '~/components/Menu';
import Projects from '~/components/Projects';
import api from '~/services/api';
import { completeLoadBar } from '~/store/modules/loadBar/actions';

import { Container } from './styles';

function Project({ match: { params } }) {
  const { slug } = params;
  const dispatch = useDispatch();
  const [project, setProject] = useState({});

  useEffect(() => {
    async function getProject() {
      const response = await api.get(`/projects?slug=${slug}`);
      setProject(response.data[0]);
    }
    getProject();
  }, [setProject, slug]);

  useEffect(() => {
    dispatch(completeLoadBar());
  }, [dispatch]);

  return (
    <Container>
      <Menu />
      <Projects />
      <h1>{project.title}</h1>
      <img src={project.banner} alt="" />
      <img src={project.banner} alt="" />
      <img src={project.banner} alt="" />
      <img src={project.banner} alt="" />
      <img src={project.banner} alt="" />
    </Container>
  );
}
Project.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ slug: PropTypes.string }).isRequired,
  }).isRequired,
};

export default Project;
