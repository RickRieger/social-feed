import React, { useEffect } from 'react';
import Post from '../Post/Post';
import './DisplayPosts.css';
function DisplayPosts({ payload, handleUpdateLikeAndDislike }) {
  useEffect(() => {}, [payload]);
  if (payload.length === 0) {
    return <div className='display-results'>No post to display</div>;
  } else {
    return (
      <div className='display-results'>
        {payload.map((post, index) => (
          <Post
            handleUpdateLikeAndDislike={handleUpdateLikeAndDislike}
            post={post}
            index={index}
            key={index}
          />
        ))}
      </div>
    );
  }
}

export default DisplayPosts;
