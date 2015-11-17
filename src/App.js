'use strict';

import React from  'react';
import Menu from './menu/Menu';
import menuData from './menu-data';

import './App.css';

const Comp = React.createClass({
  getDefaultProps: () => {
    return {
      siteStyle: {
        marginTop: menuData.height + 100,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 500,
        fontFamily: 'serif',
        fontStyle: 'italic',
        fontSize: '150%',
        textAlign: 'justify'
      }
    };
  },
  render: function() {
    return (
      <Menu recolnatModules={menuData.modules} menuHeight={menuData.height} projectUrl={menuData.projectUrl}/>
    );
  }
});

export default Comp;