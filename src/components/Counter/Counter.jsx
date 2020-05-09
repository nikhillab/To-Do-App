import React, { Component } from 'react';
import CounterBtn from './CounterBtn'
import './Counter.css';
class Counter extends Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
        this.inc = this.inc.bind(this);
        this.dec = this.dec.bind(this);
        this.reset = this.reset.bind(this);
    }

    render() {
        return (
            <div className="Counter">
                <CounterBtn by="1" incrementMe={this.inc} decrementMe={this.dec} />
                <CounterBtn by="5" incrementMe={this.inc} decrementMe={this.dec} />
                <CounterBtn by="10" incrementMe={this.inc} decrementMe={this.dec} />
                <span className="count">{this.state.counter}</span>
                <div className="reset"><button onClick={this.reset}>Reset</button></div>
            </div>
        );
    }

    inc(by) {
        // console.log(`increment from parent${by}`)
        this.setState(
            (prevState) => {
                return { counter: prevState.counter + by }
            }
        );
    }

    dec(by) {
        // console.log(`increment from parent${by}`)
        this.setState(
            (prevState) => {
                return { counter: prevState.counter - by }
            }
        );
    }
    reset() {
        this.setState({
            counter: 0
        })
    }
}

export default Counter