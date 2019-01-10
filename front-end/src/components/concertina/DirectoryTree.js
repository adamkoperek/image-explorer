import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {List, ListItem, ListItemText, Collapse, ListItemIcon} from '@material-ui/core'
import FolderIcon from '@material-ui/icons/Folder'
import FolderOpenIcon from '@material-ui/icons/FolderOpen'
import {withStyles} from '@material-ui/core/styles'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

import {getCurrentScopeDirectories, setCurrentDirectory} from "../../actions/directories.actions";

class DirectoryTree extends Component {

  constructor(props) {
    super(props);

    this.state = {
      directories: []
    }
  }

  componentWillMount() {
    if (this.props.currentScope !== null) {
      this.props.getCurrentScopeDirectories();
    }
  }

  componentWillReceiveProps(nextProps, state) {
    if (nextProps.currentScope !== null) {
      if (this.props.currentScope === null || this.props.currentScope.id !== nextProps.currentScope.id) {
        this.props.getCurrentScopeDirectories();
      }
    }

    if (nextProps.currentScope && nextProps.directories) {
      if (nextProps.directories !== this.state.directories) {
        this.setState({directories: nextProps.directories});
      }
    }
  }

  handleOpenDirectory(event, directory) {
    event.stopPropagation();

    const {subDirs} = directory;

    if (!subDirs || subDirs.length === 0) {
      return;
    }

    const {directories} = this.state;
    directory.open = !directory.open;

    this.setState({
      directories: {...directories}
    })
  }

  handleSelectDirectory(directory) {
    this.props.setCurrentDirectory(directory.id);
  }

  render() {
    const {directories} = this.props;
    return (directories && (

      <List>
        {directories.map((directory) => this.createListItem(directory))}
      </List>

    ));
  }

  createListItem(directory) {

    const {classes} = this.props;
    const {subDirs} = directory;
    const hasSubDirs = subDirs !== null && subDirs.length > 0;

    const selected = this.props.currentDirectory !== null && this.props.currentDirectory.id === directory.id;

    return (directory.active && (
      <Fragment key={directory.id}>
        <ListItem button dense onClick={() => this.handleSelectDirectory(directory)} selected={selected}>
          <ListItemIcon>
            {directory.open ? <FolderOpenIcon onClick={(event) => this.handleOpenDirectory(event, directory)}/> :
              <FolderIcon onClick={(event) => this.handleOpenDirectory(event, directory)}/>}
          </ListItemIcon>
          <ListItemText>{directory.name}</ListItemText>
          {hasSubDirs && (directory.open ?
            <ExpandLess onClick={(event) => this.handleOpenDirectory(event, directory)}/> :
            <ExpandMore onClick={(event) => this.handleOpenDirectory(event, directory)}/>)}
        </ListItem>
        {(subDirs && (
          <Collapse in={directory.open} className={classes.collapse}>
            <List className={classes.name} disablePadding={true}>
              {subDirs.map(subDir => this.createListItem(subDir))}
            </List>
          </Collapse>
        ))}
      </Fragment>
    ));
  }
}

const mapStateToProps = ({scopes: {currentScope}, directories}) => ({
  currentScope,
  directories: directories.directories,
  currentDirectory: directories.currentDirectory
});

const styles = theme => ({
  list: {
    paddingTop: 100,
    paddingBottom: 0
  },
  collapse: {
    paddingLeft: theme.spacing.unit * 2
  }
});

export default connect(mapStateToProps, {
  getCurrentScopeDirectories,
  setCurrentDirectory
})(withStyles(styles)(DirectoryTree));