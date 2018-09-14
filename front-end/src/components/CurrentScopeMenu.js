import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getScopes, createScope, setCurrentScope} from '../actions/scopes.actions'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Menu,
  MenuItem,
  TextField,
  Typography,
  Divider
} from "@material-ui/core";

class CurrentScopeMenu extends Component {

  constructor (props) {
    super(props);

    this.state = {
      anchorEl: null,
      dialogIsOpen: false,
      newScopeName: ''
    };
  }

  componentWillReceiveProps(nextProps, state) {
    if (nextProps.username && nextProps.username !== this.props.username) {
      this.props.getScopes();
    }
  }

  handleOpenMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleCloseMenu = () => {
    this.setState({ anchorEl: null });
  };

  handleOpenDialog = () => {
    this.setState({anchorEl: null, dialogIsOpen: true});
  };

  handleCloseDialog = () => {
    this.setState({dialogIsOpen: false, newScopeName: ''});
  };

  handleChange = name => ({target: {value}}) => {
    this.setState({[name]: value});
    console.log(this.state.newScopeName);
  };

  handleCreateScope = () => {
    this.props.createScope(this.state.newScopeName);
  };

  handleSelectScope = (scope) => {
    this.props.setCurrentScope(scope);
  };


  render() {

    const { anchorEl } = this.state;
    return (this.props.username && (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleOpenMenu}>
          {this.props.currentScope ? this.props.currentScope.name : 'Wybierz przestrzeń'}
        </Button>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleCloseMenu}>

          {this.props.scopes ? this.props.scopes.map((scope, i) => (<MenuItem key={i}onClick={this.handleSelectScope(scope)}>{scope.name}</MenuItem>)) : (<div></div>)}
          <Divider light />
          <MenuItem onClick={this.handleOpenDialog}>Utwórz przestrzeń</MenuItem>
        </Menu>

        <Dialog open={this.state.dialogIsOpen} onClose={this.handleCloseDialog} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Utwórz przestrzeń</DialogTitle>
          <DialogContent>
            {this.props.loginError && (<Typography variant="body2" color='error'>{this.props.newScopeError}</Typography>)}
            <TextField
              autoFocus
              margin="dense"
              id="new-scope-name"
              label="Nazwa nowej przestrzeni"
              type="text"
              value={this.state.newScopeName}
              onChange={this.handleChange('newScopeName')}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCloseDialog} color="primary">
              Anuluj
            </Button>
            <Button onClick={this.handleCreateScope} color="primary">
              Utwórz
            </Button>
          </DialogActions>
        </Dialog>

      </div>


    ));
  }
}

const mapStateToProps = ({auth, scopes}) => ({
  username: auth.user ? auth.user.username : null,
  scopes: scopes.scopes,
  currentScope: scopes.currentScope,
  newScopeError: null
});

export default connect(mapStateToProps, {getScopes, createScope, setCurrentScope})(CurrentScopeMenu);
