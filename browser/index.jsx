'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import Main from './components/Main'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {pinkA200} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

const muiTheme = getMuiTheme({
  palette: {
    textColor: pinkA200,
  },
  appBar: {
    height: 50,
  },
});


//plugin that removes onTouchTap error
injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Main />
  </MuiThemeProvider>
);


ReactDOM.render(
    <App />,
    document.getElementById('app')
)