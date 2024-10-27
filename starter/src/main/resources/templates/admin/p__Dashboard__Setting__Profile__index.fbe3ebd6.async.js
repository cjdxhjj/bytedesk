"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[9290],{64391:function(e,n,a){a.d(n,{Z:function(){return i}});var r=a(13800),t=a(75271),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"},o=a(45791),c=function(e,n){return t.createElement(o.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:s}))};var i=t.forwardRef(c)},18880:function(e,n,a){a.d(n,{Z:function(){return i}});var r=a(13800),t=a(75271),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M744 62H280c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h464c35.3 0 64-28.7 64-64V126c0-35.3-28.7-64-64-64zm-8 824H288V134h448v752zM472 784a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"mobile",theme:"outlined"},o=a(45791),c=function(e,n){return t.createElement(o.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:s}))};var i=t.forwardRef(c)},79619:function(e,n,a){a.d(n,{Z:function(){return i}});var r=a(13800),t=a(75271),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"upload",theme:"outlined"},o=a(45791),c=function(e,n){return t.createElement(o.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:s}))};var i=t.forwardRef(c)},42730:function(e,n,a){var r=a(13800),t=a(84365),s=a(22577),o=a(60323),c=a(76314),i=a(92813),l=a(25139),u=a(42502),f=a(75271),d=a(34699),p=a(52676),g=["rules","name","phoneName","fieldProps","onTiming","captchaTextRender","captchaProps"],m=f.forwardRef((function(e,n){var a=i.Z.useFormInstance(),d=(0,f.useState)(e.countDown||60),m=(0,c.Z)(d,2),h=m[0],v=m[1],x=(0,f.useState)(!1),w=(0,c.Z)(x,2),Z=w[0],b=w[1],M=(0,f.useState)(),y=(0,c.Z)(M,2),j=y[0],P=y[1],k=(e.rules,e.name,e.phoneName),C=e.fieldProps,I=e.onTiming,V=e.captchaTextRender,S=void 0===V?function(e,n){return e?"".concat(n," 秒后重新获取"):"获取验证码"}:V,F=e.captchaProps,E=(0,o.Z)(e,g),q=function(){var e=(0,s.Z)((0,t.Z)().mark((function e(n){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,P(!0),e.next=4,E.onGetCaptcha(n);case 4:P(!1),b(!0),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),b(!1),P(!1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}();return(0,f.useImperativeHandle)(n,(function(){return{startTiming:function(){return b(!0)},endTiming:function(){return b(!1)}}})),(0,f.useEffect)((function(){var n=0,a=e.countDown;return Z&&(n=window.setInterval((function(){v((function(e){return e<=1?(b(!1),clearInterval(n),a||60):e-1}))}),1e3)),function(){return clearInterval(n)}}),[Z]),(0,f.useEffect)((function(){I&&I(h)}),[h,I]),(0,p.jsxs)("div",{style:(0,r.Z)((0,r.Z)({},null==C?void 0:C.style),{},{display:"flex",alignItems:"center"}),ref:n,children:[(0,p.jsx)(l.Z,(0,r.Z)((0,r.Z)({},C),{},{style:(0,r.Z)({flex:1,transition:"width .3s",marginRight:8},null==C?void 0:C.style)})),(0,p.jsx)(u.ZP,(0,r.Z)((0,r.Z)({style:{display:"block"},disabled:Z,loading:j},F),{},{onClick:(0,s.Z)((0,t.Z)().mark((function e(){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!k){e.next=9;break}return e.next=4,a.validateFields([k].flat(1));case 4:return n=a.getFieldValue([k].flat(1)),e.next=7,q(n);case 7:e.next=11;break;case 9:return e.next=11,q("");case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])}))),children:S(Z,h)}))]})})),h=(0,d.G)(m);n.Z=h},65012:function(e,n,a){var r=a(13800),t=a(60323),s=a(75271),o=a(89755),c=a(52676),i=["fieldProps","proFieldProps"],l=function(e,n){var a=e.fieldProps,s=e.proFieldProps,l=(0,t.Z)(e,i);return(0,c.jsx)(o.Z,(0,r.Z)({ref:n,valueType:"textarea",fieldProps:a,proFieldProps:s},l))};n.Z=s.forwardRef(l)},68251:function(e,n,a){a.d(n,{$t:function(){return m},a_:function(){return p},vf:function(){return f}});var r=a(90228),t=a.n(r),s=a(26068),o=a.n(s),c=a(87999),i=a.n(c),l=a(64453),u=a(45234);function f(e){return d.apply(this,arguments)}function d(){return(d=i()(t()().mark((function e(n){return t()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("/api/v1/vip/crm/query/visitor/org",{method:"GET",params:o()(o()({},n),{},{client:l.bVn})}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return g.apply(this,arguments)}function g(){return(g=i()(t()().mark((function e(){return t()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("/visitor/api/v1/kaptcha",{method:"GET",params:{client:l.bVn}}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e,n){return h.apply(this,arguments)}function h(){return(h=i()(t()().mark((function e(n,a){return t()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,u.request)("/visitor/api/v1/kaptcha/check",{method:"POST",data:{captchaUid:n,captchaCode:a,client:l.bVn}}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},67130:function(e,n,a){var r=a(90228),t=a.n(r),s=a(87999),o=a.n(s),c=a(48305),i=a.n(c),l=a(68251),u=a(90995),f=a(45234),d=a(25139),p=a(75271),g=a(52676);n.Z=function(e){var n=e.onKaptchaChange,a=e.onKaptchaCheck,r=(0,f.useIntl)(),s=(0,p.useState)(),c=i()(s,2),m=c[0],h=c[1],v=(0,p.useState)(),x=i()(v,2),w=x[0],Z=x[1],b=function(){var e=o()(t()().mark((function e(){var n;return t()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.a_)();case 2:200===(n=e.sent).code&&(h(n.data.captchaUid),Z(n.data.captchaImage));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=o()(t()().mark((function e(n,r){var s;return t()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.$t)(n,r);case 2:s=e.sent,console.log("checkCaptcha response",s),200===s.code?a&&a(!0):a&&a(!1);case 5:case"end":return e.stop()}}),e)})));return function(n,a){return e.apply(this,arguments)}}();(0,p.useEffect)((function(){b()}),[]);return(0,g.jsx)(g.Fragment,{children:w&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(d.Z,{onChange:function(e){n&&(n(m,e.target.value),e.target.value&&""!==e.target.value&&4===e.target.value.trim().length?M(m,e.target.value):a&&a(!1))},prefix:(0,g.jsx)(u.Z,{}),placeholder:r.formatMessage({id:"captcha",defaultMessage:"captcha"}),style:{width:"65%",float:"left",height:40}}),(0,g.jsx)("img",{src:w,alt:"captcha",onClick:b})]})})}},77705:function(e,n,a){a.d(n,{G:function(){return d}});var r=a(26068),t=a.n(r),s=(a(75271),a(30224)),o=a(64453),c=a(16483),i=a.n(c),l=a(37240),u=a(49437),f=a(52676),d=function(e){var n=e.children,a=e.onSuccess,r=e.onError,c={file:null,file_name:"test.png",file_type:"image/png",is_avatar:"true",kb_type:o.IrL,category_uid:"",kb_uid:"",client:o.bVn},d={name:"file",accept:"image/*",action:(0,u.M$)(),headers:{Authorization:"Bearer "+localStorage.getItem(o.LA8)},data:c,showUploadList:!1,beforeUpload:function(e){console.log("beforeUpload",e);var n=i()(new Date).format("YYYYMMDDHHmmss")+"_"+e.name;c.file=e,c.file_name=n,c.file_type=e.type,console.log("beforeUpload",c)},onChange:function(e){if("uploading"!==e.file.status&&console.log("not uploading:",e.file),"done"===e.file.status)if(console.log("response: ",e.file.response),200===e.file.response.code){var n=e.file.response.data;a(n),l.yw.success("".concat(e.file.name," 上传成功"))}else r(e.file),l.yw.error("".concat(e.file.name," 上传失败"));else"error"===e.file.status&&(l.yw.error("".concat(e.file.name," 上传失败")),r(e.file))}};return(0,f.jsx)(s.Z,t()(t()({},d),{},{children:n}))}},63272:function(e,n,a){a.r(n),a.d(n,{default:function(){return R}});var r=a(90228),t=a.n(r),s=a(26068),o=a.n(s),c=a(87999),i=a.n(c),l=a(48305),u=a.n(l),f=a(75271),d=a(29132),p=a(42502),g=a(43393),m=a(64826),h=a(65012),v=a(45234),x=a(79619),w=a(88105),Z=a(22323),b=a(37240),M=a(77705),y=a(92785),j=a(74592),P=a(8591),k=a(52676),C=function(e){var n=e.open,a=e.onClose,r=(0,v.useIntl)(),s=(0,y.Z)().translateString;return(0,k.jsx)(k.Fragment,{children:(0,k.jsx)(P.Z,{title:r.formatMessage({id:"pages.settings.reset.password",defaultMessage:"重置密码"}),forceRender:!0,open:n,footer:null,onCancel:function(){a()},children:(0,k.jsxs)(g.A,{initialValues:{oldPassword:"",newPassword:"",confirmPassword:""},onFinish:function(){var e=i()(t()().mark((function e(n){var r,o;return t()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("changePassword:",n),!(n.newPassword.trim().length<6)){e.next=4;break}return b.yw.error("密码最小长度不能小于6"),e.abrupt("return");case 4:if(n.newPassword===n.confirmPassword){e.next=7;break}return b.yw.error("两次输入密码不一致"),e.abrupt("return");case 7:return r={oldPassword:n.oldPassword,newPassword:n.newPassword},e.next=10,(0,Z.Cp)(r);case 10:o=e.sent,console.log("changePassword response:",o),200===o.code?(b.yw.success("Password changed successfully!"),a()):b.yw.error(s(o.message));case 13:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),children:[(0,k.jsx)(m.Z.Password,{name:"oldPassword",label:"原密码(手机号直接登录用户，可以留空)"}),(0,k.jsx)(m.Z.Password,{name:"newPassword",label:"新密码"}),(0,k.jsx)(m.Z.Password,{name:"confirmPassword",label:"确认密码"})]})})})},I=a(80496),V=a(67130),S=a(64453),F=a(18880),E=a(64391),q=a(42730),z=function(e){var n=e.open,a=e.onClose,r=(0,v.useIntl)(),s=(0,f.useRef)(),o=(0,f.useState)(""),c=u()(o,2),l=c[0],d=c[1],p=(0,f.useState)(""),h=u()(p,2),x=h[0],w=h[1],Z=(0,f.useState)(!1),M=u()(Z,2),y=M[0],j=M[1],C=function(){var e=i()(t()().mark((function e(n,a){return t()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("captchaUid",n," captchaValue",a),d(n),w(a);case 3:case"end":return e.stop()}}),e)})));return function(n,a){return e.apply(this,arguments)}}(),z=function(){var e=i()(t()().mark((function e(n){return t()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("captcha check result",n),j(n);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,k.jsx)(k.Fragment,{children:(0,k.jsx)(P.Z,{title:r.formatMessage({id:"pages.settings.reset.email",defaultMessage:"重置邮箱"}),forceRender:!0,open:n,footer:null,onCancel:function(){a()},children:(0,k.jsxs)(g.A,{initialValues:{oldPassword:"",newPassword:"",confirmPassword:""},onFinish:function(){var e=i()(t()().mark((function e(n){return t()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("changeEmail:",n);case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),children:[(0,k.jsx)(m.Z,{fieldProps:{size:"large",prefix:(0,k.jsx)(F.Z,{})},name:"email",placeholder:r.formatMessage({id:"pages.login.email.placeholder",defaultMessage:"邮箱"}),rules:[{required:!0,message:(0,k.jsx)(v.FormattedMessage,{id:"pages.login.email.required",defaultMessage:"请输入邮箱！"})},{pattern:/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/,message:"邮箱格式不正确"},{max:50,message:"邮箱不得超过50字符"}]}),(0,k.jsx)(g.A.Item,{name:"captchaCode",rules:[{required:!0,message:r.formatMessage({id:"pages.login.captcha.required",defaultMessage:"请输入验证码！"})}],children:(0,k.jsx)(V.Z,{onKaptchaChange:C,onKaptchaCheck:z})}),(0,k.jsx)(q.Z,{fieldProps:{size:"large",prefix:(0,k.jsx)(E.Z,{})},captchaProps:{size:"large",disabled:!y},placeholder:r.formatMessage({id:"pages.login.captcha.placeholder",defaultMessage:"请输入验证码"}),captchaTextRender:function(e,n){return e?"".concat(n," ").concat(r.formatMessage({id:"pages.getCaptchaSecondText",defaultMessage:"获取验证码"})):r.formatMessage({id:"pages.login.phoneLogin.getVerificationCode",defaultMessage:"获取验证码"})},phoneName:"email",name:"code",rules:[{required:!0,message:(0,k.jsx)(v.FormattedMessage,{id:"pages.login.captcha.required",defaultMessage:"请输入验证码！"})}],fieldRef:s,onGetCaptcha:function(){var e=i()(t()().mark((function e(n){var a,r;return t()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("email:",n),!n){e.next=13;break}return a={email:n,type:S.Iju,captchaUid:l,captchaCode:x,platform:S.iw8},e.next=5,(0,I.O8)(a);case 5:if(r=e.sent,console.log("sendEmailCode",r),200===r.code){e.next=10;break}return b.yw.error(r.message),e.abrupt("return");case 10:b.yw.success(r.message),e.next=14;break;case 13:b.yw.error("手机号格式错误");case 14:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()})]})})})},A=function(e){var n=e.open,a=e.onClose,r=(0,v.useIntl)(),s=((0,y.Z)().translateString,(0,f.useRef)()),o=(0,f.useState)(""),c=u()(o,2),l=c[0],d=c[1],p=(0,f.useState)(""),h=u()(p,2),x=h[0],w=h[1],Z=(0,f.useState)(!1),M=u()(Z,2),j=M[0],C=M[1],z=function(){var e=i()(t()().mark((function e(n,a){return t()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("captchaUid",n," captchaValue",a),d(n),w(a);case 3:case"end":return e.stop()}}),e)})));return function(n,a){return e.apply(this,arguments)}}(),A=function(){var e=i()(t()().mark((function e(n){return t()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("captcha check result",n),C(n);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,k.jsx)(k.Fragment,{children:(0,k.jsx)(P.Z,{title:r.formatMessage({id:"pages.settings.reset.mobile",defaultMessage:"重置手机号"}),forceRender:!0,open:n,footer:null,onCancel:function(){a()},children:(0,k.jsxs)(g.A,{initialValues:{oldPassword:"",newPassword:"",confirmPassword:""},onFinish:function(){var e=i()(t()().mark((function e(n){return t()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("changeMobile:",n);case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),children:[(0,k.jsx)(m.Z,{fieldProps:{size:"large",prefix:(0,k.jsx)(F.Z,{})},name:"mobile",placeholder:r.formatMessage({id:"pages.login.phoneNumber.placeholder",defaultMessage:"手机号"}),rules:[{required:!0,message:(0,k.jsx)(v.FormattedMessage,{id:"pages.login.phoneNumber.required",defaultMessage:"请输入手机号！"})},{pattern:/^1\d{10}$/,message:(0,k.jsx)(v.FormattedMessage,{id:"pages.login.phoneNumber.invalid",defaultMessage:"手机号格式错误！"})}]}),(0,k.jsx)(g.A.Item,{name:"captchaCode",rules:[{required:!0,message:r.formatMessage({id:"pages.login.captcha.required",defaultMessage:"请输入验证码！"})}],children:(0,k.jsx)(V.Z,{onKaptchaChange:z,onKaptchaCheck:A})}),(0,k.jsx)(q.Z,{fieldProps:{size:"large",prefix:(0,k.jsx)(E.Z,{})},captchaProps:{size:"large",disabled:!j},placeholder:r.formatMessage({id:"pages.login.captcha.placeholder",defaultMessage:"请输入验证码"}),captchaTextRender:function(e,n){return e?"".concat(n," ").concat(r.formatMessage({id:"pages.getCaptchaSecondText",defaultMessage:"获取验证码"})):r.formatMessage({id:"pages.login.phoneLogin.getVerificationCode",defaultMessage:"获取验证码"})},phoneName:"mobile",name:"code",rules:[{required:!0,message:(0,k.jsx)(v.FormattedMessage,{id:"pages.login.captcha.required",defaultMessage:"请输入验证码！"})}],fieldRef:s,onGetCaptcha:function(){var e=i()(t()().mark((function e(n){var a,r;return t()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("mobile:",n),!n||11!==n.length){e.next=13;break}return a={mobile:n,type:S.BG8,captchaUid:l,captchaCode:x,platform:S.iw8},e.next=5,(0,I.Y7)(a);case 5:if(r=e.sent,console.log("sendMobileCode",r),200===r.code){e.next=10;break}return b.yw.error(r.message),e.abrupt("return");case 10:b.yw.success(r.message),e.next=14;break;case 13:b.yw.error("手机号格式错误");case 14:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()})]})})})},U={labelCol:{span:8},wrapperCol:{span:8}},R=function(){var e=(0,v.useIntl)(),n=(0,y.Z)().translateString,a=(0,w.L)((function(e){return{userInfo:e.userInfo,setUserInfo:e.setUserInfo}})),r=a.userInfo,s=a.setUserInfo,c=(0,f.useState)(""),l=u()(c,2),P=l[0],I=l[1],V=(0,f.useState)(!1),S=u()(V,2),F=S[0],E=S[1],q=(0,f.useState)(!1),R=u()(q,2),O=R[0],N=R[1],T=(0,f.useState)(!1),_=u()(T,2),H=_[0],$=_[1],G=function(){var n=i()(t()().mark((function n(a){var c,i;return t()().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=o()(o()(o()({},r),a),{},{avatar:P}),console.log(c),n.next=4,(0,Z.ck)(c);case 4:i=n.sent,console.log("updateProfile response:",i),200===i.code?(b.yw.success(e.formatMessage({id:"update.success"})),i.data.username!==r.username?(0,j.NZ)():s(i.data)):b.yw.error(i.message);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,f.useEffect)((function(){r&&I(r.avatar)}),[r]),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(g.A,o()(o()({},U),{},{onFinish:G,initialValues:{uid:r.uid,username:r.username,nickname:r.nickname,email:r.email,mobile:r.mobile,description:n(r.description)},children:[(0,k.jsx)(m.Z,{name:"uid",label:"Uid",rules:[{required:!0}],readonly:!0}),(0,k.jsx)(g.A.Item,{name:"avatar",valuePropName:"fileList",getValueFromEvent:function(e){return Array.isArray(e)?e:null==e?void 0:e.fileList},label:e.formatMessage({id:"pages.robot.tab.avatar",defaultMessage:"Avatar"}),children:(0,k.jsxs)(M.G,{onSuccess:function(e){console.log("handleUploadSuccess:",e),I(e)},onError:function(e){console.log("handleUploadError:",e)},children:[(0,k.jsx)(d.C,{src:P}),(0,k.jsx)(p.ZP,{icon:(0,k.jsx)(x.Z,{}),children:e.formatMessage({id:"pages.robot.upload",defaultMessage:"Upload"})})]},"avatar")}),(0,k.jsx)(m.Z,{name:"username",label:e.formatMessage({id:"username.change.tip",defaultMessage:"Username"}),rules:[{required:!0}]}),(0,k.jsx)(p.ZP,{onClick:function(){E(!0)},children:e.formatMessage({id:"pages.settings.reset.password",defaultMessage:"重置密码"})}),(0,k.jsx)(m.Z,{name:"nickname",label:e.formatMessage({id:"nickname",defaultMessage:"Nickname"}),rules:[{required:!0}]}),(0,k.jsx)(m.Z,{name:"email",label:r.emailVerified?e.formatMessage({id:"email.verified",defaultMessage:"Email Verified"}):e.formatMessage({id:"email.unverified",defaultMessage:"email unverified"}),rules:[{type:"email"}],readonly:!0}),(0,k.jsx)(p.ZP,{onClick:function(){N(!0)},children:e.formatMessage({id:"pages.settings.reset.email",defaultMessage:"重置邮箱"})}),(0,k.jsx)(m.Z,{name:"mobile",label:r.mobileVerified?e.formatMessage({id:"mobile.verified",defaultMessage:"Mobile Verified"}):e.formatMessage({id:"mobile.unverified",defaultMessage:"mobile unverified"}),readonly:!0}),(0,k.jsx)(p.ZP,{onClick:function(){$(!0)},children:e.formatMessage({id:"pages.settings.reset.mobile",defaultMessage:"重置手机号"})}),(0,k.jsx)(h.Z,{name:"description",label:e.formatMessage({id:"description",defaultMessage:"Description"})})]})),F&&(0,k.jsx)(C,{open:F,onClose:function(){E(!1)}}),O&&(0,k.jsx)(z,{open:O,onClose:function(){N(!1)}}),H&&(0,k.jsx)(A,{open:H,onClose:function(){$(!1)}})]})}},8591:function(e,n,a){a.d(n,{Z:function(){return b}});var r=a(96986),t=a(55849),s=a(29168),o=a(75271),c=a(82187),i=a.n(c),l=a(40995),u=a(52825),f=a(34662),d=a(30076),p=a(90698),g=a(9573),m=a(20339),h=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var t=0;for(r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]])}return a};var v=(0,u.i)((e=>{const{prefixCls:n,className:a,closeIcon:r,closable:t,type:s,title:c,children:u,footer:v}=e,x=h(e,["prefixCls","className","closeIcon","closable","type","title","children","footer"]),{getPrefixCls:w}=o.useContext(f.E_),Z=w(),b=n||w("modal"),M=(0,d.Z)(Z),[y,j,P]=(0,m.ZP)(b,M),k=`${b}-confirm`;let C={};return C=s?{closable:null!=t&&t,title:"",footer:"",children:o.createElement(p.O,Object.assign({},e,{prefixCls:b,confirmPrefixCls:k,rootPrefixCls:Z,content:u}))}:{closable:null==t||t,title:c,footer:null!==v&&o.createElement(g.$,Object.assign({},e)),children:u},y(o.createElement(l.s,Object.assign({prefixCls:b,className:i()(j,`${b}-pure-panel`,s&&k,s&&`${k}-${s}`,a,P,M)},x,{closeIcon:(0,g.b)(b,r),closable:t},C)))})),x=a(64501);function w(e){return(0,r.ZP)((0,r.uW)(e))}const Z=s.Z;Z.useModal=x.Z,Z.info=function(e){return(0,r.ZP)((0,r.cw)(e))},Z.success=function(e){return(0,r.ZP)((0,r.vq)(e))},Z.error=function(e){return(0,r.ZP)((0,r.AQ)(e))},Z.warning=w,Z.warn=w,Z.confirm=function(e){return(0,r.ZP)((0,r.Au)(e))},Z.destroyAll=function(){for(;t.Z.length;){const e=t.Z.pop();e&&e()}},Z.config=r.ai,Z._InternalPanelDoNotUseOrYouWillBeFired=v;var b=Z}}]);