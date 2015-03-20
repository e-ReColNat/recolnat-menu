'use strict';

import React from 'react';
import rsg from 'recolnat-style-guide';
const grey1 = rsg.colours.grisfonce;
const grey2 = rsg.colours.grisclair1;
const grey3 = rsg.colours.grisclair2;

//
// STYLES
//

require('../styles/Link.css');

var linkStyle = {
  fontFamily: '"Trebuchet MS", sans-serif',
  padding: '2px 4px 2px 4px',
  width: '100%',
  textDecoration: 'none',
  whiteSpace: 'normal',
  verticalAlign: 'middle',
  display: 'block',
  fontSize: 17,
  border: 'none',
  backgroundColor: grey3,
  height: '100%',
  color: grey1
};

//
// CODE
//

var Button = React.createClass({
  componentWillMount: function() {
    linkStyle.lineHeight = this.props.itemHeight;
  },
  render: function() {
    return (
      <span className='recolnatUpperNavigationBarButtonContainer'>
        <a style={linkStyle} href={this.props.url} >{this.props.label}</a>
      </span>
    );
  }
});

module.exports = Button;