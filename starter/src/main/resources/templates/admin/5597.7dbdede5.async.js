"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[5597],{65060:function(e,r,t){t.d(r,{Z:function(){return s}});var n=t(13800),o=t(75271),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"}}]},name:"exclamation-circle",theme:"outlined"},l=t(45791),c=function(e,r){return o.createElement(l.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:r,icon:a}))};var s=o.forwardRef(c)},25203:function(e,r,t){t.d(r,{Z:function(){return s}});var n=t(13800),o=t(75271),a={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 912H144c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32h360c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8H184v656h656V520c0-4.4 3.6-8 8-8h56c4.4 0 8 3.6 8 8v360c0 17.7-14.3 32-32 32zM770.87 199.13l-52.2-52.2a8.01 8.01 0 014.7-13.6l179.4-21c5.1-.6 9.5 3.7 8.9 8.9l-21 179.4c-.8 6.6-8.9 9.4-13.6 4.7l-52.4-52.4-256.2 256.2a8.03 8.03 0 01-11.3 0l-42.4-42.4a8.03 8.03 0 010-11.3l256.1-256.3z"}}]},name:"export",theme:"outlined"},l=t(45791),c=function(e,r){return o.createElement(l.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:r,icon:a}))};var s=o.forwardRef(c)},54816:function(e,r,t){t.d(r,{Nm:function(){return g},fk:function(){return d}});var n=t(90228),o=t.n(n),a=t(26068),l=t.n(a),c=t(87999),s=t.n(c),i=t(45234);function d(e){return u.apply(this,arguments)}function u(){return(u=s()(o()().mark((function e(r){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.request)("/api/v1/thread/query/org",{method:"GET",params:l()({},r)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return p.apply(this,arguments)}function p(){return(p=s()(o()().mark((function e(r){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.request)("/api/v1/thread/close",{method:"POST",data:l()({},r)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},35597:function(e,r,t){var n=t(26068),o=t.n(n),a=t(67825),l=t.n(a),c=t(90228),s=t.n(c),i=t(87999),d=t.n(i),u=t(48305),g=t.n(u),p=t(37240),f=t(54816),h=t(92785),m=t(95877),v=t(64453),b=t(49437),C=t(65060),y=t(25203),x=t(15161),k=t(45234),w=t(8591),S=t(71275),M=t(42502),$=t(75271),O=t(52676),j=["current"];r.Z=function(e){e.type;var r=(0,k.useIntl)(),t=(0,$.useRef)(),n=(0,m.u)((function(e){return e.currentOrg})),a=(0,h.Z)().translateString,c=w.Z.useModal(),i=g()(c,2),u=i[0],I=i[1],T=[{dataIndex:"index",valueType:"indexBorder",width:48},{title:(0,O.jsx)(k.FormattedMessage,{id:"nickname",defaultMessage:"Nickname"}),dataIndex:"userNickname",hideInSearch:!0,render:function(e,r){var t;return(0,O.jsx)(O.Fragment,{children:a(null==r||null===(t=r.user)||void 0===t?void 0:t.nickname)})}},{title:(0,O.jsx)(k.FormattedMessage,{id:"type",defaultMessage:"Type"}),dataIndex:"type",copyable:!0},{title:(0,O.jsx)(k.FormattedMessage,{id:"unreadCount",defaultMessage:"Unread Count"}),dataIndex:"unreadCount",hideInSearch:!0},{title:(0,O.jsx)(k.FormattedMessage,{id:"status",defaultMessage:"Status"}),dataIndex:"status",copyable:!0,hideInSearch:!0},{title:"所有者",dataIndex:"ownerNickname",render:function(e,r){var t;return(0,O.jsx)(O.Fragment,{children:(0,O.jsx)(S.Z,{children:null==r||null===(t=r.owner)||void 0===t?void 0:t.nickname})})}},{title:"来源",dataIndex:"client",hideInSearch:!0},{title:(0,O.jsx)(k.FormattedMessage,{id:"updatedAt",defaultMessage:"updatedAt"}),key:"updatedAt",dataIndex:"updatedAt",sorter:!0,hideInSearch:!0}],E=[].concat(T,[{title:r.formatMessage({id:"actions",defaultMessage:"Actions"}),valueType:"option",key:"option",width:50,render:function(e,t,n,o){return[!Z(t)&&(0,O.jsx)("a",{onClick:function(){var e,n;e=t,u.confirm({title:r.formatMessage({id:"closeTip",defaultMessage:"Close Tip"}),icon:(0,O.jsx)(C.Z,{}),content:"".concat(r.formatMessage({id:"closeASure",defaultMessage:"closeASure"}),"【").concat(a(null==e||null===(n=e.user)||void 0===n?void 0:n.nickname),"】？"),onOk:function(){N(e)},onCancel:function(){},okText:r.formatMessage({id:"ok"}),cancelText:r.formatMessage({id:"cancel"})})},children:"关闭"},"editable")]}}]),Z=function(e){var r;return(null==e||null===(r=e.status)||void 0===r?void 0:r.indexOf("CLOSED"))>-1},N=function(){var e=d()(s()().mark((function e(n){var o,a;return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("handleCloseThread:",n),p.yw.loading(r.formatMessage({id:"closing",defaultMessage:"Closing"})),e.next=4,(0,f.Nm)(n);case 4:o=e.sent,console.log("handleCloseThread response:",n,o),200===o.code?(p.yw.destroy(),p.yw.success(r.formatMessage({id:"close.success",defaultMessage:"Close Success"})),null===(a=t.current)||void 0===a||a.reload()):(p.yw.destroy(),p.yw.error(o.message));case 7:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),B=function(){var e=d()(s()().mark((function e(){var r;return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("handleExportExcel"),r=localStorage.getItem(v.LA8),window.open((0,b.SV)()+"/api/v1/thread/export?uid="+n.uid+"&pageNumber=0&pageSize=20&accessToken="+r);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(x.Z,{columns:E,actionRef:t,cardBordered:!0,request:function(){var e=d()(s()().mark((function e(r,t,a){var c,i,d;return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("request:",r,t,a),r.current,c=l()(r,j),i=o()({pageNumber:r.current-1,orgUid:n.uid},c),e.next=5,(0,f.fk)(i);case 5:return d=e.sent,console.log("getAllThreads response:",d,i),200===d.code||p.yw.error(d.message),e.abrupt("return",{data:d.data.content,success:!0,total:d.data.totalElements});case 9:case"end":return e.stop()}}),e)})));return function(r,t,n){return e.apply(this,arguments)}}(),rowKey:"uid",search:{labelWidth:"auto"},pagination:{showQuickJumper:!0,onChange:function(e){console.log("page:",e)}},dateFormatter:"string",headerTitle:r.formatMessage({id:"thread",defaultMessage:"Thread"}),toolBarRender:function(){return[(0,O.jsx)(M.ZP,{icon:(0,O.jsx)(y.Z,{}),type:"primary",onClick:B,children:r.formatMessage({id:"export",defaultMessage:"Export"})},"button")]}}),I]})}},71275:function(e,r,t){t.d(r,{Z:function(){return T}});var n=t(75271),o=t(82187),a=t.n(o),l=t(2021),c=t(32919),s=t(64931),i=t(70504),d=t(78997),u=t(34662),g=t(54325),p=t(99978),f=t(20176),h=t(95732),m=t(94598);const v=e=>{const{lineWidth:r,fontSizeIcon:t,calc:n}=e,o=e.fontSizeSM;return(0,h.IX)(e,{tagFontSize:o,tagLineHeight:(0,g.bf)(n(e.lineHeightSM).mul(o).equal()),tagIconSize:n(t).sub(n(r).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:e.defaultBg})},b=e=>({defaultBg:new p.C(e.colorFillQuaternary).onBackground(e.colorBgContainer).toHexString(),defaultColor:e.colorText});var C=(0,m.I$)("Tag",(e=>(e=>{const{paddingXXS:r,lineWidth:t,tagPaddingHorizontal:n,componentCls:o,calc:a}=e,l=a(n).sub(t).equal(),c=a(r).sub(t).equal();return{[o]:Object.assign(Object.assign({},(0,f.Wf)(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:l,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:`${(0,g.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",position:"relative",[`&${o}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},[`${o}-close-icon`]:{marginInlineStart:c,fontSize:e.tagIconSize,color:e.colorTextDescription,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${o}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${o}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:l}}),[`${o}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}})(v(e))),b),y=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t};const x=n.forwardRef(((e,r)=>{const{prefixCls:t,style:o,className:l,checked:c,onChange:s,onClick:i}=e,d=y(e,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:g,tag:p}=n.useContext(u.E_),f=g("tag",t),[h,m,v]=C(f),b=a()(f,`${f}-checkable`,{[`${f}-checkable-checked`]:c},null==p?void 0:p.className,l,m,v);return h(n.createElement("span",Object.assign({},d,{ref:r,style:Object.assign(Object.assign({},o),null==p?void 0:p.style),className:b,onClick:e=>{null==s||s(!c),null==i||i(e)}})))}));var k=x,w=t(74954);var S=(0,m.bk)(["Tag","preset"],(e=>(e=>(0,w.Z)(e,((r,t)=>{let{textColor:n,lightBorderColor:o,lightColor:a,darkColor:l}=t;return{[`${e.componentCls}${e.componentCls}-${r}`]:{color:n,background:a,borderColor:o,"&-inverse":{color:e.colorTextLightSolid,background:l,borderColor:l},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}})))(v(e))),b);const M=(e,r,t)=>{const n="string"!=typeof(o=t)?o:o.charAt(0).toUpperCase()+o.slice(1);var o;return{[`${e.componentCls}${e.componentCls}-${r}`]:{color:e[`color${t}`],background:e[`color${n}Bg`],borderColor:e[`color${n}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}};var $=(0,m.bk)(["Tag","status"],(e=>{const r=v(e);return[M(r,"success","Success"),M(r,"processing","Info"),M(r,"error","Error"),M(r,"warning","Warning")]}),b),O=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t};const j=n.forwardRef(((e,r)=>{const{prefixCls:t,className:o,rootClassName:g,style:p,children:f,icon:h,color:m,onClose:v,bordered:b=!0,visible:y}=e,x=O(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","bordered","visible"]),{getPrefixCls:k,direction:w,tag:M}=n.useContext(u.E_),[j,I]=n.useState(!0),T=(0,l.Z)(x,["closeIcon","closable"]);n.useEffect((()=>{void 0!==y&&I(y)}),[y]);const E=(0,c.o2)(m),Z=(0,c.yT)(m),N=E||Z,B=Object.assign(Object.assign({backgroundColor:m&&!N?m:void 0},null==M?void 0:M.style),p),P=k("tag",t),[z,F,A]=C(P),H=a()(P,null==M?void 0:M.className,{[`${P}-${m}`]:N,[`${P}-has-color`]:m&&!N,[`${P}-hidden`]:!j,[`${P}-rtl`]:"rtl"===w,[`${P}-borderless`]:!b},o,g,F,A),R=e=>{e.stopPropagation(),null==v||v(e),e.defaultPrevented||I(!1)},[,q]=(0,s.Z)((0,s.w)(e),(0,s.w)(M),{closable:!1,closeIconRender:e=>{const r=n.createElement("span",{className:`${P}-close-icon`,onClick:R},e);return(0,i.wm)(e,r,(e=>({onClick:r=>{var t;null===(t=null==e?void 0:e.onClick)||void 0===t||t.call(e,r),R(r)},className:a()(null==e?void 0:e.className,`${P}-close-icon`)})))}}),L="function"==typeof x.onClick||f&&"a"===f.type,W=h||null,D=W?n.createElement(n.Fragment,null,W,f&&n.createElement("span",null,f)):f,V=n.createElement("span",Object.assign({},T,{ref:r,className:H,style:B}),D,q,E&&n.createElement(S,{key:"preset",prefixCls:P}),Z&&n.createElement($,{key:"status",prefixCls:P}));return z(L?n.createElement(d.Z,{component:"Tag"},V):V)})),I=j;I.CheckableTag=k;var T=I}}]);