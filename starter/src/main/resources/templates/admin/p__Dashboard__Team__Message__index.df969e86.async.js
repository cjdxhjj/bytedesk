"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[8491],{77154:function(u,d,e){var r=e(39825);function n(){var a=(0,r.Z)(),s=a.isDarkMode,i=250,l={borderRight:s?"1px solid #333":"1px solid #ccc",background:s?"#141414":"#f5f5f5"},t={background:s?"#141414":"#fff"},o={borderLeft:s?"1px solid #333":"1px solid #ccc",background:s?"#141414":"#f5f5f5"},_={minHeight:120,background:s?"#141414":"#f5f5f5"};return{leftSiderStyle:l,leftSiderWidth:i,headerStyle:t,rightSiderStyle:o,contentStyle:_}}d.Z=n},27824:function(u,d,e){e.r(d);var r=e(77154),n=e(86745),a=e(21612),s=e(50136),i=e(67294),l=e(96974),t=e(85893),o=a.Z.Header,_=a.Z.Footer,M=a.Z.Sider,S=a.Z.Content,E=[{label:(0,t.jsx)(n.FormattedMessage,{id:"data",defaultMessage:"Data"}),key:"data"},{label:(0,t.jsx)(n.FormattedMessage,{id:"statistic",defaultMessage:"Statistic"}),key:"statistic"}],y=function(){var v=(0,l.s0)(),c=(0,r.Z)(),m=c.leftSiderStyle,D=c.contentStyle,h=function(f){console.log("menu click ",f.key),v("/team/message/"+f.key)};return(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(M,{style:m,children:(0,t.jsx)(s.Z,{mode:"inline",onClick:h,defaultSelectedKeys:["data"],defaultOpenKeys:["data","statistic"],items:E})}),(0,t.jsx)(a.Z,{children:(0,t.jsx)(S,{style:D,children:(0,t.jsx)(l.j3,{})})})]})};d.default=y}}]);