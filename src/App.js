'use strict';

import React from  'react';
import Menu from './menu/Menu';
import Lorem from  'react-lorem-component';
import recolnatModules from './recolnat-modules';
import './App.css';

var menuHeight = 35;
var siteStyle = {
  marginTop: menuHeight + 5
};

var Comp = React.createClass({
  render: function() {
    return (
      <div>
        <Menu recolnatModules={recolnatModules} menuHeight={menuHeight}/>
        <Lorem id="content" style={siteStyle}/>
      </div>
    );
  }
});

module.exports = Comp;