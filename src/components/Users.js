import React from "react";
import User from "./User";
import { Grid } from "@material-ui/core";

class Users extends React.Component {
  render() {
    return (
      <Grid container spacing={4}>
        {this.props.users.map((user) => {
          return (
            <Grid justifyContent="center" item key={user.id}>
              <User user={user} />
            </Grid>
          );
        })}
      </Grid>
    );
  }
}

export default Users;
