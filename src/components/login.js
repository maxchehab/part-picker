import { Typography, Button, TextField } from "material-ui";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: props.email,
      password: props.password
    };
  }

  moveCaretToEnd(e) {
    let temp_value = e.target.value;
    e.target.value = "";
    e.target.value = temp_value;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      email: nextProps.email,
      password: nextProps.password
    });
  }

  render() {
    return (
      <div>
        <TextField
          fullWidth
          id="email"
          label="Email"
          type="email"
          margin="normal"
          name="email"
          value={this.state.email}
          autoFocus
          onChange={this.props.onChange}
          onFocus={this.moveCaretToEnd}
        />
        <TextField
          fullWidth
          id="password"
          label="Password"
          type="password"
          margin="normal"
          name="password"
          value={this.state.password}
          onChange={this.props.onChange}
          onFocus={this.moveCaretToEnd}
        />
        <Button style={{ width: "100%" }} raised color="primary">
          Login
        </Button>
        <div onClick={this.props.toggle}>
          <Typography
            align={"center"}
            color={"accent"}
            style={{
              marginTop: 24,
              cursor: "pointer"
            }}
          >
            {"No account yet? Create one."}
          </Typography>
        </div>
      </div>
    );
  }
}
