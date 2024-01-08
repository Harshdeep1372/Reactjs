import React, { useMemo, useState } from "react";

const FunctionalCompoUseMemo = () => {
    const [number, setNumber] = useState(1);
    const [inc, setInc] = useState(0);
    const factorial = useMemo(() => factorialOf(number), [number]);
    // const factorial =  factorialOf(number);
    console.log("factorial", factorial);
    const onChange = event => {
        setNumber(Number(event.target.value));
    };
    const onClick = () => setInc(i => i + 1);
    return (
        <div>
            <h2>What is useMemo</h2>
            <p class="alert alert-info">The React useMemo Hook returns a memoized <br />

                Think of memoization as caching a value so that it does not need to be recalculated. <br />

                The useMemo Hook only runs when one of its dependencies update. <br />

                This can improve performance. <br />

                The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function. <br />
                The useMemoHook accepts a second parameter to declare dependencies. The expensive function will only run when its dependencies have changed.</p>
            <img src="/usememo.png" alt="" />
            <br />
            Factorial of
            <input type="number" value={number} onChange={onChange} />
            is {factorial}
            <button onClick={onClick}>Re-render</button>
            <a href="https://dmitripavlutin.com/react-usememo-hook/">Reference</a>
        </div>
    );
}

function factorialOf(n) {
    console.log('factorialOf(n) called!');
    return n <= 0 ? 1 : n * factorialOf(n - 1);
}
export default FunctionalCompoUseMemo;