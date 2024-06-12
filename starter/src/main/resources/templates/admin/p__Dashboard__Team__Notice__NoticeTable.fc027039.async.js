"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[2874],{58638:function(L,g,e){e.d(g,{Z:function(){return D}});var p=e(1413),u=e(67294),E={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 912H144c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32h360c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8H184v656h656V520c0-4.4 3.6-8 8-8h56c4.4 0 8 3.6 8 8v360c0 17.7-14.3 32-32 32zM770.87 199.13l-52.2-52.2a8.01 8.01 0 014.7-13.6l179.4-21c5.1-.6 9.5 3.7 8.9 8.9l-21 179.4c-.8 6.6-8.9 9.4-13.6 4.7l-52.4-52.4-256.2 256.2a8.03 8.03 0 01-11.3 0l-42.4-42.4a8.03 8.03 0 010-11.3l256.1-256.3z"}}]},name:"export",theme:"outlined"},f=E,h=e(89099),d=function(T,S){return u.createElement(h.Z,(0,p.Z)((0,p.Z)({},T),{},{ref:S,icon:f}))},P=u.forwardRef(d),D=P},70150:function(L,g,e){e.d(g,{W5:function(){return S}});var p=e(15009),u=e.n(p),E=e(97857),f=e.n(E),h=e(99289),d=e.n(h),P=e(85615),D=e(88541),y=e.n(D),T=e(86745);function S(s){return j.apply(this,arguments)}function j(){return j=d()(u()().mark(function s(t){return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,T.request)("/api/v1/message/org",{method:"GET",params:f()({},t)}));case 1:case"end":return n.stop()}},s)})),j.apply(this,arguments)}function x(s){return l.apply(this,arguments)}function l(){return l=_asyncToGenerator(_regeneratorRuntime().mark(function s(t){return _regeneratorRuntime().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",request("/api/user/robot",{method:"GET",params:{page:t.pageNumber,size:t.pageSize,client:HTTP_CLIENT}}));case 1:case"end":return n.stop()}},s)})),l.apply(this,arguments)}function C(s){return I.apply(this,arguments)}function I(){return I=_asyncToGenerator(_regeneratorRuntime().mark(function s(t){return _regeneratorRuntime().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",request("/api/v1/message/rest/send",{method:"POST",data:{json:t,client:HTTP_CLIENT}}));case 1:case"end":return n.stop()}},s)})),I.apply(this,arguments)}function w(s,t){return A.apply(this,arguments)}function A(){return A=_asyncToGenerator(_regeneratorRuntime().mark(function s(t,v){var n,r;return _regeneratorRuntime().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:console.log("sendMessageSSE: ",t),n="".concat("","/visitor/api/v1/zhipuai/sse?uid=&sid=").concat(t.sid,"&content=").concat(t.content),r=new EventSource(n,{withCredentials:!1}),r.onopen=function(a){console.log("onopen:",a.target)},r.onmessage=function(a){v(a.data);var _=JSON.parse(a.data);if(_.type=="finish"){r&&r.close();return}},r.onerror=function(a){console.log("onerror:",a),alert("server error"),r.readyState===EventSource.CLOSED?console.log("connection is closed"):console.log("Error occured",a),r.close()},r.addEventListener("customEventName",function(a){console.log("Message id is "+a.lastEventId)});case 7:case"end":return R.stop()}},s)})),A.apply(this,arguments)}function W(s,t){return b.apply(this,arguments)}function b(){return b=_asyncToGenerator(_regeneratorRuntime().mark(function s(t,v){var n,r,o;return _regeneratorRuntime().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:console.log("sendMessageSSEPolyfill: ",t),n=localStorage.ACCESS_TOKEN,r="".concat("","/visitor/api/v1/zhipuai/sse?uid=&sid=").concat(t.sid,"&content=").concat(t.content),o=new EventSourcePolyfill(r,{headers:{Authorization:"Bearer ".concat(n)}}),o.onopen=function(_){console.log("onopen:",_.target)},o.onmessage=function(_){console.log("onmessage:",_.data),v(_.data);var z=JSON.parse(_.data);if(z.type=="finish"){o&&o.close();return}},o.onerror=function(_){console.log("onerror:",_),alert("server error"),o.readyState===EventSource.CLOSED?console.log("connection is closed"):console.log("Error occured",_),o.close()},o.addEventListener("customEventName",function(_){console.log("Message id is "+_.lastEventId)});case 8:case"end":return a.stop()}},s)})),b.apply(this,arguments)}},87871:function(L,g,e){e.r(g);var p=e(15009),u=e.n(p),E=e(99289),f=e.n(E),h=e(5574),d=e.n(h),P=e(80049),D=e(70150),y=e(69888),T=e(87676),S=e(58638),j=e(1269),x=e(14726),l=e(67294),C=e(85893),I=[{dataIndex:"index",valueType:"indexBorder",width:48},{title:"\u5185\u5BB9",dataIndex:"content",copyable:!0},{title:"\u72B6\u6001",dataIndex:"status",hideInSearch:!0},{title:"\u7C7B\u578B",dataIndex:"type",copyable:!0},{title:"\u5BA2\u6237\u7AEF",dataIndex:"client",hideInSearch:!0},{title:"\u521B\u5EFA\u65F6\u95F4",key:"createdAt",dataIndex:"createdAt",sorter:!0,hideInSearch:!0}],w=function(){var W=(0,l.useRef)(),b=(0,l.useState)(1),s=d()(b,2),t=s[0],v=s[1],n=(0,l.useState)(10),r=d()(n,2),o=r[0],R=r[1],a=(0,l.useState)({}),_=d()(a,2),z=_[0],J=_[1],Z=(0,T.u)(function(i){return i.orgCurrent}),G=(0,y.G)(function(i){return{messageResult:i.messageResult,setMessageResult:i.setMessageResult}}),U=G.messageResult,$=G.setMessageResult,F=[].concat(I,[{title:"\u64CD\u4F5C",valueType:"option",key:"option",render:function(M,c,m,K){return[(0,C.jsx)("a",{onClick:function(){},children:"\u4FEE\u6539"},"editable")]}}]),N=function(){var i=f()(u()().mark(function M(){var c,m;return u()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return c={pageNumber:t-1,pageSize:o,orgUid:Z.uid},O.next=3,(0,D.W5)(c);case 3:m=O.sent,console.log("getAllMessages response:",c,m),m.code===200?$(m):P.yw.error(m.message);case 6:case"end":return O.stop()}},M)}));return function(){return i.apply(this,arguments)}}();(0,l.useEffect)(function(){N()},[]),(0,l.useEffect)(function(){N()},[t,o]),(0,l.useEffect)(function(){console.log("messageResult:",U),W.current.reload()},[U]);var H=function(){console.log("handleExportExcel"),P.yw.warning("\u5BFC\u51FA\u529F\u80FD\u6682\u672A\u5B9E\u73B0")};return(0,C.jsx)(j.Z,{columns:F,actionRef:W,cardBordered:!0,request:function(){var i=f()(u()().mark(function M(c,m,K){return u()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return console.log("request:",c,m,K),v(c.current),R(c.pageSize),B.abrupt("return",Promise.resolve({data:U.data.content,success:!0,total:U.data.totalElements}));case 4:case"end":return B.stop()}},M)}));return function(M,c,m){return i.apply(this,arguments)}}(),editable:{type:"multiple"},rowKey:"uid",search:{labelWidth:"auto"},pagination:{pageSize:o,showQuickJumper:!0,onChange:function(M){console.log("page:",M)}},dateFormatter:"string",headerTitle:"\u901A\u77E5",toolBarRender:function(){return[(0,C.jsx)(x.ZP,{icon:(0,C.jsx)(S.Z,{}),type:"primary",onClick:H,children:"\u5BFC\u51FA"},"button")]}})};g.default=w},69888:function(L,g,e){e.d(g,{G:function(){return h}});var p=e(85615),u=e(64529),E=e(782),f=e(71381),h=(0,u.Ue)()((0,E.mW)((0,E.tJ)((0,f.n)(function(d,P){return{messageResult:{data:{content:[]}},setMessageResult:function(y){d({messageResult:y})},deleteMessageCache:function(){return d({},!0)}}}),{name:p.j8})))}}]);
