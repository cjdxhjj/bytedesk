"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[8455],{47566:function(e,t,n){n.d(t,{W5:function(){return l}});var r=n(90228),a=n.n(r),s=n(26068),i=n.n(s),u=n(87999),o=n.n(u),c=(n(96677),n(18735));function l(e){return d.apply(this,arguments)}function d(){return(d=o()(a()().mark((function e(t){return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.request)("/api/v1/message/query/org",{method:"GET",params:i()({},t)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},21544:function(e,t,n){var r=n(93454);t.Z=function(){var e=(0,r.Z)().isDarkMode;return{leftSiderStyle:{borderRight:e?"1px solid #333":"1px solid #ccc",background:e?"#141414":"#f5f5f5"},leftSiderWidth:250,headerStyle:{background:e?"#141414":"#fff"},rightSiderStyle:{borderLeft:e?"1px solid #333":"1px solid #ccc",background:e?"#141414":"#f5f5f5"},contentStyle:{minHeight:120,background:e?"#141414":"#f5f5f5",height:"100vh"}}}},29022:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}});var r=n(21544),a=n(43650),s=n(94031),i=n(75271),u=n(90228),o=n.n(u),c=n(87999),l=n.n(c),d=n(48305),f=n.n(d),g=n(59153),p=n(47566),h=n(41637),m=n(29244),x=n(93061),y=n(52676),b=[{dataIndex:"index",valueType:"indexBorder",width:48},{title:(0,y.jsx)(FormattedMessage,{id:"type",defaultMessage:"Type"}),dataIndex:"type",copyable:!0},{title:(0,y.jsx)(FormattedMessage,{id:"createdAt",defaultMessage:"createdAt"}),key:"createdAt",dataIndex:"createdAt",sorter:!0,hideInSearch:!0},{title:intl.formatMessage({id:"actions",defaultMessage:"Actions"}),valueType:"option",key:"option",render:function(e,t,n,r){return[(0,y.jsx)("a",{onClick:function(){var e;null==r||null===(e=r.startEditable)||void 0===e||e.call(r,t.uid)},children:"修改"},"editable")]}}],k=function(){var e=(0,i.useRef)(),t=(0,i.useState)(1),n=f()(t,2),r=n[0],a=n[1],s=(0,i.useState)(10),u=f()(s,2),c=u[0],d=u[1],k=(0,m.u)((function(e){return e.currentOrg})),v=(0,h.G)((function(e){return{messageResult:e.messageResult,setMemberResult:e.setMessageResult}})),S=v.messageResult,R=v.setMemberResult,M=function(){var e=l()(o()().mark((function e(){var t,n;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={pageNumber:r-1,pageSize:c,orgUid:k.uid},e.next=3,(0,p.W5)(t);case 3:n=e.sent,console.log("getAllMessages response:",t,n),200===n.code?R(n):g.yw.error(n.message);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){M()}),[]),(0,i.useEffect)((function(){M()}),[r,c]),(0,i.useEffect)((function(){console.log("messageResult:",S),e.current.reload()}),[S]),(0,y.jsx)(x.Z,{columns:b,actionRef:e,cardBordered:!0,request:function(){var e=l()(o()().mark((function e(t,n,r){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("request:",t,n,r),a(t.current),d(t.pageSize),e.abrupt("return",Promise.resolve({data:S.data.content,success:!0,total:S.data.totalElements}));case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),editable:{type:"multiple"},rowKey:"uid",search:{labelWidth:"auto"},pagination:{pageSize:c,showQuickJumper:!0,onChange:function(e){console.log("page:",e)}},dateFormatter:"string",headerTitle:"组织消息",toolBarRender:function(){return[]}})},v=(a.Z.Header,a.Z.Footer,a.Z.Sider),S=a.Z.Content,R=[{label:"高级",key:"top",children:[{label:"column",key:"xinxixitongxiangmuguanlishi"}]},{label:"中级",key:"middle",children:[{label:"column2",key:"xitongjichengxiangmuguanligongchengshi"}]}],M=function(){var e=(0,r.Z)(),t=e.leftSiderStyle,n=e.contentStyle;return(0,y.jsxs)(a.Z,{children:[(0,y.jsx)(v,{style:t,children:(0,y.jsx)(s.Z,{mode:"inline",onClick:function(e){console.log("menu click ",e)},defaultSelectedKeys:["xinxixitongxiangmuguanlishi"],defaultOpenKeys:["top","middle"],items:R})}),(0,y.jsx)(a.Z,{children:(0,y.jsx)(S,{style:n,children:(0,y.jsx)(k,{})})})]})}},41637:function(e,t,n){n.d(t,{G:function(){return u}});var r=n(96677),a=n(52315),s=n(4938),i=n(13657),u=(0,a.Ue)()((0,s.mW)((0,s.tJ)((0,i.n)((function(e,t){return{messageResult:{data:{content:[]}},setMessageResult:function(t){e({messageResult:t})},deleteMessageCache:function(){return e({},!0)}}})),{name:r.j87})))}}]);