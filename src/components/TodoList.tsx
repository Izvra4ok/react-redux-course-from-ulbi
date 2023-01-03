import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActionsDispatch} from "../hooks/useActions";
import {fetchTodoThunk} from "../Redux/todoReducer";

const TodoList: React.FC = () => {

    const {todos, loading, limit, page, error} = useTypedSelector(state => state.todo);
    const {fetchTodoThunk, setTodoPage} = useActionsDispatch();

    const pages = [1, 2, 3, 4, 5,6,7,8,9,10]

    useEffect(() => {
        fetchTodoThunk(page, limit)
    }, [page])


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

            <div style={{display: "flex"}}>
                {pages.map(p =>
                    <div key={p}
                         onClick={() => setTodoPage(p)}
                         style={{border: p === page ? '2px solid green' : '1px solid gray', padding: 10,margin:"5px"}}
                    >
                        {p}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TodoList;