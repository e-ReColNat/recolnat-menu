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
    width: '150px',
    textDecoration: 'none',
    whiteSpace: 'normal',
    verticalAlign: 'middle',
    lineHeight: '30px', /* Set text height here for v-align */
    display: 'block',
    fontSize: '17px',
    border: 'none',
    backgroundColor: grey3,
    height: '30px',
    color: grey1
};

//
// CODE
//

var Button = React.createClass({
    render: function() {
        return (
            <span className='recolnatUpperNavigationBarButtonContainer'>
                <a style={linkStyle} href={this.props.url} >{this.props.label}</a>
            </span>
        );
    }
});

module.exports = Button;