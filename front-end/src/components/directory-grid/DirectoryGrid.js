import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withStyles} from "@material-ui/core/styles";
import GridList from '@material-ui/core/GridList';
import {DirectoryGridItem} from './index'

class DirectoryGrid extends Component {

  /*componentWillReceiveProps(nextProps, state) {
  }*/

  constructor(props) {
    super(props);
    this.state = {}
  }

  handleDirectoryOpen = (id) => {

  };

  render() {
    const { classes, directories } = this.props;
    return (directories &&
      <GridList className={classes.gridList} cellHeight={200}>
        {directories.map(
          (directory, index) => (<DirectoryGridItem key={index} directory={directory}/>)
        )}
      </GridList>
    );
  }
}

const mapStateToProps = state => ({});

const styles = (theme) => ({
  gridList: {
    width: '100%'
  }
});

export default connect(mapStateToProps, {})(withStyles(styles)(DirectoryGrid));