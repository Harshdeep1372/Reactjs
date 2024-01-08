import React, { useRef, useState } from 'react';

const UseRefEffectHooksInFunctionalCompo = () => {
    const [data, anything] = useState(null)
    const focusPoint = useRef(null)
    const onClickHandler = (event) => {

        // console.log(focusPoint);
        console.log(event);
        console.log(event.target);
        // console.log(focusPoint.current);
        // console.log(focusPoint.current.value);
        focusPoint.current.value = "The quick brown fox jumps over the lazy dog";
        focusPoint.current.focus();
    }
    return (
        <>
            <div className="container">
                <div className='alert alert-info'>
                    <h2>What is useRef</h2>
                    <p>useRef is a React Hook that lets you reference a value that’s not needed for rendering. <br />

                        const ref = useRef(initialValue) <br />
                        <h4>1. Reference <br /></h4>
                        useRef(initialValue) <br />
                        <h4>2. Usage <br /></h4>
                        a.Referencing a value with a ref <br />
                        b. Manipulating the DOM with a ref <br />
                        c. Avoiding recreating the ref contents <br />
                        <h4>Troubleshooting <br /></h4>
                        I can’t get a ref to a custom component</p>
                </div>
                <div>
                    <button onClick={onClickHandler}>
                        ACTION
                    </button>
                </div>
                <label>
                    Click on the action button to
                    focus and populate the text.
                </label><br />
                <textarea ref={focusPoint} />
                <textarea onChange={(event) => {
                    console.log(event);
                    console.log(event.target);
                    console.log(event.target.value);
                    // anything("test")
                    anything(event.target.value)
                }} />
                {data}
            </div>
        </>
    );
};

export default UseRefEffectHooksInFunctionalCompo;