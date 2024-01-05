// import React from 'react';
// class ClassComponentInReact extends React.Component {

import React, { Component } from 'react';
class ClassComponentInReact extends Component {
    otherfunction() {
        return <>function</>
    }
    otherfunction1() {
        return <>function 1</>
    }
    otherfunction2() {
        return <>function 2</>
    }
    render() {
        return (
            <div>
                <p>In ReactJs we can create Component using class that will considered as class compo</p>
                <p>The component also requires a render() method, this method returns HTML.</p>
                {this.otherfunction()}
                <br />
                {this.otherfunction1()}
                <br />
                {this.otherfunction2()}
                <br />
                <br />
                <br />
                <h2>
                    What is JSX?
                </h2>
                <p>JSX stands for JavaScript XML. It allows us to write HTML inside JavaScript and place them in the
                    DOM without using functions like appendChild( ) or createElement( ).<br />
                    Without using JSX, we would have to create an element by the following process:<br />
                    <br />
                    <p class="bg-info">
                        const text = React.createElement('p', { }, 'This is a text');<br />
                        const container = React.createElement('div','{ }',text );<br />
                        ReactDOM.render(container,rootElement);<br />

                    </p>

                    Using JSX, the above code can be simplified:<br />
                    <p class="bg-info">
                        const container = (<br />
                        &lt;div&gt;<br />
                        &lt;p&gt;This is a text&lt;/p&gt;<br />
                        &lt;/div&gt;<br />
                        );
                        ReactDOM.render(container,rootElement);<br />
                    </p>

                </p>

            </div>
        );
    }
}

export default ClassComponentInReact;