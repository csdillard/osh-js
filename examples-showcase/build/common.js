!function(e){function t(t){for(var i,o,a=t[0],c=t[1],l=t[2],d=0,h=[];d<a.length;d++)o=a[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&h.push(r[o][0]),r[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);for(u&&u(t);h.length;)h.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(i=!1)}i&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},r={0:0},s=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=c;n()}({11:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n(8);const r=new class{constructor(){this.eventMap={}}observe(e,t){Object(i.g)(e)&&Object(i.g)(t)&&(e in this.eventMap||(this.eventMap[e]=[]),this.eventMap[e].push(t))}fire(e,t){if(Object(i.g)(e)&&e in this.eventMap){let n=this.eventMap[e];for(let e=0;e<n.length;e++)n[e](t)}}};class s{static fire(e,t){t.name=e,r.fire("osh:"+e,t)}static observe(e,t){r.observe("osh:"+e,t)}static observeDiv(e,t,n){document.getElementById(e).addEventListener(t,n)}static get EVENT(){return{DATA:"data",SYNC_DATA:"syncData",SELECT_VIEW:"selectView",CONTEXT_MENU:"contextMenu",SHOW_VIEW:"showView",CONNECT_DATASOURCE:"connectDataSource",DISCONNECT_DATASOURCE:"disconnectDataSource",DATASOURCE_UPDATE_TIME:"updateDataSourceTime",CURRENT_MASTER_TIME:"currentMasterTime",UAV_TAKEOFF:"uav:takeoff",UAV_GOTO:"uav:goto",UAV_LOOKAT:"uav:lookat",UAV_LAND:"uav:land",UAV_ORBIT:"uav:orbit",LOADING_START:"loading:start",LOADING_STOP:"loading:stop",ADD_VIEW_ITEM:"addViewItem",RESIZE:"resize",PTZ_SEND_REQUEST:"ptzSendRequest"}}}},26:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n(8),r=n(11);class s{constructor(e,t,n){this.stylers=[],this.contextMenus=[],this.viewItems=[],this.names={},this.stylerToObj={},this.stylerIdToStyler={},this.lastRec={},this.selectedDataSources=[],this.dataSources=[],this.id="view-"+Object(i.i)(),this.dataSourceId=-1,Object(i.g)(n)&&Object(i.g)(n.dataSourceId)&&(this.dataSourceId=n.dataSourceId),Object(i.g)(n)&&Object(i.g)(n.entityId)&&(this.entityId=n.entityId),this.css="",this.cssSelected="",Object(i.g)(n)&&Object(i.g)(n.css)&&(this.css=n.css),Object(i.g)(n)&&Object(i.g)(n.cssSelected)&&(this.cssSelected=n.cssSelected),this.init(e,t,n)}init(e,t,n){this.elementDiv=document.createElement("div"),this.elementDiv.setAttribute("id",this.id),this.elementDiv.setAttribute("class",this.css),this.divId=this.id;let s=document.getElementById(e);if(Object(i.g)(s)&&null!==s?(s.appendChild(this.elementDiv),this.container=s):(document.body.appendChild(this.elementDiv),this.hide(),this.container=document.body),this.beforeAddingItems(n),Object(i.g)(t))for(let e=0;e<t.length;e++)this.addViewItem(t[e]);Object(i.g)(n)&&Object(i.g)(n.show)&&(document.getElementById(this.divId).style.display=n.show?"block":"none"),this.handleEvents();var o=this;Object(i.g)(n)&&Object(i.g)(n.dataSourceId)&&r.a.observe(r.a.EVENT.DATA+"-"+n.dataSourceId,e=>{e.reset?o.reset():o.setData(n.dataSourceId,e.data)}),new MutationObserver(e=>{e.forEach((function(e){"style"===e.attributeName&&o.onResize()}))}).observe(this.elementDiv,{attributes:!0})}hide(){this.elementDiv.style.display="none"}onResize(){}attachTo(e){Object(i.g)(this.elementDiv.parentNode)&&this.elementDiv.parentNode.removeChild(this.elementDiv),document.getElementById(e).appendChild(this.elementDiv),"none"===this.elementDiv.style.display&&(this.elementDiv.style.display="block"),this.onResize()}beforeAddingItems(e){}getId(){return this.id}getDivId(){return this.divId}setData(e,t){}show(e){}shows(e){}addViewItem(e){if(this.viewItems.push(e),e.hasOwnProperty("styler")){let t=e.styler;this.stylers.push(t),e.hasOwnProperty("name")&&(this.names[t.getId()]=e.name),t.viewItem=e,t.init(this),this.stylerIdToStyler[t.id]=t,e.hasOwnProperty("contextmenu")&&this.contextMenus.push(e.contextmenu);let n=t.getDataSourcesIds();for(let s=0;s<n.length;s++){let o=n[s],a=this;!function(n){r.a.observe(r.a.EVENT.DATA+"-"+n,r=>{if(r.reset)return;let s=!1;s=Object(i.g)(a.selectedEntity)?e.entityId===a.selectedEntity:a.selectedDataSources.indexOf(n)>-1,t.setData(n,r.data,a,{selected:s}),a.lastRec[n]=r.data}),r.a.observe(r.a.EVENT.SELECT_VIEW,r=>{let s=!1;s=Object(i.g)(r.entityId)?e.entityId===r.entityId:r.dataSourcesIds.indexOf(n)>-1,n in a.lastRec&&t.setData(n,a.lastRec[n],a,{selected:s})})}(o)}}}handleEvents(){var e=this;r.a.observe(r.a.EVENT.SELECT_VIEW,t=>e.selectDataView(t.dataSourcesIds,t.entityId)),r.a.observe(r.a.EVENT.SHOW_VIEW,t=>e.show(t)),r.a.observe(r.a.EVENT.ADD_VIEW_ITEM,t=>{Object(i.g)(t.viewId)&&t.viewId===e.id&&e.addViewItem(t.viewItem)}),r.a.observe(r.a.EVENT.RESIZE+"-"+this.divId,t=>e.onResize())}selectDataView(e,t){if(Object(i.g)(this.dataSources)){this.selectedDataSources=e,this.selectedEntity=t;for(let e=0;e<this.dataSources.length;e++)this.setData(this.dataSources[e],this.lastRec[this.dataSources[e]])}}getDataSourcesId(){let e=[];-1!==this.dataSourceId&&e.push(this.dataSourceId);for(let t=0;t<this.viewItems.length;t++){let n=this.viewItems[t];if(n.hasOwnProperty("styler")){let t=n.styler;e=e.concat(t.getDataSourcesIds())}}return e}reset(){}}},38:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n(51);class r extends i.a{parseTimeStamp(e){let t=String.fromCharCode.apply(null,new Uint8Array(e));return new Date(JSON.parse(t).time).getTime()}parseData(e){let t=JSON.parse(String.fromCharCode.apply(null,new Uint8Array(e))),n={};for(let e in t)"time"!==e&&(n[e]=t[e]);return n}buildUrl(e){let t="";t+=e.protocol+"://",t+=e.endpointUrl+"?",t+="service="+e.service+"&",t+="version=2.0&",t+="request=GetResult&",t+="offering="+e.offeringID+"&",e.foiURN&&""!==e.foiURN&&(t+="featureOfInterest="+e.foiURN+"&"),t+="observedProperty="+e.observedProperty+"&";let n=e.startTime,i=e.endTime;return"now"!==n&&0!==this.timeShift&&"urn:android:device:060693280a28e015-sos"!==e.offeringID&&(n=new Date(Date.parse(n)-this.timeShift).toISOString(),i=new Date(Date.parse(i)-this.timeShift).toISOString()),t+="temporalFilter=phenomenonTime,"+n+"/"+i+"&",e.replaySpeed&&(t+="replaySpeed="+e.replaySpeed),t+="&responseFormat=application/json",t}}},40:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n(8),r=n(11);class s extends class{constructor(e){this.properties=e,this.id="styler-"+Object(i.i)(),this.dataSourceToStylerMap={},this.initEvents()}checkFn(e){let t=this.properties[e],n=Object(i.f)(t);return n&&(Object(i.a)(t.dataSourceIds,e+".dataSourceIds"),Object(i.b)(t.handler,e+".handler")),n}initEvents(){var e=this;r.a.observe(r.a.EVENT.DATASOURCE_UPDATE_TIME,t=>e.clear())}clear(){}getId(){return this.id}select(e){}addFn(e,t){for(let n=0;n<e.length;n++){let r=e[n];Object(i.g)(this.dataSourceToStylerMap[r])||(this.dataSourceToStylerMap[r]=[]),this.dataSourceToStylerMap[r].push(t)}}setData(e,t,n,i){if(e in this.dataSourceToStylerMap){let n=this.dataSourceToStylerMap[e];for(let e=0;e<n.length;e++)n[e](t.data,t.timeStamp,i);return!0}return!1}getDataSourcesIds(){let e=[];for(let t in this.dataSourceToStylerMap)e.push(t);return e}init(){}}{constructor(e){super(e),this.properties=e,this.location=null,this.orientation={heading:0},this.icon=null,this.iconAnchor=[16,16],this.iconSize=[16,16],this.label=null,this.labelColor="#000000",this.labelSize=16,this.labelOffset=[0,0],this.color=null,this.defaultToTerrainElevation=!1,this.options={},Object(i.g)(e.defaultToTerrainElevation)&&(this.defaultToTerrainElevation=e.defaultToTerrainElevation),Object(i.f)(e.location)&&(Object(i.c)(e.location,"location"),this.location=e.location),Object(i.f)(e.orientation)&&(Object(i.c)(e.orientation,"orientation"),this.orientation=e.orientation),Object(i.f)(e.icon)&&(Object(i.e)(e.icon,"icon"),this.icon=e.icon),Object(i.f)(e.iconAnchor)&&(Object(i.a)(e.iconAnchor,"iconAnchor"),this.iconAnchor=e.iconAnchor),Object(i.f)(e.iconSize)&&(Object(i.a)(e.iconSize,"iconSize"),this.iconSize=e.iconSize),Object(i.f)(e.label)&&(Object(i.e)(e.label,"label"),this.label=e.label),Object(i.f)(e.labelColor)&&(Object(i.e)(e.labelColor,"labelColor"),this.labelColor=e.labelColor),Object(i.f)(e.labelSize)&&(Object(i.d)(e.labelSize,"labelSize"),this.labelSize=e.labelSize),Object(i.f)(e.labelOffset)&&(Object(i.a)(e.labelOffset,"labelOffset"),this.labelOffset=e.labelOffset);let t=this;if(this.checkFn("locationFunc")){let n=function(n,i,r){t.location=e.locationFunc.handler(n,i,r)};this.addFn(e.locationFunc.dataSourceIds,n)}if(this.checkFn("orientationFunc")){let n=function(n,i,r){t.orientation=e.orientationFunc.handler(n,i,r)};this.addFn(e.orientationFunc.dataSourceIds,n)}if(this.checkFn("iconFunc")){let n=function(n,i,r){t.icon=e.iconFunc.handler(n,i,r)};this.addFn(e.iconFunc.dataSourceIds,n)}if(this.checkFn("labelFunc")){let n=function(n,i,r){t.label=e.labelFunc.handler(n,i,r)};this.addFn(e.labelFunc.dataSourceIds,n)}if(this.checkFn("labelColorFunc")){let n=function(n,i,r){t.labelColor=e.labelColorFunc.handler(n,i,r)};this.addFn(e.labelColorFunc.dataSourceIds,n)}if(this.checkFn("labelSizeFunc")){let n=function(n,i,r){t.labelSize=e.labelSizeFunc.handler(n,i,r)};this.addFn(e.labelSizeFunc.dataSourceIds,n)}}init(e){super.init(e),Object(i.g)(e)&&null!==this.location&&e.updateMarker(this,0,{})}setData(e,t,n,r){return!(!super.setData(e,t,n,r)||!Object(i.g)(n)||null===this.location)&&(n.updateMarker(this,t.timeStamp,r),!0)}}},51:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var i=n(8);class r{constructor(e){this.url=e,this.id="DataConnector-"+Object(i.i)()}getId(){return this.id}getUrl(){return this.url}}class s extends r{connect(){let e=this;if(!this.init){if(Object(i.h)()){let t=this.getUrl(),n=URL.createObjectURL(new Blob(["(",function(){let e=null;self.onmessage=t=>{"close"===t.data?e.close():function(t){e=new WebSocket(t),e.binaryType="arraybuffer",e.onmessage=e=>{e.data.byteLength>0&&self.postMessage(e.data,[e.data])},e.onerror=t=>{e.close()}}(t.data)}}.toString(),")()"],{type:"application/javascript"}));this.worker=new Worker(n),this.worker.postMessage(t),this.worker.onmessage=t=>e.onMessage(t.data),URL.revokeObjectURL(n)}else this.ws=new WebSocket(this.getUrl()),this.ws.binaryType="arraybuffer",this.ws.onmessage=t=>{t.data.byteLength>0&&e.onMessage(t.data)},this.ws.onerror=t=>e.ws.close();this.init=!0}}disconnect(){Object(i.h)()&&null!==this.worker?(this.worker.postMessage("close"),this.worker.terminate(),this.init=!1):null!==this.ws&&(this.ws.close(),this.init=!1)}onMessage(e){}close(){this.disconnect()}}class o extends r{constructor(e,t){super(e),this.method="POST",this.responseType="arraybuffer",Object(i.g)(t)&&(t.method&&(this.method=t.method),t.responseType&&(this.responseType=t.responseType))}sendRequest(e,t){let n=this,r=new XMLHttpRequest;r.timeout=6e4,null===e?(Object(i.g)(t)?r.open("GET",this.getUrl()+"?"+t,!0):r.open("GET",this.getUrl(),!0),r.responseType=this.responseType,r.onload=e=>{r.response&&n.onMessage(r.response)},r.ontimeout=e=>{console.log("Timeout")},r.send(null)):(r.open("POST",this.getUrl(),!0),r.setRequestHeader("Content-Type","text/xml"),r.send(e),r.onreadystatechange=()=>{r.readyState<4||4===r.readyState&&(200===r.status&&r.status<300?n.onSuccess(r.responseText):n.onError(""))})}onError(e){}onSuccess(e){}connect(){this.sendRequest(null)}}var a=n(11);class c{constructor(e,t){this.id="DataSource-"+Object(i.i)(),this.name=e,this.properties=t,this.timeShift=0,this.connected=!1,this.initDataSource(t)}initDataSource(e){Object(i.g)(e.timeShift)&&(this.timeShift=e.timeShift),Object(i.g)(e.syncMasterTime)?this.syncMasterTime=e.syncMasterTime:this.syncMasterTime=!1,Object(i.g)(e.bufferingTime)&&(this.bufferingTime=e.bufferingTime),Object(i.g)(e.timeOut)&&(this.timeOut=e.timeOut),Object(i.g)(e.connect)||(e.connect=!0),e.protocol.startsWith("ws")?(this.connector=new s(this.buildUrl(e)),this.connector.onMessage=this.onMessage.bind(this)):e.protocol.startsWith("http")&&(this.connector=new o(this.buildUrl(e)),this.connector.responseType="arraybuffer",this.connector.onMessage=this.onMessage.bind(this))}disconnect(){this.connector.disconnect(),this.connected=!1,a.a.fire(a.a.EVENT.DATA+"-"+this.id,{dataSourceId:this.id,reset:!0})}connect(){this.connector.connect(),this.connected=!0}onMessage(e){this.onData({timeStamp:this.parseTimeStamp(e)+this.timeShift,data:this.parseData(e)})}parseTimeStamp(e){return(new Date).getTime()}parseData(e){return e}onData(e){a.a.fire(a.a.EVENT.DATA+"-"+this.id,{data:e})}getId(){return this.id}getName(){return this.name}buildUrl(e){let t="";return t+=e.protocol+"://",t+=e.endpointUrl+"?",t+="service="+e.service+"&",t+="version=2.0&",t+="request=GetResult&",t+="offering="+e.offeringID+"&",e.foiURN&&""!==e.foiURN&&(t+="featureOfInterest="+e.foiURN+"&"),t+="observedProperty="+e.observedProperty+"&",t+="temporalFilter=phenomenonTime,"+e.startTime+"/"+e.endTime+"&",e.replaySpeed&&(t+="replaySpeed="+e.replaySpeed),e.responseFormat&&(t+="&responseFormat="+e.responseFormat),t}}},56:function(e,t,n){"use strict";var i,r=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},s=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function a(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},i=[],r=0;r<e.length;r++){var s=e[r],c=t.base?s[0]+t.base:s[0],l=n[c]||0,u="".concat(c," ").concat(l);n[c]=l+1;var d=a(u),h={css:s[1],media:s[2],sourceMap:s[3]};-1!==d?(o[d].references++,o[d].updater(h)):o.push({identifier:u,updater:m(h,t),references:1}),i.push(u)}return i}function l(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var r=n.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var o=s(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function h(e,t,n,i){var r=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var s=document.createTextNode(r),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(s,o[t]):e.appendChild(s)}}function f(e,t,n){var i=n.css,r=n.media,s=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),s&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var p=null,b=0;function m(e,t){var n,i,r;if(t.singleton){var s=b++;n=p||(p=l(t)),i=h.bind(null,n,s,!1),r=h.bind(null,n,s,!0)}else n=l(t),i=f.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var r=a(n[i]);o[r].references--}for(var s=c(e,t),l=0;l<n.length;l++){var u=a(n[l]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}n=s}}}},57:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var r=(o=i,a=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(c," */")),s=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[n].concat(s).concat([r]).join("\n")}var o,a,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(i)for(var s=0;s<this.length;s++){var o=this[s][0];null!=o&&(r[o]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);i&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},78:function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},8:function(e,t,n){"use strict";n.d(t,"g",(function(){return i})),n.d(t,"f",(function(){return r})),n.d(t,"e",(function(){return a})),n.d(t,"d",(function(){return c})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d})),n.d(t,"i",(function(){return h})),n.d(t,"h",(function(){return m}));Math.pow(2,53);function i(e){return void 0!==e}function r(e){return i(e)&&null!==e}function s(e,t="letiable"){if(!i(e))throw t+" must be defined";return e}function o(e,t,n="letiable"){if(s(e,n),typeof e!==t)throw n+" must be of type "+t;return e}function a(e,t){return o(e,"string",t)}function c(e,t){if(function(e,t){o(e,"number",t)}(e,t),e<=0)throw t+" must be a positive number"}function l(e,t){return o(e,"object",t)}function u(e,t="letiable"){if(s(e,t),!Array.isArray(e))throw t+" must be an array";return e}function d(e,t){return o(e,"function",t)}function h(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){let t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}))}let f=null,p=null;function b(e){f=e.pageX,p=e.pageY}function m(){return i(Worker)}document.addEventListener("mousemove",b,!1),document.addEventListener("mouseenter",b,!1)}});
//# sourceMappingURL=common.js.map