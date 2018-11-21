import * as React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Route, Router, Switch } from 'react-router-dom';
import { Tracker } from 'meteor/tracker';
import { createBrowserHistory } from 'history';

import App from '../imports/ui/App';
import Signup from '../imports/ui/Signup';
import Link from '../imports/ui/Link';
import NotFound from '../imports/ui/NotFound';
import Login from '../imports/ui/Login';

const browserHistory = createBrowserHistory();
const unauthenticatedPages: any = ['/', '/singup'];
const authenticatedPages: any = ['/links'];
const Root = (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/main" component={App} />
      <Route path="/signup" component={Signup} />
      <Route path="/links" component={Link} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
)

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.user();
  const pathname = browserHistory.location.pathname;
  const issUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  if (isAuthenticatedPage && isAuthenticated) {
    console.log('Tracker.autorun: goto /links');
    browserHistory.push('/links');
  } else if (issUnauthenticatedPage) {
    console.log('Tracker.autorun: goto /');
    browserHistory.push('/');
  }
})

Meteor.startup(() => {
  render(Root, document.getElementById('react-target'));
});
