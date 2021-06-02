import React from "react";
import styled from "styled-components";

interface ICounter {
    count: number;
    onIncrease: () => void;
    onDecrease: () => void;
    onDouble: () => void;
    onReset: () => void;
};

const Counter: React.FC<ICounter> = (props) => {

    const buttons = [
        {
            id: 1,
            text: '+1',
            onClick: props.onIncrease,
        },
        {
            id: 2,
            text: '-1',
            onClick: props.onDecrease,
        },
        {
            id: 3,
            text: 'x2',
            onClick: props.onDouble,
        },
        {
            id: 4,
            text: 'reset',
            onClick: props.onReset,
        },
    ];
    return (
        <>
            <Count>{props.count}</Count>
            <Row>
                {buttons.map(x => (
                    <Button
                        onClick={x.onClick}
                        key={x.id}
                    >
                        {x.text}
                    </Button>
                ))}
            </Row>
        </>
    );
};

export default Counter;

const Count = styled.h1``;

const Button = styled.button`
    width: 60px;
    height: 40px;
    line-height: 30px;
    border: none;
    border-radius: 5px;
    font-size: 25px;
    cursor: pointer;
    background-color: #EFDC05;
    transition: transform 0.5s ease;
    :hover {
        transform: scale(1.1);
    };
    :last-child {
        width: 90px;
    };
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 300px;
`;