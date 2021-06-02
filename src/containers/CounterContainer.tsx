import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { increase, decrease, double } from '../modules/counter';
import Counter from '../components/counter/Counter';

const CounterContainer: React.FC = () => {
    const count = useSelector((state: RootState) => state.counter.count);
    const dispatch = useDispatch();

    const onIncrease = () => {
        dispatch(increase());
    };

    const onDecrease = () => {
        dispatch(decrease());
    };

    const onDouble = () => {
        dispatch(double());
    };

    return (
        <Counter
            count={count}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onDouble={onDouble}
        />
    );
};

export default CounterContainer;