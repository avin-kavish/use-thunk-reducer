import { useReducer } from "react";
export default function useThunkReducer(action, initialState) {
    const [state, dispatchR] = useReducer(action, initialState);
    const dispatch = (action) => {
        if (typeof action === 'function') {
            action(dispatchR);
        }
        else {
            dispatchR(action);
        }
    };
    return [state, dispatch];
}
