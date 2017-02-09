import React, {Component} from 'react'
import './index.less'
export default React.createClass({
    render: function () {
        return (
            <div className="x-page-content-box" data-flex="dir:top box:first">
                <div className="x-title">
                    <h3>{this.props.title}</h3>
                </div>
                <div className="x-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
});
