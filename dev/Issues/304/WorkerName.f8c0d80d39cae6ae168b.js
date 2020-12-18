!function(t){var e={};function s(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=e,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}([function(t,e,s){"use strict";s.r(e);Math.pow(2,53);function n(t){return null!=t}function i(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){let e=16*Math.random()|0;return("x"===t?e:3&e|8).toString(16)}))}var o=class{buildUrl(t){let e="";e+=t.protocol+"://",e+=t.endpointUrl+"?",e+="service="+t.service+"&",e+="version=2.0&",e+="request=GetResult&",e+="offering="+t.offeringID+"&",t.foiURN&&""!==t.foiURN&&(e+="featureOfInterest="+t.foiURN+"&"),e+="observedProperty="+t.observedProperty+"&";const s=n(t.lastTimeStamp)?t.lastTimeStamp:t.startTime;if(this.lastStartTime=t.startTime,e+="temporalFilter=phenomenonTime,"+s+"/"+t.endTime+"&",t.replaySpeed&&(e+="replaySpeed="+t.replaySpeed),t.responseFormat&&(e+="&responseFormat="+t.responseFormat),n(t.customUrlParams)&&Object.keys(t.customUrlParams).length>0){e+="&";for(let s in t.customUrlParams)e+=s+"="+t.customUrlParams[s]+"&";e.endsWith("&")&&(e=e.slice(0,-1))}return e}};var r=class extends o{parseTimeStamp(t){let e=String.fromCharCode.apply(null,new Uint8Array(t));return new Date(JSON.parse(e).time).getTime()}parseData(t){let e=JSON.parse(String.fromCharCode.apply(null,new Uint8Array(t))),s={};for(let t in e)"time"!==t&&(s[t]=e[t]);return s}buildUrl(t){return super.buildUrl({...t,responseFormat:"application/json"})}};const c="connected",a="disconnected";var h=class{constructor(t){this.url=t,this.id="DataConnector-"+i(),this.reconnectTimeout=12e4,this.status=a,this.reconnectionInterval=-1}checkAndClearReconnection(){-1!==this.reconnectionInterval&&(clearInterval(this.reconnectionInterval),this.reconnectionInterval=-1)}disconnect(){this.checkStatus(a),this.checkAndClearReconnection()}setUrl(t){this.url=t}getId(){return this.id}getUrl(){return this.url}setReconnectTimeout(t){this.reconnectTimeout=t}onReconnect(){return!0}connect(){}forceReconnect(){this.disconnect(),this.connect()}onChangeStatus(t){}checkStatus(t){t!==this.status&&(this.onChangeStatus(t),this.status=t)}onDisconnect(){}onConnect(){}};var l=class extends h{constructor(t){super(t),this.interval=-1,this.lastReceiveTime=0}async connect(){this.init||(this.closed=!1,this.init=!0,this.ws=new WebSocket(this.getUrl()),this.ws.binaryType="arraybuffer",this.ws.onmessage=function(t){this.checkAndClearReconnection(),this.checkStatus(c),this.lastReceiveTime=Date.now(),t.data.byteLength>0&&this.onMessage(t.data)}.bind(this),this.ws.onerror=function(t){console.error("WebSocket stream error"),this.checkStatus(a),this.init=!1,this.lastReceiveTime=-1,this.createReconnection()}.bind(this),this.ws.onclose=t=>{this.checkStatus(a),console.warn("WebSocket stream closed: ",t.reason,t.code),this.init=!1,1e3===t.code||this.closed||this.createReconnection()})}createReconnection(){!this.closed&&-1===this.reconnectionInterval&&this.onReconnect()&&(this.reconnectionInterval=setInterval(function(){let t=Date.now()-this.lastReceiveTime;(-1===this.lastReceiveTime||t>=this.reconnectTimeout)&&(console.warn("trying to reconnect",this.url),this.connect())}.bind(this),this.reconnectTimeout))}disconnect(){super.disconnect(),this.init=!1,this.closed=!0,null!=this.ws&&this.ws.readyState!==WebSocket.CLOSED&&this.ws.close()}onMessage(t){}isConnected(){return null!=this.ws&&this.ws.readyState===WebSocket.OPEN}};var u=class extends h{constructor(t,e){super(t),this.method="POST",this.responseType="arraybuffer",n(e)&&(e.method&&(this.method=e.method),e.responseType&&(this.responseType=e.responseType))}sendRequest(t,e){let s=this,i=new XMLHttpRequest;i.withCredentials=!0,i.timeout=6e4,null===t?(n(e)?i.open("GET",this.getUrl()+"?"+e,!0):i.open("GET",this.getUrl(),!0),i.responseType=this.responseType,i.onload=t=>{i.response&&s.onMessage(i.response)},i.ontimeout=t=>{console.log("Timeout")},i.send(null)):(i.open("POST",this.getUrl(),!0),i.setRequestHeader("Content-Type","text/xml"),i.send(t),i.onreadystatechange=()=>{i.readyState<4||4===i.readyState&&(200===i.status&&i.status<300?s.onSuccess(i.responseText):s.onError(""))})}onError(t){}onSuccess(t){}connect(){this.sendRequest(null)}};var d=class extends h{constructor(t){super(t),this.lastReceiveTime=-1,this.interval=-1,this.broadcastChannel=null}connect(){null===this.broadcastChannel&&(this.broadcastChannel=new BroadcastChannel(this.getUrl()),this.broadcastChannel.onmessage=t=>{this.lastReceiveTime=Date.now(),this.onMessage(t.data.data)},this.broadcastChannel.onerror=t=>{console.error("BroadcastChannel stream error: "+t),this.broadcastChannel.close(),this.init=!1,this.lastReceiveTime=-1},-1===this.interval&&(this.interval=setInterval(function(){let t=Date.now()-this.lastReceiveTime;(-1===this.lastReceiveTime||t>=this.reconnectTimeout)&&(console.warn(`trying to reconnect after ${this.reconnectTimeout} ..`),this.reconnect())}.bind(this),this.reconnectTimeout)))}disconnect(){this.fullDisconnect(!0)}fullDisconnect(t){null!=this.broadcastChannel&&(this.broadcastChannel.close(),this.broadcastChannel=null),t&&clearInterval(this.interval)}reconnect(){this.onReconnect(),this.init&&this.fullDisconnect(!1),this.connect()}onMessage(t){}close(){this.disconnect()}};const m="data",p="status";const f=new class{constructor(t){this.parser=t,this.connector=null,this.lastTimeStamp=null,this.lastStartTime="now",this.timeShift=0,this.reconnectTimeout=1e4,this.values=[]}createConnector(t,e,s){this.dataSourceId=s,null!==this.connector&&(this.connector.disconnect(),this.connector=null),this.broadcastChannel=new BroadcastChannel(e);const i=JSON.parse(t);n(i.fetch)&&(this.fetch=i.fetch),n(i.timeShift)&&(this.timeShift=i.timeShift),n(i.bufferingTime)&&(this.bufferingTime=i.bufferingTime),n(i.timeOut)&&(this.timeOut=i.timeOut),n(i.reconnectTimeout)&&(this.reconnectTimeout=i.reconnectTimeout),"now"===i.startTime?this.batchSize=1:(n(i.replaySpeed)&&(n(i.batchSize)||(this.batchSize=1)),n(i.batchSize)&&(this.batchSize=i.batchSize)),this.properties=i,this.createDataConnector(this.properties)}createDataConnector(t){const e=this.parser.buildUrl({...t,timeShift:this.timeShift});t.protocol.startsWith("ws")?(this.connector=new l(e),this.connector.onMessage=this.onMessage.bind(this),this.connector.setReconnectTimeout(this.reconnectTimeout)):t.protocol.startsWith("http")?(this.connector=new u(e),this.connector.responseType="arraybuffer",this.connector.onMessage=this.onMessage.bind(this),this.connector.setReconnectTimeout(this.reconnectTimeout)):t.protocol.startsWith("topic")&&(this.connector=new d(e),this.connector.onMessage=this.onMessage.bind(this),this.connector.setReconnectTimeout(this.reconnectTimeout));const s=this.parser.lastStartTime;null!==this.connector&&(this.connector.onChangeStatus=this.onChangeStatus.bind(this),this.connector.onReconnect=()=>("now"!==s&&this.connector.setUrl(this.parser.buildUrl({...t,lastTimeStamp:n(this.lastTimeStamp)?new Date(this.lastTimeStamp).toISOString():t.startTime})),!0))}setTopic(t){null!==this.broadcastChannel&&this.broadcastChannel.close(),this.broadcastChannel=new BroadcastChannel(t),this.topic=t}connect(){null!==this.connector&&this.connector.connect()}disconnect(){null!==this.connector&&this.connector.disconnect()}onMessage(t){const e=this.parser.parseTimeStamp(t)+this.timeShift,s=this.parser.parseData(t);this.values.push({data:s,timeStamp:e}),this.lastTimeStamp=e,n(this.batchSize)&&this.values.length>=this.batchSize&&this.flush()}onChangeStatus(t){t===a&&this.flush(),this.broadcastChannel.postMessage({type:p,status:t,dataSourceId:this.dataSourceId})}getLastTimeStamp(){return this.lastTimeStamp}updateUrl(t){this.disconnect();let e=new Date(this.lastTimeStamp).toISOString();t.hasOwnProperty("startTime")?e=t.startTime:"now"===this.properties.startTime&&(e="now"),this.createDataConnector({...this.properties,...t,lastTimeStamp:e}),this.connect()}flush(){this.broadcastChannel.postMessage({dataSourceId:this.dataSourceId,type:m,values:this.values.splice(0,this.values.length)})}handleMessage(t,e){if("init"===t.message)this.createConnector(t.properties,t.topic,t.id);else if("connect"===t.message)this.connect();else if("disconnect"===t.message)this.disconnect();else if("topic"===t.message)this.setTopic(t.topic);else if("last-timestamp"===t.message){const t=this.getLastTimeStamp();e.postMessage({message:"last-timestamp",data:t})}else"update-url"===t.message?this.updateUrl(t.data):"is-connected"===t.message&&e.postMessage({message:"is-connected",data:null!==this.connector&&this.connector.isConnected()})}}(new r);self.onmessage=t=>{f.handleMessage(t.data,self)}}]);
//# sourceMappingURL=WorkerName.f8c0d80d39cae6ae168b.js.map