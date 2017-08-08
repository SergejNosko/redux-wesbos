import React from 'react';
import {Link} from 'react-router';

/*cloneElement is passing down the props to the first child component*/

const Main = React.createClass({
    render(){
        return(
            <div>
                <h1>
                    <Link to="/">Reduxstagram</Link>
                </h1>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        )
    }
});

export default Main;