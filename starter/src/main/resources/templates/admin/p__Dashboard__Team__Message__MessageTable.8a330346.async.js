"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[1398],{58638:function(I,c,e){e.d(c,{Z:function(){return M}});var p=e(1413),u=e(67294),E={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 912H144c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32h360c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8H184v656h656V520c0-4.4 3.6-8 8-8h56c4.4 0 8 3.6 8 8v360c0 17.7-14.3 32-32 32zM770.87 199.13l-52.2-52.2a8.01 8.01 0 014.7-13.6l179.4-21c5.1-.6 9.5 3.7 8.9 8.9l-21 179.4c-.8 6.6-8.9 9.4-13.6 4.7l-52.4-52.4-256.2 256.2a8.03 8.03 0 01-11.3 0l-42.4-42.4a8.03 8.03 0 010-11.3l256.1-256.3z"}}]},name:"export",theme:"outlined"},v=E,f=e(89099),h=function(D,O){return u.createElement(f.Z,(0,p.Z)((0,p.Z)({},D),{},{ref:O,icon:v}))},b=u.forwardRef(h),M=b},70150:function(I,c,e){e.d(c,{W5:function(){return O}});var p=e(15009),u=e.n(p),E=e(97857),v=e.n(E),f=e(99289),h=e.n(f),b=e(85615),M=e(88541),T=e.n(M),D=e(86745);function O(s){return P.apply(this,arguments)}function P(){return P=h()(u()().mark(function s(r){return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,D.request)("/api/v1/message/org",{method:"GET",params:v()({},r)}));case 1:case"end":return n.stop()}},s)})),P.apply(this,arguments)}function A(s){return y.apply(this,arguments)}function y(){return y=_asyncToGenerator(_regeneratorRuntime().mark(function s(r){return _regeneratorRuntime().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",request("/api/user/robot",{method:"GET",params:{page:r.pageNumber,size:r.pageSize,client:HTTP_CLIENT}}));case 1:case"end":return n.stop()}},s)})),y.apply(this,arguments)}function B(s){return l.apply(this,arguments)}function l(){return l=_asyncToGenerator(_regeneratorRuntime().mark(function s(r){return _regeneratorRuntime().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",request("/api/v1/message/rest/send",{method:"POST",data:{json:r,client:HTTP_CLIENT}}));case 1:case"end":return n.stop()}},s)})),l.apply(this,arguments)}function S(s,r){return j.apply(this,arguments)}function j(){return j=_asyncToGenerator(_regeneratorRuntime().mark(function s(r,d){var n,t;return _regeneratorRuntime().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:console.log("sendMessageSSE: ",r),n="".concat("","/visitor/api/v1/zhipuai/sse?uid=&sid=").concat(r.sid,"&content=").concat(r.content),t=new EventSource(n,{withCredentials:!1}),t.onopen=function(_){console.log("onopen:",_.target)},t.onmessage=function(_){d(_.data);var o=JSON.parse(_.data);if(o.type=="finish"){t&&t.close();return}},t.onerror=function(_){console.log("onerror:",_),alert("server error"),t.readyState===EventSource.CLOSED?console.log("connection is closed"):console.log("Error occured",_),t.close()},t.addEventListener("customEventName",function(_){console.log("Message id is "+_.lastEventId)});case 7:case"end":return i.stop()}},s)})),j.apply(this,arguments)}function L(s,r){return R.apply(this,arguments)}function R(){return R=_asyncToGenerator(_regeneratorRuntime().mark(function s(r,d){var n,t,a;return _regeneratorRuntime().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:console.log("sendMessageSSEPolyfill: ",r),n=localStorage.ACCESS_TOKEN,t="".concat("","/visitor/api/v1/zhipuai/sse?uid=&sid=").concat(r.sid,"&content=").concat(r.content),a=new EventSourcePolyfill(t,{headers:{Authorization:"Bearer ".concat(n)}}),a.onopen=function(o){console.log("onopen:",o.target)},a.onmessage=function(o){console.log("onmessage:",o.data),d(o.data);var C=JSON.parse(o.data);if(C.type=="finish"){a&&a.close();return}},a.onerror=function(o){console.log("onerror:",o),alert("server error"),a.readyState===EventSource.CLOSED?console.log("connection is closed"):console.log("Error occured",o),a.close()},a.addEventListener("customEventName",function(o){console.log("Message id is "+o.lastEventId)});case 8:case"end":return _.stop()}},s)})),R.apply(this,arguments)}},69909:function(I,c,e){e.r(c);var p=e(15009),u=e.n(p),E=e(97857),v=e.n(E),f=e(13769),h=e.n(f),b=e(99289),M=e.n(b),T=e(80049),D=e(70150),O=e(87676),P=e(58638),A=e(1269),y=e(14726),B=e(67294),l=e(85893),S=["current"],j=[{dataIndex:"index",valueType:"indexBorder",width:48},{title:"\u5185\u5BB9",dataIndex:"content",copyable:!0},{title:"\u72B6\u6001",dataIndex:"status",hideInSearch:!0},{title:"\u7C7B\u578B",dataIndex:"type",copyable:!0},{title:"\u5BA2\u6237\u7AEF",dataIndex:"client",copyable:!0},{title:"\u521B\u5EFA\u65F6\u95F4",key:"createdAt",dataIndex:"createdAt",sorter:!0,hideInSearch:!0}],L=function(){var s=(0,B.useRef)(),r=(0,O.u)(function(t){return t.orgCurrent}),d=[].concat(j,[{title:"\u64CD\u4F5C",valueType:"option",key:"option",render:function(a,i,_,o){return[(0,l.jsx)("a",{onClick:function(){},children:"\u4FEE\u6539"},"editable")]}}]),n=function(){console.log("handleExportExcel"),T.yw.warning("\u5BFC\u51FA\u529F\u80FD\u6682\u672A\u5B9E\u73B0")};return(0,l.jsx)(A.Z,{columns:d,actionRef:s,cardBordered:!0,request:function(){var t=M()(u()().mark(function a(i,_,o){var C,W,U,m;return u()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return console.log("request:",i,_,o),C=i.current,W=h()(i,S),U=v()({pageNumber:i.current-1,orgUid:r.uid},W),g.next=5,(0,D.W5)(U);case 5:return m=g.sent,console.log("getAllMessages response:",U,m),m.code===200||T.yw.error(m.message),g.abrupt("return",{data:m.data.content,success:!0,total:m.data.totalElements});case 9:case"end":return g.stop()}},a)}));return function(a,i,_){return t.apply(this,arguments)}}(),editable:{type:"multiple"},rowKey:"uid",search:{labelWidth:"auto"},pagination:{showQuickJumper:!0,onChange:function(a){console.log("page:",a)}},dateFormatter:"string",headerTitle:"\u673A\u5668\u4EBA\u6D88\u606F",toolBarRender:function(){return[(0,l.jsx)(y.ZP,{icon:(0,l.jsx)(P.Z,{}),type:"primary",onClick:n,children:"\u5BFC\u51FA"},"button")]}})};c.default=L}}]);
