import React, { Component } from 'react';
import './../style-sheets/counter-style.css';

class Counter extends Component {
    state = {
        count: 0,
    };

    constructor (state: object) {
        super(state);
        this.handleDecrement = this.handleDecrement.bind(this);
    }


    handleIncrement = (product: object) => {
        this.setState({count: this.state.count +1})
    };

    handleDecrement = (product: object) => {
        if(this.state.count > 0)
        {
            this.setState({count: this.state.count -1})
        }
    };

    render() {

        return (
        <React.Fragment>
            <span className={this.getCounterClasses()}>{this.formatCount()}</span>
            <button onClick={() => this.handleIncrement({id: 1})}>+</button>
            <button onClick={() => this.handleDecrement({id: 1})}>-</button>
        </React.Fragment>);
    }

    getCounterClasses() {
        let classes: string = "counter ";
        classes += (this.state.count === 0) ? "warning" : "primary";

        return classes;
    }

    formatCount() {
        const {count} = this.state;

        return count === 0 ? 'Zero' : count;
    }

}

export default Counter;