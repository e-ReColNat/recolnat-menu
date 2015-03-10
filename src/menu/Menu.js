'use strict';

import React from 'react';
import Button from './Link';
import rsg from 'recolnat-style-guide';

//
// STYLES
//

import '../../node_modules/normalize.css/normalize.css';

const grey1 = rsg.colours.grisfonce;
const grey2 = rsg.colours.grisclair1;
const grey3 = rsg.colours.grisclair2;

var fullWH = {
  width: '100%',
  height: '100%'
};

var compStyle = {
  position: 'fixed',
  top: 0,
  borderBottom: '1px solid black',
  backgroundColor: grey1,
  fontFamily: '"Trebuchet MS", sans-serif',
  width: '100%',
  padding: 0,
  boxShadow: '-1px 2px 5px 1px rgba(0, 0, 0, 0.7)'
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

var logoStyle = {
  marginTop: 5
};

//
// COMP
//

import recolnatLogoUrl from '../../node_modules/recolnat-style-guide/images/recolnat_W_H40.png';

var Comp = React.createClass({
  render: function() {
    compStyle.height = this.props.menuHeight;
    return (
      <nav style={compStyle}>
        <ul style={linksListStyle}>
          <li style={linkItemStyle}>
            <img src={recolnatLogoUrl} style={logoStyle}/>
          </li>
              {this.props.recolnatModules.map(function(rm) {
                return <li key={rm.label} style={linkItemStyle}>
                  <Button url={rm.url} label={rm.label} height={compStyle.height} />
                </li>
              })}
        </ul>
      </nav>
    );
  }
});

module.exports = Comp;