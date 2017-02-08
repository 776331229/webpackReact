import React from 'react';
import { Router , hashHistory } from 'react-router';
import {render} from 'react-dom';
import routes from './router/';
import 'flex.css/dist/data-flex.css';
import './assets/css/reset.less'
import './assets/css/base.less'

render((<Router routes={routes} history={hashHistory}/>), document.getElementById('app'));