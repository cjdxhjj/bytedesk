"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[8152],{77154:function(f,n,e){var i=e(39825);function l(){var d=(0,i.Z)(),a=d.isDarkMode,_=250,s={borderRight:a?"1px solid #333":"1px solid #ccc",background:a?"#141414":"#f5f5f5"},t={background:a?"#141414":"#fff"},r={borderLeft:a?"1px solid #333":"1px solid #ccc",background:a?"#141414":"#f5f5f5"},o={minHeight:120,background:a?"#141414":"#f5f5f5",height:"100vh"};return{leftSiderStyle:s,leftSiderWidth:_,headerStyle:t,rightSiderStyle:r,contentStyle:o}}n.Z=l},35049:function(f,n,e){e.r(n);var i=e(77154),l=e(86745),d=e(21612),a=e(50136),_=e(67294),s=e(96974),t=e(85893),r=d.Z.Sider,o=d.Z.Content,S=[{label:(0,t.jsx)(l.FormattedMessage,{id:"data",defaultMessage:"Data"}),key:"data"},{label:(0,t.jsx)(l.FormattedMessage,{id:"statistic",defaultMessage:"Statistic"}),key:"statistic"}],M=function(){var h=(0,s.s0)(),u=(0,i.Z)(),E=u.leftSiderStyle,y=u.contentStyle,v=function(c){console.log("menu click ",c.key),h("/admin/push/"+c.key)};return(0,t.jsxs)(d.Z,{children:[(0,t.jsx)(r,{style:E,children:(0,t.jsx)(a.Z,{mode:"inline",onClick:v,defaultSelectedKeys:["data"],defaultOpenKeys:["data"],items:S})}),(0,t.jsx)(d.Z,{children:(0,t.jsx)(o,{style:y,children:(0,t.jsx)(s.j3,{})})})]})};n.default=M}}]);