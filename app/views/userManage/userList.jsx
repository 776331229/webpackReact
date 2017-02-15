import React, {Component} from 'react'
import { Link  } from 'react-router';
import { connect } from 'react-redux'
import history from './../../router/history';
import XInput from './../../components/x-input/index.jsx'
import XButton from './../../components/x-button/index.jsx'
import XContent from './../../components/x-content/index.jsx';
import './../../assets/css/modules/home.less'

const UserList = React.createClass({
    getInitialState: function() {
        return {
            searchList : {
                storeName : '',
                agentName : '',
                merchantName : ''
            },
            userList : [
                {
                    id : 1,
                    name : '小小店',
                    belongPayCompany : '快付小店T0',
                    belongAgent : '快付小店T0',
                    createTime : '快付小店T0',
                    rate : '2016/01/11 00:00:00',
                    balance : '0.8',
                    status : 1
                },
                {
                    id : 2,
                    name : '小小店',
                    belongPayCompany : '快付小店T0',
                    belongAgent : '快付小店T0',
                    createTime : '快付小店T0',
                    rate : '2016/01/11 00:00:00',
                    balance : '0.8',
                    status : 1
                },
                {
                    id : 3,
                    name : '小小店',
                    belongPayCompany : '快付小店T0',
                    belongAgent : '快付小店T0',
                    createTime : '快付小店T0',
                    rate : '2016/01/11 00:00:00',
                    balance : '0.8',
                    status : 1
                },
            ]
        };
    },
    /**
     * 更改小店名称
     * 输入框输入的内容
     * @param (string) val 接收到的值
     * */
    changeStoreName(val){
        this.setState({
            searchList : {
                storeName : val,
            }
        });
    },
    /**
     * 更改代理商名称
     * 输入框输入的内容
     * @param (string) val 接收到的值
     * */
    changeAgentName(val){
        this.setState({
            searchList : {
                agentName : val,
            }
        });
    },
    /**
     * 更改商户名称
     * 输入框输入的内容
     * @param (string) val 接收到的值
     * */
    changeMerchantName(val){
        this.setState({
            searchList : {
                merchantName : val,
            }
        });
    },
    render() {
        let tableInfo = this.state.userList.map( (d,i) => {
            return <tr key={d.id}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.belongPayCompany}</td>
                <td>{d.belongAgent}</td>
                <td>{d.createTime}</td>
                <td>{d.rate}</td>
                <td>{d.balance}</td>
                <td>{d.status == 1 ? '交易成功' : '交易失败'}</td>
                <td>
                    <p>
                        <Link className="color-skin small-font" to="/login">查看详情</Link>
                    </p>
                    <p>
                        <Link className="color-skin small-font" to="/index/userList/userEdit">修改信息</Link>
                    </p>
                </td>
            </tr>
        });

        return (
        <XContent title="用户列表">
            <div className="x-page-search-box" data-flex="main:justify">
                <div className="x-search-title" data-flex="cross:center">
                    <h3>商户数量：</h3>
                    <span className="color-skin">{this.state.userList.length}</span>
                </div>
                <div data-flex="main:right cross:center">
                    <XInput bgColor="#fff" classValue="x-search-input" value={this.state.searchList.storeName} placeholder="请输入小店名称" width="150px" onInputChange={this.changeStoreName}></XInput>
                    <XInput bgColor="#fff" classValue="x-search-input" value={this.state.searchList.agentName} placeholder="请输入代理商名称" width="150px" onInputChange={this.changeAgentName}></XInput>
                    <XInput bgColor="#fff" classValue="x-search-input" value={this.state.searchList.merchantName} placeholder="请输入商户名称" width="150px" onInputChange={this.changeMerchantName}></XInput>
                    <XButton value="搜索" ></XButton>
                </div>
            </div>
            <table className="x-table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>名称</th>
                    <th>所属支付公司</th>
                    <th>所属代理商</th>
                    <th>商户创建时间</th>
                    <th>商户费率</th>
                    <th>商户余额</th>
                    <th>交易状态</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                    { tableInfo }
                </tbody>
            </table>
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

export default connect(mapStateToProps)(UserList)