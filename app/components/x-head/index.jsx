import React, {Component} from 'react'
import { Link } from 'react-router'
import history from './../../router/history.js'
import { connect } from 'react-redux'
import './index.less'
const XHead = React.createClass({
    loginOut(){
        history.push("/login");
    },
    render: function () {
        return (
            <div className="x-page-head-box" data-flex="main:center">
                <div className="x-base-page-size" data-flex="main:justify cross:center">
                    <Link className="x-logo" to="/index/home">
                        <img src={require('./../../assets/images/base/icons/page_logo_icon.png')} alt="Logo" height="100%"/>
                    </Link>
                    <div className="x-user-info" data-flex="main:right cross:center" onClick={this.loginOut}>
                        <span>{this.props.username || 'XXXX' }</span>
                        <i className="x-arrow-icon"></i>
                    </div>
                </div>
            </div>
        );
    }
});


//绑定状态到props上面
function mapStateToProps(state) {
    return {
        username: state.login.username
    }
}

export default connect(mapStateToProps)(XHead)