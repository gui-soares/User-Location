import React, { Fragment } from 'react';
import './config/ReactotronConfig';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Provider } from 'react-redux';
import store from './store';

import Routes from './routes';
import GlobalStyles from './styles/global';
// import { Container } from './styles';

const App = () => (
  <Provider store={store}>
    <Fragment>
      <GlobalStyles />
      <Routes />
      <ToastContainer autoClose={5000} />
    </Fragment>
  </Provider>
);

export default App;
