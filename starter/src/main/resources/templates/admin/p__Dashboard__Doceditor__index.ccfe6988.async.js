"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[5488],{85022:function(ve,$,e){e.d($,{Az:function(){return q},Xc:function(){return G},jX:function(){return ee},tu:function(){return _}});var Q=e(15009),U=e.n(Q),H=e(97857),l=e.n(H),Y=e(99289),x=e.n(Y),F=e(85615),T=e(86745);function q(c){return Z.apply(this,arguments)}function Z(){return Z=x()(U()().mark(function c(L){return U()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,T.request)("/api/v1/article/query/org",{method:"GET",params:l()(l()({},L),{},{client:F.bV})}));case 1:case"end":return o.stop()}},c)})),Z.apply(this,arguments)}function _(c){return K.apply(this,arguments)}function K(){return K=x()(U()().mark(function c(L){return U()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,T.request)("/api/v1/article/create",{method:"POST",data:l()(l()({},L),{},{client:F.bV})}));case 1:case"end":return o.stop()}},c)})),K.apply(this,arguments)}function G(c){return V.apply(this,arguments)}function V(){return V=x()(U()().mark(function c(L){return U()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,T.request)("/api/v1/article/update",{method:"POST",data:l()(l()({},L),{},{client:F.bV})}));case 1:case"end":return o.stop()}},c)})),V.apply(this,arguments)}function ee(c){return X.apply(this,arguments)}function X(){return X=x()(U()().mark(function c(L){return U()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,T.request)("/api/v1/article/delete",{method:"POST",data:l()(l()({},L),{},{client:F.bV})}));case 1:case"end":return o.stop()}},c)})),X.apply(this,arguments)}},3059:function(ve,$,e){e.r($),e.d($,{default:function(){return Le}});var Q=e(31418),U=e(77154),H=e(21612),l=e(67294),Y=e(52670),x=e(85615),F=e(69554),T=e(80049),q=e(15009),Z=e.n(q),_=e(99289),K=e.n(_),G=e(85022),V=e(39825),ee=e(73803),X=e(97857),c=e.n(X),L=e(19632),w=e.n(L),o=e(73445),ie=e(782),fe=e(18753),ae=(0,o.Ue)()((0,ie.mW)((0,ie.tJ)((0,fe.n)(function(A,a){return{currentArticle:{uid:"",orgUid:""},articleResult:{data:{content:[]}},insertArticle:function(r){A(function(u){var i=u.articleResult.data.content;i.unshift(r)})},updateArticle:function(r){A(function(u){var i=u.articleResult.data.content,g=i.findIndex(function(y){return y.uid===r.uid});g!==-1?i[g]=r:console.warn("Article with uid ".concat(r.uid," not found."))})},setArticleResult:function(r){A({articleResult:r});var u=a().currentArticle;if(u.uid===""){var i;((i=r.data)===null||i===void 0||(i=i.content)===null||i===void 0?void 0:i.length)>0&&A({currentArticle:r.data.content[0]})}},setCurrentArticle:function(r){var u=a().articleResult.data.content,i=u.findIndex(function(C){return C.uid===r.uid});if(i!==-1){var g=[].concat(w()(u.slice(0,i)),[r],w()(u.slice(i+1))),y=c()(c()({},a().articleResult),{},{data:{content:g}});A({articleResult:y,currentArticle:r})}else console.warn("Article with the specified uid not found."),A({currentArticle:r})},removeArticle:function(r){var u=a().articleResult.data.content,i=u.findIndex(function(g){return g.uid===r});i!==-1?A({articleResult:c()(c()({},a().articleResult),{},{data:{content:[].concat(w()(u.slice(0,i)),w()(u.slice(i+1)))}})}):console.warn("Article not found in cache:",r),a().currentArticle.uid===r&&A({currentArticle:{uid:"",orgUid:""}})},deleteArticleCache:function(){return A({},!0)}}}),{name:x.Ss}))),le=e(89102),oe=e(38302),ue=e(87676),h=e(45360),te=e(2487),n=e(85893),ge=function(){var a=(0,V.Z)(),p=a.isDarkMode,r=(0,l.useRef)(!1),u=(0,ee.Z)(),i=u.translateString,g=(0,ue.u)(function(m){return m.currentOrg}),y=(0,oe.j)(function(m){return m.currentKbase}),C=(0,le.v)(function(m){return m.currentCategory}),S=ae(function(m){return{currentArticle:m.currentArticle,articleResult:m.articleResult,setCurrentArticle:m.setCurrentArticle,setArticleResult:m.setArticleResult}}),v=S.currentArticle,z=S.articleResult,W=S.setCurrentArticle,b=S.setArticleResult,E=function(){var m=K()(Z()().mark(function R(){var D,O;return Z()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:if(!r.current){M.next=3;break}return console.log("isLoading: 1",r.current),M.abrupt("return");case 3:return r.current=!0,h.ZP.loading("loading"),D={pageNumber:0,pageSize:50,type:x.bj,categoryUid:C==null?void 0:C.uid,kbUid:y==null?void 0:y.uid,orgUid:g==null?void 0:g.uid},M.next=8,(0,G.Az)(D);case 8:O=M.sent,console.log("queryArticlesByOrg: ",O),O.code===200?(h.ZP.destroy(),b(O)):(h.ZP.destroy(),h.ZP.error(O.message)),r.current=!1;case 12:case"end":return M.stop()}},R)}));return function(){return m.apply(this,arguments)}}();(0,l.useEffect)(function(){console.log("useEffect"),E()},[y,C]);var k=function(R,D){W(R)};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(te.Z,{itemLayout:"horizontal",dataSource:z.data.content,renderItem:function(R,D){return(0,n.jsx)(te.Z.Item,{style:v.uid===R.uid?{backgroundColor:p?"#333333":"#dddddd",cursor:"pointer"}:{cursor:"pointer"},onClick:function(){return k(R,D)},children:(0,n.jsx)(te.Z.Item.Meta,{style:{marginLeft:"10px",color:p?"#ffffff":"#000000"},title:i(R.title)})})}})})},me=ge,he=e(5574),J=e.n(he),pe=e(86250),Ae=e(55102),ye=e(72269),ne=e(14726),Ce=e(7011),je=e(13769),Pe=e.n(je),se=e(86745),Se=e(60520),Fe=e(74864),Ee=["placeholder","defaultValue","value","onChange","options"],Re=function(a){var p=a.placeholder,r=a.defaultValue,u=a.value,i=a.onChange,g=a.options,y=Pe()(a,Ee),C=(0,se.useIntl)(),S=(0,l.useRef)(null),v=(0,l.useRef)(null);return(0,l.useEffect)(function(){if(S.current){if(!v.current){var z=new Se.cW({element:S.current,placeholder:p,content:r,image:{uploaderEvent:{onUploadBefore:function(b,E,k){T.yw.warning(C.formatMessage({id:"i18n.under.development",defaultMessage:"Coming Soon"}))}}},video:{uploaderEvent:{onUploadBefore:function(b,E,k){T.yw.warning(C.formatMessage({id:"i18n.under.development",defaultMessage:"Coming Soon"}))}}},attachment:{uploaderEvent:{onUploadBefore:function(b,E,k){T.yw.warning(C.formatMessage({id:"i18n.under.development",defaultMessage:"Coming Soon"}))}}},onChange:function(b){typeof i=="function"&&i(b.getHtml(),b.getMarkdown())}});v.current=z}return function(){v.current&&(v.current.destroy(),v.current=null)}}},[]),(0,l.useEffect)(function(){v.current&&u!==v.current.getHtml()&&v.current.setContent(u||"")},[u]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",c()(c()({ref:S},y),{},{style:{height:"100%"}}))})},Me=Re,Ue=e(51042),Ze=e(60219),be=e(55287),De=function(){var a=(0,se.useIntl)(),p=(0,V.Z)(),r=p.isDarkMode,u=(0,l.useState)(!1),i=J()(u,2),g=i[0],y=i[1],C=(0,l.useState)(""),S=J()(C,2),v=S[0],z=S[1],W=(0,l.useState)(""),b=J()(W,2),E=b[0],k=b[1],m=(0,l.useState)(""),R=J()(m,2),D=R[0],O=R[1],B=(0,l.useRef)(!1),M=(0,ue.u)(function(s){return s.currentOrg}),I=(0,oe.j)(function(s){return s.currentKbase}),re=(0,le.v)(function(s){return s.currentCategory}),N=ae(function(s){return{currentArticle:s.currentArticle,insertArticle:s.insertArticle,setCurrentArticle:s.setCurrentArticle,updateLocalArticle:s.updateArticle}}),t=N.currentArticle,Be=N.insertArticle,Ie=N.setCurrentArticle,de=N.updateLocalArticle;(0,l.useEffect)(function(){(t==null?void 0:t.kbUid)===(I==null?void 0:I.uid)&&(z(t==null?void 0:t.title),k(t==null?void 0:t.contentHtml),O(t==null?void 0:t.contentMarkdown))},[t]);var we=function(d){console.log("switch to ".concat(d)),y(d)},ke=function(){var s=K()(Z()().mark(function d(){var j,P;return Z()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(console.log("create"),!B.current){f.next=4;break}return console.log("isLoading: 1",B.current),f.abrupt("return");case 4:return B.current=!0,h.ZP.loading(a.formatMessage({id:"creating"})),j={uid:t==null?void 0:t.uid,title:"new article",summary:"new article summary",contentHtml:"new article content",contentMarkdown:"new article content",type:x.bj,tags:["tag1","tag2"],markdown:g,published:!1,categoryUid:re==null?void 0:re.uid,kbUid:I==null?void 0:I.uid,orgUid:M==null?void 0:M.uid},console.log("create articleObject",j),f.next=10,(0,G.tu)(j);case 10:P=f.sent,console.log("createArticle response",P),P.code===200?(h.ZP.destroy(),h.ZP.info(a.formatMessage({id:"create.success"})),Be(P.data),Ie(P.data)):(h.ZP.destroy(),h.ZP.error(P.message)),B.current=!1;case 14:case"end":return f.stop()}},d)}));return function(){return s.apply(this,arguments)}}(),Ke=function(){var s=K()(Z()().mark(function d(){var j,P;return Z()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(console.log("save",v,E),!(v===""||E==="")){f.next=4;break}return h.ZP.error("\u6807\u9898\u6216\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A\uFF01"),f.abrupt("return");case 4:if(!B.current){f.next=7;break}return console.log("isLoading: 1",B.current),f.abrupt("return");case 7:return B.current=!0,h.ZP.loading(a.formatMessage({id:"updating"})),j={uid:t==null?void 0:t.uid,title:v,summary:t==null?void 0:t.summary,contentHtml:E,contentMarkdown:D,type:t==null?void 0:t.type,tags:["tag1","tag2"],markdown:t==null?void 0:t.markdown,published:t==null?void 0:t.published,categoryUid:t==null?void 0:t.categoryUid,kbUid:t==null?void 0:t.kbUid,orgUid:t==null?void 0:t.orgUid},console.log("update articleObject",j),f.next=13,(0,G.Xc)(j);case 13:P=f.sent,console.log("updateArticle response",P),P.code===200?(h.ZP.destroy(),h.ZP.info(a.formatMessage({id:"update.success"})),de(P.data)):(h.ZP.destroy(),h.ZP.error(P.message)),B.current=!1;case 17:case"end":return f.stop()}},d)}));return function(){return s.apply(this,arguments)}}(),We=function(){console.log("handlePreviewArticle",t),window.open("".concat("","/article/").concat(I==null?void 0:I.uid,"/").concat(t==null?void 0:t.uid))};return(0,l.useEffect)(function(){var s=c()(c()({},t),{},{title:v,contentHtml:E,contentMarkdown:D});de(s)},[v,E,D]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{children:(0,n.jsxs)(pe.Z,{gap:10,style:{marginBottom:10,marginTop:5},children:[(0,n.jsx)(Ae.Z,{size:"large",placeholder:"title",value:v,style:{background:r?"#141414":"#f5f5f5"},onChange:function(d){console.log("title onChange:",d.target.value),z(d.target.value)}}),(0,n.jsx)(ye.Z,{checkedChildren:"Markdown",unCheckedChildren:"Html",onChange:we,defaultValue:g}),(0,n.jsx)(ne.ZP,{type:"primary",icon:(0,n.jsx)(Ue.Z,{}),onClick:ke,children:"\u65B0\u5EFA"}),(0,n.jsx)(ne.ZP,{type:"default",icon:(0,n.jsx)(Ze.Z,{}),onClick:Ke,children:"\u4FDD\u5B58"}),(0,n.jsx)(ne.ZP,{type:"default",icon:(0,n.jsx)(be.Z,{}),onClick:We,children:"\u9884\u89C8"})]})}),g&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(Ce.ZP,{style:{height:"100%"},value:D,enablePreview:!0,onChange:function(d,j){console.log("markdown onChange value",d,j),O(d),k(d)}})}),!g&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(Me,{placeholder:"article content..",value:E,onChange:function(d,j){console.log("aiEditor onChange value",d,j),k(d),O(j)}})})]})},Oe=De,ce=H.Z.Sider,xe=H.Z.Content,Te=function(){var a=(0,U.Z)(),p=a.leftSiderStyle,r=a.contentStyle;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(F.w,{children:(0,n.jsxs)(Q.Z,{children:[(0,n.jsx)(T.ZP,{}),(0,n.jsxs)(H.Z,{children:[(0,n.jsx)(ce,{style:p,children:(0,n.jsx)(Y.Z,{type:x.bj})}),(0,n.jsx)(ce,{style:p,children:(0,n.jsx)(me,{})}),(0,n.jsx)(H.Z,{children:(0,n.jsx)(xe,{style:r,children:(0,n.jsx)(Oe,{})})})]})]})})})},Le=Te}}]);