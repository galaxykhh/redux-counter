import React from 'react';
import styled from 'styled-components';
import { Todo } from '../../modules/todos';
import TodoItem from './TodoItem';

interface ITodoList {
    todos: Todo[];
    onToggle: (id: number) => void;
    onRemove: (id: number) => void;
};

const TodoList = (props: ITodoList) => {
    return (
        <Layout>
            {props.todos.map(todo => (
                <TodoItem
                    todo={todo}
                    onToggle={props.onToggle}
                    onRemove={props.onRemove}
                    key={todo.id}
                />
            ))}
        </Layout>
    );
};

export default TodoList;

const Layout = styled.div`
    width: 340px;
`;