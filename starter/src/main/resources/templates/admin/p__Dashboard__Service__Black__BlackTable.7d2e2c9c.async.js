"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[8956],{25203:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(13800),r=n(75271),s={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 912H144c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32h360c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8H184v656h656V520c0-4.4 3.6-8 8-8h56c4.4 0 8 3.6 8 8v360c0 17.7-14.3 32-32 32zM770.87 199.13l-52.2-52.2a8.01 8.01 0 014.7-13.6l179.4-21c5.1-.6 9.5 3.7 8.9 8.9l-21 179.4c-.8 6.6-8.9 9.4-13.6 4.7l-52.4-52.4-256.2 256.2a8.03 8.03 0 01-11.3 0l-42.4-42.4a8.03 8.03 0 010-11.3l256.1-256.3z"}}]},name:"export",theme:"outlined"},o=n(45791),c=function(e,t){return r.createElement(o.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:s}))};var i=r.forwardRef(c)},82655:function(e,t,n){n.d(t,{V3:function(){return l}});var a=n(90228),r=n.n(a),s=n(26068),o=n.n(s),c=n(87999),i=n.n(c),u=n(64453),d=n(45234);function l(e){return f.apply(this,arguments)}function f(){return(f=i()(r()().mark((function e(t){return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,d.request)("/api/v1/group/query/org",{method:"GET",params:o()(o()({},t),{},{client:u.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},47158:function(e,t,n){n.r(t);var a=n(90228),r=n.n(a),s=n(26068),o=n.n(s),c=n(67825),i=n.n(c),u=n(87999),d=n.n(u),l=n(37240),f=n(82655),p=n(95877),g=n(25203),h=n(15161),x=n(45234),m=n(42502),y=n(75271),v=n(52676),M=["current"],w=[{dataIndex:"index",valueType:"indexBorder",width:48},{title:(0,v.jsx)(x.FormattedMessage,{id:"content",defaultMessage:"Content"}),dataIndex:"content",copyable:!0},{title:(0,v.jsx)(x.FormattedMessage,{id:"status",defaultMessage:"Status"}),dataIndex:"status",hideInSearch:!0},{title:(0,v.jsx)(x.FormattedMessage,{id:"type",defaultMessage:"Type"}),dataIndex:"type",copyable:!0},{title:(0,v.jsx)(x.FormattedMessage,{id:"client",defaultMessage:"Client"}),dataIndex:"client",hideInSearch:!0},{title:(0,v.jsx)(x.FormattedMessage,{id:"createdAt",defaultMessage:"createdAt"}),key:"createdAt",dataIndex:"createdAt",sorter:!0,hideInSearch:!0}];t.default=function(){var e=(0,x.useIntl)(),t=(0,y.useRef)(),n=(0,p.u)((function(e){return e.currentOrg})),a=[].concat(w,[{title:e.formatMessage({id:"actions",defaultMessage:"Actions"}),valueType:"option",key:"option",render:function(t,n,a,r){return[(0,v.jsx)("a",{onClick:function(){},children:e.formatMessage({id:"edit",defaultMessage:"Edit"})},"editable")]}}]),s=function(){console.log("handleExportExcel"),l.yw.warning("即将上线，敬请期待")};return(0,v.jsx)(h.Z,{columns:a,actionRef:t,cardBordered:!0,request:function(){var e=d()(r()().mark((function e(t,a,s){var c,u,d;return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.current,c=i()(t,M),u=o()({pageNumber:t.current-1,orgUid:n.uid},c),e.next=4,(0,f.V3)(u);case 4:return d=e.sent,console.log("queryGroupsByOrgUid response:",d,u),200===d.code||l.yw.error(d.message),e.abrupt("return",{data:d.data.content,success:!0,total:d.data.totalElements});case 8:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),editable:{type:"multiple"},rowKey:"uid",search:{labelWidth:"auto"},pagination:{showQuickJumper:!0,onChange:function(e){console.log("page:",e)}},dateFormatter:"string",headerTitle:"黑名单列表",toolBarRender:function(){return[(0,v.jsx)(m.ZP,{icon:(0,v.jsx)(g.Z,{}),type:"primary",onClick:s,children:e.formatMessage({id:"export",defaultMessage:"Export"})},"button")]}})}}}]);