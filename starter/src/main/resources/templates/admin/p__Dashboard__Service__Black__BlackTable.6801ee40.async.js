"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[8956],{58638:function(T,u,e){e.d(u,{Z:function(){return m}});var i=e(1413),n=e(67294),o={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 912H144c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32h360c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8H184v656h656V520c0-4.4 3.6-8 8-8h56c4.4 0 8 3.6 8 8v360c0 17.7-14.3 32-32 32zM770.87 199.13l-52.2-52.2a8.01 8.01 0 014.7-13.6l179.4-21c5.1-.6 9.5 3.7 8.9 8.9l-21 179.4c-.8 6.6-8.9 9.4-13.6 4.7l-52.4-52.4-256.2 256.2a8.03 8.03 0 01-11.3 0l-42.4-42.4a8.03 8.03 0 010-11.3l256.1-256.3z"}}]},name:"export",theme:"outlined"},d=o,p=e(89099),l=function(g,y){return n.createElement(p.Z,(0,i.Z)((0,i.Z)({},g),{},{ref:y,icon:d}))},v=n.forwardRef(l),m=v},46743:function(T,u,e){e.d(u,{V3:function(){return c}});var i=e(15009),n=e.n(i),o=e(97857),d=e.n(o),p=e(99289),l=e.n(p),v=e(85615),m=e(86745);function c(r){return g.apply(this,arguments)}function g(){return g=l()(n()().mark(function r(_){return n()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,m.request)("/api/v1/group/query/org",{method:"GET",params:d()(d()({},_),{},{client:v.bV})}));case 1:case"end":return t.stop()}},r)})),g.apply(this,arguments)}function y(r){return O.apply(this,arguments)}function O(){return O=_asyncToGenerator(_regeneratorRuntime().mark(function r(_){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/api/v1/group/query/uid",{method:"GET",params:_objectSpread(_objectSpread({},_),{},{client:HTTP_CLIENT})}));case 1:case"end":return t.stop()}},r)})),O.apply(this,arguments)}function R(r){return a.apply(this,arguments)}function a(){return a=_asyncToGenerator(_regeneratorRuntime().mark(function r(_){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/api/v1/group/create",{method:"POST",data:_objectSpread(_objectSpread({},_),{},{client:HTTP_CLIENT})}));case 1:case"end":return t.stop()}},r)})),a.apply(this,arguments)}function C(r){return f.apply(this,arguments)}function f(){return f=_asyncToGenerator(_regeneratorRuntime().mark(function r(_){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/api/v1/group/update",{method:"POST",data:_objectSpread(_objectSpread({},_),{},{client:HTTP_CLIENT})}));case 1:case"end":return t.stop()}},r)})),f.apply(this,arguments)}function s(r){return M.apply(this,arguments)}function M(){return M=_asyncToGenerator(_regeneratorRuntime().mark(function r(_){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/api/v1/group/dismiss",{method:"POST",data:{uid:_,client:HTTP_CLIENT}}));case 1:case"end":return t.stop()}},r)})),M.apply(this,arguments)}},72336:function(T,u,e){e.r(u);var i=e(15009),n=e.n(i),o=e(97857),d=e.n(o),p=e(13769),l=e.n(p),v=e(99289),m=e.n(v),c=e(80049),g=e(46743),y=e(87676),O=e(58638),R=e(57482),a=e(86745),C=e(14726),f=e(67294),s=e(85893),M=["current"],r=[{dataIndex:"index",valueType:"indexBorder",width:48},{title:(0,s.jsx)(a.FormattedMessage,{id:"content",defaultMessage:"Content"}),dataIndex:"content",copyable:!0},{title:(0,s.jsx)(a.FormattedMessage,{id:"status",defaultMessage:"Status"}),dataIndex:"status",hideInSearch:!0},{title:(0,s.jsx)(a.FormattedMessage,{id:"type",defaultMessage:"Type"}),dataIndex:"type",copyable:!0},{title:(0,s.jsx)(a.FormattedMessage,{id:"client",defaultMessage:"Client"}),dataIndex:"client",hideInSearch:!0},{title:(0,s.jsx)(a.FormattedMessage,{id:"createdAt",defaultMessage:"createdAt"}),key:"createdAt",dataIndex:"createdAt",sorter:!0,hideInSearch:!0}],_=function(){var t=(0,a.useIntl)(),W=(0,f.useRef)(),L=(0,y.u)(function(E){return E.currentOrg}),x=[].concat(r,[{title:t.formatMessage({id:"actions",defaultMessage:"Actions"}),valueType:"option",key:"option",render:function(P,j,I,G){return[(0,s.jsx)("a",{onClick:function(){},children:t.formatMessage({id:"edit",defaultMessage:"Edit"})},"editable")]}}]),K=function(){console.log("handleExportExcel"),c.yw.warning("\u5373\u5C06\u4E0A\u7EBF\uFF0C\u656C\u8BF7\u671F\u5F85")};return(0,s.jsx)(R.Z,{columns:x,actionRef:W,cardBordered:!0,request:function(){var E=m()(n()().mark(function P(j,I,G){var B,A,U,b;return n()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return B=j.current,A=l()(j,M),U=d()({pageNumber:j.current-1,orgUid:L.uid},A),h.next=4,(0,g.V3)(U);case 4:return b=h.sent,console.log("queryGroupsByOrgUid response:",b,U),b.code===200||c.yw.error(b.message),h.abrupt("return",{data:b.data.content,success:!0,total:b.data.totalElements});case 8:case"end":return h.stop()}},P)}));return function(P,j,I){return E.apply(this,arguments)}}(),editable:{type:"multiple"},rowKey:"uid",search:{labelWidth:"auto"},pagination:{showQuickJumper:!0,onChange:function(P){console.log("page:",P)}},dateFormatter:"string",headerTitle:"\u9ED1\u540D\u5355\u5217\u8868",toolBarRender:function(){return[(0,s.jsx)(C.ZP,{icon:(0,s.jsx)(O.Z,{}),type:"primary",onClick:K,children:t.formatMessage({id:"export",defaultMessage:"Export"})},"button")]}})};u.default=_},87676:function(T,u,e){e.d(u,{u:function(){return p}});var i=e(85615),n=e(73445),o=e(782),d=e(18753),p=(0,n.Ue)()((0,o.mW)((0,o.tJ)((0,d.n)(function(l,v){return{currentOrg:{uid:"",name:"",description:""},setCurrentOrg:function(c){l({currentOrg:c})},deleteOrg:function(){return l({},!0)}}}),{name:i.eR})))}}]);