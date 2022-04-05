import React, {useState} from 'react'
import "./Post.css"

function Post({post}) {


  const [thumbsUp, setThumbsUp] = useState(false);
  const [thumbsDown, setThumbsDown] = useState(false);



console.log(post)

 const handleThumbsOnClick = (thumbs)=>{
    if(thumbs === 'thumbs-up'){
        setThumbsUp(!thumbsUp)
        if(thumbsDown === true){
            setThumbsDown(false)
        }

    }else{
        setThumbsDown(!thumbsDown)
        if(thumbsUp === true){
            setThumbsUp(false)
        }
    
    }
 }
  return (
    <>

       <div className="name post-item">{post.name}</div>
        <div className="post post-item">{post.comment}</div>
      
        <div className="thumbs post-item">        
            <span className="glyphicon glyphicon-thumbs-up"  onClick={()=>handleThumbsOnClick('thumbs-up')}  style={{color:thumbsUp?'#32CD32':'grey'}}></span>            
            <span className="glyphicon glyphicon-thumbs-down" onClick={()=>handleThumbsOnClick('thumbs-down')}style={{color:thumbsDown?'red': 'grey'}}></span>
        </div>
        <hr />
    </>
  )
}

export default Post