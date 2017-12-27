import { findDOMNode } from "react-dom";
import Link from "next/link";
import Login from "./login";
import Register from "./register";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  TextField,
  Popover
} from "material-ui";

export default class Authenticator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      showLogin: true
    };
    this.changeInputByName = this.changeInputByName.bind(this);
    this.toggleLogin = this.toggleLogin.bind(this);
  }

  handleClickButton = () => {
    this.setState({
      open: true,
      anchorEl: findDOMNode(this.button)
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  changeInputByName(event) {
    const change = {};
    change[event.target.name] = event.target.value;
    this.setState(change);
  }

  toggleLogin() {
    this.setState({ showLogin: !this.state.showLogin });
  }

  render() {
    return (
      <div>
        <Button
          ref={node => {
            this.button = node;
          }}
          onClick={this.handleClickButton}
          color="contrast"
        >
          Login
        </Button>

        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorReference={this.state.anchorReference}
          anchorPosition={{
            top: this.state.positionTop,
            left: this.state.positionLeft
          }}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
        >
          <Card
            style={{
              maxWidth: 380
            }}
          >
            <CardContent>
              {this.state.showLogin && (
                <Login
                  onChange={this.changeInputByName}
                  toggle={this.toggleLogin}
                  email={this.state.email}
                  password={this.state.password}
                />
              )}

              {!this.state.showLogin && (
                <Register
                  onChange={this.changeInputByName}
                  toggle={this.toggleLogin}
                  email={this.state.email}
                  password={this.state.password}
                  confirmPassword={this.state.confirmPassword}
                />
              )}
            </CardContent>
          </Card>
        </Popover>
      </div>
    );
  }
}
