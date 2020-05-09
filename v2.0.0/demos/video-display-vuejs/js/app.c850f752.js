(function(e){function t(t){for(var i,r,s=t[0],c=t[1],l=t[2],d=0,h=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&h.push(a[r][0]),a[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);u&&u(t);while(h.length)h.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(i=!1)}i&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},a={app:0},o=[];function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="http://opensensorhub.github.io/osh-js/v2.0.0/demos/video-display-vuejs/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var i=n("85ec"),a=n.n(i);a.a},"38c5":function(e,t,n){},5490:function(e,t,n){"use strict";var i=n("a6b6"),a=n.n(i);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Video"),n("Map")],1)},o=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"map",attrs:{id:"leafletMap"}})},s=[],c=(n("a4d3"),n("e01a"),n("99af"),n("d81d"),n("b0c0"),n("96cf"),n("1da1")),l=n("d4ec"),u=n("bee2"),d=n("7e84"),h=n("45eb"),f=n("2caf"),p=n("262e"),v=(n("4de4"),n("4160"),n("caad"),n("c975"),n("2532"),n("159b"),n("ace4"),n("d3b7"),n("ac1f"),n("25f0"),n("8a79"),n("5319"),n("53ca"));Math.pow(2,53);function m(e){return"undefined"!==typeof e&&null!==e}function y(e){return m(e)&&null!==e}function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"letiable";if(!m(e))throw t+" must be defined";return e}function g(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"letiable";if(b(e,n),Object(v["a"])(e)!==t)throw n+" must be of type "+t;return e}function S(e,t){return g(e,"string",t)}function I(e,t){return g(e,"number",t)}function O(e,t){if(I(e,t),e<=0)throw t+" must be a positive number"}function T(e,t){return g(e,"object",t)}function w(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"letiable";if(b(e,t),!Array.isArray(e))throw t+" must be an array";return e}function k(e,t){return g(e,"function",t)}function E(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0,n="x"===e?t:3&t|8;return n.toString(16)}))}function D(){return m(Worker)}var j=function(){function e(){Object(l["a"])(this,e),this.eventMap={}}return Object(u["a"])(e,[{key:"remove",value:function(e,t){e in this.eventMap&&(this.eventMap[e]=this.eventMap[e].filter((function(e){return e.id!==t})))}},{key:"observe",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"any";m(e)&&m(t)&&m(n)&&(e in this.eventMap||(this.eventMap[e]=[]),this.eventMap[e].push({fn:t,id:n}))}},{key:"fire",value:function(e,t){if(m(e)&&e in this.eventMap)for(var n=this.eventMap[e],i=0;i<n.length;i++)n[i].fn(t)}}]),e}(),M=j,A=new M,x=function(){function e(){Object(l["a"])(this,e)}return Object(u["a"])(e,null,[{key:"remove",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"any";A.remove("osh:"+e,t)}},{key:"registerView",value:function(e){e.registerCallback()}},{key:"unregisterView",value:function(e){e.unregisterCallback()}},{key:"fire",value:function(e,t){t.name=e,A.fire("osh:"+e,t)}},{key:"observe",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"any";A.observe("osh:"+e,t,n)}},{key:"observeDiv",value:function(e,t,n){var i=document.getElementById(e);i.addEventListener(t,n)}},{key:"EVENT",get:function(){return{DATA:"data",SYNC_DATA:"syncData",SELECT_VIEW:"selectView",SHOW_VIEW:"showView",CONNECT_DATASOURCE:"connectDataSource",DISCONNECT_DATASOURCE:"disconnectDataSource",DATASOURCE_UPDATE_TIME:"updateDataSourceTime",CURRENT_MASTER_TIME:"currentMasterTime",UAV_TAKEOFF:"uav:takeoff",UAV_GOTO:"uav:goto",UAV_LOOKAT:"uav:lookat",UAV_LAND:"uav:land",UAV_ORBIT:"uav:orbit",LOADING_START:"loading:start",LOADING_STOP:"loading:stop",ADD_VIEW_ITEM:"addViewItem",RESIZE:"resize",PTZ_SEND_REQUEST:"ptzSendRequest"}}}]),e}(),R=x,F=(n("c8d2"),function(){function e(t,n,i){Object(l["a"])(this,e),this.stylers=[],this.viewItems=[],this.names={},this.stylerToObj={},this.stylerIdToStyler={},this.lastRec={},this.selectedDataSources=[],this.dataSources=[],this.id="view-"+E(),this.dataSourceId=-1,m(i)&&m(i.dataSourceId)&&(this.dataSourceId=i.dataSourceId),m(i)&&m(i.entityId)&&(this.entityId=i.entityId),this.css="",this.cssSelected="",m(i)&&m(i.css)&&(this.css=i.css),m(i)&&m(i.cssSelected)&&(this.cssSelected=i.cssSelected),this.init(t,n,i)}return Object(u["a"])(e,[{key:"init",value:function(e,t,n){this.elementDiv=document.createElement("div"),this.elementDiv.setAttribute("id",this.id),this.elementDiv.setAttribute("class",this.css+" osh-view"),this.divId=this.id;var i=document.getElementById(e);if(m(i)&&null!==i?(i.appendChild(this.elementDiv),this.container=i):(document.body.appendChild(this.elementDiv),this.hide(),this.container=document.body),this.beforeAddingItems(n),m(t))for(var a=0;a<t.length;a++)this.addViewItem(t[a]);m(n)&&m(n.show)&&(document.getElementById(this.divId).style.display=n.show?"block":"none"),this.handleEvents();var o=this;m(n)&&m(n.dataSourceId)&&this.registerCallback();var r=new MutationObserver((function(e){e.forEach((function(e){"style"===e.attributeName&&o.onResize()}))}));r.observe(this.elementDiv,{attributes:!0})}},{key:"registerCallback",value:function(){var e=this;R.observe(this.getEventName(),(function(t){t.reset?e.reset():e.setData(e.dataSourceId,t.data)}),this.divId)}},{key:"unregisterCallback",value:function(){R.remove(this.getEventName(),this.divId)}},{key:"getEventName",value:function(){return R.EVENT.DATA+"-"+this.dataSourceId}},{key:"hide",value:function(){this.elementDiv.style.display="none"}},{key:"onResize",value:function(){}},{key:"attachTo",value:function(e){m(this.elementDiv.parentNode)&&this.elementDiv.parentNode.removeChild(this.elementDiv),document.getElementById(e).appendChild(this.elementDiv),"none"===this.elementDiv.style.display&&(this.elementDiv.style.display="block"),this.onResize()}},{key:"beforeAddingItems",value:function(e){}},{key:"getId",value:function(){return this.id}},{key:"getDivId",value:function(){return this.divId}},{key:"setData",value:function(e,t){}},{key:"show",value:function(e){}},{key:"destroy",value:function(){this.unregisterCallback()}},{key:"addViewItem",value:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.viewItems.push(t),t.hasOwnProperty("styler")&&function(){var e=t.styler;n.stylers.push(e),t.hasOwnProperty("name")&&(n.names[e.getId()]=t.name),e.viewItem=t,e.init(n),n.stylerIdToStyler[e.id]=e;for(var i=e.getDataSourcesIds(),a=function(a){var o=i[a],r=n;R.observe(R.EVENT.DATA+"-"+o,(function(n){if(!n.reset){var i=!1;i=m(r.selectedEntity)?t.entityId===r.selectedEntity:r.selectedDataSources.indexOf(o)>-1,e.setData(o,n.data,r,{selected:i}),r.lastRec[o]=n.data}}),n.divId),R.observe(R.EVENT.SELECT_VIEW,(function(n){var i=!1;i=m(n.entityId)?t.entityId===n.entityId:n.dataSourcesIds.indexOf(o)>-1,o in r.lastRec&&e.setData(o,r.lastRec[o],r,{selected:i})}),n.divId)},o=0;o<i.length;o++)a(o)}();case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"removeViewItem",value:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.viewItems.includes(t)&&(this.viewItems=this.viewItems.filter((function(e){return e!==t})));case 1:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"handleEvents",value:function(){var e=this;R.observe(R.EVENT.SELECT_VIEW,(function(t){return e.selectDataView(t.dataSourcesIds,t.entityId)})),R.observe(R.EVENT.SHOW_VIEW,(function(t){return e.show(t)})),R.observe(R.EVENT.ADD_VIEW_ITEM,(function(t){m(t.viewId)&&t.viewId===e.id&&e.addViewItem(t.viewItem)})),R.observe(R.EVENT.RESIZE+"-"+this.divId,(function(t){return e.onResize()}))}},{key:"selectDataView",value:function(e,t){if(m(this.dataSources)){this.selectedDataSources=e,this.selectedEntity=t;for(var n=0;n<this.dataSources.length;n++)this.setData(this.dataSources[n],this.lastRec[this.dataSources[n]])}}},{key:"getDataSourcesId",value:function(){var e=[];-1!==this.dataSourceId&&e.push(this.dataSourceId);for(var t=0;t<this.viewItems.length;t++){var n=this.viewItems[t];if(n.hasOwnProperty("styler")){var i=n.styler;e=e.concat(i.getDataSourcesIds())}}return e}},{key:"reset",value:function(){}}]),e}()),U=n("0ff8"),L=n.n(U),V=(n("af26"),function(e){Object(p["a"])(n,e);var t=Object(f["a"])(n);function n(e,i,a){var o;Object(l["a"])(this,n),o=t.call(this,e,i,a);var r=document.getElementById(o.divId).className;return document.getElementById(o.divId).setAttribute("class",r+" "+o.css),o}return Object(u["a"])(n,[{key:"beforeAddingItems",value:function(e){this.initMap(e)}},{key:"initMap",value:function(e){var t={location:new L.a.LatLng(0,0),zoom:3};this.first=!0,this.watch=!1;var n=this.getDefaultLayers(),i=n[0].layer,a={},o={};a[n[0].name]=n[0].layer,o[n[1].name]=n[1].layer,m(e)&&(m(e.initialView)&&(t={location:new L.a.LatLng(e.initialView.lat,e.initialView.lon),zoom:e.initialView.zoom}),m(e.autoZoomOnFirstMarker)&&(this.first=!1),m(e.autoZoomOnFirstMarker)&&(this.autoZoomOnFirstMarker=e.autoZoomOnFirstMarker),m(e.overlayLayers)&&(o=e.overlayLayers),m(e.baseLayers)&&(a=e.baseLayers),m(e.defaultLayer)&&(i=e.defaultLayer)),this.map=new L.a.Map(this.divId,{fullscreenControl:!0,layers:i}),L.a.control.layers(a,o).addTo(this.map),this.map.setView(t.location,t.zoom),this.markers={},this.polylines={}}},{key:"getDefaultLayers",value:function(e){var t=22;m(e)&&e.maxZoom&&(t=e.maxZoom);var n='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',i="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",a='<a href="http://www.esri.com/">Esri</a>',o="i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",r=L.a.tileLayer("http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"&copy; "+a+", "+o,maxZoom:t,maxNativeZoom:19}),s=L.a.tileLayer(i,{id:"mapbox.streets",attribution:n,maxZoom:t});return[{name:"OSM Streets",layer:s},{name:"Esri Satellite",layer:r}]}},{key:"initLayers",value:function(){var e="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",t='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',n=new L.a.tileLayer(e,{minZoom:1,maxZoom:22,attribution:t});this.map.addLayer(n)}},{key:"addMarker",value:function(e){var t=null;if(null!==e.icon){var n=L.a.icon({iconAnchor:e.iconAnchor,iconUrl:e.icon});t=L.a.marker([e.lat,e.lon],{icon:n})}else t=L.a.marker([e.lat,e.lon]);null!==e.label&&t.bindTooltip(e.label,{permanent:!1,direction:"center",offset:L.a.point(e.labelOffset[0],e.labelOffset[1])});var i=e.hasOwnProperty("name")&&null!=e.name?e.name:"",a=e.hasOwnProperty("description")&&null!=e.description?e.description:"";(i.length>0||a.length>0)&&t.bindPopup(i+"<div>"+a+"</div>"),t.addTo(this.map),t.setRotationAngle(e.orientation);var o="view-marker-"+E();this.markers[o]=t,!0===this.first&&(this.map.setView(new L.a.LatLng(e.lat,e.lon),19),this.first=!1);var r=this;return t._icon.id=o,t.on("click",(function(){var e=[];for(var t in r.stylerToObj)if(r.stylerToObj[t]===o){var n=r.stylerIdToStyler[t];R.fire(R.EVENT.SELECT_VIEW,{dataSourcesIds:e.concat(n.getDataSourcesIds()),entityId:n.viewItem.entityId});break}})),o}},{key:"removeViewItem",value:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(h["a"])(Object(d["a"])(n.prototype),"removeViewItem",this).call(this,t);case 2:i=this.stylerToObj[t.styler.getId()],a=this.markers[i],this.map.removeLayer(a),delete this.stylerToObj[t.styler.getId()],delete this.markers[i];case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"addPolyline",value:function(e){for(var t=[],n=0;n<e.locations.length;n++)t.push(new L.a.LatLng(e.locations[n].y,e.locations[n].x));var i=new L.a.Polyline(t,{color:e.color,weight:e.weight,opacity:e.opacity,smoothFactor:e.smoothFactor}).addTo(this.map),a="view-polyline-"+E();return this.polylines[a]=i,a}},{key:"updateMarker",value:function(e){var t=0;e.getId()in this.stylerToObj?t=this.stylerToObj[e.getId()]:(t=this.addMarker({lat:e.location.y,lon:e.location.x,orientation:e.orientation.heading,color:e.color,icon:e.icon,iconAnchor:e.iconAnchor,label:e.label,labelColor:e.labelColor,labelSize:e.labelSize,labelOffset:e.labelOffset,name:e.viewItem.name,description:e.viewItem.description}),this.stylerToObj[e.getId()]=t);var n=this.markers[t],i=e.location.x,a=e.location.y;if(!isNaN(i)&&!isNaN(a)){var o=new L.a.LatLng(a,i);n.setLatLng(o),this.autoZoomOnFirstMarker&&this.map.panTo(o)}if(m(e.orientation)&&n.setRotationAngle(e.orientation.heading),null!==e.icon&&n._icon.iconUrl!==e.icon){var r=L.a.icon({iconAnchor:e.iconAnchor,iconUrl:e.icon});n.setIcon(r)}}},{key:"updatePolyline",value:function(e){var t=0;if(e.getId()in this.stylerToObj?t=this.stylerToObj[e.getId()]:(t=this.addPolyline({color:e.color,weight:e.weight,locations:e.locations,maxPoints:e.maxPoints,opacity:e.opacity,smoothFactor:e.smoothFactor}),this.stylerToObj[e.getId()]=t),t in this.polylines){var n=this.polylines[t];this.map.removeLayer(n);for(var i=[],a=0;a<e.locations.length;a++)i.push(new L.a.LatLng(e.locations[a].y,e.locations[a].x));n=new L.a.Polyline(i,{color:e.color,weight:e.weight,opacity:e.opacity,smoothFactor:e.smoothFactor}).addTo(this.map),this.polylines[t]=n}}},{key:"attachTo",value:function(e){Object(h["a"])(Object(d["a"])(n.prototype),"attachTo",this).call(this,e),this.map.invalidateSize()}},{key:"onResize",value:function(){Object(h["a"])(Object(d["a"])(n.prototype),"onResize",this).call(this);var e=this;setTimeout((function(){e.map.invalidateSize()}),100)}}]),n}(F));L.a.Map=L.a.Map.extend({openPopup:function(e){return this._popup=e,this.addLayer(e).fire("popupopen",{popup:this._popup})}}),function(){var e=L.a.Marker.prototype._initIcon,t=L.a.Marker.prototype._setPos,n="msTransform"===L.a.DomUtil.TRANSFORM;L.a.Marker.addInitHook((function(){var e=this.options.icon.options.iconAnchor;e&&(e=e[0]+"px "+e[1]+"px"),this.options.rotationOrigin=this.options.rotationOrigin||e||"center bottom",this.options.rotationAngle=this.options.rotationAngle||0})),L.a.Marker.include({_initIcon:function(){e.call(this)},_setPos:function(e){t.call(this,e),this.options.rotationAngle&&(this._icon.style[L.a.DomUtil.TRANSFORM+"Origin"]=this.options.rotationOrigin,n?this._icon.style[L.a.DomUtil.TRANSFORM]=" rotate("+this.options.rotationAngle+"deg)":this._icon.style[L.a.DomUtil.TRANSFORM]+=" rotateZ("+this.options.rotationAngle+"deg)")},setRotationAngle:function(e){return this.options.rotationAngle=e,this.update(),this},setRotationOrigin:function(e){return this.options.rotationOrigin=e,this.update(),this}})}();var _=V,C=(n("5cc6"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("2ca0"),n("3ca3"),n("ddb0"),n("2b3d"),function(){function e(t){Object(l["a"])(this,e),this.url=t,this.id="DataConnector-"+E()}return Object(u["a"])(e,[{key:"getId",value:function(){return this.id}},{key:"getUrl",value:function(){return this.url}}]),e}()),N=C,P=function(e){Object(p["a"])(n,e);var t=Object(f["a"])(n);function n(){return Object(l["a"])(this,n),t.apply(this,arguments)}return Object(u["a"])(n,[{key:"connect",value:function(){var e=this,t=this;if(!this.init){if(D()){var n=this.getUrl(),i=URL.createObjectURL(new Blob(["(",function(){var e=null;function t(t){e=new WebSocket(t),e.binaryType="arraybuffer",e.onmessage=function(e){e.data.byteLength>0&&self.postMessage(e.data,[e.data])},e.onerror=function(t){e.close()}}function n(){e.close()}self.onmessage=function(e){"close"===e.data?n():t(e.data)}}.toString(),")()"],{type:"application/javascript"}));this.worker=new Worker(i),this.worker.postMessage(n),this.worker.onmessage=function(e){return t.onMessage(e.data)},URL.revokeObjectURL(i)}else this.ws=new WebSocket(this.getUrl()),this.ws.binaryType="arraybuffer",this.ws.onmessage=function(t){t.data.byteLength>0&&e.onMessage(t.data)},this.ws.onerror=function(t){return e.ws.close()};this.init=!0}}},{key:"disconnect",value:function(){D()&&null!==this.worker?(this.worker.postMessage("close"),this.worker.terminate(),this.init=!1):null!==this.ws&&(this.ws.close(),this.init=!1)}},{key:"onMessage",value:function(e){}},{key:"close",value:function(){this.disconnect()}}]),n}(N),z=P,Z=function(e){Object(p["a"])(n,e);var t=Object(f["a"])(n);function n(e,i){var a;return Object(l["a"])(this,n),a=t.call(this,e),a.method="POST",a.responseType="arraybuffer",m(i)&&(i.method&&(a.method=i.method),i.responseType&&(a.responseType=i.responseType)),a}return Object(u["a"])(n,[{key:"sendRequest",value:function(e,t){var n=this,i=new XMLHttpRequest;i.timeout=6e4,null===e?(m(t)?i.open("GET",this.getUrl()+"?"+t,!0):i.open("GET",this.getUrl(),!0),i.responseType=this.responseType,i.onload=function(e){i.response&&n.onMessage(i.response)},i.ontimeout=function(e){console.log("Timeout")},i.send(null)):(i.open("POST",this.getUrl(),!0),i.setRequestHeader("Content-Type","text/xml"),i.send(e),i.onreadystatechange=function(){i.readyState<4||4===i.readyState&&(200===i.status&&i.status<300?n.onSuccess(i.responseText):n.onError(""))})}},{key:"onError",value:function(e){}},{key:"onSuccess",value:function(e){}},{key:"connect",value:function(){this.sendRequest(null)}}]),n}(N),G=Z,W=function(){function e(t,n){Object(l["a"])(this,e),this.id="DataSource-"+E(),this.name=t,this.properties=n,this.timeShift=0,this.connected=!1,this.initDataSource(n)}return Object(u["a"])(e,[{key:"initDataSource",value:function(e){m(e.timeShift)&&(this.timeShift=e.timeShift),m(e.syncMasterTime)?this.syncMasterTime=e.syncMasterTime:this.syncMasterTime=!1,m(e.bufferingTime)&&(this.bufferingTime=e.bufferingTime),m(e.timeOut)&&(this.timeOut=e.timeOut),m(e.connect)||(e.connect=!0),e.protocol.startsWith("ws")?(this.connector=new z(this.buildUrl(e)),this.connector.onMessage=this.onMessage.bind(this)):e.protocol.startsWith("http")&&(this.connector=new G(this.buildUrl(e)),this.connector.responseType="arraybuffer",this.connector.onMessage=this.onMessage.bind(this))}},{key:"disconnect",value:function(){this.connector.disconnect(),this.connected=!1,R.fire(R.EVENT.DATA+"-"+this.id,{dataSourceId:this.id,reset:!0})}},{key:"connect",value:function(){this.connector.connect(),this.connected=!0}},{key:"onMessage",value:function(e){this.onData({timeStamp:this.parseTimeStamp(e)+this.timeShift,data:this.parseData(e)})}},{key:"parseTimeStamp",value:function(e){return(new Date).getTime()}},{key:"parseData",value:function(e){return e}},{key:"onData",value:function(e){R.fire(R.EVENT.DATA+"-"+this.id,{data:e})}},{key:"getId",value:function(){return this.id}},{key:"getName",value:function(){return this.name}},{key:"buildUrl",value:function(e){var t="";t+=e.protocol+"://",t+=e.endpointUrl+"?",t+="service="+e.service+"&",t+="version=2.0&",t+="request=GetResult&",t+="offering="+e.offeringID+"&",e.foiURN&&""!==e.foiURN&&(t+="featureOfInterest="+e.foiURN+"&"),t+="observedProperty="+e.observedProperty+"&";var n=e.startTime,i=e.endTime;return t+="temporalFilter=phenomenonTime,"+n+"/"+i+"&",e.replaySpeed&&(t+="replaySpeed="+e.replaySpeed),e.responseFormat&&(t+="&responseFormat="+e.responseFormat),t}}]),e}(),B=W,q=function(e){Object(p["a"])(n,e);var t=Object(f["a"])(n);function n(){return Object(l["a"])(this,n),t.apply(this,arguments)}return Object(u["a"])(n,[{key:"parseTimeStamp",value:function(e){var t=String.fromCharCode.apply(null,new Uint8Array(e));return new Date(JSON.parse(t)["time"]).getTime()}},{key:"parseData",value:function(e){var t=JSON.parse(String.fromCharCode.apply(null,new Uint8Array(e))),n={};for(var i in t)"time"!==i&&(n[i]=t[i]);return n}},{key:"buildUrl",value:function(e){var t="";t+=e.protocol+"://",t+=e.endpointUrl+"?",t+="service="+e.service+"&",t+="version=2.0&",t+="request=GetResult&",t+="offering="+e.offeringID+"&",e.foiURN&&""!==e.foiURN&&(t+="featureOfInterest="+e.foiURN+"&"),t+="observedProperty="+e.observedProperty+"&";var n=e.startTime,i=e.endTime;return"now"!==n&&0!==this.timeShift&&"urn:android:device:060693280a28e015-sos"!==e.offeringID&&(n=new Date(Date.parse(n)-this.timeShift).toISOString(),i=new Date(Date.parse(i)-this.timeShift).toISOString()),t+="temporalFilter=phenomenonTime,"+n+"/"+i+"&",e.replaySpeed&&(t+="replaySpeed="+e.replaySpeed),t+="&responseFormat=application/json",t}}]),n}(B),H=q,J=n("257e"),$=function(){function e(t){Object(l["a"])(this,e),this.properties=t,this.id="styler-"+E(),this.dataSourceToStylerMap={},this.initEvents()}return Object(u["a"])(e,[{key:"checkFn",value:function(e){var t=this.properties[e],n=y(t);return n&&(w(t.dataSourceIds,e+".dataSourceIds"),k(t.handler,e+".handler")),n}},{key:"initEvents",value:function(){var e=this;R.observe(R.EVENT.DATASOURCE_UPDATE_TIME,(function(t){return e.clear()}))}},{key:"clear",value:function(){}},{key:"getId",value:function(){return this.id}},{key:"select",value:function(e){}},{key:"addFn",value:function(e,t){for(var n=0;n<e.length;n++){var i=e[n];m(this.dataSourceToStylerMap[i])||(this.dataSourceToStylerMap[i]=[]),this.dataSourceToStylerMap[i].push(t)}}},{key:"setData",value:function(e,t,n,i){if(e in this.dataSourceToStylerMap){for(var a=this.dataSourceToStylerMap[e],o=0;o<a.length;o++)a[o](t.data,t.timeStamp,i);return!0}return!1}},{key:"getDataSourcesIds",value:function(){var e=[];for(var t in this.dataSourceToStylerMap)e.push(t);return e}},{key:"init",value:function(){}}]),e}(),K=$,X=function(e){Object(p["a"])(n,e);var t=Object(f["a"])(n);function n(e){var i;Object(l["a"])(this,n),i=t.call(this,e),i.properties=e,i.location=null,i.orientation={heading:0},i.icon=null,i.iconAnchor=[16,16],i.iconSize=[16,16],i.label=null,i.labelColor="#000000",i.labelSize=16,i.labelOffset=[0,0],i.color=null,i.defaultToTerrainElevation=!1,i.options={},m(e.defaultToTerrainElevation)&&(i.defaultToTerrainElevation=e.defaultToTerrainElevation),y(e.location)&&(T(e.location,"location"),i.location=e.location),y(e.orientation)&&(T(e.orientation,"orientation"),i.orientation=e.orientation),y(e.icon)&&(S(e.icon,"icon"),i.icon=e.icon),y(e.iconAnchor)&&(w(e.iconAnchor,"iconAnchor"),i.iconAnchor=e.iconAnchor),y(e.iconSize)&&(w(e.iconSize,"iconSize"),i.iconSize=e.iconSize),y(e.label)&&(S(e.label,"label"),i.label=e.label),y(e.labelColor)&&(S(e.labelColor,"labelColor"),i.labelColor=e.labelColor),y(e.labelSize)&&(O(e.labelSize,"labelSize"),i.labelSize=e.labelSize),y(e.labelOffset)&&(w(e.labelOffset,"labelOffset"),i.labelOffset=e.labelOffset);var a=Object(J["a"])(i);if(i.checkFn("locationFunc")){var o=function(t,n,i){a.location=e.locationFunc.handler(t,n,i)};i.addFn(e.locationFunc.dataSourceIds,o)}if(i.checkFn("orientationFunc")){var r=function(t,n,i){a.orientation=e.orientationFunc.handler(t,n,i)};i.addFn(e.orientationFunc.dataSourceIds,r)}if(i.checkFn("iconFunc")){var s=function(t,n,i){a.icon=e.iconFunc.handler(t,n,i)};i.addFn(e.iconFunc.dataSourceIds,s)}if(i.checkFn("labelFunc")){var c=function(t,n,i){a.label=e.labelFunc.handler(t,n,i)};i.addFn(e.labelFunc.dataSourceIds,c)}if(i.checkFn("labelColorFunc")){var u=function(t,n,i){a.labelColor=e.labelColorFunc.handler(t,n,i)};i.addFn(e.labelColorFunc.dataSourceIds,u)}if(i.checkFn("labelSizeFunc")){var d=function(t,n,i){a.labelSize=e.labelSizeFunc.handler(t,n,i)};i.addFn(e.labelSizeFunc.dataSourceIds,d)}return i}return Object(u["a"])(n,[{key:"init",value:function(e){Object(h["a"])(Object(d["a"])(n.prototype),"init",this).call(this,e),m(e)&&null!==this.location&&e.updateMarker(this,0,{})}},{key:"setData",value:function(e,t,i,a){return!(!Object(h["a"])(Object(d["a"])(n.prototype),"setData",this).call(this,e,t,i,a)||!m(i)||null===this.location)&&(i.updateMarker(this,t.timeStamp,a),!0)}}]),n}(K),Q=X,Y={name:"Map",components:{},mounted:function(){this.init()},methods:{init:function(){var e=new H("android-GPS",{protocol:"ws",service:"SOS",endpointUrl:"sensiasoft.net:8181/sensorhub/sos",offeringID:"urn:android:device:060693280a28e015-sos",observedProperty:"http://sensorml.com/ont/swe/property/Location",startTime:"2015-02-16T07:58:32Z",endTime:"2015-02-16T08:09:00Z",replaySpeed:3}),t=new Q({locationFunc:{dataSourceIds:[e.getId()],handler:function(e){return{x:e.location.lon,y:e.location.lat,z:e.location.alt}}},icon:"./images/car-location.png",iconAnchor:[16,65]});new _("leafletMap",[{styler:t,name:"Android Phone GPS"}]),e.connect()}}},ee=Y,te=(n("5490"),n("2877")),ne=Object(te["a"])(ee,r,s,!1,null,null,null),ie=ne.exports,ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("dialog-drag",{staticClass:"resizable",attrs:{id:"drag-window-1",title:"Video MJPEG",options:{width:350,top:100,left:2}}},[n("div",{attrs:{id:"video-container"}})])},oe=[],re=n("db2a"),se=n.n(re),ce=(n("fb6a"),function(e){Object(p["a"])(n,e);var t=Object(f["a"])(n);function n(){return Object(l["a"])(this,n),t.apply(this,arguments)}return Object(u["a"])(n,[{key:"parseTimeStamp",value:function(e){return 1e3*new DataView(e).getFloat64(0,!1)}},{key:"parseData",value:function(e){var t=new Blob([e]),n=window.URL.createObjectURL(t.slice(12));return window.URL.revokeObjectURL(t),n}}]),n}(B)),le=ce,ue=function(e){Object(p["a"])(n,e);var t=Object(f["a"])(n);function n(e,i){var a;if(Object(l["a"])(this,n),a=t.call(this,e,[],i),a.timeStamp=null,m(i.showTime)&&i.showTime&&(a.timeStamp=document.createElement("div"),a.timeStamp.setAttribute("class","video-time"),document.getElementById(a.divId).appendChild(a.timeStamp)),a.imgTag=document.createElement("img"),a.imgTag.setAttribute("class","video-mjpeg"),a.rotation=0,"undefined"!=typeof i&&"undefined"!=typeof i.rotation){a.rotation=i.rotation*Math.PI/180,a.canvas=document.createElement("canvas"),a.canvas.width=640,a.canvas.height=480;var o=a.canvas.getContext("2d");o.translate(0,480),o.rotate(a.rotation),document.getElementById(a.divId).appendChild(a.canvas)}else document.getElementById(a.divId).appendChild(a.imgTag);var r=Object(J["a"])(a);return R.observeDiv(a.divId,"click",(function(e){R.fire(R.EVENT.SELECT_VIEW,{dataSourcesIds:[r.dataSourceId],entityId:r.entityId})})),a}return Object(u["a"])(n,[{key:"setData",value:function(e,t){var n=this.imgTag.src;this.imgTag.src=t.data,null!==this.timeStamp&&(this.timeStamp.innerHTML=new Date(t.timeStamp).toISOString()),window.URL.revokeObjectURL(n)}},{key:"selectDataView",value:function(e,t){e.indexOf(this.dataSourceId)>-1||m(this.entityId)&&this.entityId===t?document.getElementById(this.divId).setAttribute("class",this.css+" "+this.cssSelected):document.getElementById(this.divId).setAttribute("class",this.css)}},{key:"reset",value:function(){this.imgTag.src=""}}]),n}(F),de=ue,he={name:"Video",components:{DialogDrag:se.a},mounted:function(){var e=new le("android-Video",{protocol:"ws",service:"SOS",endpointUrl:"sensiasoft.net:8181/sensorhub/sos",offeringID:"urn:android:device:060693280a28e015-sos",observedProperty:"http://sensorml.com/ont/swe/property/VideoFrame",startTime:"2015-02-16T07:58:35Z",endTime:"2015-02-16T08:09:00Z",replaySpeed:3});new de("video-container",{dataSourceId:e.id,css:"video-mjpeg",name:"Android Video",keepRatio:!0,showTime:!0});e.connect()}},fe=he,pe=(n("a6e0"),n("770f"),n("67c4"),Object(te["a"])(fe,ae,oe,!1,null,"18839e46",null)),ve=pe.exports,me={components:{Map:ie,Video:ve}},ye=me,be=(n("034f"),Object(te["a"])(ye,a,o,!1,null,null,null)),ge=be.exports,Se=n("67b0");i["a"].use(Se["a"]),i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(ge)}}).$mount("#app")},"59db":function(e,t,n){},"67c4":function(e,t,n){"use strict";var i=n("59db"),a=n.n(i);a.a},"770f":function(e,t,n){"use strict";var i=n("38c5"),a=n.n(i);a.a},"85ec":function(e,t,n){},a6b6:function(e,t,n){},c8d2:function(e,t,n){}});
//# sourceMappingURL=app.c850f752.js.map