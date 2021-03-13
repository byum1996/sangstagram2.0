import React from 'react';
import Comment from './comment'

const renderComment= (comment) => {
    return (
        <Comment comment={comment} />
    )
}

const Comments = ({ comments = [] }) => {
    return (
        <>
            {comments.map(comment => renderComment(comment))}
        </>    
    )
}

export default Comments;