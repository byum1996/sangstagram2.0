This application is a social networking site akin to Instagram called Sangstagram.

It has basic functionalities like being able to upload a picture/post with a caption, add comments, search users and follow, etc.

The application is organized into two sections: unauthenticated and authenticated.

When users first sign in (src/unauthenticated.js), they are greeted with a Google authentication screen. When signed in using a Google account, the application takes them to the home screen.

The homepage (src/home) contains the post component (src/home/post.js), comments component (src/home/comments) and a post header component (src/home/postHeader). There is also a working like button (src/home/postHeader/likeButton.js).

The homepage will only display posts of users that you follow, which you can check on the profile page (src/profile).

The profile page is where users can uplaod posts using the button on the bottom of the UI (src/profile/addPost) and check their followers/following users (src/profile/followingFollowers) by clicking on the numbers next to their profile picture. 

Users can also click on the thumbnails of their uploaded posts on the profile page (src/profile/postThumbnail.js) to view their post. 

The search bar (src/search) can be used to search users who have sgined into Sangstagram.
