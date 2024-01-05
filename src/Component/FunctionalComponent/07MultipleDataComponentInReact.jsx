import React, { useState } from 'react';
const ControlledComponentInReact = () => {
    const [formData, setFormData] = useState({})
    const inpChangeEvent = (event) => { setFormData({ ...formData, [event.target.name]: event.target.value }) }
    return (
        <>
            <div className="container">
                1.<input type="text" onChange={inpChangeEvent} name="fname" id="fname" />  <br />
                2.<input type="text" onChange={inpChangeEvent} name="lname" id="lname" />  <br />
                3.<input type="text" onChange={inpChangeEvent} name="email" id="email" />  <br />
                4.<input type="text" onChange={inpChangeEvent} name="mobile" id="mobile" /><br />
                5.<input type="text" onChange={inpChangeEvent} name="address" id="address" /><br />
                <p>{JSON.stringify(formData)}</p>
            </div>
        </>
    );
};

export default ControlledComponentInReact;