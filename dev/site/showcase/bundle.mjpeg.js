!function(e){var t={};function i(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=t,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(r,s,function(t){return e[t]}.bind(null,s));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=5)}([function(e,t,i){e.exports=function(){return new Worker(i.p+"WorkerName.03861611935887e8ded3.js")}},function(e,t,i){var r=i(2),s=i(3);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[e.i,s,""]]);var n={insert:"head",singleton:!1},a=(r(s,n),s.locals?s.locals:{});e.exports=a},function(e,t,i){"use strict";var r,s=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},n=function(){var e={};return function(t){if(void 0===e[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}e[t]=i}return e[t]}}(),a=[];function o(e){for(var t=-1,i=0;i<a.length;i++)if(a[i].identifier===e){t=i;break}return t}function c(e,t){for(var i={},r=[],s=0;s<e.length;s++){var n=e[s],c=t.base?n[0]+t.base:n[0],d=i[c]||0,u="".concat(c," ").concat(d);i[c]=d+1;var p=o(u),l={css:n[1],media:n[2],sourceMap:n[3]};-1!==p?(a[p].references++,a[p].updater(l)):a.push({identifier:u,updater:g(l,t),references:1}),r.push(u)}return r}function d(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var s=i.nc;s&&(r.nonce=s)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=n(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,p=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function l(e,t,i,r){var s=i?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=p(t,s);else{var n=document.createTextNode(s),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(n,a[t]):e.appendChild(n)}}function h(e,t,i){var r=i.css,s=i.media,n=i.sourceMap;if(s?e.setAttribute("media",s):e.removeAttribute("media"),n&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,f=0;function g(e,t){var i,r,s;if(t.singleton){var n=f++;i=m||(m=d(t)),r=l.bind(null,i,n,!1),s=l.bind(null,i,n,!0)}else i=d(t),r=h.bind(null,i,t),s=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(i)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else s()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=s());var i=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<i.length;r++){var s=o(i[r]);a[s].references--}for(var n=c(e,t),d=0;d<i.length;d++){var u=o(i[d]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}i=n}}}},function(e,t,i){(t=i(4)(!1)).push([e.i,".osh-view {\n    width:100%;\n    height: 100%;\n}\n",""]),e.exports=t},function(e,t,i){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i=function(e,t){var i=e[1]||"",r=e[3];if(!r)return i;if(t&&"function"==typeof btoa){var s=(a=r,o=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),"/*# ".concat(c," */")),n=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[i].concat(n).concat([s]).join("\n")}var a,o,c;return[i].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(i,"}"):i})).join("")},t.i=function(e,i,r){"string"==typeof e&&(e=[[null,e,""]]);var s={};if(r)for(var n=0;n<this.length;n++){var a=this[n][0];null!=a&&(s[a]=!0)}for(var o=0;o<e.length;o++){var c=[].concat(e[o]);r&&s[c[0]]||(i&&(c[2]?c[2]="".concat(i," and ").concat(c[2]):c[2]=i),t.push(c))}},t}},function(e,t,i){"use strict";i.r(t);Math.pow(2,53);function r(e){return null!=e}function s(e){return r(e)&&null!==e}function n(e,t){return s(e)&&typeof e===t}function a(e,t="letiable"){if(!r(e))throw t+" must be defined";return e}function o(e,t="letiable"){if(!r(e)||!e)throw t;return e}function c(e,t,i="letiable"){if(a(e,i),typeof e!==t)throw i+" must be of type "+t;return e}function d(e,t="letiable"){if(a(e,t),!Array.isArray(e))throw t+" must be an array";return e}function u(){return"xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){let t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}))}const p="disconnected",l="closed-error";var h=class{constructor(e,t,i){this.id="DataSource-"+u(),this.name=e,this.properties=t,this.dataSourceWorker=i,this.currentRunningProperties={},this.eventSubscriptionMap={},this.initDataSource(t)}initDataSource(e){this.dataSourceWorker.postMessage({message:"init",id:this.id,properties:JSON.stringify(e),topic:this.getTopicId()});new BroadcastChannel(this.getTopicId()).onmessage=e=>{const t=e.data.type;if(t in this.eventSubscriptionMap)for(let i=0;i<this.eventSubscriptionMap[t].length;i++)this.eventSubscriptionMap[t][i](e.data)}}disconnect(){this.dataSourceWorker.postMessage({message:"disconnect"})}onDisconnect(){return new Promise(e=>{new BroadcastChannel(this.getTopicId()).onmessage=t=>{t.data.status===p&&e()}})}async connect(){return this.dataSourceWorker.postMessage({message:"connect"}),this.isConnected()}async isConnected(){const e=new Promise(e=>{null!==this.dataSourceWorker&&(this.dataSourceWorker.onmessage=t=>{"is-connected"===t.data.message&&e(t.data.data)})});return null!==this.dataSourceWorker&&this.dataSourceWorker.postMessage({message:"is-connected"}),e}getId(){return this.id}getName(){return this.name}updateProperties(e){this.currentRunningProperties={...this.properties,...e},null!==this.dataSourceWorker&&this.dataSourceWorker.postMessage({message:"update-url",data:e})}getCurrentRunningProperties(){return this.currentRunningProperties}terminate(){null!==this.dataSourceWorker&&this.dataSourceWorker.terminate()}getTopicId(){return"datasource-data-"+this.id}getVersion(){return 0}subscribe(e,t){for(let i=0;i<t.length;i++)t[i]in this.eventSubscriptionMap||(this.eventSubscriptionMap[t[i]]=[]),this.eventSubscriptionMap[t[i]].push(e)}};var m=class extends h{constructor(e,t,i){super(e,t,i),a(t,"Some properties must be defined"),a(t.startTime,"startTime must must be defined"),a(t.endTime,"startTime must must be defined"),this.timeSync=null}setDataSynchronizer(e){this.timeSync=e,this.dataSourceWorker.postMessage({message:"topic",topic:"data-synchronizer-"+this.timeSync.id,timeTopic:this.getTimeTopicId()})}initDataSource(e){super.initDataSource(e),this.dataSourceWorker.postMessage({message:"topic",topic:this.getTopicId(),timeTopic:this.getTimeTopicId()});new BroadcastChannel(this.getTimeTopicId()).onmessage=e=>{const t=e.data.type;if(t in this.eventSubscriptionMap)for(let i=0;i<this.eventSubscriptionMap[t].length;i++)this.eventSubscriptionMap[t][i](e.data)}}setTimeRange(e,t,i,s=!1){let n={};r(i)&&(n={replaySpeed:i}),this.updateProperties({...this.currentRunningProperties,startTime:e,endTime:t,...n,reconnect:s})}getStartTime(){return this.properties.startTime}getEndTime(){return this.properties.endTime}getMinTime(){return this.properties.minTime}getMaxTime(){return this.properties.maxTime}getReplaySpeed(){return r(this.currentRunningProperties)&&r(this.currentRunningProperties.replaySpeed)?this.currentRunningProperties.replaySpeed:r(this.properties.replaySpeed)?this.properties.replaySpeed:1}async getCurrentTime(){if(r(this.timeSync))return this.timeSync.getCurrentTime();{const e=new Promise(e=>{null!==this.dataSourceWorker&&(this.dataSourceWorker.onmessage=t=>{"last-timestamp"===t.data.message&&e(t.data.data)})});return null!==this.dataSourceWorker&&this.dataSourceWorker.postMessage({message:"last-timestamp"}),e}}updateProperties(e){super.updateProperties(e)}getTimeTopicId(){return"datasource-time-"+this.id}},f=i(0),g=i.n(f);var v=class extends m{constructor(e,t){super(e,{timeShift:0,reconnectTimeout:5e3,...t},new g.a)}};i(1);const y="data",S="status",b="time-changed";var T=class{constructor(e){this.properties=e,this.dataSourcesToFn=void 0,this.data=[],this.props={},this.props.id="layer-"+u(),this.props.name="",this.props.description="",this.props.dataSourceId="",this.props.visible=!0,this.props.filter=!0,r(e.name)&&(this.props.name=e.name),r(e.description)&&(this.props.description=e.description),r(e.dataSourceId)&&(this.props.dataSourceId=e.dataSourceId),r(e.visible)&&(this.props.visible=e.visible),this.initEvents();const t=this;if(this.checkFn("filter")){let e=function(e,i,r){t.props.filter=t.getFunc("filter")(e,i,r)};this.addFn(t.getDataSourcesIdsByProperty("filter"),e)}else{this.properties.filter=function(e,t,i){return!0};let e=function(e,i,r){t.props.filter=t.getFunc("filter")(e,i,r)};this.addFn(t.getDataSourcesIdsByProperty("filter"),e)}if(this.checkFn("getVisible")){let e=function(e,i,r){t.props.visible=t.getFunc("getVisible")(e,i,r)};this.addFn(t.getDataSourcesIdsByProperty("getVisible"),e)}}saveState(){this.initialState={...this.props}}restoreState(){this.props={...this.initialState}}getFunc(e){return this.properties[e].handler||this.properties[e]}checkFn(e){let t=this.properties[e];if(n(t,"function"))return a(this.properties.dataSourceId,"dataSourceId"),!0;{let i=s(t);return i&&(d(t.dataSourceIds,e+".dataSourceIds"),function(e,t){c(e,"function",t)}(t.handler,e+".handler")),i}}initEvents(){}clear(){}getId(){return this.id}select(e){}addFn(e,t){r(this.dataSourcesToFn)||(this.dataSourcesToFn={});for(let i=0;i<e.length;i++){let s=e[i];r(this.dataSourcesToFn[s])||(this.dataSourcesToFn[s]=[]),this.dataSourcesToFn[s].push(t)}}setData(e,t,i={}){if(this.data=[],i.dataSourceId=e,r(this.dataSourcesToFn)&&e in this.dataSourcesToFn){let r=this.dataSourcesToFn[e];for(let e=0;e<t.length;e++){e:for(let s=0;s<r.length&&(r[s](t[e].data,t[e].timeStamp,i),this.props.filter);s++);this.props.filter&&this.data.push({...this.props})}}}getDataSourcesIds(){if(r(this.dataSourcesToFn)){let e=[];for(let t in this.dataSourcesToFn)e.push(t);return e}return a(this.properties.dataSourceId,"dataSourceId must be defined"),[this.properties.dataSourceId]}getDataSourcesIdsByProperty(e){return this.properties[e].dataSourceIds||[this.properties.dataSourceId]}init(){}getProps(){return{type:this.type,values:this.data}}reset(){this.restoreState()}};var I=class extends T{constructor(e){super(e),this.type="data"}setData(e,t,i){this.props.data=t}getProps(){return{type:this.type,values:this.props.data}}};var x=class{constructor(e){this.layers=[],this.lastRec={},this.dataSources=[],this.id="view-"+u(),this.css="",r(e)&&r(e.css)&&(this.css=e.css),a(e&&e.supportedLayers,"supportedLayers"),d(e.supportedLayers,"supportedLayers"),o(e.supportedLayers.length>0,"supportedLayers.length === 0"),this.supportedLayers=e.supportedLayers,this.init(e)}init(e){this.properties=e,this.elementDiv=document.createElement("div"),this.elementDiv.setAttribute("id",this.id),this.elementDiv.setAttribute("class",this.css+" osh-view"),this.divId=this.id;let t=r(e.container)?e.container:document.body,i=document.getElementById(t);if(r(i)&&null!==i?(i.appendChild(this.elementDiv),this.container=i):(document.body.appendChild(this.elementDiv),this.hide(),this.container=document.body),this.beforeAddingItems(e),r(e)){if(r(e.layers))for(let t=0;t<e.layers.length;t++)this.addLayer(e.layers[t]);r(e.dataSourceId)&&this.addLayer(new I({dataSourceId:e.dataSourceId})),r(e.visible)&&(document.getElementById(this.divId).style.display=e.visible?"block":"none")}const s=this;new MutationObserver(e=>{e.forEach((function(e){"style"===e.attributeName&&s.onResize()}))}).observe(this.elementDiv,{attributes:!0});new MutationObserver((function(e){r(document.getElementById(s.divId))||(this.disconnect(),s.destroy())})).observe(document.body,{childList:!0})}hide(){this.elementDiv.style.display="none"}onResize(){}attachTo(e){r(this.elementDiv.parentNode)&&this.elementDiv.parentNode.removeChild(this.elementDiv),document.getElementById(e).appendChild(this.elementDiv),"none"===this.elementDiv.style.display&&(this.elementDiv.style.display="block"),this.onResize()}beforeAddingItems(e){}getId(){return this.id}getDivId(){return this.divId}setData(e,t){}show(e){}destroy(){}addLayer(e){o(this.supportedLayers.includes(e.type),"this layer is not supported: "+e.type+", should be "+this.supportedLayers),this.layers.push(e);let t=e.getDataSourcesIds();for(let i=0;i<t.length;i++){const r=t[i];let s=this;new BroadcastChannel("datasource-data-"+r).onmessage=t=>{t.data.type===S&&t.data.status===l?s.reset():t.data.type===y&&(e.setData(r,t.data.values),this.setData(r,e.getProps()),s.lastRec[r]=t.data)};new BroadcastChannel("datasource-time-"+r).onmessage=e=>{e.data.type===b&&s.reset()}}}removeAllFromLayer(e){if(this.layers.includes(e)){for(let t in e.dataSourcesToFn)delete this.lastRec[t];e.reset()}}removeAllFromLayers(){for(let e of this.layers)this.removeAllFromLayer(e)}getDataSourcesId(){let e=[];for(let t=0;t<this.layers.length;t++){let i=this.layers[t];e=e.concat(i.getDataSourcesIds())}return e}reset(){this.removeAllFromLayers()}};var w=class extends x{constructor(e){if(super({supportedLayers:["data"],...e}),this.timeStamp=null,r(e.showTime)&&e.showTime&&(this.timeStamp=document.createElement("div"),this.timeStamp.setAttribute("class","video-time"),document.getElementById(this.divId).appendChild(this.timeStamp)),this.imgTag=document.createElement("img"),this.imgTag.setAttribute("class","video-mjpeg"),this.rotation=0,void 0!==e&&void 0!==e.rotation){this.rotation=e.rotation*Math.PI/180,this.canvas=document.createElement("canvas"),this.canvas.width=640,this.canvas.height=480;var t=this.canvas.getContext("2d");t.translate(0,480),t.rotate(this.rotation),document.getElementById(this.divId).appendChild(this.canvas)}else document.getElementById(this.divId).appendChild(this.imgTag)}setData(e,t){const i=t.values;for(let e=0;e<i.length;e++){const e=i.shift();let t=new Blob([e.data.frameData]),r=window.URL.createObjectURL(t),s=this.imgTag.src;this.imgTag.src=r,null!==this.timeStamp&&(this.timeStamp.innerHTML=new Date(e.timeStamp).toISOString()),window.URL.revokeObjectURL(s)}}selectDataView(e,t){e.indexOf(this.dataSourceId)>-1||r(this.entity)&&this.entity.getId()===t?document.getElementById(this.divId).setAttribute("class",this.css+" "+this.cssSelected):document.getElementById(this.divId).setAttribute("class",this.css)}reset(){this.imgTag.src=""}};let D=new v("android-Video",{protocol:"ws",service:"SOS",endpointUrl:"sensiasoft.net:8181/sensorhub/sos",offeringID:"urn:android:device:060693280a28e015-sos",observedProperty:"http://sensorml.com/ont/swe/property/VideoFrame",startTime:"2015-02-16T07:58:35Z",endTime:"2015-02-16T08:09:00Z",replaySpeed:3});new w({container:"video-mjpeg-container",css:"video-mjpeg",name:"Android Video",keepRatio:!0,showTime:!0,dataSourceId:D.id});D.connect()}]);