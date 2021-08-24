import React, { Component } from 'react';

import './Container.css';

class Container extends Component {
    constructor(props: object) {
        super(props);
        this.state = {

        };
    };

    render () {
        return (
            <div className="container">
                <h1 className="container-header">Just a List</h1>
                {this.props.children}
            </div>
        )
    }
}

export default Container;