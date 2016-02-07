var React = require('react');
var ReactDOM = require('react-dom');
var Card = require('./components/Card.jsx');

ReactDOM.render(<Card
  title = "Raf Willems"
  subTitle = "Mobile Solutions Engineer"
  footerText = "Trying to make the world a better place, one bug at a time..."
  image = "./image/raf_suitup.jpg"/>, document.getElementById('content'));
