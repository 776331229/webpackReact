import React, {Component} from 'react'
import { Link  } from 'react-router';
import history from './../router/history';
import './../assets/css/base.less'
import './../assets/css/modules/home.less'

export default React.createClass({
    handleSubmit(event) {
        event.preventDefault();
        history.push('/login');
    },
    render() {
        return (
            <div className="x-content">
               <h2>首页</h2>
                <ul data-flex="main:center">
                    <li>
                        <Link to="/userList">用户列表</Link>
                    </li>
                </ul>
            </div>
        );
    },
    routerWillLeave(nextLocation) {
        alert("我要离开了");
    },
})