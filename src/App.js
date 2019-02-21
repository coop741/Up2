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
          <Routes />
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
