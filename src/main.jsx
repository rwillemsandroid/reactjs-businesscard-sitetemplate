var React = require('react');
var ReactDOM = require('react-dom');
var Card = require('./components/Card.jsx');

ReactDOM.render(<Card
  title = "Raf Willems"
  subTitle = "Mobile Solutions Engineer"
  footerText = "Made with <3 by @RW_Spaf"
  image = "./image/raf_suitup.jpg"/>, document.getElementById('content'));
