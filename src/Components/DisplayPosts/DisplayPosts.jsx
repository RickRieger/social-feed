import React from 'react'
import { useState, useEffect } from 'react'

import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap'
import "./DisplayPosts.css"
function DisplayPosts() {
   
  const [thumbsUp, setThumbsUp] = useState(false);
  const [thumbsDown, setThumbsDown] = useState(false);


  useEffect(() => {
      
  
  
  }, [thumbsUp, thumbsDown]);


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
    <div className="display-results">
        <div className="name post-item">Frank</div>
        <div className="post post-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, dolore illo assumenda eius omnis esse molestias eligendi? Eveniet repudiandae expedita praesentium officia dolor, reiciendis earum adipisci, qui facilis fugit animi.</div>
        <div className="thumbs post-item">        
            <span className="glyphicon glyphicon-thumbs-up"  onClick={()=>handleThumbsOnClick('thumbs-up')}  style={{color:thumbsUp?'#32CD32':'grey'}}></span>            
            <span className="glyphicon glyphicon-thumbs-down" onClick={()=>handleThumbsOnClick('thumbs-down')}style={{color:thumbsDown?'red': 'grey'}}></span>
        </div>
        <hr />
    </div>
  )
}

export default DisplayPosts