!function(t){var e={};function a(s){if(e[s])return e[s].exports;var r=e[s]={i:s,l:!1,exports:{}};return t[s].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=e,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(s,r,function(e){return t[e]}.bind(null,r));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=0)}([function(t,e,a){"use strict";a.r(e);Math.pow(2,53);function s(t){return null!=t}const r="disconnected";var i=class{constructor(t,e=1,a=5){this.dataSourceMap={},this.bufferingTime=1e3,this.startBufferingTime=-1,this.tsRun=0,this.replaySpeed=e,this.timerResolution=a;let s=-1;for(let e of t)this.addDataSource(e),s=e.bufferingTime>s?e.bufferingTime:s;-1!==s&&(this.bufferingTime=s)}push(t,e){const a=this.dataSourceMap[t];if(a.status===r)return;-1===this.startBufferingTime&&(console.log(`synchronizer buffering data for ${this.bufferingTime}ms..`),this.startBufferingTime=performance.now(),this.timeoutBuffering=setTimeout(()=>this.processData(),this.bufferingTime));let s=0;this.tsRun>0&&(s=this.tsRun-e.timeStamp),a.latency=s>a.latency?s:(a.latency+s)/2,a.dataBuffer.push(e)}reset(){console.log("reset synchronizer algo"),this.close();for(let t in this.dataSourceMap){const e=this.dataSourceMap[t];e.dataBuffer=[],e.startBufferingTime=-1,e.latency=0,e.status=r}this.tsRun=0,this.startBufferingTime=-1}processData(){if(!s(this.timeoutBuffering))return;let t,e=-1,a=performance.now();for(let a in this.dataSourceMap)t=this.dataSourceMap[a],t.status!==r&&t.dataBuffer.length>0&&(e=-1===e||t.dataBuffer[0].timeStamp<e?t.dataBuffer[0].timeStamp:e);this.interval=setInterval(()=>{for(;this.computeNextData(e,a););},this.timerResolution)}computeNextData(t,e){let a,s=null,i=0,n=0;for(let t in this.dataSourceMap)if(a=this.dataSourceMap[t],a.status!==r&&a.latency>0){let t=Math.min(a.latency,a.timeOut);i=t>i?t:i,n=a.latency<n?a.latency:n}i*=this.replaySpeed,n*=this.replaySpeed;const u=(performance.now()-e)*this.replaySpeed;this.tsRun=t+u;for(let e in this.dataSourceMap)if(a=this.dataSourceMap[e],a.status!==r&&a.dataBuffer.length>0){a.dataBuffer[0].timeStamp-t<=u-i&&(s=null===s?a:s.dataBuffer[0].timeStamp<a.dataBuffer[0].timeStamp?s:a)}if(null!==s){let t=s.dataBuffer.shift();return t["@latency"]=a.latency-n,this.onData(s.id,t),!0}return!1}addDataSource(t){this.dataSourceMap[t.id]={bufferingTime:t.bufferingTime,timeOut:t.timeOut||0,dataBuffer:[],startBufferingTime:-1,id:t.id,timedOut:!1,name:t.name||t.id,latency:0,status:r}}onData(t,e){}setStatus(t,e){t in this.dataSourceMap&&(this.dataSourceMap[t].status=e,e===r&&(this.dataSourceMap[t].latency=0,this.dataSourceMap[t].dataBuffer=[]),console.warn(e+" DataSource "+t+" from the synchronizer "))}close(){s(this.interval)&&(clearInterval(this.interval),this.interval=null),s(this.timeoutBuffering)&&(clearTimeout(this.timeoutBuffering),this.timeoutBuffering=null),console.log("Data synchronizer terminated successfully")}};const n="data",u="time",o="status",l="time-changed",d={};let f,c=!1,m=null;self.currentTime=-1;const p={};let h,S,g=null;function y(t){for(let e of t)M(e)}function M(t){f.addDataSource(t),d[t.id]=new BroadcastChannel("datasource-data-"+t.id),t.id in p||(p[t.id]=t)}function B(t,e){self.currentTime=e.timeStamp,d[t].postMessage({values:[e],dataSourceId:t,type:n}),g.postMessage({timestamp:e.timeStamp,dataSourceId:t,type:u})}self.onmessage=t=>{var e;"init"===t.data.message?(f=new i(t.data.dataSources,t.data.replaySpeed,t.data.timerResolution),f.onData=B,c=!0,y(t.data.dataSources),S=t.data.dataTopic,h=t.data.timeTopic,e=h,m=new BroadcastChannel(S),m.onmessage=t=>{if(t.data.type===n)for(let e=0;e<t.data.values.length;e++)f.push(t.data.dataSourceId,{...t.data.values[e]});else if(t.data.type===o){const e=t.data.dataSourceId;f.setStatus(e,t.data.status),console.log(p[e].name+": status="+t.data.status),d[e].postMessage(t.data)}},g=new BroadcastChannel(e),self.postMessage({message:"initialized"})):"add"===t.data.message&&t.data.dataSources?y(t.data.dataSources):"current-time"===t.data.message?self.postMessage({message:"current-time",data:self.currentTime}):"reset"===t.data.message?(null!==f&&f.reset(),g.postMessage({type:l})):"replay-speed"===t.data.message?null!==f&&(f.replaySpeed=t.data.replaySpeed):"data"===t.data.message&&null!==f&&f.push(t.data.dataSourceId,{data:t.data.data,timeStamp:t.data.timeStamp})},self.onclose=function(){f.close(),console.log("Data Synchronizer has been terminated successfully")}}]);