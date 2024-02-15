import React, { PureComponent } from "react";

export default class PureComponents extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    incrementCounter = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        console.log("Pure component re-render")
        return (
            <div>
                <h1>This is pure component</h1>
                {this.state.count} <br />
                <button onClick={this.incrementCounter}> increment </button>
            </div>
        )
    }
}