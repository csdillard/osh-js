!function(t){var e={};function i(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=e,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(r,a,function(e){return t[e]}.bind(null,a));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=8)}([function(t,e,i){"use strict";var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},s=function(){var t={};return function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}t[e]=i}return t[e]}}(),n=[];function o(t){for(var e=-1,i=0;i<n.length;i++)if(n[i].identifier===t){e=i;break}return e}function h(t,e){for(var i={},r=[],a=0;a<t.length;a++){var s=t[a],h=e.base?s[0]+e.base:s[0],c=i[h]||0,d="".concat(h," ").concat(c);i[h]=c+1;var u=o(d),l={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(n[u].references++,n[u].updater(l)):n.push({identifier:d,updater:p(l,e),references:1}),r.push(d)}return r}function c(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var a=i.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var n=s(t.insert||"head");if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(e)}return e}var d,u=(d=[],function(t,e){return d[t]=e,d.filter(Boolean).join("\n")});function l(t,e,i,r){var a=i?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=u(e,a);else{var s=document.createTextNode(a),n=t.childNodes;n[e]&&t.removeChild(n[e]),n.length?t.insertBefore(s,n[e]):t.appendChild(s)}}function f(t,e,i){var r=i.css,a=i.media,s=i.sourceMap;if(a?t.setAttribute("media",a):t.removeAttribute("media"),s&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var v=null,m=0;function p(t,e){var i,r,a;if(e.singleton){var s=m++;i=v||(v=c(e)),r=l.bind(null,i,s,!1),a=l.bind(null,i,s,!0)}else i=c(e),r=f.bind(null,i,e),a=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(i)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else a()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=a());var i=h(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<i.length;r++){var a=o(i[r]);n[a].references--}for(var s=h(t,e),c=0;c<i.length;c++){var d=o(i[c]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=s}}}},function(t,e,i){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i=function(t,e){var i=t[1]||"",r=t[3];if(!r)return i;if(e&&"function"==typeof btoa){var a=(n=r,o=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),h="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),"/*# ".concat(h," */")),s=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[i].concat(s).concat([a]).join("\n")}var n,o,h;return[i].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(i,"}"):i})).join("")},e.i=function(t,i,r){"string"==typeof t&&(t=[[null,t,""]]);var a={};if(r)for(var s=0;s<this.length;s++){var n=this[s][0];null!=n&&(a[n]=!0)}for(var o=0;o<t.length;o++){var h=[].concat(t[o]);r&&a[h[0]]||(i&&(h[2]?h[2]="".concat(i," and ").concat(h[2]):h[2]=i),e.push(h))}},e}},function(t,e,i){t.exports=function(){return new Worker(i.p+"WorkerName.28f57763635344001287.js")}},function(t,e,i){t.exports=function(){return new Worker(i.p+"WorkerName.2523c982904505bb40c4.js")}},function(t,e,i){var r=i(0),a=i(5);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var s={insert:"head",singleton:!1},n=(r(a,s),a.locals?a.locals:{});t.exports=n},function(t,e,i){(e=i(1)(!1)).push([t.i,".osh-view {\n    width:100%;\n    height: 100%;\n}\n",""]),t.exports=e},function(t,e,i){var r=i(0),a=i(7);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var s={insert:"head",singleton:!1},n=(r(a,s),a.locals?a.locals:{});t.exports=n},function(t,e,i){(e=i(1)(!1)).push([t.i,".ffmpeg-info{\n    position:absolute;\n    font-size: 12px;\n    color:#FFFFFF;\n    padding:2px;\n    font-weight: bold;\n    background-color: rgba(0, 0, 0, 0.3);\n    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.3);\n    z-index: 10;\n}\n",""]),t.exports=e},function(t,e,i){"use strict";i.r(e);Math.pow(2,53);function r(t){return null!=t}function a(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){let e=16*Math.random()|0;return("x"===t?e:3&e|8).toString(16)}))}var s=class{constructor(t,e,i){this.id="DataSource-"+a(),this.name=t,this.properties={fetch:1,...e},this.dataSourceWorker=i,this.dataSynchronizer=null,this.currentRunningProperties={},this.initDataSource(e)}initDataSource(t){this.dataSourceWorker.postMessage({message:"init",id:this.id,properties:JSON.stringify(t),topic:"datasource-data-"+this.id})}setDataSynchronizer(t){this.dataSynchronizer=t,this.dataSourceWorker.postMessage({message:"topic",topic:"data-synchronizer-"+this.dataSynchronizer.id})}setTimeRange(t,e,i){this.updateUrl({...this.currentRunningProperties,startTime:t,endTime:e,replaySpeed:i})}getStartTime(){return this.properties.startTime}getEndTime(){return this.properties.endTime}getReplaySpeed(){return r(this.properties.replaySpeed)?this.properties.replaySpeed:1}disconnect(){this.dataSourceWorker.postMessage({message:"disconnect"})}async connect(){return this.dataSourceWorker.postMessage({message:"connect"}),this.isConnected()}async isConnected(){const t=new Promise(t=>{null!==this.dataSourceWorker&&(this.dataSourceWorker.onmessage=e=>{"is-connected"===e.data.message&&t(e.data.data)})});return null!==this.dataSourceWorker&&this.dataSourceWorker.postMessage({message:"is-connected"}),t}async getCurrentTime(){if(r(this.dataSynchronizer))return this.dataSynchronizer.getCurrentTime();{const t=new Promise(t=>{null!==this.dataSourceWorker&&(this.dataSourceWorker.onmessage=e=>{"last-timestamp"===e.data.message&&t(e.data.data)})});return null!==this.dataSourceWorker&&this.dataSourceWorker.postMessage({message:"last-timestamp"}),t}}getId(){return this.id}getName(){return this.name}updateUrl(t){this.currentRunningProperties={...this.properties,...t},null!==this.dataSourceWorker&&this.dataSourceWorker.postMessage({message:"update-url",data:t})}getCurrentRunningProperties(){return this.currentRunningProperties}terminate(){null!==this.dataSourceWorker&&this.dataSourceWorker.terminate()}},n=i(2),o=i.n(n);var h=class extends s{constructor(t,e){super(t,{timeShift:0,reconnectTimeout:5e3,...e},new o.a)}};const c=new class{constructor(){this.eventMap={}}remove(t,e){t in this.eventMap&&(this.eventMap[t]=this.eventMap[t].filter(t=>t.id!==e))}removeById(t){for(let e in this.eventMap)this.eventMap[e]=this.eventMap[e].filter(e=>e.id!==t)}observe(t,e,i="any"){r(t)&&r(e)&&r(i)&&(t in this.eventMap||(this.eventMap[t]=[]),this.eventMap[t].push({fn:e,id:i}))}fire(t,e){if(r(t)&&t in this.eventMap){let i=this.eventMap[t];for(let t=0;t<i.length;t++)i[t].fn(e)}}};var d=class{static remove(t,e="any"){c.remove("osh:"+t,e)}static removeById(t="any"){c.removeById(t)}static registerView(t){t.registerCallback()}static unregisterView(t){t.unregisterCallback()}static fire(t,e){e.name=t,c.fire("osh:"+t,e)}static observe(t,e,i="any"){c.observe("osh:"+t,e,i)}static observeDiv(t,e,i){document.getElementById(t).addEventListener(e,i)}static get EVENT(){return{SELECT_VIEW:"selectView",SHOW_VIEW:"showView",UAV_TAKEOFF:"uav:takeoff",UAV_GOTO:"uav:goto",UAV_LOOKAT:"uav:lookat",UAV_LAND:"uav:land",UAV_ORBIT:"uav:orbit",LOADING_START:"loading:start",LOADING_STOP:"loading:stop",ADD_VIEW_ITEM:"addViewItem",RESIZE:"resize",PTZ_SEND_REQUEST:"ptzSendRequest"}}};i(4);const u="disconnected",l="data",f="status";var v=class{constructor(t,e,i){this.layers=[],this.viewItems=[],this.names={},this.lastRec={},this.selectedDataSources=[],this.dataSources=[],this.entity=null,this.id="view-"+a(),this.entity=null,this.dataSourceId=-1,r(i)&&r(i.dataSourceId)&&(this.dataSourceId=i.dataSourceId),r(i)&&r(i.entity)&&(this.entity=i.entity),this.css="",this.cssSelected="",r(i)&&r(i.css)&&(this.css=i.css),r(i)&&r(i.cssSelected)&&(this.cssSelected=i.cssSelected),this.init(t,e,i)}init(t,e,i){this.elementDiv=document.createElement("div"),this.elementDiv.setAttribute("id",this.id),this.elementDiv.setAttribute("class",this.css+" osh-view"),this.divId=this.id;let a=document.getElementById(t);if(r(a)&&null!==a?(a.appendChild(this.elementDiv),this.container=a):(document.body.appendChild(this.elementDiv),this.hide(),this.container=document.body),this.beforeAddingItems(i),r(e))for(let t=0;t<e.length;t++)this.addViewItem(e[t]);r(i)&&r(i.show)&&(document.getElementById(this.divId).style.display=i.show?"block":"none"),this.handleEvents();var s=this;this.registerCallback(),new MutationObserver(t=>{t.forEach((function(t){"style"===t.attributeName&&s.onResize()}))}).observe(this.elementDiv,{attributes:!0});new MutationObserver((function(t){r(document.getElementById(s.divId))||(this.disconnect(),s.destroy())})).observe(document.body,{childList:!0})}registerCallback(){if(r(this.dataSourceId)||r(this.entity)){const e=this;function t(t){new BroadcastChannel("datasource-data-"+t).onmessage=i=>{i.data.message&&"reset"===i.data.message?e.reset():i.data.type===l?e.setData(t,i.data.values):i.data.type===f&&i.data.status===u&&e.reset()}}if(null!==this.entity)for(let e of this.entity.getDataSources())t(e.id);else t(this.dataSourceId)}}unregisterCallback(){d.removeById(this.divId)}hide(){this.elementDiv.style.display="none"}onResize(){}attachTo(t){r(this.elementDiv.parentNode)&&this.elementDiv.parentNode.removeChild(this.elementDiv),document.getElementById(t).appendChild(this.elementDiv),"none"===this.elementDiv.style.display&&(this.elementDiv.style.display="block"),this.onResize()}beforeAddingItems(t){}getId(){return this.id}getDivId(){return this.divId}setData(t,e){}show(t){}destroy(){this.unregisterCallback()}addViewItem(t){if(this.viewItems.push(t),t.hasOwnProperty("layer")){let e=t.layer;this.layers.push(e),t.hasOwnProperty("name")&&(this.names[e.markerId]=t.name),e.viewItem=t,e.init(this);let i=e.getDataSourcesIds();for(let a=0;a<i.length;a++){const s=i[a];let n=this;new BroadcastChannel("datasource-data-"+s).onmessage=i=>{if(i.data.type===f&&i.data.status===u)return;let a=!1;a=r(n.selectedEntity)?t.entityId===n.selectedEntity:n.selectedDataSources.indexOf(s)>-1,i.data.type===l&&(e.setData(s,i.data,n,{selected:a}),n.lastRec[s]=i.data)},d.observe(d.EVENT.SELECT_VIEW,i=>{let a=!1;a=r(i.entityId)?t.entityId===i.entityId:i.dataSourcesIds.indexOf(s)>-1,s in n.lastRec&&e.setData(s,n.lastRec[s],n,{selected:a})},this.divId)}}}removeViewItem(t){if(this.viewItems.includes(t)){for(let e in t.layer.dataSourceToLayerMap)delete this.lastRec[e];this.viewItems=this.viewItems.filter(e=>e!==t)}this.layers=this.layers.filter(e=>e.id!==t.layer.id),delete this.names[t.layer.markerId]}removeViewItems(){for(const t of this.viewItems)this.removeViewItem(t)}handleEvents(){var t=this;d.observe(d.EVENT.SELECT_VIEW,e=>t.selectDataView(e.dataSourcesIds,e.entityId),this.divId),d.observe(d.EVENT.SHOW_VIEW,e=>t.show(e),this.divId),d.observe(d.EVENT.ADD_VIEW_ITEM,e=>{r(e.viewId)&&e.viewId===t.id&&t.addViewItem(e.viewItem)},this.divId),d.observe(d.EVENT.RESIZE+"-"+this.divId,e=>t.onResize(),this.divId)}selectDataView(t,e){if(r(this.dataSources)){this.selectedDataSources=t,this.selectedEntity=e;for(let t=0;t<this.dataSources.length;t++)this.setData(this.dataSources[t],this.lastRec[this.dataSources[t]])}}getDataSourcesId(){let t=[];-1!==this.dataSourceId&&t.push(this.dataSourceId);for(let e=0;e<this.viewItems.length;e++){let i=this.viewItems[e];if(i.hasOwnProperty("layer")){let e=i.layer;t=t.concat(e.getDataSourcesIds())}}return t}reset(){}},m=i(3),p=i.n(m);i(6);var g=class{constructor(t){t=t||{},this.canvasElement=t.canvas||document.createElement("canvas"),this.contextOptions=t.contextOptions,this.type=t.type||"yuv420",this.customYUV444=t.customYUV444,this.conversionType=t.conversionType||"rec601",this.width=t.width||640,this.height=t.height||320,this.animationTime=t.animationTime||0,this.canvasElement.width=this.width,this.canvasElement.height=this.height,this.init()}init(){this.initContextGL(),this.contextGL&&(this.initProgram(),this.initBuffers(),this.initTextures()),"yuv420"===this.type?this.drawNextOuptutPictureGL=t=>{var e=this.contextGL,i=this.texturePosBuffer,r=this.uTexturePosBuffer,a=this.vTexturePosBuffer,s=this.yTextureRef,n=this.uTextureRef,o=this.vTextureRef,h=t.yData,c=t.uData,d=t.vData,u=this.width,l=this.height,f=t.yDataPerRow||u,v=t.yRowCnt||l,m=t.uDataPerRow||u/2,p=t.uRowCnt||l/2,g=t.vDataPerRow||m,x=t.vRowCnt||p;let y=90*Math.round(t.roll/90);y>180&&(y-=360),90==Math.abs(y)?(this.canvasElement.width=this.height,this.canvasElement.height=this.width,e.viewport(0,0,l,u)):(this.canvasElement.width=this.width,this.canvasElement.height=this.height,e.viewport(0,0,u,l));var T=l/v,E=u/f,R=new Float32Array([E,0,0,0,E,T,0,T]);e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,R,e.DYNAMIC_DRAW),this.customYUV444?(T=l/p,E=u/m):(T=l/2/p,E=u/2/m);var w=new Float32Array([E,0,0,0,E,T,0,T]);e.bindBuffer(e.ARRAY_BUFFER,r),e.bufferData(e.ARRAY_BUFFER,w,e.DYNAMIC_DRAW),this.customYUV444?(T=l/x,E=u/g):(T=l/2/x,E=u/2/g);var S=new Float32Array([E,0,0,0,E,T,0,T]);e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,S,e.DYNAMIC_DRAW),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,s),e.texImage2D(e.TEXTURE_2D,0,e.LUMINANCE,f,v,0,e.LUMINANCE,e.UNSIGNED_BYTE,h),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,n),e.texImage2D(e.TEXTURE_2D,0,e.LUMINANCE,m,p,0,e.LUMINANCE,e.UNSIGNED_BYTE,c),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,o),e.texImage2D(e.TEXTURE_2D,0,e.LUMINANCE,g,x,0,e.LUMINANCE,e.UNSIGNED_BYTE,d),e.uniform1f(this.rollUniform,y*Math.PI/180),e.drawArrays(e.TRIANGLE_STRIP,0,4)}:"yuv422"===this.type&&(this.drawNextOuptutPictureGL=t=>{var e=this.contextGL,i=this.texturePosBuffer,r=this.textureRef,a=t.data,s=this.width,n=this.height,o=t.dataPerRow||2*s,h=t.rowCnt||n;e.viewport(0,0,s,n);var c=n/h,d=s/(o/2),u=new Float32Array([d,0,0,0,d,c,0,c]);e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,u,e.DYNAMIC_DRAW),e.uniform2f(e.getUniformLocation(this.shaderProgram,"resolution"),o,n),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,e.LUMINANCE,o,h,0,e.LUMINANCE,e.UNSIGNED_BYTE,a),e.drawArrays(e.TRIANGLE_STRIP,0,4)})}isWebGL(){return this.contextGL}initContextGL(){for(var t=this.canvasElement,e=null,i=["webgl","experimental-webgl","moz-webgl","webkit-3d"],r=0;!e&&r<i.length;){var a=i[r];try{e=this.contextOptions?t.getContext(a,this.contextOptions):t.getContext(a)}catch(t){e=null}e&&"function"==typeof e.getParameter||(e=null),++r}this.contextGL=e}initProgram(){var t,e,i=this.contextGL;"yuv420"===this.type?(t=["attribute vec4 vertexPos;","attribute vec4 texturePos;","attribute vec4 uTexturePos;","attribute vec4 vTexturePos;","varying vec2 textureCoord;","varying vec2 uTextureCoord;","varying vec2 vTextureCoord;","uniform float roll;","void main()","{","  vec4 ctr = vec4(0.5, 0.5, 0, 0);","  mat4 rotMatrix = mat4( cos(roll), -sin(roll), 0, 0,","                         sin(roll),  cos(roll), 0, 0,","                         0,          0,         1, 0,","                         0,          0,         0, 1);","  gl_Position = vertexPos;","  textureCoord = mat2(rotMatrix) * (texturePos.xy - vec2(ctr)) + vec2(ctr);","  uTextureCoord = mat2(rotMatrix) * (uTexturePos.xy - vec2(ctr)) + vec2(ctr);","  vTextureCoord = mat2(rotMatrix) * (vTexturePos.xy - vec2(ctr)) + vec2(ctr);","}"].join("\n"),e=["precision highp float;","varying highp vec2 textureCoord;","varying highp vec2 uTextureCoord;","varying highp vec2 vTextureCoord;","uniform sampler2D ySampler;","uniform sampler2D uSampler;","uniform sampler2D vSampler;","uniform mat4 YUV2RGB;","void main(void) {","  highp float y = texture2D(ySampler,  textureCoord).r;","  highp float u = texture2D(uSampler,  uTextureCoord).r;","  highp float v = texture2D(vSampler,  vTextureCoord).r;","  gl_FragColor = vec4(y, u, v, 1) * YUV2RGB;","}"].join("\n")):"yuv422"===this.type&&(t=["attribute vec4 vertexPos;","attribute vec4 texturePos;","varying vec2 textureCoord;","void main()","{","  gl_Position = vertexPos;","  textureCoord = texturePos.xy;","}"].join("\n"),e=["precision highp float;","varying highp vec2 textureCoord;","uniform sampler2D sampler;","uniform highp vec2 resolution;","uniform mat4 YUV2RGB;","void main(void) {","  highp float texPixX = 1.0 / resolution.x;","  highp float logPixX = 2.0 / resolution.x;","  highp float logHalfPixX = 4.0 / resolution.x;","  highp float steps = floor(textureCoord.x / logPixX);","  highp float uvSteps = floor(textureCoord.x / logHalfPixX);","  highp float y = texture2D(sampler, vec2((logPixX * steps) + texPixX, textureCoord.y)).r;","  highp float u = texture2D(sampler, vec2((logHalfPixX * uvSteps), textureCoord.y)).r;","  highp float v = texture2D(sampler, vec2((logHalfPixX * uvSteps) + texPixX + texPixX, textureCoord.y)).r;","  gl_FragColor = vec4(y, u, v, 1.0) * YUV2RGB;","}"].join("\n"));var r=[];r="rec709"===this.conversionType?[1.16438,0,1.79274,-.97295,1.16438,-.21325,-.53291,.30148,1.16438,2.1124,0,-1.1334,0,0,0,1]:[1.16438,0,1.59603,-.87079,1.16438,-.39176,-.81297,.52959,1.16438,2.01723,0,-1.08139,0,0,0,1];var a=i.createShader(i.VERTEX_SHADER);i.shaderSource(a,t),i.compileShader(a),i.getShaderParameter(a,i.COMPILE_STATUS)||console.log("Vertex shader failed to compile: "+i.getShaderInfoLog(a));var s=i.createShader(i.FRAGMENT_SHADER);i.shaderSource(s,e),i.compileShader(s),i.getShaderParameter(s,i.COMPILE_STATUS)||console.log("Fragment shader failed to compile: "+i.getShaderInfoLog(s));var n=i.createProgram();i.attachShader(n,a),i.attachShader(n,s),i.linkProgram(n),i.getProgramParameter(n,i.LINK_STATUS)||console.log("Program failed to compile: "+i.getProgramInfoLog(n)),i.useProgram(n);var o=i.getUniformLocation(n,"YUV2RGB");i.uniformMatrix4fv(o,!1,r),this.rollUniform=i.getUniformLocation(n,"roll"),this.shaderProgram=n}initBuffers(){var t=this.contextGL,e=this.shaderProgram,i=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,i),t.bufferData(t.ARRAY_BUFFER,new Float32Array([1,1,-1,1,1,-1,-1,-1]),t.STATIC_DRAW);var r=t.getAttribLocation(e,"vertexPos");if(t.enableVertexAttribArray(r),t.vertexAttribPointer(r,2,t.FLOAT,!1,0,0),this.animationTime){var a=this.animationTime,s=0,n=function(){var i=1*(s+=15)/a;s>=a?i=1:setTimeout(n,15);var r=-1*i,o=1*i,h=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,h),t.bufferData(t.ARRAY_BUFFER,new Float32Array([o,o,r,o,o,r,r,r]),t.STATIC_DRAW);var c=t.getAttribLocation(e,"vertexPos");t.enableVertexAttribArray(c),t.vertexAttribPointer(c,2,t.FLOAT,!1,0,0);try{t.drawArrays(t.TRIANGLE_STRIP,0,4)}catch(t){}};n()}var o=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,o),t.bufferData(t.ARRAY_BUFFER,new Float32Array([1,0,0,0,1,1,0,1]),t.STATIC_DRAW);var h=t.getAttribLocation(e,"texturePos");if(t.enableVertexAttribArray(h),t.vertexAttribPointer(h,2,t.FLOAT,!1,0,0),this.texturePosBuffer=o,"yuv420"===this.type){var c=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,c),t.bufferData(t.ARRAY_BUFFER,new Float32Array([1,0,0,0,1,1,0,1]),t.STATIC_DRAW);var d=t.getAttribLocation(e,"uTexturePos");t.enableVertexAttribArray(d),t.vertexAttribPointer(d,2,t.FLOAT,!1,0,0),this.uTexturePosBuffer=c;var u=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,u),t.bufferData(t.ARRAY_BUFFER,new Float32Array([1,0,0,0,1,1,0,1]),t.STATIC_DRAW);var l=t.getAttribLocation(e,"vTexturePos");t.enableVertexAttribArray(l),t.vertexAttribPointer(l,2,t.FLOAT,!1,0,0),this.vTexturePosBuffer=u}}initTextures(){var t=this.contextGL,e=this.shaderProgram;if("yuv420"===this.type){var i=this.initTexture(),r=t.getUniformLocation(e,"ySampler");t.uniform1i(r,0),this.yTextureRef=i;var a=this.initTexture(),s=t.getUniformLocation(e,"uSampler");t.uniform1i(s,1),this.uTextureRef=a;var n=this.initTexture(),o=t.getUniformLocation(e,"vSampler");t.uniform1i(o,2),this.vTextureRef=n}else if("yuv422"===this.type){var h=this.initTexture(),c=t.getUniformLocation(e,"sampler");t.uniform1i(c,0),this.textureRef=h}}initTexture(){var t=this.contextGL,e=t.createTexture();return t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.bindTexture(t.TEXTURE_2D,null),e}drawNextOutputPicture(t,e,i,r){this.contextGL?this.drawNextOuptutPictureGL(t,e,i,r):this.drawNextOuptutPictureRGBA(t,e,i,r)}drawNextOuptutPictureRGBA(t,e,i,r){var a=r,s=this.canvasElement.getContext("2d"),n=s.getImageData(0,0,t,e);n.data.set(a),null===i?s.putImageData(n,0,0):s.putImageData(n,-i.left,-i.top,0,0,i.width,i.height)}resize(t,e){this.canvasElement.width=t,this.canvasElement.height=e,this.width=t,this.height=e}};var x=class extends v{constructor(t,e){super(t,[],e),this.fps=0,this.width="1920",this.height="1080",this.showTime=!1,this.showStats=!1,this.statistics={averageFps:0,frames:0,firstTime:0,bitRate:0,averageBitRate:0},this.framerate=29.67,r(e)&&(r(e.framerate)&&(this.framerate=e.framerate),r(e.directPlay)&&(this.directPlay=e.directPlay),r(e.codec)&&(this.codec=e.codec),r(e.showTime)&&(this.showTime=e.showTime),r(e.showStats)&&(this.showStats=e.showStats));let i,a,s=document.getElementById(this.divId);(this.showTime||this.showStats)&&(this.textDiv=document.createElement("div"),this.textDiv.setAttribute("width",this.width),this.textDiv.setAttribute("height",15),this.textDiv.setAttribute("class","ffmpeg-info"),this.showTime&&(this.textFpsDiv=document.createElement("div"),this.textFpsDiv.setAttribute("class","ffmpeg-fps"),this.textDiv.appendChild(this.textFpsDiv)),this.showStats&&(this.textStatsDiv=document.createElement("div"),this.textStatsDiv.setAttribute("class","ffmpeg-stats"),this.textDiv.appendChild(this.textStatsDiv)),s.appendChild(this.textDiv)),this.domNode=s,r(document.hidden)?(i="hidden",a="visibilitychange"):r(document.msHidden)?(i="msHidden",a="msvisibilitychange"):r(document.webkitHidden)&&(i="webkitHidden",a="webkitvisibilitychange");const n=this;document.addEventListener(a,(function(){document.hidden?n.skipFrame=!0:n.skipFrame=!1}),!1)}updateStatistics(t){if(this.statistics.frames++,this.statistics.pktSize+=t,0===this.statistics.firstTime)return void(this.statistics.firstTime=performance.now());const e=performance.now();e-this.statistics.firstTime<1e3||(this.statistics.averageFps=(this.statistics.frames-1)/((e-this.statistics.firstTime)/1e3),this.statistics.averageBitRate=(this.statistics.pktSize-t)/((e-this.statistics.firstTime)/1e3),this.statistics.frames=1,this.statistics.pktSize=t,this.statistics.firstTime=e)}onUpdated(t){}destroy(){}onAfterDecoded(){}};var y=class extends x{constructor(t,e){super(t,e),this.directPlay=!1,this.codec="h264",this.yuvCanvas=this.createCanvas(this.width,this.height),this.domNode.appendChild(this.yuvCanvas.canvasElement),this.buf=[],this.bufferingTime=2e3}createCanvas(t,e,i){return new g({width:t,height:e,contextOptions:{preserveDrawingBuffer:!0}})}setData(t,e){for(let t=0;t<e.length;t++)if(!this.skipFrame){null==this.decodeWorker&&this.initFFMPEG_DECODER_WORKER();const t=e.shift();let i=t.data.frameData,r=t.data.roll,a=i.length;this.decode(a,i,t.timeStamp,r)}}selectDataView(t,e){document.getElementById(this.divId)}reset(){null!==this.decodeWorker&&(this.decodeWorker.terminate(),this.decodeWorker=null),this.resetCalled=!0;let t=new Uint8Array(1);t[0]=128,this.yuvCanvas.drawNextOuptutPictureGL({yData:t,yDataPerRow:1,yRowCnt:1,uData:t,uDataPerRow:1,uRowCnt:1,vData:t,vDataPerRow:1,vRowCnt:1})}initFFMPEG_DECODER_WORKER(){this.decodeWorker=new p.a,this.decodeWorker.id=a();const t=this;this.decodeWorker.onmessage=function(e){let i=e.data;t.width===i.frame_width&&t.height===i.frame_height||(t.yuvCanvas.resize(i.frame_width,i.frame_height),t.width=i.frame_width,t.height=i.frame_height),t.yuvCanvas.canvasElement.drawing=!0,t.yuvCanvas.drawNextOuptutPictureGL({yData:i.frameYData,yDataPerRow:i.frame_width,yRowCnt:i.frame_height,uData:i.frameUData,uDataPerRow:i.frame_width/2,uRowCnt:i.frame_height/2,vData:i.frameVData,vDataPerRow:i.frame_width/2,vRowCnt:i.frame_height/2,roll:i.roll}),t.yuvCanvas.canvasElement.drawing=!1,this.updateStatistics(i.pktSize),this.showTime&&(this.textFpsDiv.innerText=new Date(i.timeStamp).toISOString()+" "),this.showStats&&(this.textStatsDiv.innerText=this.statistics.averageFps.toFixed(2)+" fps, "+(this.statistics.averageBitRate/1e3).toFixed(2)+" kB/s @"+t.yuvCanvas.width+"x"+t.yuvCanvas.height+"\n "+this.codec),this.onUpdated(this.statistics)}.bind(this)}decode(t,e,i,r){if(t>0){let a=e.buffer;this.decodeWorker.postMessage({pktSize:t,pktData:a,roll:r,byteOffset:e.byteOffset,codec:this.codec,timeStamp:i,dataSourceId:this.dataSourceId},[a]),e=null}}destroy(){super.destroy(),r(this.interval)&&clearInterval(this.interval),this.decodeWorker.postMessage({message:"release"}),this.decodeWorker.terminate()}};let T=new h("drone-Video",{protocol:"ws",service:"SOS",endpointUrl:"sensiasoft.net:8181/sensorhub/sos",offeringID:"urn:mysos:solo:video2",observedProperty:"http://sensorml.com/ont/swe/property/VideoFrame",startTime:"2015-12-19T21:04:30Z",endTime:"2015-12-19T21:09:19Z",replaySpeed:1}),E=new y("video-h264-transferable-container",{dataSourceId:T.id,css:"video-h264",name:"UAV Video",framerate:25,showTime:!0,showStats:!0});T.connect();let R=document.getElementById("destroy-button"),w=document.getElementById("unregister-button"),S=document.getElementById("register-button");R.onclick=()=>{const t=document.getElementById("video-h264-transferable-container");E.destroy(),E=null,t.innerHTML="",E=new y("video-h264-transferable-container",{dataSourceId:T.id,css:"video-h264",name:"UAV Video",framerate:25,showTime:!0})},w.onclick=()=>{d.unregisterView(E)},S.onclick=()=>{d.registerView(E)}}]);