export enum UserActionConstType {
    FETCH_USER = "FETCH_USER",
    FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS",
    FETCH_USER_ERROR = "FETCH_USER_ERROR"
}

export interface userReducerType {
    users: any[],
    loading: boolean,
    error: null | string,
}

export interface FetchUserAction {
    type: UserActionConstType.FETCH_USER,
}

export interface FetchUserSuccessAction {
    type: UserActionConstType.FETCH_USER_SUCCESS,
    payload: any[],
}

export interface FetchUserErrorAction {
    type: UserActionConstType.FETCH_USER_ERROR,
    payload: string,
}

export type userAction = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction;
