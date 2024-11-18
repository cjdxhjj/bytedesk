"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[9078],{83782:function(n,t,e){e.d(t,{O7:function(){return m},XS:function(){return d},k4:function(){return p},uu:function(){return y},yr:function(){return v}});var r=e(90228),a=e.n(r),u=e(26068),i=e.n(u),o=e(87999),c=e.n(o),s=e(96677),l=e(18735);function d(n){return f.apply(this,arguments)}function f(){return(f=c()(a()().mark((function n(t){return a()().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,l.request)("/api/v1/category/query/org",{method:"GET",params:i()(i()({},t),{},{client:s.bVn})}));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return h.apply(this,arguments)}function h(){return(h=c()(a()().mark((function n(t){return a()().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,l.request)("/api/v1/category/create",{method:"POST",data:i()(i()({},t),{},{client:s.bVn})}));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return b.apply(this,arguments)}function b(){return(b=c()(a()().mark((function n(t){return a()().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,l.request)("/api/v1/category/update",{method:"POST",data:i()(i()({},t),{},{client:s.bVn})}));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function y(n){return g.apply(this,arguments)}function g(){return(g=c()(a()().mark((function n(t){return a()().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,l.request)("/api/v1/category/delete",{method:"POST",data:i()(i()({},t),{},{client:s.bVn})}));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(){return k.apply(this,arguments)}function k(){return(k=c()(a()().mark((function n(){return a()().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,l.request)("/visitor/api/v1/category/query",{method:"GET",params:{client:s.bVn}}));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},21363:function(n,t,e){var r=e(90228),a=e.n(r),u=e(87999),i=e.n(u),o=e(48305),c=e.n(o),s=e(59153),l=e(51038),d=e(39969),f=e(29244),p=e(74730),h=e(9477),v=e(65948),b=e(41258),y=e(75271),g=e(26092),m=e(96677),k=e(52676);t.Z=function(n){var t,e=n.open,r=n.level,u=n.type,o=n.isEdit,w=n.onCancel,C=n.onSubmit,S=p.A.useForm(),K=c()(S,1)[0],R=(0,l.Z)().translateString,x=(0,f.u)((function(n){return n.currentOrg})),O=(0,d.j)((function(n){return n.kbaseResult})),U=(0,d.j)((function(n){return n.currentKbase})),E=(0,g.v)((function(n){return n.currentCategory}));(0,y.useEffect)((function(){o?K.setFieldsValue({name:R(null==E?void 0:E.name)}):K.resetFields(),K.setFieldsValue({kbUid:null==U?void 0:U.uid})}),[e,o]);var V=function(){K.validateFields().then(function(){var n=i()(a()().mark((function n(t){var e;return a()().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:console.log("handleSaveDep:",t),e={uid:o?null==E?void 0:E.uid:"",name:t.name,level:r,type:u,kbUid:t.kbUid,orgUid:null==x?void 0:x.uid},C(e);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()).catch((function(n){console.log("Failed:",n),s.yw.error("创建分类失败")}))};return(0,k.jsx)("div",{children:(0,k.jsx)(b.Z,{title:o?"编辑分类":"创建分类",open:e,forceRender:!0,onOk:V,onCancel:w,getContainer:!1,children:(0,k.jsxs)(p.A,{form:K,name:"categoryForm",submitter:!1,children:[(0,k.jsx)(h.Z,{label:"分类名称",name:"name",rules:[{required:!0,message:"请输入名称!"}],fieldProps:{onKeyDown:function(n){"Enter"===n.key&&V()},placeholder:"请输入分类名称"}}),u!=m.Kvk&&(0,k.jsx)(v.Z,{name:"kbUid",label:"所属知识库",allowClear:!0,options:null==O||null===(t=O.data)||void 0===t?void 0:t.content.map((function(n){return{label:R(n.name),value:n.uid}}))})]})})})}},21544:function(n,t,e){var r=e(93454);t.Z=function(){var n=(0,r.Z)().isDarkMode;return{leftSiderStyle:{borderRight:n?"1px solid #333":"1px solid #ccc",background:n?"#141414":"#f5f5f5"},leftSiderWidth:250,headerStyle:{background:n?"#141414":"#fff"},rightSiderStyle:{borderLeft:n?"1px solid #333":"1px solid #ccc",background:n?"#141414":"#f5f5f5"},contentStyle:{minHeight:120,background:n?"#141414":"#f5f5f5",height:"100vh"}}}},51038:function(n,t,e){var r=e(96677),a=e(94388),u=e(18735);t.Z=function(){var n=(0,u.useIntl)();return{translateString:function(t){return t&&t.startsWith(r.VoP)?n.formatMessage({id:t,defaultMessage:t}):t},translateStringTranct:function(t){return null!=t&&t.startsWith(r.VoP)||null!=t&&t.startsWith("ROLE_")?(0,a.aS)(n.formatMessage({id:t,defaultMessage:t}),10):(0,a.aS)(t,10)}}}},26092:function(n,t,e){e.d(t,{v:function(){return d}});var r=e(15558),a=e.n(r),u=e(26068),i=e.n(u),o=e(96677),c=e(52315),s=e(4938),l=e(13657),d=(0,c.Ue)()((0,s.mW)((0,s.tJ)((0,l.n)((function(n,t){return{categoryResult:{data:{content:[]}},categoryTreeOptions:[],categorySelectOptions:[],currentCategory:{uid:""},setCategoryResult:function(t){var e,r=function(n){var t=[];return n.data.content.forEach((function(n){var e={label:n.name,value:n.uid};t.push(e)})),t}(t),u=i()(i()({},t),{},{data:{content:[{uid:"all",name:"All"}].concat(a()(t.data.content))}}),o=function(n){var t=[];return n.data.content.forEach((function(n){var e={title:n.name,key:n.uid,children:[]};n.children&&Array.isArray(n.children)&&(e.children=n.children.map((function(n){return{title:n.name,key:n.uid,children:[]}}))),t.push(e)})),t}(u);n({categoryResult:u,categoryTreeOptions:o,categorySelectOptions:r}),(null===(e=t.data)||void 0===e||null===(e=e.content)||void 0===e?void 0:e.length)>0?n({currentCategory:t.data.content[0]}):n({currentCategory:{uid:""}})},setCurrentCategory:function(t){n({currentCategory:t})},setCurrentCategoryUid:function(e){var r=t().categoryResult.data.content.find((function(n){return n.uid===e}));n({currentCategory:r})},deleteCategoryCache:function(){return n({},!0)}}})),{name:o.OMm})))},39969:function(n,t,e){e.d(t,{j:function(){return d}});var r=e(26068),a=e.n(r),u=e(15558),i=e.n(u),o=e(96677),c=e(52315),s=e(4938),l=e(13657),d=(0,c.Ue)()((0,s.mW)((0,s.tJ)((0,l.n)((function(n,t){return{currentKbase:{uid:"",orgUid:""},kbaseResult:{data:{content:[]}},insertKbase:function(t){n((function(n){n.kbaseResult.data.content.unshift(t)}))},updateKbase:function(t){n((function(n){var e=n.kbaseResult.data.content,r=e.findIndex((function(n){return n.uid===t.uid}));-1!==r?e[r]=t:console.warn("Kbase with uid ".concat(t.uid," not found."))}))},setKbaseResult:function(t){var e;n({kbaseResult:t}),(null===(e=t.data)||void 0===e||null===(e=e.content)||void 0===e?void 0:e.length)>0&&n({currentKbase:t.data.content[0]})},setCurrentKbase:function(e){var r=t().kbaseResult.data.content,u=r.findIndex((function(n){return n.uid===e.uid}));if(-1!==u){var o=[].concat(i()(r.slice(0,u)),[e],i()(r.slice(u+1))),c=a()(a()({},t().kbaseResult),{},{data:{content:o}});n({kbaseResult:c,currentKbase:e})}else console.warn("Kbase with the specified uid not found."),n({currentKbase:e})},removeKbase:function(e){var r=t().kbaseResult.data.content,u=r.findIndex((function(n){return n.uid===e}));-1!==u?n({kbaseResult:a()(a()({},t().kbaseResult),{},{data:{content:[].concat(i()(r.slice(0,u)),i()(r.slice(u+1)))}})}):console.warn("Kbase not found in cache:",e),t().currentKbase.uid===e&&n({currentKbase:{uid:"",orgUid:""}})},deleteKbaseCache:function(){return n({},!0)}}})),{name:o.wKE})))}}]);