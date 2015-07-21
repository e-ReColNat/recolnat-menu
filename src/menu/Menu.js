'use strict';

import React from 'react';
import Link from './Link';
import User from './User';
import Login from './Login';
import Logout from './Logout';
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

    // Extract list of trusted domains from props
    this.authorizedDomains = this.props.recolnatModules.map(function(mod) {
      var callback = null;
      if(mod.callback) {
        callback = mod.callback;
      }
      return {url: mod.domain, callback: callback};
    });

    this.state = {username: null, userProfile: null};
  }

  componentWillMount() {
    this.logoStyle.height = this.props.menuHeight - 5;
    this.logoLinkStyle.height = this.props.menuHeight - 5;
    window.addEventListener("message", this.receiveMessage.bind(this), false);
  }

  receiveMessage(event) {
    console.log("receiving message " + event +  " from " + event.origin);
    // Test page code chunk
    if(event.origin == "http://wp5test.mnhn.fr") {
      console.log("Authorizing message from test server");
      var message = event.data;
      this.setState({username: message.username, userProfile: message.userProfileUrl});
      return;
    }
    for(var i = 0; i < this.props.authorizedDomains.length; ++i) {
      var domain = this.props.authorizedDomains[i].url;
      if (domain.indexOf(event.origin) > -1) {
        var message = JSON.parse(event.data);
        if (message.type == "user") {
          this.setState({username: message.username, userProfile: message.userProfileUrl});
          return;
        }
      }
    }
  }

  render() {
    var user;
    var login;
    var logout;
    if(this.state.username == null) {
      login =
        <li style={this.itemStyle}>
          <Login contextHeight={this.props.menuHeight} authorizedDomains={this.authorizedDomains}/>
        </li>;
    }
    else {
      user = <li style={this.itemStyle}>
        <User contextHeight={this.props.menuHeight} username={this.state.username}/>
      </li>;
      logout = <li style={this.itemStyle}>
        <Logout contextHeight={this.props.menuHeight}/>
      </li>;
    }
    return (
      <nav className='recolnatGlobalNavigationMenu' style={this.barStyle}>
        <ul style={this.itemListStyle}>
          <li style={this.itemStyle} >
            <a href={this.props.projectUrl} target="_top" style={this.logoLinkStyle}>
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
          {login}
          {user}
          {logout}
        </ul>
      </nav>
    );
  }
}

module.exports = Comp;