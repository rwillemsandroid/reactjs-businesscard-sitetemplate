var React = require('react');
var SocialListItem = require('./SocialListItem.jsx');

var ingredients =[
    {"id": 1, "thumbnail": "./image/icon/ic_linkedin.png", "label":"LinkedIn", "url":"https://www.linkedin.com/in/willemsraf"},
    {"id": 2, "thumbnail": "./image/icon/ic_twitter.png", "label":"Twitter", "url":"https://twitter.com/RW_Spaf"},
    {"id": 3, "thumbnail": "./image/icon/ic_googleplus.png", "label":"Google+", "url":"https://plus.google.com/+rafwillems"},
    {"id": 4, "thumbnail": "./image/icon/ic_github.png", "label":"Github", "url":"https://github.com/rwillemsandroid/"},
    {"id": 5, "thumbnail": "./image/icon/ic_stackoverflow.png", "label":"StackOverflow", "url":"http://stackoverflow.com/users/3708094/spaf"}
  ];

//rwillemsandroid

var SocialList = React.createClass({

    render: function () {
        var listItems = ingredients.map(function (item) {
            return <SocialListItem key={item.id}
                                  thumbnail={item.thumbnail}
                                  label ={item.label}
                                  url ={item.url}/>
        });

        return (<div>{listItems}</div>);
    }

});

module.exports = SocialList;
