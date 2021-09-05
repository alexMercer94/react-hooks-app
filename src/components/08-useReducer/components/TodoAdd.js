import React from 'react';
import useForm from '../../../hooks/useForm';

const TodoAdd = ({ handleAddTodo }) => {
    const [{ description }, handleInputChange, reset] = useForm({
        description: '',
    });

    const handleSubtmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false,
        };

        handleAddTodo(newTodo);
        reset();
    };

    return (
        <>
            <h4>Add Todo</h4>
            <hr />
            <form onSubmit={handleSubtmit}>
                <input
                    type="text"
                    name="description"
                    placeholder="Aprender..."
                    autoComplete="off"
                    className="form-control"
                    value={description}
                    onChange={handleInputChange}
                />
                <button type="submit" className="btn btn-outline-primary mt-1 btn-block">
                    Agregar
                </button>
            </form>
        </>
    );
};

export default TodoAdd;
