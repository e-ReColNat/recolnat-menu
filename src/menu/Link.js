'use strict';

import React from 'react';
import rsg from 'recolnat-style-guide';
const grey1 = rsg.colours.grisfonce;
const grey2 = rsg.colours.grisclair1;
const grey3 = rsg.colours.grisclair2;
const vert = rsg.colours.vert;

require('../styles/Link.css');

class Comp extends React.Component {

  constructor(props) {
    super(props);

    this.border = 1;

    this.linkStyle = {
      border: this.border + 'px solid ' + grey2,
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
  }

  displayTooltip(event) {
    if(this.props.module.hover) {
      event.preventDefault();
      alert(this.props.module.hover);
    }
  }

  componentWillMount() {
    this.linkStyle.background = 'rgba(255, 255, 255, 0.5) url(' + this.props.symbol + ') no-repeat 5px';
    this.linkStyle.height = this.props.contextHeight;
    this.linkStyle.height = this.props.contextHeight - 2 * this.border - 6;
    this.linkStyle.lineHeight = this.linkStyle.height + 'px';
  }

  render() {

    let s = {};
    Object.assign(s, this.linkStyle, {});
    if (this.props.label.length === 0) s.paddingRight = 0;
    var self = this;

    return (
      <a className='recolnatGlobalNavigationMenuItemText'
         onClick={this.displayTooltip.bind(this)}
        style={s}
        href={this.props.url}
        target="_blank"
      >
        {this.props.label}
      </a>
    );
  }
}

module.exports = Comp;