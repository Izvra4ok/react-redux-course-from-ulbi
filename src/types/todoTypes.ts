export enum TodoActionConstType {
    FETCH_TODO = "FETCH_USER",
    FETCH_TODO_SUCCESS = "FETCH_USER_SUCCESS",
    FETCH_TODO_ERROR = "FETCH_USER_ERROR",
    SET_TODO_PAGE = "SET_TODO_PAGE",
}

export interface TodoReducerType {
    todos: any[],
    loading: boolean,
    error: null | string,
    page: number,
    limit: number,
}

export interface FetchTodo {
    type: TodoActionConstType.FETCH_TODO
}

export interface FetchTodoSuccess {
    type: TodoActionConstType.FETCH_TODO_SUCCESS
    payload: any[],
}

export interface FetchTodoError {
    type: TodoActionConstType.FETCH_TODO_ERROR,
    payload: string,
}

export interface SetTodoPage {
    type: TodoActionConstType.SET_TODO_PAGE,
    payload: number,
}

export type TodoActionsType = FetchTodo | FetchTodoSuccess | FetchTodoError | SetTodoPage;