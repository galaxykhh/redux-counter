import React from "react";

interface ICounter {
    count: number;
    onIncrease: () => void;
    onDecrease: () => void;
    onDouble: () => void;
};

const Counter: React.FC<ICounter> = (props) => {
    return (
        <>
            <h1>{props.count}</h1>
            <button onClick={props.onIncrease}>+1</button>
            <button onClick={props.onDecrease}>-1</button>
            <button onClick={props.onDouble}>x2</button>
        </>
    );
};

export default Counter;