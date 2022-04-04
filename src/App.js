import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Post from "./Components/Post/Post";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Post/>
    </div>
  );
}

export default App;
