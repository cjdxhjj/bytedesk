"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[8455],{70150:function(B,m,e){e.d(m,{W5:function(){return L}});var y=e(15009),l=e.n(y),f=e(97857),a=e.n(f),S=e(99289),c=e.n(S),C=e(85615),p=e(88541),x=e.n(p),A=e(86745);function L(o){return P.apply(this,arguments)}function P(){return P=c()(l()().mark(function o(r){return l()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,A.request)("/api/v1/message/org",{method:"GET",params:a()({},r)}));case 1:case"end":return n.stop()}},o)})),P.apply(this,arguments)}function z(o){return O.apply(this,arguments)}function O(){return O=_asyncToGenerator(_regeneratorRuntime().mark(function o(r){return _regeneratorRuntime().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",request("/api/user/robot",{method:"GET",params:{page:r.pageNumber,size:r.pageSize,client:HTTP_CLIENT}}));case 1:case"end":return n.stop()}},o)})),O.apply(this,arguments)}function G(o){return i.apply(this,arguments)}function i(){return i=_asyncToGenerator(_regeneratorRuntime().mark(function o(r){return _regeneratorRuntime().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",request("/api/v1/message/rest/send",{method:"POST",data:{json:r,client:HTTP_CLIENT}}));case 1:case"end":return n.stop()}},o)})),i.apply(this,arguments)}function N(o,r){return j.apply(this,arguments)}function j(){return j=_asyncToGenerator(_regeneratorRuntime().mark(function o(r,v){var n,u;return _regeneratorRuntime().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:console.log("sendMessageSSE: ",r),n="".concat("","/visitor/api/v1/zhipuai/sse?uid=&sid=").concat(r.sid,"&content=").concat(r.content),u=new EventSource(n,{withCredentials:!1}),u.onopen=function(t){console.log("onopen:",t.target)},u.onmessage=function(t){v(t.data);var s=JSON.parse(t.data);if(s.type=="finish"){u&&u.close();return}},u.onerror=function(t){console.log("onerror:",t),alert("server error"),u.readyState===EventSource.CLOSED?console.log("connection is closed"):console.log("Error occured",t),u.close()},u.addEventListener("customEventName",function(t){console.log("Message id is "+t.lastEventId)});case 7:case"end":return M.stop()}},o)})),j.apply(this,arguments)}function Z(o,r){return I.apply(this,arguments)}function I(){return I=_asyncToGenerator(_regeneratorRuntime().mark(function o(r,v){var n,u,d;return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:console.log("sendMessageSSEPolyfill: ",r),n=localStorage.ACCESS_TOKEN,u="".concat("","/visitor/api/v1/zhipuai/sse?uid=&sid=").concat(r.sid,"&content=").concat(r.content),d=new EventSourcePolyfill(u,{headers:{Authorization:"Bearer ".concat(n)}}),d.onopen=function(s){console.log("onopen:",s.target)},d.onmessage=function(s){console.log("onmessage:",s.data),v(s.data);var T=JSON.parse(s.data);if(T.type=="finish"){d&&d.close();return}},d.onerror=function(s){console.log("onerror:",s),alert("server error"),d.readyState===EventSource.CLOSED?console.log("connection is closed"):console.log("Error occured",s),d.close()},d.addEventListener("customEventName",function(s){console.log("Message id is "+s.lastEventId)});case 8:case"end":return t.stop()}},o)})),I.apply(this,arguments)}},77154:function(B,m,e){var y=e(39825);function l(){var f=(0,y.Z)(),a=f.isDarkMode,S={borderRight:a?"1px solid #333":"1px solid #ccc",background:a?"#141414":"#f5f5f5"},c={background:a?"#141414":"#fff"},C={borderLeft:a?"1px solid #333":"1px solid #ccc",background:a?"#141414":"#f5f5f5"},p={minHeight:120,background:a?"#141414":"#f5f5f5"};return{leftSiderStyle:S,headerStyle:c,rightSiderStyle:C,contentStyle:p}}m.Z=l},16501:function(B,m,e){e.r(m),e.d(m,{default:function(){return d}});var y=e(77154),l=e(21612),f=e(50136),a=e(67294),S=e(15009),c=e.n(S),C=e(99289),p=e.n(C),x=e(5574),A=e.n(x),L=e(80049),P=e(70150),z=e(69888),O=e(87676),G=e(43892),i=e(85893),N=[{dataIndex:"index",valueType:"indexBorder",width:48},{title:"\u7C7B\u578B",dataIndex:"type",copyable:!0},{title:"\u521B\u5EFA\u65F6\u95F4",key:"createdAt",dataIndex:"createdAt",sorter:!0,hideInSearch:!0},{title:"\u64CD\u4F5C",valueType:"option",key:"option",render:function(t,s,T,g){return[(0,i.jsx)("a",{onClick:function(){var R;g==null||(R=g.startEditable)===null||R===void 0||R.call(g,s.uid)},children:"\u4FEE\u6539"},"editable")]}}],j=function(){var t=(0,a.useRef)(),s=(0,a.useState)(1),T=A()(s,2),g=T[0],K=T[1],R=(0,a.useState)(10),$=A()(R,2),W=$[0],J=$[1],Q=(0,O.u)(function(_){return _.orgCurrent}),F=(0,z.G)(function(_){return{messageResult:_.messageResult,setMemberResult:_.setMessageResult}}),U=F.messageResult,V=F.setMemberResult,H=function(){var _=p()(c()().mark(function b(){var h,E;return c()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return h={pageNumber:g-1,pageSize:W,orgUid:Q.uid},D.next=3,(0,P.W5)(h);case 3:E=D.sent,console.log("getAllMessages response:",h,E),E.code===200?V(E):L.yw.error(E.message);case 6:case"end":return D.stop()}},b)}));return function(){return _.apply(this,arguments)}}();return(0,a.useEffect)(function(){H()},[]),(0,a.useEffect)(function(){H()},[g,W]),(0,a.useEffect)(function(){console.log("messageResult:",U),t.current.reload()},[U]),(0,i.jsx)(G.Z,{columns:N,actionRef:t,cardBordered:!0,request:function(){var _=p()(c()().mark(function b(h,E,w){return c()().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return console.log("request:",h,E,w),K(h.current),J(h.pageSize),k.abrupt("return",Promise.resolve({data:U.data.content,success:!0,total:U.data.totalElements}));case 4:case"end":return k.stop()}},b)}));return function(b,h,E){return _.apply(this,arguments)}}(),editable:{type:"multiple"},rowKey:"uid",search:{labelWidth:"auto"},pagination:{pageSize:W,showQuickJumper:!0,onChange:function(b){console.log("page:",b)}},dateFormatter:"string",headerTitle:"\u7EC4\u7EC7\u6D88\u606F",toolBarRender:function(){return[]}})},Z=j,I=l.Z.Header,o=l.Z.Footer,r=l.Z.Sider,v=l.Z.Content,n=[{label:"\u9AD8\u7EA7",key:"top",children:[{label:"column",key:"xinxixitongxiangmuguanlishi"}]},{label:"\u4E2D\u7EA7",key:"middle",children:[{label:"column2",key:"xitongjichengxiangmuguanligongchengshi"}]}],u=function(){var t=(0,y.Z)(),s=t.leftSiderStyle,T=t.contentStyle,g=function(R){console.log("menu click ",R)};return(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(r,{style:s,children:(0,i.jsx)(f.Z,{mode:"inline",onClick:g,defaultSelectedKeys:["xinxixitongxiangmuguanlishi"],defaultOpenKeys:["top","middle"],items:n})}),(0,i.jsx)(l.Z,{children:(0,i.jsx)(v,{style:T,children:(0,i.jsx)(Z,{})})})]})},d=u},69888:function(B,m,e){e.d(m,{G:function(){return S}});var y=e(85615),l=e(64529),f=e(782),a=e(71381),S=(0,l.Ue)()((0,f.mW)((0,f.tJ)((0,a.n)(function(c,C){return{messageResult:{data:{content:[]}},setMessageResult:function(x){c({messageResult:x})},deleteMessageCache:function(){return c({},!0)}}}),{name:y.j8})))}}]);
