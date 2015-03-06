'use strict';

import React from 'react';

//
// STYLES
//

import '../../node_modules/normalize.css/normalize.css';

var fullWH = {
  width: '100%',
  height: '100%'
};

var compStyle = {
  position: 'fixed',
  top: 0,
  borderBottom: '1px solid black',
  backgroundColor: '#EEEEEE',
  fontFamily: '"Trebuchet MS", sans-serif',
  width: '100%',
  padding: 0
};

var linksListStyle = {
  display: 'flex',
  padding: 0,
  margin: 0
};

var linkItemStyle = Object.assign(fullWH, {
  display: 'inline',
  textAlign: 'center',
  overflow: 'hidden'
});

var linkStyle = {
  display: 'block',
  textTransform: 'uppercase',
  textDecoration: 'none',
  fontSize: '111%',
  verticalAlign: 'middle'
};

//
// COMP
//

var Comp = React.createClass({
  render: function() {
    compStyle.height = this.props.menuHeight;
    linkStyle.height = this.props.menuHeight;
    linkStyle.lineHeight = this.props.menuHeight + 'px';
    return (
      <nav style={compStyle}>
        <ul style={linksListStyle}>
        {this.props.recolnatModules.map(function(rm) {
          return <li key={rm.url} style={linkItemStyle}>
            <a href={rm.url} style={linkStyle}>{rm.label}</a>
          </li>
        })}
        </ul>
      </nav>
    );
  }
});

module.exports = Comp;