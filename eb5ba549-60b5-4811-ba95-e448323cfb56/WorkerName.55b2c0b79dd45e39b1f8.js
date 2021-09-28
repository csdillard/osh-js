!function(t){var e={};function a(r){if(e[r])return e[r].exports;var s=e[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=e,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(r,s,function(e){return t[e]}.bind(null,s));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=0)}([function(t,e,a){"use strict";a.r(e);Math.pow(2,53);function r(t){return null!=t}const s="disconnected";var n=class{constructor(t,e=1,a=5){this.dataSourceMap={},this.bufferingTime=1e3,this.startBufferingTime=-1,this.tsRun=0,this.replaySpeed=e,this.timerResolution=a;let r=-1;for(let e of t)this.addDataSource(e),r=e.bufferingTime>r?e.bufferingTime:r;-1!==r&&(this.bufferingTime=r)}push(t,e){const a=this.dataSourceMap[t];if(a.status===s)return;-1===this.startBufferingTime&&(console.log(`synchronizer buffering data for ${this.bufferingTime}ms..`),this.startBufferingTime=performance.now(),this.timeoutBuffering=setTimeout(()=>this.processData(),this.bufferingTime));let r=0;this.tsRun>0&&(r=this.tsRun-e.timeStamp),a.latency=r>a.latency?r:(a.latency+r)/2,a.dataBuffer.push(e)}reset(){console.log("reset synchronizer algo"),this.close();for(let t in this.dataSourceMap){const e=this.dataSourceMap[t];e.dataBuffer=[],e.startBufferingTime=-1,e.latency=0,e.status=s}this.tsRun=0,this.startBufferingTime=-1}processData(){if(!r(this.timeoutBuffering))return;let t,e=-1,a=performance.now();for(let a in this.dataSourceMap)t=this.dataSourceMap[a],t.status!==s&&t.dataBuffer.length>0&&(e=-1===e||t.dataBuffer[0].timeStamp<e?t.dataBuffer[0].timeStamp:e);this.interval=setInterval(()=>{for(;this.computeNextData(e,a););},this.timerResolution)}computeNextData(t,e){let a,r=null,n=0,i=0;for(let t in this.dataSourceMap)if(a=this.dataSourceMap[t],a.status!==s&&a.latency>0){let t=Math.min(a.latency,a.timeOut);n=t>n?t:n,i=a.latency<i?a.latency:i}const u=performance.now()-e;this.tsRun=t+u;for(let e in this.dataSourceMap)if(a=this.dataSourceMap[e],a.status!==s&&a.dataBuffer.length>0){a.dataBuffer[0].timeStamp-t<=(u-n)*this.replaySpeed&&(r=null===r?a:r.dataBuffer[0].timeStamp<a.dataBuffer[0].timeStamp?r:a)}if(null!==r){let t=r.dataBuffer.shift();return t["@latency"]=a.latency-i,this.onData(r.id,t),!0}return!1}addDataSource(t){this.dataSourceMap[t.id]={bufferingTime:t.bufferingTime,timeOut:t.timeOut||0,dataBuffer:[],startBufferingTime:-1,id:t.id,timedOut:!1,name:t.name||t.id,latency:0,status:s}}onData(t,e){}setStatus(t,e){t in this.dataSourceMap&&(this.dataSourceMap[t].status=e,e===s&&(this.dataSourceMap[t].latency=0,this.dataSourceMap[t].dataBuffer=[]),console.warn(e+" DataSource "+t+" from the synchronizer "))}close(){r(this.interval)&&(clearInterval(this.interval),this.interval=null),r(this.timeoutBuffering)&&(clearTimeout(this.timeoutBuffering),this.timeoutBuffering=null),console.log("Data synchronizer terminated successfully")}};const i="data",u="status",o="time-changed",f={};let l,d=!1,c=null;self.currentTime=-1;const m={};let p,h,S=null;function g(t){for(let e of t)y(e)}function y(t){l.addDataSource(t),f[t.id]=new BroadcastChannel("datasource-data-"+t.id),t.id in m||(m[t.id]=t)}function B(t,e){self.currentTime=e.timeStamp,f[t].postMessage({values:[e],dataSourceId:t,type:i}),S.postMessage({timestamp:e.timeStamp,dataSourceId:t,type:i})}self.onmessage=t=>{var e;"init"===t.data.message?(l=new n(t.data.dataSources,t.data.replaySpeed,t.data.timerResolution),l.onData=B,d=!0,g(t.data.dataSources),h=t.data.dataTopic,p=t.data.timeTopic,e=p,c=new BroadcastChannel(h),c.onmessage=t=>{if(t.data.type===i)for(let e=0;e<t.data.values.length;e++)l.push(t.data.dataSourceId,{...t.data.values[e]});else if(t.data.type===u){const e=t.data.dataSourceId;l.setStatus(e,t.data.status),f[e].postMessage(t.data)}},S=new BroadcastChannel(e)):"add"===t.data.message&&t.data.dataSources?g(t.data.dataSources):"current-time"===t.data.message?self.postMessage({message:"current-time",data:self.currentTime}):"reset"===t.data.message?(null!==l&&l.reset(),S.postMessage({type:o})):"replay-speed"===t.data.message?null!==l&&(l.replaySpeed=t.data.replaySpeed):"data"===t.data.message&&null!==l&&l.push(t.data.dataSourceId,{data:t.data.data,timeStamp:t.data.timeStamp})},self.onclose=function(){l.close(),console.log("Data Synchronizer has been terminated successfully")}}]);
//# sourceMappingURL=WorkerName.55b2c0b79dd45e39b1f8.js.map