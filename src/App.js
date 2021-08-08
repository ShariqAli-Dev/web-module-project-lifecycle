import React from "react";
import axios from "axios";
import Users from "./components/Users";
import { Container } from "@material-ui/core";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users")
      .then((res) => {
        this.setState({
          ...this.state,
          users: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <Container fixed className="container">
        <Users users={this.state.users} />
      </Container>
    );
  }
}

export default App;
