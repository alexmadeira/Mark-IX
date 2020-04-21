import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import '~/config/ReactotronConfig';

import LoadBar from '~/components/LoadBar';
import Menu from '~/components/Menu';
import Projects from '~/components/Projects';
import Routes from '~/routes';
import history from '~/services/history';
import GlobalStyle from '~/styles/global';

import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <LoadBar />
      <Router history={history}>
        <Projects />
        <Menu />
        <GlobalStyle />
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
