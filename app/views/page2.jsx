
import React, {Component} from 'react'
import { Link} from 'react-router';
class Page2 extends Component{
    render() {
        return (
            <div>
                <Link to="/page1/2" activeClassName="active">我要跳转到1</Link>
            </div>
        );
    }
}

export default Page2