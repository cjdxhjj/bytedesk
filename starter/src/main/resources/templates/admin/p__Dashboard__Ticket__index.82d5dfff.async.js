"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[2005],{21544:function(e,t,l){var i=l(93454);t.Z=function(){var e=(0,i.Z)().isDarkMode;return{leftSiderStyle:{borderRight:e?"1px solid #333":"1px solid #ccc",background:e?"#141414":"#f5f5f5"},leftSiderWidth:250,headerStyle:{background:e?"#141414":"#fff"},rightSiderStyle:{borderLeft:e?"1px solid #333":"1px solid #ccc",background:e?"#141414":"#f5f5f5"},contentStyle:{minHeight:120,background:e?"#141414":"#f5f5f5",height:"100vh"}}}},27063:function(e,t,l){l.r(t);var i=l(21544),n=l(43650),r=l(94031),c=(l(75271),l(52676)),d=(n.Z.Header,n.Z.Footer,n.Z.Sider),o=n.Z.Content,f=[{label:"待接收",key:"waiting"},{label:"处理中",key:"processing"},{label:"已拒绝",key:"reject"},{label:"已完成",key:"completed"}];t.default=function(){var e=(0,i.Z)(),t=e.leftSiderStyle,l=e.contentStyle;return(0,c.jsxs)(n.Z,{children:[(0,c.jsx)(d,{style:t,children:(0,c.jsx)(r.Z,{mode:"inline",onClick:function(e){console.log("menu click ",e.key)},defaultSelectedKeys:["article"],defaultOpenKeys:["article","file"],items:f})}),(0,c.jsx)(n.Z,{children:(0,c.jsx)(o,{style:l,children:"工单管理后台"})})]})}}}]);