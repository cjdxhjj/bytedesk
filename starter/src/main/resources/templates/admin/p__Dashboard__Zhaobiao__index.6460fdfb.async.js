"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[8327],{70150:function(L,m,e){e.d(m,{W5:function(){return W}});var y=e(15009),u=e.n(y),f=e(97857),s=e.n(f),S=e(99289),c=e.n(S),P=e(85615),p=e(88541),D=e.n(p),A=e(86745);function W(o){return O.apply(this,arguments)}function O(){return O=c()(u()().mark(function o(r){return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,A.request)("/api/v1/message/org",{method:"GET",params:s()({},r)}));case 1:case"end":return t.stop()}},o)})),O.apply(this,arguments)}function k(o){return j.apply(this,arguments)}function j(){return j=_asyncToGenerator(_regeneratorRuntime().mark(function o(r){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/api/user/robot",{method:"GET",params:{page:r.pageNumber,size:r.pageSize,client:HTTP_CLIENT}}));case 1:case"end":return t.stop()}},o)})),j.apply(this,arguments)}function z(o){return i.apply(this,arguments)}function i(){return i=_asyncToGenerator(_regeneratorRuntime().mark(function o(r){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/api/v1/message/rest/send",{method:"POST",data:{json:r,client:HTTP_CLIENT}}));case 1:case"end":return t.stop()}},o)})),i.apply(this,arguments)}function G(o,r){return x.apply(this,arguments)}function x(){return x=_asyncToGenerator(_regeneratorRuntime().mark(function o(r,v){var t,l;return _regeneratorRuntime().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:console.log("sendMessageSSE: ",r),t="".concat("","/visitor/api/v1/zhipuai/sse?uid=&sid=").concat(r.sid,"&content=").concat(r.content),l=new EventSource(t,{withCredentials:!1}),l.onopen=function(n){console.log("onopen:",n.target)},l.onmessage=function(n){v(n.data);var a=JSON.parse(n.data);if(a.type=="finish"){l&&l.close();return}},l.onerror=function(n){console.log("onerror:",n),alert("server error"),l.readyState===EventSource.CLOSED?console.log("connection is closed"):console.log("Error occured",n),l.close()},l.addEventListener("customEventName",function(n){console.log("Message id is "+n.lastEventId)});case 7:case"end":return M.stop()}},o)})),x.apply(this,arguments)}function N(o,r){return I.apply(this,arguments)}function I(){return I=_asyncToGenerator(_regeneratorRuntime().mark(function o(r,v){var t,l,d;return _regeneratorRuntime().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:console.log("sendMessageSSEPolyfill: ",r),t=localStorage.ACCESS_TOKEN,l="".concat("","/visitor/api/v1/zhipuai/sse?uid=&sid=").concat(r.sid,"&content=").concat(r.content),d=new EventSourcePolyfill(l,{headers:{Authorization:"Bearer ".concat(t)}}),d.onopen=function(a){console.log("onopen:",a.target)},d.onmessage=function(a){console.log("onmessage:",a.data),v(a.data);var b=JSON.parse(a.data);if(b.type=="finish"){d&&d.close();return}},d.onerror=function(a){console.log("onerror:",a),alert("server error"),d.readyState===EventSource.CLOSED?console.log("connection is closed"):console.log("Error occured",a),d.close()},d.addEventListener("customEventName",function(a){console.log("Message id is "+a.lastEventId)});case 8:case"end":return n.stop()}},o)})),I.apply(this,arguments)}},77154:function(L,m,e){var y=e(39825);function u(){var f=(0,y.Z)(),s=f.isDarkMode,S=250,c={borderRight:s?"1px solid #333":"1px solid #ccc",background:s?"#141414":"#f5f5f5"},P={background:s?"#141414":"#fff"},p={borderLeft:s?"1px solid #333":"1px solid #ccc",background:s?"#141414":"#f5f5f5"},D={minHeight:120,background:s?"#141414":"#f5f5f5"};return{leftSiderStyle:c,leftSiderWidth:S,headerStyle:P,rightSiderStyle:p,contentStyle:D}}m.Z=u},85778:function(L,m,e){e.r(m),e.d(m,{default:function(){return d}});var y=e(77154),u=e(21612),f=e(50136),s=e(67294),S=e(15009),c=e.n(S),P=e(99289),p=e.n(P),D=e(5574),A=e.n(D),W=e(80049),O=e(70150),k=e(69888),j=e(87676),z=e(53719),i=e(85893),G=[{dataIndex:"index",valueType:"indexBorder",width:48},{title:(0,i.jsx)(FormattedMessage,{id:"type",defaultMessage:"Type"}),dataIndex:"type",copyable:!0},{title:(0,i.jsx)(FormattedMessage,{id:"createdAt",defaultMessage:"createdAt"}),key:"createdAt",dataIndex:"createdAt",sorter:!0,hideInSearch:!0},{title:intl.formatMessage({id:"actions",defaultMessage:"Actions"}),valueType:"option",key:"option",render:function(n,a,b,_){return[(0,i.jsx)("a",{onClick:function(){var R;_==null||(R=_.startEditable)===null||R===void 0||R.call(_,a.uid)},children:"\u4FEE\u6539"},"editable")]}}],x=function(){var n=(0,s.useRef)(),a=(0,s.useState)(1),b=A()(a,2),_=b[0],K=b[1],R=(0,s.useState)(10),$=A()(R,2),Z=$[0],J=$[1],Q=(0,j.u)(function(g){return g.orgCurrent}),F=(0,k.G)(function(g){return{messageResult:g.messageResult,setMemberResult:g.setMessageResult}}),U=F.messageResult,V=F.setMemberResult,H=function(){var g=p()(c()().mark(function T(){var h,E;return c()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return h={pageNumber:_-1,pageSize:Z,orgUid:Q.uid},C.next=3,(0,O.W5)(h);case 3:E=C.sent,console.log("getAllMessages response:",h,E),E.code===200?V(E):W.yw.error(E.message);case 6:case"end":return C.stop()}},T)}));return function(){return g.apply(this,arguments)}}();return(0,s.useEffect)(function(){H()},[]),(0,s.useEffect)(function(){H()},[_,Z]),(0,s.useEffect)(function(){console.log("messageResult:",U),n.current.reload()},[U]),(0,i.jsx)(z.Z,{columns:G,actionRef:n,cardBordered:!0,request:function(){var g=p()(c()().mark(function T(h,E,w){return c()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return console.log("request:",h,E,w),K(h.current),J(h.pageSize),B.abrupt("return",Promise.resolve({data:U.data.content,success:!0,total:U.data.totalElements}));case 4:case"end":return B.stop()}},T)}));return function(T,h,E){return g.apply(this,arguments)}}(),editable:{type:"multiple"},rowKey:"uid",search:{labelWidth:"auto"},pagination:{pageSize:Z,showQuickJumper:!0,onChange:function(T){console.log("page:",T)}},dateFormatter:"string",headerTitle:"\u7EC4\u7EC7\u6D88\u606F",toolBarRender:function(){return[]}})},N=x,I=u.Z.Header,o=u.Z.Footer,r=u.Z.Sider,v=u.Z.Content,t=[{label:"\u9AD8\u7EA7",key:"top",children:[{label:"column",key:"xinxixitongxiangmuguanlishi"}]},{label:"\u4E2D\u7EA7",key:"middle",children:[{label:"column2",key:"xitongjichengxiangmuguanligongchengshi"}]}],l=function(){var n=(0,y.Z)(),a=n.leftSiderStyle,b=n.contentStyle,_=function(R){console.log("menu click ",R)};return(0,i.jsxs)(u.Z,{children:[(0,i.jsx)(r,{style:a,children:(0,i.jsx)(f.Z,{mode:"inline",onClick:_,defaultSelectedKeys:["xinxixitongxiangmuguanlishi"],defaultOpenKeys:["top","middle"],items:t})}),(0,i.jsx)(u.Z,{children:(0,i.jsx)(v,{style:b,children:(0,i.jsx)(N,{})})})]})},d=l},69888:function(L,m,e){e.d(m,{G:function(){return S}});var y=e(85615),u=e(73445),f=e(782),s=e(71381),S=(0,u.Ue)()((0,f.mW)((0,f.tJ)((0,s.n)(function(c,P){return{messageResult:{data:{content:[]}},setMessageResult:function(D){c({messageResult:D})},deleteMessageCache:function(){return c({},!0)}}}),{name:y.j8})))}}]);