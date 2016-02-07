var React = require('react');

var SubHeaderText = React.createClass({
  getDefaultProps: function() {
      return {
        text: ''
      };
    },

    render: function () {
        return (
            <p>{this.props.text}</p>
        )
    }
});

module.exports = SubHeaderText;
