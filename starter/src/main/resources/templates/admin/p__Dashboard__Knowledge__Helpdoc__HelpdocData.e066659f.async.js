"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[7235],{51042:function(ee,S,e){var i=e(1413),g=e(67294),M=e(42110),n=e(91146),D=function(s,E){return g.createElement(n.Z,(0,i.Z)((0,i.Z)({},s),{},{ref:E,icon:M.Z}))},x=g.forwardRef(D);S.Z=x},64317:function(ee,S,e){var i=e(1413),g=e(91),M=e(22270),n=e(67294),D=e(66758),x=e(32486),F=e(85893),s=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],E=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],C=function(p,Z){var G=p.fieldProps,R=p.children,N=p.params,A=p.proFieldProps,J=p.mode,I=p.valueEnum,b=p.request,Q=p.showSearch,Y=p.options,B=(0,g.Z)(p,s),T=(0,n.useContext)(D.Z);return(0,F.jsx)(x.Z,(0,i.Z)((0,i.Z)({valueEnum:(0,M.h)(I),request:b,params:N,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,i.Z)({options:Y,mode:J,showSearch:Q,getPopupContainer:T.getPopupContainer},G),ref:Z,proFieldProps:A},B),{},{children:R}))},V=n.forwardRef(function(o,p){var Z=o.fieldProps,G=o.children,R=o.params,N=o.proFieldProps,A=o.mode,J=o.valueEnum,I=o.request,b=o.options,Q=(0,g.Z)(o,E),Y=(0,i.Z)({options:b,mode:A||"multiple",labelInValue:!0,showSearch:!0,suffixIcon:null,autoClearSearchValue:!0,optionLabelProp:"label"},Z),B=(0,n.useContext)(D.Z);return(0,F.jsx)(x.Z,(0,i.Z)((0,i.Z)({valueEnum:(0,M.h)(J),request:I,params:R,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,i.Z)({getPopupContainer:B.getPopupContainer},Y),ref:p,proFieldProps:N},Q),{},{children:G}))}),O=n.forwardRef(C),c=V,m=O;m.SearchSelect=c,m.displayName="ProFormComponent",S.Z=m},90672:function(ee,S,e){var i=e(1413),g=e(91),M=e(67294),n=e(32486),D=e(85893),x=["fieldProps","proFieldProps"],F=function(E,C){var V=E.fieldProps,O=E.proFieldProps,c=(0,g.Z)(E,x);return(0,D.jsx)(n.Z,(0,i.Z)({ref:C,valueType:"textarea",fieldProps:V,proFieldProps:O},c))};S.Z=M.forwardRef(F)},10384:function(ee,S,e){e.r(S),e.d(S,{default:function(){return De}});var i=e(77154),g=e(21612),M=e(97857),n=e.n(M),D=e(13769),x=e.n(D),F=e(15009),s=e.n(F),E=e(99289),C=e.n(E),V=e(5574),O=e.n(V),c=e(80049),m=e(85615),o=e(86745);function p(u){return Z.apply(this,arguments)}function Z(){return Z=C()(s()().mark(function u(a){return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,o.request)("/api/v1/vip/helpdoc/query/org",{method:"GET",params:n()(n()({},a),{},{client:m.bV})}));case 1:case"end":return t.stop()}},u)})),Z.apply(this,arguments)}function G(u){return R.apply(this,arguments)}function R(){return R=C()(s()().mark(function u(a){return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,o.request)("/api/v1/vip/helpdoc/create",{method:"POST",data:n()(n()({},a),{},{client:m.bV})}));case 1:case"end":return t.stop()}},u)})),R.apply(this,arguments)}function N(u){return A.apply(this,arguments)}function A(){return A=C()(s()().mark(function u(a){return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,o.request)("/api/v1/vip/helpdoc/update",{method:"POST",data:n()(n()({},a),{},{client:m.bV})}));case 1:case"end":return t.stop()}},u)})),A.apply(this,arguments)}function J(u){return I.apply(this,arguments)}function I(){return I=_asyncToGenerator(_regeneratorRuntime().mark(function u(a){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/api/v1/vip/helpdoc/delete",{method:"POST",data:_objectSpread(_objectSpread({},a),{},{client:HTTP_CLIENT})}));case 1:case"end":return t.stop()}},u)})),I.apply(this,arguments)}var b=e(87676),Q=e(51042),Y=e(53719),B=e(14726),T=e(67294),le=e(89102),ue=e(34994),se=e(64317),de=e(5966),ie=e(90672),ce=e(8232),pe=e(85265),ve=e(42075),r=e(85893),me=function(a){var v=a.isEdit,t=a.helpdoc,z=a.open,H=a.onClose,X=a.onSubmit,te=ce.Z.useForm(),k=O()(te,1),w=k[0],W=(0,b.u)(function(h){return h.currentOrg}),re=(0,le.v)(function(h){return h.categorySelectOptions});(0,T.useEffect)(function(){if(v){var h;w.setFieldsValue({type:t==null?void 0:t.type,title:t==null?void 0:t.title,content:t==null?void 0:t.content,categoryUid:t==null||(h=t.category)===null||h===void 0?void 0:h.uid})}else w.resetFields()},[z]);var q=function(P){console.log("category selected ".concat(P))},ae=function(P){console.log("type selected ".concat(P))},L=function(){console.log("handleSubmit"),w.validateFields().then(function(P){console.log(P),X(n()(n()(n()({},t),P),{},{orgUid:W==null?void 0:W.uid}))}).catch(function(P){console.log("Form errors:",P),c.yw.error("\u8BF7\u68C0\u67E5\u8868\u5355\u586B\u5199")})};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(pe.Z,{title:v?"\u4FEE\u6539":"\u65B0\u5EFA",onClose:H,open:z,extra:(0,r.jsxs)(ve.Z,{children:[(0,r.jsx)(B.ZP,{onClick:H,children:"\u53D6\u6D88"}),(0,r.jsx)(B.ZP,{onClick:L,type:"primary",children:"\u4FDD\u5B58"})]}),children:(0,r.jsxs)(ue.A,{form:w,initialValues:n()({},t),submitter:{render:function(){return null}},children:[(0,r.jsx)(se.Z,{label:"\u5206\u7C7B",name:"categoryUid",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u5206\u7C7B"}],options:re,fieldProps:{allowClear:!0,placeholder:"\u8BF7\u9009\u62E9\u5206\u7C7B",onChange:q}}),(0,r.jsx)(se.Z,{label:"\u7C7B\u578B",name:"type",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u7C7B\u578B"}],options:[{label:"\u6587\u672C",value:m.PY},{label:"\u56FE\u7247",value:m.Qm},{label:"\u89C6\u9891",value:m.tV},{label:"\u97F3\u9891",value:m.Yu},{label:"\u6587\u4EF6",value:m.Qn}],fieldProps:{allowClear:!0,placeholder:"\u8BF7\u9009\u62E9\u7C7B\u578B",onChange:ae}}),(0,r.jsx)(de.Z,{label:"\u6807\u9898",name:"title",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6807\u9898"}]}),(0,r.jsx)(ie.Z,{label:"\u5185\u5BB9",name:"content"})]})})})},he=me,fe=["current"],ge=[{dataIndex:"index",valueType:"indexBorder",width:48},{title:(0,r.jsx)(o.FormattedMessage,{id:"title",defaultMessage:"Title"}),dataIndex:"title",copyable:!0},{title:(0,r.jsx)(o.FormattedMessage,{id:"content",defaultMessage:"Content"}),dataIndex:"content"},{title:(0,r.jsx)(o.FormattedMessage,{id:"type",defaultMessage:"Type"}),dataIndex:"type",hideInSearch:!0},{title:(0,r.jsx)(o.FormattedMessage,{id:"category",defaultMessage:"Category"}),dataIndex:"category",hideInSearch:!0,render:function(a,v){var t;return(t=v.category)===null||t===void 0?void 0:t.name}},{title:(0,r.jsx)(o.FormattedMessage,{id:"updatedAt",defaultMessage:"updatedAt"}),key:"updatedAt",dataIndex:"updatedAt",sorter:!0,hideInSearch:!0,width:180}],Pe=function(){var a=(0,o.useIntl)(),v=(0,T.useRef)(),t=(0,T.useState)(!0),z=O()(t,2),H=z[0],X=z[1],te=(0,T.useState)(),k=O()(te,2),w=k[0],W=k[1],re=(0,T.useState)(!1),q=O()(re,2),ae=q[0],L=q[1],h=(0,b.u)(function(l){return l.currentOrg}),P=[].concat(ge,[{title:a.formatMessage({id:"actions",defaultMessage:"Actions"}),valueType:"option",key:"option",width:100,render:function(y,f,j,U){return[(0,r.jsx)("a",{onClick:function(){xe(f)},children:a.formatMessage({id:"edit",defaultMessage:"Edit"})},"editable")]}}]),_=(0,le.v)(function(l){return l.currentCategory}),Fe=function(){W(void 0),X(!1),L(!0)},xe=function(y){W(y),X(!0),L(!0)},Oe=function(){var l=C()(s()().mark(function y(f){var j,U;return s()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(console.log("handleSubmitDrawer",f),H?c.yw.loading(a.formatMessage({id:"updating"})):c.yw.loading(a.formatMessage({id:"creating"})),!H){d.next=8;break}return d.next=5,N(f);case 5:d.t0=d.sent,d.next=11;break;case 8:return d.next=10,G(f);case 10:d.t0=d.sent;case 11:j=d.t0,console.log("createHelpdoc response:",f,j),j.code===200?(c.yw.destroy(),c.yw.loading(a.formatMessage({id:"create.success"})),L(!1),(U=v.current)===null||U===void 0||U.reloadAndRest()):(c.yw.destroy(),c.yw.error(j.message));case 14:case"end":return d.stop()}},y)}));return function(f){return l.apply(this,arguments)}}(),Te=function(){L(!1)};(0,T.useEffect)(function(){var l;console.log("currentCategory:",_),(l=v.current)===null||l===void 0||l.reloadAndRest()},[_]);var je=function(){console.log("handleRichEditor"),window.open("/admin/doceditor")};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Y.Z,{columns:P,actionRef:v,cardBordered:!0,request:function(){var l=C()(s()().mark(function y(f,j,U){var ne,d,oe,K;return s()().wrap(function($){for(;;)switch($.prev=$.next){case 0:return console.log("request:",f,j,U),c.yw.loading(a.formatMessage({id:"loading",defaultMessage:"Loading"})),ne=f.current,d=x()(f,fe),oe=n()({pageNumber:f.current-1,orgUid:h.uid,categoryUid:_.uid==="all"?"":_.uid},d),$.next=6,p(oe);case 6:return K=$.sent,console.log("getAllHelpdocs response:",oe,K),c.yw.destroy(),K.code===200||c.yw.error(K.message),$.abrupt("return",{data:K.data.content,success:!0,total:K.data.totalElements});case 11:case"end":return $.stop()}},y)}));return function(y,f,j){return l.apply(this,arguments)}}(),rowKey:"uid",search:{labelWidth:"auto"},pagination:{showQuickJumper:!0,onChange:function(y){console.log("page:",y)}},dateFormatter:"string",headerTitle:"\u5E2E\u52A9\u6587\u6863",toolBarRender:function(){return[(0,r.jsx)(B.ZP,{icon:(0,r.jsx)(Q.Z,{}),type:"primary",onClick:je,children:a.formatMessage({id:"create",defaultMessage:"Create"})},"button")]}}),(0,r.jsx)(he,{isEdit:H,open:ae,helpdoc:w,onClose:Te,onSubmit:Oe})]})},ye=Pe,Ee=e(52670),Ce=g.Z.Sider,Se=g.Z.Content,Me=function(){var a=(0,i.Z)(),v=a.leftSiderStyle,t=a.contentStyle;return(0,r.jsx)("div",{children:(0,r.jsxs)(g.Z,{children:[(0,r.jsx)(Ce,{style:v,children:(0,r.jsx)(Ee.Z,{type:m.yv})}),(0,r.jsx)(g.Z,{children:(0,r.jsx)(Se,{style:t,children:(0,r.jsx)(ye,{})})})]})})},De=Me}}]);
