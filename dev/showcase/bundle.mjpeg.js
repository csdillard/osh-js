!function(e){var t={};function i(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(s,n,function(t){return e[t]}.bind(null,n));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=5)}([function(e,t,i){e.exports=function(){return new Worker(i.p+"WorkerName.ed8223be0891044269bf.js")}},function(e,t,i){var s=i(2),n=i(3);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var r={insert:"head",singleton:!1},a=(s(n,r),n.locals?n.locals:{});e.exports=a},function(e,t,i){"use strict";var s,n=function(){return void 0===s&&(s=Boolean(window&&document&&document.all&&!window.atob)),s},r=function(){var e={};return function(t){if(void 0===e[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}e[t]=i}return e[t]}}(),a=[];function o(e){for(var t=-1,i=0;i<a.length;i++)if(a[i].identifier===e){t=i;break}return t}function d(e,t){for(var i={},s=[],n=0;n<e.length;n++){var r=e[n],d=t.base?r[0]+t.base:r[0],c=i[d]||0,u="".concat(d," ").concat(c);i[d]=c+1;var l=o(u),h={css:r[1],media:r[2],sourceMap:r[3]};-1!==l?(a[l].references++,a[l].updater(h)):a.push({identifier:u,updater:f(h,t),references:1}),s.push(u)}return s}function c(e){var t=document.createElement("style"),s=e.attributes||{};if(void 0===s.nonce){var n=i.nc;n&&(s.nonce=n)}if(Object.keys(s).forEach((function(e){t.setAttribute(e,s[e])})),"function"==typeof e.insert)e.insert(t);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,l=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function h(e,t,i,s){var n=i?"":s.media?"@media ".concat(s.media," {").concat(s.css,"}"):s.css;if(e.styleSheet)e.styleSheet.cssText=l(t,n);else{var r=document.createTextNode(n),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function m(e,t,i){var s=i.css,n=i.media,r=i.sourceMap;if(n?e.setAttribute("media",n):e.removeAttribute("media"),r&&btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=s;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(s))}}var p=null,v=0;function f(e,t){var i,s,n;if(t.singleton){var r=v++;i=p||(p=c(t)),s=h.bind(null,i,r,!1),n=h.bind(null,i,r,!0)}else i=c(t),s=m.bind(null,i,t),n=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(i)};return s(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;s(e=t)}else n()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=n());var i=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var s=0;s<i.length;s++){var n=o(i[s]);a[n].references--}for(var r=d(e,t),c=0;c<i.length;c++){var u=o(i[c]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}i=r}}}},function(e,t,i){(t=i(4)(!1)).push([e.i,".osh-view {\n    width:100%;\n    height: 100%;\n}\n",""]),e.exports=t},function(e,t,i){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i=function(e,t){var i=e[1]||"",s=e[3];if(!s)return i;if(t&&"function"==typeof btoa){var n=(a=s,o=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),"/*# ".concat(d," */")),r=s.sources.map((function(e){return"/*# sourceURL=".concat(s.sourceRoot||"").concat(e," */")}));return[i].concat(r).concat([n]).join("\n")}var a,o,d;return[i].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(i,"}"):i})).join("")},t.i=function(e,i,s){"string"==typeof e&&(e=[[null,e,""]]);var n={};if(s)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(n[a]=!0)}for(var o=0;o<e.length;o++){var d=[].concat(e[o]);s&&n[d[0]]||(i&&(d[2]?d[2]="".concat(i," and ").concat(d[2]):d[2]=i),t.push(d))}},t}},function(e,t,i){"use strict";i.r(t);Math.pow(2,53);function s(e){return null!=e}function n(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){let t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}))}var r=class{constructor(e,t,i){this.id="DataSource-"+n(),this.name=e,this.properties={fetch:1,...t},this.dataSourceWorker=i,this.dataSynchronizer=null,this.currentRunningProperties={},this.initDataSource(t)}initDataSource(e){this.dataSourceWorker.postMessage({message:"init",id:this.id,properties:JSON.stringify(e),topic:"datasource-data-"+this.id})}setDataSynchronizer(e){this.dataSynchronizer=e,this.dataSourceWorker.postMessage({message:"topic",topic:"data-synchronizer-"+this.dataSynchronizer.id})}setTimeRange(e,t,i){this.updateUrl({...this.currentRunningProperties,startTime:e,endTime:t,replaySpeed:i})}getStartTime(){return this.properties.startTime}getEndTime(){return this.properties.endTime}getReplaySpeed(){return s(this.properties.replaySpeed)?this.properties.replaySpeed:1}disconnect(){this.dataSourceWorker.postMessage({message:"disconnect"})}async connect(){return this.dataSourceWorker.postMessage({message:"connect"}),this.isConnected()}async isConnected(){const e=new Promise(e=>{null!==this.dataSourceWorker&&(this.dataSourceWorker.onmessage=t=>{"is-connected"===t.data.message&&e(t.data.data)})});return null!==this.dataSourceWorker&&this.dataSourceWorker.postMessage({message:"is-connected"}),e}async getCurrentTime(){if(s(this.dataSynchronizer))return this.dataSynchronizer.getCurrentTime();{const e=new Promise(e=>{null!==this.dataSourceWorker&&(this.dataSourceWorker.onmessage=t=>{"last-timestamp"===t.data.message&&e(t.data.data)})});return null!==this.dataSourceWorker&&this.dataSourceWorker.postMessage({message:"last-timestamp"}),e}}getId(){return this.id}getName(){return this.name}updateUrl(e){this.currentRunningProperties={...this.properties,...e},null!==this.dataSourceWorker&&this.dataSourceWorker.postMessage({message:"update-url",data:e})}getCurrentRunningProperties(){return this.currentRunningProperties}terminate(){null!==this.dataSourceWorker&&this.dataSourceWorker.terminate()}},a=i(0),o=i.n(a);var d=class extends r{constructor(e,t){super(e,{timeShift:0,reconnectTimeout:5e3,...t},new o.a)}};const c=new class{constructor(){this.eventMap={}}remove(e,t){e in this.eventMap&&(this.eventMap[e]=this.eventMap[e].filter(e=>e.id!==t))}removeById(e){for(let t in this.eventMap)this.eventMap[t]=this.eventMap[t].filter(t=>t.id!==e)}observe(e,t,i="any"){s(e)&&s(t)&&s(i)&&(e in this.eventMap||(this.eventMap[e]=[]),this.eventMap[e].push({fn:t,id:i}))}fire(e,t){if(s(e)&&e in this.eventMap){let i=this.eventMap[e];for(let e=0;e<i.length;e++)i[e].fn(t)}}};var u=class{static remove(e,t="any"){c.remove("osh:"+e,t)}static removeById(e="any"){c.removeById(e)}static registerView(e){e.registerCallback()}static unregisterView(e){e.unregisterCallback()}static fire(e,t){t.name=e,c.fire("osh:"+e,t)}static observe(e,t,i="any"){c.observe("osh:"+e,t,i)}static observeDiv(e,t,i){document.getElementById(e).addEventListener(t,i)}static get EVENT(){return{SELECT_VIEW:"selectView",SHOW_VIEW:"showView",UAV_TAKEOFF:"uav:takeoff",UAV_GOTO:"uav:goto",UAV_LOOKAT:"uav:lookat",UAV_LAND:"uav:land",UAV_ORBIT:"uav:orbit",LOADING_START:"loading:start",LOADING_STOP:"loading:stop",ADD_VIEW_ITEM:"addViewItem",RESIZE:"resize",PTZ_SEND_REQUEST:"ptzSendRequest"}}};i(1);const l="disconnected",h="data",m="status";var p=class{constructor(e,t,i){this.layers=[],this.viewItems=[],this.names={},this.lastRec={},this.selectedDataSources=[],this.dataSources=[],this.entity=null,this.id="view-"+n(),this.entity=null,this.dataSourceId=-1,s(i)&&s(i.dataSourceId)&&(this.dataSourceId=i.dataSourceId),s(i)&&s(i.entity)&&(this.entity=i.entity),this.css="",this.cssSelected="",s(i)&&s(i.css)&&(this.css=i.css),s(i)&&s(i.cssSelected)&&(this.cssSelected=i.cssSelected),this.init(e,t,i)}init(e,t,i){this.elementDiv=document.createElement("div"),this.elementDiv.setAttribute("id",this.id),this.elementDiv.setAttribute("class",this.css+" osh-view"),this.divId=this.id;let n=document.getElementById(e);if(s(n)&&null!==n?(n.appendChild(this.elementDiv),this.container=n):(document.body.appendChild(this.elementDiv),this.hide(),this.container=document.body),this.beforeAddingItems(i),s(t))for(let e=0;e<t.length;e++)this.addViewItem(t[e]);s(i)&&s(i.show)&&(document.getElementById(this.divId).style.display=i.show?"block":"none"),this.handleEvents();var r=this;this.registerCallback(),new MutationObserver(e=>{e.forEach((function(e){"style"===e.attributeName&&r.onResize()}))}).observe(this.elementDiv,{attributes:!0});new MutationObserver((function(e){s(document.getElementById(r.divId))||(this.disconnect(),r.destroy())})).observe(document.body,{childList:!0})}registerCallback(){if(s(this.dataSourceId)||s(this.entity)){const t=this;function e(e){new BroadcastChannel("datasource-data-"+e).onmessage=i=>{i.data.message&&"reset"===i.data.message?t.reset():i.data.type===h?t.setData(e,i.data.values):i.data.type===m&&i.data.status===l&&t.reset()}}if(null!==this.entity)for(let t of this.entity.getDataSources())e(t.id);else e(this.dataSourceId)}}unregisterCallback(){u.removeById(this.divId)}hide(){this.elementDiv.style.display="none"}onResize(){}attachTo(e){s(this.elementDiv.parentNode)&&this.elementDiv.parentNode.removeChild(this.elementDiv),document.getElementById(e).appendChild(this.elementDiv),"none"===this.elementDiv.style.display&&(this.elementDiv.style.display="block"),this.onResize()}beforeAddingItems(e){}getId(){return this.id}getDivId(){return this.divId}setData(e,t){}show(e){}destroy(){this.unregisterCallback()}addViewItem(e){if(this.viewItems.push(e),e.hasOwnProperty("layer")){let t=e.layer;this.layers.push(t),e.hasOwnProperty("name")&&(this.names[t.markerId]=e.name),t.viewItem=e,t.init(this);let i=t.getDataSourcesIds();for(let e=0;e<i.length;e++){const s=i[e];let n=this;new BroadcastChannel("datasource-data-"+s).onmessage=e=>{e.data.type===m&&e.data.status===l||e.data.type===h&&(t.setData(s,e.data,n),n.lastRec[s]=e.data)}}}}removeViewItem(e){if(this.viewItems.includes(e)){for(let t in e.layer.dataSourceToLayerMap)delete this.lastRec[t];this.viewItems=this.viewItems.filter(t=>t!==e)}this.layers=this.layers.filter(t=>t.id!==e.layer.id),delete this.names[e.layer.markerId]}removeViewItems(){for(const e of this.viewItems)this.removeViewItem(e)}handleEvents(){var e=this;u.observe(u.EVENT.SELECT_VIEW,t=>e.selectDataView(t.dataSourcesIds,t.entityId),this.divId),u.observe(u.EVENT.SHOW_VIEW,t=>e.show(t),this.divId),u.observe(u.EVENT.ADD_VIEW_ITEM,t=>{s(t.viewId)&&t.viewId===e.id&&e.addViewItem(t.viewItem)},this.divId),u.observe(u.EVENT.RESIZE+"-"+this.divId,t=>e.onResize(),this.divId)}selectDataView(e,t){if(s(this.dataSources)){this.selectedDataSources=e,this.selectedEntity=t;for(let e=0;e<this.dataSources.length;e++)this.setData(this.dataSources[e],this.lastRec[this.dataSources[e]])}}getDataSourcesId(){let e=[];-1!==this.dataSourceId&&e.push(this.dataSourceId);for(let t=0;t<this.viewItems.length;t++){let i=this.viewItems[t];if(i.hasOwnProperty("layer")){let t=i.layer;e=e.concat(t.getDataSourcesIds())}}return e}reset(){}};var v=class extends p{constructor(e,t){if(super(e,[],t),this.timeStamp=null,s(t.showTime)&&t.showTime&&(this.timeStamp=document.createElement("div"),this.timeStamp.setAttribute("class","video-time"),document.getElementById(this.divId).appendChild(this.timeStamp)),this.imgTag=document.createElement("img"),this.imgTag.setAttribute("class","video-mjpeg"),this.rotation=0,void 0!==t&&void 0!==t.rotation){this.rotation=t.rotation*Math.PI/180,this.canvas=document.createElement("canvas"),this.canvas.width=640,this.canvas.height=480;var i=this.canvas.getContext("2d");i.translate(0,480),i.rotate(this.rotation),document.getElementById(this.divId).appendChild(this.canvas)}else document.getElementById(this.divId).appendChild(this.imgTag);let n=this;u.observeDiv(this.divId,"click",e=>{u.fire(u.EVENT.SELECT_VIEW,{dataSourcesIds:[n.dataSourceId],entityId:n.entityId})})}setData(e,t){for(let e=0;e<t.length;e++){const e=t.shift();let i=new Blob([e.data.frameData]),s=window.URL.createObjectURL(i),n=this.imgTag.src;this.imgTag.src=s,null!==this.timeStamp&&(this.timeStamp.innerHTML=new Date(e.timeStamp).toISOString()),window.URL.revokeObjectURL(n)}}selectDataView(e,t){e.indexOf(this.dataSourceId)>-1||s(this.entity)&&this.entity.getId()===t?document.getElementById(this.divId).setAttribute("class",this.css+" "+this.cssSelected):document.getElementById(this.divId).setAttribute("class",this.css)}reset(){this.imgTag.src=""}};let f=new d("android-Video",{protocol:"ws",service:"SOS",endpointUrl:"sensiasoft.net:8181/sensorhub/sos",offeringID:"urn:android:device:060693280a28e015-sos",observedProperty:"http://sensorml.com/ont/swe/property/VideoFrame",startTime:"2015-02-16T07:58:35Z",endTime:"2015-02-16T08:09:00Z",replaySpeed:3});new v("video-mjpeg-container",{dataSourceId:f.id,css:"video-mjpeg",name:"Android Video",keepRatio:!0,showTime:!0});f.connect()}]);