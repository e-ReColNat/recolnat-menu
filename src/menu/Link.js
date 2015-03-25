'use strict';

import React from 'react';
import rsg from 'recolnat-style-guide';
const grey1 = rsg.colours.grisfonce;
const grey2 = rsg.colours.grisclair1;
const grey3 = rsg.colours.grisclair2;
const vert = rsg.colours.vert;

//
// STYLES
//

require('../styles/Link.css');

var linkStyle = {
  border: '1px solid ' + grey2,
  WebkitBorderRadius: 5,
  borderRadius: 5,
  color: grey1,
  cursor: 'default',
  display: 'block',
  fontFamily: '"Trebuchet MS", sans-serif',
  fontSize: 13,
  letterSpacing: '2',
  paddingLeft: 30,
  paddingRight: 5,
  textAlign: 'center',
  textDecoration: 'none',
  textTransform: 'uppercase',
  verticalAlign: 'middle'
};

//
//var itemStyle = {
//  width: 150,
//  display: 'inline',
//  textAlign: 'center',
//  overflow: 'hidden'
//};
//
// CODE
//

var Button = React.createClass({
  componentWillMount: function() {
    linkStyle.lineHeight = this.props.contextHeight + 'px';
    linkStyle.background = 'rgba(255, 255, 255, 0.5) url(' + this.props.symbol + ') no-repeat 5px';
  },
  render: function() {
    return (
      <a className='recolnatGlobalNavigationMenuItemText' style={linkStyle} href={this.props.url}>
        {this.props.label}
      </a>
    );
  }
});

module.exports = Button;