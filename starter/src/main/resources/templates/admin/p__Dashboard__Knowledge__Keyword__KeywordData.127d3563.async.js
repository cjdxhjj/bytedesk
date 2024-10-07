"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[3340],{30288:function(e,t,n){var r=n(26068),a=n.n(r),o=n(48305),s=n.n(o),l=n(8591),i=n(75271),d=n(41150),u=n(30224),c=n(16483),p=n.n(c),f=n(64453),g=n(37240),y=n(37866),m=n(69483),h=n(49437),v=n(52676),x=u.Z.Dragger;t.Z=function(e){var t=e.type,n=e.acceptType,r=e.isModalOpen,o=e.handleOk,u=e.handleCancel,c=(0,y.j)((function(e){return e.currentKbase})),w=(0,i.useState)((null==c?void 0:c.uid)||""),b=s()(w,2),k=b[0],j=b[1],M=(0,m.v)((function(e){return e.currentCategory})),S=(0,i.useState)("当前支持上传pdf/txt/markdown/docx等"),C=s()(S,2),T=C[0],Z=C[1],_=(0,i.useState)({file:void 0,file_name:"test.pdf",file_type:"application/pdf",is_avatar:"false",kb_type:t,category_uid:"all"===(null==M?void 0:M.uid)?"":(null==M?void 0:M.uid)||"",kb_uid:(null==c?void 0:c.uid)||"",client:f.bVn}),D=s()(_,2),U=D[0],A=D[1],P={name:"file",accept:n,action:(0,h.M$)(),headers:{Authorization:"Bearer "+localStorage.getItem(f.LA8)},data:U,showUploadList:!1,beforeUpload:function(e){console.log("beforeUpload before",e,k,c);var n=p()(new Date).format("YYYYMMDDHHmmss")+"_"+e.name;U.file=e,U.file_name=n,U.file_type=e.type,U.kb_type=t,U.kb_uid=k,console.log("beforeUpload after",U)},onChange:function(e){"uploading"===e.file.status&&g.yw.loading("".concat(e.file.name," 上传中")),"done"===e.file.status?(console.log("response: ",e.file.response),200===e.file.response.code?(g.yw.destroy(),g.yw.success("".concat(e.file.name," 上传成功")),o()):(g.yw.destroy(),g.yw.error("".concat(e.file.name," 上传失败")),u())):"error"===e.file.status&&(g.yw.error("".concat(e.file.name," 上传失败")),u())},onDrop:function(e){console.log("Dropped files",e.dataTransfer.files)}},F=(0,i.useState)(P),E=s()(F,2),Y=E[0],q=E[1];return(0,i.useEffect)((function(){y.j.subscribe((function(e,t){var n,r;console.log("useKbaseStore changed:",null==e||null===(n=e.currentKbase)||void 0===n?void 0:n.uid),j(null==e||null===(r=e.currentKbase)||void 0===r?void 0:r.uid),q(P)}))}),[c]),(0,i.useEffect)((function(){t!=f.QPQ&&(P.accept="application/vnd.ms-excel",q(P),Z("当前支持上传excel文件")),A(a()(a()({},U),{},{kb_type:t,category_uid:"all"===(null==M?void 0:M.uid)?"":null==M?void 0:M.uid})),q(P)}),[t,M]),(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(l.Z,{title:"上传文件",open:r,onOk:o,onCancel:u,children:(0,v.jsxs)(x,a()(a()({},Y),{},{children:[(0,v.jsx)("p",{className:"ant-upload-drag-icon",children:(0,v.jsx)(d.Z,{})}),(0,v.jsx)("p",{className:"ant-upload-text",children:"点击或拖拽文件至此处实现上传"}),(0,v.jsx)("p",{className:"ant-upload-hint",children:T})]}))})})}},10808:function(e,t,n){n.r(t),n.d(t,{default:function(){return de}});var r=n(7571),a=n(16242),o=n(26068),s=n.n(o),l=n(67825),i=n.n(l),d=n(90228),u=n.n(d),c=n(87999),p=n.n(c),f=n(48305),g=n.n(f),y=n(37240),m=n(64453),h=n(45234);function v(e){return x.apply(this,arguments)}function x(){return(x=p()(u()().mark((function e(t){return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,h.request)("/api/v1/keyword/query/org",{method:"GET",params:s()(s()({},t),{},{client:m.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return b.apply(this,arguments)}function b(){return(b=p()(u()().mark((function e(t){return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,h.request)("/api/v1/keyword/create",{method:"POST",data:s()(s()({},t),{},{client:m.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){return j.apply(this,arguments)}function j(){return(j=p()(u()().mark((function e(t){return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,h.request)("/api/v1/keyword/update",{method:"POST",data:s()(s()({},t),{},{client:m.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e){return S.apply(this,arguments)}function S(){return(S=p()(u()().mark((function e(t){return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,h.request)("/api/v1/keyword/delete",{method:"POST",data:s()(s()({},t),{},{client:m.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var C=n(589),T=n(40141),Z=n(33413),_=n(25203),D=n(90632),U=n(15161),A=n(9630),P=n(42502),F=n(75271),E=n(69483),Y=n(37866),q=n(49437),N=n(41150),O=n(43393),I=n(6817),K=n(64826),L=n(65012),R=n(99755),V=n(16993),Q=n(23942),z=n(83828),B=n(16483),H=n.n(B),J=n(52676),W=function(e){var t=e.isEdit,n=e.keyword,r=e.open,a=e.onClose,o=e.onSubmit,l=O.A.useForm(),i=g()(l,1)[0],d=(0,C.u)((function(e){return e.currentOrg})),u=(0,Y.j)((function(e){return e.currentKbase})),c=(0,E.v)((function(e){return e.categorySelectOptions})),p=(0,F.useState)(),f=g()(p,2),h=f[0],v=f[1],x=(0,F.useState)(m.PYi),w=g()(x,2),b=w[0],k=w[1],j=(0,F.useState)(".png,.jpg,.jpeg"),M=g()(j,2),S=M[0],T=M[1],Z=(0,F.useState)({file:void 0,file_name:"test.pdf",file_type:"application/pdf",is_avatar:"false",kb_type:"type",category_uid:"",kb_uid:(null==u?void 0:u.uid)||"",client:m.bVn}),_=g()(Z,2),D=_[0];_[1];(0,F.useEffect)((function(){t?i.setFieldsValue({keyword:null==n?void 0:n.keywordList,reply:null==n?void 0:n.replyList,matchType:null==n?void 0:n.matchType,contentType:null==n?void 0:n.contentType,categoryUid:null==n?void 0:n.categoryUid,kbUid:null==u?void 0:u.uid,enabled:null==n?void 0:n.enabled}):i.resetFields()}),[r]);var U={name:"file",accept:S,action:(0,q.M$)(),headers:{Authorization:"Bearer "+localStorage.getItem(m.LA8)},data:D,showUploadList:!1,beforeUpload:function(e){console.log("beforeUpload",e);var t=H()(new Date).format("YYYYMMDDHHmmss")+"_"+e.name;D.file=e,D.file_name=t,D.file_type=e.type,D.kb_type=m.YjS,D.category_uid=h||"",D.kb_uid=null==u?void 0:u.uid,console.log("beforeUpload",D)},onChange:function(e){if("uploading"===e.file.status&&y.yw.loading("".concat(e.file.name," 上传中")),"done"===e.file.status)if(console.log("response: ",e.file.response),200===e.file.response.code){var t=e.file.response.data;i.setFieldValue("reply",t),y.yw.destroy(),y.yw.success("".concat(e.file.name," 上传成功"))}else y.yw.destroy(),y.yw.error("".concat(e.file.name," 上传失败"));else"error"===e.file.status&&y.yw.error("".concat(e.file.name," 上传失败"))},onDrop:function(e){console.log("Dropped files",e.dataTransfer.files)}};return(0,J.jsx)(J.Fragment,{children:(0,J.jsx)(V.Z,{title:t?"修改":"新建",onClose:a,open:r,extra:(0,J.jsxs)(Q.Z,{children:[(0,J.jsx)(P.ZP,{onClick:a,children:"取消"}),(0,J.jsx)(P.ZP,{onClick:function(){console.log("handleSubmit"),i.validateFields().then((function(e){console.log(e),o(s()(s()(s()({},n),e),{},{keywordList:[e.keyword],replyList:[e.reply],kbUid:null==u?void 0:u.uid,orgUid:null==d?void 0:d.uid}))})).catch((function(e){console.log("Form errors:",e),y.yw.error("请检查表单填写")}))},type:"primary",children:"保存"})]}),children:(0,J.jsxs)(O.A,{form:i,submitter:{render:function(){return null}},children:[(0,J.jsx)(I.Z,{label:"匹配类型",name:"matchType",rules:[{required:!0,message:"请选择匹配类型"}],options:[{label:"模糊匹配",value:m.lEl},{label:"精确匹配",value:m.TAc,disabled:!0},{label:"正则匹配",value:m.c7i,disabled:!0},{label:"向量匹配",value:m.sOn,disabled:!0},{label:"搜索引擎匹配",value:m.NDq,disabled:!0}],fieldProps:{allowClear:!0,placeholder:"请选择匹配类型"}}),(0,J.jsx)(I.Z,{label:"内容分类",name:"categoryUid",rules:[{required:!0,message:"请选择分类"}],options:c,tooltip:"请先：创建分类",fieldProps:{allowClear:!0,placeholder:"请选择分类",onChange:function(e){console.log("category selected ".concat(e)),v(e)}}}),(0,J.jsx)(I.Z,{label:"类型",name:"contentType",rules:[{required:!0,message:"请选择类型"}],options:[{label:"文本",value:m.PYi},{label:"图片",value:m.Qm},{label:"视频",value:m.tVi},{label:"音频",value:m.Yu1},{label:"文件",value:m.Qn}],fieldProps:{allowClear:!0,placeholder:"请选择类型",onChange:function(e){console.log("type selected ".concat(e)),k(e),e===m.Qm?T(".png,.jpg,.jpeg,.gif,.bmp"):e===m.tVi?T(".mp4,.avi,.mov,.wmv"):e===m.Yu1?T(".mp3,.wav,.flac"):e===m.Qn&&T(".doc,.xls,.ppt,.pdf,.docx,.txt,.csv,.xlsx,.rtf,.zip,.7z,.tar,.gz,.rar,.iso")}}}),(0,J.jsx)(K.Z,{label:"关键词",name:"keyword",tooltip:"多个关键词使用 '|' 分割",placeholder:"请输入关键词，多个关键词使用 '|' 分割",rules:[{required:!0,message:"请输入关键词，多个关键词使用 '|' 分割 "}]}),(0,J.jsx)(L.Z,{label:"回复",name:"reply"}),(0,J.jsx)(R.Z,{label:"启用",name:"enabled",fieldProps:{defaultValue:!0}}),b!=m.PYi&&(0,J.jsxs)(z.Z,s()(s()({},U),{},{children:[(0,J.jsx)("p",{className:"ant-upload-drag-icon",children:(0,J.jsx)(N.Z,{})}),(0,J.jsx)("p",{className:"ant-upload-text",children:"点击或拖拽上传文件"})]}))]})})})},$=n(63727),G=n(66148),X=n(93550),ee=n(2475),te=n(94414),ne=function(e){var t=e.type,n=e.open,r=e.onClose,a=(0,te.Z)().isDarkMode,o=(0,X.Z)().translateString,s=(0,F.useRef)(),l=(0,Y.j)((function(e){return e.currentKbase}));(0,F.useEffect)((function(){var e;null===(e=s.current)||void 0===e||e.clearMessage()}),[l]);var i=function(){var e=p()(u()().mark((function e(t){return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("handleChatKeyword");case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=p()(u()().mark((function e(t){var n,r,a,o,s,i;return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("handleChatStream"),n=t[t.length-1],e.next=4,fetch("http://127.0.0.1:1001/visitor/api/v1/ai/ollama/chat/stream",{method:"POST",headers:{"Content-Type":"application/json;charset=UTF-8"},body:JSON.stringify({query:null==n?void 0:n.content,kbUid:null==l?void 0:l.uid,stream:!0})});case 4:if((r=e.sent).ok&&r.body){e.next=7;break}throw new Error("HTTP error! status: ".concat(r.status));case 7:return a=r.body.getReader(),o=new TextDecoder("utf-8"),s=new TextEncoder,i=new ReadableStream({start:function(e){return p()(u()().mark((function t(){var n;return u()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(n=function(){a.read().then((function(t){var r=t.done,a=t.value;if(r)e.close();else{var l=o.decode(a,{stream:!0}).replaceAll("data:","").replaceAll("\n","");e.enqueue(s.encode(l)),n()}})).catch((function(t){console.error("读取流中的数据时发生错误",t),e.error(t)}))})();case 2:case"end":return t.stop()}}),t)})))()}}),e.abrupt("return",new Response(i));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,J.jsx)("div",{children:(0,J.jsx)(V.Z,{title:o(null==l?void 0:l.name),onClose:function(){r&&r()},open:n,styles:{body:{padding:0}},children:(0,J.jsx)(G.f6,{appearance:a?"dark":"light",theme:{algorithm:a?ee.Z.darkAlgorithm:ee.Z.defaultAlgorithm},children:(0,J.jsx)($.j,{chatRef:s,helloMessage:"请输入你想问的问题",request:function(){var e=p()(u()().mark((function e(n){return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("messages:",n),!(n.length>0)){e.next=8;break}if(t!==m.QPQ){e.next=6;break}return e.abrupt("return",d(n));case 6:if(t!==m.jNC){e.next=8;break}return e.abrupt("return",i(n));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()})})})})},re=n(30288),ae=["current"],oe=function(){var e=(0,h.useIntl)(),t=(0,F.useRef)(),n=(0,F.useState)(!0),r=g()(n,2),a=r[0],o=r[1],l=(0,F.useState)(),d=g()(l,2),c=d[0],f=d[1],x=(0,F.useState)(!1),b=g()(x,2),j=b[0],S=b[1],N=(0,C.u)((function(e){return e.currentOrg})),O=(0,Y.j)((function(e){return e.currentKbase})),I=(0,E.v)((function(e){return e.currentCategory})),K=(0,F.useState)(!1),L=g()(K,2),R=L[0],V=L[1],Q=(0,F.useState)(!1),z=g()(Q,2),B=z[0],H=z[1],$=function(){var n=p()(u()().mark((function n(r){var a;return u()().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(r),n.next=3,M(r);case 3:a=n.sent,console.log("delete response:",a),200===a.code?(null==t||t.current.reload(),y.yw.success(e.formatMessage({id:"delete.success",defaultMessage:"Delete Success"}))):y.yw.error(e.formatMessage({id:"delete.error",defaultMessage:"Delete Error"}));case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),G=[{dataIndex:"index",valueType:"indexBorder",width:48},{title:(0,J.jsx)(h.FormattedMessage,{id:"keyword",defaultMessage:"Keyword"}),dataIndex:"keywordList",copyable:!0},{title:(0,J.jsx)(h.FormattedMessage,{id:"reply",defaultMessage:"Reply"}),dataIndex:"replyList",copyable:!0},{title:(0,J.jsx)(h.FormattedMessage,{id:"matchType",defaultMessage:"MatchType"}),dataIndex:"matchType",width:80,render:function(t,n){return e.formatMessage({id:null==n?void 0:n.matchType,defaultMessage:null==n?void 0:n.matchType})}},{title:(0,J.jsx)(h.FormattedMessage,{id:"type",defaultMessage:"Type"}),dataIndex:"contentType",hideInSearch:!0,width:50,render:function(t,n){return(0,J.jsx)(J.Fragment,{children:e.formatMessage({id:null==n?void 0:n.contentType,defaultMessage:null==n?void 0:n.contentType})})}},{title:(0,J.jsx)(h.FormattedMessage,{id:"enabled",defaultMessage:"Enabled"}),dataIndex:"enabled",width:80,render:function(t,n){return(0,J.jsx)(J.Fragment,{children:null!=n&&n.enabled?e.formatMessage({id:"yes",defaultMessage:"Yes"}):e.formatMessage({id:"no",defaultMessage:"No"})})}},{title:(0,J.jsx)(h.FormattedMessage,{id:"updatedAt",defaultMessage:"updatedAt"}),key:"updatedAt",dataIndex:"updatedAt",sorter:!0,hideInSearch:!0,width:180},{title:e.formatMessage({id:"actions",defaultMessage:"Actions"}),valueType:"option",key:"option",width:100,render:function(t,n,r,a){return[(0,J.jsx)("a",{onClick:function(){ee(n)},children:e.formatMessage({id:"edit",defaultMessage:"Edit"})},"editable"),(0,J.jsx)(A.Z,{title:e.formatMessage({id:"deleteTip",defaultMessage:"Delete Tip"}),description:"".concat(e.formatMessage({id:"deleteAfirm",defaultMessage:"Delete"}),"【").concat(null==n?void 0:n.keywordList,"】？"),onConfirm:function(){return $(n)},okText:e.formatMessage({id:"ok"}),cancelText:e.formatMessage({id:"cancel"}),children:(0,J.jsx)(P.ZP,{size:"small",type:"link",danger:!0,children:e.formatMessage({id:"delete",defaultMessage:"Delete"})})},"delete")]}}],X=function(){f(void 0),o(!1),S(!0)},ee=function(e){f(e),o(!0),S(!0)},te=function(){var n=p()(u()().mark((function n(r){var o,s;return u()().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(console.log("handleSubmitDrawer",r),a?y.yw.loading(e.formatMessage({id:"updating"})):y.yw.loading(e.formatMessage({id:"creating"})),!a){n.next=8;break}return n.next=5,k(r);case 5:n.t0=n.sent,n.next=11;break;case 8:return n.next=10,w(r);case 10:n.t0=n.sent;case 11:o=n.t0,console.log("createKeyword response:",r,o),200===o.code?(y.yw.destroy(),y.yw.success(e.formatMessage({id:"create.success",defaultMessage:"create success"})),S(!1),null===(s=t.current)||void 0===s||s.reloadAndRest()):(y.yw.destroy(),y.yw.error(o.message));case 14:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),oe=function(){var e=p()(u()().mark((function e(){return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:H(!0);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),se=function(){var e=p()(u()().mark((function e(){var t;return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=localStorage.getItem(m.LA8),window.open((0,q.SV)()+"/api/v1/keyword/export?categoryUid="+(null==I?void 0:I.uid)+"&kbUid="+(null==O?void 0:O.uid)+"&orgUid="+(null==N?void 0:N.uid)+"&pageNumber=0&pageSize=20&accessToken="+t);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,F.useEffect)((function(){var e;null===(e=t.current)||void 0===e||e.reloadAndRest()}),[O,I]);var le=(0,F.useMemo)((function(){return(null==O?void 0:O.type)!==m.jNC||""===(null==O?void 0:O.uid)}),[O]);return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(U.Z,{columns:G,actionRef:t,cardBordered:!0,request:function(){var t=p()(u()().mark((function t(n,r,a){var o,l,d;return u()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("request:",n,r,a),y.yw.loading(e.formatMessage({id:"loading",defaultMessage:"Loading"})),n.current,o=i()(n,ae),l=s()({pageNumber:n.current-1,categoryUid:"all"===I.uid?"":I.uid,kbUid:null==O?void 0:O.uid,orgUid:null==N?void 0:N.uid},o),t.next=6,v(l);case 6:return d=t.sent,console.log("getAllKeywords response:",l,d),y.yw.destroy(),200===d.code||y.yw.error(d.message),t.abrupt("return",{data:d.data.content,success:!0,total:d.data.totalElements});case 11:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),rowKey:"uid",search:{labelWidth:"auto"},pagination:{showQuickJumper:!0,onChange:function(e){console.log("page:",e)}},dateFormatter:"string",headerTitle:e.formatMessage({id:"menu.knowledge.keyword",defaultMessage:"KEYWORD"}),toolBarRender:function(){return[(0,J.jsx)(P.ZP,{icon:(0,J.jsx)(T.Z,{}),type:"primary",onClick:X,disabled:le,children:e.formatMessage({id:"create",defaultMessage:"Create"})},"create"),(0,J.jsx)(P.ZP,{icon:(0,J.jsx)(Z.Z,{}),type:"primary",onClick:oe,disabled:le,children:e.formatMessage({id:"import",defaultMessage:"Import"})},"import"),(0,J.jsx)(P.ZP,{icon:(0,J.jsx)(_.Z,{}),type:"primary",onClick:se,disabled:le,children:e.formatMessage({id:"export",defaultMessage:"Export"})},"export"),(0,J.jsx)(P.ZP,{icon:(0,J.jsx)(D.Z,{}),type:"link",onClick:function(){window.open("https://www.weiyuai.cn/download/excel/keyword.xlsx")},children:e.formatMessage({id:"download.template",defaultMessage:"Download Template"})},"download")]}}),(0,J.jsx)(W,{isEdit:a,open:j,keyword:c,onClose:function(){return S(!1)},onSubmit:te}),(0,J.jsx)(re.Z,{type:m.jNC,acceptType:".xls,.xlsx,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",isModalOpen:B,handleOk:function(){console.log("handleUploadDragSubmit"),H(!1),null==t||t.current.reload()},handleCancel:function(){console.log("handleUploadDragCancel"),H(!1),null==t||t.current.reload()}}),(0,J.jsx)(ne,{type:m.jNC,open:R,onClose:function(){return V(!1)}})]})},se=n(35411),le=a.Z.Sider,ie=a.Z.Content,de=function(){var e=(0,r.Z)(),t=e.leftSiderStyle,n=e.contentStyle;return(0,J.jsx)("div",{children:(0,J.jsxs)(a.Z,{children:[(0,J.jsx)(le,{style:t,children:(0,J.jsx)(se.Z,{type:m.jNC})}),(0,J.jsx)(a.Z,{children:(0,J.jsx)(ie,{style:n,children:(0,J.jsx)(oe,{})})})]})})}}}]);