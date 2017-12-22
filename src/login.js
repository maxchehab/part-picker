import { findDOMNode } from "react-dom";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  TextField,
  Popover
} from "material-ui";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      anchorEl: null,
      positionTop: 200, // Just so the popover can be spotted more easily
      positionLeft: 400, // Same as above
      anchorReference: "anchorEl"
    };
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

  render() {
    const { classes } = this.props;
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
              <TextField
                fullWidth
                id="email"
                label="Email"
                type="email"
                margin="normal"
                autoFocus
              />
              <TextField
                fullWidth
                id="password"
                label="Password"
                type="password"
                margin="normal"
              />
              <Button style={{ width: "100%" }} raised color="primary">
                Login
              </Button>
              <Typography
                color={"accent"}
                style={{
                  marginTop: 8,
                  cursor: "pointer"
                }}
              >
                Don't have an account? Why not register?
              </Typography>
            </CardContent>
          </Card>
        </Popover>
      </div>
    );
  }
}
