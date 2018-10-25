import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withStyles} from '@material-ui/core/styles'
import {Typography} from '@material-ui/core'
import {getCurrentDirectoryContent} from '../../actions/directories.actions'
import {ImageGrid} from '../image-grid'


class DirectoryContent extends Component {

  componentWillReceiveProps(nextProps, state) {
    if (nextProps.currentDirectoryId !== null && nextProps.currentDirectoryId !== this.props.currentDirectoryId) {
      this.props.getCurrentDirectoryContent();
    }
  }

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { classes, currentDirectory } = this.props;
    return ( currentDirectory && (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography variant="title">{currentDirectory.name}:</Typography>
        <div className={classes.directoryContentScrollable}>
          <ImageGrid images={currentDirectory.images}/>
        </div>
      </main>
    ));

  }
}

const mapStateToProps = ({directories: {currentDirectory, currentDirectoryId}}) => ({
  currentDirectoryId,
  currentDirectory
});

const styles = (theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
  directoryContentScrollable: {
    overflowY: 'auto',
    width: '100%',
    height: 'calc(100% - 100px)'
  }
});

export default connect(mapStateToProps, {getCurrentDirectoryContent})(withStyles(styles)(DirectoryContent));