import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions, Typography} from '@material-ui/core'


import {login, loginCancel} from '../../actions/auth.actions'


class LoginDialog extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dialogIsOpen: false,
      credentials: {
        username: '',
        password: ''
      }
    };
  }

  componentWillReceiveProps(nextProps, nextState) {
    if (nextProps.userLoggedIn) {
      this.setState({dialogIsOpen: false, credentials: {username: '', password: ''}});
    }
  }

  handleClickOpen = () => {
    this.setState({dialogIsOpen: true});
  };

  handleClose = () => {
    this.setState({dialogIsOpen: false, credentials: {username: '', password: ''}});
    this.props.loginCancel();
  };

  handleChange = name => ({target: {value}}) => {
    this.setState({credentials: {...this.state.credentials, [name]: value}});
  };

  handleLogin = event => {
    event.preventDefault();

    const {username, password} = this.state.credentials;
    this.props.login(username, password);

    // this.setState({dialogIsOpen: false, credentials: {username: '', password: ''}});
  };

  render() {

    return (!this.props.userLoggedIn && (

      <div>

        <Button onClick={this.handleClickOpen}>Zaloguj się</Button>

        <Dialog open={this.state.dialogIsOpen} onClose={this.handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Zaloguj się</DialogTitle>
          <DialogContent>
            {this.props.loginError && (<Typography variant="body2" color='error'>{this.props.loginError}</Typography>)}
            <TextField
              autoFocus
              margin="dense"
              id="username"
              label="Nazwa użytkownika"
              type="text"
              value={this.state.credentials.username}
              onChange={this.handleChange('username')}
              fullWidth
            />
            <TextField
              margin="dense"
              id="password"
              label="Hasło"
              type="password"
              value={this.state.credentials.password}
              onChange={this.handleChange('password')}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Anuluj
            </Button>
            <Button onClick={this.handleLogin} color="primary">
              Zaloguj
            </Button>
          </DialogActions>
        </Dialog>
      </div>

    ));
  }
}

LoginDialog.propTypes = {
  login: PropTypes.func.isRequired
};

const mapStateToProps = ({auth}) => ({
  userLoggedIn: auth.user,
  loginError: auth.loginError
});


export default connect(mapStateToProps, {login, loginCancel})(LoginDialog);
