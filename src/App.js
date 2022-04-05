import React, { useState } from 'react';
import NavBar from './Components/NavBar/NavBar';
import CreatePost from './Components/CreatePost/CreatePost';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [payload, setPayload] = useState([]);


  const handleNewComment = (name, comment) => {


    let newComment = 
    { name: name,
      comment: comment,
      like: false,
      disLike: false,
      date: new Date() };

    setPayload([newComment, ...payload])

  };

  return (
    <div className='App'>
      <NavBar />
      <CreatePost handleNewComment = {handleNewComment}/>
      <DisplayPosts payload = {payload}/>
    </div>
  );
}

export default App;
