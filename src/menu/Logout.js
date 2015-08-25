/**
 * Created by dmitri on 20/07/15.
 */
'use strict';
import React from 'react';
import rsg from 'recolnat-style-guide';
const grey1 = rsg.colours.grisfonce;
const grey2 = rsg.colours.grisclair1;
const grey3 = rsg.colours.grisclair2;
const vert = rsg.colours.vert;

class Logout extends React.Component {
  constructor(props) {
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

    this.symbol = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wcUDQQALlNO1QAAAMBJREFUOMu1lD0OwjAMhV9iSx7IWVi5ATMLd0Es7RG4CRsXo1NIZJYi0Tb9S9MnZbGiL/55sUFaikzZVNAYk8uDKZ1hEigiVwCfJQBVPXnvbyglEbm0FSkAHfSQmav/CwCUiB5ZrzFz3Ye1scUZTsKI6D4Fc84NgPyDhRCqnnXeAI5E9BzhHZqmOYtIN0pEg8xWnPmhbBXHGGtmRqpka+0LgIyVHGNcN+Gcoexnm1xjzwK3fj0usRx2XV/FfVgc+AUBmmzS+FLlfAAAAABJRU5ErkJggg==';
  }

  componentWillMount() {
    this.linkStyle.background = 'rgba(255, 255, 255, 0.5) url(' + this.symbol + ') no-repeat 5px';
    this.linkStyle.height = this.props.contextHeight;
    this.linkStyle.height = this.props.contextHeight - 2 * this.border - 6;
    this.linkStyle.lineHeight = this.linkStyle.height + 'px';
  }

  logout() {
    top.window.postMessage({type: "redirect", url: 'https://cas.recolnat.org/logout'}, top.window.location.href);
    //top.window.location.replace('https://cas.recolnat.org/logout');
  }

  render() {
    let s = {};
    Object.assign(s, this.linkStyle, {});
    return(
      <a className='recolnatGlobalNavigationMenuItemText'
         onClick={this.logout.bind(this)}
         style={s}
         target="_top"
        >
        Deconnexion
      </a>
    );
  }
}

module.exports = Logout;