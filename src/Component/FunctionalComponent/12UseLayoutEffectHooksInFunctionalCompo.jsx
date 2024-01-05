import React, { useEffect, useLayoutEffect, useState } from 'react';

const UseEffectHooksInFunctionalCompo = () => {

    const [counter, setCnt] = useState(0)
    const [secondState, anything] = useState(0)
    const [refreshStatus, setRefreshStatus] = useState(true)
    useEffect(() => {
        console.log("called useEffect");
        getData()
    })
    const getData = async () => {

        await  fetch('https://fakestoreapi.com/products').then((res) => res.json()).then((result) => {
            console.log(result)
        })
    }
    useLayoutEffect(() => {
        console.log("called useLayoutEffect");
        fetch('https://fakestoreapi.com/products').then((res) => res.json()).then((result) => {
            console.log(result);

        })
        return () => {
            console.log("called return");
        }
    })
    return (
        <>
        <div className="container">
            <h2>What is useLayoutEffect Hook ?</h2>
            <p>The useEffect() Hook is a built-in Hook in React that allows functional
            components to perform side effects. It replaces the lifecycle methods like
            componentDidMount(), componentDidUpdate(), and
            componentWillUnmount(). The useEffect() Hook runs after every render by
            default.</p>
            useLayoutEffect Hooks In Functional Compo
            <button onClick={() => { setCnt(counter + 1) }}>Increment {counter}</button>
            {/* <button onClick={() => { anything(secondState + 1) }}>Increment Other State Data {secondState}</button> */}
            <button onClick={() => { setRefreshStatus(!refreshStatus) }}>Refresh {JSON.stringify(refreshStatus)}</button>
        </div>
        </>
    );
};

export default UseEffectHooksInFunctionalCompo;