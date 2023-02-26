"use strict";(self.webpackChunk_06_3_nuiweb_cra=self.webpackChunk_06_3_nuiweb_cra||[]).push([[628],{8393:function(e,t,n){n.d(t,{Z:function(){return C}});var a=n(7313),r=n(6085),l=n(6492),i=n(530),s=n(5987),o=n(4942),d=n(7462),c=n(3061),u=n(454),p=n(6061),h=n(2879),f=n(8088),m=n(8340),v=n(1168),x="undefined"===typeof window?a.useEffect:a.useLayoutEffect,b=a.forwardRef((function(e,t){var n=e.alignItems,r=void 0===n?"center":n,l=e.autoFocus,i=void 0!==l&&l,o=e.button,u=void 0!==o&&o,b=e.children,g=e.classes,j=e.className,y=e.component,N=e.ContainerComponent,C=void 0===N?"li":N,Z=e.ContainerProps,w=(Z=void 0===Z?{}:Z).className,D=(0,s.Z)(Z,["className"]),F=e.dense,A=void 0!==F&&F,S=e.disabled,k=void 0!==S&&S,I=e.disableGutters,M=void 0!==I&&I,V=e.divider,E=void 0!==V&&V,L=e.focusVisibleClassName,R=e.selected,T=void 0!==R&&R,Y=(0,s.Z)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),_=a.useContext(m.Z),G={dense:A||_.dense||!1,alignItems:r},P=a.useRef(null);x((function(){i&&P.current&&P.current.focus()}),[i]);var z=a.Children.toArray(b),B=z.length&&(0,h.Z)(z[z.length-1],["ListItemSecondaryAction"]),$=a.useCallback((function(e){P.current=v.findDOMNode(e)}),[]),H=(0,f.Z)($,t),W=(0,d.Z)({className:(0,c.Z)(g.root,j,G.dense&&g.dense,!M&&g.gutters,E&&g.divider,k&&g.disabled,u&&g.button,"center"!==r&&g.alignItemsFlexStart,B&&g.secondaryAction,T&&g.selected),disabled:k},Y),O=y||"li";return u&&(W.component=y||"div",W.focusVisibleClassName=(0,c.Z)(g.focusVisible,L),O=p.Z),B?(O=W.component||y?O:"div","li"===C&&("li"===O?O="div":"li"===W.component&&(W.component="div")),a.createElement(m.Z.Provider,{value:G},a.createElement(C,(0,d.Z)({className:(0,c.Z)(g.container,w),ref:H},D),a.createElement(O,W,z),z.pop()))):a.createElement(m.Z.Provider,{value:G},a.createElement(O,(0,d.Z)({ref:H},W),z))})),g=(0,u.Z)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(b),j=a.forwardRef((function(e,t){var n,r=e.classes,l=e.className,i=e.component,o=void 0===i?"li":i,u=e.disableGutters,p=void 0!==u&&u,h=e.ListItemClasses,f=e.role,m=void 0===f?"menuitem":f,v=e.selected,x=e.tabIndex,b=(0,s.Z)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(n=void 0!==x?x:-1),a.createElement(g,(0,d.Z)({button:!0,role:m,tabIndex:n,component:o,selected:v,disableGutters:p,classes:(0,d.Z)({dense:r.dense},h),className:(0,c.Z)(r.root,l,v&&r.selected,!p&&r.gutters),ref:t},b))})),y=(0,u.Z)((function(e){return{root:(0,d.Z)({},e.typography.body1,(0,o.Z)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:(0,d.Z)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(j),N=n(6417),C=function(e){var t=e.name,n=e.handleChange,a=e.val,s=e.options?e.options:"";return(0,N.jsxs)(r.Z,{style:{width:"100%"},children:[(0,N.jsx)(l.Z,{id:"label-select-".concat(e.name),children:t}),(0,N.jsx)(i.Z,{labelId:"select-label",id:"simple-select",name:t,value:a[t],label:t,onChange:n,variant:"outlined",color:"primary",defaultValue:"",children:s.map((function(e){return(0,N.jsx)(y,{value:e.value,children:e.label},e.value)}))})]})}},5230:function(e,t,n){n.d(t,{w:function(){return r},z:function(){return a}});var a=[{value:"1",label:"01"},{value:"2",label:"02"},{value:"3",label:"03"},{value:"4",label:"04"},{value:"5",label:"05"},{value:"6",label:"06"},{value:"7",label:"07"},{value:"8",label:"08"},{value:"9",label:"09"},{value:"10",label:"10"},{value:"11",label:"11"},{value:"12",label:"12"}],r=[{value:"2019",label:"2019"},{value:"2020",label:"2020"},{value:"2021",label:"2021"},{value:"2022",label:"2022"},{value:"2023",label:"2023"},{value:"2024",label:"2024"}]},628:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var a=n(4165),r=n(4942),l=n(1413),i=n(5861),s=n(885),o=n(7313),d=n(8393),c=n(5230),u=n(774),p=n(6417),h=function(e){var t=e.filterData.filter((function(e,t,n){return n.findIndex((function(t){return e.Name===t.Name}))===t}));function n(t,n){return e.filterData.filter((function(e){return e.Name===t&&e.status===n})).length}function a(t,n){var a=e.filterData.filter((function(e){return e.Name===t&&e.status===n})).map((function(e){return e.date})),r="none";return a.length>0&&(r=a.reduce((function(e,t){return Date.parse(e)>Date.parse(t)?e:t}))),r}var r={width:200,overflow:"hidden",whiteSpace:"nowrap",padding:"5px 5px",color:"#333"};return(0,p.jsx)("div",{style:{width:"100%"},children:(0,p.jsxs)("table",{border:"1",style:{borderCollapse:"collapse",borderColor:"#DDD",backgroundColor:"#FFFFFF"},children:[(0,p.jsxs)("thead",{children:[(0,p.jsxs)("tr",{style:{backgroundColor:"#FFF",color:"#AAA"},children:[(0,p.jsx)("th",{rowSpan:"2",children:"name"}),(0,p.jsx)("th",{rowSpan:"2",children:"report"}),(0,p.jsx)("th",{colSpan:"2",children:"\u65e5\u6b21\u63d0\u51fa"}),(0,p.jsx)("th",{colSpan:"2",children:"\u4e00\u6642\u4fdd\u5b58"}),(0,p.jsx)("th",{colSpan:"2",children:"\u672a\u63d0\u51fa"})]}),(0,p.jsxs)("tr",{style:{backgroundColor:"#FFF",color:"#AAA"},children:[(0,p.jsx)("th",{children:"Count"}),(0,p.jsx)("th",{children:"Max"}),(0,p.jsx)("th",{children:"Count"}),(0,p.jsx)("th",{children:"Max"}),(0,p.jsx)("th",{children:"Count"}),(0,p.jsx)("th",{children:"Max"})]})]}),(0,p.jsx)("tbody",{children:t.map((function(e,t){return(0,p.jsxs)("tr",{children:[(0,p.jsx)("td",{style:r,children:e.Name}),(0,p.jsx)("td",{style:r,children:e.Report}),(0,p.jsx)("td",{style:r,children:n(e.Name,"\u65e5\u6b21\u63d0\u51fa")}),(0,p.jsx)("td",{style:r,children:a(e.Name,"\u65e5\u6b21\u63d0\u51fa")}),(0,p.jsx)("td",{style:r,children:n(e.Name,"\u4e00\u6642\u4fdd\u5b58")}),(0,p.jsx)("td",{style:r,children:a(e.Name,"\u4e00\u6642\u4fdd\u5b58")}),(0,p.jsx)("td",{style:r,children:n(e.Name,"\u672a\u63d0\u51fa")}),(0,p.jsx)("td",{style:r,children:a(e.Name,"\u672a\u63d0\u51fa")})]},"row-".concat(t))}))})]})})},f=function(e){var t=e.filterData,n={width:200,overflow:"hidden",whiteSpace:"nowrap",padding:"5px 5px"};console.log(t);var a=function(e,t){var n=!1;e&&t&&(n=new Date(Date.parse("2022-01-01T".concat(("0"+e).slice(-5),":00"))).getTime()-new Date(Date.parse("2022-01-01T".concat(("0"+t).slice(-5),":00"))).getTime());return{backgroundColor:n?"orange":""}};return(0,p.jsx)("div",{style:{width:"100%"},children:(0,p.jsxs)("table",{border:"1",style:{borderCollapse:"collapse",borderColor:"#DDD",backgroundColor:"#FFFFFF"},children:[(0,p.jsx)("thead",{children:(0,p.jsxs)("tr",{style:{backgroundColor:"#FFF",color:"#AAA"},children:[(0,p.jsx)("th",{children:"date"}),(0,p.jsx)("th",{children:"Name"}),(0,p.jsx)("th",{children:"type"}),(0,p.jsx)("th",{children:"\u5b9f\u50cd\u6642\u9593"}),(0,p.jsx)("th",{children:"PJ\u5b9f\u50cd"})]})}),(0,p.jsx)("tbody",{children:t.map((function(e,t){return(0,p.jsxs)("tr",{style:a(e.actual,e.pjsum),children:[(0,p.jsx)("td",{style:n,children:e.date}),(0,p.jsx)("td",{style:n,children:e.Name}),(0,p.jsx)("td",{style:n,children:e.status}),(0,p.jsx)("td",{style:n,children:("0"+e.actual).slice(-5)}),(0,p.jsx)("td",{style:n,children:("0"+e.pjsum).slice(-5)})]},t)}))})]})})},m=n(2982),v=(0,n(3386).Z)({root:{display:"flex",flexWrap:"wrap",gap:20},card:{width:310,height:200,backgroundColor:"#FAA",display:"flex",flexDirection:"row","border-radius":"8px","box-shadow":"2px 3px 3px 2px #0a0a0a50","&>div":{width:150,paddingLeft:8},"&>section":{display:"flex",gap:20}},status:{display:"flex",flexDirection:"row",gap:10,flexWrap:"wrap"},plot:{"&>div.recharts-wrapper":{"&>svg":{overflow:"visible",position:"absolute",bottom:"-20px"}}},calendar:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr 1fr 1fr","&>span":{border:"1px solid #cccccc80",padding:"2px 2px",textAlign:"center"}}}),x=function(e){var t=v(),n=(0,o.useState)({calendar:[]}),a=(0,s.Z)(n,2),r=a[0],l=a[1],i=["\u65e5\u6b21\u63d0\u51fa","\u4e00\u6642\u4fdd\u5b58","\u672a\u63d0\u51fa"],d=(0,o.useState)([{Name:"",Value:[]}]),c=(0,s.Z)(d,2),u=c[0],h=c[1],f=e.users.filter((function(t){return"All"!==t.label&&("All"===e.val.Name||e.val.Name===t.label)})),x=(0,o.useState)(20),b=(0,s.Z)(x,2),g=b[0],j=b[1];new Date(e.val.Year,e.val.Month,0).getDate();function y(t,n){return e.filterData.filter((function(e){return e.Name===t&&e.status===n})).length}function N(t,n){var a=e.filterData.filter((function(e){return e.Name===t&&e.status===n})).map((function(e){return e.date})),r="none";return a.length>0&&(r=a.reduce((function(e,t){return Date.parse(e)>Date.parse(t)?e:t}))),r}function C(e,t){var n=String(e).split("-")[2],a="#CCF";return a=n<7?"#FAA":n<15?"#FD5":n<28?"#88F":"#CFF","none"===e&&(a="#D77"),a}(0,o.useEffect)((function(){console.log(e.val);var t=f.map((function(t){var n=i.map((function(e){return y(t.value,e)})).reduce((function(e,t){return e+t}));j(g<n?n:g);var a=e.filterData.find((function(e){return e.Name===t.label}));return{Name:t.value,LastDate:N(t.value,"\u65e5\u6b21\u63d0\u51fa"),Count:y(t.value,"\u65e5\u6b21\u63d0\u51fa"),TotalCount:n,Report:a?a.Report.replace("\u72b6\u614b\uff1a",""):"",Value:e.filterData.filter((function(e){return e.Name===t.value&&"\u65e5\u6b21\u63d0\u51fa"===e.status})).map((function(e){return e.date.split("-")[2]}))}}));h(t),function(e,t){var n=["\u65e5","\u6708","\u706b","\u6c34","\u6728","\u91d1","\u571f"],a=new Date(e,t-1,1).getDay(),r=new Date(e,t-1,1-a),i=(0,m.Z)(Array(42)).map((function(e,a){var l={type:r.getMonth()-t+1,date:r.getDate(),yobi:n[r.getDay()]};return r.setDate(r.getDate()+1),l}));console.log(Z(i,7)),l({calendar:i})}(Number(e.val.Year),Number(e.val.Month))}),[e]);var Z=function(e,t){var n=Math.ceil(e.length/t);return new Array(n).fill().map((function(n,a){return e.slice(a*t,(a+1)*t)}))};return(0,p.jsxs)("div",{children:[(0,p.jsxs)("div",{className:t.status,children:[(0,p.jsxs)("div",{children:[(0,p.jsx)("span",{style:{color:"#D77"},children:"\u25a0"}),"\u30c7\u30fc\u30bf\u306a\u3057"]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("span",{style:{color:"#FAA"},children:"\u25a0"}),"7\u65e5\u4ee5\u524d\u672a\u5165\u529b\u3042\u308a"]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("span",{style:{color:"#FD5"},children:"\u25a0"}),"15\u65e5\u4ee5\u524d\u672a\u5165\u529b\u3042\u308a"]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("span",{style:{color:"#88F"},children:"\u25a0"}),"28\u65e5\u4ee5\u524d\u672a\u5165\u529b\u3042\u308a"]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("span",{style:{color:"#CFF"},children:"\u25a0"}),"28\u65e5\u307e\u3067\u5165\u529bOK"]})]}),(0,p.jsx)("div",{className:t.root,children:u.map((function(e,n){return(0,p.jsxs)("div",{className:t.card,style:{backgroundColor:C(e.LastDate)},children:[(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{children:e.Name}),(0,p.jsx)("span",{children:e.Report}),(0,p.jsx)("div",{children:e.LastDate})]}),(0,p.jsx)("section",{className:t.plot,children:(0,p.jsx)("div",{className:t.calendar,children:r.calendar.map((function(t,n){return(0,p.jsx)("span",{style:{color:0===t.type?"white":"transparent",backgroundColor:e.Value.includes(String(t.date))&&0===t.type?"#668888":"#88888840"},children:t.date},n)}))})})]},n)}))})]})},b=n(6573),g=function(){var e=(0,o.useState)([]),t=(0,s.Z)(e,2),n=t[0],m=t[1],v=(0,o.useState)([]),g=(0,s.Z)(v,2),j=g[0],y=g[1],N=(0,o.useState)([]),C=(0,s.Z)(N,2),Z=C[0],w=C[1],D=(0,o.useState)([]),F=(0,s.Z)(D,2),A=(F[0],F[1]),S=(0,o.useState)({Name:"",Month:"4",Year:"2022",type:"",status:""}),k=(0,s.Z)(S,2),I=k[0],M=k[1];function V(){return(V=(0,i.Z)((0,a.Z)().mark((function e(){var t,n,r,i,s,o,d,c,u;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},n=[],e.next=4,b.Z.get("/api/xxx3");case 4:return r=e.sent,t=r.data,e.next=8,b.Z.post("/api/data",{files:t});case 8:i=e.sent,n=i.data,A(n),(s=n.filter((function(e,t,n){return n.findIndex((function(t){return t.Num===e.Num}))===t})).map((function(e){return{value:e.Name,label:e.Name}}))).unshift({value:"All",label:"All"}),w(s),o=new Date,d=(0,l.Z)((0,l.Z)({},I),{},{Name:"All",Year:String(o.getFullYear()),Month:String(o.getMonth()+1)}),M(d),c=n.filter((function(e,t,n){return n.findIndex((function(t){return t.date===e.date&&t.Num===e.Num}))===t})),y(c),u=c.filter((function(e){return("All"===d.Name||e.Name===d.Name)&&e.date.split("-")[0]===d.Year&&e.date.split("-")[1]===d.Month})),m(u);case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(0,o.useEffect)((function(){!function(){V.apply(this,arguments)}()}),[]);var E=function(e){var t=(0,l.Z)((0,l.Z)({},I),{},(0,r.Z)({},e.target.name,e.target.value));M(t),console.log(t);var n=j.filter((function(e){return("All"===t.Name||e.Name===t.Name)&&e.date.split("-")[0]===t.Year&&e.date.split("-")[1]===t.Month}));m(n)};return(0,p.jsxs)("div",{children:[(0,p.jsxs)("div",{style:{display:"flex",gap:20,minWidth:240,margin:20,width:"80%"},children:[(0,p.jsx)(d.Z,{options:Z,name:"Name",val:I,initialValue:"",handleChange:E}),(0,p.jsx)(d.Z,{options:c.w,name:"Year",val:I,initialValue:"",handleChange:E}),(0,p.jsx)(d.Z,{options:c.z,name:"Month",val:I,initialValue:"",handleChange:E})]}),(0,p.jsxs)(u.e,{labels:["report","summary","details"],children:[(0,p.jsx)(x,{handleChange:E,users:Z,val:I,filterData:n}),(0,p.jsx)(h,{handleChange:E,users:Z,val:I,filterData:n}),(0,p.jsx)(f,{handleChange:E,users:Z,val:I,filterData:n})]})]})}}}]);