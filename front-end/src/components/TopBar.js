import React, {Component} from 'react'
import {connect} from 'react-redux'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

import {LoginDialog} from './dialogs'
import {CurrentUserMenu, CurrentScopeMenu} from './index'

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  }
});

class TopBar extends Component {

  render() {
    const {classes} = this.props;
    return (

      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="title" color="inherit" align="left" style={{flex: 1}}>
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

export default connect(mapStateToProps, {})(withStyles(styles)(TopBar));
