import React from 'react';
import logo from './grainery-logotype.png';
import './App.css';
import Post from './Post';

function App() {
  return (
    <div className="App">
      <div className="app__header">
        <img
          className="app__headerImage"
          src={logo}
          alt="The Grainery"
        />
      </div>
    
      <Post username="Allison" caption="Another great shot" imageUrl="https://i.redd.it/sfw9ifrn5n751.jpg" />
      <Post username="Kylespergallon" caption="second comment" imageUrl="https://i.redd.it/56bahl3rk9k41.jpg" />
      <Post username="DonnyDrama" caption="thirrd comment" imageUrl="https://i.redd.it/56bahl3rk9k41.jpg" />

    </div>
  );
}

export default App;
