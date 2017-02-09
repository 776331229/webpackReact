import React, {Component} from 'react'
import { Link  } from 'react-router';
import history from './../router/history';
import XContent from './../components/x-content/index.jsx';
import './../assets/css/modules/home.less'

export default React.createClass({
    getInitialState: function() {
        return {
            userList : [
                {
                    username : '1111',
                    sex : '男',
                    phone : '13211111111'
                },
                {
                    username : '2222',
                    sex : '男',
                    phone : '13211111111'
                },
                {
                    username : '3333',
                    sex : '男',
                    phone : '13211111111'
                }
            ]
        };
    },
    render() {
        return (
        <XContent title="用户列表">
            <table className="x-table">
                <thead>
                <tr>
                    <th>序号</th>
                    <th>用户名</th>
                    <th>性别</th>
                    <th>电话号码</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.userList.map( (d,i) => {
                        return <tr key={d.username}><td>{i}</td><td>{d.username}</td><td>{d.sex}</td><td>{d.phone}</td></tr>
                    })
                }
                </tbody>
            </table>
        </XContent>
        );
    },
})