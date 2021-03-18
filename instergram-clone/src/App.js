import React, { useState, useEffect} from "react"
import './App.css';
import Post from "./Components/Post/Post.js"
import {db} from "./Firebase"
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

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

  const signUp = (event) =>{

  }

  return (
    
    <div className="app">
      
      <Modal
        open={open}
        onClose={() => setOpen(false)}
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

      <Button onClick={() =>  setOpen(true)}>Sign up</Button>

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
