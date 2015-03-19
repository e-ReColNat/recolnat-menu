'use strict';

import React from 'react';

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