import React, { Component } from "react";

// Components
import Container from "./components/Container";
import NavBar from "./components/NavBar";
import Routes from "./components/Routes/Routes";
// CSS
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Container>
<<<<<<< HEAD
          <Search />
          <PostCreate />
          <PostContainer>
            <Post first="Avonlea" last="Haymart" date="Todayish" title="I got a new dog" desc="He's chonky" image="https://i.kym-cdn.com/entries/icons/mobile/000/013/564/doge.jpg" value="10" hashtags={["dog","is a","good boy"]}/>
            
          </PostContainer>
=======
          <Routes />
>>>>>>> 129e1a2589a1d7605cfc01a1e2b85f3995924f89
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
