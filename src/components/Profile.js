import React from "react";
import { useSelector } from 'react-redux'



function Profile() {

    const user = useSelector((state) => state.user.value);
    const themColor = useSelector((state) => state.theme.value);

    return (
        <div style={{ color: themColor }}>
            <h1>Profile Page</h1>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>E-Mail: {user.email}</p>
        </div>
    )
}

export default Profile