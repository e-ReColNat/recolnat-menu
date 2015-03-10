import React from 'react';
import rsg from 'recolnat-style-guide';
const grey1 = rsg.colours.grisfonce;
const grey2 = rsg.colours.grisclair1;
const grey3 = rsg.colours.grisclair2;

//
// STYLES
//

var buttonDefault = {
  fontFamily: '"Trebuchet MS", sans-serif',
  padding: '0 5 0 5',
  width: '100%',
  textDecoration: 'none',
  whiteSpace: 'normal',
  verticalAlign: 'middle',
  display: 'block',
  fontSize: '1.15em',
  border: 'none'
};

//
// CODE
//

var Button = React.createClass({
  getInitialState: function() {
    return {
      hover: false
    };
  },
  handleClick: function() {
    window.location.href = this.props.url;
  },
  __onMouseEnter: function() {
    this.setState({hover: true});
  },
  __onMouseLeave: function() {
    this.setState({hover: false});
  },
  render: function() {
    buttonDefault.height = this.props.height;
    buttonDefault.background = this.state.hover ? grey1 : grey1;
    buttonDefault.color = this.state.hover ? grey3 : grey2;
    return (
      <span>
        <input type='button' href={this.props.url} style={buttonDefault} value={this.props.label}
          onClick={this.handleClick}
          onMouseEnter={this.__onMouseEnter}
          onMouseLeave={this.__onMouseLeave}
        />
      </span>
    );
  }
});

module.exports = Button;