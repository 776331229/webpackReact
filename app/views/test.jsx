
import React, {Component} from 'react'
import { Link  } from 'react-router';
import history from './../router/history';
import config from './../assets/json/config.json'
import './../assets/css/modules/home.less'

export default React.createClass({
    handleSubmit(event) {
        event.preventDefault();
        history.push('/login');
    },
    render() {
        return (
            <div className="word">
                <i className="icon"></i>
                <i className="bg-img"></i>
                <i className="icon" style={{background : "url("+require('./../assets/images/demo_evaluate_img.jpg')+")"}}></i>
                {config.greetText}
                <img src={require('./../assets/images/demo_evaluate_img.jpg')} alt="" />
                <div onClick={this.handleSubmit}>我也要跳转到page2</div>
                <Link to="/login" activeStyle={{color : '#ff0'}}>我要跳转到登录页面</Link>
            </div>
        );
    },
    routerWillLeave(nextLocation) {
        alert("我要离开了");
    },
})