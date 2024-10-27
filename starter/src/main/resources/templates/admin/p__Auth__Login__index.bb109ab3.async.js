"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[9368],{17310:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(79482),r=n(75271),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z"}}]},name:"reload",theme:"outlined"},o=n(7671),c=function(e,t){return r.createElement(o.Z,(0,a.Z)({},e,{ref:t,icon:s}))};var i=r.forwardRef(c)},68251:function(e,t,n){n.d(t,{$t:function(){return h},a_:function(){return g},vf:function(){return d}});var a=n(90228),r=n.n(a),s=n(26068),o=n.n(s),c=n(87999),i=n.n(c),u=n(64453),l=n(45234);function d(e){return f.apply(this,arguments)}function f(){return(f=i()(r()().mark((function e(t){return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.request)("/api/v1/vip/crm/query/visitor/org",{method:"GET",params:o()(o()({},t),{},{client:u.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return p.apply(this,arguments)}function p(){return(p=i()(r()().mark((function e(){return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.request)("/visitor/api/v1/kaptcha",{method:"GET",params:{client:u.bVn}}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e,t){return m.apply(this,arguments)}function m(){return(m=i()(r()().mark((function e(t,n){return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.request)("/visitor/api/v1/kaptcha/check",{method:"POST",data:{captchaUid:t,captchaCode:n,client:u.bVn}}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},67130:function(e,t,n){var a=n(90228),r=n.n(a),s=n(87999),o=n.n(s),c=n(48305),i=n.n(c),u=n(68251),l=n(90995),d=n(45234),f=n(25139),g=n(75271),p=n(52676);t.Z=function(e){var t=e.onKaptchaChange,n=e.onKaptchaCheck,a=(0,d.useIntl)(),s=(0,g.useState)(),c=i()(s,2),h=c[0],m=c[1],x=(0,g.useState)(),v=i()(x,2),w=v[0],k=v[1],y=function(){var e=o()(r()().mark((function e(){var t;return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.a_)();case 2:200===(t=e.sent).code&&(m(t.data.captchaUid),k(t.data.captchaImage));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=o()(r()().mark((function e(t,a){var s;return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.$t)(t,a);case 2:s=e.sent,console.log("checkCaptcha response",s),200===s.code?n&&n(!0):n&&n(!1);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();(0,g.useEffect)((function(){y()}),[]);return(0,p.jsx)(p.Fragment,{children:w&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(f.Z,{onChange:function(e){t&&(t(h,e.target.value),e.target.value&&""!==e.target.value&&4===e.target.value.trim().length?M(h,e.target.value):n&&n(!1))},prefix:(0,p.jsx)(l.Z,{}),placeholder:a.formatMessage({id:"captcha",defaultMessage:"captcha"}),style:{width:"65%",float:"left",height:40}}),(0,p.jsx)("img",{src:w,alt:"captcha",onClick:y})]})})}},3490:function(e,t,n){n.r(t),n.d(t,{default:function(){return X}});var a=n(26068),r=n.n(a),s=n(90228),o=n.n(s),c=n(87999),i=n.n(c),u=n(48305),l=n.n(u),d=n(80496),f=n(43393),g=n(44558),p=n(56566),h=n(24617),m=n(8570),x=n(45234),v=n(2475),w=n(14604),k=n(42502),y=n(17943),M=n(28733),b=n(75271),j=n(30967),C=n(88105),Z=n(37240),S=n(44957),F=n(94414),T=n(64453),U=n(67130),I=n(78712),q=n(64391),K=n(64826),L=n(52676),A=function(e){var t=e.loginType,n=e.onKaptchaChange,a=e.onKaptchaCheck,r=(0,x.useIntl)(),s=function(){var e=i()(o()().mark((function e(t,a){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n&&n(t,a);case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),c=function(){var e=i()(o()().mark((function e(t){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a&&a(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,L.jsx)(L.Fragment,{children:"account"===t&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(K.Z,{name:"username",fieldProps:{size:"large",prefix:(0,L.jsx)(I.Z,{})},placeholder:r.formatMessage({id:"pages.login.username.placeholder",defaultMessage:"用户名/邮箱"}),rules:[{required:!0,message:(0,L.jsx)(x.FormattedMessage,{id:"pages.login.username.required",defaultMessage:"请输入用户名/邮箱!"})}]}),(0,L.jsx)(K.Z.Password,{name:"password",fieldProps:{size:"large",prefix:(0,L.jsx)(q.Z,{})},placeholder:r.formatMessage({id:"pages.login.password.placeholder",defaultMessage:"密码"}),rules:[{required:!0,message:(0,L.jsx)(x.FormattedMessage,{id:"pages.login.password.required",defaultMessage:"请输入密码！"})}]}),(0,L.jsx)(f.A.Item,{name:"captchaCode",rules:[{required:!0,message:r.formatMessage({id:"pages.login.captcha.required",defaultMessage:"请输入验证码！"})}],children:(0,L.jsx)(U.Z,{onKaptchaChange:s,onKaptchaCheck:c})})]})})},P=n(18880),R=n(42730),z=n(20679),B=function(e){var t=e.loginType,n=e.onKaptchaChange,a=e.onKaptchaCheck,r=(0,x.useIntl)(),s=(0,b.useRef)(),c=(0,b.useState)(""),u=l()(c,2),g=u[0],p=u[1],h=(0,b.useState)(""),m=l()(h,2),v=m[0],w=m[1],k=(0,b.useState)(!1),y=l()(k,2),M=y[0],j=y[1],C=function(){var e=i()(o()().mark((function e(t,a){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p(t),w(a),n&&n(t,a);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),S=function(){var e=i()(o()().mark((function e(t){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j(t),a&&a(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,L.jsx)(L.Fragment,{children:"mobile"===t&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(K.Z,{fieldProps:{size:"large",prefix:(0,L.jsx)(P.Z,{})},name:"mobile",placeholder:r.formatMessage({id:"pages.login.phoneNumber.placeholder",defaultMessage:"手机号"}),rules:[{required:!0,message:(0,L.jsx)(x.FormattedMessage,{id:"pages.login.phoneNumber.required",defaultMessage:"请输入手机号！"})},{pattern:/^1\d{10}$/,message:(0,L.jsx)(x.FormattedMessage,{id:"pages.login.phoneNumber.invalid",defaultMessage:"手机号格式错误！"})}]}),(0,L.jsx)(f.A.Item,{name:"captchaCode",rules:[{required:!0,message:r.formatMessage({id:"pages.login.captcha.required",defaultMessage:"请输入验证码！"})}],children:(0,L.jsx)(U.Z,{onKaptchaChange:C,onKaptchaCheck:S})}),(0,L.jsx)(R.Z,{fieldProps:{size:"large",prefix:(0,L.jsx)(q.Z,{})},captchaProps:{size:"large",disabled:!M},placeholder:r.formatMessage({id:"pages.login.captcha.placeholder",defaultMessage:"请输入验证码"}),captchaTextRender:function(e,t){return e?"".concat(t," ").concat(r.formatMessage({id:"pages.getCaptchaSecondText",defaultMessage:"获取验证码"})):r.formatMessage({id:"pages.login.phoneLogin.getVerificationCode",defaultMessage:"获取验证码"})},phoneName:"mobile",name:"code",rules:[{required:!0,message:(0,L.jsx)(x.FormattedMessage,{id:"pages.login.captcha.required",defaultMessage:"请输入验证码！"})}],fieldRef:s,onGetCaptcha:function(){var e=i()(o()().mark((function e(t){var n,a;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("mobile:",t),!t||11!==t.length){e.next=12;break}return n={mobile:t,type:T.UUF,captchaUid:g,captchaCode:v,platform:T.iw8},e.next=5,(0,d.Y7)(n);case 5:if(200===(a=e.sent).code){e.next=9;break}return Z.yw.error(a.message),e.abrupt("return");case 9:Z.yw.success(a.message),e.next=13;break;case 12:Z.yw.error("手机号格式错误");case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),(0,L.jsx)(z.Z,{message:(0,L.jsx)(x.FormattedMessage,{id:"pages.login.auto.register",defaultMessage:"Mobile will auto register"}),type:"info"})]})})},E=n(74592),N=n(79485),V=function(e){var t=e.loginType,n=(0,x.useIntl)(),a=(0,S.t)((function(e){return e.setAccessToken})),s=(0,C.L)((function(e){return e.setUserInfo})),c=(0,x.useModel)("@@initialState").setInitialState,u=(0,C.L)((function(e){return{deviceUid:e.deviceUid,setDeviceUid:e.setDeviceUid}})),f=u.deviceUid,g=u.setDeviceUid,p=(0,b.useState)("login"),h=l()(p,2),m=h[0],v=h[1],w=(0,b.useState)("loading"),k=l()(w,2),y=k[0],M=k[1],F=function(){var e=i()(o()().mark((function e(t){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&(0,j.flushSync)((function(){c((function(e){return r()(r()({},e),{},{userInfo:t})}))}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=i()(o()().mark((function e(t){var c,i,u;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("handleScanLogin values: ",t),Z.yw.loading(n.formatMessage({id:"logining",defaultMessage:"logining..."})),e.next=4,(0,d.kZ)(r()({},t));case 4:c=e.sent,console.log("LoginMobileResult scanLogin:",c.data),200===c.code?(Z.yw.destroy(),Z.yw.success(n.formatMessage({id:"login.success",defaultMessage:"login success"})),a(null==c?void 0:c.data.accessToken),F(null==c||null===(i=c.data)||void 0===i?void 0:i.user),s(null==c||null===(u=c.data)||void 0===u?void 0:u.user),x.history.push("/")):(Z.yw.destroy(),Z.yw.error(c.message));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=i()(o()().mark((function e(n){var a,r,s;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("scan"==t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,d.Tm)(f,n);case 4:if(200!==(a=e.sent).code){e.next=30;break}if(r=a.data,console.log("handleScanQuery status: ",r.status),r.status!==T.C20){e.next=13;break}M("active"),v("deviceUid="+r.deviceUid+"&code="+r.content),e.next=28;break;case 13:if(r.status!==T.FM$){e.next=17;break}M("scanned"),e.next=28;break;case 17:if(r.status!==T.PhI){e.next=21;break}M("expired"),e.next=28;break;case 21:if(r.status!==T.Cml){e.next=28;break}if(void 0!==r.receiver&&""!==r.receiver){e.next=24;break}return e.abrupt("return");case 24:return s={mobile:r.receiver,code:r.content,platform:T.iw8},console.log("login scan info:",s),e.next=28,U(s);case 28:e.next=31;break;case 30:Z.yw.error(a.message);case 31:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,b.useEffect)((function(){console.log("scan deviceUid:",f),void 0!==f&&""!==f||g((0,E.Zx)()),I(!1);var e=setInterval((function(){I(!1)}),3e3);return function(){clearInterval(e)}}),[t,f]),(0,L.jsx)(L.Fragment,{children:"scan"===t&&(0,L.jsx)(L.Fragment,{children:(0,L.jsx)(N.Z,{style:{margin:"auto"},value:m,status:y,onRefresh:function(){console.log("onRefresh"),I(!0)}})})})},D=n(1312),$=n(49437),_=n(26803),G=v.Z.defaultAlgorithm,H=v.Z.darkAlgorithm,W=function(){var e=(0,m.l)((function(e){var t=e.token;return{width:42,height:42,lineHeight:"42px",position:"fixed",right:16,borderRadius:t.borderRadius,":hover":{backgroundColor:t.colorBgTextHover}}}));return(0,L.jsx)("div",{className:e,"data-lang":!0,children:x.SelectLang&&(0,L.jsx)(x.SelectLang,{})})},Y=function(){var e=(0,E.lk)();return(0,L.jsx)(x.FormattedMessage,{id:e,defaultMessage:"微语"})},O=function(){var e=(0,E.z)();return(0,L.jsx)(x.FormattedMessage,{id:e,defaultMessage:"微语"})},Q=function(){var e=(0,x.useIntl)(),t=f.A.useForm(),n=l()(t,1)[0],a=v.Z.useToken().token,s=(0,F.Z)().isDarkMode,c=(0,S.t)((function(e){return e.setAccessToken})),u=(0,b.useState)("mobile"),m=l()(u,2),y=m[0],M=m[1],U=(0,x.useModel)("@@initialState").setInitialState,I=(0,b.useState)(!1),q=l()(I,2),K=q[0],P=q[1],R=(0,C.L)((function(e){return e.setUserInfo})),z=(0,b.useState)(!1),N=l()(z,2),D=N[0],G=N[1],H=(0,b.useState)(""),Q=l()(H,2),X=Q[0],J=Q[1],ee=function(){var e=i()(o()().mark((function e(t,a){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:J(t),n.setFieldValue("captchaCode",a);case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),te=function(){var e=i()(o()().mark((function e(t){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("handleKaptchaCheck:",t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ne=[{key:"account",label:e.formatMessage({id:"pages.login.accountLogin.tab",defaultMessage:"账户密码登录"}),children:(0,L.jsx)(A,{loginType:y,onKaptchaChange:ee,onKaptchaCheck:te})},{key:"mobile",label:e.formatMessage({id:"pages.login.phoneLogin.tab",defaultMessage:"手机号登录"}),children:(0,L.jsx)(B,{loginType:y,onKaptchaChange:ee,onKaptchaCheck:te})},{key:"scan",label:e.formatMessage({id:"pages.login.scanLogin.tab",defaultMessage:"扫码登录"}),children:(0,L.jsx)(V,{loginType:y})}];(0,g.uK)(a.colorTextBase,.2);(0,b.useEffect)((function(){(0,$.ME)(),(0,E.Bc)()&&P(!0),(0,E.pr)()}),[]);var ae,re=function(){var e=i()(o()().mark((function e(t){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&(0,j.flushSync)((function(){U((function(e){return r()(r()({},e),{},{userInfo:t})}))}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),se=function(){var t=i()(o()().mark((function t(n){var a;return o()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,D){t.next=4;break}return Z.yw.error("请阅读并同意隐私协议"),t.abrupt("return");case 4:return Z.yw.loading(e.formatMessage({id:"logining",defaultMessage:"logining..."})),t.next=7,(0,d.x4)(r()({},n));case 7:a=t.sent,console.log("LoginResult:",a),200===a.code?(Z.yw.destroy(),Z.yw.success(e.formatMessage({id:"login.success",defaultMessage:"login success"})),c(a.data.accessToken),re(a.data.user),R(a.data.user),x.history.push("/")):(Z.yw.destroy(),Z.yw.error(a.message)),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0),Z.yw.error(e.formatMessage({id:"login.error",defaultMessage:"login failed"}));case 16:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}(),oe=function(){var t=i()(o()().mark((function t(n){var a,s,i;return o()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,D){t.next=4;break}return Z.yw.error("请阅读并同意隐私协议"),t.abrupt("return");case 4:return Z.yw.loading(e.formatMessage({id:"logining",defaultMessage:"logining..."})),t.next=7,(0,d.N9)(r()({},n));case 7:a=t.sent,console.log("LoginMobileResult:",a),200===a.code?(Z.yw.destroy(),Z.yw.success(e.formatMessage({id:"login.success",defaultMessage:"login success"})),c(null==a?void 0:a.data.accessToken),re(null==a||null===(s=a.data)||void 0===s?void 0:s.user),R(null==a||null===(i=a.data)||void 0===i?void 0:i.user),x.history.push("/")):(Z.yw.destroy(),Z.yw.error(a.message)),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0),Z.yw.error(e.formatMessage({id:"login.error",defaultMessage:"login failed"}));case 16:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}();return(0,L.jsxs)(p._Y,{hashed:!1,dark:s,children:[(0,L.jsx)(W,{}),(0,L.jsx)("div",{style:{backgroundColor:a.colorBgContainer,textAlign:"center",height:"100%",backgroundImage:"url('/admin/assets/images/bg-wide.png')"},children:(0,L.jsxs)(h.U,{form:n,contentStyle:{minWidth:280,maxWidth:"75vw"},logo:(ae=(0,E.hX)(),(0,L.jsx)("img",{alt:"logo",src:ae})),title:Y(),subTitle:O(),actions:K&&!1,onFinish:function(){var e=i()(o()().mark((function e(t){var n,a;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("login values:",t),"account"!==y){e.next=8;break}return n={username:t.username,password:t.password,captchaUid:X,captchaCode:t.captchaCode,platform:T.iw8},console.log("login info:",n),e.next=6,se(n);case 6:e.next=12;break;case 8:return a={mobile:t.mobile,code:t.code,captchaUid:X,captchaCode:t.captchaCode,platform:T.iw8},console.log("login mobile info:",a),e.next=12,oe(a);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:[(0,L.jsx)(w.Z,{activeKey:y,onChange:M,centered:!0,items:ne}),(0,L.jsx)("div",{style:{marginTop:14,marginBottom:14},children:(0,L.jsxs)("div",{style:{float:"right",marginBottom:24},children:[(0,L.jsx)(_.Z,{onChange:function(e){console.log("checked = ".concat(e.target.checked)),G(e.target.checked)},children:(0,L.jsx)(k.ZP,{size:"small",type:"link",onClick:function(){window.open("https://www.weiyuai.cn/protocol.html")},children:"同意《用户隐私&协议》"})}),K&&(0,L.jsx)(x.Link,{to:"/auth/register",children:(0,L.jsx)(x.FormattedMessage,{id:"pages.login.registerAccount",defaultMessage:"注册 "})}),(0,L.jsx)(x.Link,{style:{marginLeft:10},to:T.rVq,target:"_blank",children:"帮助文档"})]})})]})})]})},X=function(){var e=(0,F.Z)().isDarkMode;return(0,L.jsx)(D.w,{children:(0,L.jsx)(y.ZP,{theme:{algorithm:e?H:G},children:(0,L.jsxs)(M.Z,{style:{height:"100%"},children:[(0,L.jsx)(Z.ZP,{}),(0,L.jsx)(Q,{})]})})})}}}]);