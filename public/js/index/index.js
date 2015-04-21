/**
 * Created by pilagod on 4/20/15.
 */

/*******************************/
/*          Main Page          */
/*******************************/




var Navbar = React.createClass({
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
                <li key={i}>
                    <a href={link.url} onClick={this.handleHrefOnClick.bind(null, link.url)}>{link.title}</a>
                </li>
            )
        }.bind(this));
        return(
            <nav>
                <div className="content">
                    <ul className="pull-left">
                        {linkNode}
                    </ul>
                    <ul className="pull-right">
                        <li><a href=""><i className="fa fa-facebook-square fa-lg"></i></a></li>
                        <li><a href=""><i className="fa fa-envelope-square fa-lg"></i></a></li>
                    </ul>
                </div>
            </nav>
        )
    }
});

var Main = React.createClass({
    render: function(){
        return(
            <div>
                <Index />
                <Intro />
                <Invitation url="/json/index/invitation.json"/>
                <Faq url="/json/index/faq.json"/>
            </div>
        )
    }
});

var Footer = React.createClass({
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
                <li key={i}>
                    <a href={link.url} onClick={this.handleHrefOnClick.bind(null, link.url)}>{link.title}</a>
                </li>
            )
        }.bind(this));
        return(
            <footer>
                <img className="background-image" src="/img/index/footer.png"/>
                <div className="content">
                    <ul>
                        {footerLinkNode}
                    </ul>
                    <ul>
                        <li><a href=""><i className="fa fa-facebook-square fa-lg"></i></a></li>
                        <li><a href=""><i className="fa fa-envelope-square fa-lg"></i></a></li>
                    </ul>
                </div>
                <div className="copyright">
                    <span>Copyright</span>
                    <i className="fa fa-copyright"></i>
                    <span>2015 HackNTU All Right Reserved.</span>
                </div>
            </footer>
        )
    }
});

var Index = React.createClass({
    render: function(){
        return(
            <section id="index">
                <img className="background-image" src="/img/index/bg1.png"/>
                <div className="text-center">
                    <img src="/img/index/apply_button.png"/>
                    <img src="/img/index/mentor_button.png"/>
                    <img src="/img/index/sponsor_button.png"/>
                </div>
            </section>
        )
    }
});

var Intro = React.createClass({
    render: function(){
        return(
            <section id="intro">
                <img className="header" src="/img/index/intro.png"/>
                <div className="content">
                    <img className="pull-left" src="/img/index/left_double_quot.png"/>
                    <img className="pull-right" src="/img/index/right_double_quot.png"/>
                    <div>
                        <p>HackNTU is a carnival for Hackers aiming to bridge Asian hacker community with the world. We are not only holding a competition but also a wide variety of Summit to inspire talented youth hackers. Students around the world are invited to join their peers brainstorming crazy ideas and make them real in 40 hours. </p>
                    </div>
                </div>
            </section>
        )
    }
});

var Invitation = React.createClass({
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
                <img key={i} src={team.img_src}/>
            )
        });
        return(
            <section id="invitation">
                <img className="header" src="/img/index/invitation.png"/>
                <div className="content">
                    {invitedTeamNode}
                </div>
            </section>
        )
    }
});

var Faq = React.createClass({
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
                <div key={i} className="text-center">
                    <div className="inner-header">
                        <h3>{faq.title}</h3>
                    </div>
                    <div className="inner-content">
                        {faq.content}
                    </div>
                </div>
            )
        });
        return(
            <section id="faq">
                <img className="header" src="/img/index/FAQ.png"/>
                <div className="content">
                    {faqContentNode}
                </div>
            </section>
        )
    }
});


/*******************************/
/*           Render            */
/*******************************/

React.render(<Navbar url="/json/index/link.json"/>, document.getElementById('navbar'));
React.render(<Main />, document.getElementById('main'));
React.render(<Footer url="/json/index/link.json"/>, document.getElementById('footer'));

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