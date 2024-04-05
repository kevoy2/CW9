import React, {Component} from 'react';

class HelloName extends Component { 
    render() {
        return (
            <div className="helloName">
                <h1>Hello, {this.props.name}!</h1>
            </div>
        );
    }
}

export default HelloName;