import React from 'react'
import { Route,IndexRoute} from 'react-router';
import App from './../views/APP.jsx';
import Index from './../views/Index.jsx';
import Home from '../views/home.jsx';
import UserList from '../views/userManage/userList.jsx';
import UserEdit from '../views/userManage/userEdit.jsx';
import Login from '../views/login.jsx';

let routes = <Route path="/" component={App}>
                <IndexRoute component={Login}/>
                <Route path="/login" component={Login}></Route>
                <Route path="/index" component={Index}>
                    <IndexRoute component={Home}/>
                    <Route path="home" component={Home}/>
                    <Route path="userList" component={UserList}/>
                    <Route path="userList/userEdit" component={UserEdit}/>
                    <Route path="login" component={Login}/>
                </Route>

            </Route>;

export default routes