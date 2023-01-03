import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {userFetchThunk} from "../Redux/userReducer";
import {useActionsDispatch} from "../hooks/useActions";

interface UserListType {

}

const UserList: React.FC<UserListType> = () => {

    const {users, loading, error} = useTypedSelector(state => state.user);

    // const dispatch: Dispatch<any> = useDispatch()
    const {userFetchThunk} = useActionsDispatch();

    useEffect(() => {
        userFetchThunk()
    }, [])

    if (loading) {
        return <h2>Loading</h2>
    }
    if (error) {
        return <h2>Error:{error}</h2>
    }

    return (
        <div>
            <h2 style={{textAlign: "center"}}>Users list:</h2>
            {users.map(user =>
                <div style={{border: "1px solid black", padding: "10px"}} key={user.id}>
                    <b>{user.username}:</b>
                    {user.name}
                    <div><b>Email: </b>{user.email}</div>
                    {user.address ? <span>
                            <address>
                                <b>Address: </b>{user.address.city}, {user.address.street}, {user.address.suite},
                                z/p:{user.address.zipcode}
                            </address>
                            <div><b>Company: </b>{user.company.name}, {user.company.bs}, {user.company.catchPhrase}</div>
                        </span>
                        : <h2>wait</h2>}
                    <div><b>Phone: </b>{user.phone}</div>
                    <div><b>Website: </b>{user.website}</div>
                </div>
            )}

        </div>
    );
};

export default UserList;