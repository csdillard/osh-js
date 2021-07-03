!function(e){var t={};function r(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(s,i,function(t){return e[t]}.bind(null,i));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(e,t,r){e.exports=function(){return new Worker(r.p+"WorkerName.baa3a2b40c65eadccf20.js")}},function(e,t,r){e.exports=function(){return new Worker(r.p+"WorkerName.a509859addbeff0c7789.js")}},function(e,t,r){e.exports=function(){return new Worker(r.p+"WorkerName.d42a7b142c3e0a618578.js")}},function(e,t,r){"use strict";r.r(t);const s=document.getElementById("datasource-gps"),i=document.getElementById("datasource-orientation"),n=document.getElementById("datasource-video"),a=document.getElementById("error"),o=document.getElementById("last-gps"),c=document.getElementById("last-orient"),u=document.getElementById("last-video"),d=document.getElementById("current-time");let p=0,m=0,h=0,l=0;Math.pow(2,53);function S(e){return null!=e}function g(e,t="letiable"){if(!S(e))throw t+" must be defined";return e}function y(){return"xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){let t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}))}const f="disconnected";var T=class{constructor(e,t,r){this.id="DataSource-"+y(),this.name=e,this.properties=t,this.dataSourceWorker=r,this.currentRunningProperties={},this.initDataSource(t)}initDataSource(e){this.dataSourceWorker.postMessage({message:"init",id:this.id,properties:JSON.stringify(e),topic:this.getTopicId()})}disconnect(){this.dataSourceWorker.postMessage({message:"disconnect"})}onDisconnect(){return new Promise(e=>{new BroadcastChannel(this.getTopicId()).onmessage=t=>{t.data.status===f&&e()}})}async connect(){return this.dataSourceWorker.postMessage({message:"connect"}),this.isConnected()}async isConnected(){const e=new Promise(e=>{null!==this.dataSourceWorker&&(this.dataSourceWorker.onmessage=t=>{"is-connected"===t.data.message&&e(t.data.data)})});return null!==this.dataSourceWorker&&this.dataSourceWorker.postMessage({message:"is-connected"}),e}getId(){return this.id}getName(){return this.name}updateProperties(e){this.currentRunningProperties={...this.properties,...e},null!==this.dataSourceWorker&&this.dataSourceWorker.postMessage({message:"update-url",data:e})}getCurrentRunningProperties(){return this.currentRunningProperties}terminate(){null!==this.dataSourceWorker&&this.dataSourceWorker.terminate()}getTopicId(){return"datasource-data-"+this.id}};var x=class extends T{constructor(e,t,r){super(e,t,r),g(t,"Some properties must be defined"),g(t.startTime,"startTime must must be defined"),g(t.endTime,"startTime must must be defined"),this.timeSync=null}setDataSynchronizer(e){this.timeSync=e,this.dataSourceWorker.postMessage({message:"topic",topic:"data-synchronizer-"+this.timeSync.id,timeTopic:this.getTimeTopicId()})}initDataSource(e){super.initDataSource(e),this.dataSourceWorker.postMessage({message:"topic",topic:this.getTopicId(),timeTopic:this.getTimeTopicId()})}setTimeRange(e,t,r,s=!1){let i={};S(r)&&(i={replaySpeed:r}),this.updateProperties({...this.currentRunningProperties,startTime:e,endTime:t,...i,reconnect:s})}getStartTime(){return this.properties.startTime}getEndTime(){return this.properties.endTime}getMinTime(){return this.properties.minTime}getMaxTime(){return this.properties.maxTime}getReplaySpeed(){return S(this.properties.replaySpeed)?this.properties.replaySpeed:1}async getCurrentTime(){if(S(this.timeSync))return this.timeSync.getCurrentTime();{const e=new Promise(e=>{null!==this.dataSourceWorker&&(this.dataSourceWorker.onmessage=t=>{"last-timestamp"===t.data.message&&e(t.data.data)})});return null!==this.dataSourceWorker&&this.dataSourceWorker.postMessage({message:"last-timestamp"}),e}}updateProperties(e){super.updateProperties(e)}getTimeTopicId(){return"datasource-time-"+this.id}},w=r(0),k=r.n(w);var W=class extends x{constructor(e,t){super(e,{timeShift:0,reconnectTimeout:5e3,...t},new k.a)}},v=r(1),b=r.n(v);var O=class extends x{constructor(e,t){super(e,{timeShift:0,reconnectTimeout:5e3,...t},new b.a)}},I=r(2),D=r.n(I);var M=class{constructor(e){if(!S(e.dataSources))throw"You must specify a dataSource array";this.bufferingTime=1e3,this.currentTime=Date.now(),this.id=y(),this.dataSources=[],this.replaySpeed=1,this.timerResolution=5,S(e.replaySpeed)&&(this.replaySpeed=e.replaySpeed),S(e.timerResolution)&&(this.timerResolution=e.timerResolution),this.initWorker(e.dataSources,this.timerResolution),this.properties={},this.properties.replaySpeed=this.replaySpeed}initWorker(e,t){const r=[];for(let t of e){const e=this.createDataSourceForWorker(t);r.push(e),this.dataSources.push(t)}this.synchronizerWorker=new D.a,this.synchronizerWorker.postMessage({message:"init",dataSources:r,replaySpeed:this.replaySpeed,timerResolution:t,dataTopic:this.getTopicId(),timeTopic:this.getTimeTopicId()})}createDataSourceForWorker(e){console.log(e);const t={bufferingTime:e.properties.bufferingTime||0,timeOut:e.properties.timeOut||0,id:e.id};try{e.setDataSynchronizer(this),e.properties.replaySpeed=this.replaySpeed}catch(e){console.error("Cannot set the synchronizer to this DataSource",e)}return t}addDataSource(e){const t=this.createDataSourceForWorker(e);this.dataSources.push(e),this.synchronizerWorker.postMessage({message:"add",dataSources:[t]})}push(e,t){null!==this.synchronizerWorker&&this.synchronizerWorker.postMessage({type:"data",dataSourceId:e,data:t})}connect(){for(let e of this.dataSources)e.connect()}disconnect(){this.reset();for(let e of this.dataSources)e.disconnect()}getStartTime(){if(0===this.dataSources.length)throw"dataSource array is empty";return this.dataSources[0].properties.startTime}getEndTime(){if(0===this.dataSources.length)throw"dataSource array is empty";return this.dataSources[0].properties.endTime}getMinTime(){if(0===this.dataSources.length)throw"dataSource array is empty";return S(this.dataSources[0].properties.minTime)?this.dataSources[0].properties.minTime:this.dataSources[0].properties.startTime}getMaxTime(){if(0===this.dataSources.length)throw"dataSource array is empty";return S(this.dataSources[0].properties.maxTime)?this.dataSources[0].properties.maxTime:this.dataSources[0].properties.endTime}getReplaySpeed(){return this.replaySpeed}setReplaySpeed(e){this.replaySpeed=e,this.properties.replaySpeed=e,this.synchronizerWorker.postMessage({message:"replay-speed",replaySpeed:e})}setTimeRange(e,t,r,s=!1){this.replaySpeed!==r&&this.setReplaySpeed(r),this.reset();for(let i of this.dataSources)i.setTimeRange(e,t,r,s)}reset(){null!==this.synchronizerWorker&&this.synchronizerWorker.postMessage({message:"reset"})}terminate(){null!==this.synchronizerWorker&&(this.synchronizerWorker.terminate(),this.synchronizerWorker=null);for(let e of this.dataSources)e.terminate()}async getCurrentTime(){const e=new Promise(e=>{null!==this.synchronizerWorker&&(this.synchronizerWorker.onmessage=t=>{"current-time"===t.data.message&&e(t.data.data)})});return null!==this.synchronizerWorker&&this.synchronizerWorker.postMessage({message:"current-time"}),e}getTopicId(){return"data-synchronizer-"+this.id}getTimeTopicId(){return"data-synchronizer-time-"+this.id}async isConnected(){for(let e of this.dataSources)if(!await e.isConnected())return!1;return!0}};const P="2015-12-19T21:04:29.231Z",z="2015-12-19T21:09:19.675Z",C=new O("drone-Video",{protocol:"ws",service:"SOS",endpointUrl:"sensiasoft.net:8181/sensorhub/sos",offeringID:"urn:mysos:solo:video2",observedProperty:"http://sensorml.com/ont/swe/property/VideoFrame",startTime:P,endTime:z,replaySpeed:4,bufferingTime:500,timeOut:1e3}),R=new W("android-GPS",{protocol:"ws",service:"SOS",endpointUrl:"sensiasoft.net:8181/sensorhub/sos",offeringID:"urn:mysos:solo:nav2",observedProperty:"http://www.opengis.net/def/property/OGC/0/PlatformLocation",startTime:P,endTime:z,replaySpeed:4,bufferingTime:500,timeOut:1e3}),B=new W("android-Heading",{protocol:"ws",service:"SOS",endpointUrl:"sensiasoft.net:8181/sensorhub/sos",offeringID:"urn:mysos:solo:nav2",observedProperty:"http://www.opengis.net/def/property/OGC/0/PlatformOrientation",startTime:P,endTime:z,replaySpeed:4,bufferingTime:500,timeOut:1e3}),N=new M({replaySpeed:4,timerResolution:5,dataSources:[C,R,B]});N.connect();const j=new BroadcastChannel("datasource-data-"+C.id),E=new BroadcastChannel("datasource-data-"+R.id),J=new BroadcastChannel("datasource-data-"+B.id),_=new BroadcastChannel("data-synchronizer-time-"+N.id);E.onmessage=e=>{var t;"data"===e.data.type&&(t=e.data.values,++p%100==0?s.value=JSON.stringify(t)+"\n":s.value+=JSON.stringify(t)+"\n",o.innerText=new Date(t[t.length-1].timeStamp).toISOString()+" - Location",d.innerText=new Date(t[t.length-1].timeStamp).toISOString()+" - Current")},J.onmessage=e=>{var t;"data"===e.data.type&&(t=e.data.values,++m%100==0?i.value=JSON.stringify(t)+"\n":i.value+=JSON.stringify(t)+"\n",c.innerText=new Date(t[t.length-1].timeStamp).toISOString()+" - Orientation",d.innerText=new Date(t[t.length-1].timeStamp).toISOString()+" - Current")},j.onmessage=e=>{"data"===e.data.type&&function(e){let t;for(let r=0;r<e.length;r++)t=e[r],t.data.frameData=e[r].data.frameData.slice(0,10),++h%1e3==0?n.value=JSON.stringify([t])+"\n":n.value+=JSON.stringify([t])+"\n";u.innerText=new Date(e[e.length-1].timeStamp).toISOString()+" - Video",d.innerText=new Date(e[e.length-1].timeStamp).toISOString()+" - Current"}(e.data.values)},_.onmessage=e=>{var t;(t=e.data.timestamp)<l&&(a.value+=new Date(t).toISOString()+" < "+new Date(l).toISOString()+"\n"),l=t},N.connect()}]);