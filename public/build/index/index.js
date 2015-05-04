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
    handleHrefOnClick: hrefOnClick,
    render: function(){
        var linkNode = this.state.data.map(function(link, i){
            return (
                React.createElement("li", {key: i}, 
                    React.createElement("a", {href: link.url, onClick: this.handleHrefOnClick.bind(null, link.url)}, link.title)
                )
            )
        }.bind(this));
        return(
            React.createElement("nav", null, 
                React.createElement("div", {className: "content"}, 
                    React.createElement("ul", {className: "pull-left"}, 
                        linkNode
                    ), 
                    React.createElement("ul", {className: "pull-right"}, 
                        React.createElement("li", null, React.createElement("a", {href: "https://www.facebook.com/hackNTU", target: "_blank"}, React.createElement("i", {className: "fa fa-facebook-square fa-lg"}))), 
                        React.createElement("li", null, React.createElement("a", {href: "mailto:hackntu@gmail.com"}, React.createElement("i", {className: "fa fa-envelope-square fa-lg"})))
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
    handleHrefOnClick: hrefOnClick,
    render: function(){
        var footerLinkNode = this.state.data.map(function(link, i){
            return (
                React.createElement("li", {key: i}, 
                    React.createElement("a", {href: link.url, onClick: this.handleHrefOnClick.bind(null, link.url)}, link.title)
                )
            )
        }.bind(this));
        return(
            React.createElement("footer", null, 
                React.createElement("img", {className: "background-image", src: "/img/index/footer.png"}), 
                React.createElement("div", {className: "content"}, 
                    React.createElement("ul", null, 
                        footerLinkNode
                    ), 
                    React.createElement("ul", null, 
                        React.createElement("li", null, React.createElement("a", {href: "https://www.facebook.com/hackNTU", target: "_blank"}, React.createElement("i", {className: "fa fa-facebook-square fa-lg"}))), 
                        React.createElement("li", null, React.createElement("a", {href: "mailto:hackntu@gmail.com"}, React.createElement("i", {className: "fa fa-envelope-square fa-lg"})))
                    )
                ), 
                React.createElement("div", {className: "copyright"}, 
                    React.createElement("span", null, "Copyright"), 
                    React.createElement("i", {className: "fa fa-copyright"}), 
                    React.createElement("span", null, "2015 HackNTU All Right Reserved.")
                )
            )
        )
    }
});

//<img src="/img/index/apply_button.png"/>
//<img src="/img/index/mentor_button.png"/>
//<img src="/img/index/sponsor_button.png"/>

//<img className="background-image" src="/img/index/bg1.png"/>

var Index = React.createClass({displayName: "Index",
    onBtnInterestedClick:function(){
        $('#btn_interested').css('opacity', '0');
        $('#btn_interested').css('z-index', '-99');
        $('#txt_email').css('width', '20em');
        $('#txt_email').css('opacity', '1');
        $('#txt_email').css("z-index", '0');
        $('#txt_email').focus();
        //$('#txt_email').css();

        //$('#txt_email').css('')
    },
    render: function(){
        return(
            React.createElement("section", {id: "index"}, 
                React.createElement("img", {className: "background-image", src: "/img/index/bg1.png"}), 
                React.createElement("div", {className: "text-center"}, 
                    React.createElement("img", {id: "btn_interested", src: "/img/index/interest-01-2.svg", onClick: this.onBtnInterestedClick}), 
                    React.createElement("input", {id: "txt_email", type: "text", placeholder: "Enter your email to subscribe."})
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
                        React.createElement("p", null, "HackNTU holds an annual hackathon for young hackers around the world. Attending 2015HackNTU gives you an opportunity to share your innovation and create things from scratch with talented hackers from all around the world. Join us, and get inspired!")
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
        var message = "Can’t find answers to your question? Feel free to contact us through email or via Facebook messages.";
        var faqContentNode = this.state.data.map(function(faq, i){
            return (
                React.createElement("div", {key: i, className: "text-center"}, 
                    React.createElement("div", {className: "inner-header text-vertical-center"}, 
                        faq.title
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
                    faqContentNode, 
                    React.createElement("p", null, React.createElement("b", null, React.createElement("h5", null, "Can’t find answers to your question ?"))), 
                    React.createElement("p", null, React.createElement("b", null, React.createElement("h5", null, "Feel free to contact us through email or via Facebook messages.")))
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
React.render(React.createElement(Footer, {url: "/json/index/link.json"}), document.getElementById('footer'));

/*******************************/
/*          Elements           */
/*******************************/


/*******************************/
/*       Other Function        */
/*******************************/

function hrefOnClick(hash, e){
    e.preventDefault();

    var target = hash,
        $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
        window.location.hash = target;
    });
}