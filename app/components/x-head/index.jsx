import React, {Component} from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import './index.less'
const XHead = React.createClass({
    render: function () {
        return (
            <div className="x-page-head-box" data-flex="main:center">
                <div className="x-base-page-size" data-flex="main:justify cross:center">
                    <Link className="x-logo" to="/index/home">
                        <img src={require('./../../assets/images/base/icons/page_logo_icon.png')} alt="Logo" height="100%"/>
                    </Link>
                    <div >
                        <span>{this.props.username}</span>
                        <i></i>
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