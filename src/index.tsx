import 'antd/dist/antd.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { ResponsiveAppBar } from './components/responsive_app_bar';

ReactDOM.render(
  <React.StrictMode>
    <ResponsiveAppBar/>
  </React.StrictMode>,
  document.getElementById('root')
)
