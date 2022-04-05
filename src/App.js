import React, { useState } from 'react';
import NavBar from './Components/NavBar/NavBar';
import CreatePost from './Components/CreatePost/CreatePost';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [payload, setPayload] = useState([]);

  const handleNewComment = (name, comment) => {
    if (name.length === 0 || comment.length === 0) {
      return toast.error('Please fill out both fields!', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    let newComment = {
      name: name,
      comment: comment,
      like: false,
      disLike: false,
      date: new Date(),
    };

    setPayload([newComment, ...payload]);
  };

  return (
    <div className='App'>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <NavBar />
      <CreatePost handleNewComment={handleNewComment} />
      <DisplayPosts payload={payload} />
    </div>
  );
}

export default App;
