import React from 'react';
import { Router , hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import {render} from 'react-dom';
import routes from './router/';
import configureStore from './redux/store/store.js';
/**
 * 引入less
 * */
import 'flex.css/dist/data-flex.css';
import './assets/css/reset.less';
import './assets/css/icons.less';
import './assets/css/public.less';
import './assets/css/tool.less';

const store = configureStore();
let rootElement = document.getElementById('app');
render(
    <Provider store={store}>
        <Router routes={routes} history={hashHistory}/>
    </Provider>,
    rootElement
)