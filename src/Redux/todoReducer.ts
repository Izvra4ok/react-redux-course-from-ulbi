import {TodoActionConstType, TodoActionsType, TodoReducerType} from "../types/todoTypes";
import {Dispatch} from "redux";
import axios from "axios";

const initialstate: TodoReducerType = {
    todos: [],
    loading: false,
    error: null,
    page: 1,
    limit: 20,
}

export const todoReducer = (state: TodoReducerType = initialstate, action: TodoActionsType): TodoReducerType => {
    switch (action.type) {
        case TodoActionConstType.FETCH_TODO:
            return {
                ...state,
                loading: true,
            }
        case TodoActionConstType.FETCH_TODO_SUCCESS:
            return {
                ...state,
                todos: action.payload,
                loading: false,
            }
        case TodoActionConstType.FETCH_TODO_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case TodoActionConstType.SET_TODO_PAGE:
            return {
                ...state,
                page: action.payload,
            }
        default:
            return state
    }
}

export const fetchTodoThunk = (page = 1, limit = 20) => {
    return async (dispatch: Dispatch<TodoActionsType>) => {
        try {
            dispatch({type: TodoActionConstType.FETCH_TODO})
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos", {
                params: {page: page, _limit: limit}
            })
            dispatch({type: TodoActionConstType.FETCH_TODO_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({type: TodoActionConstType.FETCH_TODO_ERROR, payload: "Error todos"})
        }
    }
}

export const setTodoPage = (page: number): TodoActionsType => {
    return {type: TodoActionConstType.SET_TODO_PAGE, payload: page}
}