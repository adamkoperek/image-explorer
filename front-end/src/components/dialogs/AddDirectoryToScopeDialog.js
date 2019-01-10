import React, {Component, Fragment} from "react"
import {connect} from 'react-redux'
import FolderIcon from '@material-ui/icons/Folder'
import {addDirectoryToScope} from '../../actions/directories.actions'
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Typography
} from '@material-ui/core'

class AddDirectoryToScopeDialog extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dialogIsOpen: false,
      directory: ''
    };
  }

  handleClickOpen = () => {
    this.setState({dialogIsOpen: true});
  };

  handleClose = () => {
    this.setState({dialogIsOpen: false, directory: ''});
  };

  handleChange = name => ({target: {value}}) => {
    this.setState({[name]: value});
  };

  handleAddDirectory = () => {
    if (this.state.directory && this.state.directory !== '') {
      this.props.addDirectoryToScope(this.state.directory);
      this.setState({dialogIsOpen: false, directory: ''});
    }
  };

  render() {
    const {currentScope} = this.props;
    return (
      <Fragment>

        <List component="nav">
          <ListItem button onClick={this.handleClickOpen}>
            <ListItemIcon>
              <FolderIcon/>
            </ListItemIcon>
            <ListItemText primary="Dodaj Folder"/>
          </ListItem>
        </List>

        <Dialog open={this.state.dialogIsOpen} onClose={this.handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Dodaj folder do przestrzeni: {currentScope.name}</DialogTitle>
          <DialogContent>
            {this.props.addError && (<Typography variant="body1" color='error'>{this.props.addError}</Typography>)}
            <TextField
              autoFocus
              margin="dense"
              id="directory"
              label="Scieżka folderu"
              type="text"
              value={this.state.directory}
              onChange={this.handleChange('directory')}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Anuluj
            </Button>
            <Button onClick={this.handleAddDirectory} color="primary">
              Dodaj folder
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

const mapStateToProps = ({scopes}) => ({
  currentScope: scopes.currentScope
});

export default connect(mapStateToProps, {addDirectoryToScope})(AddDirectoryToScopeDialog);