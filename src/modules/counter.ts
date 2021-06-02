// ACTION
const INCREASE = 'counter/INCREASE' as const; // const assertion
const DECREASE = 'counter/DECREASE' as const;
const DOUBLE = 'counter/DOUBLE' as const;
const RESET = 'counter/RESET' as const;

// ACTION CREATOR
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const double = () => ({ type: DOUBLE });
export const reset = () => ({ type: RESET });

// ACTION TYPE
type CounterAction =
    | ReturnType<typeof increase>
    | ReturnType<typeof decrease>
    | ReturnType<typeof double>
    | ReturnType<typeof reset>

// STATE TYPE
interface CounterState {
    count: number;
};

// INITIAL STATE
const initialState: CounterState = {
    count: 0,
};

// REDUCER
const counter = (
    state: CounterState = initialState,
    action: CounterAction,
): CounterState => {
    switch (action.type) {
        case INCREASE :
            return { count: state.count + 1 };
        case DECREASE :
            return { count: state.count - 1 };
        case DOUBLE :
            return { count: state.count * 2};
        case RESET :
            return { count: 0 };
        default :
            return state;
    };
};

export default counter;

