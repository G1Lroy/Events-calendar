import { AnyAction, Dispatch, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers/";

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppDispatch = Dispatch<AnyAction>;
export type RoorState = ReturnType<typeof store.getState>;
