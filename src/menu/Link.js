import React from 'react';

//
// STYLES
//

var buttonDefault = {
//    borderRadius: '28px',
    fontFamily: '"Trebuchet MS", sans-serif',
    color: '#ffffff',
    fontSize: '17px',
    padding: '2px 4px 2px 4px',
    width: '150px',
    textDecoration: 'none',
    whiteSpace: 'normal'
};

var buttonHover = {
    background: '#504A4A',
    textDecoration: 'none'
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