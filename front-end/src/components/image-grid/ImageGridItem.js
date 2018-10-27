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
    const {classes, image: {file_name, id}} = this.props;
    const file_url = 'http://localhost:3000/thumbnails/' + id;
    return (
      <GridListTile className={classes.gridListTile}>
          <div className={classes.tileImageContainer}>
            <img className={classes.tileImage} src={file_url} alt={file_name}/>
          </div>
          <div className={classes.tileTitle}>{file_name}</div>
      </GridListTile>
    )
  }
}

const mapStateToProps = state => ({});

const styles = (theme) => ({
  gridListTile: {
    width: 200,
    height: 200
  },
  tileImageContainer: {
    height: 'calc(100% - 35px)',
    width: '100%',
    position: 'relative'
  },
  tileImage: {
    maxHeight: '80%',
    maxWidth: '80%',

    position: 'absolute',
    margin: 'auto',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  tileTitle: {
    boxSizing: 'border-box',
    padding: 7,
    marginBottom: 5,
    width: '100%',
    height: 30,
    textAlign: 'center'
  }
});

export default connect(mapStateToProps, {})(withStyles(styles)(ImageGridItem));