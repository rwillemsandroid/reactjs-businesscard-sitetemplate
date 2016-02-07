var React = require('react');
var HeaderText = require('./HeaderText.jsx');
var SubHeaderText = require('./SubHeaderText.jsx');

var Header = React.createClass({
    render: function () {
        return (
            <div className = "row">
              <div className="col-sm-3">
                  <img className = "img img-circle img-responsive" src = {this.props.image}></img>
              </div>
              <div className="col-sm-9">
                <HeaderText text={this.props.header}/>
                <SubHeaderText text={this.props.subHeader}/>
              </div>
            </div>
        )
    }
});

module.exports = Header;
