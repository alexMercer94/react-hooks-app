const initialState = [
    {
        id: 1,
        todo: 'Ir de viaje',
        done: false,
    },
];

const todoReducer = (state = initialState, action) => {
    switch (action?.type) {
        case 'ADD':
            return [...state, action.payload];

        default:
            return state;
    }
};

let todo = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Hacer compras',
    done: false,
};

const action = {
    type: 'ADD',
    payload: newTodo,
};

todo = todoReducer(todo, action);

console.log(todo);
