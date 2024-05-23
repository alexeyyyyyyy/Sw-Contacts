import React from 'react';
import { friends } from "../utils/constants.js";
import Friend from "./Friend.jsx";

const DreamTeam = () => {
    return (
        <section className="float-end w-50 row border mx-1">
            <h2 className="col-12 text-center">Dream Team</h2>
            {friends.map((friend, index) => <Friend key={index} friendPhoto={friend} pos={index + 1} />)}
        </section>
    );
}

export default DreamTeam;
