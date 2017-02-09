import React, {Component} from 'react'
import './index.less'
export default React.createClass({
    propTypes: {
        value : React.PropTypes.node, // 输入框值
        type : React.PropTypes.string, // 输入框类型
        placeholder : React.PropTypes.string, // 输入框提示内容
        width : React.PropTypes.string, // 输入框宽度
        bgColor : React.PropTypes.string, // 输入框背景颜色
        classValue : React.PropTypes.string, // 传入的class
        onInputChange : React.PropTypes.func // 输入框change事件
    },
    getDefaultProps : function () {
        return {
            type : 'text',
            bgColor : '#fff',
            width : '200px'
        };
    },
    getInitialState: function() {
        return {value: ''};
    },
    handleChange: function(event) {
        this.props.onInputChange(
            this.refs.inputBox.value
        );
    },
    render: function () {
        return (
            <div className={'x-input-box '+ this.props.classValue } data-flex="box:first cross:center" style={{backgroundColor : this.props.bgColor}}>
                {this.props.children}
                <input className="x-input" type={this.props.type} value={this.props.value} placeholder={this.props.placeholder} onChange={this.handleChange} ref="inputBox" style={{width : this.props.width}}/>
            </div>
        );
    }
});
