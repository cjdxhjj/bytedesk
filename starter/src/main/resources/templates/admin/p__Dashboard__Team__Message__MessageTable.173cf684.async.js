"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[1398],{58638:function(A,d,e){e.d(d,{Z:function(){return f}});var c=e(1413),u=e(67294),g={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 912H144c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32h360c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8H184v656h656V520c0-4.4 3.6-8 8-8h56c4.4 0 8 3.6 8 8v360c0 17.7-14.3 32-32 32zM770.87 199.13l-52.2-52.2a8.01 8.01 0 014.7-13.6l179.4-21c5.1-.6 9.5 3.7 8.9 8.9l-21 179.4c-.8 6.6-8.9 9.4-13.6 4.7l-52.4-52.4-256.2 256.2a8.03 8.03 0 01-11.3 0l-42.4-42.4a8.03 8.03 0 010-11.3l256.1-256.3z"}}]},name:"export",theme:"outlined"},E=g,v=e(91146),h=function(b,M){return u.createElement(v.Z,(0,c.Z)((0,c.Z)({},b),{},{ref:M,icon:E}))},R=u.forwardRef(h),f=R},70150:function(A,d,e){e.d(d,{W5:function(){return M}});var c=e(15009),u=e.n(c),g=e(97857),E=e.n(g),v=e(99289),h=e.n(v),R=e(85615),f=e(88541),C=e.n(f),b=e(86745);function M(s){return D.apply(this,arguments)}function D(){return D=h()(u()().mark(function s(r){return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,b.request)("/api/v1/message/org",{method:"GET",params:E()({},r)}));case 1:case"end":return n.stop()}},s)})),D.apply(this,arguments)}function B(s){return O.apply(this,arguments)}function O(){return O=_asyncToGenerator(_regeneratorRuntime().mark(function s(r){return _regeneratorRuntime().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",request("/api/user/robot",{method:"GET",params:{page:r.pageNumber,size:r.pageSize,client:HTTP_CLIENT}}));case 1:case"end":return n.stop()}},s)})),O.apply(this,arguments)}function S(s){return P.apply(this,arguments)}function P(){return P=_asyncToGenerator(_regeneratorRuntime().mark(function s(r){return _regeneratorRuntime().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",request("/api/v1/message/rest/send",{method:"POST",data:{json:r,client:HTTP_CLIENT}}));case 1:case"end":return n.stop()}},s)})),P.apply(this,arguments)}function y(s,r){return j.apply(this,arguments)}function j(){return j=_asyncToGenerator(_regeneratorRuntime().mark(function s(r,l){var n,a;return _regeneratorRuntime().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:console.log("sendMessageSSE: ",r),n="".concat("","/visitor/api/v1/zhipuai/sse?uid=&sid=").concat(r.sid,"&content=").concat(r.content),a=new EventSource(n,{withCredentials:!1}),a.onopen=function(t){console.log("onopen:",t.target)},a.onmessage=function(t){l(t.data);var _=JSON.parse(t.data);if(_.type=="finish"){a&&a.close();return}},a.onerror=function(t){console.log("onerror:",t),alert("server error"),a.readyState===EventSource.CLOSED?console.log("connection is closed"):console.log("Error occured",t),a.close()},a.addEventListener("customEventName",function(t){console.log("Message id is "+t.lastEventId)});case 7:case"end":return i.stop()}},s)})),j.apply(this,arguments)}function L(s,r){return I.apply(this,arguments)}function I(){return I=_asyncToGenerator(_regeneratorRuntime().mark(function s(r,l){var n,a,o;return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:console.log("sendMessageSSEPolyfill: ",r),n=localStorage.ACCESS_TOKEN,a="".concat("","/visitor/api/v1/zhipuai/sse?uid=&sid=").concat(r.sid,"&content=").concat(r.content),o=new EventSourcePolyfill(a,{headers:{Authorization:"Bearer ".concat(n)}}),o.onopen=function(_){console.log("onopen:",_.target)},o.onmessage=function(_){console.log("onmessage:",_.data),l(_.data);var T=JSON.parse(_.data);if(T.type=="finish"){o&&o.close();return}},o.onerror=function(_){console.log("onerror:",_),alert("server error"),o.readyState===EventSource.CLOSED?console.log("connection is closed"):console.log("Error occured",_),o.close()},o.addEventListener("customEventName",function(_){console.log("Message id is "+_.lastEventId)});case 8:case"end":return t.stop()}},s)})),I.apply(this,arguments)}},69909:function(A,d,e){e.r(d);var c=e(15009),u=e.n(c),g=e(97857),E=e.n(g),v=e(13769),h=e.n(v),R=e(99289),f=e.n(R),C=e(80049),b=e(70150),M=e(87676),D=e(58638),B=e(43892),O=e(86745),S=e(14726),P=e(67294),y=e(85893),j=["current"],L=function(){var s=(0,O.useIntl)(),r=(0,P.useRef)(),l=(0,M.u)(function(i){return i.orgCurrent}),n=[{dataIndex:"index",valueType:"indexBorder",width:48},{title:"\u5185\u5BB9",dataIndex:"content",copyable:!0},{title:"\u72B6\u6001",dataIndex:"status",hideInSearch:!0},{title:"\u7C7B\u578B",dataIndex:"type",copyable:!0},{title:"\u5BA2\u6237\u7AEF",dataIndex:"client",copyable:!0},{title:"\u521B\u5EFA\u65F6\u95F4",key:"createdAt",dataIndex:"createdAt",sorter:!0,hideInSearch:!0}],a=[].concat(n,[{title:"\u64CD\u4F5C",valueType:"option",key:"option",render:function(t,_,T,W){return[(0,y.jsx)("a",{onClick:function(){},children:"\u4FEE\u6539"},"editable")]}}]),o=function(){console.log("handleExportExcel"),C.yw.warning("\u5BFC\u51FA\u529F\u80FD\u6682\u672A\u5B9E\u73B0")};return(0,y.jsx)(B.Z,{columns:a,actionRef:r,cardBordered:!0,request:function(){var i=f()(u()().mark(function t(_,T,W){var x,K,U,p;return u()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return console.log("request:",_,T,W),x=_.current,K=h()(_,j),U=E()({pageNumber:_.current-1,orgUid:l.uid},K),m.next=5,(0,b.W5)(U);case 5:return p=m.sent,console.log("getAllMessages response:",U,p),p.code===200||C.yw.error(p.message),m.abrupt("return",{data:p.data.content,success:!0,total:p.data.totalElements});case 9:case"end":return m.stop()}},t)}));return function(t,_,T){return i.apply(this,arguments)}}(),editable:{type:"multiple"},rowKey:"uid",search:{labelWidth:"auto"},pagination:{showQuickJumper:!0,onChange:function(t){console.log("page:",t)}},dateFormatter:"string",headerTitle:"\u673A\u5668\u4EBA\u6D88\u606F",toolBarRender:function(){return[(0,y.jsx)(S.ZP,{icon:(0,y.jsx)(D.Z,{}),type:"primary",onClick:o,children:s.formatMessage({id:"export",defaultMessage:"Export"})},"button")]}})};d.default=L}}]);
