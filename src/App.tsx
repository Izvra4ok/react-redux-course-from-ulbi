import React from 'react';
import './App.css';
import UserList from "./components/UserList.";
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";

const App = () => {

    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path={"*"} element={<UserList/>}/>
                <Route path={"/todo/*"} element={<TodoList/>}/>
                <Route path={"/user/*"} element={<UserList/>}/>
            </Routes>
        </div>
    );
}

export default App;
