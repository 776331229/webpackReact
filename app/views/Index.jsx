import React from 'react'
import ReactCSSTransitionGroup   from 'react-addons-css-transition-group'
import XHead from './../components/x-head/index.jsx'
import XNavigationBar from './../components/x-navigation-bar/index.jsx'
import XContent from './../components/x-content/index.jsx'
import './../assets/css/public.less'
export default React.createClass({
    render() {
        return <div data-flex="dir:top cross:center">
            <XHead></XHead>
            <div className="x-base-page-size" data-flex="main:left">
                <XNavigationBar></XNavigationBar>
                {this.props.children}
            </div>
        </div>
    }
})