import React from 'react';
import Pictures from './pictures';
import PostHeader from './postHeader';
import DateCreated from './dateCreated';
import Caption from './caption';
import Comments from './comments/comments';
import CommentField from './comments/commentfield';

const Post = ({ post, saveComment }) => {
    const {
        caption,
        createdAt,
        createdBy,
        userAvatar,
        photoUrl,
        comments,
    } = post

    return(
        <>
            <PostHeader userAvatar={userAvatar} username={createdBy} />
            <Pictures photoUrl={photoUrl}/>
            <DateCreated dateCreated={createdAt}/>
            <Caption caption={caption}/>
            <Comments comments={comments} userAvatar={userAvatar} createdAt={createdAt} createdBy={createdBy} />
            <CommentField saveComment={(comment) => saveComment(post, comment)} />
        </>
    )
}

export default Post;