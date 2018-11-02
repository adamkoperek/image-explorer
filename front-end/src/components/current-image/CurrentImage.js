import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withStyles} from "@material-ui/core/styles"
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from '@material-ui/core'
import {unsetCurrentImage} from '../../actions/images.actions'

class CurrentImage extends Component {

  /*componentWillReceiveProps(nextProps, state) {
  }*/

  constructor(props) {
    super(props);
    this.state = {}
  }

  onCancelClick = () => {
    this.props.unsetCurrentImage();
  };

  render() {
    const { currentImage: { data } } = this.props;
    return (data &&
      (<Dialog open={data !== null}>
        <DialogTitle>{data.file_name}</DialogTitle>
        <DialogContent>{data.file_name}</DialogContent>
        <DialogActions>
          <Button onClick={() => this.onCancelClick()}>Cancel</Button>
        </DialogActions>
      </Dialog>)
    );
  }
}

const mapStateToProps = ({images: {currentImage}}) => ({
  currentImage
});

const styles = (theme) => ({});

export default connect(mapStateToProps, {unsetCurrentImage})(withStyles(styles)(CurrentImage));