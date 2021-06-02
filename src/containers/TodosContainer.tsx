import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { toggleTodo, removeTodo, addTodo } from '../modules/todos';
import TodoCreator from '../components/todos/TodoCreator';
import TodoList from '../components/todos/TodoList';
import styled from 'styled-components';

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
        <Layout>
            <Title> Simple Todos </Title>
            <TodoCreator onCreate={onCreate} />
            <TodoList
                todos={todos}
                onRemove={onRemove}
                onToggle={onToggle}
            />
        </Layout>
    );
};

export default TodoContainer;

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const Title = styled.h1`
    margin-top: 50px;
    margin-bottom: 50px;
`;