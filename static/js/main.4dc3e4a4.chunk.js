(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{220:function(e,t,n){e.exports=n(409)},225:function(e,t,n){},227:function(e,t,n){},409:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(25),o=n.n(r),c=(n(225),n(18)),i=n(19),s=n(21),u=n(20),m=n(22),p=n(411),h=n(412),d=n(413),f=(n(227),n(153)),v=n(15),E=n(28),b=n(89),g=n(4),j=n(87),O=n.n(j),y=n(410),w=n(3),k=n.n(w),x=n(27),C=n.n(x),N=n(17),D=n.n(N),_=function(e){return a.createElement(y.a,Object.assign({to:"/"},e))},P=function(e){return a.createElement(y.a,Object.assign({to:"/palettes"},e))},A=function(e){return a.createElement(y.a,Object.assign({to:"/zones"},e))},M=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={anchorEl:null,zones:{}},n.zoneInterval=null,n.getZones=function(){C.a.get("https://foodbankpallettracker.firebaseio.com/Zone.json").then(function(e){n.setState({zones:e.data})}).catch(function(e){console.error(e)})},n.handleProfileMenuOpen=function(e){n.setState({anchorEl:e.currentTarget})},n.handleMenuClose=function(){n.setState({anchorEl:null})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getZones(),this.zoneInterval=setInterval(this.getZones,4500)}},{key:"componentWillUnmount",value:function(){clearInterval(this.zoneInterval)}},{key:"render",value:function(){var e=this.state.anchorEl,t=this.props.classes,n=Boolean(e),l=0,r=this.state.zones,o=null;r&&(o=Object.keys(r).map(function(e){var t=null;r[e].expected_pallets&&(t=r[e].expected_pallets);var n=[];r[e].loaded_pallets&&t&&(n=r[e].loaded_pallets.map(function(n){if(!n.includes(e)||!t.includes(n))return l++,a.createElement(g.o,null,a.createElement(g.s,null,n," has been loaded to the incorrect truck"))}));var o=[];return r[e].loaded_pallets&&t&&(o=r[e].expected_pallets.map(function(t){if(!r[e].loaded_pallets.includes(t)&&new D.a(r[e].departure_time).isBefore(new D.a,"minute"))return l++,a.createElement(g.o,null,a.createElement(g.s,null,t," is missing in truck ",e))})),!r[e].loaded_pallets&&t&&(o=r[e].expected_pallets.map(function(t){if(new D.a(r[e].departure_time).isBefore(new D.a,"minute"))return l++,a.createElement(g.o,null,a.createElement(g.s,null,t," is missing in truck ",e))})),Object(b.a)(n).concat(Object(b.a)(o))})),0===l&&(o=a.createElement(g.o,null,"No new notifications"));var c=a.createElement(g.n,{anchorEl:e,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:n,onClose:this.handleMenuClose},o),i=l>0?a.createElement(g.j,{color:"inherit",onClick:this.handleProfileMenuOpen},a.createElement(g.b,{badgeContent:l,color:"secondary"},a.createElement(O.a,null))):a.createElement(g.j,{color:"inherit",onClick:this.handleProfileMenuOpen},a.createElement(O.a,null));return a.createElement(g.a,{position:"sticky"},a.createElement(g.r,null,a.createElement(g.s,{variant:"h5",color:"inherit"},"InventoryLab"),a.createElement(g.c,{component:_,className:k()(t.button,t.leftMargin)},"Dashboard"),a.createElement(g.c,{component:P,className:t.button},"Pallets"),a.createElement(g.c,{component:A,className:t.button},"Zones"),a.createElement("div",{style:{flexGrow:1}}),a.createElement("div",null,i),c))}}]),t}(a.Component),z=Object(v.withStyles)(function(e){return{button:{color:e.palette.getContrastText(E.teal[500]),backgroundColor:E.teal[500],"&:hover":{backgroundColor:E.teal[500],borderBottom:"solid 2px white"}},leftMargin:{marginLeft:"50px"}}})(M),I=Object(v.createMuiTheme)({palette:{primary:{main:E.teal[500]},secondary:{main:E.pink.A400}}}),S=function(e){var t=e.children;Object(f.a)(e,["children"]);return a.createElement(v.MuiThemeProvider,{theme:I},a.createElement(z,null),t)},Y=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={pallets:null},n.getPallets=function(){C.a.get("https://foodbankpallettracker.firebaseio.com/Palettes.json").then(function(e){n.setState({pallets:Object.values(e.data)})}).catch(function(e){console.error(e)})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getPallets()}},{key:"render",value:function(){var e=this.props.classes,t=null,n=0;return this.state.pallets&&(t=this.state.pallets.map(function(e){return new D.a(e.shipment_date).isSame(new D.a,"day")?(n++,a.createElement(g.l,{divider:!0},a.createElement(g.m,null,e.name))):null})),a.createElement("div",{className:e.root},a.createElement(g.i,{container:!0,spacing:16,className:e.fluid},a.createElement(g.i,{item:!0,xs:12,className:e.row},a.createElement(g.s,{variant:"h3"},"Dashboard"),a.createElement(g.h,null)),a.createElement(g.i,{item:!0,xs:4,className:e.row},a.createElement(g.s,{variant:"h6"},"Pallets shipping today"),a.createElement(g.p,{className:e.card},a.createElement(g.s,{variant:"h5",style:{textAlign:"center"}},n," pallet(s)"),a.createElement(g.k,null,t)))))}}]),t}(a.Component),B=Object(v.withStyles)({root:{flexGrow:1,backgroundColor:"#f0f0f0",minHeight:"100vh"},fluid:{padding:"20px"},row:{marginBottom:"10px"},card:{padding:"10px"}})(Y),Z=n(152),T=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={pallets:[]},n.palletInterval=null,n.getPallets=function(){C.a.get("https://foodbankpallettracker.firebaseio.com/Palettes.json").then(function(e){n.setState({pallets:Object.values(e.data)})}).catch(function(e){console.error(e)})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getPallets(),this.palletInterval=setInterval(this.getPallets,2500)}},{key:"componentWillUnmount",value:function(){clearInterval(this.palletInterval)}},{key:"render",value:function(){var e=[{Header:"Date created",accessor:"date_created",Cell:function(e){return a.createElement("span",null,new D.a(e.value).format("M/D/YY h:mm A"))}},{Header:"Name",accessor:"name"},{Header:"Expected ship date",accessor:"shipment_date",Cell:function(e){return a.createElement("span",null,new D.a(e.value).format("M/D/YY h:mm A"))}}];return a.createElement(Z.a,{data:this.state.pallets,columns:e,filterable:!0})}}]),t}(a.Component),W=n(88),H=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={name:"",shipDate:(new D.a).format("YYYY-MM-DDThh:mm")},n.handleTextFieldChange=function(e){return function(t){n.setState(Object(W.a)({},e,t.target.value))}},n.submitNewPalette=function(){var e=Object(W.a)({},n.state.name,{name:n.state.name,date_created:new D.a,shipment_date:n.state.shipDate});C.a.patch("https://foodbankpallettracker.firebaseio.com/Palettes.json",e).then(function(e){n.props.closeDialog(),n.setState({name:"",shipDate:(new D.a).format("YYYY-MM-DDThh:mm")})}).catch(function(e){console.error(e)})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.createElement(g.d,{open:this.props.open,onClose:this.props.closeDialog},a.createElement(g.g,null,"Add a new Palette"),a.createElement(g.f,null,a.createElement(g.q,{fullWidth:!0,variant:"filled",label:"Name",value:this.state.name,onChange:this.handleTextFieldChange("name"),margin:"normal"}),a.createElement(g.q,{fullWidth:!0,variant:"filled",label:"Shipment date and time",value:this.state.shipDate,onChange:this.handleTextFieldChange("shipDate"),margin:"normal",type:"datetime-local"})),a.createElement(g.e,null,a.createElement(g.c,{onClick:this.props.closeDialog,color:"primary"},"Cancel"),a.createElement(g.c,{onClick:this.submitNewPalette,color:"primary"},"Add")))}}]),t}(a.Component),F=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={open:!1},n.handleAddPalette=function(){n.setState({open:!0})},n.closeDialog=function(){n.setState({open:!1})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.classes;return a.createElement("div",{className:e.root},a.createElement(g.i,{container:!0,spacing:16,className:e.fluid},a.createElement(g.i,{item:!0,xs:12,className:e.row},a.createElement(g.s,{variant:"h3"},"Pallets"),a.createElement(g.h,null)),a.createElement(g.i,{item:!0,xs:12,className:e.row},a.createElement(g.c,{variant:"contained",color:"primary",onClick:this.handleAddPalette},"Add pallet"),a.createElement(H,{open:this.state.open,closeDialog:this.closeDialog})),a.createElement(g.i,{item:!0,xs:12,className:e.row},a.createElement(g.p,null,a.createElement(T,{data:this.state.pallets})))))}}]),t}(a.Component),G=Object(v.withStyles)({root:{flexGrow:1,backgroundColor:"#f0f0f0"},fluid:{padding:"20px"},row:{marginBottom:"10px"}})(F),L=function(){return a.createElement(g.i,{container:!0},"Reports")},U=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={zones:{}},n.zoneInterval=null,n.getZones=function(){C.a.get("https://foodbankpallettracker.firebaseio.com/Zone.json").then(function(e){n.setState({zones:e.data})}).catch(function(e){console.error(e)})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getZones(),this.zoneInterval=setInterval(this.getZones,2500)}},{key:"componentWillUnmount",value:function(){clearInterval(this.zoneInterval)}},{key:"render",value:function(){var e=this.props.classes,t=this.state.zones,n=null;return t&&(n=Object.keys(t).map(function(n){var l=a.createElement(g.s,{style:{textAlign:"center"}},"None");t[n].current_pallets&&(l=t[n].current_pallets.map(function(t){return t.includes(n)?a.createElement(g.p,{className:e.pallet},t):a.createElement(g.p,{className:e.pallet,style:{backgroundColor:"#F44336"}},t)}));var r=null;t[n].expected_pallets&&(r=t[n].expected_pallets);var o=a.createElement(g.s,{style:{textAlign:"center"}},"None");return t[n].loaded_pallets&&r&&(o=t[n].loaded_pallets.map(function(t){return t.includes(n)&&r.includes(t)?a.createElement(g.p,{className:e.pallet},t):a.createElement(g.p,{className:e.pallet,style:{backgroundColor:"#F44336"}},t)})),a.createElement(g.i,{item:!0,xs:6},a.createElement("div",{className:e.zone},a.createElement(g.p,{elevation:0},a.createElement(g.s,{variant:"h4"},n)),a.createElement(g.s,null,"Loaded in truck"),o,a.createElement(g.h,{className:e.divider}),a.createElement(g.s,null,"Ready to load"),l))})),a.createElement("div",{className:e.root},a.createElement(g.i,{container:!0,spacing:24,className:e.fluid},a.createElement(g.i,{item:!0,xs:12,className:e.row},a.createElement(g.s,{variant:"h3"},"Zones"),a.createElement(g.h,null)),n))}}]),t}(a.Component),q=Object(v.withStyles)({root:{flexGrow:1,backgroundColor:"#f0f0f0",minHeight:"100vh"},fluid:{padding:"20px"},row:{marginBottom:"10px"},zone:{padding:"10px",border:"2px dashed #616161","& h4":{textAlign:"center"}},pallet:{display:"inline-block",width:"50px",height:"50px",margin:"10px",lineHeight:"50px",textAlign:"center"},divider:{marginBottom:"10px"}})(U),J=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(p.a,null,l.a.createElement(S,null,l.a.createElement(h.a,null,l.a.createElement(d.a,{exact:!0,path:"/",component:B}),l.a.createElement(d.a,{path:"/palettes",component:G}),l.a.createElement(d.a,{path:"/zones",component:q}),l.a.createElement(d.a,{path:"/reports",component:L}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[220,2,1]]]);
//# sourceMappingURL=main.4dc3e4a4.chunk.js.map