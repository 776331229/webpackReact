import React, {Component} from 'react'
import { Link } from 'react-router'
import './index.less'
export default React.createClass({
    render: function () {
        return (
            <div className="x-page-navigation-bar">
                <ul className="x-nav-box">
                    <li>
                        <Link className="x-item" to="/index/home" activeClassName="active">
                            <i className="x-nav-icon -home"></i>
                            <span>首页</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="x-item" to="/index/userList" activeClassName="active">
                            <i className="x-nav-icon -user"></i>
                            <span>用户管理</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="x-item">
                            <i className="x-nav-icon -exchange"></i>
                            <span>交易查询</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="x-item">
                            <i className="x-nav-icon -data"></i>
                            <span>数据统计</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="x-item">
                            <i className="x-nav-icon -power"></i>
                            <span>权限管理</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="x-item">
                            <i className="x-nav-icon -bill"></i>
                            <span>对账功能</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="x-item">
                            <i className="x-nav-icon -others"></i>
                            <span>其他配置</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="x-item">
                            <i className="x-nav-icon -operation"></i>
                            <span>操作日志</span>
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
});
