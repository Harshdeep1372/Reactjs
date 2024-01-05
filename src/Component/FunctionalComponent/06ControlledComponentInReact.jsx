import React, { useState } from 'react';

const ControlledComponentInReact = () => {
    const [state, anything] = useState("something")
    const [data2, setState] = useState("default")
    let varaible_data = "something"
    // const inpChangeEvent = (kaipan)=>{
    // console.log("called",kaipan);
    const inpChangeEvent = (event) => {
        // console.log("called",event);
        // console.log("called",this);
        // console.log("called",event.target);
        // console.log("called",event.target.value);
        // varaible_data = event.target.value
        anything(event.target.value)
        // return
    }
    return (
        <>

            <div className="container">
                <h2>Q. -What are Uncontrolled Components ?</h2>
                In React, It is always an uncontrolled component because its value can only be set by a user, and not programmatically.
                <br />
                <br />
                <h2>Q.- What are Controlled components ?</h2>
                In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior.

                <h2 className='mt-2'>Q.- What is the difference between controlled and uncontrolled
                    Components in React ?</h2>
                <p>In a controlled component, the value of the form elements is controlled by
                    React. The component's state is used to manage the value, and any
                    changes to the value are handled by updating the state. In an
                    uncontrolled component, the value of the form elements is managed by
                    the DOM itself, and React doesn't control or track the value.</p>
                <br />
                <br />
                {/* <input type="text" onChange={inpChangeEvent()} name="" id="" />   */}
                {/* <input type="text" onChange={inpChangeEvent(this)} name="" id="" />   */}
                <input type="text" onChange={inpChangeEvent} name="" id="" /><br /><br />
                <input type="text" onChange={(event) => setState(event.target.value)} name="" id="" />
                <p>{varaible_data}</p>
                <p>Harsh <br />{state}</p>
                <p>deep <br />{data2}</p>
            </div>
        </>
    );
};

export default ControlledComponentInReact;