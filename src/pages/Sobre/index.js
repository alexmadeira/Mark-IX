import React from 'react';
import { FaInstagram, FaLinkedinIn, FaBitbucket } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Logo from '~/assets/emojis/01.png';
import Menu from '~/components/Menu';
import Projects from '~/components/Projects';

import {
  Container,
  Header,
  Title,
  // SubTitle,
  ContentBox,
  TextBox,
  Text,
  Footer,
  Social,
  SocialItem,
} from './styles';

export default function Sobre() {
  return (
    <Container>
      <Menu />
      <Projects />
      <Header>
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </Header>
      <ContentBox>
        <Title>Etiam elementum diam in dui lacinia efficitur.</Title>

        <TextBox>
          <Text>
            Vivamus non lorem lobortis, porttitor sem in, tristique sapien.
            Nulla volutpat justo at massa rhoncus suscipit. Ut pulvinar dui sit
            amet leo ultrices consectetur. Quisque eget nunc sit amet nibh
            gravida aliquet. Maecenas mollis ex vel est semper fermentum. Nunc
            et quam volutpat, posuere tortor malesuada, laoreet metus. Curabitur
            sit amet vestibulum augue, at viverra tellus. Fusce ullamcorper nibh
            vitae eros ullamcorper semper. Suspendisse vel diam vulputate,
            tempus risus vitae, iaculis purus. Donec non ex nec velit finibus
            consequat. Cras lectus neque, sodales non ex at, pellentesque
            tristique odio. Nam imperdiet purus ac sodales accumsan. Nam
            eleifend convallis libero, id rutrum ex facilisis sed. Nullam
            facilisis eget nulla lacinia pulvinar.
          </Text>
          <Text>
            Vivamus non lorem lobortis, porttitor sem in, tristique sapien.
            Nulla volutpat justo at massa rhoncus suscipit. Ut pulvinar dui sit
            amet leo ultrices consectetur. Quisque eget nunc sit amet nibh
            gravida aliquet. Maecenas mollis ex vel est semper fermentum. Nunc
            et quam volutpat, posuere tortor malesuada, laoreet metus. Curabitur
            sit amet vestibulum augue, at viverra tellus. Fusce ullamcorper nibh
            vitae eros ullamcorper semper. Suspendisse vel diam vulputate,
            tempus risus vitae, iaculis purus. Donec non ex nec velit finibus
            consequat. Cras lectus neque, sodales non ex at, pellentesque
            tristique odio. Nam imperdiet purus ac sodales accumsan. Nam
            eleifend convallis libero, id rutrum ex facilisis sed. Nullam
            facilisis eget nulla lacinia pulvinar.
          </Text>
          <Text>
            Vivamus non lorem lobortis, porttitor sem in, tristique sapien.
            Nulla volutpat justo at massa rhoncus suscipit. Ut pulvinar dui sit
            amet leo ultrices consectetur. Quisque eget nunc sit amet nibh
            gravida aliquet. Maecenas mollis ex vel est semper fermentum. Nunc
            et quam volutpat, posuere tortor malesuada, laoreet metus. Curabitur
            sit amet vestibulum augue, at viverra tellus. Fusce ullamcorper nibh
            vitae eros ullamcorper semper. Suspendisse vel diam vulputate,
            tempus risus vitae, iaculis purus. Donec non ex nec velit finibus
            consequat. Cras lectus neque, sodales non ex at, pellentesque
            tristique odio. Nam imperdiet purus ac sodales accumsan. Nam
            eleifend convallis libero, id rutrum ex facilisis sed. Nullam
            facilisis eget nulla lacinia pulvinar.
          </Text>
        </TextBox>
      </ContentBox>
      <Footer>
        <Social>
          <SocialItem>
            <a href="/#">
              <FaInstagram />
            </a>
          </SocialItem>
          <SocialItem>
            <a href="/#">
              <FaLinkedinIn />
            </a>
          </SocialItem>
          <SocialItem>
            <a href="/#">
              <FaBitbucket />
            </a>
          </SocialItem>
        </Social>
      </Footer>
    </Container>
  );
}
