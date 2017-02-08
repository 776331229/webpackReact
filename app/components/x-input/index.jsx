import React, {Component} from 'react'
export default React.createClass({
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
            <div>
                <input type="text" value={this.props.value} placeholder={this.props.placeholder} onChange={this.handleChange} ref="inputBox"/>
            </div>
        );
    }
});
