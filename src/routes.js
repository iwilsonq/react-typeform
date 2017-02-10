import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Form from './components/Form';
import Intro from './components/Intro';
import QuestionChain from './components/QuestionChain';
import Thanks from './components/Thanks';

const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={Form}>
        <IndexRoute component={Intro} />
        <Route path='questions' component={QuestionChain} />
        <Route path='thanks' component={Thanks} />
      </Route>
    </Router>
  );
}

export default Routes;
