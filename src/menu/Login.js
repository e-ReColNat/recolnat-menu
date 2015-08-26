/**
 * Created by dmitri on 20/07/15.
 */

'use stric';
import React from 'react';
import rsg from 'recolnat-style-guide';
const grey1 = rsg.colours.grisfonce;
const grey2 = rsg.colours.grisclair1;
const grey3 = rsg.colours.grisclair2;
const vert = rsg.colours.vert;

class Login extends React.Component {
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

    this.symbol = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wcUDQQe1FxztgAAALhJREFUOMu9lDEOwjAMRb/xlzJxHu7AxMJdEEuLxAG4CdyNiRDFLEWqqiht0oClLFb04m//WJAOQ2VsUkkRqeVBWleYBDrnjgDeSwBmtvPen9AqnHOHQZEBsGQPVfU2vgTASHarXibZJ6D9XIVZqKqe56BTIFX1nmG+RORpZttvIoTQkUQIoUfGIsWH5HXxUFb1XlUfOckxxv1Y8jCwS05y06H8xzYlxi7yYc3XY4vl8NP11dyHzYEfWW1waF12qLkAAAAASUVORK5CYII=';
  }

  componentWillMount() {
    this.linkStyle.background = 'rgba(255, 255, 255, 0.5) url(' + this.symbol + ') no-repeat 5px';
    this.linkStyle.height = this.props.contextHeight;
    this.linkStyle.height = this.props.contextHeight - 2 * this.border - 6;
    this.linkStyle.lineHeight = this.linkStyle.height + 'px';
  }

  login() {
    // Get callback props from menu data
    var callback = "";
    for(var i = 0; i < this.props.authorizedDomains.length; ++i) {
      var domain = this.props.authorizedDomains[i].url;
      if (document.referrer.indexOf(domain) > -1) {
        callback = this.props.authorizedDomains[i].callback;
        break;
      }
    }
    window.parent.postMessage({type: "redirect", url: 'https://cas.recolnat.org/login?service=' + document.referrer + callback}, "*");
  }

  render() {
    let s = {};
    Object.assign(s, this.linkStyle, {});
    return (
      <a className='recolnatGlobalNavigationMenuItemText'
         onClick={this.login.bind(this)}
         style={s}
         target="_top"
        >
        Me connecter
      </a>
    );
  }
}

module.exports = Login;