// ACTION
const ADD_TODO = 'todos/ADD_TODO' as const;
const REMOVE_TODO = 'todos/REMOVE_TODO' as const;
const TOGGLE_TODO = 'todos/TOGGLE_TODO' as const;

let id = 0;

const getId = (): number => {
    return id++;
};

// ACTION CREATOR
export const addTodo = (text: string) => ({
    type: ADD_TODO,
    payload: {
        id: getId(),
        text,
    },
});

export const removeTodo = (id: number) => ({
    type: REMOVE_TODO,
    payload: id,
});

export const toggleTodo = (id: number) => ({
    type: TOGGLE_TODO,
    payload: id,
});

// ACTION TYPE
type TodosAction =
    | ReturnType<typeof addTodo>
    | ReturnType<typeof removeTodo>
    | ReturnType<typeof toggleTodo>

// STATE TYPE
export interface Todo {
    id: number;
    text: string;
    done: boolean;
};

// INITIAL STATE
const initialState: Todo[] = [];

// REDUCER
const todos = (
    state: Todo[] = initialState,
    action: TodosAction,
): Todo[] => {
    switch (action.type) {
        case ADD_TODO :
            return state.concat({
                id: action.payload.id,
                text: action.payload.text,
                done: false,
            });
        case TOGGLE_TODO :
            return state.map(todo =>
                todo.id === action.payload ? {...todo, done: !todo.done} : todo
            );
        case REMOVE_TODO :
            return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)];
        default :
            return state;
    };
};

export default todos;