'use strict';

import React from 'react';
import Button from './Link';
import rsg from 'recolnat-style-guide';
const grey1 = rsg.colours.grisfonce;
const grey2 = rsg.colours.grisclair1;
const grey3 = rsg.colours.grisclair2;

//
// STYLES
//

import '../../node_modules/normalize.css/normalize.css';
import '../styles/Menu.css';

const barStyle = {
  position: 'fixed',
  top: 0,
  backgroundColor: grey3,
  fontFamily: '"Trebuchet MS", sans-serif',
  width: '100%',
  padding: 0,
  boxShadow: '5px 5px 5px ' + grey3
};

const itemsStyle = {
  display: 'flex',
  padding: 0,
  margin: 0,
  justifyContent: 'center'
};

var itemStyle = {
  width: 150,
  display: 'inline',
  textAlign: 'center',
  overflow: 'hidden'
};

var logoStyle = {
  paddingTop: 1,
  paddingBottom: 1
};

//
// COMP
//

import recolnatLogoUrl from '../../node_modules/recolnat-style-guide/images/recolnat_B_H40.png';

const Comp = React.createClass({
  componentWillMount: function() {
    itemStyle.height = this.props.menuHeight;
    logoStyle.height = this.props.menuHeight - 2;
  },
  render: function() {
    return (
      <nav className='recolnatUpperNavigationBarNav' >
        <span style={barStyle}>
          <ul style={itemsStyle}>
            <li style={itemStyle} >
              <img src={recolnatLogoUrl} style={logoStyle}/>
            </li>
            {this.props.recolnatModules.map((rm) => {
              return <li key={rm.url} style={itemStyle}>
                <Button url={rm.url} label={rm.label} itemHeight={'30px'} />
              </li>;
            })}
          </ul>
        </span>
      </nav>
    );
  }
});

module.exports = Comp;