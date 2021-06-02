import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { toggleTodo, removeTodo, addTodo } from '../modules/todos';
import TodoCreator from '../components/todos/TodoCreator';
import TodoList from '../components/todos/TodoList';

const TodoContainer: React.FC = () => {
    const todos = useSelector((state: RootState) => state.todos);
    const dispatch = useDispatch();

    const onCreate = (text: string) => {
        dispatch(addTodo(text));
    };

    const onToggle = (id: number) => {
        dispatch(toggleTodo(id));
    };

    const onRemove = (id: number) => {
        dispatch(removeTodo(id));
    };
    
    return (
        <>
            <TodoCreator onCreate={onCreate} />
            <TodoList
                todos={todos}
                onRemove={onRemove}
                onToggle={onToggle}
            />
        </>
    );
};

export default TodoContainer;