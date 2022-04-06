import React from 'react';
import Post from '../Post/Post';
import './DisplayPosts.css';
function DisplayPosts({ payload, handleUpdateLikeAndDislike }) {
  if (payload.length === 0) {
    return <div className='display-results'>No post to display</div>;
  } else {
    return (
      <div className='display-results'>
        {payload.map((post) => (
          <Post
            handleUpdateLikeAndDislike={handleUpdateLikeAndDislike}
            post={post}
            key={payload.indexOf(post)}
          />
        ))}
      </div>
    );
  }
}

export default DisplayPosts;
