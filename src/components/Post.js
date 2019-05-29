import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <User 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Chris_Hemsworth_by_Gage_Skidmore.jpg/220px-Chris_Hemsworth_by_Gage_Skidmore.jpg"
                    alt="actor"
                    name="Thor_Odinson"
                    min/>
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">
                    some account
                </div>
                <div className="post__descr">
                    lorem samnfijmncefomfckwomk cdwocmfko cfjwkkcwo cfmwio
                </div>
            </div>
        )
    }
}