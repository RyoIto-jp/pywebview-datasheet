"use strict";(self.webpackChunk_06_3_nuiweb_cra=self.webpackChunk_06_3_nuiweb_cra||[]).push([[6],{8393:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(7313),o=a(6085),r=a(6492),i=a(530),l=a(5987),s=a(4942),c=a(7462),d=a(3061),p=a(454),u=a(6061),m=a(2879),h=a(8088),g=a(8340),b=a(1168),f="undefined"===typeof window?n.useEffect:n.useLayoutEffect,y=n.forwardRef((function(e,t){var a=e.alignItems,o=void 0===a?"center":a,r=e.autoFocus,i=void 0!==r&&r,s=e.button,p=void 0!==s&&s,y=e.children,v=e.classes,x=e.className,Z=e.component,w=e.ContainerComponent,k=void 0===w?"li":w,C=e.ContainerProps,E=(C=void 0===C?{}:C).className,j=(0,l.Z)(C,["className"]),S=e.dense,N=void 0!==S&&S,I=e.disabled,R=void 0!==I&&I,$=e.disableGutters,z=void 0!==$&&$,L=e.divider,A=void 0!==L&&L,B=e.focusVisibleClassName,D=e.selected,M=void 0!==D&&D,T=(0,l.Z)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),F=n.useContext(g.Z),P={dense:N||F.dense||!1,alignItems:o},W=n.useRef(null);f((function(){i&&W.current&&W.current.focus()}),[i]);var O=n.Children.toArray(y),_=O.length&&(0,m.Z)(O[O.length-1],["ListItemSecondaryAction"]),V=n.useCallback((function(e){W.current=b.findDOMNode(e)}),[]),G=(0,h.Z)(V,t),H=(0,c.Z)({className:(0,d.Z)(v.root,x,P.dense&&v.dense,!z&&v.gutters,A&&v.divider,R&&v.disabled,p&&v.button,"center"!==o&&v.alignItemsFlexStart,_&&v.secondaryAction,M&&v.selected),disabled:R},T),Y=Z||"li";return p&&(H.component=Z||"div",H.focusVisibleClassName=(0,d.Z)(v.focusVisible,B),Y=u.Z),_?(Y=H.component||Z?Y:"div","li"===k&&("li"===Y?Y="div":"li"===H.component&&(H.component="div")),n.createElement(g.Z.Provider,{value:P},n.createElement(k,(0,c.Z)({className:(0,d.Z)(v.container,E),ref:G},j),n.createElement(Y,H,O),O.pop()))):n.createElement(g.Z.Provider,{value:P},n.createElement(Y,(0,c.Z)({ref:G},H),O))})),v=(0,p.Z)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(y),x=n.forwardRef((function(e,t){var a,o=e.classes,r=e.className,i=e.component,s=void 0===i?"li":i,p=e.disableGutters,u=void 0!==p&&p,m=e.ListItemClasses,h=e.role,g=void 0===h?"menuitem":h,b=e.selected,f=e.tabIndex,y=(0,l.Z)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(a=void 0!==f?f:-1),n.createElement(v,(0,c.Z)({button:!0,role:g,tabIndex:a,component:s,selected:b,disableGutters:u,classes:(0,c.Z)({dense:o.dense},m),className:(0,d.Z)(o.root,r,b&&o.selected,!u&&o.gutters),ref:t},y))})),Z=(0,p.Z)((function(e){return{root:(0,c.Z)({},e.typography.body1,(0,s.Z)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:(0,c.Z)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(x),w=a(6417),k=function(e){var t=e.name,a=e.handleChange,n=e.val,l=e.options?e.options:"";return(0,w.jsxs)(o.Z,{style:{width:"100%"},children:[(0,w.jsx)(r.Z,{id:"label-select-".concat(e.name),children:t}),(0,w.jsx)(i.Z,{labelId:"select-label",id:"simple-select",name:t,value:n[t],label:t,onChange:a,variant:"outlined",color:"primary",defaultValue:"",children:l.map((function(e){return(0,w.jsx)(Z,{value:e.value,children:e.label},e.value)}))})]})}},5230:function(e,t,a){a.d(t,{w:function(){return o},z:function(){return n}});var n=[{value:"1",label:"01"},{value:"2",label:"02"},{value:"3",label:"03"},{value:"4",label:"04"},{value:"5",label:"05"},{value:"6",label:"06"},{value:"7",label:"07"},{value:"8",label:"08"},{value:"9",label:"09"},{value:"10",label:"10"},{value:"11",label:"11"},{value:"12",label:"12"}],o=[{value:"2019",label:"2019"},{value:"2020",label:"2020"},{value:"2021",label:"2021"},{value:"2022",label:"2022"},{value:"2023",label:"2023"},{value:"2024",label:"2024"}]},2006:function(e,t,a){a.r(t),a.d(t,{default:function(){return L}});var n=a(4942),o=a(4165),r=a(1413),i=a(5861),l=a(2982),s=a(885),c=a(7313),d=a(5230),p=a(337),u=a(4214),m=a(7462),h=a(5987),g=a(3061),b=a(4826),f=a(454),y=a(9685),v={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},x=c.forwardRef((function(e,t){var a=e.align,n=void 0===a?"inherit":a,o=e.classes,r=e.className,i=e.color,l=void 0===i?"initial":i,s=e.component,d=e.display,p=void 0===d?"initial":d,u=e.gutterBottom,b=void 0!==u&&u,f=e.noWrap,x=void 0!==f&&f,Z=e.paragraph,w=void 0!==Z&&Z,k=e.variant,C=void 0===k?"body1":k,E=e.variantMapping,j=void 0===E?v:E,S=(0,h.Z)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),N=s||(w?"p":j[C]||v[C])||"span";return c.createElement(N,(0,m.Z)({className:(0,g.Z)(o.root,r,"inherit"!==C&&o[C],"initial"!==l&&o["color".concat((0,y.Z)(l))],x&&o.noWrap,b&&o.gutterBottom,w&&o.paragraph,"inherit"!==n&&o["align".concat((0,y.Z)(n))],"initial"!==p&&o["display".concat((0,y.Z)(p))]),ref:t},S))})),Z=(0,f.Z)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(x),w=c.forwardRef((function(e,t){e.checked;var a=e.classes,n=e.className,o=e.control,r=e.disabled,i=(e.inputRef,e.label),l=e.labelPlacement,s=void 0===l?"end":l,d=(e.name,e.onChange,e.value,(0,h.Z)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","name","onChange","value"])),p=(0,b.Z)(),u=r;"undefined"===typeof u&&"undefined"!==typeof o.props.disabled&&(u=o.props.disabled),"undefined"===typeof u&&p&&(u=p.disabled);var f={disabled:u};return["checked","name","onChange","value","inputRef"].forEach((function(t){"undefined"===typeof o.props[t]&&"undefined"!==typeof e[t]&&(f[t]=e[t])})),c.createElement("label",(0,m.Z)({className:(0,g.Z)(a.root,n,"end"!==s&&a["labelPlacement".concat((0,y.Z)(s))],u&&a.disabled),ref:t},d),c.cloneElement(o,f),c.createElement(Z,{component:"span",className:(0,g.Z)(a.label,u&&a.disabled)},i))})),k=(0,f.Z)((function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}}),{name:"MuiFormControlLabel"})(w),C=a(3644),E=a(6455),j=c.forwardRef((function(e,t){var a=e.classes,n=e.className,o=e.color,r=void 0===o?"secondary":o,i=e.edge,l=void 0!==i&&i,s=e.size,d=void 0===s?"medium":s,p=(0,h.Z)(e,["classes","className","color","edge","size"]),u=c.createElement("span",{className:a.thumb});return c.createElement("span",{className:(0,g.Z)(a.root,n,{start:a.edgeStart,end:a.edgeEnd}[l],"small"===d&&a["size".concat((0,y.Z)(d))])},c.createElement(E.Z,(0,m.Z)({type:"checkbox",icon:u,checkedIcon:u,classes:{root:(0,g.Z)(a.switchBase,a["color".concat((0,y.Z)(r))]),input:a.input,checked:a.checked,disabled:a.disabled},ref:t},p)),c.createElement("span",{className:a.track}))})),S=(0,f.Z)((function(e){return{root:{display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:"light"===e.palette.type?.12:.1}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,C.Fq)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.primary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,C.Fq)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.secondary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}}),{name:"MuiSwitch"})(j),N=a(3386),I=a(8393),R=a(6573),$=a(6417),z=(0,N.Z)({root:{padding:"12px 40px"},members:{display:"flex",flexWrap:"wrap",flexDirection:"row",height:120,overflowY:"scroll",padding:"10px 20px 0 20px",border:"solid 1px #CCC",backgroundColor:"#EEEEEE80",position:"relative","&> div":{padding:2,color:"#777",width:200,display:"flex",gap:12}},membermsg:{color:"#777",textAlign:"right",fontSize:".85rem"}}),L=function(){var e=(0,c.useState)({text:"",type:0}),t=(0,s.Z)(e,2),a=t[0],m=t[1],h=(0,c.useState)([]),g=(0,s.Z)(h,2),b=g[0],f=g[1],y=(0,c.useState)({Year:"2021",Month:"4",username:"",password:"",members:"",isSelf:!0,async:!1}),v=(0,s.Z)(y,2),x=v[0],Z=v[1],w=z();function C(e,t){console.log(e),console.log(t);var a=(0,l.Z)(t);a.filter((function(t){return e.includes(t.id)})).map((function(e){return e.progress=100,e})),f(a),A(e)}(0,c.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(){var a,n,i,l;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.Z.get("/api/users");case 2:a=e.sent,n=a.data.map((function(e){return(0,r.Z)((0,r.Z)({},e),{},{progress:0})})).filter((function(e){return"1"===e.status})),f(n),console.log(n),i=new Date,l={Year:i.getFullYear(),Month:String(i.getMonth()+1),username:"",password:"",members:n.map((function(e){return e.id})).join(","),isSelf:!0,async:!1},Z(l),console.log(t),t.addEventListener("progress-item",(function(e){C(e.data,n)}));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=new EventSource("/api/stream");return e(),function(){}}),[]);var E=function(e){Z((0,r.Z)((0,r.Z)({},x),{},(0,n.Z)({},e.target.name,e.target.value)))},j=function(e){Z((0,r.Z)((0,r.Z)({},x),{},(0,n.Z)({},e.target.name,e.target.checked)))};function N(){return(N=(0,i.Z)((0,o.Z)().mark((function e(){var t,a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Submit arg"),console.log(x),e.next=4,R.Z.post("/api/company",x);case 4:"error"===(t=e.sent).data&&A("ERROR. \u30e1\u30f3\u30d0\u30fc\u60c5\u5831\u304c\u5165\u529b\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002USERS\u30bf\u30d6\u3067\u8a2d\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),console.log("Submit ret"),console.log(t),(a=(0,l.Z)(b)).map((function(e){return e.progress=100,e})),f(a);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var L=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(){var t,a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("loadconfig"),e.next=3,R.Z.get("/api/loadconfig?obj_name=company_cond");case 3:t=e.sent,(a=t.data).members=x.members,console.log(a),Z(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function A(e){return B.apply(this,arguments)}function B(){return(B=(0,i.Z)((0,o.Z)().mark((function e(t){var a,n,r,i,s;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.toUpperCase().includes("ERROR"),console.log(a),n=(0,l.Z)(b),"THREAD"===t.slice(0,6)?(r={ENTER:20,LOGIN:40,FIND:50,LOADED:60,EXIT:100},i=t.slice(8,14),s=r[t.split("-")[1].trim()],console.log(i,s,n.findIndex((function(e){return e.id===i}))),console.log(t),n[n.findIndex((function(e){return e.id===i}))].progress=s,f(n)):m({text:t,type:a?9:0});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}try{window.eel.expose(A,"pyUpdateMessage")}catch(D){}return(0,$.jsxs)("div",{style:{display:"flex",gap:10,width:"80%",minWidth:240,margin:20,flexDirection:"column"},children:[(0,$.jsxs)("h3",{style:{display:"flex",justifyContent:"space-between"},children:[(0,$.jsx)("span",{children:"Company Data Organization"}),(0,$.jsx)(p.Z,{onClick:L,size:"small",variant:"outlined",children:"load history"})]}),a.text&&0===a.type&&(0,$.jsx)("div",{style:{color:"gray",backgroundColor:"#EEF5FF",fontSize:"small",width:"80%",minWidth:240,padding:10,border:"1px solid #CCC"},children:a.text}),a.text&&9===a.type&&(0,$.jsx)("div",{style:{color:"red",backgroundColor:"#FEC",fontSize:"small",width:"80%",minWidth:240,padding:10,border:"1px solid #CCC"},children:a.text}),(0,$.jsx)("br",{}),(0,$.jsxs)("div",{style:{display:"flex",gap:20,minWidth:240},children:[(0,$.jsx)(u.Z,{style:{width:"100%"},label:"username",name:"username",placeholder:"username",variant:"standard",focused:!0,value:x.username,onChange:E,helperText:"\u203b \u793e\u54e1\u756a\u53f7"}),(0,$.jsx)(u.Z,{style:{width:"100%"},label:"password",name:"password",type:"password",variant:"standard",value:x.password,onChange:E,focused:!0,helperText:""})]}),(0,$.jsxs)("div",{style:{display:"flex",gap:20,minWidth:240,marginTop:20},children:[(0,$.jsx)(I.Z,{options:d.w,name:"Year",val:x,initialValue:2021,handleChange:E}),(0,$.jsx)(I.Z,{options:d.z,name:"Month",val:x,initialValue:"04",handleChange:E})]}),(0,$.jsx)("br",{}),(0,$.jsxs)("div",{children:[(0,$.jsx)(k,{control:(0,$.jsx)(S,{checked:x.isSelf,name:"isSelf",onChange:j,color:"primary"}),label:"\u81ea\u8eab\u306e\u30c7\u30fc\u30bf\u3092\u542b\u3081\u308b",style:{color:"#888"}}),(0,$.jsx)(k,{control:(0,$.jsx)(S,{checked:x.async,name:"async",onChange:j,color:"primary"}),label:"\u975e\u540c\u671f\u51e6\u7406\u3092\u6709\u52b9\u306b\u3059\u308b",style:{color:"#888"}})]}),(0,$.jsx)("div",{className:w.members,children:b.map((function(e,t){return(0,$.jsxs)("div",{children:[(0,$.jsx)("span",{children:e.id}),(0,$.jsx)("span",{children:e.name}),(0,$.jsxs)("span",{children:[e.progress,"%"]})]},"user-".concat(e.id))}))}),(0,$.jsx)("span",{className:w.membermsg,children:"\u203b \u8aad\u307f\u8fbc\u307f\u305f\u3044\u30e6\u30fc\u30b6\u30fc\u60c5\u5831\u306f\u300cUSER\u300d\u30bf\u30d6\u304b\u3089\u7de8\u96c6\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),(0,$.jsx)("div",{children:(0,$.jsx)("hr",{})}),(0,$.jsxs)("div",{style:{display:"flex",gap:10},children:[(0,$.jsx)(p.Z,{onClick:function(){return N.apply(this,arguments)},variant:"contained",color:"primary",children:"send"}),(0,$.jsx)(p.Z,{onClick:function(){window.close()},variant:"contained",color:"secondary",children:"cancel"})]})]})}}}]);