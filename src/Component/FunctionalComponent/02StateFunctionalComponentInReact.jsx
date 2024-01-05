import React, { useState } from 'react';


const StateFunctionalComponentInReact = () => {

    let data = "kuchbhi"
    // const [statedata,anything] = useState(); //state declaration
    const [statedata, somthing] = useState("default"); // state with default value
    // const [statedata, statesomething] = useState("default"); // state with default value
    const [state, setState] = useState(true); // state with true and false value
    return (
        <>
            <div className="container">
                <h2 >What is <b>State</b> in Function Component?</h2>
                <p class=" alert alert-info p-3"><b>State is a built-in object in React that holds component-specific data. It
                    represents the mutable values that can change over time and trigger a re-render of the component.</b></p>

                <div className="container">
                    {data}
                    <br />
                    <button onClick={() => { data = "checking" }}>Click simple variable with let keyword</button> <br />
                    <br />
                    <button onClick={() => { somthing("change data") }}>update state</button>
                    {/* <button onClick={() => { statesomething("Somthing data") }}>update state</button> */}
                    <p> State data :  {statedata} </p>
                    <button onClick={() => { setState(!state) }}>True&Flase {JSON.stringify(state)}</button>
                </div>
            </div>

        </>
    );
};
export default StateFunctionalComponentInReact;