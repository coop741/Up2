import React, { Component } from "react";
import "./LoadingSpinner.css";

class LoadingSpinner extends Component {
  render() {
    return (
      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    );
  }
}

export default LoadingSpinner;
