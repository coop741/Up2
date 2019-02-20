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
      <Container>
        <NavBar />
        <Search />
        <PostCreate />
        <PostContainer>
            <Post />
        </PostContainer>
      </Container>
    );
  }
}

export default App;
