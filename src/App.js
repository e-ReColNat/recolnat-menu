'use strict';

import React from  'react';
import Menu from './menu/Menu';
import Lorem from  'react-lorem-component';
import menuData from './menu-data';

import './App.css';

const Comp = React.createClass({
  getDefaultProps: () => {
    return {
      siteStyle: {
        marginTop: menuData.height + 50
      }
    };
  },
  render: function() {
    return (
      <div>
        <Menu recolnatModules={menuData.modules} menuHeight={menuData.height}/>
        <Lorem id="content" style={this.props.siteStyle} count={69}/>
      </div>
    );
  }
});

module.exports = Comp;