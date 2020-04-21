import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Home from '~/pages/Home';
import Project from '~/pages/Project';
import Sobre from '~/pages/Sobre';

export default function Routes() {
  const transitionDelay = process.env.REACT_APP_PAGE_TRANSITION_DELAY;

  return (
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={transitionDelay}
            classNames="page"
          >
            <Switch location={location}>
              <Route path="/" exact component={Home} />
              <Route path="/sobre" component={Sobre} />
              <Route path="/projeto/:slug" component={Project} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  );
}
