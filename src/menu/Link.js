'use strict';

import React from 'react';

require('../styles/App.css');

class Comp extends React.Component {

  constructor(props) {
    super(props);

    this.border = 1;

    this.state = {active: false};
  }

  displayTooltip(event) {
    if(this.props.module.hover) {
      event.preventDefault();
      alert(this.props.module.hover);
    }
  }

  componentDidMount() {
    var location = document.referrer;
    if(location.indexOf(this.props.url) > -1) {
      this.setState({active:true});
    }
  }

  render() {
    return <span className='link-wrapper'>
      <a href={this.props.url}  target="_top">{this.props.label}</a>
      <i className='fa fa-leaf menu-icon' />
      </span>;
  }
}

export default Comp;