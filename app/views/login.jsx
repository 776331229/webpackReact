import React, {Component} from 'react'
import history from './../router/history';
import XInput from './../components/x-input/index.jsx'
import './../assets/css/modules/login.less'
export default React.createClass({
    getInitialState: function() {
        return {
            username: '2222',
            password : ''
        };
    },
    login(event) {
        let username = this.state.username,
            password = this.state.password;
        if(username != 'admin' && password != '123456'){
            alert("请输入正确的用户名或密码");
        } else {
            history.push("/home");
        }

    },
    changeUsername(val){
        this.setState({
            username: val
        });
    },
    changePassword(val){
        this.setState({
            password: val
        });
    },
    render() {
        return (
            <div data-flex="dir:top cross:center">
                <XInput value={this.state.username} placeholder="请输入用户名" onInputChange={this.changeUsername}/>
                <XInput value={this.state.password} placeholder="请输入密码" onInputChange={this.changePassword}/>
                <button type="button" onClick={this.login}>登录</button>
            </div>
        );
    },
    routerWillLeave(nextLocation) {
        alert("我要离开了");
    },
})