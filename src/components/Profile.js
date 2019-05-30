import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () => {
    return (
        <div className="container profile">
            <User 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Chris_Hemsworth_by_Gage_Skidmore.jpg/220px-Chris_Hemsworth_by_Gage_Skidmore.jpg"
                alt="Man"
                name="some_cool_man"/>

            <Palette />
        </div>
    )
}

export default Profile;