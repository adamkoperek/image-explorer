import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withStyles} from "@material-ui/core/styles";
import GridListTile from '@material-ui/core/GridListTile';

class ImageGridItem extends Component {

  /*componentWillReceiveProps(nextProps, state) {
  }*/

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const {classes, image: {file_name, full_path}} = this.props;
    return (<GridListTile className={classes.gridListTile}><img src={full_path} alt={file_name}/></GridListTile>)
  }
}

const mapStateToProps = state => ({});

const styles = (theme) => ({
  gridListTile: {
    width: 200,
    height: 200
  }
});

export default connect(mapStateToProps, {})(withStyles(styles)(ImageGridItem));