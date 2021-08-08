import React from "react";
import Users from "./components/Users";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      independantUser: "ShariqAli-Dev",
    };
  }

  render() {
    return (
      <>
        <h2>Independant User: {this.state.independantUser}</h2>
        <Users />
      </>
    );
  }
}

export default App;
