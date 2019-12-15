import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Friend from "./Friend";


function FriendsList() {
    const [friends, setFriends] = useState([]);

    const getData = () => {
        axiosWithAuth()
            .get("friends")
            .then(res => {
                console.log("FriendsList.js: axios.get: res ", res);
                setFriends(res.data);
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        axiosWithAuth()
            .get("/friends")
            .then(res => {
                console.log("FriendsList.js: axios.get: res ", res);
                setFriends(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h2>FriendsList</h2>
            {friends.map(friend => (
                <Friend friend={friend} />
            ))}
        </div>
    );
}

export default FriendsList;