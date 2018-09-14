import React, { Component } from 'react'
import { connect } from 'react-redux'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import LoginDialog from './dialogs/LoginDialog'
import CurrentUserMenu from './CurrentUserMenu'
import CurrentScopeMenu from "./CurrentScopeMenu";

class TopBar extends Component {

  render() {
    return (

      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit" align="left" style={{flex: 1 }}>
            IMAGE EXPLORER
          </Typography>

          <CurrentScopeMenu/>
          <CurrentUserMenu/>
          <LoginDialog/>

        </Toolbar>
      </AppBar>
    )
  }
}

const mapStateToProps = state => ({
  username: state.auth.user ? state.auth.user.username : 'not logged in'
});

export default connect(mapStateToProps, {})(TopBar);
