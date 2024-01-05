import React, { Component } from 'react';
// import { ReactComponent } from 'react';

class ComponentInReact extends Component {
    render() {
        return (
            <div >
                <p>ComponentInReact--A class component must include the extends React.Component statement. This statement creates
                    an inheritance to React.Component, and gives your component access to React.Component's functions.</p>
                <h2 >
                    1. What is difference between class component and functional component?
                </h2>
                <p class="bg-info">React class components are more complex, written with JavaScript ES6 classes,
                    and support state and lifecycle methods. Function components are simpler, written as JavaScript functions, and are
                    faster as they lack state and lifecycle, making them suitable for smaller, presentational components.</p>
                <h2>
                    2. What is React?
                </h2>
                <p class="bg-info">
                    React is a front-end and open-source JavaScript library which is useful in developing user interfaces specifically for applications with a single page. It is helpful in building complex and reusable user interface(UI) components of mobile and web applications as it follows the component-based approach.

                    The important features of React are:

                    It supports server-side rendering.
                    It will make use of the virtual DOM rather than real DOM (Data Object Model) as RealDOM manipulations are expensive.
                    It follows unidirectional data binding or data flow.
                    It uses reusable or composable UI components for developing the view.
                </p>
            </div>
        );
    }
}


export default ComponentInReact;