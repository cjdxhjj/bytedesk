!function(){"use strict";var t="/admin/".replace(/([^/])$/,"$1/"),e=location.pathname,n=e.startsWith(t)&&decodeURI("/".concat(e.slice(t.length)));if(n){var a=document,c=a.head,r=a.createElement.bind(a),i=function(t,e,n){var a,c=e.r[t]||(null===(a=Object.entries(e.r).find((function(e){var n=e[0];return new RegExp("^".concat(n.replace(/\/:[^/]+/g,"/[^/]+").replace("/*","/.+"),"$")).test(t)})))||void 0===a?void 0:a[1]);return null==c?void 0:c.map((function(t){var a=e.f[t][1],c=e.f[t][0];return{type:c.split(".").pop(),url:"".concat(n.publicPath).concat(c),attrs:[["data-".concat(e.b),"".concat(e.p,":").concat(a)]]}}))}(n,{"p":"admin","b":"webpack","f":[["6.df52da0b.async.js",6],["p__Dashboard__Robot__Thread__index.ada553e3.async.js",49],["p__Dashboard__Knowledge__Faq__FaqData.f9c908ef.chunk.css",79],["p__Dashboard__Knowledge__Faq__FaqData.832d58e4.async.js",79],["p__Dashboard__Knowledge__Robotkb__RobotkbStatistic.c55dba5a.async.js",130],["238.c754a86a.chunk.css",238],["p__Dashboard__Robot__Message__index.cf0fc0ff.async.js",294],["p__Dashboard__Service__Monitor__index.0c0a6808.async.js",296],["p__Dashboard__Knowledge__index.acf763cc.async.js",363],["397.7e13e688.async.js",397],["p__Dashboard__Marketing__Blog__BlogStatistic.8af44d76.async.js",510],["p__Dashboard__Team__Notice__index.714bb2a5.async.js",589],["831.b2364de9.async.js",831],["p__Other__Agent__index.c39cad4f.chunk.css",1202],["p__Other__Agent__index.568626c3.async.js",1202],["p__Dashboard__Marketing__Blog__index.62c102bb.async.js",1312],["p__Dashboard__Team__Message__MessageTable.173cf684.async.js",1398],["1403.25b84aca.async.js",1403],["p__Dashboard__Service__Queue__QueueStatistic.a3b084d1.async.js",1488],["p__Dashboard__Knowledge__QuickButton__index.f4a7dde9.async.js",1608],["p__Dashboard__Service__Agent__index.5c187646.async.js",1642],["p__Auth__Register__index.71a1f3bc.async.js",1730],["p__Dashboard__Liangshibao__Course__index.e57120a8.async.js",1742],["p__Dashboard__Knowledge__QuickReply__QuickData.f9c908ef.chunk.css",1929],["p__Dashboard__Knowledge__QuickReply__QuickData.c0362d2e.async.js",1929],["p__Dashboard__Ticket__index.b9a198d3.async.js",2005],["p__Dashboard__Knowledge__Robotkb__index.71884659.async.js",2091],["p__Dashboard__Service__Thread__ThreadStatistic.c9adf062.async.js",2097],["p__Dashboard__Service__Thread__index.08da0b2e.async.js",2148],["p__Dashboard__Knowledge__QuickButton__QuickTable.cf2007f5.async.js",2157],["p__Dashboard__Knowledge__QuickReply__QuickStatistic.bc99db4b.async.js",2163],["p__Dashboard__Team__Notice__NoticeStatistic.91568987.async.js",2386],["2487.8b59e194.async.js",2487],["p__404.82f2bc17.async.js",2571],["p__Dashboard__Marketing__Blog__BlogData.f9c908ef.chunk.css",2647],["p__Dashboard__Marketing__Blog__BlogData.8a6f3621.async.js",2647],["2652.159166b7.async.js",2652],["p__Dashboard__Team__Action__ActionStatistic.59147b9d.async.js",2658],["p__Dashboard__Team__Company__index.328618a6.async.js",2701],["p__Dashboard__Team__Notice__NoticeTable.186d1250.async.js",2874],["p__Dashboard__Service__Message__index.1bcdbb7b.async.js",2949],["p__Dashboard__Team__Message__MessageStatistic.6249f0d8.async.js",2992],["p__Dashboard__Robot__Thread__ThreadStatistic.e0fe4455.async.js",3031],["p__Dashboard__Knowledge__Helpdoc__HelpdocStatistic.7c2c36b8.async.js",3109],["p__Dashboard__Marketing__Email__EmailStatistic.0ead91a5.async.js",3151],["p__Dashboard__Liangshibao__Media__index.75674ac6.async.js",3165],["p__Dashboard__Knowledge__Helpdoc__index.4c9a1f01.async.js",3364],["p__Dashboard__Robot__Thread__ThreadTable.44a5c1e0.async.js",3398],["p__Dashboard__Service__Thread__ThreadTable.7fe09357.async.js",3537],["p__Dashboard__Service__LeaveMsg__index.5e434396.async.js",3621],["3735.9e9bfd0a.async.js",3735],["3812.7a224a05.async.js",3812],["p__Dashboard__Quartz__index.2f2871f6.chunk.css",3848],["p__Dashboard__Quartz__index.93244770.async.js",3848],["3892.245d2e26.async.js",3892],["p__Auth__Forget__index.f838d730.async.js",3915],["4069.ea13e6a5.async.js",4069],["p__Dashboard__Team__Role__index.00ae47a5.async.js",4325],["p__Dashboard__Team__Action__ActionTable.6c74d8d2.async.js",4376],["p__Dashboard__Service__Message__MessageStatistic.dd3d1a3d.async.js",4460],["4664.b7419c69.async.js",4664],["p__Dashboard__Knowledge__QuickButton__QuickStatistic.280c8013.async.js",4721],["4841.dc546614.async.js",4841],["5030.e00d0dc4.async.js",5030],["5102.b855897b.async.js",5102],["p__Dashboard__Crm__index.d1c9f5d0.async.js",5230],["p__Dashboard__Meiyu__index.aefb0868.async.js",5306],["p__Dashboard__Doceditor__index.532c6176.async.js",5488],["p__Dashboard__Crm__CrmStatistic.27b8c392.async.js",5520],["p__Dashboard__Liangshibao__Category__index.b565d17a.async.js",5522],["p__Dashboard__Service__Rate__index.a912bf27.async.js",5684],["5718.a4364a18.async.js",5718],["p__Dashboard__Knowledge__QuickReply__index.d7e88823.async.js",6037],["t__plugin-layout__Layout.5012e1ab.chunk.css",6301],["t__plugin-layout__Layout.e2188746.async.js",6301],["6390.003dda2b.async.js",6390],["p__Admin.4637d649.async.js",6551],["p__Dashboard__Service__Queue__QueueTable.691e15a3.async.js",6668],["p__Dashboard__Setting__Server__index.b396be1f.async.js",6676],["p__Dashboard__Robot__index.cb670aa5.chunk.css",6693],["p__Dashboard__Robot__index.2ebd2960.async.js",6693],["p__Dashboard__Setting__Basic__index.14658bc0.async.js",6766],["p__Dashboard__Service__Rate__RateTable.7f2993b6.async.js",6900],["p__Dashboard__Knowledge__Helpdoc__HelpdocData.f9c908ef.chunk.css",7235],["p__Dashboard__Knowledge__Helpdoc__HelpdocData.1e4d6709.async.js",7235],["p__Dashboard__Service__Thread__ThreadMonitor.27e1ff1a.async.js",7270],["p__Dashboard__Setting__index.c9c9f032.async.js",7469],["7688.ca1b4d49.async.js",7688],["p__Dashboard__Service__Message__MessageTable.dca09341.async.js",7788],["p__Dashboard__Team__Member__index.f9c908ef.chunk.css",7960],["p__Dashboard__Team__Member__index.4e8e74e8.async.js",7960],["p__Dashboard__Knowledge__Faq__FaqStatistic.641f1022.async.js",8041],["8045.8e97b233.async.js",8045],["8096.8c16ed67.async.js",8096],["p__Dashboard__Marketing__index.3daeaa72.async.js",8164],["p__Welcome.e4b9593d.async.js",8185],["p__Dashboard__Service__LeaveMsg__LeaveMsgTable.bf3161ac.async.js",8326],["p__Dashboard__Zhaobiao__index.6ef64d0c.async.js",8327],["p__Dashboard__Service__Thread__ThreadSummary.144b1e4a.async.js",8390],["p__Dashboard__Service__LeaveMsg__LeaveMsgStatistic.2e95a860.async.js",8412],["p__Dashboard__Tiku__index.6dc35ee2.async.js",8455],["8474.83f9d299.async.js",8474],["p__Dashboard__Team__Action__index.7908ff5a.async.js",8483],["p__Dashboard__Team__Message__index.afb2bdcd.async.js",8491],["p__Dashboard__Robot__Message__MessageStatistic.5f861d7e.async.js",8523],["8541.cfb77053.async.js",8541],["p__Dashboard__Knowledge__Faq__index.f4dd58fb.async.js",8801],["p__Dashboard__Marketing__Email__index.f6d21ffc.async.js",8873],["p__Dashboard__Service__Rate__RateStatistic.ffa71ffe.async.js",9043],["p__Dashboard__Robot__Message__MessageTable.b912b757.async.js",9199],["p__Dashboard__Setting__Profile__index.6007a40e.async.js",9290],["p__Auth__Login__index.cf39467f.async.js",9368],["p__Dashboard__Marketing__Email__EmailData.f9c908ef.chunk.css",9590],["p__Dashboard__Marketing__Email__EmailData.23183fa7.async.js",9590],["p__Dashboard__Service__Queue__index.e2064898.async.js",9614],["p__Dashboard__Knowledge__Robotkb__RobotkbData.f9c908ef.chunk.css",9702],["p__Dashboard__Knowledge__Robotkb__RobotkbData.ca7deaf3.async.js",9702],["p__Dashboard__Crm__CrmTable.a934bfcb.async.js",9710],["9781.4ca0421a.async.js",9781],["p__Dashboard__Service__Workgroup__index.a680d5bc.async.js",9828],["p__Other__Chaty__index.c39cad4f.chunk.css",9858],["p__Other__Chaty__index.733696bf.async.js",9858],["p__Dashboard__Team__Group__index.5c118898.async.js",9870],["9905.1e635abd.async.js",9905]],"r":{"/*":[33,123],"/":[17,36,63,73,74,123],"/welcome":[95,17,36,63,73,74,123],"/kb":[8,17,36,63,73,74,123],"/tiket":[25,17,36,63,73,74,123],"/marketing":[94,17,36,63,73,74,123],"/crm":[65,17,36,63,73,74,123],"/meiyu":[0,17,32,54,56,63,64,66,87,92,93,101,123,36,73,74],"/tiku":[0,17,54,56,63,64,87,92,93,100,101,105,123,36,73,74],"/zhaobiao":[0,17,54,56,63,64,87,92,93,97,101,105,123,36,73,74],"/quartz":[0,17,52,53,54,56,63,64,87,92,93,101,123,36,73,74],"/setting":[86,17,36,63,73,74,123],"/doceditor":[0,5,64,67],"/chat":[120,121],"/agent":[13,14],"/auth/login":[0,9,12,56,63,64,87,93,111],"/auth/register":[0,12,21,56,63,64,87],"/auth/forget":[55],"/team/member":[0,17,54,56,63,64,87,89,90,92,93,101,123,36,73,74],"/team/role":[57,93,17,36,63,73,74,123],"/team/group":[93,122,17,36,63,73,74,123],"/team/message":[103,17,36,63,73,74,123],"/team/action":[102,17,36,63,73,74,123],"/team/notice":[11,17,36,63,73,74,123],"/team/company":[0,38,56,63,64,87,118,17,36,73,74,123],"/ai/robot":[0,17,32,51,54,56,60,63,64,79,80,87,92,93,101,118,123,36,73,74],"/ai/thread":[1,17,36,63,73,74,123],"/ai/message":[6,17,36,63,73,74,123],"/cs/agent":[0,20,32,56,60,63,64,71,87,92,93,118,17,36,73,74,123],"/cs/wgroup":[0,32,56,60,63,64,71,87,92,93,118,119,17,36,73,74,123],"/cs/queue":[114,17,36,63,73,74,123],"/cs/thread":[28,17,36,63,73,74,123],"/cs/message":[40,17,36,63,73,74,123],"/cs/leavemsg":[49,17,36,63,73,74,123],"/cs/rate":[70,17,36,63,73,74,123],"/cs/monitor":[7,17,36,63,73,74,123],"/kb/helpdoc":[46,8,17,36,63,73,74,123],"/kb/robot":[26,8,17,36,63,73,74,123],"/kb/faq":[106,8,17,36,63,73,74,123],"/kb/quickbutton":[19,8,17,36,63,73,74,123],"/kb/quickreply":[72,8,17,36,63,73,74,123],"/marketing/blog":[15,94,17,36,63,73,74,123],"/marketing/email":[107,94,17,36,63,73,74,123],"/crm/data":[0,17,54,56,63,64,87,92,93,101,105,117,123,65,36,73,74],"/crm/statistic":[68,65,17,36,63,73,74,123],"/liangshibao/category":[0,17,54,56,63,64,69,87,92,93,101,123,36,73,74],"/liangshibao/course":[0,17,22,54,56,63,64,87,92,93,101,123,36,73,74],"/liangshibao/media":[0,17,45,54,56,63,64,87,92,93,101,123,36,73,74],"/setting/profile":[0,56,63,64,87,110,118,86,17,36,73,74,123],"/setting/basic":[56,81,86,17,36,63,73,74,123],"/setting/server":[0,9,64,78,86,17,36,63,73,74,123],"/admin/sub-page":[0,50,63,76,93,101,17,36,73,74,123],"/team/message/data":[0,16,17,54,56,63,64,87,92,93,101,105,123,103,36,73,74],"/team/message/statistic":[41,103,17,36,63,73,74,123],"/team/action/data":[0,17,54,56,58,63,64,87,92,93,101,123,102,36,73,74],"/team/action/statistic":[37,102,17,36,63,73,74,123],"/team/notice/data":[0,17,39,54,56,63,64,87,92,93,101,105,123,11,36,73,74],"/team/notice/statistic":[31,11,17,36,63,73,74,123],"/ai/thread/data":[0,17,47,54,56,63,64,87,92,93,101,123,1,36,73,74],"/ai/thread/statistic":[42,1,17,36,63,73,74,123],"/ai/message/data":[0,17,54,56,63,64,87,92,93,101,105,109,123,6,36,73,74],"/ai/message/statistic":[104,6,17,36,63,73,74,123],"/cs/queue/data":[0,17,54,56,63,64,77,87,92,93,101,123,114,36,73,74],"/cs/queue/statistic":[18,114,17,36,63,73,74,123],"/cs/thread/data":[0,17,48,54,56,63,64,87,92,93,101,123,28,36,73,74],"/cs/thread/monitor":[85,28,17,36,63,73,74,123],"/cs/thread/statistic":[27,28,17,36,63,73,74,123],"/cs/thread/summary":[0,17,54,56,63,64,87,92,93,98,101,123,28,36,73,74],"/cs/message/data":[0,17,54,56,63,64,87,88,92,93,101,105,123,40,36,73,74],"/cs/message/statistic":[59,40,17,36,63,73,74,123],"/cs/leavemsg/data":[0,17,54,56,63,64,87,92,93,96,101,105,123,49,36,73,74],"/cs/leavemsg/statistic":[99,49,17,36,63,73,74,123],"/cs/rate/data":[0,17,54,56,63,64,82,87,92,93,101,105,123,70,36,73,74],"/cs/rate/statistic":[108,70,17,36,63,73,74,123],"/kb/helpdoc/data":[0,17,54,56,62,63,64,83,84,87,92,93,101,123,46,8,36,73,74],"/kb/helpdoc/statistic":[43,46,8,17,36,63,73,74,123],"/kb/robot/data":[0,17,54,56,62,63,64,87,92,93,101,115,116,123,26,8,36,73,74],"/kb/robot/statistic":[4,26,8,17,36,63,73,74,123],"/kb/faq/data":[0,2,3,17,54,56,62,63,64,87,92,93,101,123,106,8,36,73,74],"/kb/faq/statistic":[91,106,8,17,36,63,73,74,123],"/kb/quickbutton/data":[0,17,29,54,56,63,64,87,92,93,101,123,19,8,36,73,74],"/kb/quickbutton/statistic":[61,19,8,17,36,63,73,74,123],"/kb/quickreply/data":[0,17,23,24,54,56,62,63,64,87,92,93,101,123,72,8,36,73,74],"/kb/quickreply/statistic":[30,72,8,17,36,63,73,74,123],"/marketing/blog/data":[0,17,34,35,54,56,62,63,64,87,92,93,101,123,15,94,36,73,74],"/marketing/blog/statistic":[10,15,94,17,36,63,73,74,123],"/marketing/email/data":[0,17,54,56,62,63,64,87,92,93,101,112,113,123,107,94,36,73,74],"/marketing/email/statistic":[44,107,94,17,36,63,73,74,123]}},{publicPath:"/admin/"});null==i||i.forEach((function(t){var e,n=t.type,a=t.url;if("js"===n)(e=r("script")).src=a,e.async=!0;else{if("css"!==n)return;(e=r("link")).href=a,e.rel="preload",e.as="style"}t.attrs.forEach((function(t){e.setAttribute(t[0],t[1]||"")})),c.appendChild(e)}))}}();