import React from 'react';
import Photo from './photo';
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
            <User avatarUrl={userAvatar} username={createdBy}/>
            <Photo photoUrl={photoUrl}/>
            <DateCreated dateCreated={createdAt}/>
            <Caption caption={caption}/>
        </>
    )
}

export default Post;