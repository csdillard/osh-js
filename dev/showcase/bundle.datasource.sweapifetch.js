!function(e){var t={};function s(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(i,n,function(t){return e[t]}.bind(null,n));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=1)}([function(e,t,s){e.exports=function(){return new Worker(s.p+"WorkerName.7cff4d778893e09b450b.js")}},function(e,t,s){"use strict";s.r(t);Math.pow(2,53);function i(e){return null!=e}function n(e,t="letiable"){if(!i(e))throw t+" must be defined";return e}function r(){return"xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){let t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}))}var a=class{constructor(e,t){this.id="DataSource-"+r(),this.name=e,this.properties=t,this.currentRunningProperties={},this.eventSubscriptionMap={},this.initialized=!1,this.init=void 0,this.messagesMap={}}getId(){return this.id}getName(){return this.name}getCurrentRunningProperties(){return this.currentRunningProperties}terminate(){null!==this.dataSourceWorker&&this.dataSourceWorker.terminate()}getTopicId(){return"datasource-data-"+this.id}getVersion(){return 0}subscribe(e,t){for(let s=0;s<t.length;s++)t[s]in this.eventSubscriptionMap||(this.eventSubscriptionMap[t[s]]=[]),this.eventSubscriptionMap[t[s]].push(e)}async createWorker(e){}async updateProperties(e){return this.currentRunningProperties={...this.properties,...e},new Promise(t=>{this.postMessage({message:"update-url",data:e},t)})}async connect(){await this.checkInit(),await this.doConnect()}async initDataSource(){return new Promise(async e=>{this.dataSourceWorker=await this.createWorker(this.properties),this.handleWorkerMessage(),this.postMessage({message:"init",id:this.id,properties:this.properties,topic:this.getTopicId()},async t=>{new BroadcastChannel(this.getTopicId()).onmessage=async e=>{this.handleMessage(e)},this.initialized=t,e()})})}async handleMessage(e){const t=e.data.type;if(t in this.eventSubscriptionMap)for(let s=0;s<this.eventSubscriptionMap[t].length;s++)this.eventSubscriptionMap[t][s](e.data)}async checkInit(){return new Promise(async(e,t)=>{i(this.init)||(this.init=this.initDataSource()),await this.init,e()})}async doConnect(){return new Promise(async e=>{this.postMessage({message:"connect"},e)})}async isConnected(){return new Promise(async e=>{await this.checkInit(),this.postMessage({message:"is-connected"},e)})}async disconnect(){return new Promise(async e=>{await this.checkInit(),this.postMessage({message:"disconnect"},e)})}postMessage(e,t){const s=r();this.dataSourceWorker.postMessage({...e,messageId:s}),i(t)&&(this.messagesMap[s]=t)}handleWorkerMessage(){this.dataSourceWorker.onmessage=e=>{const t=e.data.messageId;t in this.messagesMap&&(this.messagesMap[t](e.data.data),delete this.messagesMap[t])}}async onDisconnect(){}reset(){}};var o=class extends a{constructor(e,t){super(e,t),n(t,"Some properties must be defined"),n(t.startTime,"startTime must must be defined"),n(t.endTime,"startTime must must be defined"),this.timeSync=null}getTimeTopicId(){return"datasource-time-"+this.id}getStartTime(){return this.properties.startTime}getEndTime(){return this.properties.endTime}getMinTime(){return this.properties.minTime}getMaxTime(){return this.properties.maxTime}getReplaySpeed(){return i(this.currentRunningProperties)&&i(this.currentRunningProperties.replaySpeed)?this.currentRunningProperties.replaySpeed:i(this.properties.replaySpeed)?this.properties.replaySpeed:1}async setDataSynchronizer(e){return new Promise(async(t,s)=>{await this.checkInit();const i="data-synchronizer-"+e.id;this.timeSync=e,this.postMessage({message:"topic",topic:i,timeTopic:this.getTimeTopicId()},t)})}async initDataSource(e){return await super.initDataSource(e),new Promise(async e=>{this.postMessage({message:"topic",topic:this.getTopicId(),timeTopic:this.getTimeTopicId()},async()=>{new BroadcastChannel(this.getTimeTopicId()).onmessage=async e=>{this.handleTimeMessage(e)},e()})})}async handleTimeMessage(e){const t=e.data.type;if(t in this.eventSubscriptionMap)for(let s=0;s<this.eventSubscriptionMap[t].length;s++)this.eventSubscriptionMap[t][s](e.data)}async setTimeRange(e,t,s,n=!1){let r={};return i(s)&&(r={replaySpeed:s}),this.updateProperties({...this.currentRunningProperties,startTime:e,endTime:t,...r,reconnect:n})}async getCurrentTime(){return i(this.timeSync)?this.timeSync.getCurrentTime():new Promise(e=>{this.postMessage({message:"last-timestamp"},e)})}},c=s(0),p=s.n(c);let u=new class extends o{constructor(e,t){super(e,{batchSize:1,reconnectTimeout:5e3,startTime:"now",endTime:"2055-01-01T00:00:00Z",tls:!1,responseFormat:"application/om+json",protocol:"http",...t})}async createWorker(e){return new p.a}}("android-GPS",{endpointUrl:"ogct17.georobotix.io:8080/sensorhub/api",collection:"/datastreams/gal7w6j6v7n9/observations",tls:!1,protocol:"mqtt",mqttOpts:{prefix:"/api",endpointUrl:"ogct17.georobotix.io:8083"}});u.subscribe(async e=>{let t;for(let s=0;s<e.values.length;s++){t=e.values[s];const i=JSON.stringify(t.data,null,2);document.getElementById("json-container").innerHTML=i}},["data"]),u.connect()}]);