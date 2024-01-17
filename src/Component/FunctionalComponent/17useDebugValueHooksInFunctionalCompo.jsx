import { useDebugValue, useState } from "react";

function useCount() {
    debugger
    const [count, setCount] = useState(0);

    setInterval(() => {
        setCount(count + 1);
    }, 2000);

    useDebugValue(count);
    return count;
}

function App() {
    const count = useCount();

    return (
        <div className="App">
            <button>{count}</button>
        </div>
    );
}

export default App;