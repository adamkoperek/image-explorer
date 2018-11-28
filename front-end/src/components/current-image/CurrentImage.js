import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withStyles} from "@material-ui/core/styles"
import {Dialog, DialogContent, DialogTitle, Grid, IconButton, Typography} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
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
    const {currentImage: {data}, classes} = this.props;
    if (!data) {
      return false;
    }

    const file_url = data === null || 'http://localhost:3000/images/' + data.id;
    const fileName = data.file_name;

    return (<Dialog open={data !== null} classes={{paper: classes.dialogPaper}}>
      <DialogTitle className={classes.dialogTitle}>
        <span className={classes.dialogTitleText}>{fileName}</span>
        <IconButton className={classes.titleCloseButton} onClick={this.onCancelClick}>
          <CloseIcon/>
        </IconButton>
      </DialogTitle>

      <DialogContent className={classes.dialogContent}>
        {/*<div className={classes.imageContainer}>image</div>*/}
        <Grid container spacing={0} className={classes.contentGrid}>
          <Grid item xs={9} className={classes.imageContainer}>
            <img className={classes.image} src={file_url} alt={fileName}/>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h6">{fileName}</Typography>
          </Grid>
        </Grid>


      </DialogContent>
    </Dialog>);
  }
}

const mapStateToProps = ({images: {currentImage}}) => ({
  currentImage
});

const styles = (theme) => ({
  dialogTitle: {
    backgroundColor: '#222',
    padding: '5px 10px'
  },
  dialogTitleText: {
    display: 'inline-block',
    color: '#fff',
    padding: 12
  },
  titleCloseButton: {
    float: 'right',
    color: '#fff'
  },
  dialogPaper: {
    width: '90%',
    height: '90%',
    maxWidth: 'initial'
  },
  dialogContent: {
    padding: 0,
    position: 'relative'
  },
  contentGrid: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  imageContainer: {
    backgroundColor: '#eee',
    overflow: 'hidden',
    padding: 10
  },
  image: {
    height: '100%',
    width: '100%',
    objectFit: 'contain'
  }
});

export default connect(mapStateToProps, {unsetCurrentImage})(withStyles(styles)(CurrentImage));