import {userAction, UserActionConstType, userReducerType} from "../types/userTypes";
import {Dispatch} from "redux";
import axios from "axios";

const initialState: userReducerType = {
    users: [],
    loading: false,
    error: null,
};

export const userReducer = (state = initialState, action: userAction): userReducerType => {
    switch (action.type) {
        case UserActionConstType.FETCH_USER:
            return {
                ...state,
                loading: true,
            }
        case UserActionConstType.FETCH_USER_SUCCESS:
            return {
                ...state,
                users: action.payload,
                loading: false,
                error: null,
            }
        case UserActionConstType.FETCH_USER_ERROR:
            return {
                ...state,
                users: [],
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}

export const userFetchThunk = () => {
    return async (dispatch: Dispatch<userAction>) => {
        try {
            dispatch({type: UserActionConstType.FETCH_USER})
            const response = await axios.get("https://jsonplaceholder.typicode.com/users")
            dispatch({type: UserActionConstType.FETCH_USER_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({type: UserActionConstType.FETCH_USER_ERROR, payload: "Error"})
        }
    }
}