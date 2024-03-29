import React, { useEffect, useReducer } from 'react';
import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';
import './styles.css';
import { todoReducer } from './todoReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
};

const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
        console.log(todos);
    }, [todos]);

    const handleDelete = (todoId) => {
        const action = {
            type: 'DELETE',
            payload: todoId,
        };

        dispatch(action);
    };

    const handleToggle = (todoId) => {
        dispatch({
            type: 'TOGGLE',
            payload: todoId,
        });
    };

    const handleAddTodo = (newTodo) => {
        dispatch({
            type: 'ADD',
            payload: newTodo,
        });
    };

    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle} />
                </div>
                <div className="col-5">
                    <TodoAdd handleAddTodo={handleAddTodo} />
                </div>
            </div>
        </div>
    );
};

export default TodoApp;
