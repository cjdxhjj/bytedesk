"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[3444],{11475:function(N,x,e){e.d(x,{Z:function(){return O}});var c=e(1413),t=e(67294),C={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"}}]},name:"exclamation-circle",theme:"outlined"},a=C,D=e(89099),h=function(o,S){return t.createElement(D.Z,(0,c.Z)((0,c.Z)({},o),{},{ref:S,icon:a}))},E=t.forwardRef(h),O=E},64317:function(N,x,e){var c=e(1413),t=e(91),C=e(22270),a=e(67294),D=e(66758),h=e(24809),E=e(85893),O=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],i=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],o=function(g,s){var R=g.fieldProps,f=g.children,n=g.params,B=g.proFieldProps,L=g.mode,w=g.valueEnum,V=g.request,k=g.showSearch,F=g.options,r=(0,t.Z)(g,O),u=(0,a.useContext)(D.Z);return(0,E.jsx)(h.Z,(0,c.Z)((0,c.Z)({valueEnum:(0,C.h)(w),request:V,params:n,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,c.Z)({options:F,mode:L,showSearch:k,getPopupContainer:u.getPopupContainer},R),ref:s,proFieldProps:B},r),{},{children:f}))},S=a.forwardRef(function(m,g){var s=m.fieldProps,R=m.children,f=m.params,n=m.proFieldProps,B=m.mode,L=m.valueEnum,w=m.request,V=m.options,k=(0,t.Z)(m,i),F=(0,c.Z)({options:V,mode:B||"multiple",labelInValue:!0,showSearch:!0,suffixIcon:null,autoClearSearchValue:!0,optionLabelProp:"label"},s),r=(0,a.useContext)(D.Z);return(0,E.jsx)(h.Z,(0,c.Z)((0,c.Z)({valueEnum:(0,C.h)(L),request:w,params:f,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,c.Z)({getPopupContainer:r.getPopupContainer},F),ref:g,proFieldProps:n},k),{},{children:R}))}),j=a.forwardRef(o),d=S,p=j;p.SearchSelect=d,p.displayName="ProFormComponent",x.Z=p},5966:function(N,x,e){var c=e(97685),t=e(1413),C=e(91),a=e(21770),D=e(8232),h=e(55241),E=e(97435),O=e(67294),i=e(24809),o=e(85893),S=["fieldProps","proFieldProps"],j=["fieldProps","proFieldProps"],d="text",p=function(f){var n=f.fieldProps,B=f.proFieldProps,L=(0,C.Z)(f,S);return(0,o.jsx)(i.Z,(0,t.Z)({valueType:d,fieldProps:n,filedConfig:{valueType:d},proFieldProps:B},L))},m=function(f){var n=(0,a.Z)(f.open||!1,{value:f.open,onChange:f.onOpenChange}),B=(0,c.Z)(n,2),L=B[0],w=B[1];return(0,o.jsx)(D.Z.Item,{shouldUpdate:!0,noStyle:!0,children:function(k){var F,r=k.getFieldValue(f.name||[]);return(0,o.jsx)(h.Z,(0,t.Z)((0,t.Z)({getPopupContainer:function(l){return l&&l.parentNode?l.parentNode:l},onOpenChange:function(l){return w(l)},content:(0,o.jsxs)("div",{style:{padding:"4px 0"},children:[(F=f.statusRender)===null||F===void 0?void 0:F.call(f,r),f.strengthText?(0,o.jsx)("div",{style:{marginTop:10},children:(0,o.jsx)("span",{children:f.strengthText})}):null]}),overlayStyle:{width:240},placement:"rightTop"},f.popoverProps),{},{open:L,children:f.children}))}})},g=function(f){var n=f.fieldProps,B=f.proFieldProps,L=(0,C.Z)(f,j),w=(0,O.useState)(!1),V=(0,c.Z)(w,2),k=V[0],F=V[1];return n!=null&&n.statusRender&&L.name?(0,o.jsx)(m,{name:L.name,statusRender:n==null?void 0:n.statusRender,popoverProps:n==null?void 0:n.popoverProps,strengthText:n==null?void 0:n.strengthText,open:k,onOpenChange:F,children:(0,o.jsx)("div",{children:(0,o.jsx)(i.Z,(0,t.Z)({valueType:"password",fieldProps:(0,t.Z)((0,t.Z)({},(0,E.Z)(n,["statusRender","popoverProps","strengthText"])),{},{onBlur:function(u){var l;n==null||(l=n.onBlur)===null||l===void 0||l.call(n,u),F(!1)},onClick:function(u){var l;n==null||(l=n.onClick)===null||l===void 0||l.call(n,u),F(!0)}}),proFieldProps:B,filedConfig:{valueType:d}},L))})}):(0,o.jsx)(i.Z,(0,t.Z)({valueType:"password",fieldProps:n,proFieldProps:B,filedConfig:{valueType:d}},L))},s=p;s.Password=g,s.displayName="ProFormComponent",x.Z=s},90672:function(N,x,e){var c=e(1413),t=e(91),C=e(67294),a=e(24809),D=e(85893),h=["fieldProps","proFieldProps"],E=function(i,o){var S=i.fieldProps,j=i.proFieldProps,d=(0,t.Z)(i,h);return(0,D.jsx)(a.Z,(0,c.Z)({ref:o,valueType:"textarea",fieldProps:S,proFieldProps:j},d))};x.Z=C.forwardRef(E)},10411:function(N,x,e){e.d(x,{AP:function(){return i},_J:function(){return m},t5:function(){return d},v_:function(){return S}});var c=e(15009),t=e.n(c),C=e(97857),a=e.n(C),D=e(99289),h=e.n(D),E=e(85615),O=e(86745);function i(s){return o.apply(this,arguments)}function o(){return o=h()(t()().mark(function s(R){return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,O.request)("/api/v1/kbase/query/org",{method:"GET",params:a()(a()({},R),{},{client:E.bV})}));case 1:case"end":return n.stop()}},s)})),o.apply(this,arguments)}function S(s){return j.apply(this,arguments)}function j(){return j=h()(t()().mark(function s(R){return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,O.request)("/api/v1/kbase/create",{method:"POST",data:a()(a()({},R),{},{client:E.bV})}));case 1:case"end":return n.stop()}},s)})),j.apply(this,arguments)}function d(s){return p.apply(this,arguments)}function p(){return p=h()(t()().mark(function s(R){return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,O.request)("/api/v1/kbase/update",{method:"POST",data:a()(a()({},R),{},{client:E.bV})}));case 1:case"end":return n.stop()}},s)})),p.apply(this,arguments)}function m(s){return g.apply(this,arguments)}function g(){return g=h()(t()().mark(function s(R){return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,O.request)("/api/v1/kbase/delete",{method:"POST",data:a()(a()({},R),{},{client:E.bV})}));case 1:case"end":return n.stop()}},s)})),g.apply(this,arguments)}},77154:function(N,x,e){var c=e(39825);function t(){var C=(0,c.Z)(),a=C.isDarkMode,D=250,h={borderRight:a?"1px solid #333":"1px solid #ccc",background:a?"#141414":"#f5f5f5"},E={background:a?"#141414":"#fff"},O={borderLeft:a?"1px solid #333":"1px solid #ccc",background:a?"#141414":"#f5f5f5"},i={minHeight:120,background:a?"#141414":"#f5f5f5",height:"100vh"};return{leftSiderStyle:h,leftSiderWidth:D,headerStyle:E,rightSiderStyle:O,contentStyle:i}}x.Z=t},73803:function(N,x,e){var c=e(85615),t=e(66419),C=e(86745);function a(){var D=(0,C.useIntl)(),h=function(i){return i&&i.startsWith(c.Vo)?D.formatMessage({id:i,defaultMessage:i}):i},E=function(i){return i!=null&&i.startsWith(c.Vo)?(0,t.aS)(D.formatMessage({id:i}),10):(0,t.aS)(i,10)};return{translateString:h,translateStringTranct:E}}x.Z=a},65383:function(N,x,e){e.d(x,{Z:function(){return I}});var c=e(15009),t=e.n(c),C=e(99289),a=e.n(C),D=e(5574),h=e.n(D),E=e(85576),O=e(2487),i=e(67294),o=e(80049),S=e(73803),j=e(87676),d=e(34994),p=e(64317),m=e(5966),g=e(90672),s=e(85893),R=function(A){var K=A.open,z=A.isEdit,$=A.type,T=A.kbase,G=A.onCancel,W=A.onSubmit,J=d.A.useForm(),re=h()(J,1),Z=re[0],ae=(0,S.Z)(),X=ae.translateString,Y=(0,j.u)(function(q){return q.currentOrg});(0,i.useEffect)(function(){z?(Z.setFieldsValue({name:X(T==null?void 0:T.name)}),Z.setFieldsValue({descriptionHtml:X(T==null?void 0:T.descriptionHtml)}),Z.setFieldsValue({language:T==null?void 0:T.language}),Z.setFieldsValue({embedding:T==null?void 0:T.embedding})):Z.resetFields()},[K]);var ne=function(){Z.validateFields().then(function(){var U=a()(t()().mark(function oe(H){var ie;return t()().wrap(function(se){for(;;)switch(se.prev=se.next){case 0:console.log("handleSaveDep:",H),ie={uid:T==null?void 0:T.uid,name:H.name,descriptionHtml:H.descriptionHtml,type:$,embedding:H.embedding,language:H.language,orgUid:Y==null?void 0:Y.uid},W(ie);case 3:case"end":return se.stop()}},oe)}));return function(oe){return U.apply(this,arguments)}}()).catch(function(U){console.log("Failed:",U),o.yw.error("\u521B\u5EFA\u77E5\u8BC6\u5E93\u5931\u8D25")})},te=function(U){console.log("handleLanguageSelect:",U)},Q=function(U){U.key==="Enter"&&ne()};return(0,s.jsx)("div",{children:(0,s.jsx)(E.Z,{title:"\u65B0\u5EFA\u77E5\u8BC6\u5E93",open:K,onOk:ne,onCancel:G,children:(0,s.jsxs)(d.A,{form:Z,initialValues:{name:"",descriptionHtml:"",language:"ZH_CN",embedding:"M3E_BASE"},submitter:!1,children:[(0,s.jsx)(p.Z,{label:"\u77E5\u8BC6\u5E93\u8BED\u8A00",name:"language",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u77E5\u8BC6\u5E93\u8BED\u8A00!"}],options:[{label:"\u7B80\u4F53\u4E2D\u6587",value:"ZH_CN"},{label:"English",value:"EN"},{label:"\u7E41\u4F53\u4E2D\u6587",value:"ZH_TW"}],fieldProps:{onChange:te,placeholder:"\u8BF7\u9009\u62E9\u77E5\u8BC6\u5E93\u8BED\u8A00",allowClear:!0}}),(0,s.jsx)(m.Z,{label:"\u77E5\u8BC6\u5E93\u540D\u79F0",name:"name",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0!"}],fieldProps:{onPressEnter:Q,placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"}}),(0,s.jsx)(g.Z,{label:"\u63CF\u8FF0",name:"descriptionHtml",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u63CF\u8FF0!"}]})]})})})},f=R,n=e(10411),B=e(38302),L=e(39825),w=e(86745),V=e(11475),k=e(86250),F=e(14726),r=function(A){var K=A.currentKbase,z=A.handleNewKbase,$=A.handleEditKbase,T=A.showDeleteConfirmModel,G=(0,w.useIntl)();return(0,s.jsx)("div",{children:(0,s.jsxs)(k.Z,{gap:"small",wrap:"wrap",style:{marginBottom:5},children:[(0,s.jsx)(F.ZP,{size:"small",type:"primary",onClick:z,children:G.formatMessage({id:"createKb",defaultMessage:"Create Knowledge Base"})}),(K==null?void 0:K.uid)!==""&&(K==null?void 0:K.uid)!=="all"&&(0,s.jsx)(F.ZP,{size:"small",onClick:$,children:G.formatMessage({id:"edit",defaultMessage:"Edit"})}),(K==null?void 0:K.uid)!==""&&(K==null?void 0:K.uid)!=="all"&&(0,s.jsx)(F.ZP,{onClick:function(){return T(K)},size:"small",style:{float:"right"},danger:!0,children:G.formatMessage({id:"pages.robot.delete",defaultMessage:"Delete"})})]})})},u=r,l=E.Z.confirm,_=function(A){var K=A.type,z=(0,w.useIntl)(),$=(0,i.useRef)(!1),T=(0,i.useState)(!1),G=h()(T,2),W=G[0],J=G[1],re=(0,L.Z)(),Z=re.isDarkMode,ae=(0,S.Z)(),X=ae.translateString,Y=(0,j.u)(function(P){return P.currentOrg}),ne=(0,i.useState)(!0),te=h()(ne,2),Q=te[0],q=te[1],U=(0,B.j)(function(P){return{kbaseResult:P.kbaseResult,currentKbase:P.currentKbase,insertKbase:P.insertKbase,updateLocalKbase:P.updateKbase,setKbaseResult:P.setKbaseResult,setCurrentKbase:P.setCurrentKbase,removeKbase:P.removeKbase}}),oe=U.kbaseResult,H=U.currentKbase,ie=U.insertKbase,ue=U.updateLocalKbase,se=U.setKbaseResult,de=U.setCurrentKbase,ce=U.removeKbase,pe=function(){var P=a()(t()().mark(function b(){var y,v;return t()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:if(!$.current){M.next=3;break}return console.log("isLoading: 1",$.current),M.abrupt("return");case 3:return $.current=!0,o.yw.loading("loading"),y={pageNumber:0,pageSize:50,type:K,orgUid:Y.uid},M.next=8,(0,n.AP)(y);case 8:v=M.sent,console.log("queryKbasesByOrg: ",v),v.code===200?(o.yw.destroy(),se(v)):(o.yw.destroy(),o.yw.error(v.message)),$.current=!1;case 12:case"end":return M.stop()}},b)}));return function(){return P.apply(this,arguments)}}();(0,i.useEffect)(function(){console.log("useEffect"),pe()},[]);var me=function(){console.log("new kb"),q(!1),J(!0)},_e=function(b,y){de(b)},ve=function(){var P=a()(t()().mark(function b(y){return t()().wrap(function(ee){for(;;)switch(ee.prev=ee.next){case 0:Q?ge(y):fe(y);case 1:case"end":return ee.stop()}},b)}));return function(y){return P.apply(this,arguments)}}(),fe=function(){var P=a()(t()().mark(function b(y){var v;return t()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return console.log("create kb",y),M.next=3,(0,n.v_)(y);case 3:v=M.sent,console.log("create kb response",v),v.code===200?(ie(v.data),J(!1)):(console.log("create kb failed",v),o.yw.error(v.message));case 6:case"end":return M.stop()}},b)}));return function(y){return P.apply(this,arguments)}}(),ge=function(){var P=a()(t()().mark(function b(y){var v;return t()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return console.log("update kb",y),M.next=3,(0,n.t5)(y);case 3:v=M.sent,console.log("update kb response",v),v.code===200?(ue(v.data),J(!1)):(console.log("update kb failed",v),o.yw.error(v.message));case 6:case"end":return M.stop()}},b)}));return function(y){return P.apply(this,arguments)}}(),he=function(){var P=a()(t()().mark(function b(){return t()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:console.log("handleEditKbase: ",H),q(!0),J(!0);case 3:case"end":return v.stop()}},b)}));return function(){return P.apply(this,arguments)}}(),be=function(b){l({title:z.formatMessage({id:"deleteTip"}),icon:(0,s.jsx)(V.Z,{}),content:"".concat(z.formatMessage({id:"deleteAfirm",defaultMessage:"Delete"}),"\u3010").concat(X(b.name),"\u3011\uFF1F"),onOk:function(){Ee(b)},onCancel:function(){},okText:z.formatMessage({id:"ok"}),cancelText:z.formatMessage({id:"cancel"})})},Ee=function(){var P=a()(t()().mark(function b(y){var v;return t()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return console.log("handleDeleteKbase: ",y),M.next=3,(0,n._J)(y);case 3:v=M.sent,console.log("handleDeleteKbase: ",v),v.code==200?ce(y.uid):(console.log("handleDeleteKbase: ",v),o.yw.error(v.message));case 6:case"end":return M.stop()}},b)}));return function(y){return P.apply(this,arguments)}}(),Pe=function(){J(!1)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u,{currentKbase:H,handleNewKbase:me,handleEditKbase:he,showDeleteConfirmModel:be}),(0,s.jsx)(O.Z,{itemLayout:"horizontal",dataSource:oe.data.content,renderItem:function(b,y){return(0,s.jsx)(O.Z.Item,{style:H.uid===b.uid?{backgroundColor:Z?"#333333":"#dddddd",cursor:"pointer"}:{cursor:"pointer"},onClick:function(){return _e(b,y)},children:(0,s.jsx)(O.Z.Item.Meta,{style:{marginLeft:"10px"},title:X(b.name),description:X(b.descriptionHtml)})})}}),(0,s.jsx)(f,{open:W,isEdit:Q,type:K,kbase:H,onSubmit:ve,onCancel:Pe})]})},I=_},38302:function(N,x,e){e.d(x,{j:function(){return i}});var c=e(97857),t=e.n(c),C=e(19632),a=e.n(C),D=e(85615),h=e(73445),E=e(782),O=e(18753),i=(0,h.Ue)()((0,E.mW)((0,E.tJ)((0,O.n)(function(o,S){return{currentKbase:{uid:"",orgUid:""},kbaseResult:{data:{content:[]}},insertKbase:function(d){o(function(p){var m=p.kbaseResult.data.content;m.unshift(d)})},updateKbase:function(d){o(function(p){var m=p.kbaseResult.data.content,g=m.findIndex(function(s){return s.uid===d.uid});g!==-1?m[g]=d:console.warn("Kbase with uid ".concat(d.uid," not found."))})},setKbaseResult:function(d){var p;o({kbaseResult:d}),((p=d.data)===null||p===void 0||(p=p.content)===null||p===void 0?void 0:p.length)>0&&o({currentKbase:d.data.content[0]})},setCurrentKbase:function(d){var p=S().kbaseResult.data.content,m=p.findIndex(function(R){return R.uid===d.uid});if(m!==-1){var g=[].concat(a()(p.slice(0,m)),[d],a()(p.slice(m+1))),s=t()(t()({},S().kbaseResult),{},{data:{content:g}});o({kbaseResult:s,currentKbase:d})}else console.warn("Kbase with the specified uid not found."),o({currentKbase:d})},removeKbase:function(d){var p=S().kbaseResult.data.content,m=p.findIndex(function(g){return g.uid===d});m!==-1?o({kbaseResult:t()(t()({},S().kbaseResult),{},{data:{content:[].concat(a()(p.slice(0,m)),a()(p.slice(m+1)))}})}):console.warn("Kbase not found in cache:",d),S().currentKbase.uid===d&&o({currentKbase:{uid:"",orgUid:""}})},deleteKbaseCache:function(){return o({},!0)}}}),{name:D.wK})))},87676:function(N,x,e){e.d(x,{u:function(){return D}});var c=e(85615),t=e(73445),C=e(782),a=e(18753),D=(0,t.Ue)()((0,C.mW)((0,C.tJ)((0,a.n)(function(h,E){return{currentOrg:{uid:"",name:"",description:""},setCurrentOrg:function(i){h({currentOrg:i})},deleteOrg:function(){return h({},!0)}}}),{name:c.eR})))},86250:function(N,x,e){e.d(x,{Z:function(){return F}});var c=e(67294),t=e(93967),C=e.n(t),a=e(98423),D=e(98065),h=e(53124),E=e(27036),O=e(45503);const i=["wrap","nowrap","wrap-reverse"],o=["flex-start","flex-end","start","end","center","space-between","space-around","space-evenly","stretch","normal","left","right"],S=["center","start","end","flex-start","flex-end","self-start","self-end","baseline","normal","stretch"],j=(r,u)=>{const l=u.wrap===!0?"wrap":u.wrap;return{[`${r}-wrap-${l}`]:l&&i.includes(l)}},d=(r,u)=>{const l={};return S.forEach(_=>{l[`${r}-align-${_}`]=u.align===_}),l[`${r}-align-stretch`]=!u.align&&!!u.vertical,l},p=(r,u)=>{const l={};return o.forEach(_=>{l[`${r}-justify-${_}`]=u.justify===_}),l};function m(r,u){return C()(Object.assign(Object.assign(Object.assign({},j(r,u)),d(r,u)),p(r,u)))}var g=m;const s=r=>{const{componentCls:u}=r;return{[u]:{display:"flex","&-vertical":{flexDirection:"column"},"&-rtl":{direction:"rtl"},"&:empty":{display:"none"}}}},R=r=>{const{componentCls:u}=r;return{[u]:{"&-gap-small":{gap:r.flexGapSM},"&-gap-middle":{gap:r.flexGap},"&-gap-large":{gap:r.flexGapLG}}}},f=r=>{const{componentCls:u}=r,l={};return i.forEach(_=>{l[`${u}-wrap-${_}`]={flexWrap:_}}),l},n=r=>{const{componentCls:u}=r,l={};return S.forEach(_=>{l[`${u}-align-${_}`]={alignItems:_}}),l},B=r=>{const{componentCls:u}=r,l={};return o.forEach(_=>{l[`${u}-justify-${_}`]={justifyContent:_}}),l},L=()=>({});var w=(0,E.I$)("Flex",r=>{const{paddingXS:u,padding:l,paddingLG:_}=r,I=(0,O.TS)(r,{flexGapSM:u,flexGap:l,flexGapLG:_});return[s(I),R(I),f(I),n(I),B(I)]},L,{resetStyle:!1}),V=function(r,u){var l={};for(var _ in r)Object.prototype.hasOwnProperty.call(r,_)&&u.indexOf(_)<0&&(l[_]=r[_]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var I=0,_=Object.getOwnPropertySymbols(r);I<_.length;I++)u.indexOf(_[I])<0&&Object.prototype.propertyIsEnumerable.call(r,_[I])&&(l[_[I]]=r[_[I]]);return l},F=c.forwardRef((r,u)=>{const{prefixCls:l,rootClassName:_,className:I,style:le,flex:A,gap:K,children:z,vertical:$=!1,component:T="div"}=r,G=V(r,["prefixCls","rootClassName","className","style","flex","gap","children","vertical","component"]),{flex:W,direction:J,getPrefixCls:re}=c.useContext(h.E_),Z=re("flex",l),[ae,X,Y]=w(Z),ne=$!=null?$:W==null?void 0:W.vertical,te=C()(I,_,W==null?void 0:W.className,Z,X,Y,g(Z,r),{[`${Z}-rtl`]:J==="rtl",[`${Z}-gap-${K}`]:(0,D.n)(K),[`${Z}-vertical`]:ne}),Q=Object.assign(Object.assign({},W==null?void 0:W.style),le);return A&&(Q.flex=A),K&&!(0,D.n)(K)&&(Q.gap=K),ae(c.createElement(T,Object.assign({ref:u,className:te,style:Q},(0,a.Z)(G,["justify","wrap","align"])),z))})}}]);