import React, { useState, useEffect} from "react"
import './App.css';
import Post from "./Components/Post/Post.js"
import {db} from "./Firebase"

function App() {

  const [posts, setPosts]= useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    db.collection("posts").onSnapshot(snapshot =>{
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })));
    })
  }, []);

  return (
    
    <div className="app">
      
      <Modal
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2>I am a Modal</h2>
        </div>
      </Modal>
      
      <div className="app__header">
        <img
            className="app__headerImage"
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt=""
        />
      </div>

      <h1>hello world</h1>

      {
        posts.map(({id, post})=>(
          <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }
      
    </div>
  );
}

export default App;
