import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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

function Project({ match: { params } }) {
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

  const background =
    'https://compass.jeep.com.br/img-desktop/galeria/new/galeria-desk(2).jpg';

  return (
    <Container>
      <HomeBack className="logo" projectId={project._id}>
        <Emoji />
      </HomeBack>

      <Banner background={background}>
        <Name className={page.isHome && 'hidden'}>{project.title}</Name>
      </Banner>
      <Header>
        <HeaderTitle>{project.title}</HeaderTitle>
        <HeaderDescription>
          Nunc rutrum pulvinar posuere. Cras lorem erat, pharetra eget ante a,
          tempor viverra arcu. Phasellus mattis non nisi ut porta. Sed tempor eu
          lectus nec euismod. Integer consectetur odio ut urna porta ultrices.
          Morbi ac tempor risus, eu interdum est. Sed neque mi, feugiat ac odio
          tempor, porttitor cursus odio. Integer malesuada eu massa a eleifend.
          Curabitur tempus porttitor orci, at blandit sapien vulputate non.
          Morbi tempor, enim et commodo dignissim, justo metus tincidunt leo, eu
          eleifend quam orci in odio. Curabitur vel lorem semper, venenatis
          magna sit amet, semper lacus.
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
      <PreviewMovie />
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
