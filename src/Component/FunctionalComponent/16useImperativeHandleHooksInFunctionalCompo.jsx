import React, { useRef } from 'react';
import ButtonCompo from './ButtonCompo';

const useImperativeHandleHooksInFunctionalCompo = () => {

    const buttonRef = useRef(null);
    return (
        <>
            <button onClick={(event) => { buttonRef.current.alertToggle() }}>Click</button>

            <ButtonCompo ref={buttonRef} data="This contains props data" />
            <h2>What is useImperativeHandle</h2>
            <p>useImperativeHandle is a React Hook that lets you customize the handle exposed as a ref.</p>
            <p>In React, data is passed from parent to child components via props, in what is known as unidirectional data flow. The parent component cannot directly call a function defined in the child component or reach down to grab a value for itself.</p>
            <p> In certain circumstances, we want our parent component to reach down to the child component, getting data that originates in the child component for its own use. We can achieve this type of data flow with the useImperativeHandle Hook, which allows us to expose a value, state, or function inside a child component to the parent component through ref. You can also decide which properties the parent component can access, thereby maintaining the private scoping of the child component.</p>
            <p>The useImperativeHandle hook is a feature introduced in React 16.3 as a means to communicate from a child component to a parent component in a more explicit way. This hook allows a child component to expose certain functions or properties to its parent component, giving the parent component more control over the child component.</p>

            <p>In simpler terms, the useImperativeHandle hook is used to create a custom interface between a child and its parent component. It is commonly used in situations where a parent component needs to interact with a child component directly, such as for form validation or handling of user input.</p>
            <p className='alert alert-info'>syntex---[useImperativeHandle(ref, createHandle, [dependencies])]</p>
            <ul>
                <li><code className=" hello" ><span className="cng">ref argument </span></code>: The ref passed down from the parent component</li>
                <li><code className=" hello" ><span className="yll">createHandle argument</span></code>: The value to be exposed to the parent component</li>
                <li><code className=" hello" ><span className="yll">dependencies</span></code>: An array of values that cause the Hook to rerun when changed</li>
            </ul>
        </>
    );
};

export default useImperativeHandleHooksInFunctionalCompo;