"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[9590],{71417:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(98037),a=n(75271),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"}}]},name:"exclamation-circle",theme:"outlined"},s=n(58720),l=function(e,t){return a.createElement(s.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:o}))};var i=a.forwardRef(l)},42526:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(98037),a=n(75271),o={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 912H144c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32h360c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8H184v656h656V520c0-4.4 3.6-8 8-8h56c4.4 0 8 3.6 8 8v360c0 17.7-14.3 32-32 32zM770.87 199.13l-52.2-52.2a8.01 8.01 0 014.7-13.6l179.4-21c5.1-.6 9.5 3.7 8.9 8.9l-21 179.4c-.8 6.6-8.9 9.4-13.6 4.7l-52.4-52.4-256.2 256.2a8.03 8.03 0 01-11.3 0l-42.4-42.4a8.03 8.03 0 010-11.3l256.1-256.3z"}}]},name:"export",theme:"outlined"},s=n(58720),l=function(e,t){return a.createElement(s.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:o}))};var i=a.forwardRef(l)},65948:function(e,t,n){var r=n(98037),a=n(53162),o=n(34873),s=n(75271),l=n(24763),i=n(36795),u=n(52676),c=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],d=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],p=function(e,t){var n=e.fieldProps,d=e.children,p=e.params,f=e.proFieldProps,h=e.mode,g=e.valueEnum,m=e.request,v=e.showSearch,x=e.options,y=(0,a.Z)(e,c),Z=(0,s.useContext)(l.Z);return(0,u.jsx)(i.Z,(0,r.Z)((0,r.Z)({valueEnum:(0,o.h)(g),request:m,params:p,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,r.Z)({options:x,mode:h,showSearch:v,getPopupContainer:Z.getPopupContainer},n),ref:t,proFieldProps:f},y),{},{children:d}))},f=s.forwardRef((function(e,t){var n=e.fieldProps,c=e.children,p=e.params,f=e.proFieldProps,h=e.mode,g=e.valueEnum,m=e.request,v=e.options,x=(0,a.Z)(e,d),y=(0,r.Z)({options:v,mode:h||"multiple",labelInValue:!0,showSearch:!0,suffixIcon:null,autoClearSearchValue:!0,optionLabelProp:"label"},n),Z=(0,s.useContext)(l.Z);return(0,u.jsx)(i.Z,(0,r.Z)((0,r.Z)({valueEnum:(0,o.h)(g),request:m,params:p,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,r.Z)({getPopupContainer:Z.getPopupContainer},y),ref:t,proFieldProps:f},x),{},{children:c}))})),h=s.forwardRef(p);h.SearchSelect=f,h.displayName="ProFormComponent",t.Z=h},9477:function(e,t,n){var r=n(99459),a=n(98037),o=n(53162),s=n(31998),l=n(52739),i=n(60281),u=n(71770),c=n(75271),d=n(36795),p=n(52676),f=["fieldProps","proFieldProps"],h=["fieldProps","proFieldProps"],g="text",m=function(e){var t=(0,s.Z)(e.open||!1,{value:e.open,onChange:e.onOpenChange}),n=(0,r.Z)(t,2),o=n[0],u=n[1];return(0,p.jsx)(l.Z.Item,{shouldUpdate:!0,noStyle:!0,children:function(t){var n,r=t.getFieldValue(e.name||[]);return(0,p.jsx)(i.Z,(0,a.Z)((0,a.Z)({getPopupContainer:function(e){return e&&e.parentNode?e.parentNode:e},onOpenChange:function(e){return u(e)},content:(0,p.jsxs)("div",{style:{padding:"4px 0"},children:[null===(n=e.statusRender)||void 0===n?void 0:n.call(e,r),e.strengthText?(0,p.jsx)("div",{style:{marginTop:10},children:(0,p.jsx)("span",{children:e.strengthText})}):null]}),overlayStyle:{width:240},placement:"rightTop"},e.popoverProps),{},{open:o,children:e.children}))}})},v=function(e){var t=e.fieldProps,n=e.proFieldProps,r=(0,o.Z)(e,f);return(0,p.jsx)(d.Z,(0,a.Z)({valueType:g,fieldProps:t,filedConfig:{valueType:g},proFieldProps:n},r))};v.Password=function(e){var t=e.fieldProps,n=e.proFieldProps,s=(0,o.Z)(e,h),l=(0,c.useState)(!1),i=(0,r.Z)(l,2),f=i[0],v=i[1];return null!=t&&t.statusRender&&s.name?(0,p.jsx)(m,{name:s.name,statusRender:null==t?void 0:t.statusRender,popoverProps:null==t?void 0:t.popoverProps,strengthText:null==t?void 0:t.strengthText,open:f,onOpenChange:v,children:(0,p.jsx)("div",{children:(0,p.jsx)(d.Z,(0,a.Z)({valueType:"password",fieldProps:(0,a.Z)((0,a.Z)({},(0,u.Z)(t,["statusRender","popoverProps","strengthText"])),{},{onBlur:function(e){var n;null==t||null===(n=t.onBlur)||void 0===n||n.call(t,e),v(!1)},onClick:function(e){var n;null==t||null===(n=t.onClick)||void 0===n||n.call(t,e),v(!0)}}),proFieldProps:n,filedConfig:{valueType:g}},s))})}):(0,p.jsx)(d.Z,(0,a.Z)({valueType:"password",fieldProps:t,proFieldProps:n,filedConfig:{valueType:g}},s))},v.displayName="ProFormComponent",t.Z=v},58006:function(e,t,n){n.d(t,{Nm:function(){return p},fk:function(){return c}});var r=n(90228),a=n.n(r),o=n(26068),s=n.n(o),l=n(87999),i=n.n(l),u=n(18735);function c(e){return d.apply(this,arguments)}function d(){return(d=i()(a()().mark((function e(t){return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("/api/v1/thread/query/org",{method:"GET",params:s()({},t)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=i()(a()().mark((function e(t){return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("/api/v1/thread/close",{method:"POST",data:s()({},t)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},68042:function(e,t,n){n.r(t),n.d(t,{default:function(){return T}});var r=n(21544),a=n(43650),o=n(26068),s=n.n(o),l=n(67825),i=n.n(l),u=n(90228),c=n.n(u),d=n(87999),p=n.n(d),f=n(59153),h=n(58006),g=n(29244),m=n(96677),v=n(24229),x=n(42526),y=n(93061),Z=n(18735),P=n(58439),w=n(75271),j=n(52676),C=["current"],b=[{dataIndex:"index",valueType:"indexBorder",width:48},{title:(0,j.jsx)(Z.FormattedMessage,{id:"nickname",defaultMessage:"Nickname"}),dataIndex:"user",render:function(e,t){var n;return null===(n=t.user)||void 0===n?void 0:n.nickname}},{title:(0,j.jsx)(Z.FormattedMessage,{id:"type",defaultMessage:"Type"}),dataIndex:"type",hideInSearch:!0},{title:"未读数",dataIndex:"unreadCount",hideInSearch:!0},{title:(0,j.jsx)(Z.FormattedMessage,{id:"status",defaultMessage:"Status"}),dataIndex:"status",copyable:!0},{title:(0,j.jsx)(Z.FormattedMessage,{id:"client",defaultMessage:"Client"}),dataIndex:"client"},{title:(0,j.jsx)(Z.FormattedMessage,{id:"updatedAt",defaultMessage:"updatedAt"}),key:"updatedAt",dataIndex:"updatedAt",sorter:!0,hideInSearch:!0}],S=function(){var e=(0,Z.useIntl)(),t=(0,w.useRef)(),n=(0,g.u)((function(e){return e.currentOrg})),r=[].concat(b,[{title:e.formatMessage({id:"actions",defaultMessage:"Actions"}),valueType:"option",key:"option",render:function(t,n,r,a){return[(0,j.jsx)("a",{onClick:function(){},children:e.formatMessage({id:"edit",defaultMessage:"Edit"})},"editable")]}}]),a=function(){var e=p()(c()().mark((function e(){var t;return c()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("handleExportExcel"),t=localStorage.getItem(m.LA8),window.open((0,v.SV)()+"/api/v1/thread/export?uid="+n.uid+"pageNumber=0&pageSize=20&accessToken="+t);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,j.jsx)(y.Z,{columns:r,actionRef:t,cardBordered:!0,request:function(){var e=p()(c()().mark((function e(t,r,a){var o,l,u;return c()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("request:",t,r,a),t.current,o=i()(t,C),l=s()({pageNumber:t.current-1,orgUid:n.uid},o),e.next=5,(0,h.fk)(l);case 5:return u=e.sent,console.log("getAllThreads response:",l,u),200===u.code||f.yw.error(u.message),e.abrupt("return",{data:u.data.content,success:!0,total:u.data.totalElements});case 9:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),rowKey:"uid",search:{labelWidth:"auto"},pagination:{showQuickJumper:!0,onChange:function(e){console.log("page:",e)}},dateFormatter:"string",headerTitle:e.formatMessage({id:"email",defaultMessage:"Email"}),toolBarRender:function(){return[(0,j.jsx)(P.ZP,{icon:(0,j.jsx)(x.Z,{}),type:"primary",onClick:a,children:e.formatMessage({id:"export",defaultMessage:"Export"})},"button")]}})},M=n(92979),E=a.Z.Sider,F=a.Z.Content,T=function(){var e=(0,r.Z)(),t=e.leftSiderStyle,n=e.contentStyle;return(0,j.jsx)("div",{children:(0,j.jsxs)(a.Z,{children:[(0,j.jsx)(E,{style:t,children:(0,j.jsx)(M.Z,{type:m.X6W})}),(0,j.jsx)(a.Z,{children:(0,j.jsx)(F,{style:n,children:(0,j.jsx)(S,{})})})]})})}},8038:function(e,t,n){n.d(t,{Z:function(){return j}});var r=n(75271),a=n(82187),o=n.n(a),s=n(30454),l=n(99518),i=n(4166),u=n(10083),c=n(53557);const d=["wrap","nowrap","wrap-reverse"],p=["flex-start","flex-end","start","end","center","space-between","space-around","space-evenly","stretch","normal","left","right"],f=["center","start","end","flex-start","flex-end","self-start","self-end","baseline","normal","stretch"];var h=function(e,t){return o()(Object.assign(Object.assign(Object.assign({},((e,t)=>{const n=!0===t.wrap?"wrap":t.wrap;return{[`${e}-wrap-${n}`]:n&&d.includes(n)}})(e,t)),((e,t)=>{const n={};return f.forEach((r=>{n[`${e}-align-${r}`]=t.align===r})),n[`${e}-align-stretch`]=!t.align&&!!t.vertical,n})(e,t)),((e,t)=>{const n={};return p.forEach((r=>{n[`${e}-justify-${r}`]=t.justify===r})),n})(e,t)))};const g=e=>{const{componentCls:t}=e;return{[t]:{display:"flex","&-vertical":{flexDirection:"column"},"&-rtl":{direction:"rtl"},"&:empty":{display:"none"}}}},m=e=>{const{componentCls:t}=e;return{[t]:{"&-gap-small":{gap:e.flexGapSM},"&-gap-middle":{gap:e.flexGap},"&-gap-large":{gap:e.flexGapLG}}}},v=e=>{const{componentCls:t}=e,n={};return d.forEach((e=>{n[`${t}-wrap-${e}`]={flexWrap:e}})),n},x=e=>{const{componentCls:t}=e,n={};return f.forEach((e=>{n[`${t}-align-${e}`]={alignItems:e}})),n},y=e=>{const{componentCls:t}=e,n={};return p.forEach((e=>{n[`${t}-justify-${e}`]={justifyContent:e}})),n};var Z=(0,u.I$)("Flex",(e=>{const{paddingXS:t,padding:n,paddingLG:r}=e,a=(0,c.IX)(e,{flexGapSM:t,flexGap:n,flexGapLG:r});return[g(a),m(a),v(a),x(a),y(a)]}),(()=>({})),{resetStyle:!1}),P=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};const w=r.forwardRef(((e,t)=>{const{prefixCls:n,rootClassName:a,className:u,style:c,flex:d,gap:p,children:f,vertical:g=!1,component:m="div"}=e,v=P(e,["prefixCls","rootClassName","className","style","flex","gap","children","vertical","component"]),{flex:x,direction:y,getPrefixCls:w}=r.useContext(i.E_),j=w("flex",n),[C,b,S]=Z(j),M=null!=g?g:null==x?void 0:x.vertical,E=o()(u,a,null==x?void 0:x.className,j,b,S,h(j,e),{[`${j}-rtl`]:"rtl"===y,[`${j}-gap-${p}`]:(0,l.n)(p),[`${j}-vertical`]:M}),F=Object.assign(Object.assign({},null==x?void 0:x.style),c);return d&&(F.flex=d),p&&!(0,l.n)(p)&&(F.gap=p),C(r.createElement(m,Object.assign({ref:t,className:E,style:F},(0,s.Z)(v,["justify","wrap","align"])),f))}));var j=w}}]);