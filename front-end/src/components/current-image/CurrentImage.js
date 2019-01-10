import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withStyles} from "@material-ui/core/styles"
import {
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import {addTagToImage, removeTagFromImage, unsetCurrentImage} from '../../actions/images.actions'

class CurrentImage extends Component {

  /*componentWillReceiveProps(nextProps, state) {
  }*/

  constructor(props) {
    super(props);
    this.state = {
      newTag: ''
    }
  }

  onCancelClick = () => {
    this.props.unsetCurrentImage();
  };

  sizeToString = (size) => {
    if (!size || isNaN(size)) {
      return 'N/A';
    }

    return Math.round(size / 1024) + ' KB';
  };

  onDeleteChip = (tag) => () => {
    console.log('delete chip:', tag, this.props.currentImage.id);
    this.props.removeTagFromImage(this.props.currentImage.id, tag);
  };

  onNewTagChange = name => ({target: {value}}) => {
    this.setState({[name]: value});
  };

  onKeyPress = ({which}) => {
    switch(which) {
      case 10:
      case 13: {
        if (this.state.newTag && this.state.newTag.length > 0) {
          console.log('add new tag:', this.state.newTag, this.props.currentImage.id);
          this.props.addTagToImage(this.props.currentImage.id, this.state.newTag);
          this.setState({newTag: ''});
        }
        break;
      }
      case 27: {
        this.setState({newTag: ''});
        break;
      }
      default: {}
    }
  };

  render() {
    const {currentImage: {data}, classes} = this.props;
    if (!data) {
      return false;
    }

    const file_url = data === null || 'http://localhost:3000/images/' + data.id;
    const {file_name, full_path, title, size, tags} = data;

    return (<Dialog open={data !== null} classes={{paper: classes.dialogPaper}}>
      <DialogTitle className={classes.dialogTitle}>
        <span className={classes.dialogTitleText}>{file_name}</span>
        <IconButton className={classes.titleCloseButton} onClick={this.onCancelClick}>
          <CloseIcon/>
        </IconButton>
      </DialogTitle>

      <DialogContent className={classes.dialogContent}>
        {/*<div className={classes.imageContainer}>image</div>*/}
        <Grid container spacing={0} className={classes.contentGrid}>
          <Grid item xs={9} className={classes.imageContainer}>
            <img className={classes.image} src={file_url} alt={file_name}/>
          </Grid>
          <Grid item xs={3}>
            <List>
              <ListItem>
                <ListItemText primary="Tytuł:" secondary={title ? title : 'N/A'}/>
              </ListItem>
              <ListItem>
                <ListItemText primary="Nazwa Pliku:" secondary={file_name}/>
              </ListItem>
              <ListItem>
                <ListItemText primary="Ścieżka do Pliku:" secondary={full_path}/>
              </ListItem>
              <ListItem>
                <ListItemText primary="Rozmiar Pliku:" secondary={this.sizeToString(size)}/>
              </ListItem>
              <ListItem>
                <ListItemText primary="Tagi:"/>
              </ListItem>
            </List>
            <div className={classes.chips}>
              {
                tags.map((tag, index) => {
                  return <Chip key={index} label={tag} className={classes.chip} onDelete={this.onDeleteChip(tag)}/>
                })
              }
              <TextField className={classes.chipInput}
                         type="text" margin="dense"
                         value={this.state.newTag}
                         onChange={this.onNewTagChange('newTag')}
                         onKeyPress={this.onKeyPress}/>
            </div>
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
  },
  chips: {
    padding: '0 20px'
  },
  chip: {
    margin: theme.spacing.unit / 2,
  },
  chipInput: {
    width: 100,
    marginLeft: 5
  }
});

export default connect(mapStateToProps, {unsetCurrentImage, addTagToImage, removeTagFromImage})(withStyles(styles)(CurrentImage));