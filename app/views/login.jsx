import React, {Component} from 'react'
import history from './../router/history';
import XInput from './../components/x-input/index.jsx'
import XButton from './../components/x-button/index.jsx'
import { connect } from 'react-redux'
import { login } from '../redux/actions/loginAction.js';
import './../assets/css/modules/login.less'

const Login  = React.createClass({
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    },
    getInitialState: function() {
        return {
            username: '',
            password : ''
        };
    },
    login() {
        let username = this.state.username,
            password = this.state.password;
        if(username == 'admin' && password == '123456'){
            this.props.dispatch(login({username,password,true}));
            history.push("/index/home");
        } else {
            alert("请输入正确的用户名或密码");
        }

    },
    /**
     * 改变输入框内容
     * @param (string) val 用户名
     * */
    changeUsername(val){
        this.setState({
            username: val
        });
    },
    /**
     * 改变输入框内容
     * @param (string) val 密码
     * */
    changePassword(val){
        this.setState({
            password: val
        });
    },
    /**
     * 按回车键事件
     * @param (object) e
     * */
    handleKeyDown(e){
       if(e.keyCode === 13) this.login();
    },
    render() {
        return (
            <div className="x-login-bg" data-flex="main:center cross:center">
                <div className="x-login-box">
                    <div className="x-title">
                        <span>用户登录</span>
                    </div>
                    <div className="x-content">
                        <XInput classValue="x-login-input" bgColor="#eee" value={this.state.username} placeholder="请输入用户名" onInputChange={this.changeUsername}>
                            <i className="x-icon login-user-icon"></i>
                        </XInput>
                        <XInput classValue="x-login-input" bgColor="#eee" type="password" value={this.state.password} placeholder="请输入密码" onInputChange={this.changePassword}>
                            <i className="x-icon login-pass-icon"></i>
                        </XInput>
                        <XButton value="登录" width="100%" onClick={this.login}></XButton>
                    </div>
                </div>

            </div>
        );
    }
})

//绑定状态到props上面
function mapStateToProps(state) {
    console.log(state);
    return {
        state: state.login.username
    }
}

export default connect(mapStateToProps)(Login)