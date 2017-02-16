import React, {Component} from 'react'
import { connect } from 'react-redux'
import QueueAnim from 'rc-queue-anim';
import { Link  } from 'react-router';
import history from './../../router/history';
import XInput from './../../components/x-input/index.jsx'
import XButton from './../../components/x-button/index.jsx'
import XContent from './../../components/x-content/index.jsx';
import './../../assets/css/modules/userManage.less'

const UserEdit = React.createClass({
    getInitialState: function() {
        return {
            show : true ,
            searchList : {
                storeName : '',
                agentName : '',
                merchantName : ''
            },
        };
    },
    routerWillLeave(nextLocation) {
        alert("sadasd");
        return ;
    },
    render() {
        if(this.state.show){
            return (
                <XContent title="用户编辑">
                    <QueueAnim className="x-user-edit-box" data-flex="main:left"  type="bottom">
                        <div className="x-item" data-flex="main:left box:mean" key="demo1">
                            <div data-flex="main:right cross:center">
                                <span>ID:</span>
                            </div>
                            <div data-flex="main:left cross:center">
                                <XInput bgColor="#fff" classValue="x-search-input" value={this.state.searchList.merchantName} placeholder="请输入商户名称" width="150px" onInputChange={this.changeMerchantName}></XInput>
                            </div>
                        </div>
                        <div className="x-item" data-flex="main:left box:mean" key="demo2">
                            <div data-flex="main:right cross:center">
                                <span>ID:</span>
                            </div>
                            <div data-flex="main:left cross:center">
                                <XInput bgColor="#fff" classValue="x-search-input" value={this.state.searchList.merchantName} placeholder="请输入商户名称" width="150px" onInputChange={this.changeMerchantName}></XInput>
                            </div>
                        </div>
                        <div className="x-item" data-flex="main:left box:mean" key={'3'}>
                            <div data-flex="main:right cross:center">
                                <span>ID:</span>
                            </div>
                            <div data-flex="main:left cross:center">
                                <XInput bgColor="#fff" classValue="x-search-input" value={this.state.searchList.merchantName} placeholder="请输入商户名称" width="150px" onInputChange={this.changeMerchantName}></XInput>
                            </div>
                        </div>
                        <div className="x-item" data-flex="main:left box:mean" key={'4'}>
                            <div data-flex="main:right cross:center">
                                <span>ID:</span>
                            </div>
                            <div data-flex="main:left cross:center">
                                <XInput bgColor="#fff" classValue="x-search-input" value={this.state.searchList.merchantName} placeholder="请输入商户名称" width="150px" onInputChange={this.changeMerchantName}></XInput>
                            </div>
                        </div>
                        <div className="x-item" data-flex="main:left box:mean" key={'5'}>
                            <div data-flex="main:right cross:center">
                                <span>ID:</span>
                            </div>
                            <div data-flex="main:left cross:center">
                                <XInput bgColor="#fff" classValue="x-search-input" value={this.state.searchList.merchantName} placeholder="请输入商户名称" width="150px" onInputChange={this.changeMerchantName}></XInput>
                            </div>
                        </div>
                        <div className="x-item" data-flex="main:left box:mean" key={'6'}>
                            <div data-flex="main:right cross:center">
                                <span>ID:</span>
                            </div>
                            <div data-flex="main:left cross:center">
                                <XInput bgColor="#fff" classValue="x-search-input" value={this.state.searchList.merchantName} placeholder="请输入商户名称" width="150px" onInputChange={this.changeMerchantName}></XInput>
                            </div>
                        </div>
                        <div className="x-item" data-flex="main:left box:mean" key={'7'}>
                            <div data-flex="main:right cross:center">
                                <span>ID:</span>
                            </div>
                            <div data-flex="main:left cross:center">
                                <XInput bgColor="#fff" classValue="x-search-input" value={this.state.searchList.merchantName} placeholder="请输入商户名称" width="150px" onInputChange={this.changeMerchantName}></XInput>
                            </div>
                        </div>
                        <div className="x-item" data-flex="main:left box:mean" key={'8'}>
                            <div data-flex="main:right cross:center">
                                <span>ID:</span>
                            </div>
                            <div data-flex="main:left cross:center">
                                <XInput bgColor="#fff" classValue="x-search-input" value={this.state.searchList.merchantName} placeholder="请输入商户名称" width="150px" onInputChange={this.changeMerchantName}></XInput>
                            </div>
                        </div>
                    </QueueAnim >
                </XContent>
            );
        } else {
            return <div>111</div>
        }

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