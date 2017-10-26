import React from 'react';
import { render } from 'react-dom';
import { getAllProducts } from './actions';
import Root from './container/Root';


render(
  <Root />,
  document.getElementById('root')
)
