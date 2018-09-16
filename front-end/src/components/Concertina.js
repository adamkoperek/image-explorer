import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Drawer} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'
import {AddDirectoryToScopeDialog} from './dialogs'
import {DirectoryTree} from './index'

const styles = theme => ({
    drawerPaper: {
      position: 'relative',
      width: 350,
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
        <AddDirectoryToScopeDialog/>
        <DirectoryTree/>
      </Drawer>
    ));
  }
}

const mapStateToProps = ( {scopes} ) => ({
  currentScope: scopes.currentScope
});

export default connect(mapStateToProps, {})(withStyles(styles)(Concertina));