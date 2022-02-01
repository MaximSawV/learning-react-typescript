import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {};
    render() {
        return (
            <div className="counter-list">
                <Counter/>
                <Counter/>
                <Counter/>
                <Counter/>
            </div>
        )
    }
}

export default Counters;