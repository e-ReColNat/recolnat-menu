'use strict';

import React from 'react';
import Button from './Link';
import rsg from 'recolnat-style-guide';
const grey1 = rsg.colours.grisfonce;
const grey2 = rsg.colours.grisclair1;
const grey3 = rsg.colours.grisclair2;
//
// GLOBAL
//
var menuBarHeight = '35px';

//
// STYLES
//

import '../../node_modules/normalize.css/normalize.css';
require('../styles/Menu.css');

var recolnatUpperNavigationBarLinkListStyle = {
    display: 'flex',
    padding: '0px',
    margin: '0px',
    justifyContent: 'center'
};

var recolnatUpperNavigationBarLinkListItemStyle = {
    width: '150px',
    height: menuBarHeight,
    display: 'inline',
    textAlign: 'center',
    overflow: 'hidden',
    paddingLeft: '10px'
};

var recolnatUpperNavigationBarNavStyle = {
    position: 'fixed',
    top: '0px',
    backgroundColor: grey3,
    fontFamily: '"Trebuchet MS", sans-serif',
    width: '100%',
    padding: '0px',
    boxShadow: '5px 5px 5px ' + grey3
};

//
// COMP
//

import recolnatLogoUrl from '../../node_modules/recolnat-style-guide/images/recolnat_B_H40.png';

var Comp = React.createClass({
  render: function() {
    return (
        <nav className='recolnatUpperNavigationBarNav' >
            <span style={recolnatUpperNavigationBarNavStyle}>
                <ul style={recolnatUpperNavigationBarLinkListStyle}>
                    <li style={recolnatUpperNavigationBarLinkListItemStyle} ><img src={recolnatLogoUrl} height={this.props.menuHeight} /></li>
        {this.props.recolnatModules.map(function(rm) {
            return <li key={rm.url} style={recolnatUpperNavigationBarLinkListItemStyle}>
                <Button url={rm.url} label={rm.label} />
            </li>;
        })}
                </ul>
            </span>
        </nav>
    );
  }
});

module.exports = Comp;