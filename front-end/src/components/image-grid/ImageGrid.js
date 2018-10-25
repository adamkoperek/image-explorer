import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withStyles} from "@material-ui/core/styles";
import GridList from '@material-ui/core/GridList';
import {ImageGridItem} from "./index";

class ImageGrid extends Component {

  /*componentWillReceiveProps(nextProps, state) {
  }*/

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { images, classes } = this.props;
    return (
      <GridList className={classes.gridList} cellHeight={200}>
        {images.map(
          image => (<ImageGridItem key={image.id} image={image}/>)
        )}
      </GridList>
    );
  }
}

const mapStateToProps = state => ({
});

const styles = (theme) => ({
  gridList: {
    width: '100%'
  }
});

export default connect(mapStateToProps, {})(withStyles(styles)(ImageGrid));