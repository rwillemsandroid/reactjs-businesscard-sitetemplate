var React = require('react');
var Header = require('./Header.jsx');
var SocialList = require('./SocialList.jsx');

var Card = React.createClass({
  render: function () {

    var divStyle ={
      marginTop:10
    };
    var headerStyle={};

    var footerStyle ={
      textAlign: 'center',
      color: 'gray'
    };

    if(this.props.headerColor){
      headerStyle.background=this.props.headerColor;
    }

    return (
      <div className ="row">
        <div className= "col-sm-2"></div>

        <div style={divStyle} className="col-sm-8">
          <div className ="panel panel-default">
            <div style ={headerStyle} className = "panel-heading">
              <Header image = {this.props.image}
                      header={this.props.title}
                      subHeader={this.props.subTitle}/>
            </div>
            <div className = "panel-body">
                <SocialList />
            </div>

            <div style ={footerStyle} className="panel-footer">
              {this.props.footerText}
            </div>
          </div>
        </div>

      </div>
    )
  }
});

module.exports = Card;
