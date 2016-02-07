var React = require('react');

var HeaderText = React.createClass({
  getDefaultProps: function() {
      return {
        text: ''
      };
    },
    render: function () {
        return (
            <h1 id="header">{this.props.text}</h1>
        )
    }
});

module.exports = HeaderText;
