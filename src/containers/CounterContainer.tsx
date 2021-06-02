import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { increase, decrease, double, reset } from '../modules/counter';
import Counter from '../components/counter/Counter';
import styled from 'styled-components';

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

    const onReset = () => {
        dispatch(reset());
    };

    return (
        <Layout>
            <Title>Simple Counter</Title>
            <Counter
                count={count}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
                onDouble={onDouble}
                onReset={onReset}
            />
        </Layout>
    );
};

export default CounterContainer;

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #30A9DE;
    width: 100%;
    height: 400px;
`;

const Title = styled.h1`

`;