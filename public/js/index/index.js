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
                        <li><a href="https://www.facebook.com/hackNTU" target="_blank"><i className="fa fa-facebook-square fa-lg"></i></a></li>
                        <li><a href="mailto:hackntu@gmail.com"><i className="fa fa-envelope-square fa-lg"></i></a></li>
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
                <Info id="scale" headerImg="/img/index/scale_bar.png" contentImg="/img/index/scale.png"/>
                <Info id="schedule" headerImg="/img/index/schedule_bar.png" contentImg="/img/index/schedule.png"/>
                <Info id="prize" headerImg="/img/index/prize_bar.png" contentImg="/img/index/prize.png"/>
                <Invitation id="invitation" headerImg="/img/index/invitation.png" url="/json/index/invitation.json"/>
                <Faq url="/json/index/faq.json"/>
                <Invitation id="sponsor" headerImg="/img/index/sponsor_bar.png" url="/json/index/sponsor.json"/>
                <Invitation id="support" headerImg="/img/index/support_bar.png" url="/json/index/support.json"/>
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

        var tempCol = [], col = [];

        for(var i = 1; i <= footerLinkNode.length; i++){
            tempCol.push(footerLinkNode[i-1]);
            if(i % 5 == 0) {
                col.push(tempCol);
                tempCol = [];
            }
        }

        if(tempCol != [])
            col.push(tempCol);

        return(
            <footer>
                <img className="background-image" src="/img/index/footer.png"/>
                <div className="content">
                    {col.map(function(liObjectArray, i){
                        return (
                            <div className="text-vertical-center">
                                <ul>{liObjectArray}</ul>
                            </div>
                        )
                    })}
                    <div className="contact">
                        <ul>
                            <li><a href="https://www.facebook.com/hackNTU" target="_blank"><i className="fa fa-facebook-square fa-lg"></i></a></li>
                            <li><a href="mailto:hackntu@gmail.com"><i className="fa fa-envelope-square fa-lg"></i></a></li>
                        </ul>
                    </div>
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

//<img id="btn_interested" src="/img/index/interest-01-2.svg" onClick={this.onBtnInterestedClick}/>
//<input id="txt_email" type="text" placeholder="Enter your email to subscribe."/>


//<a href="https://www.accupass.com/go/2015hackntu" target="_blank"></a>

var Index = React.createClass({
    //onBtnInterestedClick:function(){
    //    $('#btn_interested').css('opacity', '0');
    //    $('#btn_interested').css('z-index', '-99');
    //    $('#txt_email').css('width', '20em');
    //    $('#txt_email').css('opacity', '1');
    //    $('#txt_email').css("z-index", '0');
    //    $('#txt_email').focus();
    //},
    btnApplyOnClick: function(){
        $('#btn_apply').css('width', '0');
        $('#btn_taiwan').css('width', '10em');
        $('#btn_foreign').css('width', '10em');
    },
    render: function(){
        return(
            <section id="index">
                <img className="background-image" src="/img/index/bg1.png"/>
                <div className="text-center">
                    <img id="btn_apply" src="/img/index/apply-01.svg" onClick={this.btnApplyOnClick}/>
                    <a href="https://www.accupass.com/go/2015hackntu" target="_blank">
                        <img id="btn_taiwan" src="/img/index/taiwan-01.svg"/>
                    </a>
                    <a href="http://www.accupass.com/event/register/1505141917107287993140" target="_blank">
                        <img id="btn_foreign" src="/img/index/foreign-01.svg"/>
                    </a>
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
                        <p>Join 2015HackNTU this August to realize your innovative ideas from scratch with talented hackers around the world.</p>
                        <p>With the topic ‘’Hack Into The City’’, we are looking forward to ideas that can make cities ‘’smarter’’. Nowadays, cities face more challenges than ever, e.g. climate change, aging populations, public transportation and urban regeneration etc. By the power of imagination and programming, we are looking forward to making cities more convenient, clever, and friendly.</p>
                        <p>We believe that 2015HackNTU can be a start of great innovations as a hub of talents, so hackers are encouraged to meet new friends during the hackathon and keep working on projects afterward.</p>
                        <p>Apply now to be a hacker into the city!</p>
                    </div>
                </div>
            </section>
        )
    }
});

var Info = React.createClass({
    render: function(){
        return(
            <section id={this.props.id}>
                <img className="header" src={this.props.headerImg}/>
                <div>
                    <img src={this.props.contentImg}/>
                </div>
            </section>
        )
    }
});

// All Invitation
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
        var invitedTeamNode = this.state.data.map(function(invitee, i){
            if(invitee.invitation_url != ""){
                return (
                    <a href={invitee.invitation_url} target="_blank">
                        <img key={i} src={invitee.img_src}/>
                    </a>
                )
            }
            else {
                return (
                    <img key={i} src={invitee.img_src}/>
                )
            }

        });
        return(
            <section id={this.props.id}>
                <img className="header" src={this.props.headerImg}/>
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
        var message = "Can’t find answers to your question? Feel free to contact us through email or via Facebook messages.";
        var faqContentNode = this.state.data.map(function(faq, i){
            return (
                <div key={i} className="text-center">
                    <div className="inner-header text-vertical-center">
                        {faq.title}
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
                    <p><b><h5>Can’t find answers to your question &#63;</h5></b></p>
                    <p><b><h5>Feel free to contact us through email or via Facebook messages.</h5></b></p>
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