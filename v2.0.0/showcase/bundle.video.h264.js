!function(t){var e={};function i(r){if(e[r])return e[r].exports;var s=e[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(r,s,function(e){return t[e]}.bind(null,s));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=9)}([function(t,e,i){"use strict";var r,s=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var t={};return function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}t[e]=i}return t[e]}}(),n=[];function o(t){for(var e=-1,i=0;i<n.length;i++)if(n[i].identifier===t){e=i;break}return e}function h(t,e){for(var i={},r=[],s=0;s<t.length;s++){var a=t[s],h=e.base?a[0]+e.base:a[0],c=i[h]||0,d="".concat(h," ").concat(c);i[h]=c+1;var u=o(d),l={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(n[u].references++,n[u].updater(l)):n.push({identifier:d,updater:p(l,e),references:1}),r.push(d)}return r}function c(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var s=i.nc;s&&(r.nonce=s)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var n=a(t.insert||"head");if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(e)}return e}var d,u=(d=[],function(t,e){return d[t]=e,d.filter(Boolean).join("\n")});function l(t,e,i,r){var s=i?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=u(e,s);else{var a=document.createTextNode(s),n=t.childNodes;n[e]&&t.removeChild(n[e]),n.length?t.insertBefore(a,n[e]):t.appendChild(a)}}function v(t,e,i){var r=i.css,s=i.media,a=i.sourceMap;if(s?t.setAttribute("media",s):t.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var f=null,m=0;function p(t,e){var i,r,s;if(e.singleton){var a=m++;i=f||(f=c(e)),r=l.bind(null,i,a,!1),s=l.bind(null,i,a,!0)}else i=c(e),r=v.bind(null,i,e),s=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(i)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else s()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=s());var i=h(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<i.length;r++){var s=o(i[r]);n[s].references--}for(var a=h(t,e),c=0;c<i.length;c++){var d=o(i[c]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=a}}}},function(t,e,i){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i=function(t,e){var i=t[1]||"",r=t[3];if(!r)return i;if(e&&"function"==typeof btoa){var s=(n=r,o=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),h="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),"/*# ".concat(h," */")),a=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[i].concat(a).concat([s]).join("\n")}var n,o,h;return[i].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(i,"}"):i})).join("")},e.i=function(t,i,r){"string"==typeof t&&(t=[[null,t,""]]);var s={};if(r)for(var a=0;a<this.length;a++){var n=this[a][0];null!=n&&(s[n]=!0)}for(var o=0;o<t.length;o++){var h=[].concat(t[o]);r&&s[h[0]]||(i&&(h[2]?h[2]="".concat(i," and ").concat(h[2]):h[2]=i),e.push(h))}},e}},function(t,e,i){t.exports=function(){return new Worker(i.p+"WorkerName.eef3a4564e811b992625.js")}},function(t,e,i){t.exports=function(){return new Worker(i.p+"WorkerName.6cd7831449199518592e.js")}},function(t,e,i){var r=i(0),s=i(5);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[t.i,s,""]]);var a={insert:"head",singleton:!1},n=(r(s,a),s.locals?s.locals:{});t.exports=n},function(t,e,i){(e=i(1)(!1)).push([t.i,".osh-view {\n    width:100%;\n    height: 100%;\n}\n",""]),t.exports=e},function(t,e,i){t.exports=function(){return new Worker(i.p+"WorkerName.9a603a227a1e1f5c1319.js")}},function(t,e,i){var r=i(0),s=i(8);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[t.i,s,""]]);var a={insert:"head",singleton:!1},n=(r(s,a),s.locals?s.locals:{});t.exports=n},function(t,e,i){(e=i(1)(!1)).push([t.i,".ffmpeg-info{\n    position:absolute;\n    font-size: 12px;\n    color:#FFFFFF;\n    padding:2px;\n    font-weight: bold;\n    background-color: rgba(0, 0, 0, 0.3);\n    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.3);\n}",""]),t.exports=e},function(t,e,i){"use strict";i.r(e);Math.pow(2,53);function r(t){return null!=t}function s(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){let e=16*Math.random()|0;return("x"===t?e:3&e|8).toString(16)}))}var a=class{constructor(t,e,i){this.id="DataSource-"+s(),this.name=t,this.properties=e,this.dataSourceWorker=i,this.dataSynchronizer=null,this.currentRunningProperties={},this.initDataSource(e)}initDataSource(t){this.dataSourceWorker.postMessage({message:"init",id:this.id,properties:JSON.stringify(t),topic:"datasource-data-"+this.id})}setDataSynchronizer(t){this.dataSynchronizer=t,this.dataSourceWorker.postMessage({message:"topic",topic:"data-synchronizer-"+this.dataSynchronizer.id})}setTimeRange(t,e,i){this.updateUrl({...this.currentRunningProperties,startTime:t,endTime:e,replaySpeed:i})}getStartTime(){return this.properties.startTime}getEndTime(){return this.properties.endTime}getReplaySpeed(){return r(this.properties.replaySpeed)?this.properties.replaySpeed:1}disconnect(){this.dataSourceWorker.postMessage({message:"disconnect"})}connect(){this.dataSourceWorker.postMessage({message:"connect"})}async isConnected(){const t=new Promise(t=>{null!==this.dataSourceWorker&&(this.dataSourceWorker.onmessage=e=>{"is-connected"===e.data.message&&t(e.data.data)})});return null!==this.dataSourceWorker&&this.dataSourceWorker.postMessage({message:"is-connected"}),t}async getCurrentTime(){if(r(this.dataSynchronizer))return this.dataSynchronizer.getCurrentTime();{const t=new Promise(t=>{null!==this.dataSourceWorker&&(this.dataSourceWorker.onmessage=e=>{"last-timestamp"===e.data.message&&t(e.data.data)})});return null!==this.dataSourceWorker&&this.dataSourceWorker.postMessage({message:"last-timestamp"}),t}}getId(){return this.id}getName(){return this.name}updateUrl(t){this.currentRunningProperties={...this.properties,...t},null!==this.dataSourceWorker&&this.dataSourceWorker.postMessage({message:"update-url",data:t})}getCurrentRunningProperties(){return this.currentRunningProperties}terminate(){null!==this.dataSourceWorker&&this.dataSourceWorker.terminate()}},n=i(2),o=i.n(n);var h=class extends a{constructor(t,e){super(t,{timeShift:0,reconnectTimeout:5e3,...e},new o.a)}};const c=new class{constructor(){this.eventMap={}}remove(t,e){t in this.eventMap&&(this.eventMap[t]=this.eventMap[t].filter(t=>t.id!==e))}removeById(t){for(let e in this.eventMap)this.eventMap[e]=this.eventMap[e].filter(e=>e.id!==t)}observe(t,e,i="any"){r(t)&&r(e)&&r(i)&&(t in this.eventMap||(this.eventMap[t]=[]),this.eventMap[t].push({fn:e,id:i}))}fire(t,e){if(r(t)&&t in this.eventMap){let i=this.eventMap[t];for(let t=0;t<i.length;t++)i[t].fn(e)}}};var d=class{static remove(t,e="any"){c.remove("osh:"+t,e)}static removeById(t="any"){c.removeById(t)}static registerView(t){t.registerCallback()}static unregisterView(t){t.unregisterCallback()}static fire(t,e){e.name=t,c.fire("osh:"+t,e)}static observe(t,e,i="any"){c.observe("osh:"+t,e,i)}static observeDiv(t,e,i){document.getElementById(t).addEventListener(e,i)}static get EVENT(){return{SELECT_VIEW:"selectView",SHOW_VIEW:"showView",UAV_TAKEOFF:"uav:takeoff",UAV_GOTO:"uav:goto",UAV_LOOKAT:"uav:lookat",UAV_LAND:"uav:land",UAV_ORBIT:"uav:orbit",LOADING_START:"loading:start",LOADING_STOP:"loading:stop",ADD_VIEW_ITEM:"addViewItem",RESIZE:"resize",PTZ_SEND_REQUEST:"ptzSendRequest"}}};i(4);const u="disconnected";var l=class{constructor(t,e,i){this.stylers=[],this.viewItems=[],this.names={},this.stylerToObj={},this.stylerIdToStyler={},this.lastRec={},this.selectedDataSources=[],this.dataSources=[],this.viewItemsBroadcastChannels={},this.entity=null,this.id="view-"+s(),this.entity=null,this.dataSourceId=-1,r(i)&&r(i.dataSourceId)&&(this.dataSourceId=i.dataSourceId),r(i)&&r(i.entity)&&(this.entity=i.entity),this.css="",this.cssSelected="",r(i)&&r(i.css)&&(this.css=i.css),r(i)&&r(i.cssSelected)&&(this.cssSelected=i.cssSelected),this.init(t,e,i)}init(t,e,i){this.elementDiv=document.createElement("div"),this.elementDiv.setAttribute("id",this.id),this.elementDiv.setAttribute("class",this.css+" osh-view"),this.divId=this.id;let s=document.getElementById(t);if(r(s)&&null!==s?(s.appendChild(this.elementDiv),this.container=s):(document.body.appendChild(this.elementDiv),this.hide(),this.container=document.body),this.beforeAddingItems(i),r(e))for(let t=0;t<e.length;t++)this.addViewItem(e[t]);r(i)&&r(i.show)&&(document.getElementById(this.divId).style.display=i.show?"block":"none"),this.handleEvents();var a=this;this.registerCallback(),new MutationObserver(t=>{t.forEach((function(t){"style"===t.attributeName&&a.onResize()}))}).observe(this.elementDiv,{attributes:!0});new MutationObserver((function(t){r(document.getElementById(a.divId))||(this.disconnect(),a.destroy())})).observe(document.body,{childList:!0})}registerCallback(){if(r(this.dataSourceId)||r(this.entity)){const e=this;function t(t){new BroadcastChannel("datasource-data-"+t).onmessage=i=>{i.data.message&&"reset"===i.data.message?e.reset():"data"===i.data.type?e.setData(t,i.data):"message"===i.data.type&&r(i.data.status)&&i.data.status===u&&e.reset()}}if(null!==this.entity)for(let e of this.entity.getDataSources())t(e.id);else t(this.dataSourceId)}}unregisterCallback(){d.removeById(this.divId)}hide(){this.elementDiv.style.display="none"}onResize(){}attachTo(t){r(this.elementDiv.parentNode)&&this.elementDiv.parentNode.removeChild(this.elementDiv),document.getElementById(t).appendChild(this.elementDiv),"none"===this.elementDiv.style.display&&(this.elementDiv.style.display="block"),this.onResize()}beforeAddingItems(t){}getId(){return this.id}getDivId(){return this.divId}setData(t,e){}show(t){}destroy(){this.unregisterCallback()}addViewItem(t){if(this.viewItems.push(t),t.hasOwnProperty("styler")){let e=t.styler;this.stylers.push(e),t.hasOwnProperty("name")&&(this.names[e.getId()]=t.name),e.viewItem=t,e.init(this),this.stylerIdToStyler[e.id]=e;let i=e.getDataSourcesIds();for(let s=0;s<i.length;s++){const a=i[s];let n=this;const o=new BroadcastChannel("datasource-data-"+a);this.viewItemsBroadcastChannels[a]=o,o.onmessage=i=>{if(i.data.message&&"reset"===i.data.message)return;let s=!1;s=r(n.selectedEntity)?t.entityId===n.selectedEntity:n.selectedDataSources.indexOf(a)>-1,e.setData(a,i.data,n,{selected:s}),n.lastRec[a]=i.data},d.observe(d.EVENT.SELECT_VIEW,i=>{let s=!1;s=r(i.entityId)?t.entityId===i.entityId:i.dataSourcesIds.indexOf(a)>-1,a in n.lastRec&&e.setData(a,n.lastRec[a],n,{selected:s})},this.divId)}}}removeViewItem(t){if(this.viewItems.includes(t)){for(let e in t.styler.dataSourceToStylerMap)this.viewItemsBroadcastChannels[e].close(),delete this.viewItemsBroadcastChannels[e],delete this.lastRec[e];this.viewItems=this.viewItems.filter(e=>e!==t)}delete this.stylerIdToStyler[t.styler.id],this.stylers=this.stylers.filter(e=>e.id!==t.styler.id),delete this.names[t.styler.id],delete this.stylerToObj[t.styler.id]}removeViewItems(){for(const t of this.viewItems)this.removeViewItem(t)}handleEvents(){var t=this;d.observe(d.EVENT.SELECT_VIEW,e=>t.selectDataView(e.dataSourcesIds,e.entityId),this.divId),d.observe(d.EVENT.SHOW_VIEW,e=>t.show(e),this.divId),d.observe(d.EVENT.ADD_VIEW_ITEM,e=>{r(e.viewId)&&e.viewId===t.id&&t.addViewItem(e.viewItem)},this.divId),d.observe(d.EVENT.RESIZE+"-"+this.divId,e=>t.onResize(),this.divId)}selectDataView(t,e){if(r(this.dataSources)){this.selectedDataSources=t,this.selectedEntity=e;for(let t=0;t<this.dataSources.length;t++)this.setData(this.dataSources[t],this.lastRec[this.dataSources[t]])}}getDataSourcesId(){let t=[];-1!==this.dataSourceId&&t.push(this.dataSourceId);for(let e=0;e<this.viewItems.length;e++){let i=this.viewItems[e];if(i.hasOwnProperty("styler")){let e=i.styler;t=t.concat(e.getDataSourcesIds())}}return t}reset(){}},v=i(3),f=i.n(v);i(6),i(7);var m=class{constructor(t){t=t||{},this.canvasElement=t.canvas||document.createElement("canvas"),this.contextOptions=t.contextOptions,this.type=t.type||"yuv420",this.customYUV444=t.customYUV444,this.conversionType=t.conversionType||"rec601",this.width=t.width||640,this.height=t.height||320,this.animationTime=t.animationTime||0,this.canvasElement.width=this.width,this.canvasElement.height=this.height,this.init()}init(){this.initContextGL(),this.contextGL&&(this.initProgram(),this.initBuffers(),this.initTextures()),"yuv420"===this.type?this.drawNextOuptutPictureGL=t=>{var e=this.contextGL,i=this.texturePosBuffer,r=this.uTexturePosBuffer,s=this.vTexturePosBuffer,a=this.yTextureRef,n=this.uTextureRef,o=this.vTextureRef,h=t.yData,c=t.uData,d=t.vData,u=this.width,l=this.height,v=t.yDataPerRow||u,f=t.yRowCnt||l,m=t.uDataPerRow||u/2,p=t.uRowCnt||l/2,g=t.vDataPerRow||m,x=t.vRowCnt||p;let y=90*Math.round(t.roll/90);y>180&&(y-=360),90==Math.abs(y)?(this.canvasElement.width=this.height,this.canvasElement.height=this.width,e.viewport(0,0,l,u)):(this.canvasElement.width=this.width,this.canvasElement.height=this.height,e.viewport(0,0,u,l));var T=l/f,E=u/v,R=new Float32Array([E,0,0,0,E,T,0,T]);e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,R,e.DYNAMIC_DRAW),this.customYUV444?(T=l/p,E=u/m):(T=l/2/p,E=u/2/m);var w=new Float32Array([E,0,0,0,E,T,0,T]);e.bindBuffer(e.ARRAY_BUFFER,r),e.bufferData(e.ARRAY_BUFFER,w,e.DYNAMIC_DRAW),this.customYUV444?(T=l/x,E=u/g):(T=l/2/x,E=u/2/g);var S=new Float32Array([E,0,0,0,E,T,0,T]);e.bindBuffer(e.ARRAY_BUFFER,s),e.bufferData(e.ARRAY_BUFFER,S,e.DYNAMIC_DRAW),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,a),e.texImage2D(e.TEXTURE_2D,0,e.LUMINANCE,v,f,0,e.LUMINANCE,e.UNSIGNED_BYTE,h),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,n),e.texImage2D(e.TEXTURE_2D,0,e.LUMINANCE,m,p,0,e.LUMINANCE,e.UNSIGNED_BYTE,c),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,o),e.texImage2D(e.TEXTURE_2D,0,e.LUMINANCE,g,x,0,e.LUMINANCE,e.UNSIGNED_BYTE,d),e.uniform1f(this.rollUniform,y*Math.PI/180),e.drawArrays(e.TRIANGLE_STRIP,0,4)}:"yuv422"===this.type&&(this.drawNextOuptutPictureGL=t=>{var e=this.contextGL,i=this.texturePosBuffer,r=this.textureRef,s=t.data,a=this.width,n=this.height,o=t.dataPerRow||2*a,h=t.rowCnt||n;e.viewport(0,0,a,n);var c=n/h,d=a/(o/2),u=new Float32Array([d,0,0,0,d,c,0,c]);e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,u,e.DYNAMIC_DRAW),e.uniform2f(e.getUniformLocation(this.shaderProgram,"resolution"),o,n),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,e.LUMINANCE,o,h,0,e.LUMINANCE,e.UNSIGNED_BYTE,s),e.drawArrays(e.TRIANGLE_STRIP,0,4)})}isWebGL(){return this.contextGL}initContextGL(){for(var t=this.canvasElement,e=null,i=["webgl","experimental-webgl","moz-webgl","webkit-3d"],r=0;!e&&r<i.length;){var s=i[r];try{e=this.contextOptions?t.getContext(s,this.contextOptions):t.getContext(s)}catch(t){e=null}e&&"function"==typeof e.getParameter||(e=null),++r}this.contextGL=e}initProgram(){var t,e,i=this.contextGL;"yuv420"===this.type?(t=["attribute vec4 vertexPos;","attribute vec4 texturePos;","attribute vec4 uTexturePos;","attribute vec4 vTexturePos;","varying vec2 textureCoord;","varying vec2 uTextureCoord;","varying vec2 vTextureCoord;","uniform float roll;","void main()","{","  vec4 ctr = vec4(0.5, 0.5, 0, 0);","  mat4 rotMatrix = mat4( cos(roll), -sin(roll), 0, 0,","                         sin(roll),  cos(roll), 0, 0,","                         0,          0,         1, 0,","                         0,          0,         0, 1);","  gl_Position = vertexPos;","  textureCoord = mat2(rotMatrix) * (texturePos.xy - vec2(ctr)) + vec2(ctr);","  uTextureCoord = mat2(rotMatrix) * (uTexturePos.xy - vec2(ctr)) + vec2(ctr);","  vTextureCoord = mat2(rotMatrix) * (vTexturePos.xy - vec2(ctr)) + vec2(ctr);","}"].join("\n"),e=["precision highp float;","varying highp vec2 textureCoord;","varying highp vec2 uTextureCoord;","varying highp vec2 vTextureCoord;","uniform sampler2D ySampler;","uniform sampler2D uSampler;","uniform sampler2D vSampler;","uniform mat4 YUV2RGB;","void main(void) {","  highp float y = texture2D(ySampler,  textureCoord).r;","  highp float u = texture2D(uSampler,  uTextureCoord).r;","  highp float v = texture2D(vSampler,  vTextureCoord).r;","  gl_FragColor = vec4(y, u, v, 1) * YUV2RGB;","}"].join("\n")):"yuv422"===this.type&&(t=["attribute vec4 vertexPos;","attribute vec4 texturePos;","varying vec2 textureCoord;","void main()","{","  gl_Position = vertexPos;","  textureCoord = texturePos.xy;","}"].join("\n"),e=["precision highp float;","varying highp vec2 textureCoord;","uniform sampler2D sampler;","uniform highp vec2 resolution;","uniform mat4 YUV2RGB;","void main(void) {","  highp float texPixX = 1.0 / resolution.x;","  highp float logPixX = 2.0 / resolution.x;","  highp float logHalfPixX = 4.0 / resolution.x;","  highp float steps = floor(textureCoord.x / logPixX);","  highp float uvSteps = floor(textureCoord.x / logHalfPixX);","  highp float y = texture2D(sampler, vec2((logPixX * steps) + texPixX, textureCoord.y)).r;","  highp float u = texture2D(sampler, vec2((logHalfPixX * uvSteps), textureCoord.y)).r;","  highp float v = texture2D(sampler, vec2((logHalfPixX * uvSteps) + texPixX + texPixX, textureCoord.y)).r;","  gl_FragColor = vec4(y, u, v, 1.0) * YUV2RGB;","}"].join("\n"));var r=[];r="rec709"===this.conversionType?[1.16438,0,1.79274,-.97295,1.16438,-.21325,-.53291,.30148,1.16438,2.1124,0,-1.1334,0,0,0,1]:[1.16438,0,1.59603,-.87079,1.16438,-.39176,-.81297,.52959,1.16438,2.01723,0,-1.08139,0,0,0,1];var s=i.createShader(i.VERTEX_SHADER);i.shaderSource(s,t),i.compileShader(s),i.getShaderParameter(s,i.COMPILE_STATUS)||console.log("Vertex shader failed to compile: "+i.getShaderInfoLog(s));var a=i.createShader(i.FRAGMENT_SHADER);i.shaderSource(a,e),i.compileShader(a),i.getShaderParameter(a,i.COMPILE_STATUS)||console.log("Fragment shader failed to compile: "+i.getShaderInfoLog(a));var n=i.createProgram();i.attachShader(n,s),i.attachShader(n,a),i.linkProgram(n),i.getProgramParameter(n,i.LINK_STATUS)||console.log("Program failed to compile: "+i.getProgramInfoLog(n)),i.useProgram(n);var o=i.getUniformLocation(n,"YUV2RGB");i.uniformMatrix4fv(o,!1,r),this.rollUniform=i.getUniformLocation(n,"roll"),this.shaderProgram=n}initBuffers(){var t=this.contextGL,e=this.shaderProgram,i=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,i),t.bufferData(t.ARRAY_BUFFER,new Float32Array([1,1,-1,1,1,-1,-1,-1]),t.STATIC_DRAW);var r=t.getAttribLocation(e,"vertexPos");if(t.enableVertexAttribArray(r),t.vertexAttribPointer(r,2,t.FLOAT,!1,0,0),this.animationTime){var s=this.animationTime,a=0,n=function(){var i=1*(a+=15)/s;a>=s?i=1:setTimeout(n,15);var r=-1*i,o=1*i,h=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,h),t.bufferData(t.ARRAY_BUFFER,new Float32Array([o,o,r,o,o,r,r,r]),t.STATIC_DRAW);var c=t.getAttribLocation(e,"vertexPos");t.enableVertexAttribArray(c),t.vertexAttribPointer(c,2,t.FLOAT,!1,0,0);try{t.drawArrays(t.TRIANGLE_STRIP,0,4)}catch(t){}};n()}var o=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,o),t.bufferData(t.ARRAY_BUFFER,new Float32Array([1,0,0,0,1,1,0,1]),t.STATIC_DRAW);var h=t.getAttribLocation(e,"texturePos");if(t.enableVertexAttribArray(h),t.vertexAttribPointer(h,2,t.FLOAT,!1,0,0),this.texturePosBuffer=o,"yuv420"===this.type){var c=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,c),t.bufferData(t.ARRAY_BUFFER,new Float32Array([1,0,0,0,1,1,0,1]),t.STATIC_DRAW);var d=t.getAttribLocation(e,"uTexturePos");t.enableVertexAttribArray(d),t.vertexAttribPointer(d,2,t.FLOAT,!1,0,0),this.uTexturePosBuffer=c;var u=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,u),t.bufferData(t.ARRAY_BUFFER,new Float32Array([1,0,0,0,1,1,0,1]),t.STATIC_DRAW);var l=t.getAttribLocation(e,"vTexturePos");t.enableVertexAttribArray(l),t.vertexAttribPointer(l,2,t.FLOAT,!1,0,0),this.vTexturePosBuffer=u}}initTextures(){var t=this.contextGL,e=this.shaderProgram;if("yuv420"===this.type){var i=this.initTexture(),r=t.getUniformLocation(e,"ySampler");t.uniform1i(r,0),this.yTextureRef=i;var s=this.initTexture(),a=t.getUniformLocation(e,"uSampler");t.uniform1i(a,1),this.uTextureRef=s;var n=this.initTexture(),o=t.getUniformLocation(e,"vSampler");t.uniform1i(o,2),this.vTextureRef=n}else if("yuv422"===this.type){var h=this.initTexture(),c=t.getUniformLocation(e,"sampler");t.uniform1i(c,0),this.textureRef=h}}initTexture(){var t=this.contextGL,e=t.createTexture();return t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.bindTexture(t.TEXTURE_2D,null),e}drawNextOutputPicture(t,e,i,r){this.contextGL?this.drawNextOuptutPictureGL(t,e,i,r):this.drawNextOuptutPictureRGBA(t,e,i,r)}drawNextOuptutPictureRGBA(t,e,i,r){var s=r,a=this.canvasElement.getContext("2d"),n=a.getImageData(0,0,t,e);n.data.set(s),null===i?a.putImageData(n,0,0):a.putImageData(n,-i.left,-i.top,0,0,i.width,i.height)}resize(t,e){this.canvasElement.width=t,this.canvasElement.height=e,this.width=t,this.height=e}};var p=class extends l{constructor(t,e){super(t,[],e),this.fps=0,this.width="1920",this.height="1080",this.showTime=!1,this.showStats=!1,this.statistics={averageFps:0,frames:0,firstTime:0,bitRate:0,averageBitRate:0},this.framerate=29.67,this.directPlay=!1,this.codec="h264",r(e)&&(r(e.framerate)&&(this.framerate=e.framerate),r(e.directPlay)&&(this.directPlay=e.directPlay),r(e.codec)&&(this.codec=e.codec),r(e.showTime)&&(this.showTime=e.showTime),r(e.showStats)&&(this.showStats=e.showStats));let i=document.getElementById(this.divId);(this.showTime||this.showStats)&&(this.textDiv=document.createElement("div"),this.textDiv.setAttribute("width",this.width),this.textDiv.setAttribute("height",15),this.textDiv.setAttribute("class","ffmpeg-info"),this.showTime&&(this.textFpsDiv=document.createElement("div"),this.textFpsDiv.setAttribute("class","ffmpeg-fps"),this.textDiv.appendChild(this.textFpsDiv)),this.showStats&&(this.textStatsDiv=document.createElement("div"),this.textStatsDiv.setAttribute("class","ffmpeg-stats"),this.textDiv.appendChild(this.textStatsDiv)),i.appendChild(this.textDiv)),this.domNode=i,this.yuvCanvas=this.createCanvas(this.width,this.height),i.appendChild(this.yuvCanvas.canvasElement);let s,a,n=this;d.observeDiv(this.divId,"click",t=>{d.fire(d.EVENT.SELECT_VIEW,{dataSourcesIds:[n.dataSourceId],entityId:n.entityId})}),r(document.hidden)?(s="hidden",a="visibilitychange"):r(document.msHidden)?(s="msHidden",a="msvisibilitychange"):r(document.webkitHidden)&&(s="webkitHidden",a="webkitvisibilitychange");let o=this;document.addEventListener(a,(function(){document.hidden?o.skipFrame=!0:o.skipFrame=!1}),!1),this.buf=[],this.bufferingTime=2e3}createCanvas(t,e,i){return new m({width:t,height:e,contextOptions:{preserveDrawingBuffer:!0}})}setData(t,e){if(!this.skipFrame){null==this.decodeWorker&&this.initFFMPEG_DECODER_WORKER();let t=e.data.frameData,i=t.length,r=e.data.roll;this.decode(i,t,e.timeStamp,r)}}selectDataView(t,e){document.getElementById(this.divId)}reset(){null!==this.decodeWorker&&(this.decodeWorker.terminate(),this.decodeWorker=null),this.resetCalled=!0;let t=new Uint8Array(1);t[0]=128,this.yuvCanvas.drawNextOuptutPictureGL({yData:t,yDataPerRow:1,yRowCnt:1,uData:t,uDataPerRow:1,uRowCnt:1,vData:t,vDataPerRow:1,vRowCnt:1})}updateStatistics(t){if(this.statistics.frames++,this.statistics.pktSize+=t,0===this.statistics.firstTime)return void(this.statistics.firstTime=performance.now());const e=performance.now();e-this.statistics.firstTime<1e3||(this.statistics.averageFps=(this.statistics.frames-1)/((e-this.statistics.firstTime)/1e3),this.statistics.averageBitRate=(this.statistics.pktSize-t)/((e-this.statistics.firstTime)/1e3),this.statistics.frames=1,this.statistics.pktSize=t,this.statistics.firstTime=e)}onAfterDecoded(){}initFFMPEG_DECODER_WORKER(){this.decodeWorker=new f.a,this.decodeWorker.id=s();const t=this;this.decodeWorker.onmessage=function(e){let i=e.data;t.width===i.frame_width&&t.height===i.frame_height||(t.yuvCanvas.resize(i.frame_width,i.frame_height),t.width=i.frame_width,t.height=i.frame_height),t.yuvCanvas.canvasElement.drawing=!0,t.yuvCanvas.drawNextOuptutPictureGL({yData:i.frameYData,yDataPerRow:i.frame_width,yRowCnt:i.frame_height,uData:i.frameUData,uDataPerRow:i.frame_width/2,uRowCnt:i.frame_height/2,vData:i.frameVData,vDataPerRow:i.frame_width/2,vRowCnt:i.frame_height/2,roll:i.roll}),t.yuvCanvas.canvasElement.drawing=!1,this.updateStatistics(i.pktSize),this.showTime&&(this.textFpsDiv.innerText=new Date(i.timeStamp).toISOString()+" "),this.showStats&&(this.textStatsDiv.innerText=this.statistics.averageFps.toFixed(2)+" fps, "+(this.statistics.averageBitRate/1e3).toFixed(2)+" kB/s @"+t.yuvCanvas.width+"x"+t.yuvCanvas.height+"\n "+this.codec),this.onUpdated(this.statistics)}.bind(this)}onUpdated(t){}decode(t,e,i,r){if(t>0){let s=e.buffer;this.decodeWorker.postMessage({pktSize:t,pktData:s,roll:r,byteOffset:e.byteOffset,codec:this.codec,timeStamp:i,dataSourceId:this.dataSourceId},[s]),e=null}}destroy(){super.destroy(),r(this.interval)&&clearInterval(this.interval),this.decodeWorker.postMessage({message:"release"}),this.decodeWorker.terminate()}};let g=new h("drone-Video",{protocol:"ws",service:"SOS",endpointUrl:"sensiasoft.net:8181/sensorhub/sos",offeringID:"urn:mysos:solo:video2",observedProperty:"http://sensorml.com/ont/swe/property/VideoFrame",startTime:"2015-12-19T21:04:30Z",endTime:"2015-12-19T21:09:19Z",replaySpeed:1});new p("video-h264-container",{dataSourceId:g.id,css:"video-h264",name:"UAV Video",framerate:25,showTime:!0,showStats:!0});g.connect()}]);