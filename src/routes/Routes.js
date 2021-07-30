import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import CustomSwitch from './CustomSwitch';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Installation from '../pages/Installation';
import Development from '../pages/Development';
import Libraries from '../pages/Libraries';
import Components from '../pages/Components';
import PageNotFound from '../pages/PageNotFound';
import Theme from '../components/theme/Theme';
import { ThemeProvider } from '@material-ui/core';

function App() {
  return (
    <ThemeProvider theme={ Theme }>
      <BrowserRouter>
        <CustomSwitch>
          <Route exact path='/Home' component={ Home } />
          <Route exact path='/Dashboard' component={ Dashboard } />
          <Route exact path='/Installation' component={ Installation } />
          <Route exact path='/Development' component={ Development } />
          <Route exact path='/Libraries' component={ Libraries } />
          <Route exact path='/Components' component={ Components } />
          <Route path='/error404' component={ PageNotFound } />
          <Redirect from='*' to='/error404' />
        </CustomSwitch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
