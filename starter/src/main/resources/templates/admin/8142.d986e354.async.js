"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[8142],{78142:function(d,n,t){t.r(n),t.d(n,{protobuf:function(){return o}});function r(e){return new RegExp("^(("+e.join(")|(")+"))\\b","i")}var i=["package","message","import","syntax","required","optional","repeated","reserved","default","extensions","packed","bool","bytes","double","enum","float","string","int32","int64","uint32","uint64","sint32","sint64","fixed32","fixed64","sfixed32","sfixed64","option","service","rpc","returns"],u=r(i),f=new RegExp("^[_A-Za-z\xA1-\uFFFF][_A-Za-z0-9\xA1-\uFFFF]*");function a(e){return e.eatSpace()?null:e.match("//")?(e.skipToEnd(),"comment"):e.match(/^[0-9\.+-]/,!1)&&(e.match(/^[+-]?0x[0-9a-fA-F]+/)||e.match(/^[+-]?\d*\.\d+([EeDd][+-]?\d+)?/)||e.match(/^[+-]?\d+([EeDd][+-]?\d+)?/))?"number":e.match(/^"([^"]|(""))*"/)||e.match(/^'([^']|(''))*'/)?"string":e.match(u)?"keyword":e.match(f)?"variable":(e.next(),null)}const o={name:"protobuf",token:a,languageData:{autocomplete:i}}}}]);