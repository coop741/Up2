import React, { Component } from 'react';
import './App.css';

import Container from './components/Container'
import Post from './components/Post'
import PostContainer from './components/PostContainer'
import Search from './components/Search'
import NavBar from './components/NavBar'
import PostCreate from './components/PostCreate'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        
        <Container>
          <Search />
          <PostCreate />
          <PostContainer>
            <Post first="Avonlea" last="Haymart" date="Todayish" title="I got a new dog" desc="He's chonky" image="https://i.kym-cdn.com/entries/icons/mobile/000/013/564/doge.jpg" value="10" hashtags="dog"/>
            
          </PostContainer>
        </Container>
      </div>
    );
  }
}

export default App;
