"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[2701],{24172:function(T,g,e){e.d(g,{Kq:function(){return E},RL:function(){return S}});var h=e(15009),r=e.n(h),D=e(97857),a=e.n(D),y=e(99289),c=e.n(y),p=e(85615),i=e(86745);function E(o){return M.apply(this,arguments)}function M(){return M=c()(r()().mark(function o(d){return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,i.request)("/api/v1/org/create",{method:"POST",data:a()(a()({},d),{},{client:p.bV})}));case 1:case"end":return t.stop()}},o)})),M.apply(this,arguments)}function S(o){return m.apply(this,arguments)}function m(){return m=c()(r()().mark(function o(d){return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,i.request)("/api/v1/org/update",{method:"POST",data:a()(a()({},d),{},{client:p.bV})}));case 1:case"end":return t.stop()}},o)})),m.apply(this,arguments)}function f(o){return O.apply(this,arguments)}function O(){return O=_asyncToGenerator(_regeneratorRuntime().mark(function o(d){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/api/v1/org/query",{method:"GET",params:_objectSpread(_objectSpread({},d),{},{client:HTTP_CLIENT})}));case 1:case"end":return t.stop()}},o)})),O.apply(this,arguments)}function P(o){return u.apply(this,arguments)}function u(){return u=_asyncToGenerator(_regeneratorRuntime().mark(function o(d){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/api/v1/org/uid",{method:"GET",params:{uid:d,client:HTTP_CLIENT}}));case 1:case"end":return t.stop()}},o)})),u.apply(this,arguments)}},77154:function(T,g,e){var h=e(39825);function r(){var D=(0,h.Z)(),a=D.isDarkMode,y=250,c={borderRight:a?"1px solid #333":"1px solid #ccc",background:a?"#141414":"#f5f5f5"},p={background:a?"#141414":"#fff"},i={borderLeft:a?"1px solid #333":"1px solid #ccc",background:a?"#141414":"#f5f5f5"},E={minHeight:120,background:a?"#141414":"#f5f5f5"};return{leftSiderStyle:c,leftSiderWidth:y,headerStyle:p,rightSiderStyle:i,contentStyle:E}}g.Z=r},75779:function(T,g,e){e.r(g),e.d(g,{default:function(){return J}});var h=e(77154),r=e(21612),D=e(50136),a=e(67294),y=e(15009),c=e.n(y),p=e(97857),i=e.n(p),E=e(99289),M=e.n(E),S=e(5574),m=e.n(S),f=e(80049),O=e(24172),P=e(87676),u=e(66723),o=e(88484),d=e(34994),n=e(5966),t=e(90672),K=e(86745),x=e(8232),G=e(7134),H=e(14726),s=e(85893),$=function(){var U=x.Z.useForm(),A=m()(U,1),L=A[0],_=(0,K.useIntl)(),R=(0,P.u)(function(j){return{orgCurrent:j.orgCurrent,setOrgCurrent:j.setOrgCurrent}}),v=R.orgCurrent,X=R.setOrgCurrent,w=(0,a.useState)(""),W=m()(w,2),B=W[0],F=W[1],q=function(l){console.log("handleUploadSuccess:",l),F(l)},ee=function(l){console.log("handleUploadError:",l)},te=function(){var j=M()(c()().mark(function l(Z){var I,b;return c()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return f.yw.loading({content:_.formatMessage({id:"saveing"}),key:"save",duration:0}),I=i()(i()(i()({},v),Z),{},{logo:B}),console.log("orgObject:",I),C.next=5,(0,O.RL)(I);case 5:b=C.sent,console.log("updateOrg response:",b),b.code===200?(f.yw.destroy(),f.yw.success(_.formatMessage({id:"update.success"})),X(b.data)):(f.yw.destroy(),f.yw.error(b.message));case 8:case"end":return C.stop()}},l)}));return function(Z){return j.apply(this,arguments)}}(),ne=function(l){return Array.isArray(l)?l:l==null?void 0:l.fileList};return(0,a.useEffect)(function(){v&&F(v.logo)},[v]),(0,s.jsx)("div",{children:(0,s.jsxs)(d.A,{form:L,initialValues:{name:v.name,description:v.description},onFinish:te,children:[(0,s.jsx)(x.Z.Item,{name:"logo",valuePropName:"fileList",getValueFromEvent:ne,label:_.formatMessage({id:"pages.robot.tab.avatar",defaultMessage:"Avatar"}),children:(0,s.jsxs)(u.G,{onSuccess:q,onError:ee,children:[(0,s.jsx)(G.C,{src:B}),(0,s.jsx)(H.ZP,{icon:(0,s.jsx)(o.Z,{}),children:_.formatMessage({id:"pages.robot.upload",defaultMessage:"Upload"})})]},"avatar")}),(0,s.jsx)(n.Z,{rules:[{required:!0,message:_.formatMessage({id:"name",defaultMessage:"Name"})}],label:_.formatMessage({id:"name",defaultMessage:"Name"}),name:"name",width:"md"}),(0,s.jsx)(t.Z,{rules:[{required:!0,message:_.formatMessage({id:"description",defaultMessage:"Description"})}],label:_.formatMessage({id:"description",defaultMessage:"Description"}),name:"description",width:"md"})]})})},N=$,re=r.Z.Header,ae=r.Z.Footer,V=r.Z.Sider,Y=r.Z.Content,z=[{label:(0,s.jsx)(K.FormattedMessage,{id:"info",defaultMessage:"Info"}),key:"basic"}],k=function(){var U=(0,h.Z)(),A=U.leftSiderStyle,L=U.contentStyle,_=function(v){console.log("menu click ",v.key)};return(0,s.jsxs)(r.Z,{children:[(0,s.jsx)(V,{style:A,children:(0,s.jsx)(D.Z,{mode:"inline",onClick:_,defaultSelectedKeys:["basic"],defaultOpenKeys:["basic"],items:z})}),(0,s.jsx)(r.Z,{children:(0,s.jsx)(Y,{style:L,children:(0,s.jsx)(N,{})})})]})},J=k},66723:function(T,g,e){e.d(g,{G:function(){return M}});var h=e(97857),r=e.n(h),D=e(67294),a=e(66476),y=e(85615),c=e(27484),p=e.n(c),i=e(80049),E=e(85893),M=function(m){var f=m.children,O=m.onSuccess,P=m.onError,u={file:null,file_name:"test.png",file_type:"image/png"},o={name:"file",action:"/api/v1/upload/file",headers:{Authorization:"Bearer "+localStorage.getItem(y.LA)},data:u,showUploadList:!1,beforeUpload:function(n){console.log("beforeUpload",n);var t=p()(new Date).format("YYYYMMDDHHmmss")+"_"+n.name;u.file=n,u.file_name=t,u.file_type=n.type,console.log("beforeUpload",u)},onChange:function(n){if(n.file.status!=="uploading"&&console.log(n.file,n.fileList),n.file.status==="done"){var t=n.file.response.data;console.log("url: ",t),O(t),i.yw.success("".concat(n.file.name," \u4E0A\u4F20\u6210\u529F"))}else n.file.status==="error"&&(i.yw.error("".concat(n.file.name," \u4E0A\u4F20\u5931\u8D25")),P(n.file))}};return(0,E.jsx)(a.Z,r()(r()({},o),{},{children:f}))}}}]);