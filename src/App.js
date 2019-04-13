import React, { Component } from "react";
// Components
import Container from "./components/Container";
import NavBar from "./components/NavBar";
import Routes from "./components/Routes/Routes";
// CSS

class App extends Component {
  state = {
    count: 0
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Container>
          <Routes />
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
