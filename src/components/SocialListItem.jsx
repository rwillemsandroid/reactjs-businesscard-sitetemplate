var React = require('react');

var SocialListItem = React.createClass({

    render: function () {
      var labelStyle ={
        textAlign: 'center',
      };
      var iconStyle ={
        margin:5,
        padding:5
      };

        return (
              <div className="col-sm-2">
                <a href={this.props.url}>
                    <div style ={iconStyle}>
                    <img className="img-responsive" src={this.props.thumbnail}></img>
                    </div>
                    <div style={labelStyle}>
                        <span>{this.props.label}</span>
                    </div>
                </a>
              </div>
        )
    }
});

module.exports = SocialListItem;
