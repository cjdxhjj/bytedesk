(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[7960],{65060:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(13800),o=n(75271),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"}}]},name:"exclamation-circle",theme:"outlined"},l=n(45791),s=function(e,t){return o.createElement(l.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:a}))};var i=o.forwardRef(s)},25203:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(13800),o=n(75271),a={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 912H144c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32h360c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8H184v656h656V520c0-4.4 3.6-8 8-8h56c4.4 0 8 3.6 8 8v360c0 17.7-14.3 32-32 32zM770.87 199.13l-52.2-52.2a8.01 8.01 0 014.7-13.6l179.4-21c5.1-.6 9.5 3.7 8.9 8.9l-21 179.4c-.8 6.6-8.9 9.4-13.6 4.7l-52.4-52.4-256.2 256.2a8.03 8.03 0 01-11.3 0l-42.4-42.4a8.03 8.03 0 010-11.3l256.1-256.3z"}}]},name:"export",theme:"outlined"},l=n(45791),s=function(e,t){return o.createElement(l.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:a}))};var i=o.forwardRef(s)},33413:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(13800),o=n(75271),a={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 912H144c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32h360c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8H184v656h656V520c0-4.4 3.6-8 8-8h56c4.4 0 8 3.6 8 8v360c0 17.7-14.3 32-32 32zM653.3 424.6l52.2 52.2a8.01 8.01 0 01-4.7 13.6l-179.4 21c-5.1.6-9.5-3.7-8.9-8.9l21-179.4c.8-6.6 8.9-9.4 13.6-4.7l52.4 52.4 256.2-256.2c3.1-3.1 8.2-3.1 11.3 0l42.4 42.4c3.1 3.1 3.1 8.2 0 11.3L653.3 424.6z"}}]},name:"import",theme:"outlined"},l=n(45791),s=function(e,t){return o.createElement(l.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:a}))};var i=o.forwardRef(s)},64826:function(e,t,n){"use strict";var r=n(76314),o=n(13800),a=n(60323),l=n(6522),s=n(92813),i=n(54433),c=n(71770),u=n(75271),d=n(89755),p=n(52676),f=["fieldProps","proFieldProps"],m=["fieldProps","proFieldProps"],g="text",h=function(e){var t=(0,l.Z)(e.open||!1,{value:e.open,onChange:e.onOpenChange}),n=(0,r.Z)(t,2),a=n[0],c=n[1];return(0,p.jsx)(s.Z.Item,{shouldUpdate:!0,noStyle:!0,children:function(t){var n,r=t.getFieldValue(e.name||[]);return(0,p.jsx)(i.Z,(0,o.Z)((0,o.Z)({getPopupContainer:function(e){return e&&e.parentNode?e.parentNode:e},onOpenChange:function(e){return c(e)},content:(0,p.jsxs)("div",{style:{padding:"4px 0"},children:[null===(n=e.statusRender)||void 0===n?void 0:n.call(e,r),e.strengthText?(0,p.jsx)("div",{style:{marginTop:10},children:(0,p.jsx)("span",{children:e.strengthText})}):null]}),overlayStyle:{width:240},placement:"rightTop"},e.popoverProps),{},{open:a,children:e.children}))}})},v=function(e){var t=e.fieldProps,n=e.proFieldProps,r=(0,a.Z)(e,f);return(0,p.jsx)(d.Z,(0,o.Z)({valueType:g,fieldProps:t,filedConfig:{valueType:g},proFieldProps:n},r))};v.Password=function(e){var t=e.fieldProps,n=e.proFieldProps,l=(0,a.Z)(e,m),s=(0,u.useState)(!1),i=(0,r.Z)(s,2),f=i[0],v=i[1];return null!=t&&t.statusRender&&l.name?(0,p.jsx)(h,{name:l.name,statusRender:null==t?void 0:t.statusRender,popoverProps:null==t?void 0:t.popoverProps,strengthText:null==t?void 0:t.strengthText,open:f,onOpenChange:v,children:(0,p.jsx)("div",{children:(0,p.jsx)(d.Z,(0,o.Z)({valueType:"password",fieldProps:(0,o.Z)((0,o.Z)({},(0,c.Z)(t,["statusRender","popoverProps","strengthText"])),{},{onBlur:function(e){var n;null==t||null===(n=t.onBlur)||void 0===n||n.call(t,e),v(!1)},onClick:function(e){var n;null==t||null===(n=t.onClick)||void 0===n||n.call(t,e),v(!0)}}),proFieldProps:n,filedConfig:{valueType:g}},l))})}):(0,p.jsx)(d.Z,(0,o.Z)({valueType:"password",fieldProps:t,proFieldProps:n,filedConfig:{valueType:g}},l))},v.displayName="ProFormComponent",t.Z=v},65012:function(e,t,n){"use strict";var r=n(13800),o=n(60323),a=n(75271),l=n(89755),s=n(52676),i=["fieldProps","proFieldProps"],c=function(e,t){var n=e.fieldProps,a=e.proFieldProps,c=(0,o.Z)(e,i);return(0,s.jsx)(l.Z,(0,r.Z)({ref:t,valueType:"textarea",fieldProps:n,proFieldProps:a},c))};t.Z=a.forwardRef(c)},67808:function(e,t,n){"use strict";var r=n(13800),o=n(60323),a=n(75271),l=n(89755),s=n(52676),i=["fieldProps","request","params","proFieldProps"],c=function(e,t){var n=e.fieldProps,a=e.request,c=e.params,u=e.proFieldProps,d=(0,o.Z)(e,i);return(0,s.jsx)(l.Z,(0,r.Z)({valueType:"treeSelect",fieldProps:n,ref:t,request:a,params:c,filedConfig:{customLightMode:!0},proFieldProps:u},d))},u=a.forwardRef(c);t.Z=u},33458:function(e,t,n){"use strict";n.d(t,{D$:function(){return f},EP:function(){return v},hS:function(){return g},z_:function(){return d}});var r=n(90228),o=n.n(r),a=n(26068),l=n.n(a),s=n(87999),i=n.n(s),c=n(64453),u=n(45234);function d(e){return p.apply(this,arguments)}function p(){return(p=i()(o()().mark((function e(t){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("/api/v1/mem/query/org",{method:"GET",params:l()(l()({},t),{},{client:c.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return m.apply(this,arguments)}function m(){return(m=i()(o()().mark((function e(t){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("/api/v1/mem/create",{method:"POST",data:l()(l()({},t),{},{client:c.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return h.apply(this,arguments)}function h(){return(h=i()(o()().mark((function e(t){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("/api/v1/mem/update",{method:"POST",data:l()(l()({},t),{},{client:c.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return x.apply(this,arguments)}function x(){return(x=i()(o()().mark((function e(t){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("/api/v1/member/delete",{method:"POST",data:l()(l()({},t),{},{client:c.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},7571:function(e,t,n){"use strict";var r=n(94414);t.Z=function(){var e=(0,r.Z)().isDarkMode;return{leftSiderStyle:{borderRight:e?"1px solid #333":"1px solid #ccc",background:e?"#141414":"#f5f5f5"},leftSiderWidth:250,headerStyle:{background:e?"#141414":"#fff"},rightSiderStyle:{borderLeft:e?"1px solid #333":"1px solid #ccc",background:e?"#141414":"#f5f5f5"},contentStyle:{minHeight:120,background:e?"#141414":"#f5f5f5",height:"100vh"}}}},3112:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ae}});var r=n(16242),o=n(75271),a=n(7571),l=n(26068),s=n.n(l),i=n(67825),c=n.n(i),u=n(90228),d=n.n(u),p=n(87999),f=n.n(p),m=n(48305),g=n.n(m),h=n(33458),v=n(335),x=n.n(v),b=n(15558),y=n.n(b),C=n(64453),w=n(79475),j=n(11811),k=n(15226),M=(0,w.Ue)()((0,j.mW)((0,j.tJ)((0,k.n)((function(e,t){return{departmentResult:{data:{content:[]}},currentDepartment:{uid:"",nickname:""},insertDepartment:function(t){e((function(e){e.departmentResult.data.content.push(t)}))},setDepartmentResult:function(n){var r,o={uid:C.zBg,name:C.zBg};(e({departmentResult:s()(s()({},n),{},{data:{content:[o].concat(y()(n.data.content))}})}),""===t().currentDepartment.uid)&&((null===(r=n.data)||void 0===r||null===(r=r.content)||void 0===r?void 0:r.length)>0&&e({currentDepartment:n.data.content[0]}))},setCurrentDepartment:function(n){var r=t().departmentResult.data.content,o=r.findIndex((function(e){return e.uid===n.uid}));if(-1!==o){var a=[].concat(y()(r.slice(0,o)),[n],y()(r.slice(o+1))),l=s()(s()({},t().departmentResult),{},{data:{content:a}});e({departmentResult:l,currentDepartment:n})}else console.warn("Department with the specified uid not found."),e({currentDepartment:n})},deleteCurrentDepartment:function(n){var r=t().departmentResult.data.content,o=r.findIndex((function(e){return e.uid===n}));-1!==o?e({departmentResult:s()(s()({},t().departmentResult),{},{data:{content:[].concat(y()(r.slice(0,o)),y()(r.slice(o+1)))}})}):console.warn("Department not found in cache:",n),t().currentDepartment.uid===n&&e({currentDepartment:{uid:""}})},setCurrentDepUid:function(n){var r,o,a=null===(r=t().departmentResult)||void 0===r||null===(r=r.data)||void 0===r||null===(r=r.content)||void 0===r?void 0:r.find((function(e){return e.uid===n}));if(a)e({currentDepartment:a});else{!function t(r){var o,a=x()(r);try{for(a.s();!(o=a.n()).done;){var l=o.value;if(l.uid===n)return void e({currentDepartment:l});l.children&&l.children.length>0&&t(l.children)}}catch(e){a.e(e)}finally{a.f()}}((null===(o=t().departmentResult)||void 0===o||null===(o=o.data)||void 0===o?void 0:o.content)||[])}},deleteDepartmentCache:function(){return e({},!0)}}})),{name:C.xY_}))),Z=n(95877),S=n(65060),P=n(40141),O=n(33413),D=n(25203),$=n(15161),N=n(8591),T=n(71275),F=n(42502),E=n(43393),R=n(67808),I=n(64826),z=n(45234),B=n(16993),q=n(23942),U=n(52676),V=function(e){var t=e.isEdit,n=e.member,r=e.open,a=e.onClose,l=e.onSubmit,s=E.A.useForm(),i=g()(s,1)[0],c=(0,z.useIntl)(),u=M((function(e){return e.departmentResult})),d=(0,Z.u)((function(e){return e.currentOrg}));(0,o.useEffect)((function(){n&&i?i.setFieldsValue({depUid:(null==n?void 0:n.departments.length)>0?null==n?void 0:n.departments[0].uid:"",nickname:null==n?void 0:n.nickname,email:null==n?void 0:n.email,mobile:null==n?void 0:n.mobile,jobNo:null==n?void 0:n.jobNo,seatNo:null==n?void 0:n.seatNo,telephone:null==n?void 0:n.telephone}):null==i||t||(console.log("form resetFields"),i.resetFields())}),[n]);var p=function e(t,n){if(t.name.startsWith(C.VoP)?n.title=c.formatMessage({id:t.name,defaultMessage:t.name}):n.title=t.name,n.value=t.uid,t.children)for(var r=0;r<t.children.length;r++){var o={title:"",value:"",children:[]};e(t.children[r],o),n.children.push(o)}},f=(0,o.useMemo)((function(){for(var e=[],t=0;t<u.data.content.length;t++)if(u.data.content[t].name!==C.zBg){var n={title:"",value:"",children:[]};p(u.data.content[t],n),e.push(n)}return e}),[u]);return(0,U.jsx)("div",{children:(0,U.jsx)(B.Z,{title:t?"编辑成员":"新建成员",onClose:a,open:r,extra:(0,U.jsxs)(q.Z,{children:[(0,U.jsx)(F.ZP,{onClick:a,children:"取消"}),(0,U.jsx)(F.ZP,{onClick:function(){console.log("handleSubmit"),i.validateFields().then((function(e){console.log("Form values:",e);var t={uid:null==n?void 0:n.uid,nickname:e.nickname,email:e.email,mobile:e.mobile,jobNo:e.jobNo,seatNo:e.seatNo,telephone:e.telephone,depUid:e.depUid,orgUid:null==d?void 0:d.uid};console.log("memberObject:",t),l(t)})).catch((function(e){console.log("Form errors:",e)}))},type:"primary",children:"保存"})]}),children:(0,U.jsxs)(E.A,{form:i,name:"memForm",initialValues:{depUid:(null==n?void 0:n.departments.length)>0?null==n?void 0:n.departments[0].uid:"",nickname:null==n?void 0:n.nickname,email:null==n?void 0:n.email,mobile:null==n?void 0:n.mobile,jobNo:null==n?void 0:n.jobNo,seatNo:null==n?void 0:n.seatNo,telephone:null==n?void 0:n.telephone},submitter:!1,children:[(0,U.jsx)(R.Z,{label:"部门",name:"depUid",width:"md",placeholder:"请选择部门",allowClear:!0,rules:[{required:!0,message:"请选择部门"}],fieldProps:{treeDefaultExpandAll:!0,dropdownStyle:{maxHeight:400,overflow:"auto"},treeData:f}}),(0,U.jsx)(I.Z,{label:"姓名",name:"nickname",rules:[{required:!0,message:"请输入姓名"}]}),(0,U.jsx)(I.Z,{label:"手机",name:"mobile",disabled:t,rules:[{required:!0,message:"请输入手机号"}]}),(0,U.jsx)(I.Z,{label:"邮箱",name:"email",disabled:t,rules:[{required:!0,message:"请输入邮箱"},{type:"email",message:"请输入正确的邮箱地址"}]}),(0,U.jsx)(I.Z,{label:"工号",name:"jobNo"}),(0,U.jsx)(I.Z,{label:"座位号",name:"seatNo"}),(0,U.jsx)(I.Z,{label:"分机号",name:"telephone"}),(0,U.jsx)("p",{children:"新创建用户登录用户名为：邮箱，默认密码为：123456"})]})})})},H=n(37240),W=n(49437),A=["current"],L=function(){var e=(0,o.useRef)(),t=(0,z.useIntl)(),n=(0,o.useRef)(!1),r=(0,o.useState)(!0),a=g()(r,2),l=a[0],i=a[1],u=(0,o.useState)(),p=g()(u,2),m=p[0],v=p[1],x=(0,o.useState)(!1),b=g()(x,2),y=b[0],w=b[1],j=(0,Z.u)((function(e){return e.currentOrg})),k=M((function(e){return e.currentDepartment})),E=N.Z.useModal(),R=g()(E,2),I=R[0],B=R[1],q=[{dataIndex:"index",valueType:"indexBorder",width:48},{title:(0,U.jsx)(z.FormattedMessage,{id:"name",defaultMessage:"Name"}),dataIndex:"nickname"},{title:(0,U.jsx)(z.FormattedMessage,{id:"jobNo",defaultMessage:"JobNum"}),dataIndex:"jobNo"},{title:(0,U.jsx)(z.FormattedMessage,{id:"email",defaultMessage:"Email"}),dataIndex:"email",render:function(e,t){return(0,U.jsx)("a",{href:"mailto:".concat(t.email),children:e})}},{title:(0,U.jsx)(z.FormattedMessage,{id:"telephone",defaultMessage:"Telephone"}),dataIndex:"telephone"},{title:(0,U.jsx)(z.FormattedMessage,{id:"seatNo",defaultMessage:"SeatNum"}),dataIndex:"seatNo"},{title:(0,U.jsx)(z.FormattedMessage,{id:"department",defaultMessage:"Department"}),render:function(e,t){return t.departments.length>0?t.departments[0].name.startsWith(C.VoP)?(0,U.jsx)(T.Z,{children:(0,U.jsx)(z.FormattedMessage,{id:t.departments[0].name})}):(0,U.jsx)(T.Z,{children:t.departments[0].name}):""}},{title:(0,U.jsx)(z.FormattedMessage,{id:"status",defaultMessage:"Status"}),dataIndex:"inviteAccepted",render:function(e,t){return t.status}},{title:(0,U.jsx)(z.FormattedMessage,{id:"mobile",defaultMessage:"Mobile"}),dataIndex:"mobile",render:function(e,t){return(0,U.jsx)("a",{href:"tel:".concat(t.mobile),children:t.mobile})}}],L=[].concat(q,[{title:t.formatMessage({id:"actions",defaultMessage:"Actions"}),valueType:"option",key:"option",render:function(e,n,r,o){return[(0,U.jsx)("a",{onClick:function(){console.log("editable:",n),X(n)},children:t.formatMessage({id:"edit",defaultMessage:"Edit"})},"editable"),(0,U.jsx)(F.ZP,{type:"link",onClick:function(){return e=n,void I.confirm({title:t.formatMessage({id:"deleteTip"}),icon:(0,U.jsx)(S.Z,{}),content:"".concat(t.formatMessage({id:"deleteAfirm",defaultMessage:"Delete"}),"【").concat(e.nickname,"】？"),onOk:function(){_(e)},onCancel:function(){},okText:t.formatMessage({id:"ok"}),cancelText:t.formatMessage({id:"cancel"})});var e},danger:!0,children:t.formatMessage({id:"delete",defaultMessage:"Delete"})},"delete")]}}]);(0,o.useEffect)((function(){console.log("currentDepDid:",k),e.current.reload()}),[k]);var G,_=function(){var n=f()(d()().mark((function n(r){var o;return d()().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("delete mem:",r),n.next=3,(0,h.EP)(r);case 3:o=n.sent,console.log("deleteMember:",o),200===o.code?(H.yw.success(t.formatMessage({id:"delete.success",defaultMessage:"Delete success"})),e.current.reload()):H.yw.error(o.message);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),X=function(e){v(e),i(!0),w(!0)},J=function(){w(!1)},K=function(){var n=f()(d()().mark((function n(r){var o,a;return d()().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(console.log("handleSubmitDrawer:",r),!l){n.next=9;break}return n.next=4,(0,h.hS)(r);case 4:o=n.sent,console.log("updateMember:",o),200===o.code?(H.yw.success(t.formatMessage({id:"update.success",defaultMessage:"update success"})),e.current.reload(),J()):H.yw.error(o.message),n.next=14;break;case 9:return n.next=11,(0,h.D$)(r);case 11:a=n.sent,console.log("createMember:",a),200===a.code?(H.yw.success(t.formatMessage({id:"create.success",defaultMessage:"create success"})),e.current.reload(),J()):H.yw.error(a.message);case 14:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),Q=function(){var e=f()(d()().mark((function e(){return d()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:H.yw.warning("TODO: 即将上线，敬请期待");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=f()(d()().mark((function e(){var t;return d()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=localStorage.getItem(C.LA8),window.open((0,W.SV)()+"/api/v1/mem/export?orgUid="+(null==j?void 0:j.uid)+"&pageNumber=0&pageSize=20&accessToken="+t);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)($.Z,{columns:L,actionRef:e,cardBordered:!0,request:function(){var e=f()(d()().mark((function e(t,r,o){var a,l,i;return d()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("request:",t,r,o),!n.current){e.next=4;break}return console.log("isLoading: 1",n.current),e.abrupt("return");case 4:return n.current=!0,H.yw.loading("正在加载"),t.current,a=c()(t,A),l=s()({pageNumber:t.current-1,orgUid:j.uid,depUid:k.uid===C.zBg?"":k.uid},a),e.next=10,(0,h.z_)(l);case 10:return i=e.sent,console.log("queryMembersByOrg:",l,i),200===i.code||H.yw.error(i.message),n.current=!1,H.yw.destroy(),e.abrupt("return",{data:i.data.content,success:!0,total:i.data.totalElements});case 16:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),rowKey:"uid",search:{labelWidth:"auto"},pagination:{showQuickJumper:!0,onChange:function(e){console.log("page:",e)}},headerTitle:null!=k&&null!==(G=k.name)&&void 0!==G&&G.startsWith("i18n.")?t.formatMessage({id:null==k?void 0:k.name,defaultMessage:null==k?void 0:k.name}):null==k?void 0:k.name,toolBarRender:function(){return[(0,U.jsx)(F.ZP,{icon:(0,U.jsx)(P.Z,{}),onClick:function(){console.log("new"),v(void 0),i(!1),w(!0)},type:"primary",children:t.formatMessage({id:"create",defaultMessage:"Create"})},"button"),(0,U.jsx)(F.ZP,{icon:(0,U.jsx)(O.Z,{}),type:"primary",onClick:Q,children:t.formatMessage({id:"import",defaultMessage:"Import"})},"button"),(0,U.jsx)(F.ZP,{icon:(0,U.jsx)(D.Z,{}),type:"primary",onClick:Y,children:t.formatMessage({id:"export",defaultMessage:"Export"})},"button")]}}),(0,U.jsx)(V,{isEdit:l,member:m,open:y,onClose:J,onSubmit:K}),B]})},G=n(85867),_=n(99914);function X(e){return J.apply(this,arguments)}function J(){return(J=f()(d()().mark((function e(t){return d()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,z.request)("/api/v1/dep/query/org",{method:"GET",params:s()(s()({},t),{},{client:C.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function K(e){return Q.apply(this,arguments)}function Q(){return(Q=f()(d()().mark((function e(t){return d()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,z.request)("/api/v1/dep/create",{method:"POST",data:s()(s()({},t),{},{client:C.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Y=n(65012),ee=n(92813),te=function(e){var t=e.open,n=e.onCancel,r=e.onSubmit,a=ee.Z.useForm(),l=g()(a,1)[0],s=(0,z.useIntl)(),i=(0,o.useState)(""),c=g()(i,2),u=c[0],p=c[1],m=M((function(e){return e.departmentResult})),h=(0,Z.u)((function(e){return e.currentOrg})),v=function e(t,n){if(t.name.startsWith(C.VoP)?n.title=s.formatMessage({id:t.name,defaultMessage:t.name}):n.title=t.name,n.value=t.uid,t.children)for(var r=0;r<t.children.length;r++){e(t.children[r],{title:"",value:"",children:[]})}},x=(0,o.useMemo)((function(){for(var e=[],t=0;t<m.data.content.length;t++)if(m.data.content[t].name!==C.zBg){var n={title:"",value:"",children:[]};v(m.data.content[t],n),e.push(n)}return e}),[m]);return(0,U.jsx)("div",{children:(0,U.jsx)(N.Z,{title:"创建部门",open:t,forceRender:!0,onOk:function(){l.validateFields().then(function(){var e=f()(d()().mark((function e(t){var n;return d()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("handleSaveDep:",t),n={uid:"",name:t.nickname,description:t.description,parentUid:u||void 0,orgUid:h.uid},r(n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log("Failed:",e),H.yw.error("创建部门失败")}))},onCancel:n,children:(0,U.jsxs)(E.A,{form:l,name:"depForm",style:{maxWidth:400},submitter:{render:function(){return null}},children:[(0,U.jsx)(R.Z,{label:"上级部门",name:"parentUid",allowClear:!0,fieldProps:{treeData:x,placeholder:"请选择上级部门(可选)",allowClear:!0,treeDefaultExpandAll:!0,onChange:function(e){console.log("onParentSelectChange:",e),p(e||"")},dropdownStyle:{maxHeight:400,overflow:"auto"}}}),(0,U.jsx)(I.Z,{label:"部门名称",name:"nickname",rules:[{required:!0,message:"请输入名称!"}]}),(0,U.jsx)(Y.Z,{label:"部门简介",name:"description"})]})})})},ne=function(){var e=(0,z.useIntl)(),t=(0,o.useState)(!1),n=g()(t,2),r=n[0],a=n[1],l=(0,Z.u)((function(e){return e.currentOrg})),s=N.Z.useModal(),i=g()(s,2),c=i[0],u=i[1],p=M((function(e){return{currentDepartment:e.currentDepartment,departmentResult:e.departmentResult,insertDepartment:e.insertDepartment,setDepartmentResult:e.setDepartmentResult,setCurrentDepUid:e.setCurrentDepUid}})),m=p.currentDepartment,h=p.departmentResult,v=p.insertDepartment,x=p.setDepartmentResult,b=p.setCurrentDepUid,y=function t(n,r){if(n.name.startsWith(C.VoP)?r.title=e.formatMessage({id:n.name,defaultMessage:n.name}):r.title=n.name,r.key=n.uid,n.children)for(var o=0;o<n.children.length;o++){var a={title:"",key:"",children:[]};t(n.children[o],a),r.children.push(a)}},w=(0,o.useMemo)((function(){for(var e=[],t=0;t<h.data.content.length;t++){var n={title:"",key:"",children:[]};y(h.data.content[t],n),e.push(n)}return e}),[h]),j=function(){var e=f()(d()().mark((function e(){var t,n;return d()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={pageNumber:0,pageSize:50,orgUid:l.uid},e.next=3,X(t);case 3:n=e.sent,console.log("queryDepartmentsByOrg:",n),200===n.code?x(n):H.yw.error(n.message);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,o.useEffect)((function(){j()}),[]);var k=function(){var t=f()(d()().mark((function t(n){var r;return d()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("saveDep",n),H.yw.loading(e.formatMessage({id:"creating"})),t.next=4,K(n);case 4:r=t.sent,console.log("createDepartment:",r),200===r.code?(H.yw.destroy(),H.yw.success(e.formatMessage({id:"create.success",defaultMessage:"create success"})),v(r.data),a(!1)):(H.yw.destroy(),H.yw.error(r.message));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)(G.Z,{gap:"small",wrap:"wrap",children:[(0,U.jsx)(F.ZP,{type:"primary",size:"small",onClick:function(){console.log("new dep"),a(!0)},children:e.formatMessage({id:"create",defaultMessage:"Create"})}),(0,U.jsx)(F.ZP,{size:"small",onClick:j,children:e.formatMessage({id:"refresh",defaultMessage:"Refresh"})}),(0,U.jsx)(F.ZP,{onClick:function(){return t=m,void c.confirm({title:e.formatMessage({id:"deleteTip"}),icon:(0,U.jsx)(S.Z,{}),content:"".concat(e.formatMessage({id:"deleteAfirm",defaultMessage:"Delete"}),"【").concat(t.name,"】？"),onOk:function(){},onCancel:function(){},okText:e.formatMessage({id:"ok"}),cancelText:e.formatMessage({id:"cancel"})});var t},size:"small",style:{float:"right"},danger:!0,disabled:""===(null==m?void 0:m.uid),children:e.formatMessage({id:"pages.robot.delete",defaultMessage:"Delete"})})]}),(0,U.jsx)(_.Z,{defaultExpandedKeys:[m.uid],defaultSelectedKeys:[m.uid],onSelect:function(e,t){console.log("selected",e,t),0!==e.length&&b(e[0].toString())},treeData:w,blockNode:!0}),(0,U.jsx)(te,{open:r,onCancel:function(){a(!1)},onSubmit:k}),u]})},re=r.Z.Sider,oe=r.Z.Content,ae=function(){var e=(0,a.Z)(),t=e.leftSiderStyle,n=e.leftSiderWidth,o=e.contentStyle;return(0,U.jsxs)(r.Z,{children:[(0,U.jsx)(re,{width:n,style:t,children:(0,U.jsx)(ne,{})}),(0,U.jsx)(r.Z,{children:(0,U.jsx)(oe,{style:o,children:(0,U.jsx)(L,{})})})]})}},85867:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var r=n(75271),o=n(82187),a=n.n(o),l=n(2021),s=n(71764),i=n(34662),c=n(94598),u=n(95732);const d=["wrap","nowrap","wrap-reverse"],p=["flex-start","flex-end","start","end","center","space-between","space-around","space-evenly","stretch","normal","left","right"],f=["center","start","end","flex-start","flex-end","self-start","self-end","baseline","normal","stretch"];var m=function(e,t){return a()(Object.assign(Object.assign(Object.assign({},((e,t)=>{const n=!0===t.wrap?"wrap":t.wrap;return{[`${e}-wrap-${n}`]:n&&d.includes(n)}})(e,t)),((e,t)=>{const n={};return f.forEach((r=>{n[`${e}-align-${r}`]=t.align===r})),n[`${e}-align-stretch`]=!t.align&&!!t.vertical,n})(e,t)),((e,t)=>{const n={};return p.forEach((r=>{n[`${e}-justify-${r}`]=t.justify===r})),n})(e,t)))};const g=e=>{const{componentCls:t}=e;return{[t]:{display:"flex","&-vertical":{flexDirection:"column"},"&-rtl":{direction:"rtl"},"&:empty":{display:"none"}}}},h=e=>{const{componentCls:t}=e;return{[t]:{"&-gap-small":{gap:e.flexGapSM},"&-gap-middle":{gap:e.flexGap},"&-gap-large":{gap:e.flexGapLG}}}},v=e=>{const{componentCls:t}=e,n={};return d.forEach((e=>{n[`${t}-wrap-${e}`]={flexWrap:e}})),n},x=e=>{const{componentCls:t}=e,n={};return f.forEach((e=>{n[`${t}-align-${e}`]={alignItems:e}})),n},b=e=>{const{componentCls:t}=e,n={};return p.forEach((e=>{n[`${t}-justify-${e}`]={justifyContent:e}})),n};var y=(0,c.I$)("Flex",(e=>{const{paddingXS:t,padding:n,paddingLG:r}=e,o=(0,u.IX)(e,{flexGapSM:t,flexGap:n,flexGapLG:r});return[g(o),h(o),v(o),x(o),b(o)]}),(()=>({})),{resetStyle:!1}),C=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const w=r.forwardRef(((e,t)=>{const{prefixCls:n,rootClassName:o,className:c,style:u,flex:d,gap:p,children:f,vertical:g=!1,component:h="div"}=e,v=C(e,["prefixCls","rootClassName","className","style","flex","gap","children","vertical","component"]),{flex:x,direction:b,getPrefixCls:w}=r.useContext(i.E_),j=w("flex",n),[k,M,Z]=y(j),S=null!=g?g:null==x?void 0:x.vertical,P=a()(c,o,null==x?void 0:x.className,j,M,Z,m(j,e),{[`${j}-rtl`]:"rtl"===b,[`${j}-gap-${p}`]:(0,s.n)(p),[`${j}-vertical`]:S}),O=Object.assign(Object.assign({},null==x?void 0:x.style),u);return d&&(O.flex=d),p&&!(0,s.n)(p)&&(O.gap=p),k(r.createElement(h,Object.assign({ref:t,className:P,style:O},(0,l.Z)(v,["justify","wrap","align"])),f))}));var j=w},71275:function(e,t,n){"use strict";n.d(t,{Z:function(){return D}});var r=n(75271),o=n(82187),a=n.n(o),l=n(2021),s=n(32919),i=n(64931),c=n(70504),u=n(78997),d=n(34662),p=n(54325),f=n(99978),m=n(20176),g=n(95732),h=n(94598);const v=e=>{const{lineWidth:t,fontSizeIcon:n,calc:r}=e,o=e.fontSizeSM;return(0,g.IX)(e,{tagFontSize:o,tagLineHeight:(0,p.bf)(r(e.lineHeightSM).mul(o).equal()),tagIconSize:r(n).sub(r(t).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:e.defaultBg})},x=e=>({defaultBg:new f.C(e.colorFillQuaternary).onBackground(e.colorBgContainer).toHexString(),defaultColor:e.colorText});var b=(0,h.I$)("Tag",(e=>(e=>{const{paddingXXS:t,lineWidth:n,tagPaddingHorizontal:r,componentCls:o,calc:a}=e,l=a(r).sub(n).equal(),s=a(t).sub(n).equal();return{[o]:Object.assign(Object.assign({},(0,m.Wf)(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:l,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:`${(0,p.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",position:"relative",[`&${o}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},[`${o}-close-icon`]:{marginInlineStart:s,fontSize:e.tagIconSize,color:e.colorTextDescription,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${o}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${o}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:l}}),[`${o}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}})(v(e))),x),y=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const C=r.forwardRef(((e,t)=>{const{prefixCls:n,style:o,className:l,checked:s,onChange:i,onClick:c}=e,u=y(e,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:p,tag:f}=r.useContext(d.E_),m=p("tag",n),[g,h,v]=b(m),x=a()(m,`${m}-checkable`,{[`${m}-checkable-checked`]:s},null==f?void 0:f.className,l,h,v);return g(r.createElement("span",Object.assign({},u,{ref:t,style:Object.assign(Object.assign({},o),null==f?void 0:f.style),className:x,onClick:e=>{null==i||i(!s),null==c||c(e)}})))}));var w=C,j=n(74954);var k=(0,h.bk)(["Tag","preset"],(e=>(e=>(0,j.Z)(e,((t,n)=>{let{textColor:r,lightBorderColor:o,lightColor:a,darkColor:l}=n;return{[`${e.componentCls}${e.componentCls}-${t}`]:{color:r,background:a,borderColor:o,"&-inverse":{color:e.colorTextLightSolid,background:l,borderColor:l},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}})))(v(e))),x);const M=(e,t,n)=>{const r="string"!=typeof(o=n)?o:o.charAt(0).toUpperCase()+o.slice(1);var o;return{[`${e.componentCls}${e.componentCls}-${t}`]:{color:e[`color${n}`],background:e[`color${r}Bg`],borderColor:e[`color${r}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}};var Z=(0,h.bk)(["Tag","status"],(e=>{const t=v(e);return[M(t,"success","Success"),M(t,"processing","Info"),M(t,"error","Error"),M(t,"warning","Warning")]}),x),S=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const P=r.forwardRef(((e,t)=>{const{prefixCls:n,className:o,rootClassName:p,style:f,children:m,icon:g,color:h,onClose:v,bordered:x=!0,visible:y}=e,C=S(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","bordered","visible"]),{getPrefixCls:w,direction:j,tag:M}=r.useContext(d.E_),[P,O]=r.useState(!0),D=(0,l.Z)(C,["closeIcon","closable"]);r.useEffect((()=>{void 0!==y&&O(y)}),[y]);const $=(0,s.o2)(h),N=(0,s.yT)(h),T=$||N,F=Object.assign(Object.assign({backgroundColor:h&&!T?h:void 0},null==M?void 0:M.style),f),E=w("tag",n),[R,I,z]=b(E),B=a()(E,null==M?void 0:M.className,{[`${E}-${h}`]:T,[`${E}-has-color`]:h&&!T,[`${E}-hidden`]:!P,[`${E}-rtl`]:"rtl"===j,[`${E}-borderless`]:!x},o,p,I,z),q=e=>{e.stopPropagation(),null==v||v(e),e.defaultPrevented||O(!1)},[,U]=(0,i.Z)((0,i.w)(e),(0,i.w)(M),{closable:!1,closeIconRender:e=>{const t=r.createElement("span",{className:`${E}-close-icon`,onClick:q},e);return(0,c.wm)(e,t,(e=>({onClick:t=>{var n;null===(n=null==e?void 0:e.onClick)||void 0===n||n.call(e,t),q(t)},className:a()(null==e?void 0:e.className,`${E}-close-icon`)})))}}),V="function"==typeof C.onClick||m&&"a"===m.type,H=g||null,W=H?r.createElement(r.Fragment,null,H,m&&r.createElement("span",null,m)):m,A=r.createElement("span",Object.assign({},D,{ref:t,className:B,style:F}),W,U,$&&r.createElement(k,{key:"preset",prefixCls:E}),N&&r.createElement(Z,{key:"status",prefixCls:E}));return R(V?r.createElement(u.Z,{component:"Tag"},A):A)})),O=P;O.CheckableTag=w;var D=O},335:function(e,t,n){var r=n(31479);e.exports=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=r(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,s=!0,i=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){i=!0,l=e},f:function(){try{s||null==n.return||n.return()}finally{if(i)throw l}}}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);