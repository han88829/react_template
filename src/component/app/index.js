import React, { Component } from 'react';
import { inject, } from 'mobx-react';
import { Route, Switch, Redirect } from 'react-router-dom';
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
