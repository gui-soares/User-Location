import React, { Fragment } from 'react';

// import { Container } from './styles';

import Map from '../../components/Map';
import Form from '../../components/Form';
import LeftBar from '../../components/LeftBar';

const Main = () => (
  <Fragment>
    <Map />
    <Form />
    <LeftBar />
  </Fragment>
);

export default Main;
