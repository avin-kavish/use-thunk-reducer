import { Dispatch, Reducer, useReducer } from "react"

export type Thunk<T> = (dispatch: Dispatch<T>) => any

export type Dispatchable<T> = Thunk<T> | T

export default function useThunkReducer<TState, TAction>(
    action: Reducer<TState, TAction>,
    initialState: TState
): [ TState, (action: Dispatchable<TAction>) => void ] {
    const [ state, dispatchR ] = useReducer(action, initialState)

    const dispatch = (action: Dispatchable<TAction>) => {
        if (typeof action === 'function') {
            (action as Thunk<TAction>)(dispatchR)
        } else {
            dispatchR(action)
        }
    }

    return [ state, dispatch ]
}