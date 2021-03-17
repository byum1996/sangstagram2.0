import React from 'react';
import Photo from './photo';
import PostHeader from './postHeader';
import DateCreatedAndLikes from './dateCreatedAndLikes';
import Caption from './caption';

const Post = ({ post }) => {
    const {
        caption,
        createdAt,
        createdBy,
        userAvatar,
        photoUrl,
        numberOfLikes = [],
    } = post

    return(
        <>
            <PostHeader 
                avatarUrl={userAvatar} 
                username={createdBy} 
            />
            <Photo photoUrl={photoUrl}/>
            <DateCreatedAndLikes dateCreated={createdAt} numberOfLikes={numberOfLikes}/>
            <Caption caption={caption}/>
        </>
    )
}

export default Post;