import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to={"/todo"}>todo</NavLink>
                </li>
                <li>
                    <NavLink to={"/user"}>user</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;