import React from 'react';
import Comment from './comment'

const renderComment= (comment, removeComment, index) => {
    return (
        <Comment key={index} comment={comment} removeComment={removeComment} />
    )
}

const Comments = ({ comments = [], removeComment }) => {
    return (
        <>
            {comments.map((comment, index) => renderComment(comment, removeComment, index))}
        </>    
    )
}

export default Comments;