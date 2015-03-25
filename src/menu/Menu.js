'use strict';

import React from 'react';
import Link from './Link';
import rsg from 'recolnat-style-guide';
import _ from 'lodash';
const grey1 = rsg.colours.grisfonce;
const grey2 = rsg.colours.grisclair1;
const grey3 = rsg.colours.grisclair2;

//
// STYLES
//

import '../../node_modules/normalize.css/normalize.css';
import '../styles/Menu.css';

const barStyle = {
  backgroundColor: grey3,
  boxShadow: '5px 5px 5px ' + grey3,
  fontFamily: '"Trebuchet MS", sans-serif',
  paddingTop: 5, // to compensate the shadow
  position: 'fixed',
  top: 0,
  width: '100%'
};

const itemListStyle = {
  display: 'table',
  margin: '0 auto',
  padding: 0,
  textAlign: 'center'
};

var itemStyle = {
  display: 'table-cell',
  overflow: 'hidden',
  paddingLeft: 10,
  paddingRight: 10,
  textAlign: 'center',
  verticalAlign: 'middle'
};

var logoStyle = {
  paddingBottom: 1,
  paddingTop: 1
};

var linkItemStyle = {};
Object.assign(linkItemStyle, itemStyle, {});

//
// COMP
//

import recolnatLogoUrl from '../../node_modules/recolnat-style-guide/images/recolnat_B_H40.png';

const Comp = React.createClass({
  componentWillMount: function() {
    logoStyle.height = this.props.menuHeight - 2;
  },
  render: function() {
    return (
      <nav className='recolnatGlobalNavigationMenu' style={barStyle}>
        <ul style={itemListStyle}>
          <li style={itemStyle} >
            <img src={recolnatLogoUrl} style={logoStyle}/>
          </li>
            {_.map(this.props.recolnatModules, (rm) => {
              return <li key={rm.label} style={linkItemStyle}>
                <Link url={rm.url} label={rm.label} symbol={rm.symbol} contextHeight={this.props.menuHeight}/>
              </li>;
            })}
        </ul>
      </nav>
    );
  }
});

module.exports = Comp;