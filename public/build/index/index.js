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
                React.createElement(Info, {id: "scale", headerImg: "/img/index/scale_bar.png", contentImg: "/img/index/scale.png"}), 
                React.createElement(Info, {id: "schedule", headerImg: "/img/index/schedule_bar.png", contentImg: "/img/index/schedule.png"}), 
                React.createElement(Info, {id: "prize", headerImg: "/img/index/prize_bar.png", contentImg: "/img/index/prize.png"}), 
                React.createElement(Invitation, {id: "invitation", headerImg: "/img/index/invitation.png", url: "/json/index/invitation.json"}), 
                React.createElement(Faq, {url: "/json/index/faq.json"}), 
                React.createElement(Invitation, {id: "sponsor", headerImg: "/img/index/sponsor_bar.png", url: "/json/index/sponsor.json"}), 
                React.createElement(Invitation, {id: "support", headerImg: "/img/index/support_bar.png", url: "/json/index/support.json"})
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

        var tempCol = [];
        var col = [];

        for(var i = 1; i <= footerLinkNode.length; i++){
            tempCol.push(footerLinkNode[i-1]);
            if(i % 5 == 0) {
                col.push(tempCol);
                tempCol = [];
            }
        }

        if(tempCol != []){
            col.push(tempCol);
            tempCol = [];
        }

        return(
            React.createElement("footer", null, 
                React.createElement("img", {className: "background-image", src: "/img/index/footer.png"}), 
                React.createElement("div", {className: "content"}, 
                    col.map(function(liObjectArray, i){
                        return (
                            React.createElement("div", {className: "text-vertical-center"}, 
                                React.createElement("ul", null, liObjectArray)
                            )
                        )
                    }), 
                    React.createElement("div", {className: "contact"}, 
                        React.createElement("ul", null, 
                            React.createElement("li", null, React.createElement("a", {href: "https://www.facebook.com/hackNTU", target: "_blank"}, React.createElement("i", {className: "fa fa-facebook-square fa-lg"}))), 
                            React.createElement("li", null, React.createElement("a", {href: "mailto:hackntu@gmail.com"}, React.createElement("i", {className: "fa fa-envelope-square fa-lg"})))
                        )
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

//<img id="btn_interested" src="/img/index/interest-01-2.svg" onClick={this.onBtnInterestedClick}/>
//<input id="txt_email" type="text" placeholder="Enter your email to subscribe."/>


//<a href="https://www.accupass.com/go/2015hackntu" target="_blank"></a>

var Index = React.createClass({displayName: "Index",
    //onBtnInterestedClick:function(){
    //    $('#btn_interested').css('opacity', '0');
    //    $('#btn_interested').css('z-index', '-99');
    //    $('#txt_email').css('width', '20em');
    //    $('#txt_email').css('opacity', '1');
    //    $('#txt_email').css("z-index", '0');
    //    $('#txt_email').focus();
    //},
    btnApplyOnClick: function(){

    },
    render: function(){
        return(
            React.createElement("section", {id: "index"}, 
                React.createElement("img", {className: "background-image", src: "/img/index/bg1.png"}), 
                React.createElement("div", {className: "text-center"}, 
                    React.createElement("img", {id: "btn_apply", src: "/img/index/apply-01.svg"})
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
                        React.createElement("p", null, "Join 2015HackNTU this August to realize your innovative ideas from scratch with talented hackers around the world."), 
                        React.createElement("p", null, "With the topic ‘’Hack Into The City’’, we are looking forward to ideas that can make cities ‘’smarter’’. Nowadays, cities face more challenges than ever, e.g. climate change, aging populations, public transportation and urban regeneration etc. By the power of imagination and programming, we are looking forward to making cities more convenient, clever, and friendly."), 
                        React.createElement("p", null, "We believe that 2015HackNTU can be a start of great innovations as a hub of talents, so hackers are encouraged to meet new friends during the hackathon and keep working on projects afterward."), 
                        React.createElement("p", null, "Apply now to be a hacker into the city!")
                    )
                )
            )
        )
    }
});

var Info = React.createClass({displayName: "Info",
    render: function(){
        return(
            React.createElement("section", {id: this.props.id}, 
                React.createElement("img", {className: "header", src: this.props.headerImg}), 
                React.createElement("div", null, 
                    React.createElement("img", {src: this.props.contentImg})
                )
            )
        )
    }
});

// All Invitation
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
        var invitedTeamNode = this.state.data.map(function(invitee, i){
            if(invitee.invitation_url != ""){
                return (
                    React.createElement("a", {href: invitee.invitation_url, target: "_blank"}, 
                        React.createElement("img", {key: i, src: invitee.img_src})
                    )
                )
            }
            else {
                return (
                    React.createElement("img", {key: i, src: invitee.img_src})
                )
            }

        });
        return(
            React.createElement("section", {id: this.props.id}, 
                React.createElement("img", {className: "header", src: this.props.headerImg}), 
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