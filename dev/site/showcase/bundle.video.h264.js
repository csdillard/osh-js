!function(t){var e={};function i(r){if(e[r])return e[r].exports;var s=e[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(r,s,function(e){return t[e]}.bind(null,s));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=9)}([function(t,e,i){"use strict";var r,s=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var t={};return function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}t[e]=i}return t[e]}}(),n=[];function o(t){for(var e=-1,i=0;i<n.length;i++)if(n[i].identifier===t){e=i;break}return e}function h(t,e){for(var i={},r=[],s=0;s<t.length;s++){var a=t[s],h=e.base?a[0]+e.base:a[0],c=i[h]||0,u="".concat(h," ").concat(c);i[h]=c+1;var d=o(u),l={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(n[d].references++,n[d].updater(l)):n.push({identifier:u,updater:v(l,e),references:1}),r.push(u)}return r}function c(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var s=i.nc;s&&(r.nonce=s)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var n=a(t.insert||"head");if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(e)}return e}var u,d=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function l(t,e,i,r){var s=i?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=d(e,s);else{var a=document.createTextNode(s),n=t.childNodes;n[e]&&t.removeChild(n[e]),n.length?t.insertBefore(a,n[e]):t.appendChild(a)}}function p(t,e,i){var r=i.css,s=i.media,a=i.sourceMap;if(s?t.setAttribute("media",s):t.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var f=null,m=0;function v(t,e){var i,r,s;if(e.singleton){var a=m++;i=f||(f=c(e)),r=l.bind(null,i,a,!1),s=l.bind(null,i,a,!0)}else i=c(e),r=p.bind(null,i,e),s=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(i)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else s()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=s());var i=h(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<i.length;r++){var s=o(i[r]);n[s].references--}for(var a=h(t,e),c=0;c<i.length;c++){var u=o(i[c]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}i=a}}}},function(t,e,i){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i=function(t,e){var i=t[1]||"",r=t[3];if(!r)return i;if(e&&"function"==typeof btoa){var s=(n=r,o=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),h="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),"/*# ".concat(h," */")),a=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[i].concat(a).concat([s]).join("\n")}var n,o,h;return[i].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(i,"}"):i})).join("")},e.i=function(t,i,r){"string"==typeof t&&(t=[[null,t,""]]);var s={};if(r)for(var a=0;a<this.length;a++){var n=this[a][0];null!=n&&(s[n]=!0)}for(var o=0;o<t.length;o++){var h=[].concat(t[o]);r&&s[h[0]]||(i&&(h[2]?h[2]="".concat(i," and ").concat(h[2]):h[2]=i),e.push(h))}},e}},function(t,e,i){t.exports=function(){return new Worker(i.p+"WorkerName.92dc21d973de2fb2f253.js")}},function(t,e,i){t.exports=function(){return new Worker(i.p+"WorkerName.1ceb617a5e04ec718b81.js")}},function(t,e,i){t.exports=function(){return new Worker(i.p+"WorkerName.9d444e37e040827dcbe2.js")}},function(t,e,i){var r=i(0),s=i(6);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[t.i,s,""]]);var a={insert:"head",singleton:!1},n=(r(s,a),s.locals?s.locals:{});t.exports=n},function(t,e,i){(e=i(1)(!1)).push([t.i,".osh-view {\n    width:100%;\n    height: 100%;\n}\n",""]),t.exports=e},function(t,e,i){var r=i(0),s=i(8);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[t.i,s,""]]);var a={insert:"head",singleton:!1},n=(r(s,a),s.locals?s.locals:{});t.exports=n},function(t,e,i){(e=i(1)(!1)).push([t.i,".ffmpeg-info{\n    position:absolute;\n    font-size: 12px;\n    color:#FFFFFF;\n    padding:2px;\n    font-weight: bold;\n    background-color: rgba(0, 0, 0, 0.3);\n    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.3);\n    z-index: 10;\n}\n",""]),t.exports=e},function(t,e,i){"use strict";i.r(e);Math.pow(2,53);function r(t){return null!=t}function s(t){return r(t)&&null!==t}function a(t,e){return s(t)&&typeof t===e}function n(t,e="letiable"){if(!r(t))throw e+" must be defined";return t}function o(t,e="letiable"){if(!r(t)||!t)throw e;return t}function h(t,e,i="letiable"){if(n(t,i),typeof t!==e)throw i+" must be of type "+e;return t}function c(t,e="letiable"){if(n(t,e),!Array.isArray(t))throw e+" must be an array";return t}function u(){return"xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){let e=16*Math.random()|0;return("x"===t?e:3&e|8).toString(16)}))}const d="closed-error";var l=class{constructor(t,e){this.id="DataSource-"+u(),this.name=t,this.properties=e,this.currentRunningProperties={},this.eventSubscriptionMap={},this.initialized=!1,this.init=void 0,this.messagesMap={}}getId(){return this.id}getName(){return this.name}getCurrentRunningProperties(){return this.currentRunningProperties}terminate(){null!==this.dataSourceWorker&&this.dataSourceWorker.terminate()}getTopicId(){return"datasource-data-"+this.id}getVersion(){return 0}subscribe(t,e){for(let i=0;i<e.length;i++)e[i]in this.eventSubscriptionMap||(this.eventSubscriptionMap[e[i]]=[]),this.eventSubscriptionMap[e[i]].push(t)}async createWorker(t){}async updateProperties(t){return this.currentRunningProperties={...this.properties,...t},new Promise(e=>{this.postMessage({message:"update-url",data:t},e)})}async connect(){await this.checkInit(),await this.doConnect()}async initDataSource(){return new Promise(async t=>{this.dataSourceWorker=await this.createWorker(this.properties),this.handleWorkerMessage(),this.postMessage({message:"init",id:this.id,properties:this.properties,topic:this.getTopicId()},async e=>{new BroadcastChannel(this.getTopicId()).onmessage=async t=>{this.handleMessage(t)},this.initialized=e,t()})})}async handleMessage(t){const e=t.data.type;if(e in this.eventSubscriptionMap)for(let i=0;i<this.eventSubscriptionMap[e].length;i++)this.eventSubscriptionMap[e][i](t.data)}async checkInit(){return new Promise(async(t,e)=>{r(this.init)||(this.init=this.initDataSource()),await this.init,t()})}async doConnect(){return new Promise(async t=>{this.postMessage({message:"connect"},t)})}async isConnected(){return new Promise(async t=>{await this.checkInit(),this.postMessage({message:"is-connected"},t)})}async disconnect(){return new Promise(async t=>{await this.checkInit(),this.postMessage({message:"disconnect"},t)})}postMessage(t,e){const i=u();this.dataSourceWorker.postMessage({...t,messageId:i}),r(e)&&(this.messagesMap[i]=e)}handleWorkerMessage(){this.dataSourceWorker.onmessage=t=>{const e=t.data.messageId;e in this.messagesMap&&(this.messagesMap[e](t.data.data),delete this.messagesMap[e])}}async onDisconnect(){}reset(){}};var p=class extends l{constructor(t,e){super(t,e),n(e,"Some properties must be defined"),n(e.startTime,"startTime must must be defined"),n(e.endTime,"startTime must must be defined"),this.timeSync=null}getTimeTopicId(){return"datasource-time-"+this.id}getStartTime(){return this.properties.startTime}getEndTime(){return this.properties.endTime}getMinTime(){return this.properties.minTime}getMaxTime(){return this.properties.maxTime}getReplaySpeed(){return r(this.currentRunningProperties)&&r(this.currentRunningProperties.replaySpeed)?this.currentRunningProperties.replaySpeed:r(this.properties.replaySpeed)?this.properties.replaySpeed:1}async setDataSynchronizer(t){return new Promise(async(e,i)=>{await this.checkInit();const r="data-synchronizer-"+t.id;this.timeSync=t,this.postMessage({message:"topic",topic:r,timeTopic:this.getTimeTopicId()},e)})}async initDataSource(t){return await super.initDataSource(t),new Promise(async t=>{this.postMessage({message:"topic",topic:this.getTopicId(),timeTopic:this.getTimeTopicId()},async()=>{new BroadcastChannel(this.getTimeTopicId()).onmessage=async t=>{this.handleTimeMessage(t)},t()})})}async handleTimeMessage(t){const e=t.data.type;if(e in this.eventSubscriptionMap)for(let i=0;i<this.eventSubscriptionMap[e].length;i++)this.eventSubscriptionMap[e][i](t.data)}async setTimeRange(t,e,i,s=!1){let a={};return r(i)&&(a={replaySpeed:i}),this.updateProperties({...this.currentRunningProperties,startTime:t,endTime:e,...a,reconnect:s})}async getCurrentTime(){return r(this.timeSync)?this.timeSync.getCurrentTime():new Promise(t=>{this.postMessage({message:"last-timestamp"},t)})}},f=i(2),m=i.n(f);i(4);var v=class extends p{constructor(t,e){super(t,{timeShift:0,reconnectTimeout:5e3,tls:!1,...e})}async createWorker(t){return new m.a}};i(5);const g="data",y="status",x="time-changed";var T=class{constructor(t){this.properties=t,this.dataSourcesToFn=void 0,this.data=[],this.props={},this.props.id="layer-"+u(),this.props.name="",this.props.description="",this.props.dataSourceId="",this.props.visible=!0,this.props.filter=!0,r(t.name)&&(this.props.name=t.name),r(t.description)&&(this.props.description=t.description),r(t.dataSourceId)&&(this.props.dataSourceId=t.dataSourceId),r(t.visible)&&(this.props.visible=t.visible),this.initEvents();const e=this;if(this.checkFn("filter")){let t=function(t,i,r){e.props.filter=e.getFunc("filter")(t,i,r)};this.addFn(e.getDataSourcesIdsByProperty("filter"),t)}else{this.properties.filter=function(t,e,i){return!0};let t=async function(t,i,r){e.props.filter=await e.getFunc("filter")(t,i,r)};this.addFn(e.getDataSourcesIdsByProperty("filter"),t)}if(this.checkFn("getVisible")){let t=async function(t,i,r){e.props.visible=await e.getFunc("getVisible")(t,i,r)};this.addFn(e.getDataSourcesIdsByProperty("getVisible"),t)}}saveState(){this.initialState={...this.props}}restoreState(){this.props={...this.initialState}}getFunc(t){return this.properties[t].handler||this.properties[t]}checkFn(t){let e=this.properties[t];if(a(e,"function"))return n(this.properties.dataSourceId,"dataSourceId"),!0;{let i=s(e);return i&&(c(e.dataSourceIds,t+".dataSourceIds"),function(t,e){h(t,"function",e)}(e.handler,t+".handler")),i}}initEvents(){}clear(){}getId(){return this.id}select(t){}addFn(t,e){r(this.dataSourcesToFn)||(this.dataSourcesToFn={});for(let i=0;i<t.length;i++){let s=t[i];r(this.dataSourcesToFn[s])||(this.dataSourcesToFn[s]=[]),this.dataSourcesToFn[s].push(e)}}async setData(t,e,i={}){if(this.data=[],i.dataSourceId=t,r(this.dataSourcesToFn)&&t in this.dataSourcesToFn){let r=this.dataSourcesToFn[t];for(let t=0;t<e.length;t++){for(let s=0;s<r.length&&(await r[s](e[t].data,e[t].timeStamp,i),this.props.filter);s++);this.props.filter&&this.data.push({...this.props})}}}getDataSourcesIds(){if(r(this.dataSourcesToFn)){let t=[];for(let e in this.dataSourcesToFn)t.push(e);return t}return n(this.properties.dataSourceId,"dataSourceId must be defined"),[this.properties.dataSourceId]}getDataSourcesIdsByProperty(t){return this.properties[t].dataSourceIds||[this.properties.dataSourceId]}init(){}getProps(){return{type:this.type,values:this.data}}reset(){this.restoreState()}};var R=class extends T{constructor(t){super(t),this.type="data"}async setData(t,e,i){this.props.data=e}getProps(){return{type:this.type,values:this.props.data}}};var b=class{constructor(t){this.layers=[],this.lastRec={},this.dataSources=[],this.id="view-"+u(),this.css="",r(t)&&r(t.css)&&(this.css=t.css),n(t&&t.supportedLayers,"supportedLayers"),c(t.supportedLayers,"supportedLayers"),o(t.supportedLayers.length>0,"supportedLayers.length === 0"),this.supportedLayers=t.supportedLayers,this.init(t)}init(t){this.properties=t,this.elementDiv=document.createElement("div"),this.elementDiv.setAttribute("id",this.id),this.elementDiv.setAttribute("class",this.css+" osh-view"),this.divId=this.id;let e=r(t.container)?t.container:document.body,i=document.getElementById(e);if(r(i)&&null!==i?(i.appendChild(this.elementDiv),this.container=i):(document.body.appendChild(this.elementDiv),this.hide(),this.container=document.body),this.beforeAddingItems(t),r(t)){if(r(t.layers))for(let e=0;e<t.layers.length;e++)this.addLayer(t.layers[e]);r(t.dataSourceId)&&this.addLayer(new R({dataSourceId:t.dataSourceId})),r(t.visible)&&(document.getElementById(this.divId).style.display=t.visible?"block":"none")}const s=this;new MutationObserver(t=>{t.forEach((function(t){"style"===t.attributeName&&s.onResize()}))}).observe(this.elementDiv,{attributes:!0});new MutationObserver((function(t){r(document.getElementById(s.divId))||(this.disconnect(),s.destroy())})).observe(document.body,{childList:!0})}hide(){this.elementDiv.style.display="none"}onResize(){}attachTo(t){r(this.elementDiv.parentNode)&&this.elementDiv.parentNode.removeChild(this.elementDiv),document.getElementById(t).appendChild(this.elementDiv),"none"===this.elementDiv.style.display&&(this.elementDiv.style.display="block"),this.onResize()}beforeAddingItems(t){}getId(){return this.id}getDivId(){return this.divId}setData(t,e){}show(t){}destroy(){}addLayer(t){o(this.supportedLayers.includes(t.type),"this layer is not supported: "+t.type+", should be "+this.supportedLayers),this.layers.push(t);let e=t.getDataSourcesIds();for(let i=0;i<e.length;i++){const r=e[i];let s=this;new BroadcastChannel("datasource-data-"+r).onmessage=async e=>{if(e.data.type===y&&e.data.status===d)s.reset();else if(e.data.type===g){const i=this;t.setData(r,e.data.values).then(()=>{i.setData(r,t.getProps()),s.lastRec[r]=e.data})}};new BroadcastChannel("datasource-time-"+r).onmessage=t=>{t.data.type===x&&s.reset()}}}removeAllFromLayer(t){if(this.layers.includes(t)){for(let e in t.dataSourcesToFn)delete this.lastRec[e];t.reset()}}removeAllFromLayers(){for(let t of this.layers)this.removeAllFromLayer(t)}getDataSourcesId(){let t=[];for(let e=0;e<this.layers.length;e++){let i=this.layers[e];t=t.concat(i.getDataSourcesIds())}return t}reset(){this.removeAllFromLayers()}},S=i(3),w=i.n(S);i(7);var D=class{constructor(t){t=t||{},this.canvasElement=t.canvas||document.createElement("canvas"),this.contextOptions=t.contextOptions,this.type=t.type||"yuv420",this.customYUV444=t.customYUV444,this.conversionType=t.conversionType||"rec601",this.width=t.width||640,this.height=t.height||320,this.animationTime=t.animationTime||0,this.canvasElement.width=this.width,this.canvasElement.height=this.height,this.init()}init(){this.initContextGL(),this.contextGL&&(this.initProgram(),this.initBuffers(),this.initTextures()),"yuv420"===this.type?(this.drawNextOuptutPictureGL=t=>{var e=this.contextGL,i=this.texturePosBuffer,r=this.uTexturePosBuffer,s=this.vTexturePosBuffer,a=this.yTextureRef,n=this.uTextureRef,o=this.vTextureRef,h=t.yData,c=t.uData,u=t.vData,d=this.width,l=this.height,p=t.yDataPerRow||d,f=t.yRowCnt||l,m=t.uDataPerRow||d/2,v=t.uRowCnt||l/2,g=t.vDataPerRow||m,y=t.vRowCnt||v;let x=90*Math.round(t.roll/90);x>180&&(x-=360),90==Math.abs(x)?(this.canvasElement.width=this.height,this.canvasElement.height=this.width,e.viewport(0,0,l,d)):(this.canvasElement.width=this.width,this.canvasElement.height=this.height,e.viewport(0,0,d,l));var T=l/f,R=d/p,b=new Float32Array([R,0,0,0,R,T,0,T]);e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,b,e.DYNAMIC_DRAW),this.customYUV444?(T=l/v,R=d/m):(T=l/2/v,R=d/2/m);var S=new Float32Array([R,0,0,0,R,T,0,T]);e.bindBuffer(e.ARRAY_BUFFER,r),e.bufferData(e.ARRAY_BUFFER,S,e.DYNAMIC_DRAW),this.customYUV444?(T=l/y,R=d/g):(T=l/2/y,R=d/2/g);var w=new Float32Array([R,0,0,0,R,T,0,T]);e.bindBuffer(e.ARRAY_BUFFER,s),e.bufferData(e.ARRAY_BUFFER,w,e.DYNAMIC_DRAW),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,a),e.texImage2D(e.TEXTURE_2D,0,e.LUMINANCE,p,f,0,e.LUMINANCE,e.UNSIGNED_BYTE,h),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,n),e.texImage2D(e.TEXTURE_2D,0,e.LUMINANCE,m,v,0,e.LUMINANCE,e.UNSIGNED_BYTE,c),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,o),e.texImage2D(e.TEXTURE_2D,0,e.LUMINANCE,g,y,0,e.LUMINANCE,e.UNSIGNED_BYTE,u),e.uniform1f(this.rollUniform,x*Math.PI/180),e.drawArrays(e.TRIANGLE_STRIP,0,4)},this.drawNextOuptutPictureBitmapGL=t=>{var e=this.contextGL,i=this.texturePosBuffer,r=this.yTextureRef,s=t.yData,a=this.width,n=this.height,o=n/n,h=a/a,c=new Float32Array([h,0,0,0,h,o,0,o]);e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,c,e.DYNAMIC_DRAW),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,s),e.drawArrays(e.TRIANGLE_STRIP,0,4)}):"yuv422"===this.type&&(this.drawNextOuptutPictureGL=t=>{var e=this.contextGL,i=this.texturePosBuffer,r=this.textureRef,s=t.data,a=this.width,n=this.height,o=t.dataPerRow||2*a,h=t.rowCnt||n;e.viewport(0,0,a,n);var c=n/h,u=a/(o/2),d=new Float32Array([u,0,0,0,u,c,0,c]);e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,d,e.DYNAMIC_DRAW),e.uniform2f(e.getUniformLocation(this.shaderProgram,"resolution"),o,n),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,e.LUMINANCE,o,h,0,e.LUMINANCE,e.UNSIGNED_BYTE,s),e.drawArrays(e.TRIANGLE_STRIP,0,4)})}isWebGL(){return this.contextGL}initContextGL(){for(var t=this.canvasElement,e=null,i=["webgl","experimental-webgl","moz-webgl","webkit-3d"],r=0;!e&&r<i.length;){var s=i[r];try{e=this.contextOptions?t.getContext(s,this.contextOptions):t.getContext(s)}catch(t){e=null}e&&"function"==typeof e.getParameter||(e=null),++r}this.contextGL=e}initProgram(){var t,e,i=this.contextGL;"yuv420"===this.type?(t=["attribute vec4 vertexPos;","attribute vec4 texturePos;","attribute vec4 uTexturePos;","attribute vec4 vTexturePos;","varying vec2 textureCoord;","varying vec2 uTextureCoord;","varying vec2 vTextureCoord;","uniform float roll;","void main()","{","  vec4 ctr = vec4(0.5, 0.5, 0, 0);","  mat4 rotMatrix = mat4( cos(roll), -sin(roll), 0, 0,","                         sin(roll),  cos(roll), 0, 0,","                         0,          0,         1, 0,","                         0,          0,         0, 1);","  gl_Position = vertexPos;","  textureCoord = mat2(rotMatrix) * (texturePos.xy - vec2(ctr)) + vec2(ctr);","  uTextureCoord = mat2(rotMatrix) * (uTexturePos.xy - vec2(ctr)) + vec2(ctr);","  vTextureCoord = mat2(rotMatrix) * (vTexturePos.xy - vec2(ctr)) + vec2(ctr);","}"].join("\n"),e=["precision highp float;","varying highp vec2 textureCoord;","varying highp vec2 uTextureCoord;","varying highp vec2 vTextureCoord;","uniform sampler2D ySampler;","uniform sampler2D uSampler;","uniform sampler2D vSampler;","uniform mat4 YUV2RGB;","void main(void) {","  highp float y = texture2D(ySampler,  textureCoord).r;","  highp float u = texture2D(uSampler,  uTextureCoord).r;","  highp float v = texture2D(vSampler,  vTextureCoord).r;","  gl_FragColor = vec4(y, u, v, 1) * YUV2RGB;","}"].join("\n")):"yuv422"===this.type&&(t=["attribute vec4 vertexPos;","attribute vec4 texturePos;","varying vec2 textureCoord;","void main()","{","  gl_Position = vertexPos;","  textureCoord = texturePos.xy;","}"].join("\n"),e=["precision highp float;","varying highp vec2 textureCoord;","uniform sampler2D sampler;","uniform highp vec2 resolution;","uniform mat4 YUV2RGB;","void main(void) {","  highp float texPixX = 1.0 / resolution.x;","  highp float logPixX = 2.0 / resolution.x;","  highp float logHalfPixX = 4.0 / resolution.x;","  highp float steps = floor(textureCoord.x / logPixX);","  highp float uvSteps = floor(textureCoord.x / logHalfPixX);","  highp float y = texture2D(sampler, vec2((logPixX * steps) + texPixX, textureCoord.y)).r;","  highp float u = texture2D(sampler, vec2((logHalfPixX * uvSteps), textureCoord.y)).r;","  highp float v = texture2D(sampler, vec2((logHalfPixX * uvSteps) + texPixX + texPixX, textureCoord.y)).r;","  gl_FragColor = vec4(y, u, v, 1.0) * YUV2RGB;","}"].join("\n"));var r=[];r="rec709"===this.conversionType?[1.16438,0,1.79274,-.97295,1.16438,-.21325,-.53291,.30148,1.16438,2.1124,0,-1.1334,0,0,0,1]:[1.16438,0,1.59603,-.87079,1.16438,-.39176,-.81297,.52959,1.16438,2.01723,0,-1.08139,0,0,0,1];var s=i.createShader(i.VERTEX_SHADER);i.shaderSource(s,t),i.compileShader(s),i.getShaderParameter(s,i.COMPILE_STATUS)||console.log("Vertex shader failed to compile: "+i.getShaderInfoLog(s));var a=i.createShader(i.FRAGMENT_SHADER);i.shaderSource(a,e),i.compileShader(a),i.getShaderParameter(a,i.COMPILE_STATUS)||console.log("Fragment shader failed to compile: "+i.getShaderInfoLog(a));var n=i.createProgram();i.attachShader(n,s),i.attachShader(n,a),i.linkProgram(n),i.getProgramParameter(n,i.LINK_STATUS)||console.log("Program failed to compile: "+i.getProgramInfoLog(n)),i.useProgram(n);var o=i.getUniformLocation(n,"YUV2RGB");i.uniformMatrix4fv(o,!1,r),this.rollUniform=i.getUniformLocation(n,"roll"),this.shaderProgram=n}initBuffers(){var t=this.contextGL,e=this.shaderProgram,i=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,i),t.bufferData(t.ARRAY_BUFFER,new Float32Array([1,1,-1,1,1,-1,-1,-1]),t.STATIC_DRAW);var r=t.getAttribLocation(e,"vertexPos");if(t.enableVertexAttribArray(r),t.vertexAttribPointer(r,2,t.FLOAT,!1,0,0),this.animationTime){var s=this.animationTime,a=0,n=function(){var i=1*(a+=15)/s;a>=s?i=1:setTimeout(n,15);var r=-1*i,o=1*i,h=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,h),t.bufferData(t.ARRAY_BUFFER,new Float32Array([o,o,r,o,o,r,r,r]),t.STATIC_DRAW);var c=t.getAttribLocation(e,"vertexPos");t.enableVertexAttribArray(c),t.vertexAttribPointer(c,2,t.FLOAT,!1,0,0);try{t.drawArrays(t.TRIANGLE_STRIP,0,4)}catch(t){}};n()}var o=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,o),t.bufferData(t.ARRAY_BUFFER,new Float32Array([1,0,0,0,1,1,0,1]),t.STATIC_DRAW);var h=t.getAttribLocation(e,"texturePos");if(t.enableVertexAttribArray(h),t.vertexAttribPointer(h,2,t.FLOAT,!1,0,0),this.texturePosBuffer=o,"yuv420"===this.type){var c=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,c),t.bufferData(t.ARRAY_BUFFER,new Float32Array([1,0,0,0,1,1,0,1]),t.STATIC_DRAW);var u=t.getAttribLocation(e,"uTexturePos");t.enableVertexAttribArray(u),t.vertexAttribPointer(u,2,t.FLOAT,!1,0,0),this.uTexturePosBuffer=c;var d=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,d),t.bufferData(t.ARRAY_BUFFER,new Float32Array([1,0,0,0,1,1,0,1]),t.STATIC_DRAW);var l=t.getAttribLocation(e,"vTexturePos");t.enableVertexAttribArray(l),t.vertexAttribPointer(l,2,t.FLOAT,!1,0,0),this.vTexturePosBuffer=d}}initTextures(){var t=this.contextGL,e=this.shaderProgram;if("yuv420"===this.type){var i=this.initTexture(),r=t.getUniformLocation(e,"ySampler");t.uniform1i(r,0),this.yTextureRef=i;var s=this.initTexture(),a=t.getUniformLocation(e,"uSampler");t.uniform1i(a,1),this.uTextureRef=s;var n=this.initTexture(),o=t.getUniformLocation(e,"vSampler");t.uniform1i(o,2),this.vTextureRef=n}else if("yuv422"===this.type){var h=this.initTexture(),c=t.getUniformLocation(e,"sampler");t.uniform1i(c,0),this.textureRef=h}}initTexture(){var t=this.contextGL,e=t.createTexture();return t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.bindTexture(t.TEXTURE_2D,null),e}drawNextOutputPicture(t,e,i,r){this.contextGL?this.drawNextOuptutPictureGL(t,e,i,r):this.drawNextOuptutPictureRGBA(t,e,i,r)}drawNextOuptutPictureRGBA(t,e,i,r){var s=r,a=this.canvasElement.getContext("2d"),n=a.getImageData(0,0,t,e);n.data.set(s),null===i?a.putImageData(n,0,0):a.putImageData(n,-i.left,-i.top,0,0,i.width,i.height)}resize(t,e){this.canvasElement.width=t,this.canvasElement.height=e,this.width=t,this.height=e}};var E=class extends b{constructor(t){super(t),this.fps=0,this.width=1920,this.height=1080,this.showTime=!1,this.showStats=!1,this.statistics={averageFps:0,frames:0,firstTime:0,bitRate:0,averageBitRate:0},this.framerate=29.67,r(t)&&(r(t.framerate)&&(this.framerate=t.framerate),r(t.directPlay)&&(this.directPlay=t.directPlay),r(t.codec)&&(this.codec=t.codec),r(t.showTime)&&(this.showTime=t.showTime),r(t.showStats)&&(this.showStats=t.showStats),r(t.width)&&(this.width=t.width),r(t.height)&&(this.height=t.height));let e,i,s=document.getElementById(this.divId);(this.showTime||this.showStats)&&(this.textDiv=document.createElement("div"),this.textDiv.setAttribute("width",""+this.width),this.textDiv.setAttribute("height",15),this.textDiv.setAttribute("class","ffmpeg-info"),this.showTime&&(this.textFpsDiv=document.createElement("div"),this.textFpsDiv.setAttribute("class","ffmpeg-fps"),this.textDiv.appendChild(this.textFpsDiv)),this.showStats&&(this.textStatsDiv=document.createElement("div"),this.textStatsDiv.setAttribute("class","ffmpeg-stats"),this.textDiv.appendChild(this.textStatsDiv)),s.appendChild(this.textDiv)),this.domNode=s,r(document.hidden)?(e="hidden",i="visibilitychange"):r(document.msHidden)?(e="msHidden",i="msvisibilitychange"):r(document.webkitHidden)&&(e="webkitHidden",i="webkitvisibilitychange");const a=this;document.addEventListener(i,(function(){document.hidden?a.skipFrame=!0:a.skipFrame=!1}),!1)}updateStatistics(t){if(this.statistics.frames++,this.statistics.pktSize+=t,0===this.statistics.firstTime)return void(this.statistics.firstTime=performance.now());const e=performance.now();e-this.statistics.firstTime<1e3||(this.statistics.averageFps=(this.statistics.frames-1)/((e-this.statistics.firstTime)/1e3),this.statistics.averageBitRate=(this.statistics.pktSize-t)/((e-this.statistics.firstTime)/1e3),this.statistics.frames=1,this.statistics.pktSize=t,this.statistics.firstTime=e)}onUpdated(t){}destroy(){}onAfterDecoded(){}};var A=class extends E{constructor(t){super({supportedLayers:["data"],...t}),this.directPlay=!1,this.codec="h264",this.yuvCanvas=this.createCanvas(this.width,this.height),this.domNode.appendChild(this.yuvCanvas.canvasElement),this.buf=[],this.bufferingTime=2e3}createCanvas(t,e,i){return new D({width:t,height:e,contextOptions:{preserveDrawingBuffer:!0}})}async setData(t,e){const i=e.values;for(let t=0;t<i.length;t++)if(!this.skipFrame){null==this.decodeWorker&&this.initFFMPEG_DECODER_WORKER();const t=i.shift();let e=t.data.frameData,r=t.data.roll,s=e.length;this.decode(s,e,t.timeStamp,r)}}reset(){r(this.decodeWorker)&&(this.decodeWorker.terminate(),this.decodeWorker=null),this.resetCalled=!0;let t=new Uint8Array(1);t[0]=128,this.yuvCanvas.drawNextOuptutPictureGL({yData:t,yDataPerRow:1,yRowCnt:1,uData:t,uDataPerRow:1,uRowCnt:1,vData:t,vDataPerRow:1,vRowCnt:1})}initFFMPEG_DECODER_WORKER(){this.decodeWorker=new w.a,this.decodeWorker.id=u();const t=this;this.decodeWorker.onmessage=function(e){let i=e.data;t.width===i.frame_width&&t.height===i.frame_height||(t.yuvCanvas.resize(i.frame_width,i.frame_height),t.width=i.frame_width,t.height=i.frame_height),t.yuvCanvas.canvasElement.drawing=!0,t.yuvCanvas.drawNextOuptutPictureGL({yData:i.frameYData,yDataPerRow:i.frame_width,yRowCnt:i.frame_height,uData:i.frameUData,uDataPerRow:i.frame_width/2,uRowCnt:i.frame_height/2,vData:i.frameVData,vDataPerRow:i.frame_width/2,vRowCnt:i.frame_height/2,roll:i.roll}),t.yuvCanvas.canvasElement.drawing=!1,this.updateStatistics(i.pktSize),this.showTime&&(this.textFpsDiv.innerText=new Date(i.timeStamp).toISOString()+" "),this.showStats&&(this.textStatsDiv.innerText=this.statistics.averageFps.toFixed(2)+" fps, "+(this.statistics.averageBitRate/1e3).toFixed(2)+" kB/s @"+t.yuvCanvas.width+"x"+t.yuvCanvas.height+"\n "+this.codec),this.onUpdated(this.statistics)}.bind(this)}async decode(t,e,i,r){if(t>0){let s=e.buffer;this.decodeWorker.postMessage({pktSize:t,pktData:s,roll:r,byteOffset:e.byteOffset,codec:this.codec,timeStamp:i,dataSourceId:this.dataSourceId},[s]),e=null}}destroy(){super.destroy(),r(this.interval)&&clearInterval(this.interval),this.decodeWorker.postMessage({message:"release"}),this.decodeWorker.terminate()}};let P=new v("drone-Video",{protocol:"ws",service:"SOS",endpointUrl:"sensiasoft.net:8181/sensorhub/sos",offeringID:"urn:mysos:solo:video2",observedProperty:"http://sensorml.com/ont/swe/property/VideoFrame",startTime:"2015-12-19T21:04:29.231Z",endTime:"2015-12-19T21:09:19.675Z",replaySpeed:1});new A({container:"video-h264-container",css:"video-h264",name:"UAV Video",framerate:25,showTime:!0,showStats:!0,dataSourceId:P.id});P.connect()}]);