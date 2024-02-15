import React, { Component } from "react";

export default class NormalComponent extends Component {
    constructor (props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    incrementCounter = () => {
        this.setState({
            count: 0
        })
    }
    render() {
        console.log("Re-render from Normal component ")
        return (
            <div>
                <h1>This is normal component</h1> 
                { this.state.count} <br/>
                <button onClick={this.incrementCounter}> increment </button>
            </div>
        )
    }

}