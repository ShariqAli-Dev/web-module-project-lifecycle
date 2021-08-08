import React from "react";
import axios from "axios";
import { Card, CardActions, CardMedia, Typography, Button, CardActionArea, CardContent } from "@material-ui/core";

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      followers: 0,
    };
  }

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/${this.props.user.login}`)
      .then((res) => {
        this.setState({
          ...this.state,
          followers: res.data.followers,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <Card elevation="4">
        <CardActionArea>
          <CardMedia className="card-image" image={this.props.user.avatar_url} title={this.props.user.login} />

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.user.login}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              This person is a {this.props.user.type} with node id {this.props.user.node_id}
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions>
          <Typography variant="body3" color="textPrimary" component="p">
            Followers: {this.state.followers}
          </Typography>
          <a href={this.props.user.html_url}>
            <Button size="small" color="primary">
              View Page
            </Button>
          </a>
        </CardActions>
      </Card>
    );
  }
}

export default User;
