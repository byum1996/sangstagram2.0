import React from 'react';
import Pictures from './pictures';
import User from './user';
import DateCreated from './dateCreated';
import Caption from './caption';

const Post = ({ post }) => {
    const {
        caption,
        createdAt,
        createdBy,
        userAvatar,
        photoUrl
    } = post

    return(
        <>
            <User userAvatar={userAvatar} username={createdBy} />
            <Pictures photoUrl={photoUrl}/>
            <DateCreated dateCreated={createdAt}/>
            <Caption caption={caption}/>
        </>
    )
}

export default Post;