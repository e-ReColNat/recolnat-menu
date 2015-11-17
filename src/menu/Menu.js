'use strict';

import React from 'react';
import cookie from "react-cookie";
import Link from './Link';
import User from './User';
import Login from './Login';
import Logout from './Logout';
import request from "superagent";
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
    //this.checkLoginState();
  }

  componentDidMount() {
    var self = this;
    window.addEventListener("message", self.receiveMessage.bind(self));
  }

  receiveMessage(event) {
    var parser = document.createElement('a');
    parser.href = event.origin;
    // Test page code chunk
    if(event.origin.indexOf("localhost:") > -1) {
      console.log("Authorizing message from localhost");
      this.setState({username: event.data.username, userProfile: event.data.userProfile});
      return;
    }
    if(event.origin == "http://wp5test.recolnat.org") {
      console.log("Authorizing message from test server");
      this.setState({username: event.data.username, userProfile: event.data.userProfile});
      return;
    }
    if(event.origin == "http://wp5prod.recolnat.org") {
      console.log("Authorizing message from prod server");
      this.setState({username: event.data.username, userProfile: event.data.userProfile});
      return;
    }
    if(parser.hostname.indexOf('recolnat.org') > 1) {
      console.log("Authorizing message from domain recolnat.org");
      this.setState({username: event.data.username, userProfile: event.data.userProfile});
      return;
    }
    for(var i = 0; i < this.authorizedDomains.length; ++i) {
      var domain = this.authorizedDomains[i].url;
      if (event.origin.indexOf(domain) > -1) {
        if (event.data.type == "user") {
          this.setState({username: event.data.username, userProfile: event.data.userProfile});
          return;
        }
      }
    }
    console.log("Origin " + event.origin + " is not authorized as POST message source for the menu bar");
  }

  render() {
    var user = null;
    var login = null;
    var logout = null;

    if(this.state.username == null) {
      login =
        <li style={this.itemStyle}>
          <Login contextHeight={this.props.menuHeight} authorizedDomains={this.authorizedDomains}/>
        </li>;
    }
    else {
      user = <li style={this.itemStyle}>
        <User contextHeight={this.props.menuHeight} username={this.state.username} profile={this.state.userProfile}/>
      </li>;
      logout =
        <li style={this.itemStyle}>
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

export default Comp;