"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[275],{6817:function(e,n,r){var t=r(13800),o=r(60323),a=r(24671),l=r(75271),i=r(55666),s=r(89755),u=r(52676),d=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],c=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],p=function(e,n){var r=e.fieldProps,c=e.children,p=e.params,f=e.proFieldProps,h=e.mode,g=e.valueEnum,v=e.request,m=e.showSearch,y=e.options,x=(0,o.Z)(e,d),P=(0,l.useContext)(i.Z);return(0,u.jsx)(s.Z,(0,t.Z)((0,t.Z)({valueEnum:(0,a.h)(g),request:v,params:p,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,t.Z)({options:y,mode:h,showSearch:m,getPopupContainer:P.getPopupContainer},r),ref:n,proFieldProps:f},x),{},{children:c}))},f=l.forwardRef((function(e,n){var r=e.fieldProps,d=e.children,p=e.params,f=e.proFieldProps,h=e.mode,g=e.valueEnum,v=e.request,m=e.options,y=(0,o.Z)(e,c),x=(0,t.Z)({options:m,mode:h||"multiple",labelInValue:!0,showSearch:!0,suffixIcon:null,autoClearSearchValue:!0,optionLabelProp:"label"},r),P=(0,l.useContext)(i.Z);return(0,u.jsx)(s.Z,(0,t.Z)((0,t.Z)({valueEnum:(0,a.h)(g),request:v,params:p,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,t.Z)({getPopupContainer:P.getPopupContainer},x),ref:n,proFieldProps:f},y),{},{children:d}))})),h=l.forwardRef(p);h.SearchSelect=f,h.displayName="ProFormComponent",n.Z=h},64826:function(e,n,r){var t=r(76314),o=r(13800),a=r(60323),l=r(6522),i=r(92813),s=r(54433),u=r(71770),d=r(75271),c=r(89755),p=r(52676),f=["fieldProps","proFieldProps"],h=["fieldProps","proFieldProps"],g="text",v=function(e){var n=(0,l.Z)(e.open||!1,{value:e.open,onChange:e.onOpenChange}),r=(0,t.Z)(n,2),a=r[0],u=r[1];return(0,p.jsx)(i.Z.Item,{shouldUpdate:!0,noStyle:!0,children:function(n){var r,t=n.getFieldValue(e.name||[]);return(0,p.jsx)(s.Z,(0,o.Z)((0,o.Z)({getPopupContainer:function(e){return e&&e.parentNode?e.parentNode:e},onOpenChange:function(e){return u(e)},content:(0,p.jsxs)("div",{style:{padding:"4px 0"},children:[null===(r=e.statusRender)||void 0===r?void 0:r.call(e,t),e.strengthText?(0,p.jsx)("div",{style:{marginTop:10},children:(0,p.jsx)("span",{children:e.strengthText})}):null]}),overlayStyle:{width:240},placement:"rightTop"},e.popoverProps),{},{open:a,children:e.children}))}})},m=function(e){var n=e.fieldProps,r=e.proFieldProps,t=(0,a.Z)(e,f);return(0,p.jsx)(c.Z,(0,o.Z)({valueType:g,fieldProps:n,filedConfig:{valueType:g},proFieldProps:r},t))};m.Password=function(e){var n=e.fieldProps,r=e.proFieldProps,l=(0,a.Z)(e,h),i=(0,d.useState)(!1),s=(0,t.Z)(i,2),f=s[0],m=s[1];return null!=n&&n.statusRender&&l.name?(0,p.jsx)(v,{name:l.name,statusRender:null==n?void 0:n.statusRender,popoverProps:null==n?void 0:n.popoverProps,strengthText:null==n?void 0:n.strengthText,open:f,onOpenChange:m,children:(0,p.jsx)("div",{children:(0,p.jsx)(c.Z,(0,o.Z)({valueType:"password",fieldProps:(0,o.Z)((0,o.Z)({},(0,u.Z)(n,["statusRender","popoverProps","strengthText"])),{},{onBlur:function(e){var r;null==n||null===(r=n.onBlur)||void 0===r||r.call(n,e),m(!1)},onClick:function(e){var r;null==n||null===(r=n.onClick)||void 0===r||r.call(n,e),m(!0)}}),proFieldProps:r,filedConfig:{valueType:g}},l))})}):(0,p.jsx)(c.Z,(0,o.Z)({valueType:"password",fieldProps:n,proFieldProps:r,filedConfig:{valueType:g}},l))},m.displayName="ProFormComponent",n.Z=m},65012:function(e,n,r){var t=r(13800),o=r(60323),a=r(75271),l=r(89755),i=r(52676),s=["fieldProps","proFieldProps"],u=function(e,n){var r=e.fieldProps,a=e.proFieldProps,u=(0,o.Z)(e,s);return(0,i.jsx)(l.Z,(0,t.Z)({ref:n,valueType:"textarea",fieldProps:r,proFieldProps:a},u))};n.Z=a.forwardRef(u)},52221:function(e,n,r){r.r(n),r.d(n,{default:function(){return A}});var t=r(26068),o=r.n(t),a=r(67825),l=r.n(a),i=r(90228),s=r.n(i),u=r(87999),d=r.n(u),c=r(48305),p=r.n(c),f=r(37240),h=r(45234);function g(e){return v.apply(this,arguments)}function v(){return(v=d()(s()().mark((function e(n){return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,h.request)("/api/v1/push/query/org",{method:"GET",params:o()({},n)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var m=r(40141),y=r(15161),x=r(42502),P=r(75271),Z=r(69483),C=r(95877),b=r(64453),j=r(43393),w=r(6817),F=r(64826),T=r(65012),S=r(92813),k=r(16993),R=r(23942),q=r(52676),E=function(e){var n=e.isEdit,r=e.quickreply,t=e.open,a=e.onClose,l=e.onSubmit,i=S.Z.useForm(),s=p()(i,1)[0],u=(0,C.u)((function(e){return e.currentOrg})),d=(0,Z.v)((function(e){return e.categorySelectOptions}));(0,P.useEffect)((function(){n||s.resetFields()}),[t]);return(0,q.jsx)(q.Fragment,{children:(0,q.jsx)(k.Z,{title:n?"修改":"新建",onClose:a,open:t,extra:(0,q.jsxs)(R.Z,{children:[(0,q.jsx)(x.ZP,{onClick:a,children:"取消"}),(0,q.jsx)(x.ZP,{onClick:function(){console.log("handleSubmit"),s.validateFields().then((function(e){console.log(e),l(o()(o()(o()({},r),e),{},{orgUid:null==u?void 0:u.uid}))})).catch((function(e){console.log("Form errors:",e),f.yw.error("请检查表单填写")}))},type:"primary",children:"保存"})]}),children:(0,q.jsxs)(j.A,{form:s,initialValues:o()({},r),submitter:{render:function(){return null}},children:[(0,q.jsx)(w.Z,{label:"分类",name:"categoryUid",rules:[{required:!0,message:"请选择分类"}],options:d,fieldProps:{allowClear:!0,placeholder:"请选择分类",onChange:function(e){console.log("category selected ".concat(e))}}}),(0,q.jsx)(w.Z,{label:"类型",name:"type",rules:[{required:!0,message:"请选择类型"}],options:[{label:"文本",value:b.PYi},{label:"图片",value:b.Qm,disabled:!0},{label:"视频",value:b.tVi,disabled:!0},{label:"音频",value:b.Yu1,disabled:!0},{label:"文件",value:b.Qn,disabled:!0}],fieldProps:{allowClear:!0,placeholder:"请选择类型",onChange:function(e){console.log("type selected ".concat(e))}}}),(0,q.jsx)(F.Z,{label:"标题",name:"title",rules:[{required:!0,message:"请输入标题"}]}),(0,q.jsx)(T.Z,{label:"内容",name:"content"})]})})})},I=["current"],M=[{dataIndex:"index",valueType:"indexBorder",width:48},{title:"发送者",dataIndex:"sender",copyable:!0},{title:"验证码/内容",dataIndex:"content",copyable:!0},{title:"手机号/接收者",dataIndex:"receiver",copyable:!0},{title:"类型",dataIndex:"type"},{title:"状态",dataIndex:"status"},{title:"发送时间",key:"createdAt",dataIndex:"createdAt",sorter:!0,hideInSearch:!0,width:180}],O=function(){var e=(0,h.useIntl)(),n=(0,P.useRef)(),r=(0,P.useState)(!0),t=p()(r,2),a=t[0],i=t[1],u=(0,P.useState)(),c=p()(u,2),v=c[0],C=c[1],b=(0,P.useState)(!1),j=p()(b,2),w=j[0],F=j[1],T=[].concat(M,[{title:e.formatMessage({id:"actions"}),valueType:"option",key:"option",width:100,render:function(n,r,t,o){return[(0,q.jsx)("a",{onClick:function(){R(r)},children:e.formatMessage({id:"edit",defaultMessage:"Edit"})},"editable")]}}]),S=(0,Z.v)((function(e){return e.currentCategory})),k=function(){C(void 0),i(!1),F(!0)},R=function(e){C(e),i(!0),F(!0)},O=function(){var e=d()(s()().mark((function e(n){return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("handleSubmitDrawer",n);case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,P.useEffect)((function(){var e;console.log("currentCategory:",S),null===(e=n.current)||void 0===e||e.reloadAndRest()}),[S]),(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(y.Z,{columns:T,actionRef:n,cardBordered:!0,request:function(){var n=d()(s()().mark((function n(r,t,a){var i,u,d;return s()().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("request:",r,t,a),f.yw.loading(e.formatMessage({id:"loading",defaultMessage:"Loading"})),r.current,i=l()(r,I),u=o()({pageNumber:r.current-1},i),n.next=6,g(u);case 6:return d=n.sent,console.log("getAllPushs response:",u,d),f.yw.destroy(),200===d.code||f.yw.error(d.message),n.abrupt("return",{data:d.data.content,success:!0,total:d.data.totalElements});case 11:case"end":return n.stop()}}),n)})));return function(e,r,t){return n.apply(this,arguments)}}(),rowKey:"uid",search:{labelWidth:"auto"},pagination:{showQuickJumper:!0,onChange:function(e){console.log("page:",e)}},dateFormatter:"string",headerTitle:"推送/短信",toolBarRender:function(){return[(0,q.jsx)(x.ZP,{icon:(0,q.jsx)(m.Z,{}),type:"primary",onClick:k,children:e.formatMessage({id:"create",defaultMessage:"Create"})},"button")]}}),(0,q.jsx)(E,{isEdit:a,open:w,quickreply:v,onClose:function(){F(!1)},onSubmit:O})]})},A=function(){return(0,q.jsx)("div",{children:(0,q.jsx)(O,{})})}},69483:function(e,n,r){r.d(n,{v:function(){return c}});var t=r(15558),o=r.n(t),a=r(26068),l=r.n(a),i=r(64453),s=r(79475),u=r(11811),d=r(15226),c=(0,s.Ue)()((0,u.mW)((0,u.tJ)((0,d.n)((function(e,n){return{categoryResult:{data:{content:[]}},categoryTreeOptions:[],categorySelectOptions:[],currentCategory:{uid:""},setCategoryResult:function(n){var r,t=function(e){var n=[];return e.data.content.forEach((function(e){var r={label:e.name,value:e.uid};n.push(r)})),n}(n),a=l()(l()({},n),{},{data:{content:[{uid:"all",name:"All"}].concat(o()(n.data.content))}}),i=function(e){var n=[];return e.data.content.forEach((function(e){var r={title:e.name,key:e.uid,children:[]};e.children&&Array.isArray(e.children)&&(r.children=e.children.map((function(e){return{title:e.name,key:e.uid,children:[]}}))),n.push(r)})),n}(a);e({categoryResult:a,categoryTreeOptions:i,categorySelectOptions:t}),(null===(r=n.data)||void 0===r||null===(r=r.content)||void 0===r?void 0:r.length)>0?e({currentCategory:n.data.content[0]}):e({currentCategory:{uid:""}})},setCurrentCategoryUid:function(r){var t=n().categoryResult.data.content.find((function(e){return e.uid===r}));e({currentCategory:t})},deleteCategoryCache:function(){return e({},!0)}}})),{name:i.OMm})))}}]);