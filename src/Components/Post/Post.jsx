import React, { useState, Fragment } from 'react';
import moment from 'moment';

function Post({ post, key, handleUpdateLikeAndDislike }) {
  const [thumbsUp, setThumbsUp] = useState(false);
  const [thumbsDown, setThumbsDown] = useState(false);

  const handleThumbsOnClick = (thumbs) => {
    if (thumbs === 'thumbs-up') {
      setThumbsUp(!thumbsUp);
      if (thumbsDown === true) {
        setThumbsDown(false);
      }
    } else {
      setThumbsDown(!thumbsDown);
      if (thumbsUp === true) {
        setThumbsUp(false);
      }
    }
    console.log('key===', key, 'func', handleUpdateLikeAndDislike);
  };

  return (
    <Fragment>
      <div
        className='name post-item'
        style={{ fontWeight: 'bolder', fontSize: '1rem' }}
      >
        {post.name}
      </div>
      <div className='post post-item'>{post.comment}</div>
      <div className='date'>
        Posted on: {moment(post.date).format('MMM Do YYYY, h:mm:ss a')}
      </div>
      <div className='thumbs post-item'>
        <span
          className='glyphicon glyphicon-thumbs-up'
          onClick={() => handleThumbsOnClick('thumbs-up')}
          style={{ color: thumbsUp ? '#32CD32' : 'grey' }}
        ></span>
        <span
          className='glyphicon glyphicon-thumbs-down'
          onClick={() => handleThumbsOnClick('thumbs-down')}
          style={{ color: thumbsDown ? 'red' : 'grey' }}
        ></span>
      </div>
      <hr />
    </Fragment>
  );
}

export default Post;
