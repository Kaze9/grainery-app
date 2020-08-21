import React, { useState, useEffect } from 'react';
import logo from './grainery-logotype.png';
import './App.css';
import Post from './Post';
import { db} from './firebase';

function App() {
  const [posts, setPosts] = useState([]);

    // useEffect -> runs a piece of code based on a specific condition

    useEffect(() => {
      // this is where the code runs
      db.collection('posts').onSnapshot(snapshot => {
        // every time a new post is added, this code fires...
        setPosts(snapshot.docs.map(doc => ({
          id: doc.id,
          post: doc.data()
        })));
      })
    }, []);

  return (
    <div className="App">
      <div className="app__header">
        <img
          className="app__headerImage"
          src={logo}
          alt="The Grainery"
        />
      </div>
    

      {
        posts.map(({id, post}) => (
          <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }

    </div>
  );
}

export default App;
