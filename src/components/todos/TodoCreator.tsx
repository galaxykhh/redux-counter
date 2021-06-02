import React, { FormEvent, useState } from 'react';
import styled from 'styled-components';

interface ITodoCreator {
    onCreate: (text: string) => void;
};

const TodoCreator: React.FC<ITodoCreator>= (props) => {
    const [value, setValue] = useState<string>('');

    const onChange = (e: { target: { value: string } }): void => {
        setValue(e.target.value);
    };

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        props.onCreate(value);
        setValue('');
    };

    return (
        <form onSubmit={onSubmit}>
            <Input
                placeholder='todo..'
                value={value}
                onChange={onChange}
            />
        </form>
    );
};

export default TodoCreator;

const Input = styled.input`
    all: unset;
    width: 300px;
    height: 40px;
    padding-left: 15px;
    margin-bottom: 20px;
    background-color: #30A9DE;
    border-radius: 5px;
`;