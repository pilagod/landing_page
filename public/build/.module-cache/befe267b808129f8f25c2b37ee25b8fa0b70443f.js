/**
 * Created by pilagod on 4/20/15.
 */
var Navbar = React.createClass({displayName: "Navbar",
   render: function(){
       return(
            React.createElement("div", null, "Nav")
       )
   }
});

var Main = React.createClass({displayName: "Main",
    render: function(){
        return(
            React.createElement("div", null, "Main")
        )
    }
});

var Footer = React.createClass({displayName: "Footer",
    render: function(){
        return(
            React.createElement("div", null, "Footer")
        )
    }
});

React.render(
    React.createElement(Navbar, null),
    document.getElementById('navba')
);

React.render(
    React.createElement(Main, null),
    document.getElementById('main')
);

React.render(
    React.createElement(Footer, null),
    document.getElementById('footer')
);