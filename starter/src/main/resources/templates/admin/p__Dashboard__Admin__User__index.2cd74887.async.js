"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[9234],{21544:function(e,t,d){var n=d(93454);t.Z=function(){var e=(0,n.Z)().isDarkMode;return{leftSiderStyle:{borderRight:e?"1px solid #333":"1px solid #ccc",background:e?"#141414":"#f5f5f5"},leftSiderWidth:250,headerStyle:{background:e?"#141414":"#fff"},rightSiderStyle:{borderLeft:e?"1px solid #333":"1px solid #ccc",background:e?"#141414":"#f5f5f5"},contentStyle:{minHeight:120,background:e?"#141414":"#f5f5f5",height:"100vh"}}}},62257:function(e,t,d){d.r(t);var n=d(21544),i=d(18735),a=d(43650),r=d(94031),l=(d(75271),d(5791)),s=d(52676),c=(a.Z.Header,a.Z.Footer,a.Z.Sider),f=a.Z.Content,o=[{label:(0,s.jsx)(i.FormattedMessage,{id:"data",defaultMessage:"Data"}),key:"data"}];t.default=function(){var e=(0,l.s0)(),t=(0,n.Z)(),d=t.leftSiderStyle,i=t.contentStyle;return(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(c,{style:d,children:(0,s.jsx)(r.Z,{mode:"inline",onClick:function(t){console.log("menu click ",t.key),e("/admin/user/"+t.key)},defaultSelectedKeys:["data"],defaultOpenKeys:["data"],items:o})}),(0,s.jsx)(a.Z,{children:(0,s.jsx)(f,{style:i,children:(0,s.jsx)(l.j3,{})})})]})}}}]);