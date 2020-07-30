import { Dispatch, Reducer } from "react";
export declare type Thunk<T> = (dispatch: Dispatch<T>) => any;
export declare type Dispatchable<T> = Thunk<T> | T;
export default function useThunkReducer<TState, TAction>(action: Reducer<TState, TAction>, initialState: TState): [TState, (action: Dispatchable<TAction>) => void];
