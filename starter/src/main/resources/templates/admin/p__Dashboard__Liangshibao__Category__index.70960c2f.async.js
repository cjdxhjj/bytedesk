"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[5522],{7420:function(I,h,e){e.d(h,{$T:function(){return m},A:function(){return L},Hf:function(){return C},P6:function(){return D},gx:function(){return s}});var E=e(15009),n=e.n(E),i=e(97857),r=e.n(i),_=e(99289),u=e.n(_),f=e(85615),o=e(86745);function s(a){return v.apply(this,arguments)}function v(){return v=u()(n()().mark(function a(d){return n()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,o.request)("/api/v1/course/query/org",{method:"GET",params:r()(r()({},d),{},{client:f.bV})}));case 1:case"end":return t.stop()}},a)})),v.apply(this,arguments)}function m(a){return g.apply(this,arguments)}function g(){return g=u()(n()().mark(function a(d){return n()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,o.request)("/api/v1/course/query/user",{method:"GET",params:r()(r()({},d),{},{client:f.bV})}));case 1:case"end":return t.stop()}},a)})),g.apply(this,arguments)}function D(a){return S.apply(this,arguments)}function S(){return S=u()(n()().mark(function a(d){return n()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,o.request)("/api/v1/course/create",{method:"POST",data:r()(r()({},d),{},{client:f.bV})}));case 1:case"end":return t.stop()}},a)})),S.apply(this,arguments)}function C(a){return O.apply(this,arguments)}function O(){return O=u()(n()().mark(function a(d){return n()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,o.request)("/api/v1/course/update",{method:"POST",data:r()(r()({},d),{},{client:f.bV})}));case 1:case"end":return t.stop()}},a)})),O.apply(this,arguments)}function L(a){return M.apply(this,arguments)}function M(){return M=u()(n()().mark(function a(d){return n()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,o.request)("/api/v1/course/delete",{method:"POST",data:r()(r()({},d),{},{client:f.bV})}));case 1:case"end":return t.stop()}},a)})),M.apply(this,arguments)}function G(a){return U.apply(this,arguments)}function U(){return U=_asyncToGenerator(_regeneratorRuntime().mark(function a(d){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/api/v1/course/filter",{method:"GET",params:_objectSpread(_objectSpread({},d),{},{client:HTTP_CLIENT})}));case 1:case"end":return t.stop()}},a)})),U.apply(this,arguments)}},77154:function(I,h,e){var E=e(39825);function n(){var i=(0,E.Z)(),r=i.isDarkMode,_={borderRight:r?"1px solid #333":"1px solid #ccc",background:r?"#141414":"#f5f5f5",width:260},u={background:r?"#141414":"#fff"},f={borderLeft:r?"1px solid #333":"1px solid #ccc",background:r?"#141414":"#f5f5f5"},o={minHeight:120,background:r?"#141414":"#f5f5f5"};return{leftSiderStyle:_,headerStyle:u,rightSiderStyle:f,contentStyle:o}}h.Z=n},53363:function(I,h,e){e.r(h),e.d(h,{default:function(){return d}});var E=e(77154),n=e(21612),i=e(67294),r=e(15009),_=e.n(r),u=e(99289),f=e.n(u),o=e(5574),s=e.n(o),v=e(80049),m=e(7420),g=e(89333),D=e(60247),S=e(1269),C=e(85893),O=[{dataIndex:"index",valueType:"indexBorder",width:48},{title:"\u5C01\u9762",dataIndex:"cover",render:function(t,l){return(0,C.jsx)("a",{href:l.cover,target:"_blank",children:(0,C.jsx)("img",{src:l.cover,width:"40",height:"40"})})}},{title:"\u540D\u79F0",dataIndex:"name",copyable:!0},{title:"\u5206\u7C7B",key:"category",render:function(t,l){return"\u5206\u7C7B"}},{title:"\u53D1\u5E03\u4EBA",copyable:!0,editable:!1,renderText:function(t,l,K,j){var P;return(P=l.user)===null||P===void 0?void 0:P.nickname}},{title:"\u72B6\u6001",key:"published",render:function(t,l){return l.published?"\u5DF2\u53D1\u5E03":"\u672A\u53D1\u5E03"}},{title:"\u66F4\u65B0\u65F6\u95F4",key:"updatedAt",dataIndex:"updatedAt",editable:!1,sorter:!0,hideInSearch:!0},{title:"\u64CD\u4F5C",valueType:"option",key:"option",render:function(t,l,K,j){return[(0,C.jsx)("a",{onClick:function(){console.log("edit record:",l)},children:"\u4FEE\u6539"},"editable")]}}],L=function(){var t=(0,D.L)(function(y){return y.userInfo}),l=(0,i.useRef)(),K=(0,i.useState)(1),j=s()(K,2),P=j[0],Z=j[1],k=(0,i.useState)(10),x=s()(k,2),W=x[0],V=x[1],w=(0,g.K)(function(y){return{courseResult:y.courseResult,setCourseResult:y.setCourseResult}}),A=w.courseResult,N=w.setCourseResult,z=function(){var y=f()(_()().mark(function b(){var R,T;return _()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(R={pageNumber:P-1,pageSize:W},!t.superUser){c.next=7;break}return c.next=4,(0,m.gx)(R);case 4:c.t0=c.sent,c.next=10;break;case 7:return c.next=9,(0,m.$T)(R);case 9:c.t0=c.sent;case 10:T=c.t0,console.log("getAllCourses response:",R,T),T.code===200?N(T):v.yw.error(T.message);case 13:case"end":return c.stop()}},b)}));return function(){return y.apply(this,arguments)}}();return(0,i.useEffect)(function(){z()},[]),(0,i.useEffect)(function(){z()},[P,W]),(0,i.useEffect)(function(){console.log("courseResult:",A),l.current.reload()},[A]),(0,C.jsx)(S.Z,{columns:O,actionRef:l,cardBordered:!0,request:function(){var y=f()(_()().mark(function b(R,T,$){return _()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return console.log("request:",R,T,$),Z(R.current),V(R.pageSize),B.abrupt("return",Promise.resolve({data:A.data.content,success:!0,total:A.data.totalElements}));case 4:case"end":return B.stop()}},b)}));return function(b,R,T){return y.apply(this,arguments)}}(),rowKey:"uid",search:{labelWidth:"auto"},pagination:{pageSize:W,showQuickJumper:!0,onChange:function(b){console.log("page:",b)}},dateFormatter:"string",headerTitle:"\u7BA1\u7406\u7C7B\u522B",toolBarRender:function(){return[]}})},M=L,G=n.Z.Sider,U=n.Z.Content,a=function(){var t=(0,E.Z)(),l=t.contentStyle;return(0,C.jsx)(n.Z,{children:(0,C.jsx)(n.Z,{children:(0,C.jsx)(U,{style:l,children:(0,C.jsx)(M,{})})})})},d=a},89333:function(I,h,e){e.d(h,{K:function(){return _}});var E=e(85615),n=e(64529),i=e(782),r=e(71381),_=(0,n.Ue)()((0,i.mW)((0,i.tJ)((0,r.n)(function(u,f){return{courseResult:{data:{content:[]}},insertCourseResult:function(s){u(function(v){var m=v.courseResult.data.content;m.unshift(s)})},updateCourseResult:function(s){u(function(v){var m=v.courseResult.data.content,g=m.findIndex(function(D){return D.uid===s.uid});g!==-1?m[g]=s:console.warn("Course with uid ".concat(s.uid," not found."))})},deleteCourseResult:function(s){u(function(v){var m=v.courseResult.data.content,g=m.findIndex(function(D){return D.uid===s.uid});g!==-1?m.splice(g,1):console.warn("Course with uid ".concat(s.uid," not found."))})},setCourseResult:function(s){u({courseResult:s})},deleteCourseCache:function(){return u({},!0)}}}),{name:E.vC})))},60247:function(I,h,e){e.d(h,{L:function(){return _}});var E=e(85615),n=e(64529),i=e(782),r=e(71381),_=(0,n.Ue)()((0,i.mW)((0,i.tJ)((0,r.n)(function(u,f){return{userInfo:{uid:""},deviceUid:"",setUserInfo:function(s){u({userInfo:s})},setDeviceUid:function(s){u({deviceUid:s})},deleteUserInfo:function(){return u({},!0)}}}),{name:E.Em})))}}]);
