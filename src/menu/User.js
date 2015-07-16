/**
 * Created by dmitri on 30/06/15.
 */
import React from 'react';
import rsg from 'recolnat-style-guide';
import request from 'superagent';
import url from 'urlparser';
const grey1 = rsg.colours.grisfonce;
const grey2 = rsg.colours.grisclair1;
const grey3 = rsg.colours.grisclair2;
const vert = rsg.colours.vert;

class User extends React.Component {
  constructor(props) {
    super(props);

    this.border = 1;
    this.symbol = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wYWCg8QQjZwxAAAAtRJREFUOMvVU01IG0EYfbs7OxtJkNVjm/gXqwVD/pRCi0o9KFYEkTUQqAcRLIIUCoKWYr0WobT0ZO8eG/DgofYUKh5UejF4EGlykBgE408So8nu7E4v1VpM1B47MJdv5j3e9733Af/18fl812o9PT03YkipYkNDAxKJBBhj7kAg8Npms7UqiiIrivJDluW3AJLlCIVyD42Nje9lWZ6sqKiAoihQFAU2mw2UUkiS9HhgYGBtZGTkGk4sRVZfX//S4XBMjo6OQpKkvxUIAkRR/F6KrCxhsVj0TUxMoKurC1NTU2CMwTAMGIYB0zQBgIZCoWd3nuHZ2dlpMBgEYww1NTWYn5/H/v4+LMtCNptFNBpFNpttAvD1VoVerxculyvBOb9UVSgUoKoqqqurUVdXh+HhYWQymZymabcrjMVi0DQtdn5+ftHedRAh2N3dXdve3r6by8vLy3ZCyGm5BHDO9e7ubuXOpvT29uYZYz8ZYyh1TdOM/FMO19fXkU6n+znnSyVBguCUZXmv1NYIN61RJBKJUkqfcs4vM6jr+puhoaF35TBimRkBAGprax9kMhnoug5d13F0dASPx9MKALOzszcTjo2NXRbHx8fDm5ububa2tvt+vx+WZcE0TbS3t6O5uVlbWVnZ29nZ6b/439fX9ycB09PTmJubQ1VVlXtmZuaVaZovOjs7qdfrxfHxMTweD6LRKOx2O9xuN9LpNDo6Ou7F4/ElVVVPOeef8/n8RwCpUCgEye12i4ODg98opZ8EQXjkdDqlcDgMADg5OUEikcDq6ioODg7gcrlACEFlZSX8fj82NjZooVB4QimdDAaDLQsLC18kTdM+iKL43LIsAEAul4NhGHA6nWCMweFw4PDwEKqqIhAIgBACzjkWFxextbV11fkWn89XJIIgNF0dqmVZSCaTIISAUgrTNJFKpSAIAgghkGUZkiQhHo/DsixcCPlt5sNf9QExHZ3m5MEAAAAASUVORK5CYII=';
    this.label = 'Me connecter';

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

    this.state = {username: null, userProfile: null};
  }

  componentWillMount() {
    this.linkStyle.background = 'rgba(255, 255, 255, 0.5) url(' + this.symbol + ') no-repeat 5px';
    this.linkStyle.height = this.props.contextHeight;
    this.linkStyle.height = this.props.contextHeight - 2 * this.border - 6;
    this.linkStyle.lineHeight = this.linkStyle.height + 'px';
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

  login() {
    //window.location.href = 'https://cas.recolnat.fr/login?service=' + window.location.href;
    // Get callback props from menu data
    var callback = "";
    for(var i = 0; i < this.props.authorizedDomains.length; ++i) {
      var domain = this.props.authorizedDomains[i].url;
      if (document.referrer.indexOf(domain) > -1) {
        callback = this.props.authorizedDomains[i].callback;
        break;
      }
    }
    top.window.location.replace('https://cas.recolnat.fr/login?service=' + top.window.location.href + callback);
    //var casUrl = 'https://cas.recolnat.fr/login';
    //request.post(casUrl)
    //    .send({service: window.location.href})
    //  //.send({callback: "client_name: Cas_Client"})
    //.end((err, res) => {
    //    if(err) {
    //      console.log(err)
    //    }
    //    else {
    //      console.log(res);
    //      document.body = res.text;
    //    }
    //});
    //request.post(casUrl)
    //  .send({service: window.location.href})
    //  .send({username: 'chlorofil'})
    //  .send({password: 'passe'})
    //  .send({rememberMe: true})
    //.end((err, res) => {
    //
    //  })
  }

  render() {
    let s = {};
    Object.assign(s, this.linkStyle, {});
    if (this.label.length === 0) s.paddingRight = 0;
    var self = this;
    if(this.state.username) {
      return(
        <span className='recolnatGlobalNavigationMenuItemText'
              style={s}
              >Bienvenue, {this.state.username}
        </span>
      );
    }
    else {
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
}

module.exports = User;