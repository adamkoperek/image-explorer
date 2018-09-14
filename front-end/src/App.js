import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {withStyles} from '@material-ui/core/styles';

import store from './store'
import TopBar from './components/TopBar'
import Concertina from './components/Concertina'

import './App.css'

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Provider store={store}>
        <div className={classes.root}>
          <TopBar/>
          <Concertina/>
        </div>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
