import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {withStyles} from "@material-ui/core/styles"
import GridListTile from '@material-ui/core/GridListTile'
import FolderIcon from '@material-ui/icons/Folder'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography
} from '@material-ui/core'
import {addDirectoryToScope, setCurrentDirectory} from "../../actions/directories.actions";

class DirectoryGridItem extends Component {

  /*componentWillReceiveProps(nextProps, state) {
  }*/

  constructor(props) {
    super(props);
    this.state = {
      addDirectoryToScopeDialogIsOpen: false
    }
  }


  handleDirectoryDoubleClick = ({id, in_scope}) => {
    if (in_scope) {
      this.openDirectory(id);
    } else {
      this.openAddDirectoryToScopeDialog();
    }
  };

  handleCloseDialog = () => {
    this.setState({addDirectoryToScopeDialogIsOpen: false});
  };

  handleAddDirectoryToScope = (path) => {
    if (path && path !== '') {
      this.props.addDirectoryToScope(path);
    }
  };

  openDirectory = (id) => {
    this.props.setCurrentDirectory(id);
  };

  openAddDirectoryToScopeDialog = () => {
    this.setState({addDirectoryToScopeDialogIsOpen: true});
  };

  render() {
    const { classes, directory: {id, in_scope, name, full_path}, currentScope } = this.props;
    return (
      <Fragment>

        <Dialog open={this.state.addDirectoryToScopeDialogIsOpen} onClose={this.handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Dodaj folder do przestrzeni: {currentScope.name}</DialogTitle>
          <DialogContent>
            {this.props.addError && (<Typography variant="body1" color='error'>{this.props.addError}</Typography>)}
            <Typography variant="body1">{full_path}</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCloseDialog} color="primary">
              Anuluj
            </Button>
            <Button onClick={() => this.handleAddDirectoryToScope(full_path)} color="primary">
              Dodaj folder
            </Button>
          </DialogActions>
        </Dialog>

        <GridListTile className={classes.gridListTile} onDoubleClick={() => this.handleDirectoryDoubleClick({id, in_scope})}>
          <div className={classes.tileIconContainer}>
            <FolderIcon className={classes.tileIcon}/>
            {!in_scope && <AddCircleIcon className={classes.addIcon}/>}
          </div>
          <div className={classes.tileTitle}>{name}</div>
        </GridListTile>
      </Fragment>

    )
  }
}

const mapStateToProps = ({scopes: {currentScope}}) => ({
  currentScope
});

const styles = (theme) => ({
  gridListTile: {
    width: 200,
    height: 175
  },
  tileIconContainer: {
    height: 'calc(100% - 60px)',
    width: '100%',
    position: 'relative'
  },
  tileIcon: {
    width: 120,
    height: 120,

    position: 'absolute',
    margin: 'auto',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    opacity: 0.5
  },
  tileTitle: {
    boxSizing: 'border-box',
    padding: 7,
    marginBottom: 5,
    width: '100%',
    height: 30,
    textAlign: 'center'
  },
  addIcon: {
    position: 'absolute',
    width: 30,
    height: 30,
    right: 40,
    bottom: 10,
    background: '#ffffff',
    borderRadius: 15
  }
});

export default connect(mapStateToProps, {addDirectoryToScope, setCurrentDirectory})(withStyles(styles)(DirectoryGridItem));