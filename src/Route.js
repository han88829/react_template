import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Admin from './component/admin';
import Bundle from './Bundle';

const Login = (props) => (
  <Bundle load={() => import('./component/login')}>
    {(Login) => <Login {...props} />}
  </Bundle>
)

class RouterS extends Component {

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/app" component={Admin} />
            <Route path="/login" exact component={Login} />

            {/* 重定向路由 */}
            {<Redirect from="/" to="/app" />}

          </Switch>
        </div>
      </Router>
    );
  }
}


export default RouterS;
