"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[4325],{42110:function(b,i){var e={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};i.Z=e},77154:function(b,i,e){var p=e(39825);function d(){var M=(0,p.Z)(),r=M.isDarkMode,j={borderRight:r?"1px solid #333":"1px solid #ccc",background:r?"#141414":"#f5f5f5"},c={background:r?"#141414":"#fff"},x={borderLeft:r?"1px solid #333":"1px solid #ccc",background:r?"#141414":"#f5f5f5"},g={minHeight:120,background:r?"#141414":"#f5f5f5"};return{leftSiderStyle:j,headerStyle:c,rightSiderStyle:x,contentStyle:g}}i.Z=d},31317:function(b,i,e){e.r(i),e.d(i,{default:function(){return F}});var p=e(15009),d=e.n(p),M=e(99289),r=e.n(M),j=e(97857),c=e.n(j),x=e(77154),g=e(85615),E=e(64529),T=e(782),z=e(71381),G=(0,E.Ue)()((0,T.mW)((0,T.tJ)((0,z.n)(function(l,s){return{roles:[],currentRole:{label:"",key:""},setCurrentRole:function(n){var m=s().roles.find(function(o){return o.key===n});l(function(o){o.currentRole=m})},addRole:function(n){var m=s().roles.find(function(h){return h.key===n.uid});if(!m){var o={label:n.displayName,key:n.uid};l(function(h){h.roles.push(o)})}},deleteRoleCache:function(){return l({},!0)}}}),{name:g.u}))),R=e(21612),I=e(50136),A=e(67294),L=e(48096),a=e(85893),O=function(s){console.log(s)},U=[{key:"authority",label:"\u6743\u9650",children:"Content of Tab Pane 1"},{key:"member",label:"\u6210\u5458",children:"Content of Tab Pane 2"}],B=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(L.Z,{defaultActiveKey:"1",items:U,onChange:O})})},H=B,D=e(86745);function K(l){return Z.apply(this,arguments)}function Z(){return Z=r()(d()().mark(function l(s){return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,D.request)("/api/v1/role/query/org",{method:"GET",params:c()(c()({},s),{},{client:g.bV})}));case 1:case"end":return n.stop()}},l)})),Z.apply(this,arguments)}var N=e(87676),S=e(80049),V=R.Z.Sider,W=R.Z.Content,$=function(){var s=(0,D.useIntl)(),v=(0,x.Z)(),n=v.leftSiderStyle,m=(0,N.u)(function(t){return t.orgCurrent}),o=G(function(t){return{roles:t.roles,setCurrentRole:t.setCurrentRole,addRole:t.addRole}}),h=o.roles,J=o.setCurrentRole,Q=o.addRole,X=h.map(function(t){var u=s.formatMessage({id:t.label,defaultMessage:t.label});return c()(c()({},t),{},{label:u})}),Y=function(){var t=r()(d()().mark(function u(){var k,f,C,P;return d()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return S.yw.loading("\u6B63\u5728\u83B7\u53D6\u89D2\u8272\u5217\u8868..."),k={pageNumber:0,pageSize:20,orgUid:m.uid},y.next=4,K(k);case 4:if(f=y.sent,console.log("queryRoles response ",f),f.code===200)for(S.yw.destroy(),C=0;C<f.data.content.length;C++)P=f.data.content[C],Q(P);else S.yw.destroy(),S.yw.error(f.message);case 7:case"end":return y.stop()}},u)}));return function(){return t.apply(this,arguments)}}();(0,A.useEffect)(function(){Y()},[]);var w=function(u){console.log("menu click ",u.key),J(u.key)};return(0,a.jsxs)(R.Z,{children:[(0,a.jsx)(V,{style:n,children:(0,a.jsx)(I.Z,{mode:"inline",onClick:w,items:X})}),(0,a.jsx)(R.Z,{children:(0,a.jsx)(W,{children:(0,a.jsx)(H,{})})})]})},F=$}}]);