import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IconButton, Menu, MenuItem, Divider } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

import { logout } from '../actions/auth.actions'

class CurrentUserMenu extends Component {

  constructor (props) {
    super(props);

    this.state = {
      anchorEl: null
    };
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLogout = () => {
    this.setState({ anchorEl: null });
    this.props.logout();
  };

  render = () => {

    const { anchorEl } = this.state;
    return (this.props.username && (

      <div>

        <IconButton
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}>
          <AccountCircleIcon/>
        </IconButton>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}>
          <MenuItem onClick={this.handleClose}>{this.props.username}</MenuItem>
          <Divider light/>
          <MenuItem onClick={this.handleLogout}>Wyloguj</MenuItem>
        </Menu>

      </div>
    ));
  }
}


const mapStateToProps = state => ({
  username: state.auth.user ? state.auth.user.username : null
});

export default connect(mapStateToProps, {logout})(CurrentUserMenu);
