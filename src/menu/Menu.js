'use strict';

import React from 'react';
import Button from './Link';
import recolnatLogoUrl from './recolnat-logo.png';

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
  backgroundColor: '#E8E8E6',
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

//
// COMP

var Comp = React.createClass({
  render: function() {
    compStyle.height = this.props.menuHeight;
    return (
      <nav style={compStyle}>
        <ul style={linksListStyle}>
            <li style={linkItemStyle} ><img src={recolnatLogoUrl} height={this.props.menuHeight} /></li>
        {this.props.recolnatModules.map(function(rm) {
          return <li key={rm.url} style={linkItemStyle}>
              <Button url={rm.url} label={rm.label} height={compStyle.height} />
          </li>
        })}
        </ul>
      </nav>
    );
  }
});

module.exports = Comp;