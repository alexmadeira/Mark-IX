import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

import '~/config/ReactotronConfig';

import LoadBar from '~/components/LoadBar';
import Menu from '~/components/Menu';
import Projects from '~/components/Projects';
import Routes from '~/routes';
import GlobalStyle from '~/styles/global';

import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <ParallaxProvider>
        <LoadBar />
        <BrowserRouter>
          <Projects />
          <Menu />
          <GlobalStyle />
          <Routes />
        </BrowserRouter>
      </ParallaxProvider>
    </Provider>
  );
}

export default App;
