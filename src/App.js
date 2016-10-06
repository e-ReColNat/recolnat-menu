'use strict';

import React from  'react';
import Menu from './menu/Menu';
import menuData from './menu-data';

import './styles/App.css';

const Comp = React.createClass({
  render: function() {
    return (
      <Menu recolnatModules={menuData.modules} menuHeight={menuData.height} projectUrl={menuData.projectUrl}/>
    );
  }
});

export default Comp;