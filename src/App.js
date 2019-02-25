import React, { Component } from "react";
import {INCREMENT, DECREMENT } from './redux/actions'
// Components
import Container from "./components/Container";
import NavBar from "./components/NavBar";
import Routes from "./components/Routes/Routes";
// CSS

class App extends Component {
  state = {
    count: 0,
  }

  //Links the store to this component's state
  //Methods below handle changes to the store's state 
  componentDidMount() {
    this.props.store.subscribe(() => {
      const { count } = this.props.store.getState();
      this.setState({ count })
    })
  }
  handleIncrement = () => {
    this.props.store.dispatch({ type: INCREMENT });
  }
  handleDecrement = () => {
    this.props.store.dispatch({ type: DECREMENT });
  }

  render() {
    // console.log(process.env.REACT_APP_API);
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
