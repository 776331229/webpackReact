import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link  } from 'react-router';
import history from './../../router/history';
import XInput from './../../components/x-input/index.jsx'
import XButton from './../../components/x-button/index.jsx'
import XContent from './../../components/x-content/index.jsx';
import './../../assets/css/modules/userManage.less'

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

const UserEdit = React.createClass({
    getInitialState: function() {
        return {
            searchList : {
                storeName : '',
                agentName : '',
                merchantName : ''
            },
        };
    },
    render() {
        return (
        <XContent title="用户编辑">
            <div className="x-user-edit-box" data-flex="main:left">
                <ReactCSSTransitionGroup transitionName="example">
                    <div className="x-item" data-flex="main:left box:mean">
                        <div data-flex="main:right cross:center">
                            <span>ID:</span>
                        </div>
                        <div data-flex="main:left cross:center">
                            <XInput bgColor="#fff" classValue="x-search-input" value={this.state.searchList.merchantName} placeholder="请输入商户名称" width="150px" onInputChange={this.changeMerchantName}></XInput>
                        </div>
                    </div>
                    <div className="x-item" data-flex="main:left box:mean">
                        <div data-flex="main:right cross:center">
                            <span>ID:</span>
                        </div>
                        <div data-flex="main:left cross:center">
                            <XInput bgColor="#fff" classValue="x-search-input" value={this.state.searchList.merchantName} placeholder="请输入商户名称" width="150px" onInputChange={this.changeMerchantName}></XInput>
                        </div>
                    </div>
                    <div className="x-item" data-flex="main:left box:mean">
                        <div data-flex="main:right cross:center">
                            <span>ID:</span>
                        </div>
                        <div data-flex="main:left cross:center">
                            <XInput bgColor="#fff" classValue="x-search-input" value={this.state.searchList.merchantName} placeholder="请输入商户名称" width="150px" onInputChange={this.changeMerchantName}></XInput>
                        </div>
                    </div>
                    <div className="x-item" data-flex="main:left box:mean">
                        <div data-flex="main:right cross:center">
                            <span>ID:</span>
                        </div>
                        <div data-flex="main:left cross:center">
                            <XInput bgColor="#fff" classValue="x-search-input" value={this.state.searchList.merchantName} placeholder="请输入商户名称" width="150px" onInputChange={this.changeMerchantName}></XInput>
                        </div>
                    </div>
                    <div className="x-item" data-flex="main:left box:mean">
                        <div data-flex="main:right cross:center">
                            <span>ID:</span>
                        </div>
                        <div data-flex="main:left cross:center">
                            <XInput bgColor="#fff" classValue="x-search-input" value={this.state.searchList.merchantName} placeholder="请输入商户名称" width="150px" onInputChange={this.changeMerchantName}></XInput>
                        </div>
                    </div>
                    <div className="x-item" data-flex="main:left box:mean">
                        <div data-flex="main:right cross:center">
                            <span>ID:</span>
                        </div>
                        <div data-flex="main:left cross:center">
                            <XInput bgColor="#fff" classValue="x-search-input" value={this.state.searchList.merchantName} placeholder="请输入商户名称" width="150px" onInputChange={this.changeMerchantName}></XInput>
                        </div>
                    </div>
                    <div className="x-item" data-flex="main:left box:mean">
                        <div data-flex="main:right cross:center">
                            <span>ID:</span>
                        </div>
                        <div data-flex="main:left cross:center">
                            <XInput bgColor="#fff" classValue="x-search-input" value={this.state.searchList.merchantName} placeholder="请输入商户名称" width="150px" onInputChange={this.changeMerchantName}></XInput>
                        </div>
                    </div>
                    <div className="x-item" data-flex="main:left box:mean">
                        <div data-flex="main:right cross:center">
                            <span>ID:</span>
                        </div>
                        <div data-flex="main:left cross:center">
                            <XInput bgColor="#fff" classValue="x-search-input" value={this.state.searchList.merchantName} placeholder="请输入商户名称" width="150px" onInputChange={this.changeMerchantName}></XInput>
                        </div>
                    </div>
                </ReactCSSTransitionGroup>

            </div>
        </XContent>
        );
    },
})

//绑定状态到props上面
function mapStateToProps(state) {
    console.log(state);
    return {
        state: state.login.username
    }
}

export default connect(mapStateToProps)(UserEdit)