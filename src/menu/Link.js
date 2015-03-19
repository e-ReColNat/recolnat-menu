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

//
// CODE
//

var Button = React.createClass({
    render: function() {
        return (
            <span>
                <a href={this.props.url} className='recolnatUpperNavigationBarButton'>{this.props.label}</a>
            </span>
        );
    }
});

module.exports = Button;