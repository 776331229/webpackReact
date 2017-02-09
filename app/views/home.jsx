import React, {Component} from 'react'
import { Link  } from 'react-router';
import history from './../router/history';
import XContent from './../components/x-content/index.jsx';
import './../assets/css/modules/home.less'

export default React.createClass({
    handleSubmit(event) {
        event.preventDefault();
        history.push('/login');
    },
    render() {
        return (
            <XContent title="首页">
                我是首页
            </XContent>
        );
    },
    routerWillLeave(nextLocation) {
        alert("我要离开了");
    },
})