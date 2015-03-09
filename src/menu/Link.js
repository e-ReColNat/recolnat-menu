import React from 'react';

//
// STYLES
//

var buttonDefault = {
    fontFamily: '"Trebuchet MS", sans-serif',
    padding: '2px 4px 2px 4px',
    width: '150px',
    textDecoration: 'none',
    whiteSpace: 'normal',
    verticalAlign: 'middle',
    display: 'block',
    fontSize: '17px'
};

//
// CODE
//

var Button = React.createClass({
    getInitialState : function() {
        return {
            hover : false
        };
    },
    handleClick : function () {
        window.location.href = this.props.url;
    },
    __onMouseEnter: function(){
        this.setState({hover: true});
    },
    __onMouseLeave: function(){
        this.setState({hover: false});
    },
    render: function() {
        buttonDefault.height = this.props.height;
        buttonDefault.background = this.state.hover ? '#504A4A' : '#D0CCCB';
        buttonDefault.color = this.state.hover ? '#ffffff' : '#000000';
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