import React from 'react';

class Counter extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.counter}</p>
                <h1>So many clicks!</h1>
            </div>
        );
    }
}
export default Counter;