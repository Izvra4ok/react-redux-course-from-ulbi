import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunk from "redux-thunk";
import {userReducer} from "./userReducer";
import {todoReducer} from "./todoReducer";


const rootReducers = combineReducers({
    user: userReducer,
    todo: todoReducer,

})

export const reduxStore = legacy_createStore(rootReducers, applyMiddleware(thunk))

export type rootReducerType = ReturnType<typeof rootReducers>;
export type AppDispatch = typeof reduxStore.dispatch;