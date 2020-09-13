import React from 'react';
import { Switch, Route as RouteWrapper } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Home from '~/pages/Home';
import Project from '~/pages/Project';
import Sobre from '~/pages/Sobre';
import Tecnology from '~/pages/Tecnology';

import Route from './Route';

const transtionDelay = process.env.REACT_APP_PAGE_TRANSITION_DELAY;

export default function Routes() {
  const transitionDelay = parseInt(transtionDelay, 10);

  return (
    <RouteWrapper
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            ti
            timeout={transitionDelay}
            classNames="page"
          >
            <Switch location={location}>
              <Route path="/" exact component={Home} location={location} />
              <Route path="/sobre" component={Sobre} location={location} />
              <Route
                path="/projeto/:slug"
                component={Project}
                location={location}
              />
              <Route
                path="/tecnologia/:slug"
                component={Tecnology}
                location={location}
              />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  );
}
