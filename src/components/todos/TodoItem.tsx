import React, { CSSProperties } from "react";
import styled from "styled-components";
import { Todo } from '../../modules/todos';

interface ITodoItem {
    todo: Todo;
    onToggle: (id: number) => void;
    onRemove: (id: number) => void;
};

const TodoItem: React.FC<ITodoItem>= (props) => {

    const handleToggle = () => {
        props.onToggle(props.todo.id);
    };

    const handleRemove = () => {
        props.onRemove(props.todo.id);
    };

    return (
        <>
            <Text
                onClick={handleToggle}
                isDone={props.todo.done}
            > 
                {props.todo.text}
                <DeleteButton onClick={handleRemove}>
                X
                </DeleteButton>
            </Text>
        </>
    );
};

export default TodoItem;

const Text = styled.div<{ isDone: boolean }>`
    position: relative;
    width: 325px;
    height: 30px;
    padding-left: 15px;
    text-decoration: ${({ isDone }) => isDone ? 'line-through' : 'none'};
    cursor: pointer;
`;

const DeleteButton = styled.button`
    all: unset;
    position: absolute;
    right: 0px;
    color: red;
`;
