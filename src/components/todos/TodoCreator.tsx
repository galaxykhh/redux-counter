import React, { FormEvent, useState } from 'react';

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
            <input
                placeholder='todo..'
                value={value}
                onChange={onChange}
            />
            <button type='submit'>enter</button>
        </form>
    );
};

export default TodoCreator;