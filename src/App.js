import { render } from "@testing-library/react";
import React from "react";

class App extends React.Component {
  render() {
    return (
      React.createElement("h1", null, "Hello Test Pro")
    )
  }
}

export default App;
