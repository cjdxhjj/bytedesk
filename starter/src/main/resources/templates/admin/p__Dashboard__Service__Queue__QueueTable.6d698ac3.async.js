"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[6668],{42526:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(98037),a=n(75271),s={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 912H144c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32h360c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8H184v656h656V520c0-4.4 3.6-8 8-8h56c4.4 0 8 3.6 8 8v360c0 17.7-14.3 32-32 32zM770.87 199.13l-52.2-52.2a8.01 8.01 0 014.7-13.6l179.4-21c5.1-.6 9.5 3.7 8.9 8.9l-21 179.4c-.8 6.6-8.9 9.4-13.6 4.7l-52.4-52.4-256.2 256.2a8.03 8.03 0 01-11.3 0l-42.4-42.4a8.03 8.03 0 010-11.3l256.1-256.3z"}}]},name:"export",theme:"outlined"},u=n(58720),o=function(e,t){return a.createElement(u.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:s}))};var i=a.forwardRef(o)},51038:function(e,t,n){var r=n(96677),a=n(94388),s=n(18735);t.Z=function(){var e=(0,s.useIntl)();return{translateString:function(t){return t&&t.startsWith(r.VoP)?e.formatMessage({id:t,defaultMessage:t}):t},translateStringTranct:function(t){return null!=t&&t.startsWith(r.VoP)||null!=t&&t.startsWith("ROLE_")?(0,a.aS)(e.formatMessage({id:t,defaultMessage:t}),10):(0,a.aS)(t,10)}}}},57616:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var r=n(90228),a=n.n(r),s=n(26068),u=n.n(s),o=n(67825),i=n.n(o),c=n(87999),l=n.n(c),d=n(59153),f=n(96677),p=n(18735);function g(e){return h.apply(this,arguments)}function h(){return(h=l()(a()().mark((function e(t){return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,p.request)("/api/v1/queue/query/org",{method:"GET",params:u()(u()({},t),{},{client:f.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var m=n(51038),x=n(29244),v=n(42526),M=n(93061),y=n(58439),w=n(75271),b=n(52676),k=["current"],I=function(){var e=(0,p.useIntl)(),t=(0,w.useRef)(),n=((0,m.Z)().translateString,(0,x.u)((function(e){return e.currentOrg}))),r=[{dataIndex:"index",valueType:"indexBorder",width:48},{title:(0,b.jsx)(p.FormattedMessage,{id:"status",defaultMessage:"Status"}),dataIndex:"status",hideInSearch:!0},{title:(0,b.jsx)(p.FormattedMessage,{id:"type",defaultMessage:"Type"}),dataIndex:"type",copyable:!0},{title:(0,b.jsx)(p.FormattedMessage,{id:"client",defaultMessage:"Client"}),dataIndex:"client",copyable:!0},{title:(0,b.jsx)(p.FormattedMessage,{id:"createdAt",defaultMessage:"createdAt"}),key:"createdAt",dataIndex:"createdAt",sorter:!0,hideInSearch:!0},{title:e.formatMessage({id:"actions",defaultMessage:"Actions"}),valueType:"option",key:"option",render:function(t,n,r,a){return[(0,b.jsx)("a",{onClick:function(){},children:e.formatMessage({id:"edit",defaultMessage:"Edit"})},"editable")]}}],s=function(){console.log("handleExportExcel"),d.yw.warning("即将上线，敬请期待")};return(0,b.jsx)(M.Z,{columns:r,actionRef:t,cardBordered:!0,request:function(){var e=l()(a()().mark((function e(t,r,s){var o,c,l;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("request:",t,r,s),t.current,o=i()(t,k),c=u()({pageNumber:t.current-1,orgUid:n.uid},o),e.next=5,g(c);case 5:return l=e.sent,console.log("getAllQueues response:",c,l),200===l.code||d.yw.error(l.message),e.abrupt("return",{data:l.data.content,success:!0,total:l.data.totalElements});case 9:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),editable:{type:"multiple"},rowKey:"uid",search:{labelWidth:"auto"},pagination:{showQuickJumper:!0,onChange:function(e){console.log("page:",e)}},dateFormatter:"string",headerTitle:"排队队列",toolBarRender:function(){return[(0,b.jsx)(y.ZP,{icon:(0,b.jsx)(v.Z,{}),type:"primary",onClick:s,children:e.formatMessage({id:"export",defaultMessage:"Export"})},"button")]}})}}}]);