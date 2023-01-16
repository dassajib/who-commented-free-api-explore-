import React from 'react';
import "./Comment.css"

const Comment = (props) => {
    const {id, name, email} = props.comment;
    return (
        <div className="comment-view-class">
            <h4>Id no : {id}</h4>
            <h4>name : {name}</h4>
            <h4>email: {email}</h4>
        </div>
    );
};

export default Comment;