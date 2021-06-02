import React from 'react';
import { Todo } from '../../modules/todos';
import TodoItem from './TodoItem';

interface ITodoList {
    todos: Todo[];
    onToggle: (id: number) => void;
    onRemove: (id: number) => void;
};

const TodoList = (props: ITodoList) => {
    if (props.todos.length === 0) return <span>등록된 할일이 없어요</span>
    return (
        <ul>
            {props.todos.map(todo => (
                <TodoItem
                    todo={todo}
                    onToggle={props.onToggle}
                    onRemove={props.onRemove}
                    key={todo.id}
                />
            ))}
        </ul>
    );
};

export default TodoList;