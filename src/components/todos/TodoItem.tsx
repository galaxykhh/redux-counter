import React, { CSSProperties } from "react";
import { Todo } from '../../modules/todos';

interface ITodoItem {
    todo: Todo;
    onToggle: (id: number) => void;
    onRemove: (id: number) => void;
};

const TodoItem: React.FC<ITodoItem>= (props) => {
    const textStyle: CSSProperties = {
        textDecoration: props.todo.done ? 'line-through' : 'none'
    };

    const removeStyle: CSSProperties = {
        marginLeft: '8px',
        color: 'red',
    };

    const handleToggle = () => {
        props.onToggle(props.todo.id);
    };

    const handleRemove = () => {
        props.onRemove(props.todo.id);
    };

    return (
        <li>
            <span onClick={handleToggle} style={textStyle} > 
                {props.todo.text}
            </span>
            <span onClick={handleRemove} style={removeStyle} >
                (X)
            </span>
        </li>
    );
};

export default TodoItem;

