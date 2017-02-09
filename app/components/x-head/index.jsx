import React, {Component} from 'react'
import { Link } from 'react-router'
import './index.less'
export default React.createClass({
    render: function () {
        return (
            <div className="x-page-head-box" data-flex="main:center">
                <div className="x-base-page-size" data-flex="main:justify cross:center">
                    <Link className="x-logo" to="/index/home">
                        <img src={require('./../../assets/images/base/icons/page_logo_icon.png')} alt="Logo" height="100%"/>
                    </Link>
                    <div>
                        <span>XXXX</span>
                    </div>
                </div>
            </div>
        );
    }
});
