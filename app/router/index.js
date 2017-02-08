import React from 'react'
import { Route,IndexRoute} from 'react-router';
import App from './../views/APP.jsx';
import Page1 from '../views/page1.jsx';
import Page2 from '../views/page2.jsx';

let routes = <Route path="/" component={App}>
                <IndexRoute component={Page1}/>
                <Route path="page1/:id" component={Page1}/>
                <Route path="page2" component={Page2}/>
            </Route>;

export default routes