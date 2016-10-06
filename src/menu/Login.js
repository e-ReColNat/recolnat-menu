/**
 * Created by dmitri on 20/07/15.
 */

'use stric';
import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.border = 1;

    this.symbol = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wcUDQQe1FxztgAAALhJREFUOMu9lDEOwjAMRb/xlzJxHu7AxMJdEEuLxAG4CdyNiRDFLEWqqiht0oClLFb04m//WJAOQ2VsUkkRqeVBWleYBDrnjgDeSwBmtvPen9AqnHOHQZEBsGQPVfU2vgTASHarXibZJ6D9XIVZqKqe56BTIFX1nmG+RORpZttvIoTQkUQIoUfGIsWH5HXxUFb1XlUfOckxxv1Y8jCwS05y06H8xzYlxi7yYc3XY4vl8NP11dyHzYEfWW1waF12qLkAAAAASUVORK5CYII=';

    this.linkStyle = {
      cursor: 'pointer'
    };
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
    window.parent.postMessage({type: "redirect", action: "login", url: 'https://cas.recolnat.org/login?service=' + document.referrer + callback}, "*");
  }

  render() {
    return <a onClick={this.login.bind(this)} style={this.linkStyle} target="_top" >Me connecter</a>;
  }
}

export default Login;