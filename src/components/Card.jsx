var React = require('react');
var Header = require('./Header.jsx');
var SocialList = require('./SocialList.jsx');
var ContentTitle = require('./ContentTitle.jsx');

var Card = React.createClass({
    render: function () {

        var divStyle = {
            marginTop: 20
        };

        var headerStyle = {};

        var footerStyle = {
            textAlign: 'center',
            color: 'gray'
        };

        if (this.props.headerColor) {
            headerStyle.background = this.props.headerColor;
        }

        return (
            <div className="row">
                <div className="col-sm-2"></div>

                <div style={divStyle} className="col-sm-8">
                    <div className="panel panel-default">
                        <div style={headerStyle} className="panel-heading">
                            <Header image={this.props.image}
                                    header={this.props.title}
                                    subHeader={this.props.subTitle}/>
                        </div>
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-sm-12">
                                    <ContentTitle text="About me"></ContentTitle>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">

                                  <p>Hello, my name is Raf, a software engineer based in Belgium.</p>
                                  <p>During the last couple of years, I've occupied myself developing state of the art mobile applications for all major platforms with Android on top. </p>
                                  <p>Next to pure native development (Java, Objective-C, C#, ...), I'm taking my first steps into Facebooks ReactNative framework and have an interest into networking & software security.</p>
                                  <p>For my latest bio, feel free to visit me on LinkedIn or find me on Twitter.</p>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <ContentTitle text="Contact"></ContentTitle>
                                </div>
                            </div>
                            <div className="row">
                                    <SocialList />
                            </div>
                        </div>

                        <div style={footerStyle} className="panel-footer">
                            {this.props.footerText}
                        </div>
                    </div>
                </div>

            </div>
        )
    }
});

module.exports = Card;
