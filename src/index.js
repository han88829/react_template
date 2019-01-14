import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Route from './Route';
import { Provider } from 'mobx-react';
import stores from './store/store';

// stores作为全局的状态树进行管理
ReactDOM.render(
    <Provider store={stores}>
        <Route />
    </Provider>
    , document.getElementById('root'));