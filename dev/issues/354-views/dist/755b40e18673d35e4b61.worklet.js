!function(e){var r={};function t(o){if(r[o])return r[o].exports;var u=r[o]={i:o,l:!1,exports:{}};return e[o].call(u.exports,u,u.exports,t),u.l=!0,u.exports}t.m=e,t.c=r,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var u in e)t.d(o,u,function(r){return e[r]}.bind(null,u));return o},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r){class t extends AudioWorkletProcessor{constructor(){super(),this.audioBuffers=[],this.readIdx=0,this.audioBuffersIdx=0,this.port.onmessage=({data:e})=>{this.audioBuffers.push(new Float32Array(e.data))}}process(e,[[r,t]],{audioSrcIndex:o}){if(this.audioBuffersIdx<this.audioBuffers.length)for(let e=0;e<r.length&&!(this.readIdx>=this.audioBuffers[this.audioBuffersIdx].length&&(this.audioBuffersIdx++,this.readIdx=0,this.audioBuffersIdx>=this.audioBuffers.length));e++,this.readIdx++)r[e]=this.audioBuffers[this.audioBuffersIdx][this.readIdx];return!0}}registerProcessor("audio-player",t)}]);
//# sourceMappingURL=755b40e18673d35e4b61.worklet.js.map