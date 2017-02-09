import React from 'react';
import { Router , hashHistory } from 'react-router';
import {render} from 'react-dom';
import routes from './router/';

/**
 * 引入less
 * */
import 'flex.css/dist/data-flex.css';
import './assets/css/reset.less';
import './assets/css/icons.less';
import './assets/css/public.less';
import './assets/css/tool.less';

render((<Router routes={routes} history={hashHistory}/>), document.getElementById('app'));