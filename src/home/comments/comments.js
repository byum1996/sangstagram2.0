import React from 'react';
import Comment from './comment'

const renderComment= (comment, index) => {
    return (
        <Comment key={index} comment={comment} />
    )
}

const Comments = ({ comments = [] }) => {
    return (
        <>
            {comments.map((comment, index) => renderComment(comment, index))}
        </>    
    )
}

export default Comments;