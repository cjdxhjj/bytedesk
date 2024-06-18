"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[9199],{58638:function(S,c,e){e.d(c,{Z:function(){return M}});var l=e(1413),u=e(67294),v={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 912H144c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32h360c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8H184v656h656V520c0-4.4 3.6-8 8-8h56c4.4 0 8 3.6 8 8v360c0 17.7-14.3 32-32 32zM770.87 199.13l-52.2-52.2a8.01 8.01 0 014.7-13.6l179.4-21c5.1-.6 9.5 3.7 8.9 8.9l-21 179.4c-.8 6.6-8.9 9.4-13.6 4.7l-52.4-52.4-256.2 256.2a8.03 8.03 0 01-11.3 0l-42.4-42.4a8.03 8.03 0 010-11.3l256.1-256.3z"}}]},name:"export",theme:"outlined"},f=v,p=e(91146),h=function(j,y){return u.createElement(p.Z,(0,l.Z)((0,l.Z)({},j),{},{ref:y,icon:f}))},b=u.forwardRef(h),M=b},70150:function(S,c,e){e.d(c,{W5:function(){return y}});var l=e(15009),u=e.n(l),v=e(97857),f=e.n(v),p=e(99289),h=e.n(p),b=e(85615),M=e(88541),_=e.n(M),j=e(86745);function y(s){return T.apply(this,arguments)}function T(){return T=h()(u()().mark(function s(r){return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,j.request)("/api/v1/message/org",{method:"GET",params:f()({},r)}));case 1:case"end":return t.stop()}},s)})),T.apply(this,arguments)}function B(s){return R.apply(this,arguments)}function R(){return R=_asyncToGenerator(_regeneratorRuntime().mark(function s(r){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/api/user/robot",{method:"GET",params:{page:r.pageNumber,size:r.pageSize,client:HTTP_CLIENT}}));case 1:case"end":return t.stop()}},s)})),R.apply(this,arguments)}function W(s){return C.apply(this,arguments)}function C(){return C=_asyncToGenerator(_regeneratorRuntime().mark(function s(r){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/api/v1/message/rest/send",{method:"POST",data:{json:r,client:HTTP_CLIENT}}));case 1:case"end":return t.stop()}},s)})),C.apply(this,arguments)}function L(s,r){return d.apply(this,arguments)}function d(){return d=_asyncToGenerator(_regeneratorRuntime().mark(function s(r,g){var t,o;return _regeneratorRuntime().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:console.log("sendMessageSSE: ",r),t="".concat("","/visitor/api/v1/zhipuai/sse?uid=&sid=").concat(r.sid,"&content=").concat(r.content),o=new EventSource(t,{withCredentials:!1}),o.onopen=function(a){console.log("onopen:",a.target)},o.onmessage=function(a){g(a.data);var n=JSON.parse(a.data);if(n.type=="finish"){o&&o.close();return}},o.onerror=function(a){console.log("onerror:",a),alert("server error"),o.readyState===EventSource.CLOSED?console.log("connection is closed"):console.log("Error occured",a),o.close()},o.addEventListener("customEventName",function(a){console.log("Message id is "+a.lastEventId)});case 7:case"end":return D.stop()}},s)})),d.apply(this,arguments)}function x(s,r){return I.apply(this,arguments)}function I(){return I=_asyncToGenerator(_regeneratorRuntime().mark(function s(r,g){var t,o,i;return _regeneratorRuntime().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:console.log("sendMessageSSEPolyfill: ",r),t=localStorage.ACCESS_TOKEN,o="".concat("","/visitor/api/v1/zhipuai/sse?uid=&sid=").concat(r.sid,"&content=").concat(r.content),i=new EventSourcePolyfill(o,{headers:{Authorization:"Bearer ".concat(t)}}),i.onopen=function(n){console.log("onopen:",n.target)},i.onmessage=function(n){console.log("onmessage:",n.data),g(n.data);var m=JSON.parse(n.data);if(m.type=="finish"){i&&i.close();return}},i.onerror=function(n){console.log("onerror:",n),alert("server error"),i.readyState===EventSource.CLOSED?console.log("connection is closed"):console.log("Error occured",n),i.close()},i.addEventListener("customEventName",function(n){console.log("Message id is "+n.lastEventId)});case 8:case"end":return a.stop()}},s)})),I.apply(this,arguments)}},73803:function(S,c,e){var l=e(85615),u=e(66419),v=e(86745);function f(){var p=(0,v.useIntl)(),h=function(_){return _&&_.startsWith(l.Vo)?p.formatMessage({id:_,defaultMessage:_}):_},b=function(_){return _!=null&&_.startsWith(l.Vo)?(0,u.aS)(p.formatMessage({id:_}),10):(0,u.aS)(_,10)};return{translateString:h,translateStringTranct:b}}c.Z=f},61480:function(S,c,e){e.r(c);var l=e(15009),u=e.n(l),v=e(97857),f=e.n(v),p=e(13769),h=e.n(p),b=e(99289),M=e.n(b),_=e(80049),j=e(70150),y=e(73803),T=e(87676),B=e(58638),R=e(43892),W=e(86745),C=e(14726),L=e(67294),d=e(85893),x=["current"],I=function(){var r=(0,W.useIntl)(),g=(0,L.useRef)(),t=(0,y.Z)(),o=t.translateString,i=(0,T.u)(function(n){return n.orgCurrent}),D=[{dataIndex:"index",valueType:"indexBorder",width:48},{title:"\u5185\u5BB9",dataIndex:"content",copyable:!0,render:function(m,E){return(0,d.jsx)("div",{children:o(E.content)})}},{title:"\u72B6\u6001",dataIndex:"status",hideInSearch:!0,width:80},{title:"\u7C7B\u578B",dataIndex:"type",copyable:!0,width:90},{title:"\u5BA2\u6237\u7AEF",dataIndex:"client",copyable:!0,width:90},{title:"\u521B\u5EFA\u65F6\u95F4",key:"createdAt",dataIndex:"createdAt",sorter:!0,hideInSearch:!0,width:170},{title:"\u64CD\u4F5C",valueType:"option",key:"option",width:50,render:function(m,E,U,K){return[(0,d.jsx)("a",{onClick:function(){},children:"\u4FEE\u6539"},"editable")]}}],a=function(){console.log("handleExportExcel"),_.yw.warning("\u5BFC\u51FA\u529F\u80FD\u6682\u672A\u5B9E\u73B0")};return(0,d.jsx)(R.Z,{columns:D,actionRef:g,cardBordered:!0,request:function(){var n=M()(u()().mark(function m(E,U,K){var k,G,A,O;return u()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return console.log("request:",E,U,K),k=E.current,G=h()(E,x),A=f()({pageNumber:E.current-1,orgUid:i.uid},G),P.next=5,(0,j.W5)(A);case 5:return O=P.sent,console.log("getAllMessages response:",A,O),O.code===200||_.yw.error(O.message),P.abrupt("return",{data:O.data.content,success:!0,total:O.data.totalElements});case 9:case"end":return P.stop()}},m)}));return function(m,E,U){return n.apply(this,arguments)}}(),editable:{type:"multiple"},rowKey:"uid",search:{labelWidth:"auto"},pagination:{showQuickJumper:!0,onChange:function(m){console.log("page:",m)}},dateFormatter:"string",headerTitle:"\u673A\u5668\u4EBA\u6D88\u606F",toolBarRender:function(){return[(0,d.jsx)(C.ZP,{icon:(0,d.jsx)(B.Z,{}),type:"primary",onClick:a,children:r.formatMessage({id:"export",defaultMessage:"Export"})},"button")]}})};c.default=I}}]);
