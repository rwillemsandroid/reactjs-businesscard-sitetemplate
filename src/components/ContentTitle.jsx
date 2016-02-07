var React = require('react');

var ContentTitle = React.createClass({
  getDefaultProps: function() {
      return {
        text: ''
      };
    },
    render: function () {
      var titleStyle={};

      if(this.props.textAlign){
        titleStyle.textAlign = this.props.textAlign;
      }

      return (
            <h4 style={titleStyle}>{this.props.text}</h4>
        )
    }
});

module.exports = ContentTitle;
