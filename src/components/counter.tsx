interface ICounter {
    count: number;
    onIncrease: () => void;
    onDecrease: () => void;
    onDouble: () => void;
};

const Counter = ({
    count,
    onIncrease,
    onDecrease,
    onDouble,
}: ICounter) => {
    return (
        <>
            <h1>{count}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
            <button onClick={onDouble}>x2</button>
        </>
    );
};

export default Counter;