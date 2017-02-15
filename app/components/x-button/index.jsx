import React, {Component} from 'react'
import './index.less'
export default React.createClass({
    propTypes: {
        value : React.PropTypes.string, // 按钮名称
        type : React.PropTypes.string, // 按钮类型
        bgColor : React.PropTypes.string, // 按钮背景颜色
        textColor : React.PropTypes.string, // 按钮文字颜色
        borderRadian : React.PropTypes.string, // 按钮边角弧度
        onClick : React.PropTypes.func, // 按钮点击事件
    },
    getDefaultProps : function () {
        return {
            type : 'button',
            bgColor : '#49b5f6',
            textColor : '#fff',
            bRadian : '3px',
            width : 'auto'
        };
    },
    handleClick: function() {
        this.props.onClick();
    },
    render: function () {
        return (
            <button className="x-button-box" type={this.props.type} style={{ width: this.props.width , backgroundColor: this.props.bgColor , borderRadius: this.props.bRadian }} onClick={this.handleClick}>
                {this.props.children}
                <span style={{ color : this.props.textColor}}>{ this.props.value }</span>
            </button>
        );
    }
});
