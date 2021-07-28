import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import CustomSwitch from './CustomSwitch';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import PageNotFound from '../pages/PageNotFound';
import Theme from '../components/theme/Theme';
import { ThemeProvider } from '@material-ui/core';

function App() {
  return (
    <ThemeProvider theme={ Theme }>
      <BrowserRouter>
        <CustomSwitch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/Dashboard" component={ Dashboard } />
          <Route path='/error404' component={ PageNotFound } />
          <Redirect from='*' to='/error404' />
        </CustomSwitch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
