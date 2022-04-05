import React from 'react'
import Post from '../Post/Post'
import "./DisplayPosts.css"
function DisplayPosts({payload}) {
 
  return (
    <div className="display-results">
        {payload.map((post)=><Post post={post} key={payload.indexOf(post)}/>)}
    </div>
  )
}

export default DisplayPosts