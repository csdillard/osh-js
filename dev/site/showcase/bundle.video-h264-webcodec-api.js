!function(t){var e={};function s(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(i,r,function(e){return t[e]}.bind(null,r));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=9)}([function(t,e,s){"use strict";var i,r=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},n=function(){var t={};return function(e){if(void 0===t[e]){var s=document.querySelector(e);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch(t){s=null}t[e]=s}return t[e]}}(),a=[];function o(t){for(var e=-1,s=0;s<a.length;s++)if(a[s].identifier===t){e=s;break}return e}function c(t,e){for(var s={},i=[],r=0;r<t.length;r++){var n=t[r],c=e.base?n[0]+e.base:n[0],d=s[c]||0,h="".concat(c," ").concat(d);s[c]=d+1;var u=o(h),p={css:n[1],media:n[2],sourceMap:n[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:h,updater:g(p,e),references:1}),i.push(h)}return i}function d(t){var e=document.createElement("style"),i=t.attributes||{};if(void 0===i.nonce){var r=s.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(t){e.setAttribute(t,i[t])})),"function"==typeof t.insert)t.insert(e);else{var a=n(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var h,u=(h=[],function(t,e){return h[t]=e,h.filter(Boolean).join("\n")});function p(t,e,s,i){var r=s?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(t.styleSheet)t.styleSheet.cssText=u(e,r);else{var n=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(n,a[e]):t.appendChild(n)}}function l(t,e,s){var i=s.css,r=s.media,n=s.sourceMap;if(r?t.setAttribute("media",r):t.removeAttribute("media"),n&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var m=null,f=0;function g(t,e){var s,i,r;if(e.singleton){var n=f++;s=m||(m=d(e)),i=p.bind(null,s,n,!1),r=p.bind(null,s,n,!0)}else s=d(e),i=l.bind(null,s,e),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(s)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else r()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=r());var s=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var i=0;i<s.length;i++){var r=o(s[i]);a[r].references--}for(var n=c(t,e),d=0;d<s.length;d++){var h=o(s[d]);0===a[h].references&&(a[h].updater(),a.splice(h,1))}s=n}}}},function(t,e,s){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var s=function(t,e){var s=t[1]||"",i=t[3];if(!i)return s;if(e&&"function"==typeof btoa){var r=(a=i,o=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),"/*# ".concat(c," */")),n=i.sources.map((function(t){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(t," */")}));return[s].concat(n).concat([r]).join("\n")}var a,o,c;return[s].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(s,"}"):s})).join("")},e.i=function(t,s,i){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(i)for(var n=0;n<this.length;n++){var a=this[n][0];null!=a&&(r[a]=!0)}for(var o=0;o<t.length;o++){var c=[].concat(t[o]);i&&r[c[0]]||(s&&(c[2]?c[2]="".concat(s," and ").concat(c[2]):c[2]=s),e.push(c))}},e}},function(t,e,s){t.exports=function(){return new Worker(s.p+"WorkerName.ac00298323becf829ebb.js")}},function(t,e,s){t.exports=function(){return new Worker(s.p+"WorkerName.50ffea08a031d6e46710.js")}},function(t,e,s){t.exports=function(){return new Worker(s.p+"WorkerName.ee1818e6fe97c7d36a0f.js")}},function(t,e,s){var i=s(0),r=s(6);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var n={insert:"head",singleton:!1},a=(i(r,n),r.locals?r.locals:{});t.exports=a},function(t,e,s){(e=s(1)(!1)).push([t.i,".ffmpeg-info{\n    position:absolute;\n    font-size: 12px;\n    color:#FFFFFF;\n    padding:2px;\n    font-weight: bold;\n    background-color: rgba(0, 0, 0, 0.3);\n    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.3);\n    z-index: 10;\n}\n",""]),t.exports=e},function(t,e,s){var i=s(0),r=s(8);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var n={insert:"head",singleton:!1},a=(i(r,n),r.locals?r.locals:{});t.exports=a},function(t,e,s){(e=s(1)(!1)).push([t.i,".osh-view {\n    width:100%;\n    height: 100%;\n}\n",""]),t.exports=e},function(t,e,s){"use strict";s.r(e);Math.pow(2,53);function i(t){return null!=t}function r(t){return i(t)&&null!==t}function n(t,e){return r(t)&&typeof t===e}function a(t,e="letiable"){if(!i(t))throw e+" must be defined";return t}function o(t,e="letiable"){if(!i(t)||!t)throw e;return t}function c(t,e,s="letiable"){if(a(t,s),typeof t!==e)throw s+" must be of type "+e;return t}function d(t,e="letiable"){if(a(t,e),!Array.isArray(t))throw e+" must be an array";return t}function h(){return"xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){let e=16*Math.random()|0;return("x"===t?e:3&e|8).toString(16)}))}const u="closed-error";var p=class{constructor(t,e){this.id="DataSource-"+h(),this.name=t,this.properties=e,this.currentRunningProperties={},this.eventSubscriptionMap={},this.initialized=!1,this.init=void 0,this.messagesMap={}}getId(){return this.id}getName(){return this.name}getCurrentRunningProperties(){return this.currentRunningProperties}terminate(){null!==this.dataSourceWorker&&this.dataSourceWorker.terminate()}getTopicId(){return"datasource-data-"+this.id}getVersion(){return 0}subscribe(t,e){for(let s=0;s<e.length;s++)e[s]in this.eventSubscriptionMap||(this.eventSubscriptionMap[e[s]]=[]),this.eventSubscriptionMap[e[s]].push(t)}async createWorker(t){}async updateProperties(t){return this.currentRunningProperties={...this.properties,...t},new Promise(e=>{this.postMessage({message:"update-url",data:t},e)})}async connect(){await this.checkInit(),await this.doConnect()}async initDataSource(){return new Promise(async t=>{this.dataSourceWorker=await this.createWorker(this.properties),this.handleWorkerMessage(),this.postMessage({message:"init",id:this.id,properties:this.properties,topic:this.getTopicId()},async e=>{new BroadcastChannel(this.getTopicId()).onmessage=async t=>{this.handleMessage(t)},this.initialized=e,t()})})}async handleMessage(t){const e=t.data.type;if(e in this.eventSubscriptionMap)for(let s=0;s<this.eventSubscriptionMap[e].length;s++)this.eventSubscriptionMap[e][s](t.data)}async checkInit(){return new Promise(async(t,e)=>{i(this.init)||(this.init=this.initDataSource()),await this.init,t()})}async doConnect(){return new Promise(async t=>{this.postMessage({message:"connect"},t)})}async isConnected(){return new Promise(async t=>{await this.checkInit(),this.postMessage({message:"is-connected"},t)})}async disconnect(){return new Promise(async t=>{await this.checkInit(),this.postMessage({message:"disconnect"},t)})}postMessage(t,e){const s=h();this.dataSourceWorker.postMessage({...t,messageId:s}),i(e)&&(this.messagesMap[s]=e)}handleWorkerMessage(){this.dataSourceWorker.onmessage=t=>{const e=t.data.messageId;e in this.messagesMap&&(this.messagesMap[e](t.data.data),delete this.messagesMap[e])}}async onDisconnect(){}reset(){}};var l=class extends p{constructor(t,e){super(t,e),a(e,"Some properties must be defined"),a(e.startTime,"startTime must must be defined"),a(e.endTime,"startTime must must be defined"),this.timeSync=null}getTimeTopicId(){return"datasource-time-"+this.id}getStartTime(){return this.properties.startTime}getEndTime(){return this.properties.endTime}getMinTime(){return this.properties.minTime}getMaxTime(){return this.properties.maxTime}getReplaySpeed(){return i(this.currentRunningProperties)&&i(this.currentRunningProperties.replaySpeed)?this.currentRunningProperties.replaySpeed:i(this.properties.replaySpeed)?this.properties.replaySpeed:1}async setDataSynchronizer(t){return new Promise(async(e,s)=>{await this.checkInit();const i="data-synchronizer-"+t.id;this.timeSync=t,this.postMessage({message:"topic",topic:i,timeTopic:this.getTimeTopicId()},e)})}async initDataSource(t){return await super.initDataSource(t),new Promise(async t=>{this.postMessage({message:"topic",topic:this.getTopicId(),timeTopic:this.getTimeTopicId()},async()=>{new BroadcastChannel(this.getTimeTopicId()).onmessage=async t=>{this.handleTimeMessage(t)},t()})})}async handleTimeMessage(t){const e=t.data.type;if(e in this.eventSubscriptionMap)for(let s=0;s<this.eventSubscriptionMap[e].length;s++)this.eventSubscriptionMap[e][s](t.data)}async setTimeRange(t,e,s,r=!1){let n={};return i(s)&&(n={replaySpeed:s}),this.updateProperties({...this.currentRunningProperties,startTime:t,endTime:e,...n,reconnect:r})}async getCurrentTime(){return i(this.timeSync)?this.timeSync.getCurrentTime():new Promise(t=>{this.postMessage({message:"last-timestamp"},t)})}},m=s(2),f=s.n(m);s(4);var g=class extends l{constructor(t,e){super(t,{timeShift:0,reconnectTimeout:5e3,tls:!1,...e})}async createWorker(t){return new f.a}};s(5),s(7);const y="data",v="status",S="time-changed";var b=class{constructor(t){this.properties=t,this.dataSourcesToFn=void 0,this.data=[],this.props={},this.props.id="layer-"+h(),this.props.name="",this.props.description="",this.props.dataSourceId="",this.props.visible=!0,this.props.filter=!0,i(t.name)&&(this.props.name=t.name),i(t.description)&&(this.props.description=t.description),i(t.dataSourceId)&&(this.props.dataSourceId=t.dataSourceId),i(t.visible)&&(this.props.visible=t.visible),this.initEvents();const e=this;if(this.checkFn("filter")){let t=function(t,s,i){e.props.filter=e.getFunc("filter")(t,s,i)};this.addFn(e.getDataSourcesIdsByProperty("filter"),t)}else{this.properties.filter=function(t,e,s){return!0};let t=async function(t,s,i){e.props.filter=await e.getFunc("filter")(t,s,i)};this.addFn(e.getDataSourcesIdsByProperty("filter"),t)}if(this.checkFn("getVisible")){let t=async function(t,s,i){e.props.visible=await e.getFunc("getVisible")(t,s,i)};this.addFn(e.getDataSourcesIdsByProperty("getVisible"),t)}}saveState(){this.initialState={...this.props}}restoreState(){this.props={...this.initialState}}getFunc(t){return this.properties[t].handler||this.properties[t]}checkFn(t){let e=this.properties[t];if(n(e,"function"))return a(this.properties.dataSourceId,"dataSourceId"),!0;{let s=r(e);return s&&(d(e.dataSourceIds,t+".dataSourceIds"),function(t,e){c(t,"function",e)}(e.handler,t+".handler")),s}}initEvents(){}clear(){}getId(){return this.id}select(t){}addFn(t,e){i(this.dataSourcesToFn)||(this.dataSourcesToFn={});for(let s=0;s<t.length;s++){let r=t[s];i(this.dataSourcesToFn[r])||(this.dataSourcesToFn[r]=[]),this.dataSourcesToFn[r].push(e)}}async setData(t,e,s={}){if(this.data=[],s.dataSourceId=t,i(this.dataSourcesToFn)&&t in this.dataSourcesToFn){let i=this.dataSourcesToFn[t];for(let t=0;t<e.length;t++){for(let r=0;r<i.length&&(await i[r](e[t].data,e[t].timeStamp,s),this.props.filter);r++);this.props.filter&&this.data.push({...this.props})}}}getDataSourcesIds(){if(i(this.dataSourcesToFn)){let t=[];for(let e in this.dataSourcesToFn)t.push(e);return t}return a(this.properties.dataSourceId,"dataSourceId must be defined"),[this.properties.dataSourceId]}getDataSourcesIdsByProperty(t){return this.properties[t].dataSourceIds||[this.properties.dataSourceId]}init(){}getProps(){return{type:this.type,values:this.data}}reset(){this.restoreState()}};var w=class extends b{constructor(t){super(t),this.type="data"}async setData(t,e,s){this.props.data=e}getProps(){return{type:this.type,values:this.props.data}}};var x=class{constructor(t){this.layers=[],this.lastRec={},this.dataSources=[],this.id="view-"+h(),this.css="",i(t)&&i(t.css)&&(this.css=t.css),a(t&&t.supportedLayers,"supportedLayers"),d(t.supportedLayers,"supportedLayers"),o(t.supportedLayers.length>0,"supportedLayers.length === 0"),this.supportedLayers=t.supportedLayers,this.init(t)}init(t){this.properties=t,this.elementDiv=document.createElement("div"),this.elementDiv.setAttribute("id",this.id),this.elementDiv.setAttribute("class",this.css+" osh-view"),this.divId=this.id;let e=i(t.container)?t.container:document.body,s=document.getElementById(e);if(i(s)&&null!==s?(s.appendChild(this.elementDiv),this.container=s):(document.body.appendChild(this.elementDiv),this.hide(),this.container=document.body),this.beforeAddingItems(t),i(t)){if(i(t.layers))for(let e=0;e<t.layers.length;e++)this.addLayer(t.layers[e]);i(t.dataSourceId)&&this.addLayer(new w({dataSourceId:t.dataSourceId})),i(t.visible)&&(document.getElementById(this.divId).style.display=t.visible?"block":"none")}const r=this;new MutationObserver(t=>{t.forEach((function(t){"style"===t.attributeName&&r.onResize()}))}).observe(this.elementDiv,{attributes:!0});new MutationObserver((function(t){i(document.getElementById(r.divId))||(this.disconnect(),r.destroy())})).observe(document.body,{childList:!0})}hide(){this.elementDiv.style.display="none"}onResize(){}attachTo(t){i(this.elementDiv.parentNode)&&this.elementDiv.parentNode.removeChild(this.elementDiv),document.getElementById(t).appendChild(this.elementDiv),"none"===this.elementDiv.style.display&&(this.elementDiv.style.display="block"),this.onResize()}beforeAddingItems(t){}getId(){return this.id}getDivId(){return this.divId}setData(t,e){}show(t){}destroy(){}addLayer(t){o(this.supportedLayers.includes(t.type),"this layer is not supported: "+t.type+", should be "+this.supportedLayers),this.layers.push(t);let e=t.getDataSourcesIds();for(let s=0;s<e.length;s++){const i=e[s];let r=this;new BroadcastChannel("datasource-data-"+i).onmessage=async e=>{if(e.data.type===v&&e.data.status===u)r.reset();else if(e.data.type===y){const s=this;t.setData(i,e.data.values).then(()=>{s.setData(i,t.getProps()),r.lastRec[i]=e.data})}};new BroadcastChannel("datasource-time-"+i).onmessage=t=>{t.data.type===S&&r.reset()}}}removeAllFromLayer(t){if(this.layers.includes(t)){for(let e in t.dataSourcesToFn)delete this.lastRec[e];t.reset()}}removeAllFromLayers(){for(let t of this.layers)this.removeAllFromLayer(t)}getDataSourcesId(){let t=[];for(let e=0;e<this.layers.length;e++){let s=this.layers[e];t=t.concat(s.getDataSourcesIds())}return t}reset(){this.removeAllFromLayers()}};var T=class extends x{constructor(t){super(t),this.fps=0,this.width=1920,this.height=1080,this.showTime=!1,this.showStats=!1,this.statistics={averageFps:0,frames:0,firstTime:0,bitRate:0,averageBitRate:0},this.framerate=29.67,i(t)&&(i(t.framerate)&&(this.framerate=t.framerate),i(t.directPlay)&&(this.directPlay=t.directPlay),i(t.codec)&&(this.codec=t.codec),i(t.showTime)&&(this.showTime=t.showTime),i(t.showStats)&&(this.showStats=t.showStats),i(t.width)&&(this.width=t.width),i(t.height)&&(this.height=t.height));let e,s,r=document.getElementById(this.divId);(this.showTime||this.showStats)&&(this.textDiv=document.createElement("div"),this.textDiv.setAttribute("width",""+this.width),this.textDiv.setAttribute("height",15),this.textDiv.setAttribute("class","ffmpeg-info"),this.showTime&&(this.textFpsDiv=document.createElement("div"),this.textFpsDiv.setAttribute("class","ffmpeg-fps"),this.textDiv.appendChild(this.textFpsDiv)),this.showStats&&(this.textStatsDiv=document.createElement("div"),this.textStatsDiv.setAttribute("class","ffmpeg-stats"),this.textDiv.appendChild(this.textStatsDiv)),r.appendChild(this.textDiv)),this.domNode=r,i(document.hidden)?(e="hidden",s="visibilitychange"):i(document.msHidden)?(e="msHidden",s="msvisibilitychange"):i(document.webkitHidden)&&(e="webkitHidden",s="webkitvisibilitychange");const n=this;document.addEventListener(s,(function(){document.hidden?n.skipFrame=!0:n.skipFrame=!1}),!1)}updateStatistics(t){if(this.statistics.frames++,this.statistics.pktSize+=t,0===this.statistics.firstTime)return void(this.statistics.firstTime=performance.now());const e=performance.now();e-this.statistics.firstTime<1e3||(this.statistics.averageFps=(this.statistics.frames-1)/((e-this.statistics.firstTime)/1e3),this.statistics.averageBitRate=(this.statistics.pktSize-t)/((e-this.statistics.firstTime)/1e3),this.statistics.frames=1,this.statistics.pktSize=t,this.statistics.firstTime=e)}onUpdated(t){}destroy(){}onAfterDecoded(){}},I=s(3),D=s.n(I);var M=class extends T{constructor(t){if(super({supportedLayers:["data"],...t}),!1 in window)throw Error("WebCodec API is not supported");if(this.codecMap={vp9:"vp09.02.10.10.01.09.16.09.01",vp8:"vp08.00.41.08",h264:"avc1.42e01e"},this.codec=this.codecMap.h264,i(t.codec)){if(!t.codec in this.codecMap)throw Error("The codec properties.codec is not supported, the list of supported codec: this.codecMap");this.codec=this.codecMap[t.codec]}this.canvasElt=this.createCanvas(this.width,this.height),this.domNode.appendChild(this.canvasElt)}createCanvas(t,e,s){const r=document.createElement("canvas");return r.setAttribute("width",t),r.setAttribute("height",e),i(s)&&r.setAttribute("style",s),r}updateCanvasSize(t,e){this.canvasElt.setAttribute("width",t),this.canvasElt.setAttribute("height",e)}async setData(t,e){const s=e.values;for(let t=0;t<s.length;t++)if(!this.skipFrame){const t=s.shift();let e=t.data.frameData,i=t.data.roll,r=e.length;this.decode(r,e,t.timeStamp,i)}}reset(){}initDecoder(){this.gl=this.canvasElt.getContext("bitmaprenderer"),this.decodeWorker=new D.a,this.decodeWorker.postMessage({init:{codec:this.codec,width:this.width,height:this.height}}),this.decodeWorker.onmessage=t=>{if(t.data.init)this.codecConfigured=!0;else if(this.codecConfigured){const e=t.data.bitmap,s=t.data.width,r=t.data.height;if(!i(e))return void console.warn("Bitmap is undefined, skipping this frame..");this.handleDocodedFrame(e,s,r)}}}async handleDocodedFrame(t,e,s){try{this.width===e&&this.height===s||(this.width=e,this.height=s,this.updateCanvasSize(e,s)),this.gl.transferFromImageBitmap(t),this.updateStatistics(event.data.pktSize),this.showTime&&(this.textFpsDiv.innerText=new Date(event.data.timestamp).toISOString()+" "),this.showStats&&(this.textStatsDiv.innerText=this.statistics.averageFps.toFixed(2)+" fps, "+(this.statistics.averageBitRate/1e3).toFixed(2)+" kB/s @"),this.onUpdated(this.statistics)}catch(t){console.error(t)}finally{t.close()}}async decode(t,e,s,i){this.codecConfigured||this.initDecoder(),this.codecConfigured?this.decodeWorker.postMessage({pktSize:t,pktData:e,roll:i,codec:this.codec,timeStamp:s},[e.buffer]):console.warn("decoder has not been initialized yet")}destroy(){super.destroy()}};let F=new g("drone-Video",{protocol:"ws",service:"SOS",endpointUrl:"sensiasoft.net:8181/sensorhub/sos",offeringID:"urn:mysos:solo:video2",observedProperty:"http://sensorml.com/ont/swe/property/VideoFrame",startTime:"2015-12-19T21:04:30Z",endTime:"2015-12-19T21:09:19Z",replaySpeed:1});new M({container:"video-h264-container",css:"video-h264",name:"UAV Video",showTime:!0,showStats:!0,dataSourceId:F.id});F.connect()}]);