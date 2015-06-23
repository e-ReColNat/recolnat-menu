'use strict';

import React from 'react';
import Link from './Link';
import _ from 'lodash';
import rsg from 'recolnat-style-guide';
const grey1 = rsg.colours.grisfonce;
const grey2 = rsg.colours.grisclair1;
const grey3 = rsg.colours.grisclair2;

import '../../node_modules/normalize.css/normalize.css';
import recolnatLogoUrl from '../../node_modules/recolnat-style-guide/images/recolnat_B_H40.png';

class Comp extends React.Component {

  constructor(props) {
    super(props);

    this.barStyle = {
      backgroundColor: grey3,
      fontFamily: '"Trebuchet MS", sans-serif',
      position: 'fixed',
      top: 0,
      width: '100%'
    };

    this.itemListStyle = {
      display: 'table',
      margin: '0 auto',
      padding: 0,
      textAlign: 'center'
    };

    this.itemStyle = {
      display: 'table-cell',
      overflow: 'hidden',
      paddingLeft: 7,
      paddingRight: 7,
      textAlign: 'center',
      verticalAlign: 'middle'
    };

    this.logoStyle = {
      marginTop: 2
    };

    this.logoLinkStyle = {
      cursor: 'default'
    };
  }

  componentWillMount() {
    this.logoStyle.height = this.props.menuHeight - 5;
    this.logoLinkStyle.height = this.props.menuHeight - 5;
  }

  render() {
    return (
      <nav className='recolnatGlobalNavigationMenu' style={this.barStyle}>
        <ul style={this.itemListStyle}>
          <li style={this.itemStyle} >
            <a href={this.props.projectUrl} target="_self" style={this.logoLinkStyle}>
              <img src={recolnatLogoUrl} style={this.logoStyle}/>
            </a>
          </li>
          {_.map(this.props.recolnatModules, (rm) => {
            return <li key={rm.label} style={this.itemStyle}>
              <Link
                url={rm.url}
                label={rm.label}
                symbol={rm.symbol}
                module={rm}
                contextHeight={this.props.menuHeight}/>
            </li>;
          })}
        </ul>
      </nav>
    );
  }
}

module.exports = Comp;