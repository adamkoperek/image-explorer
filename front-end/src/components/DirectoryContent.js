import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withStyles} from '@material-ui/core/styles'
import {Typography} from '@material-ui/core'


class DirectoryContent extends Component {
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
      </main>
    ));

  }
}

const mapStateToProps = ({directories: {currentDirectory}}) => ({
  currentDirectory
});

const styles = (theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  }
});

export default connect(mapStateToProps, {})(withStyles(styles)(DirectoryContent));