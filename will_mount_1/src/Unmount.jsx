import React, { Component } from 'react'

export default class Unmount extends Component {

    componentDidMount() {
        this.intervalId = setInterval(() => {
            console.log("Interval Tick....")
        }, 2000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
        console.log("Interval Tick removed ....")
    }

    render() {
        return (
            <div>
                Unmount
            </div>
        )
    }
}
