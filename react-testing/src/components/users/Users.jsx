import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const Users = () => {
    const [users, setUsers] = useState([])

    const loadUsers = async () => {
     const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(response.data)
    }

    useEffect(() => {
        loadUsers()
    }, [])
    return (
        <div data-testid={'users-page'}>
            {users.map(item => <Link to={`/users/${item.id}`} key={item.id} data-testid={'user-item'}>{item.name}</Link>)}
        </div>
    );
};

export default Users;