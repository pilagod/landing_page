/**
 * Created by pilagod on 4/20/15.
 */

/*******************************/
/*          Main Page          */
/*******************************/

var Navbar = React.createClass({displayName: "Navbar",
    getInitialState: function(){
        return({data: []})
    },
    componentDidMount: function(){
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function(data){
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        })
    },
    render: function(){
        var linkNode = this.state.data.map(function(link, i){
            return (
                React.createElement("li", {key: i}, 
                    React.createElement("a", {href: link.url}, link.title)
                )
            )
        });
        return(
            React.createElement("nav", {"data-0": "background: transparent", "data-100": "background: rgba(241, 139, 0, 0.7)"}, 
                React.createElement("div", {className: "content"}, 
                    React.createElement("ul", {className: "pull-left"}, 
                        linkNode
                    ), 
                    React.createElement("ul", {className: "pull-right"}, 
                        React.createElement("li", null, React.createElement("a", {href: ""}, React.createElement("i", {className: "fa fa-facebook-square fa-lg"}))), 
                        React.createElement("li", null, React.createElement("a", {href: ""}, React.createElement("i", {className: "fa fa-envelope-square fa-lg"})))
                    )
                )
            )
        )
    }
});

var Main = React.createClass({displayName: "Main",
    render: function(){
        return(
            React.createElement("div", null, 
                React.createElement(Index, null), 
                React.createElement(Intro, null), 
                React.createElement(Invitation, {url: "/json/index/invitation.json"}), 
                React.createElement(Faq, {url: "/json/index/faq.json"})
            )
        )
    }
});

var Footer = React.createClass({displayName: "Footer",
    render: function(){
        return(
            React.createElement("footer", null, 
                React.createElement("img", {className: "background-image", src: "/img/index/footer.png"}), 
                React.createElement("div", {className: "content"}, 
                    "test"
                )
            )
        )
    }
});

var Index = React.createClass({displayName: "Index",
    render: function(){
        return(
            React.createElement("section", {id: "index"}, 
                React.createElement("img", {className: "background-image", src: "/img/index/bg1.png"}), 
                React.createElement("div", {className: "text-center"}, 
                    React.createElement("img", {src: "/img/index/apply_button.png"}), 
                    React.createElement("img", {src: "/img/index/mentor_button.png"}), 
                    React.createElement("img", {src: "/img/index/sponsor_button.png"})
                )
            )
        )
    }
});

var Intro = React.createClass({displayName: "Intro",
    render: function(){
        return(
            React.createElement("section", {id: "intro"}, 
                React.createElement("img", {className: "header", src: "/img/index/intro.png"}), 
                React.createElement("div", {className: "content"}, 
                    React.createElement("img", {className: "pull-left", src: "/img/index/left_double_quot.png"}), 
                    React.createElement("img", {className: "pull-right", src: "/img/index/right_double_quot.png"}), 
                    React.createElement("div", null, 
                        React.createElement("p", null, "HackNTU is a carnival for Hackers aiming to bridge Asian hacker community with the world. We are not only holding a competition but also a wide variety of Summit to inspire talented youth hackers. Students around the world are invited to join their peers brainstorming crazy ideas and make them real in 40 hours. ")
                    )
                )
            )
        )
    }
});

var Invitation = React.createClass({displayName: "Invitation",
    getInitialState: function(){
        return({data: []})
    },
    componentDidMount: function(){
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function(data){
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        })
    },
    render: function(){
        var invitedTeamNode = this.state.data.map(function(team, i){
            return (
                React.createElement("img", {key: i, src: team.img_src})
            )
        });
        return(
            React.createElement("section", {id: "invitation"}, 
                React.createElement("img", {className: "header", src: "/img/index/invitation.png"}), 
                React.createElement("div", {className: "content"}, 
                    invitedTeamNode
                )
            )
        )
    }
});

var Faq = React.createClass({displayName: "Faq",
    getInitialState: function(){
        return({data: []})
    },
    componentDidMount: function(){
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function(data){
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        })
    },
    render: function(){
        var faqContentNode = this.state.data.map(function(faq, i){
            return (
                React.createElement("div", {key: i, className: "text-center"}, 
                    React.createElement("div", {className: "inner-header"}, 
                        React.createElement("h3", null, faq.title)
                    ), 
                    React.createElement("div", {className: "inner-content"}, 
                        faq.content
                    )
                )
            )
        });
        return(
            React.createElement("section", {id: "faq"}, 
                React.createElement("img", {className: "header", src: "/img/index/FAQ.png"}), 
                React.createElement("div", {className: "content"}, 
                    faqContentNode
                )
            )
        )
    }
});


/*******************************/
/*           Render            */
/*******************************/

React.render(React.createElement(Navbar, {url: "/json/index/link.json"}), document.getElementById('navbar'));
React.render(React.createElement(Main, null), document.getElementById('main'));
React.render(React.createElement(Footer, null), document.getElementById('footer'));

/*******************************/
/*          Elements           */
/*******************************/


