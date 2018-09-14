import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Drawer} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'
import LoginDialog from './dialogs/AddDirectoryToScopeDialog'

const styles = theme => ({
    drawerPaper: {
      position: 'relative',
      width: 250,
    },
    toolbar: theme.mixins.toolbar
  }
);

class Concertina extends Component {


  render() {
    const {classes, currentScope} = this.props;
    return ( currentScope && (
      <Drawer
        variant="permanent"
        anchor='left'
        classes={{paper: classes.drawerPaper}}>
        <div className={classes.toolbar} />
        <LoginDialog/>
      </Drawer>
    ));
  }
}

const mapStateToProps = ( {scopes} ) => ({
  currentScope: scopes.currentScope
});

export default connect(mapStateToProps, {})(withStyles(styles)(Concertina));