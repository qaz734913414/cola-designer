(function(t){function e(e){for(var i,a,r=e[0],c=e[1],s=e[2],u=0,d=[];u<r.length;u++)a=r[u],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&d.push(n[a][0]),n[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);p&&p(e);while(d.length)d.shift()();return l.push.apply(l,s||[]),o()}function o(){for(var t,e=0;e<l.length;e++){for(var o=l[e],i=!0,r=1;r<o.length;r++){var c=o[r];0!==n[c]&&(i=!1)}i&&(l.splice(e--,1),t=a(a.s=o[0]))}return t}var i={},n={app:0},l=[];function a(e){if(i[e])return i[e].exports;var o=i[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=i,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(o,i,function(e){return t[e]}.bind(null,i));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var s=0;s<r.length;s++)e(r[s]);var p=c;l.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";o("85ec")},"10a9":function(t,e,o){t.exports=o.p+"img/test.49f05c8e.png"},"37d4":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e623"),o("e379"),o("5dc8"),o("37e1");var i=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},l=[],a={name:"App"},r=a,c=(o("034f"),o("2877")),s=Object(c["a"])(r,n,l,!1,null,null,null),p=s.exports,u=o("5c96"),d=o.n(u),m=(o("0fae"),o("313e")),h=o.n(m),f=o("8c4f"),b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-row",{staticClass:"top"},[i("el-col",{staticStyle:{height:"100%",overflow:"hidden"},attrs:{span:2,align:"right"}},[i("el-image",{staticStyle:{width:"45px",height:"45px",padding:"0",margin:"0"},attrs:{src:o("cf05"),fit:"fill"}})],1),i("el-col",{attrs:{span:3}},[i("span",{staticClass:"el-icon-box lg",staticStyle:{width:"30px"}}),i("span",[t._v("Cola Designer")])]),i("el-col",{attrs:{span:19}},[i("el-button",{staticStyle:{margin:"10px 10px",background:"#49586e",color:"#fff",float:"right"},attrs:{size:"small"},on:{click:t.preview}},[t._v("预览")]),i("el-button",{staticStyle:{margin:"10px 5px",background:"#d5d9e2",float:"right"},attrs:{size:"small"},on:{click:t.submitDesign}},[t._v("保存")]),i("div",{staticClass:"configBtn",staticStyle:{float:"right",margin:"4px 10px"},on:{click:t.showConfigForm}},[i("i",{staticClass:"el-icon-setting",staticStyle:{"font-size":"22px"}})]),i("el-popover",{staticStyle:{float:"right",margin:"4px 10px"},attrs:{placement:"bottom",title:"已选组件",width:"200",trigger:"click"}},[i("div",{staticStyle:{overflow:"auto"},style:{maxHeight:t.conHeight-30+"px"}},t._l(t.cacheComponents,(function(e,o){return i("el-row",{key:e.cptTag+o+"x",staticClass:"selectedItem"},[i("el-col",{staticStyle:{"text-align":"center"},attrs:{span:4}},[i("i",{class:e.icon})]),i("el-col",{attrs:{span:20}},[t._v(t._s(e.cptName))])],1)})),1),i("i",{staticClass:"el-icon-tickets",staticStyle:{"font-size":"22px"},attrs:{slot:"reference"},slot:"reference"})])],1)],1),i("div",{style:{height:t.windowHeight-50+"px"}},[i("div",{staticStyle:{float:"left",height:"100%"},style:{width:t.cptBarWidth+"px"}},[i("component-bar",{on:{dragStart:t.dragStart}})],1),i("div",{staticStyle:{float:"left"},style:{width:t.windowWidth-t.cptBarWidth-10+"px"}},[i("div",{staticClass:"webContainer",style:{width:t.conWidth+"px",height:t.conHeight+"px"},on:{dragover:t.allowDrop,drop:t.drop}},t._l(t.cacheComponents,(function(e,o){return i("div",{key:e.cptTag+o,staticClass:"cptDiv",style:{width:Math.round(t.containerScale*e.cptWidth)+"px",height:Math.round(t.containerScale*e.cptHeight)+"px",top:Math.round(t.containerScale*e.cptY)+"px",left:Math.round(t.containerScale*e.cptX)+"px",zIndex:e.cptZ},attrs:{cptIndex:o},on:{click:function(i){return t.showConfigBar(e,o)}}},[i("div",{directives:[{name:"dragParent",rawName:"v-dragParent"}],staticStyle:{width:"100%",height:"100%",overflow:"auto"}},[i(e.cptTag,{tag:"comment",attrs:{width:Math.round(t.containerScale*e.cptWidth),height:Math.round(t.containerScale*e.cptHeight),option:e.option}})],1),i("div",{staticClass:"delTag",on:{click:function(o){return o.stopPropagation(),t.delCpt(e)}}},[i("i",{staticClass:"el-icon-delete"})]),i("div",{directives:[{name:"resize",rawName:"v-resize"}],staticClass:"resizeTag"})])})),0)])]),i("config-bar",{directives:[{name:"show",rawName:"v-show",value:t.configBarShow,expression:"configBarShow"}],ref:"configBar",attrs:{currentCpt:t.currentCpt},on:{change:t.changeCpt,close:t.closeConfigBar}}),i("config-form",{ref:"configForm"})],1)},g=[],x=(o("a434"),o("b0c0"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-row",{staticStyle:{width:"100%",height:"100%",background:"#3F4B5F","z-index":"2000",color:"#fff",overflow:"auto"}},t._l(t.cptGroupKeys,(function(e){return o("div",{key:e.key},[o("div",{staticClass:"hoverPointer",staticStyle:{"line-height":"45px"},on:{click:function(t){e.opened=!e.opened}}},[o("div",{staticStyle:{display:"inline-block","text-indent":"1em",width:"170px"}},[t._v(t._s(e.name))]),o("div",{staticStyle:{display:"inline-block"}},[o("i",{class:e.opened?"el-icon-arrow-down":"el-icon-arrow-right"})])]),o("el-row",{directives:[{name:"show",rawName:"v-show",value:e.opened,expression:"group.opened"}],attrs:{gutter:2}},t._l(t.cptGroups[e.key],(function(e,i){return o("el-col",{key:e.name+i,attrs:{span:12}},[o("div",{staticStyle:{"background-color":"#49586E",height:"70px","text-align":"center","margin-top":"2px"},attrs:{draggable:"true",config:JSON.stringify(e)},on:{dragstart:t.dragStart}},[o("div",{staticStyle:{"font-size":"20px","line-height":"40px"}},[o("i",{class:e.icon?e.icon:"el-icon-question"})]),o("div",{staticStyle:{"font-size":"13px"}},[t._v(t._s(e.name))])])])})),1)],1)})),0)}),v=[],w=(o("159b"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("el-form",{attrs:{"label-position":t.option.labelPosition,"label-width":t.option.labelWidth+"px",size:t.option.formSize}},[o("el-form-item",{attrs:{label:t.option.label}},[o("el-input",{attrs:{type:t.option.type,placeholder:t.option.placeholderValue},model:{value:t.option.value,callback:function(e){t.$set(t.option,"value",e)},expression:"option.value"}})],1)],1)],1)}),y=[],C={name:"cpt-input",title:"输入框",icon:"el-icon-edit-outline",initWidth:200,initHeight:50,group:"element",props:{option:Object}},S=C,k=Object(c["a"])(S,w,y,!1,null,"4f9bc1e0",null),$=k.exports,_=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{style:{textAlign:t.option.textAlign,color:t.option.textColor,fontSize:t.option.textSize+"px",fontStyle:t.option.fontStyle,fontWeight:t.option.fontWeight,lineHeight:t.option.textLineHeight+"px",fontFamily:t.option.textFamily,textDecoration:t.option.textDecoration},on:{click:t.redirect}},[t._v(" "+t._s(t.option.text)+" ")])},O=[],L={name:"cpt-text",title:"文字框",icon:"el-icon-chat-line-square",initWidth:150,initHeight:30,group:"element",props:{option:Object},data:function(){return{}},methods:{redirect:function(){this.option.url&&window.open(this.option.url)}}},W=L,B=Object(c["a"])(W,_,O,!1,null,"ef936140",null),z=B.exports,T=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{width:"100%",height:"100%","text-align":"center"}},[o("el-carousel",{attrs:{height:t.height+"px"}},t._l(t.option.imgUrls,(function(e){return o("el-carousel-item",{key:e,attrs:{trigger:t.option.trigger}},[o("el-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:e,fit:t.option.fit}})],1)})),1)],1)},j=[],H=(o("a9e3"),{name:"cpt-carousel",title:"走马灯",icon:"el-icon-money",group:"element",props:{height:{type:Number,default:168},option:Object}}),D=H,P=Object(c["a"])(D,T,j,!1,null,"d2a04a20",null),N=P.exports,E=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{height:"100%"}},[o("el-button",{staticStyle:{width:"100%",height:"100%"},style:{background:t.option.bgColor,color:t.option.textColor,borderRadius:t.option.radius+"px"},on:{click:function(e){return t.redirect()}}},[t._v(" "+t._s(t.option.text)+" ")])],1)},M=[],A={name:"cpt-button",title:"按钮",icon:"el-icon-thumb",initWidth:100,initHeight:30,group:"element",props:{option:Object},methods:{redirect:function(){this.option.url&&window.open(this.option.url)}}},F=A,I=Object(c["a"])(F,E,M,!1,null,"372a2200",null),X=I.exports,Y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{width:"100%",height:"100%"}},[o("el-image",{staticStyle:{width:"100%",height:"100%"},attrs:{"preview-src-list":t.option.preview?[t.option.url]:[],src:t.option.url,fit:t.option.fit}})],1)},G=[],V={name:"cpt-image",title:"图片",icon:"el-icon-picture-outline",group:"element",props:{option:Object},data:function(){return{}}},U=V,Z=Object(c["a"])(U,Y,G,!1,null,"6f1b68c4",null),R=Z.exports,J=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{width:"100%",height:"100%"},attrs:{id:t.uuid}})},K=[],q=(o("ac1f"),o("1276"),{name:"cpt-chart-column",title:"柱状图",icon:"el-icon-s-data",initWidth:256,initHeight:191,group:"echarts",props:{width:Number,option:Object},data:function(){return{uuid:"",chartOption:{},chart:void 0}},watch:{option:{handler:function(t,e){this.loadChart(e)},deep:!0},width:function(){this.chart.resize()}},created:function(){this.uuid=o("e144").v1()},mounted:function(){this.chart=this.$echarts.init(document.getElementById(this.uuid)),this.loadChart(this.option)},methods:{loadChart:function(t){var e=this;e.chartOption={color:t.barColor,title:{text:t.chartTitle,textStyle:{color:t.titleTextColor},left:t.titleLeft,top:t.titleTop},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:{type:"category",data:t.xData.split(","),axisLabel:{color:t.xLabelColor},axisLine:{lineStyle:{color:t.xLineColor}}},yAxis:{type:"value",axisLabel:{color:t.yLabelColor},axisLine:{lineStyle:{color:t.yLineColor}},axisTick:{show:t.yTickShow},splitLine:{show:t.yGridLineShow}},series:[{data:t.yData.split(","),type:"bar",showBackground:t.barBgShow,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)"},barWidth:t.barWidth,itemStyle:{normal:{barBorderRadius:t.barBorderRadius}}}]},e.chart.setOption(e.chartOption)}}}),Q=q,tt=Object(c["a"])(Q,J,K,!1,null,"400a3b5a",null),et=tt.exports,ot=[$,z,N,X,R,et],it={};ot.forEach((function(t){i["default"].component(t.name,t);var e=t.title?t.title:"未命名组件",o=t.initWidth?t.initWidth:256,n=t.initHeight?t.initHeight:168,l=t.group?t.group:"default";it[l]=it[l]?it[l]:[],it[l].push({group:l,name:e,tag:t.name,icon:t.icon,initWidth:o,initHeight:n})}));var nt=it,lt={element:{name:"基础",icon:"",opened:!0,options:{"cpt-button-option":{text:"按钮1",url:"",bgColor:"#409eff",textColor:"#fff",radius:6},"cpt-text-option":{text:"普通文本",url:"",textColor:"#4BB344",textSize:25,fontWeight:"bold",textLineHeight:40,textFamily:"微软雅黑",textAlign:"center",fontStyle:"normal",textDecoration:"none"},"cpt-input-option":{label:"姓名",placeholderValue:"请输入姓名",value:"",type:"text",labelWidth:80,labelPosition:"left",formSize:"mini"},"cpt-image-option":{url:o("b25a"),fit:"fill",preview:!1},"cpt-carousel-option":{trigger:"hover",imgUrls:[o("10a9"),o("75bc")],fit:"cover"}}},echarts:{name:"图表",icon:"",opened:!0,options:{"cpt-chart-column-option":{chartTitle:"标题一",titleLeft:"center",titleTop:10,titleTextColor:"#aaa",xLabelColor:"#0a7eea",xLineColor:"#aaa",yLabelColor:"#0bd124",yLineColor:"#aaa",yGridLineShow:!1,yTickShow:!0,barBgShow:!1,barBorderRadius:5,barColor:"#0775eb",barWidth:24,xData:"Mon,Tue,Wed,Thu,Fri,Sat,Sun",yData:"120,200,150,80,70,110,130"}}}},at=lt,rt={name:"componentBar",data:function(){return{cptGroups:nt,cptOptions:at,cptGroupKeys:[],openedKey:""}},created:function(){for(var t in nt)this.cptGroupKeys.push({key:t,name:at[t].name,icon:at[t].icon,opened:at[t].opened});this.openedKey=this.cptGroupKeys[0]},methods:{dragStart:function(t){var e=t.currentTarget.cloneNode(!0);this.$emit("dragStart",e)}}},ct=rt,st=(o("ae8a"),Object(c["a"])(ct,x,v,!1,null,"8bfecd00",null)),pt=st.exports,ut=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-row",{staticStyle:{position:"fixed",width:"260px",height:"400px","z-index":"2010",bottom:"60px",right:"20px","border-radius":"6px",background:"rgba(228,230,236,.8)",border:"1px solid #3F4B5F"}},[o("el-row",{directives:[{name:"drag",rawName:"v-drag"}],staticClass:"cptTitle"},[o("el-col",{attrs:{span:21}},[o("div",[t._v("组件属性")])]),o("el-col",{attrs:{span:3}},[o("div",{staticClass:"closeItem",on:{click:t.closeBar}},[o("i",{staticClass:"el-icon-close"})])])],1),o("el-tabs",{attrs:{stretch:!0},model:{value:t.configTab,callback:function(e){t.configTab=e},expression:"configTab"}},[o("el-tab-pane",{attrs:{label:"基础属性",name:"basic"}},[o("div",{staticStyle:{width:"200px",margin:"0 auto"}},[o("el-row",{staticStyle:{padding:"10px 6px 0 6px"}},[t._v(" 宽度："),o("el-input-number",{attrs:{min:20,max:2e3,size:"small"},on:{change:t.changeConfig},model:{value:t.currentPosition.cptWidth,callback:function(e){t.$set(t.currentPosition,"cptWidth",e)},expression:"currentPosition.cptWidth"}})],1),o("el-row",{staticStyle:{padding:"10px 6px 0 6px"}},[t._v(" 高度："),o("el-input-number",{attrs:{min:20,max:1500,size:"small"},on:{change:t.changeConfig},model:{value:t.currentPosition.cptHeight,callback:function(e){t.$set(t.currentPosition,"cptHeight",e)},expression:"currentPosition.cptHeight"}})],1),o("el-row",{staticStyle:{padding:"10px 6px 0 6px"}},[t._v(" X 轴："),o("el-input-number",{attrs:{min:-500,max:2500,size:"small"},on:{change:t.changeConfig},model:{value:t.currentPosition.cptX,callback:function(e){t.$set(t.currentPosition,"cptX",e)},expression:"currentPosition.cptX"}})],1),o("el-row",{staticStyle:{padding:"10px 6px 0 6px"}},[t._v(" Y 轴："),o("el-input-number",{attrs:{min:-500,size:"small"},on:{change:t.changeConfig},model:{value:t.currentPosition.cptY,callback:function(e){t.$set(t.currentPosition,"cptY",e)},expression:"currentPosition.cptY"}})],1),o("el-row",{staticStyle:{padding:"10px 6px 0 6px"}},[t._v(" Z 轴："),o("el-input-number",{attrs:{min:-500,max:1500,size:"small"},on:{change:t.changeConfig},model:{value:t.currentPosition.cptZ,callback:function(e){t.$set(t.currentPosition,"cptZ",e)},expression:"currentPosition.cptZ"}})],1)],1)]),o("el-tab-pane",{attrs:{label:"自定义属性",name:"custom"}},[o("div",{directives:[{name:"show",rawName:"v-show",value:!t.customOptionShow,expression:"!customOptionShow"}],staticStyle:{"text-align":"center"}},[t._v("未注册自定义组件属性")]),t.customOptionShow?o("div",{staticClass:"customForm"},[o(t.currentCpt.cptTag+"-option",{tag:"comment",attrs:{option:t.currentCpt.option}})],1):t._e()])],1)],1)},dt=[],mt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("el-form",{attrs:{"label-width":"80px",size:"mini"}},[o("el-form-item",{attrs:{label:"文本"}},[o("el-input",{model:{value:t.option.text,callback:function(e){t.$set(t.option,"text",e)},expression:"option.text"}})],1),o("el-form-item",{attrs:{label:"跳转路径"}},[o("el-input",{model:{value:t.option.url,callback:function(e){t.$set(t.option,"url",e)},expression:"option.url"}})],1),o("el-form-item",{attrs:{label:"背景颜色"}},[o("el-color-picker",{attrs:{"show-alpha":""},model:{value:t.option.bgColor,callback:function(e){t.$set(t.option,"bgColor",e)},expression:"option.bgColor"}})],1),o("el-form-item",{attrs:{label:"文本颜色"}},[o("el-color-picker",{attrs:{"show-alpha":""},model:{value:t.option.textColor,callback:function(e){t.$set(t.option,"textColor",e)},expression:"option.textColor"}})],1),o("el-form-item",{attrs:{label:"圆角"}},[o("el-input-number",{attrs:{min:0,max:500},model:{value:t.option.radius,callback:function(e){t.$set(t.option,"radius",e)},expression:"option.radius"}})],1)],1)],1)},ht=[],ft={name:"cpt-button-option",props:{option:Object},data:function(){return{}}},bt=ft,gt=Object(c["a"])(bt,mt,ht,!1,null,"4cd9dc9c",null),xt=gt.exports,vt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("el-form",{attrs:{"label-width":"80px",size:"mini"}},[o("el-form-item",{attrs:{label:"文本"}},[o("el-input",{model:{value:t.option.text,callback:function(e){t.$set(t.option,"text",e)},expression:"option.text"}})],1),o("el-form-item",{attrs:{label:"颜色"}},[o("el-color-picker",{attrs:{"show-alpha":""},model:{value:t.option.textColor,callback:function(e){t.$set(t.option,"textColor",e)},expression:"option.textColor"}})],1),o("el-form-item",{attrs:{label:"加粗"}},[o("el-select",{model:{value:t.option.fontWeight,callback:function(e){t.$set(t.option,"fontWeight",e)},expression:"option.fontWeight"}},[o("el-option",{attrs:{label:"更细",value:"lighter"}}),o("el-option",{attrs:{label:"正常",value:"normal"}}),o("el-option",{attrs:{label:"加粗",value:"bold"}}),o("el-option",{attrs:{label:"更粗(存在兼容问题)",value:"bolder"}})],1)],1),o("el-form-item",{attrs:{label:"倾斜"}},[o("el-select",{model:{value:t.option.fontStyle,callback:function(e){t.$set(t.option,"fontStyle",e)},expression:"option.fontStyle"}},[o("el-option",{attrs:{label:"正常",value:"normal"}}),o("el-option",{attrs:{label:"斜体",value:"italic"}}),o("el-option",{attrs:{label:"倾斜",value:"oblique"}})],1)],1),o("el-form-item",{attrs:{label:"字体"}},[o("el-select",{model:{value:t.option.textFamily,callback:function(e){t.$set(t.option,"textFamily",e)},expression:"option.textFamily"}},t._l(t.textFamilyList,(function(t,e){return o("el-option",{key:e+t,attrs:{label:t,value:t}})})),1)],1),o("el-form-item",{attrs:{label:"文字大小"}},[o("el-input-number",{staticStyle:{width:"100%"},attrs:{min:13,max:200},model:{value:t.option.textSize,callback:function(e){t.$set(t.option,"textSize",e)},expression:"option.textSize"}})],1),o("el-form-item",{attrs:{label:"行高"}},[o("el-input-number",{staticStyle:{width:"100%"},attrs:{min:13,max:250},model:{value:t.option.textLineHeight,callback:function(e){t.$set(t.option,"textLineHeight",e)},expression:"option.textLineHeight"}})],1),o("el-form-item",{attrs:{label:"对齐方式"}},[o("el-select",{model:{value:t.option.textAlign,callback:function(e){t.$set(t.option,"textAlign",e)},expression:"option.textAlign"}},t._l(t.textAlignList,(function(t,e){return o("el-option",{key:e+t,attrs:{label:t,value:t}})})),1)],1),o("el-form-item",{attrs:{label:"下划线"}},[o("el-select",{model:{value:t.option.textDecoration,callback:function(e){t.$set(t.option,"textDecoration",e)},expression:"option.textDecoration"}},t._l(t.textDecorationList,(function(t,e){return o("el-option",{key:e+t.label,attrs:{label:t.label,value:t.value}})})),1)],1),o("el-form-item",{attrs:{label:"跳转链接"}},[o("el-input",{model:{value:t.option.url,callback:function(e){t.$set(t.option,"url",e)},expression:"option.url"}})],1)],1)],1)},wt=[],yt={name:"cpt-text-option",props:{option:Object},data:function(){return{textFamilyList:["微软雅黑","黑体","宋体","仿宋","楷体","华文宋体"],textAlignList:["left","center","right"],textDecorationList:[{label:"无",value:"none"},{label:"下划线",value:"underline"},{label:"上划线",value:"overline"},{label:"穿过文字",value:"line-through"},{label:"闪烁(存在兼容问题)",value:"blink"}]}}},Ct=yt,St=Object(c["a"])(Ct,vt,wt,!1,null,"04074f58",null),kt=St.exports,$t=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("el-form",{attrs:{"label-width":"80px",size:"mini"}},[o("el-form-item",{attrs:{label:"名称"}},[o("el-input",{model:{value:t.option.label,callback:function(e){t.$set(t.option,"label",e)},expression:"option.label"}})],1),o("el-form-item",{attrs:{label:"label宽度"}},[o("el-input-number",{attrs:{min:"20",max:"1500"},model:{value:t.option.labelWidth,callback:function(e){t.$set(t.option,"labelWidth",e)},expression:"option.labelWidth"}})],1),o("el-form-item",{attrs:{label:"提示内容"}},[o("el-input",{model:{value:t.option.placeholderValue,callback:function(e){t.$set(t.option,"placeholderValue",e)},expression:"option.placeholderValue"}})],1),o("el-form-item",{attrs:{label:"默认值"}},[o("el-input",{model:{value:t.option.value,callback:function(e){t.$set(t.option,"value",e)},expression:"option.value"}})],1),o("el-form-item",{attrs:{label:"输入类型"}},[o("el-select",{model:{value:t.option.type,callback:function(e){t.$set(t.option,"type",e)},expression:"option.type"}},t._l(t.typeList,(function(t,e){return o("el-option",{key:e,attrs:{label:t,value:t}})})),1)],1),o("el-form-item",{attrs:{label:"对齐方式"}},[o("el-select",{model:{value:t.option.labelPosition,callback:function(e){t.$set(t.option,"labelPosition",e)},expression:"option.labelPosition"}},t._l(t.labelPositionList,(function(t,e){return o("el-option",{key:e,attrs:{label:t,value:t}})})),1)],1),o("el-form-item",{attrs:{label:"尺寸"}},[o("el-select",{model:{value:t.option.formSize,callback:function(e){t.$set(t.option,"formSize",e)},expression:"option.formSize"}},t._l(t.formSizeList,(function(t,e){return o("el-option",{key:e,attrs:{label:t,value:t}})})),1)],1)],1)],1)},_t=[],Ot={name:"cpt-input-option",props:{option:Object},data:function(){return{typeList:["text","password"],labelPositionList:["left","top","right"],formSizeList:["mini","small","medium"]}}},Lt=Ot,Wt=Object(c["a"])(Lt,$t,_t,!1,null,"5fd7099c",null),Bt=Wt.exports,zt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("el-form",{attrs:{"label-width":"80px",size:"mini"}},[o("el-form-item",{attrs:{label:"图片"}},[o("el-input",{model:{value:t.option.url,callback:function(e){t.$set(t.option,"url",e)},expression:"option.url"}})],1),o("el-form-item",{attrs:{label:"填充方式"}},[o("el-select",{attrs:{placeholder:"请选择填充方式"},model:{value:t.option.fit,callback:function(e){t.$set(t.option,"fit",e)},expression:"option.fit"}},[o("el-option",{attrs:{label:"fill",value:"fill"}}),o("el-option",{attrs:{label:"contain",value:"contain"}}),o("el-option",{attrs:{label:"cover",value:"cover"}}),o("el-option",{attrs:{label:"none",value:"none"}}),o("el-option",{attrs:{label:"scale-down",value:"scale-down"}})],1)],1),o("el-form-item",{attrs:{label:"点击放大"}},[o("el-radio-group",{model:{value:t.option.preview,callback:function(e){t.$set(t.option,"preview",e)},expression:"option.preview"}},[o("el-radio",{attrs:{label:!0}},[t._v("是")]),o("el-radio",{attrs:{label:!1}},[t._v("否")])],1)],1)],1)],1)},Tt=[],jt={name:"cpt-image-option",props:{option:Object}},Ht=jt,Dt=Object(c["a"])(Ht,zt,Tt,!1,null,"5263e71a",null),Pt=Dt.exports,Nt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("el-form",{attrs:{"label-width":"80px",size:"mini"}},[o("el-form-item",{attrs:{label:"切换触发"}},[o("el-select",{attrs:{placeholder:"请选择触发切换方式"},model:{value:t.option.trigger,callback:function(e){t.$set(t.option,"trigger",e)},expression:"option.trigger"}},[o("el-option",{attrs:{label:"hover",value:"hover"}}),o("el-option",{attrs:{label:"click",value:"click"}})],1)],1),o("el-form-item",{attrs:{label:"图片填充"}},[o("el-select",{attrs:{placeholder:"请选择图片填充方式"},model:{value:t.option.fit,callback:function(e){t.$set(t.option,"fit",e)},expression:"option.fit"}},[o("el-option",{attrs:{label:"fill",value:"fill"}}),o("el-option",{attrs:{label:"contain",value:"contain"}}),o("el-option",{attrs:{label:"cover",value:"cover"}}),o("el-option",{attrs:{label:"none",value:"none"}}),o("el-option",{attrs:{label:"scale-down",value:"scale-down"}})],1)],1),o("el-form-item",{attrs:{label:"轮播图片"}},[o("el-upload",{attrs:{action:"#","before-upload":t.beforeImgUpload,"on-error":t.handleError,"list-type":"picture","on-success":t.handleAvatarSuccess}},[o("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")])],1)],1),o("el-row",{attrs:{gutter:4}},t._l(t.option.imgUrls,(function(e,i){return o("el-col",{key:i,staticClass:"imgBlock",attrs:{span:12}},[o("el-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:e,fit:"cover"}}),o("div",{staticClass:"dleMask"},[o("div",{staticStyle:{width:"24px",margin:"40px auto"},on:{click:function(e){return t.handleRemove(i)}}},[o("i",{staticClass:"el-icon-delete"})])])],1)})),1)],1)],1)},Et=[],Mt={name:"cpt-carousel-option",props:{option:Object},data:function(){return{fileList:[]}},methods:{beforeImgUpload:function(t){var e=-1!==t.type.indexOf("image"),o=t.size/1024/1024<3;return e||this.$message.error("不支持的格式"),o||this.$message.error("上传图片大小不能超过 3MB!"),e&&o},handleRemove:function(t){this.option.imgUrls.splice(t,1)},handleAvatarSuccess:function(t){this.option.imgUrls.push(t.data.url)},handleError:function(t,e){this.$message.error("图片上传失败，使用本地路径"),this.option.imgUrls.push(e.url)}}},At=Mt,Ft=(o("c2e8"),Object(c["a"])(At,Nt,Et,!1,null,"7c1f5ffa",null)),It=Ft.exports,Xt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("el-form",{attrs:{"label-width":"100px",size:"mini"}},[o("el-form-item",{attrs:{label:"标题"}},[o("el-input",{model:{value:t.option.chartTitle,callback:function(e){t.$set(t.option,"chartTitle",e)},expression:"option.chartTitle"}})],1),o("el-form-item",{attrs:{label:"标题位置(左)"}},[o("el-input",{model:{value:t.option.titleLeft,callback:function(e){t.$set(t.option,"titleLeft",e)},expression:"option.titleLeft"}})],1),o("el-form-item",{attrs:{label:"标题位置(上)"}},[o("el-input",{model:{value:t.option.titleTop,callback:function(e){t.$set(t.option,"titleTop",e)},expression:"option.titleTop"}})],1),o("el-form-item",{attrs:{label:"标题颜色"}},[o("el-color-picker",{attrs:{"show-alpha":""},model:{value:t.option.titleTextColor,callback:function(e){t.$set(t.option,"titleTextColor",e)},expression:"option.titleTextColor"}})],1),o("el-form-item",{attrs:{label:"x轴字体颜色"}},[o("el-color-picker",{attrs:{"show-alpha":""},model:{value:t.option.xLabelColor,callback:function(e){t.$set(t.option,"xLabelColor",e)},expression:"option.xLabelColor"}})],1),o("el-form-item",{attrs:{label:"x轴线颜色"}},[o("el-color-picker",{attrs:{"show-alpha":""},model:{value:t.option.xLineColor,callback:function(e){t.$set(t.option,"xLineColor",e)},expression:"option.xLineColor"}})],1),o("el-form-item",{attrs:{label:"y轴字体颜色"}},[o("el-color-picker",{attrs:{"show-alpha":""},model:{value:t.option.yLabelColor,callback:function(e){t.$set(t.option,"yLabelColor",e)},expression:"option.yLabelColor"}})],1),o("el-form-item",{attrs:{label:"y轴字体颜色"}},[o("el-color-picker",{attrs:{"show-alpha":""},model:{value:t.option.yLineColor,callback:function(e){t.$set(t.option,"yLineColor",e)},expression:"option.yLineColor"}})],1),o("el-form-item",{attrs:{label:"y轴网格线"}},[o("el-switch",{attrs:{"active-text":"开","inactive-text":"关"},model:{value:t.option.yGridLineShow,callback:function(e){t.$set(t.option,"yGridLineShow",e)},expression:"option.yGridLineShow"}})],1),o("el-form-item",{attrs:{label:"y轴刻度线"}},[o("el-switch",{attrs:{"active-text":"开","inactive-text":"关"},model:{value:t.option.yTickShow,callback:function(e){t.$set(t.option,"yTickShow",e)},expression:"option.yTickShow"}})],1),o("el-form-item",{attrs:{label:"柱体颜色"}},[o("el-color-picker",{attrs:{"show-alpha":""},model:{value:t.option.barColor,callback:function(e){t.$set(t.option,"barColor",e)},expression:"option.barColor"}})],1),o("el-form-item",{attrs:{label:"柱体背景"}},[o("el-switch",{attrs:{"active-text":"开","inactive-text":"关"},model:{value:t.option.barBgShow,callback:function(e){t.$set(t.option,"barBgShow",e)},expression:"option.barBgShow"}})],1),o("el-form-item",{attrs:{label:"圆角"}},[o("el-input-number",{attrs:{min:0,max:50},model:{value:t.option.barBorderRadius,callback:function(e){t.$set(t.option,"barBorderRadius",e)},expression:"option.barBorderRadius"}})],1),o("el-form-item",{attrs:{label:"柱体宽度"}},[o("el-input-number",{attrs:{min:10,max:100},model:{value:t.option.barWidth,callback:function(e){t.$set(t.option,"barWidth",e)},expression:"option.barWidth"}})],1)],1),o("el-form",{attrs:{"label-position":"top"}},[o("el-form-item",{attrs:{label:"x轴数据"}},[o("el-input",{attrs:{type:"textarea",rows:3,placeholder:"请输入内容"},model:{value:t.option.xData,callback:function(e){t.$set(t.option,"xData",e)},expression:"option.xData"}})],1),o("el-form-item",{attrs:{label:"y轴数据"}},[o("el-input",{attrs:{type:"textarea",rows:3,placeholder:"请输入内容"},model:{value:t.option.yData,callback:function(e){t.$set(t.option,"yData",e)},expression:"option.yData"}})],1)],1)],1)},Yt=[],Gt={name:"cpt-chart-column-option",props:{option:Object}},Vt=Gt,Ut=Object(c["a"])(Vt,Xt,Yt,!1,null,"5956d86a",null),Zt=Ut.exports,Rt=[xt,kt,Bt,Pt,It,Zt],Jt=[];Rt.forEach((function(t){i["default"].component(t.name,t),Jt.push(t.name)}));var Kt=Jt,qt={name:"configBar",props:{currentCpt:Object},watch:{currentCpt:function(t){for(var e=0;e<Kt.length;e++)if(t.cptTag+"-option"===Kt[e])return void(this.customOptionShow=!0);this.$message.warning("组件属性未注册"),this.customOptionShow=!1}},data:function(){return{customOptionShow:!1,configTab:"basic",currentPosition:{cptWidth:30,cptHeight:30,cptX:0,cptY:0,cptZ:0}}},methods:{updateData:function(t){this.currentPosition=t},changeConfig:function(){this.$emit("change",this.currentPosition)},closeBar:function(){this.$emit("close")}},directives:{drag:function(t){t.onmousedown=function(e){var o=e.clientX-t.parentNode.offsetLeft,i=e.clientY-t.parentNode.offsetTop;return document.onmousemove=function(e){t.parentNode.style.left=e.clientX-o+"px",t.parentNode.style.top=e.clientY-i+"px"},document.onmouseup=function(){document.onmousemove=document.onmouseup=null},!1}}}},Qt=qt,te=(o("a5cd"),Object(c["a"])(Qt,ut,dt,!1,null,"74a0b4fc",null)),ee=te.exports,oe=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("el-dialog",{attrs:{title:"网站设置",visible:t.dialogVisible,"close-on-click-modal":!1,width:"500px",center:""},on:{"update:visible":function(e){t.dialogVisible=e}}},[o("el-form",{attrs:{model:t.form,"label-width":"100px",size:"small"}},[o("el-form-item",{attrs:{label:"网站标题"}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),o("el-form-item",{attrs:{label:"网站描述"}},[o("el-input",{attrs:{type:"textarea"},model:{value:t.form.simpleDesc,callback:function(e){t.$set(t.form,"simpleDesc",e)},expression:"form.simpleDesc"}})],1),o("el-form-item",{attrs:{label:"背景颜色"}},[o("el-color-picker",{attrs:{"show-alpha":""},model:{value:t.form.bgColor,callback:function(e){t.$set(t.form,"bgColor",e)},expression:"form.bgColor"}})],1),o("el-form-item",{attrs:{label:"背景图片"}},[o("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"list-type":"picture-card","on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload}},[t.form.bgImg?o("img",{staticClass:"avatar",attrs:{src:t.form.bgImg}}):o("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),o("el-form-item",{attrs:{label:"个性链接"}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.id,callback:function(e){t.$set(t.form,"id",e)},expression:"form.id"}})],1),o("el-form-item",{attrs:{label:"访问码"}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.viewCode,callback:function(e){t.$set(t.form,"viewCode",e)},expression:"form.viewCode"}})],1)],1),o("div",{staticStyle:{"text-align":"center","margin-top":"10px"}},[o("el-button",{attrs:{size:"small"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),o("el-button",{staticStyle:{background:"#2B3340",color:"#eee"},attrs:{size:"small"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("保 存")])],1)],1)],1)},ie=[],ne={name:"configForm",data:function(){return{form:{title:"",simpleDesc:"",bgColor:"#2B3340",bgImg:"",viewCode:""},dialogVisible:!1}},methods:{opened:function(){this.dialogVisible=!0},handleAvatarSuccess:function(){},beforeAvatarUpload:function(){}}},le=ne,ae=Object(c["a"])(le,oe,ie,!1,null,"5df43776",null),re=ae.exports,ce={name:"design-index",components:{ConfigForm:re,ConfigBar:ee,ComponentBar:pt},data:function(){return{cptBarWidth:200,windowWidth:document.documentElement.clientWidth,windowHeight:document.documentElement.clientHeight,conWidth:0,conHeight:0,copyDom:"",cacheComponents:[],configBarShow:!1,currentCptIndex:0,currentCpt:{option:void 0},containerScale:1}},created:function(){this.initContainerSize()},methods:{initContainerSize:function(){var t=this.windowWidth-this.cptBarWidth-40,e=t/16*9;e>this.windowHeight-88&&(e=this.windowHeight-88,t=e/9*16),this.conWidth=t,this.conHeight=e,this.containerScale=t/1024},submitDesign:function(){console.log("组件数据",this.cacheComponents)},preview:function(){var t={title:"我的大屏",bgColor:"#2B3340",comments:this.cacheComponents};localStorage.setItem("designCache",JSON.stringify(t));var e=this.$router.resolve({path:"/preview"});window.open(e.href,"_blank")},delCpt:function(t){this.cacheComponents.splice(this.cacheComponents.indexOf(t),1),this.configBarShow=!1},changeCpt:function(t){t.cptTag=this.cacheComponents[this.currentCptIndex].cptTag,t.option=this.cacheComponents[this.currentCptIndex].option,this.cacheComponents[this.currentCptIndex]=t,this.cacheComponents.splice(0,1,this.cacheComponents[0])},showConfigBar:function(t,e){this.currentCpt=t,this.currentCptIndex=e;var o={cptWidth:t.cptWidth,cptHeight:t.cptHeight,cptX:t.cptX,cptY:t.cptY,cptZ:t.cptZ};this.$refs["configBar"].updateData(o),!1===this.configBarShow&&(this.configBarShow=!0)},dragStart:function(t){this.copyDom=t,t.draggable=!1},allowDrop:function(t){t.preventDefault()},drop:function(t){var e=JSON.parse(this.copyDom.getAttribute("config"));console.log(e);var o={groupTag:e.group,cptName:e.name,icon:e.icon,cptTag:e.tag,cptZ:1,option:void 0,cptX:Math.round(t.offsetX/this.containerScale),cptY:Math.round(t.offsetY/this.containerScale),cptWidth:e.initWidth,cptHeight:e.initHeight},i=at[e.group];if(i&&i.options[e.tag+"-option"]){var n=i.options[e.tag+"-option"];o.option=JSON.parse(JSON.stringify(n)),this.cacheComponents.push(o),this.showConfigBar(o,this.cacheComponents.length-1)}else this.$message.error("未再options.js中查找到"+e.group+"."+e.tag+"-option的自定义属性")},closeConfigBar:function(){this.configBarShow=!1},showConfigForm:function(){this.$refs["configForm"].opened()}},directives:{dragParent:function(t,e,o){var i=o.context;t.onmousedown=function(e){var o=e.clientX-t.parentNode.offsetLeft,n=e.clientY-t.parentNode.offsetTop,l=e.clientX-o,a=e.clientY-n;return document.onmousemove=function(e){l=e.clientX-o,a=e.clientY-n,t.parentNode.style.left=l+"px",t.parentNode.style.top=a+"px"},document.onmouseup=function(){document.onmousemove=document.onmouseup=null;var e=t.parentNode.getAttribute("cptIndex");i.cacheComponents[e].cptX=Math.round(l/i.containerScale),i.cacheComponents[e].cptY=Math.round(a/i.containerScale)},!1}},resize:function(t,e,o){var i=o.context;t.onmousedown=function(e){var o,n,l=e.clientX-t.parentNode.offsetWidth,a=e.clientY-t.parentNode.offsetHeight;return document.onmousemove=function(e){o=e.clientX-l,n=e.clientY-a,o=o<40?40:o,n=n<20?20:n,t.parentNode.style.width=o+"px",t.parentNode.style.height=n+"px"},document.onmouseup=function(){document.onmousemove=document.onmouseup=null;var e=t.parentNode.getAttribute("cptIndex");i.cacheComponents[e].cptWidth=Math.round(o/i.containerScale),i.cacheComponents[e].cptHeight=Math.round(n/i.containerScale),i.$refs["configBar"].updateData(i.cacheComponents[e])},!1}}}},se=ce,pe=(o("58c0"),Object(c["a"])(se,b,g,!1,null,"44bd3cb5",null)),ue=pe.exports,de=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{style:{width:t.windowWidth+"px",height:t.windowHeight+"px",backgroundColor:t.designCache.bgColor}},t._l(t.designCache.comments,(function(e,i){return o("div",{key:e+i,staticStyle:{position:"absolute",overflow:"auto"},style:{width:Math.round(t.containerScale*e.cptWidth)+"px",height:Math.round(t.containerScale*e.cptHeight)+"px",top:Math.round(t.containerScale*e.cptY)+"px",left:Math.round(t.containerScale*e.cptX)+"px",zIndex:e.cptZ}},[o(e.cptTag,{tag:"comment",attrs:{width:e.cptWidth,height:e.cptHeight,option:e.option}})],1)})),0)},me=[],he={name:"preview_index",data:function(){return{designCache:{},windowWidth:document.documentElement.clientWidth,windowHeight:document.documentElement.clientHeight,containerScale:1}},created:function(){this.loadCacheData()},methods:{loadCacheData:function(){var t=JSON.parse(localStorage.getItem("designCache"));document.title=t.title,this.containerScale=this.windowWidth/1024,this.designCache=t}}},fe=he,be=Object(c["a"])(fe,de,me,!1,null,"55c26ad6",null),ge=be.exports;i["default"].use(f["a"]);var xe=new f["a"]({routes:[{path:"/",name:"Designer",component:ue},{path:"/preview",name:"preview",component:ge}]});i["default"].prototype.$echarts=h.a,i["default"].config.productionTip=!1,i["default"].use(d.a),new i["default"]({router:xe,render:function(t){return t(p)}}).$mount("#app")},"58c0":function(t,e,o){"use strict";o("37d4")},"75bc":function(t,e,o){t.exports=o.p+"img/options.ed79cf51.png"},"85ec":function(t,e,o){},a5cd:function(t,e,o){"use strict";o("b036")},ae8a:function(t,e,o){"use strict";o("c024")},b036:function(t,e,o){},b25a:function(t,e,o){t.exports=o.p+"img/btfGirl.542760d9.png"},c024:function(t,e,o){},c2e8:function(t,e,o){"use strict";o("c76b")},c76b:function(t,e,o){},cf05:function(t,e,o){t.exports=o.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.a7edcdcd.js.map