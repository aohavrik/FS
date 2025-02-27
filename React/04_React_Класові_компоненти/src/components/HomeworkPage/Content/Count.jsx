import React from "react";
import { Component } from "react";




export class Count extends Component {
    
state={
    count: 0
}


    add = () => {
        this.setState(({ count }) => ({ count: count+1 }))
    }

    min = () => {
        this.setState(({ count }) => ({ count: count-1 }))
    }


    render() {

        return (
            <div>
                <button onClick={this.add}>+</button>

                <span style={{ color: 'red', fontSize: '24px' }}>
                
                </span>

                <button onClick={this.min}>-</button>
            </div>
        )
    }
} 