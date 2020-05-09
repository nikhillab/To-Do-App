import React, { Component } from 'react';
import './Counter.css';
class CounterBtn extends Component {
    constructor() {
        super();
        // this.state = {
        //     counter: 0
        // }
        // this.inc = this.inc.bind(this);
        // this.dec = this.dec.bind(this);
    }
    render() {
        return (
            <div className="CounterBtn">
                <button onClick={() => this.props.incrementMe(Number(this.props.by))}>+{this.props.by}</button>
                <button onClick={() => this.props.decrementMe(Number(this.props.by))}>-{this.props.by}</button>
            </div>
        );
    }
    // inc() {

    //     this.setState({
    //         counter: this.state.counter + Number(this.props.by)
    //     });
    //     this.props.incrementMe(Number(this.props.by))
    // }
    // dec() {

    //     this.setState({
    //         counter: this.state.counter - Number(this.props.by)
    //     });
    //     this.props.decrementMe(Number(this.props.by))
    // }
}

export default CounterBtn