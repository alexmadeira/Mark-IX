import React, { useEffect, useState } from 'react';

import api from '~/services/api';

import { Container } from './styles';

export default function Projects() {
  const [project, setProject] = useState({});
  useEffect(() => {
    async function getProject() {
      const response = await api.get('/projects/1');
      setProject(response.data);
    }
    getProject();
  }, [setProject]);
  return (
    <Container>
      <h1>{project.title}</h1>
      <img src={project.banner} alt="" />
      <img src={project.banner} alt="" />
      <img src={project.banner} alt="" />
      <img src={project.banner} alt="" />
      <img src={project.banner} alt="" />
    </Container>
  );
}
