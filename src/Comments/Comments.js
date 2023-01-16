import React, { useEffect, useState } from 'react';
import Comment from '../Comment/Comment';
import './Comments.css'

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(res => res.json())
            .then(data => setComments(data));
    }, [])

    return (
        <div className="main-body">
            <h2 className="headline-style">Here have {comments.length} account's below who commented positive on your profile.</h2>

            {
                comments.map(comment => <Comment 
                    key ={comment.id}
                    comment={comment}>
                    </Comment>)
            }
        </div>
    );
};

export default Comments;