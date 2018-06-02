import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { observable, action, useStrict } from "mobx";
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import User from '../user';

// 全局状态数stores传入组件
@inject('store')
class App extends Component {
    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <div>
                    <Switch>
                        <Route exact path="/app/user" component={User} />

                        {/* 重定向路由 */}
                        {<Redirect from="/" to="/app/user" />}
                    </Switch>
                </div>
            </div>
        )
    }
}

export default App;
