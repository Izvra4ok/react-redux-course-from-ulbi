import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActionsDispatch} from "../hooks/useActions";
import {fetchTodoThunk} from "../Redux/todoReducer";

const TodoList: React.FC = () => {

    const {todos, loading, limit, page, error} = useTypedSelector(state => state.todo);
    const {fetchTodoThunk} = useActionsDispatch();

    useEffect(() => {
        fetchTodoThunk(1, 10)
    }, [])

    if (loading) {
        return <h2>Loading</h2>
    }
    if (error) {
        return <h2>Error:{error}</h2>
    }

    return (
        <div>
            <h2 style={{textAlign: "center"}}>Todo list:</h2>
            {todos.map(todo =>
                <div style={{border: "1px solid black", padding: "10px", margin: "5px"}} key={todo.id}>
                    {todo.id}:{todo.title}
                </div>)}
        </div>
    );
};

export default TodoList;