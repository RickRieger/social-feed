import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import CreatePost from "./Components/CreatePost/CreatePost";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <CreatePost/>
      <DisplayPosts/>
    </div>
  );
}

export default App;
