import React from 'react';
import User from './User';

export default function Users() {
    return (
        <div className="right">
            <User 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Chris_Hemsworth_by_Gage_Skidmore.jpg/220px-Chris_Hemsworth_by_Gage_Skidmore.jpg"
                alt="actor"
                name="Thor_Odinson"/>
            <div className="users__block">
            <User 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Chris_Hemsworth_by_Gage_Skidmore.jpg/220px-Chris_Hemsworth_by_Gage_Skidmore.jpg"
                alt="actor"
                name="Thor_Odinson"
                min/>
            <User 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Chris_Hemsworth_by_Gage_Skidmore.jpg/220px-Chris_Hemsworth_by_Gage_Skidmore.jpg"
                alt="actor"
                name="Thor_Odinson"
                min/>
            <User 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Chris_Hemsworth_by_Gage_Skidmore.jpg/220px-Chris_Hemsworth_by_Gage_Skidmore.jpg"
                alt="actor"
                name="Thor_Odinson"
                min/>
            <User 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Chris_Hemsworth_by_Gage_Skidmore.jpg/220px-Chris_Hemsworth_by_Gage_Skidmore.jpg"
                alt="actor"
                name="Thor_Odinson"
                min/>
            </div>
        </div>
    )
}