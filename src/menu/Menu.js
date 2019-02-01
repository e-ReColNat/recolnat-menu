'use strict';

import React from 'react';
import cookie from "react-cookie";
import Link from './Link';
import User from './User';
import Login from './Login';
//import Logout from './Logout';
import request from "superagent";
import _ from 'lodash';
import conf from '../menu-data';

import '../../node_modules/normalize.css/normalize.css';
import '../styles/Ikaros-Light.otf';
import '../styles/Ikaros-Regular.otf';
import '../styles/App.css';

import recolnatLogoUrl from '../images/logo-recolnat.png';

class Comp extends React.Component {

  constructor(props) {
    super(props);

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

  componentDidMount() {
    var self = this;
    window.addEventListener("message", self.receiveMessage.bind(self));
  }

  receiveMessage(event) {
    var parser = document.createElement('a');
    parser.href = event.origin;
    console.log('menu frame received message from ' + event.origin);
    // Test page code chunk
    if(event.origin.indexOf("localhost:") > -1) {
      console.log("Authorizing message from localhost");
      this.setState({username: event.data.username, userProfile: event.data.userProfile});
      return;
    }
    if(event.origin == "https://wp5test.recolnat.org") {
      console.log("Authorizing message from test server");
      this.setState({username: event.data.username, userProfile: event.data.userProfile});
      return;
    }
    if(event.origin == "https://wp5prod.recolnat.org") {
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
        <li className='button'>
          <Login contextHeight={this.props.menuHeight} authorizedDomains={this.authorizedDomains}/>
        </li>;
    }
    else {
      user = <li className='button'>
        <User contextHeight={this.props.menuHeight} username={this.state.username} profile={this.state.userProfile}/>
      </li>;
      //logout =
      //  <li style={this.itemStyle}>
      //    <Logout contextHeight={this.props.menuHeight}/>
      //  </li>;
    }

    return (
      <nav className='menu'>
        <ul className='menu'>
          <li className='logo' >
            <a href={conf.projectUrl} target='_top'>
              <img src={recolnatLogoUrl} style={this.logoStyle}/>
              </a>
          </li>
          {_.map(this.props.recolnatModules, (rm) => {
            return <li key={rm.label} className='link'>
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