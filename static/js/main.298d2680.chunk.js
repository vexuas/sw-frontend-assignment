(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(35)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),c=a(8),r=a.n(c),i=(a(15),a(1)),l=a(2),o=a(5),m=a(3),u=a(4),p=a(6),h=(a(16),a(17),a(18),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,this.props.sideLogos.map(function(t){return e.props.sidenavTitle===t.title?n.a.createElement("div",{id:"swTest-currentPage",key:t.id,title:t.title},n.a.createElement("img",{src:t.img_src,alt:t.img_alt,id:"swTest-currentPageImg"})):n.a.createElement("div",{className:"swTest-menu",key:t.id,title:t.title},n.a.createElement("img",{src:t.img_src,alt:t.img_alt,className:"swTest-menu-img"}))}))}}]),t}(s.Component)),d=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"swTest-sidenav"},n.a.createElement("div",{className:"swTest-logo"},n.a.createElement("img",{src:"https://cdn.discordapp.com/attachments/511245116871278594/555241844196507650/sw-logo-white.png",alt:"sw-logo",id:"swTest-logo"})),n.a.createElement(h,{sidenavTitle:this.props.sidenavTitle,sideLogos:this.props.sideLogos}))}}]),t}(s.Component),v=(a(19),a(20),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.userFeed;return n.a.createElement("div",{className:"swTest-navbar-menuSettings"},n.a.createElement("div",{className:"swTest-navbar-notifications"},n.a.createElement("img",{src:"https://cdn.discordapp.com/attachments/511245116871278594/555290110225022976/icon-mail.png",alt:"mail icon",className:"swTest-navbar-mailIcon"}),n.a.createElement("span",{className:"swTest-navbar-notifCount"},e.notifications_count)),n.a.createElement("span",{className:"swTest-navbar-userName"},"Hello, ",e.name),n.a.createElement("img",{className:"swTest-navbar-userAvatar",src:e.avatar,alt:"user avatar"}),n.a.createElement("span",{className:"swTest-navbar-userSettings"}))}}]),t}(s.Component)),b=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"swTest-navbar"},n.a.createElement("span",{className:"swTest-navbar-name"},"NARWHAL"),n.a.createElement("span",{className:"swTest-navbar-title"},this.props.navbarTitle),n.a.createElement(v,{userFeed:this.props.userFeed}))}}]),t}(s.Component),f=(a(21),a(22),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"swTest-header-firstSegment"},n.a.createElement("img",{className:"swTest-header-logo",src:this.props.headerLogo,alt:"Header Logo"}),n.a.createElement("span",{className:"swTest-header-title"},this.props.headerTitle),n.a.createElement("div",{className:"swTest-header-newTeam"},n.a.createElement("span",{className:"swTest-header-newTeamAdd"},"+"),n.a.createElement("span",{className:"swTest-header-newTeamTitle"},"CREATE NEW TEAM")))}}]),t}(s.Component)),T=(a(23),a(24),function(e){return n.a.createElement("input",{className:"swTest-header-searchInput",placeholder:"Search team name ..."})}),g=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"swTest-header-secondSegment"},n.a.createElement("div",{className:"swTest-header-tabs"},n.a.createElement("span",{className:"swTest-header-tabTitles",style:this.props.Allstyles,onMouseDown:this.props.changeTabsAll},"All"),n.a.createElement("span",{className:"swTest-header-tabTitles",style:this.props.Favstyles,onMouseDown:this.props.changeTabsFav},"Favorites"),n.a.createElement("span",{className:"swTest-header-tabTitles",style:this.props.Arcstyles,onMouseDown:this.props.changeTabsArc},"Archived")),n.a.createElement("div",{className:"swTest-header-searchBar"},n.a.createElement("img",{className:"swTest-header-searchIcon",src:"https://cdn.discordapp.com/attachments/248430185463021569/555631325080715274/magnify_1.png",alt:"search icon"}),n.a.createElement(T,null)))}}]),t}(s.Component),y=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"swTest-header"},n.a.createElement(f,{headerTitle:this.props.headerTitle,headerLogo:this.props.headerLogo}),n.a.createElement(g,{Allstyles:this.props.Allstyles,Favstyles:this.props.Favstyles,Arcstyles:this.props.Arcstyles,changeTabsAll:this.props.changeTabsAll,changeTabsFav:this.props.changeTabsFav,changeTabsArc:this.props.changeTabsArc}))}}]),t}(s.Component);a(25),a(26),a(27),a(28);var w=function(e){return n.a.createElement("div",{className:"swTest-activityFeed-data"},n.a.createElement("img",{src:e.activity.person.avatar,alt:"user avatar",className:"swTest-navbar-userAvatar"}),function(e,t,a,s){switch(a){case"increased_quota":return n.a.createElement("div",{className:"swTest-activityFeed-desc"},n.a.createElement("span",{className:"swTest-activityFeed-phrase"},n.a.createElement("b",null,e)," increased ",n.a.createElement("b",null,t),"'s quota"),n.a.createElement("span",{className:"swTest-activityFeed-time"},s));case"added_leads":return n.a.createElement("div",{className:"swTest-activityFeed-desc"},n.a.createElement("span",{className:"swTest-activityFeed-phrase"},n.a.createElement("b",null,e)," added new leads to ",n.a.createElement("b",null,t)),n.a.createElement("span",{className:"swTest-activityFeed-time"},s));case"archived_team":return n.a.createElement("div",{className:"swTest-activityFeed-desc"},n.a.createElement("span",{className:"swTest-activityFeed-phrase"},n.a.createElement("b",null,e)," archived the team ",n.a.createElement("b",null,t)),n.a.createElement("span",{className:"swTest-activityFeed-time"},s));default:return}}(e.activity.person.name,e.activity.target,e.activity.action,e.activity.created_at))},E=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.actFeed;return n.a.createElement("div",{className:"swTest-activityFeed-list"},e.map(function(e){return n.a.createElement(w,{activity:e,key:e.id})}))}}]),t}(s.Component),O=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"swTest-activityFeed"},n.a.createElement("div",{className:"swTest-feed-header"},n.a.createElement("span",{className:"swTest-feed-title"},"Activity")),n.a.createElement(E,{actFeed:this.props.actFeed}))}}]),t}(s.Component),j=(a(29),a(30),a(31),{filter:"sepia() saturate(10000%) hue-rotate(360deg)",transform:"scale(1.2)"}),N={filter:"sepia() saturate(10%) hue-rotate(360deg)",transform:"scale(1.2)"},A=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={style:null},a.hoverIn=a.hoverIn.bind(Object(p.a)(Object(p.a)(a))),a.hoverOut=a.hoverOut.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"hoverIn",value:function(){"https://cdn.discordapp.com/attachments/248430185463021569/555813454062026785/star_default.png"===this.props.star?this.setState({style:j}):"https://cdn.discordapp.com/attachments/248430185463021569/555813482663247892/star_active.png"===this.props.star&&this.setState({style:N})}},{key:"hoverOut",value:function(){this.setState({style:null})}},{key:"render",value:function(){return n.a.createElement("div",{className:"swTest-teamCard-top"},n.a.createElement("img",{className:"swTest-content-teamsImage",src:this.props.teaminfo.image,alt:"target logo"}),n.a.createElement("span",{className:"swTest-content-teamName"},this.props.teaminfo.name),n.a.createElement("span",{className:"swTest-content-teamDate"},this.props.createdDate),n.a.createElement("img",{className:"swTest-content-star",alt:"target logo star",src:this.props.star,style:this.state.style,onMouseEnter:this.hoverIn,onMouseLeave:this.hoverOut}))}}]),t}(s.Component);a(32);var F=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"swTest-teamCard-mid"},n.a.createElement("span",{className:"swTest-content-desc"},(e=this.props.teaminfoDesc).length>70?"".concat(e.slice(0,82)," ..."):e));var e}}]),t}(s.Component),k=(a(33),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"swTest-teamCard-bot"},n.a.createElement("img",{className:"swTest-content-icon",alt:"icons",src:"https://cdn.discordapp.com/attachments/248430185463021569/555987063715921930/icon-campaign3.png"}),n.a.createElement("span",{className:"swTest-content-campCount"},this.props.teaminfoCamp," Campaigns"),n.a.createElement("img",{className:"swTest-content-icon",alt:"icons",src:"https://cdn.discordapp.com/attachments/248430185463021569/555987087254618124/icon-leads3.png"}),n.a.createElement("span",{className:"swTest-content-campCount"},this.props.teaminfoLeads," Leads"))}}]),t}(s.Component)),_=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.teamInfo,t="",a="",s={};return t=void 0!==e.created_at?"Created on ".concat(e.created_at):"",a=!0===e.is_favorited?"https://cdn.discordapp.com/attachments/248430185463021569/555813482663247892/star_active.png":"https://cdn.discordapp.com/attachments/248430185463021569/555813454062026785/star_default.png",!0===e.is_archived&&(s={backgroundColor:"#ebeef2"}),n.a.createElement("div",{className:"swTest-content-teamCard",style:s},n.a.createElement(A,{teaminfo:e,star:a,createdDate:t}),n.a.createElement(F,{teaminfoDesc:e.description}),n.a.createElement(k,{teaminfoCamp:e.campaigns_count,teaminfoLeads:e.leads_count}))}}]),t}(s.Component),C=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.teams,t=this.props.contentTitle;return n.a.createElement("div",{className:"swTest-content-teamData"},n.a.createElement("div",{className:"swTest-feed-header"},n.a.createElement("span",{className:"swTest-feed-title"},t," Teams"),n.a.createElement("span",{className:"swTest-content-teamCount"},"Showing ",e.length," out of ",e.length," teams")),n.a.createElement("div",{className:"swTest-content-teams"},e.map(function(e){return n.a.createElement(_,{teamInfo:e,key:e.id})})))}}]),t}(s.Component),L=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"swTest-content"},n.a.createElement(C,{contentTitle:this.props.contentTitle,teams:this.props.teams}),n.a.createElement(O,{actFeed:this.props.actFeed}))}}]),t}(s.Component),S=(a(34),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"swTest-loading"},"Loading ...")}}]),t}(s.Component)),D=[{id:1,title:"Campaigns",img_src:"https://cdn.discordapp.com/attachments/511245116871278594/555263580811821071/icon-campaign2.png",img_alt:"sw-menu-campaigns"},{id:2,title:"Teams",img_src:"https://cdn.discordapp.com/attachments/511245116871278594/555246501853528065/icon-teams.png",img_alt:"sw-menu-teams"},{id:3,title:"Contacts",img_src:"https://cdn.discordapp.com/attachments/511245116871278594/555265413571674123/icon-leads2.png",img_alt:"sw-menu-contacts"},{id:4,title:"Reports",img_src:"https://cdn.discordapp.com/attachments/511245116871278594/555273930668245003/icon-reports2.png",img_alt:"sw-menu-reports"},{id:5,title:"Help",img_src:"https://cdn.discordapp.com/attachments/511245116871278594/555247457647198208/icon-help.png",img_alt:"sw-menu-help"}],I={borderBottom:"3px solid #0083e3",color:"#0083e3",cursor:"default"},M=[],B=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={Allstyles:I,Favstyles:null,Arcstyles:null,Allactive:!0,Favactive:!1,Arcactive:!1,contentTitle:"All",actFeed:null,teamFeed:null,userFeed:null},a.changeTabsAll=a.changeTabsAll.bind(Object(p.a)(Object(p.a)(a))),a.changeTabsFav=a.changeTabsFav.bind(Object(p.a)(Object(p.a)(a))),a.changeTabsArc=a.changeTabsArc.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"changeTabsAll",value:function(){this.setState({Allstyles:I,Favstyles:null,Arcstyles:null,Allactive:!0,Favactive:!1,Arcactive:!1,contentTitle:"All"})}},{key:"changeTabsFav",value:function(){this.setState({Allstyles:null,Favstyles:I,Arcstyles:null,Allactive:!1,Favactive:!0,Arcactive:!1,contentTitle:"Favorite"})}},{key:"changeTabsArc",value:function(){this.setState({Allstyles:null,Favstyles:null,Arcstyles:I,Allactive:!1,Favactive:!1,Arcactive:!0,contentTitle:"Archived"})}},{key:"getApiData",value:function(){var e=this;fetch("https://sw-assigment-mock-api.herokuapp.com/db").then(function(t){return t.json().then(function(t){var a=t;e.setState({actFeed:a.activities,teamFeed:a.teams,userFeed:a.current_user})})})}},{key:"getAllTeams",value:function(){M=[];var e=this.state.teamFeed;M=e.filter(function(e){return e})}},{key:"getFavTeams",value:function(){M=[];var e=this.state.teamFeed;M=e.filter(function(e){return!0===e.is_favorited})}},{key:"getArcTeams",value:function(){M=[];var e=this.state.teamFeed;M=e.filter(function(e){return!0===e.is_archived})}},{key:"switchingTabs",value:function(){!0===this.state.Allactive?this.getAllTeams():!0===this.state.Favactive?this.getFavTeams():!0===this.state.Arcactive&&this.getArcTeams()}},{key:"componentDidMount",value:function(){this.getApiData()}},{key:"render",value:function(){return null===this.state.teamFeed?n.a.createElement(S,null):(this.switchingTabs(),n.a.createElement("main",{className:"swTest"},n.a.createElement(d,{sidenavTitle:"Teams",sideLogos:D}),n.a.createElement(b,{navbarTitle:"Teams",userFeed:this.state.userFeed}),n.a.createElement(y,{headerTitle:"Teams",headerLogo:"https://cdn.discordapp.com/attachments/248430185463021569/555448393166487559/icon_companies.png",Allstyles:this.state.Allstyles,Favstyles:this.state.Favstyles,Arcstyles:this.state.Arcstyles,changeTabsAll:this.changeTabsAll,changeTabsFav:this.changeTabsFav,changeTabsArc:this.changeTabsArc}),n.a.createElement(L,{all:this.state.Allactive,fav:this.state.Favactive,arc:this.state.Arcactive,contentTitle:this.state.contentTitle,actFeed:this.state.actFeed,teams:M})))}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.298d2680.chunk.js.map