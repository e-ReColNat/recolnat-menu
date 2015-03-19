'use strict';

import React from 'react';
import Button from './Link';
import rsg from 'recolnat-style-guide';

//
// STYLES
//

import '../../node_modules/normalize.css/normalize.css';
require('../styles/Menu.css');

//
// COMP
//

import recolnatLogoUrl from '../../node_modules/recolnat-style-guide/images/recolnat_W_H40.png';

var Comp = React.createClass({
  render: function() {
    return (
        <nav className='recolnatUpperNavigationBarNav'>
          <ul className='recolnatUpperNavigationBarLinkList'>
            <li className='recolnatUpperNavigationBarLinkListItem' ><img src={recolnatLogoUrl} height={this.props.menuHeight} /></li>
        {this.props.recolnatModules.map(function(rm) {
          return <li key={rm.url} className='recolnatUpperNavigationBarLinkListItem'>
            <Button url={rm.url} label={rm.label} />
          </li>;
        })}
          </ul>
        </nav>
    );
  }
});

module.exports = Comp;