import React, { Component } from 'react';

class StateClassComponentInReact extends Component {
    constructor() {
        super();
        this.state = { stateData: "State Value", counter: 0, status: false }
        // this.btnClickMethodInClass = this.btnClickMethodInClass.bind(this)
    }


    render() {
        let data = "Data inside render value"
        let btnClickHandle = () => {
            console.log("somthing");
            // return
        }
        return (
            <>
                <h3>btn click</h3>
                <button onClick={btnClickHandle()}>Click me</button>
                <button onClick={btnClickHandle}>Click me</button> <br />
                <button onClick={this.btnClickMethodInClass}>Click me method as class properties</button><br />
                <button onClick={this.btnClickMethodInClassArrow}>Click me class arrow function</button><br />

                <p>Variable inside render : {data}</p>
                <p>Datamember from Class : {this.dataMember}</p>
                <p>State from Class : {this.state.stateData}</p>
                <button onClick={() => { this.setState({ counter: this.state.counter - 1 }) }}>decrement</button> {this.state.counter}
                <button onClick={() => { this.setState({ counter: this.state.counter + 1 }) }}>increment</button>
                <br />

                <button onClick={() => { this.setState({ status: !this.state.status }) }}>Change Status {JSON.stringify(this.state.status)}</button>
                <h2>
                    1. What is setState?
                </h2>
                <p class="bg-info">
                    State can be updated in response to event handlers, server responses, or prop changes.
                    This is done using the setState() method. The setState() method enqueues all of the updates made to the component state and instructs React to re-render the component and its children with the updated state.

                    Always use the setState() method to change the state object, since it will ensure that the component knows it’s been updated and calls the render() method.\

                </p>
                <h2>2. Differnce B/w States and Prop?</h2>
                <table class="table table-bordered">
                    <tbody>
                        <tr>
                            <td></td>
                            <th ><strong>State</strong></th>
                            <th ><strong>Props</strong></th>
                        </tr>
                        <tr>
                            <td><strong>Use Case</strong></td>
                            <td>State is used to store the data of the components that have to be rendered to the view</td>
                            <td>Props are used to pass data and event handlers to the children components</td>
                        </tr>
                        <tr>
                            <td><strong>⇙Mutability</strong></td>
                            <td>State holds the data and can change over time</td>
                            <td>Props are immutable—once set, props cannot be changed</td>
                        </tr>
                        <tr>
                            <td><strong>Component</strong></td>
                            <td>State can only be used in class components</td>
                            <td>Props can be used in both functional and class components</td>
                        </tr>
                        <tr>
                            <td><strong>Updation</strong></td>
                            <td>Event handlers generally update state</td>
                            <td>The parent component sets props for the children components</td>
                        </tr>
                    </tbody>
                </table>
                <br />
            </>
        );
    }
}

export default StateClassComponentInReact;