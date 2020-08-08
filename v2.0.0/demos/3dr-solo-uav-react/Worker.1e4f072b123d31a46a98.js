/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /home/nevro/Progs/progs-local/git-repo/OSH/osh-js/source/osh/utils/Utils.js
/***************************** BEGIN LICENSE BLOCK ***************************

 The contents of this file are subject to the Mozilla Public License, v. 2.0.
 If a copy of the MPL was not distributed with this file, You can obtain one
 at http://mozilla.org/MPL/2.0/.

 Software distributed under the License is distributed on an "AS IS" basis,
 WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 for the specific language governing rights and limitations under the License.

 Copyright (C) 2015-2020 Mathieu Dhainaut. All Rights Reserved.

 Author: Mathieu Dhainaut <mathieu.dhainaut@gmail.com>

 ******************************* END LICENSE BLOCK ***************************/

/** * @module Utils */

/** Maximum value of a long */
const MAX_LONG = Math.pow(2, 53) + 1;
/**
 * Global helper method to test if a letiable or object attribute is defined
 */

function isDefined(v) {
  return typeof v !== 'undefined' && v !== null;
}
/**
 Global helper method to test if a letiable or object attribute has a value,
 that is it is defined and non null
 */

function hasValue(v) {
  return isDefined(v) && v !== null;
}
/**
 Global helper method to test if a letiable or object attribute is of a particular type
 */

function hasType(v, expectedType) {
  let hasVal = hasValue(v);
  return hasVal && typeof v === expectedType;
}
/**
 Global helper method to test if a letiable or object attribute is an object
 */

function isObject(v, letName) {
  return hasType(v, 'object', letName);
}
/**
 Global helper method to test if a letiable or object attribute is an array
 */

function isArray(v) {
  return isDefined(v) && Array.isArray(v);
}
/**
 Global helper method to test if a letiable or object attribute is a function
 */

function isFunction(v, letName) {
  return hasType(v, 'function', letName);
}
/**
 Assert that a letiable or object attribute is defined
 **/

function assertDefined(v, letName = 'letiable') {
  if (!isDefined(v)) {
    throw letName + " must be defined";
  }

  return v;
}
/**
 Assert that a letiable or object attribute is defined and non-null
 **/

function assertType(v, expectedType, letName = 'letiable') {
  assertDefined(v, letName);

  if (typeof v !== expectedType) {
    throw letName + " must be of type " + expectedType;
  }

  return v;
}
/**
 Assert that a letiable or object attribute is a string
 **/

function assertBoolean(v, letName) {
  return assertType(v, 'boolean', letName);
}
/**
 Assert that a letiable or object attribute is a string
 **/

function assertString(v, letName) {
  return assertType(v, 'string', letName);
}
/**
 Assert that a letiable or object attribute is a number
 **/

function assertNumber(v, letName) {
  return assertType(v, 'number', letName);
}
/**
 Assert that a letiable or object attribute is a number
 **/

function assertPositive(v, letName) {
  assertNumber(v, letName);

  if (v <= 0) {
    throw letName + " must be a positive number";
  }
}
/**
 Assert that a letiable or object attribute is an object
 **/

function assertObject(v, letName) {
  return assertType(v, 'object', letName);
}
/**
 Assert that a letiable or object attribute is an object
 **/

function assertArray(v, letName = 'letiable') {
  assertDefined(v, letName);

  if (!Array.isArray(v)) {
    throw letName + " must be an array";
  }

  return v;
}
/**
 Assert that a letiable or object attribute is a function
 **/

function assertFunction(v, letName) {
  return assertType(v, 'function', letName);
}
/**
 Assert that a letiable or object attribute is defined and non-null
 **/

function assertHasValue(v, letName = 'letiable') {
  assertDefined(v, letName);

  if (!hasValue(v)) {
    throw letName + " must not be null";
  }

  return v;
}
/**
 *
 * @return {String}
 */

function randomUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = Math.random() * 16 | 0,
        v = c === 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
}
/**
 * This function stamps/embeds a UUID into an object and returns the UUID generated for it
 * @return {String}
 */

function stampUUID(obj) {
  obj._osh_id = obj._osh_id || randomUUID();
  return obj._osh_id;
} //buffer is an ArrayBuffer object, the offset if specified in bytes, and the type is a string
//corresponding to an OGC data type.
//See http://def.seegrid.csiro.au/sissvoc/ogc-def/resource?uri=http://www.opengis.net/def/dataType/OGC/0/

/**
 *
 * @param buffer
 * @param offset
 * @param type
 * @return {*}
 */

function ParseBytes(buffer, offset, type) {
  let view = new DataView(buffer); //Note: There exist types not listed in the map below that have OGC definitions, but no appropriate
  //methods or corresponding types available for parsing in javascript. They are float128, float16, signedLong,
  //and unsignedLong

  let typeMap = {
    double: function (offset) {
      return {
        val: view.getFloat64(offset),
        bytes: 8
      };
    },
    float64: function (offset) {
      return {
        val: view.getFloat64(offset),
        bytes: 8
      };
    },
    float32: function (offset) {
      return {
        val: view.getFloat32(offset),
        bytes: 4
      };
    },
    signedByte: function (offset) {
      return {
        val: view.getInt8(offset),
        bytes: 1
      };
    },
    signedInt: function (offset) {
      return {
        val: view.getInt32(offset),
        bytes: 4
      };
    },
    signedShort: function (offset) {
      return {
        val: view.getInt16(offset),
        bytes: 2
      };
    },
    unsignedByte: function (offset) {
      return {
        val: view.getUint8(offset),
        bytes: 1
      };
    },
    unsignedInt: function (offset) {
      return {
        val: view.getUint32(offset),
        bytes: 4
      };
    },
    unsignedShort: function (offset) {
      return {
        val: view.getUint16(offset),
        bytes: 2
      };
    } //TODO: string-utf-8:

  };
  return typeMap[type](offset);
} //This function recursivley iterates over the resultStructure to fill in
//values read from data which should be an ArrayBuffer containing the payload from a websocket

/**
 *
 * @param struct
 * @param data
 * @param offsetBytes
 * @return {*}
 */

function ReadData(struct, data, offsetBytes) {
  let offset = offsetBytes;

  for (let i = 0; i < struct.fields.length; i++) {
    let currFieldStruct = struct.fields[i];

    if (isDefined(currFieldStruct.type) && currFieldStruct.type !== null) {
      let ret = ParseBytes(data, offset, currFieldStruct.type);
      currFieldStruct.val = ret.val;
      offset += ret.bytes;
    } else if (isDefined(currFieldStruct.count) && currFieldStruct.count !== null) {
      //check if count is a reference to another letiable
      if (isNaN(currFieldStruct.count)) {
        let id = currFieldStruct.count;
        let fieldName = struct.id2FieldMap[id];
        currFieldStruct.count = struct.findFieldByName(fieldName).val;
      }

      for (let c = 0; c < currFieldStruct.count; c++) {
        for (let j = 0; j < currFieldStruct.fields.length; j++) {
          let field = JSON.parse(JSON.stringify(currFieldStruct.fields[j]));
          offset = ReadData(field, data, offset);
          currFieldStruct.val.push(field);
        }
      }
    }
  }

  return offset;
}
/**
 *
 * @param resultStructure
 * @return {{}}
 */

function GetResultObject(resultStructure) {
  //TODO: handle cases for nested arrays / matrix data types
  let result = {};

  for (let i = 0; i < resultStructure.fields.length; i++) {
    if (isDefined(resultStructure.fields[i].count)) {
      result[resultStructure.fields[i].name] = [];

      for (let c = 0; c < resultStructure.fields[i].count; c++) {
        let item = {};

        for (let k = 0; k < resultStructure.fields[i].val[c].fields.length; k++) {
          item[resultStructure.fields[i].val[c].fields[k].name] = resultStructure.fields[i].val[c].fields[k].val;
        }

        result[resultStructure.fields[i].name].push(item);
      }
    } else {
      result[resultStructure.fields[i].name] = resultStructure.fields[i].val;
    }
  }

  return result;
}
/**
 *
 * @return {boolean}
 */

function isOpera() {
  return !!window.opr && !!opr.addons || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
}
/**
 *
 * @return {boolean}
 */

function isFirefox() {
  return typeof InstallTrigger !== 'undefined';
}
/**
 *
 * @return {boolean}
 */

function isSafari() {
  return Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
}
/**
 *
 * @return {boolean}
 */

function isChrome() {
  return !!window.chrome && !!window.chrome.webstore;
}
/**
 *
 * @return {*|boolean}
 */

function isBlink() {
  return (isChrome || isOpera) && !!window.CSS;
}
/**
 *
 * @param a
 * @param b
 * @return {boolean}
 */

function isArrayIntersect(a, b) {
  return a.filter(function (element) {
    return b.indexOf(element) > -1;
  }).length > 0;
}
/**
 *
 * @param o
 * @return {boolean}
 */

function isElement(o) {
  return typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
  o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string";
}
/**
 *
 * @return {*}
 */

function isWebWorker() {
  return isDefined(Worker);
}
/**
 *
 * @param div
 */

function takeScreenShot(div) {}
/**
 * Remove a css class from a the div given as argument.
 * @param div the div to remove the class from
 * @param css the css class to remove
 */

function removeCss(div, css) {
  let divCss = div.className;
  css = divCss.replace(css, "");
  div.className = css;
}
/**
 * Add a css class to a the div given as argument.
 * @param div the div to add the class to
 * @param css the css class to add
 */

function addCss(div, css) {
  div.setAttribute("class", div.className + " " + css);
}
/**
 * Removes the last character of a {string} object.
 * @param {string} value - The input {string}
 * @return {string} The value without the last character
 */

function removeLastCharIfExist(value) {
  if (!isDefined(undefined) || value === null || value.length === 0 || !value.endsWith("/")) {
    return value;
  }

  return value.substring(0, value.length - 1);
}
// CONCATENATED MODULE: /home/nevro/Progs/progs-local/git-repo/OSH/osh-js/source/osh/datareceiver/parsers/DataSourceParser.js


class DataSourceParser_DataSourceParser {
  /**
   * Builds the full url.
   * @private
   * @param {Object} properties
   * @param {String} properties.protocol the connector protocol
   * @param {String} properties.endpointUrl the endpoint url
   * @param {String} properties.service the service
   * @param {String} properties.offeringID the offeringID
   * @param {String} properties.observedProperty the observed property
   * @param {String} properties.startTime the start time (ISO format)
   * @param {String} properties.endTime the end time (ISO format)
   * @param {Number} properties.replaySpeed the replay factor
   * @param {Number} properties.responseFormat the response format (e.g video/mp4)
   * @param {Date} properties.lastTimeStamp - the last timestamp to start at this time (ISO String)
   * @return {String} the full url
   */
  buildUrl(properties) {
    let url = ""; // adds protocol

    url += properties.protocol + "://"; // adds endpoint url

    url += properties.endpointUrl + "?"; // adds service

    url += "service=" + properties.service + "&"; // adds version

    url += "version=2.0&"; // adds request

    url += "request=GetResult&"; // adds offering

    url += "offering=" + properties.offeringID + "&"; // adds feature of interest urn

    if (properties.foiURN && properties.foiURN !== '') {
      url += 'featureOfInterest=' + properties.foiURN + '&';
    } // adds observedProperty


    url += "observedProperty=" + properties.observedProperty + "&"; // adds temporalFilter

    const stTime = isDefined(properties.lastTimeStamp) ? properties.lastTimeStamp : properties.startTime;
    this.lastStartTime = properties.startTime;
    let endTime = properties.endTime;
    url += "temporalFilter=phenomenonTime," + stTime + "/" + endTime + "&";

    if (properties.replaySpeed) {
      // adds replaySpeed
      url += "replaySpeed=" + properties.replaySpeed;
    } // adds responseFormat (optional)


    if (properties.responseFormat) {
      url += "&responseFormat=" + properties.responseFormat;
    }

    return url;
  }

}

/* harmony default export */ var parsers_DataSourceParser = (DataSourceParser_DataSourceParser);
// CONCATENATED MODULE: /home/nevro/Progs/progs-local/git-repo/OSH/osh-js/source/osh/datareceiver/parsers/Video.parser.js


class Video_parser_VideoParser extends parsers_DataSourceParser {
  /**
   * Extracts timestamp from the message. The timestamp is corresponding to the first 64bits of the binary message.
   * @param {ArrayBuffer} data - the data to parse
   * @return {Number} the extracted timestamp
   */
  parseTimeStamp(data) {
    // read double time stamp as big endian
    return new DataView(data).getFloat64(0, false) * 1000;
  }
  /**
   * Extract data from the message. The H264 NAL unit starts at offset 12 after 8-bytes time stamp and 4-bytes frame length.
   * @param {ArrayBuffer} data - the data to parse
   * @return {Uint8Array} the parsed data
   */


  parseData(data) {
    return {
      // H264 NAL unit starts at offset 12 after 8-bytes time stamp and 4-bytes frame length
      frameData: new Uint8Array(data, 12, data.byteLength - 12),
      roll: 0
    };
  }

}

/* harmony default export */ var Video_parser = (Video_parser_VideoParser);
// CONCATENATED MODULE: /home/nevro/Progs/progs-local/git-repo/OSH/osh-js/source/osh/dataconnector/DataConnector.js
/***************************** BEGIN LICENSE BLOCK ***************************

 The contents of this file are subject to the Mozilla Public License, v. 2.0.
 If a copy of the MPL was not distributed with this file, You can obtain one
 at http://mozilla.org/MPL/2.0/.

 Software distributed under the License is distributed on an "AS IS" basis,
 WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 for the specific language governing rights and limitations under the License.

 Copyright (C) 2015-2020 Mathieu Dhainaut. All Rights Reserved.

 Author: Mathieu Dhainaut <mathieu.dhainaut@gmail.com>

 ******************************* END LICENSE BLOCK ***************************/

/**
 * The DataConnector is the abstract class used to create different connectors.
 */

class DataConnector_DataConnector {
  /**
   * @param {String} url - The full url used to connect to the data stream
   */
  constructor(url) {
    this.url = url;
    this.id = "DataConnector-" + randomUUID();
    this.reconnectTimeout = 1000 * 60 * 2; //2 min
  }
  /**
   * Sets the url
   * @param url
   */


  setUrl(url) {
    this.url = url;
  }
  /**
   * The data connector default id.
   * @return {String}
   */


  getId() {
    return this.id;
  }
  /**
   * The stream url.
   * @return {String}
   */


  getUrl() {
    return this.url;
  }
  /**
   * Sets the reconnection timeout
   * @param {Number} timeout - delay in milliseconds before reconnecting dataSource
   */


  setReconnectTimeout(timeout) {
    this.reconnectTimeout = timeout;
  }

  onReconnect() {}

  disconnect() {}

}

/* harmony default export */ var dataconnector_DataConnector = (DataConnector_DataConnector);
// CONCATENATED MODULE: /home/nevro/Progs/progs-local/git-repo/OSH/osh-js/source/osh/dataconnector/WebSocketConnector.js
/***************************** BEGIN LICENSE BLOCK ***************************

 The contents of this file are subject to the Mozilla Public License, v. 2.0.
 If a copy of the MPL was not distributed with this file, You can obtain one
 at http://mozilla.org/MPL/2.0/.

 Software distributed under the License is distributed on an "AS IS" basis,
 WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 for the specific language governing rights and limitations under the License.

 Copyright (C) 2015-2020 Mathieu Dhainaut. All Rights Reserved.

 Author: Mathieu Dhainaut <mathieu.dhainaut@gmail.com>

 ******************************* END LICENSE BLOCK ***************************/


/**
 * Defines the WebSocketConnector to connect to a remote server by creating a WebSocket channel.
 * @extends DataConnector
 * @example
 * import WebSocketConnector from 'osh/dataconnector/WebSocketConnector.js';
 *
 * let url = ...;
 * let connector = new WebSocketConnector(url);
 *
 * // connect
 * connector.connect();
 *
 * // disconnect
 * connector.disconnect();
 *
 * // close
 * connector.close();
 *
 */

class WebSocketConnector_WebSocketConnector extends dataconnector_DataConnector {
  /**
   *
   * @param properties -
   */
  constructor(properties) {
    super(properties);
    this.interval = -1;
    this.lastReceiveTime = -1;
  }
  /**
   * Connect to the webSocket. If the system supports WebWorker, it will automatically creates one otherwise use
   * the main thread.
   */


  connect() {
    if (!this.init) {
      this.init = true; //creates Web Socket

      this.ws = new WebSocket(this.getUrl());
      this.ws.binaryType = 'arraybuffer';

      this.ws.onmessage = function (event) {
        this.lastReceiveTime = Date.now(); //callback data on message received

        if (event.data.byteLength > 0) {
          this.onMessage(event.data);
        }
      }.bind(this); // closes socket if any errors occur


      this.ws.onerror = function (event) {
        console.error('WebSocket stream error: ' + event);
        this.ws.close();
        this.init = false;
        this.lastReceiveTime = -1;
      }.bind(this); //init the reconnect handler


      if (this.interval === -1) {
        this.interval = setInterval(function () {
          let delta = Date.now() - this.lastReceiveTime; // -1 means the WS went in error

          if (this.lastReceiveTime === -1 || delta >= this.reconnectTimeout) {
            console.warn(`trying to reconnect after ${this.reconnectTimeout} ..`);
            this.reconnect();
          }
        }.bind(this), this.reconnectTimeout);
      }
    }
  }
  /**
   * Disconnects the websocket.
   */


  disconnect() {
    this.fullDisconnect(true);
  }
  /**
   * Fully disconnect the websocket connection by sending a close message to the webWorker.
   * @param {Boolean} removeInterval  - force removing the interval
   */


  fullDisconnect(removeInterval) {
    if (this.ws != null) {
      this.ws.close();
      this.init = false;
    }

    if (removeInterval) {
      clearInterval(this.interval);
    }
  }
  /**
   * Try to reconnect if the connexion if closed
   */


  reconnect() {
    this.onReconnect();

    if (this.init) {
      this.fullDisconnect(false);
    }

    this.connect();
  }
  /**
   * The onMessage method used by the websocket to callback the data
   * @param data the callback data
   * @event
   */


  onMessage(data) {}
  /**
   * Closes the webSocket.
   */


  close() {
    this.disconnect();
  }

}

/* harmony default export */ var dataconnector_WebSocketConnector = (WebSocketConnector_WebSocketConnector);
// CONCATENATED MODULE: /home/nevro/Progs/progs-local/git-repo/OSH/osh-js/source/osh/dataconnector/Ajax.js
/***************************** BEGIN LICENSE BLOCK ***************************

 The contents of this file are subject to the Mozilla Public License, v. 2.0.
 If a copy of the MPL was not distributed with this file, You can obtain one
 at http://mozilla.org/MPL/2.0/.

 Software distributed under the License is distributed on an "AS IS" basis,
 WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 for the specific language governing rights and limitations under the License.

 Copyright (C) 2015-2020 Mathieu Dhainaut. All Rights Reserved.

 Author: Mathieu Dhainaut <mathieu.dhainaut@gmail.com>

 ******************************* END LICENSE BLOCK ***************************/


/**
 * Defines the AjaxConnector to connect to a remote server by making AjaxRequest.
 * @extends DataConnector
 * @example
 * import Ajax from 'osh/dataconnector/Ajax.js';
 *
 * let request = ...;
 * let connector = new Ajax(url);
 *
 * // handle onSuccess
 * connector.onSuccess = function(event) {
 *  // does something
 * }
 *
 * connector.onError = function(event) {
 *  // does something
 * }
 *
 * // send request
 * connector.sendRequest(request);
 *
 */

class Ajax_Ajax extends dataconnector_DataConnector {
  /**
   * Creates Ajax.
   * @param {String} url -
   * @param {Object} properties -
   * @param {String} properties.method -
   * @param {String} properties.responseType -
   */
  constructor(url, properties) {
    super(url);
    this.method = "POST";
    this.responseType = "arraybuffer";

    if (isDefined(properties)) {
      if (properties.method) {
        this.method = properties.method;
      }

      if (properties.responseType) {
        this.responseType = properties.responseType;
      }
    }
  }
  /**
   * Sends the request to the defined server.
   * @param {String} request - The Http request
   * @param {String} extraUrl - get query parameters
   */


  sendRequest(request, extraUrl) {
    let self = this;
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.timeout = 60000;

    if (request === null) {
      if (isDefined(extraUrl)) {
        xmlhttp.open("GET", this.getUrl() + "?" + extraUrl, true);
      } else {
        xmlhttp.open("GET", this.getUrl(), true);
      }

      xmlhttp.responseType = this.responseType;

      xmlhttp.onload = oEvent => {
        if (xmlhttp.response) {
          self.onMessage(xmlhttp.response);
        }
      };

      xmlhttp.ontimeout = e => {
        console.log("Timeout");
      };

      xmlhttp.send(null);
    } else {
      xmlhttp.open("POST", this.getUrl(), true);
      xmlhttp.setRequestHeader('Content-Type', 'text/xml');
      xmlhttp.send(request);

      xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState < 4) {// while waiting response from server
        } else if (xmlhttp.readyState === 4) {
          // 4 = Response from server has been completely loaded.
          if (xmlhttp.status === 200 && xmlhttp.status < 300) {
            // http status between 200 to 299 are all successful
            self.onSuccess(xmlhttp.responseText);
          } else {
            self.onError("");
          }
        }
      };
    }
  }
  /**
   * This is the callback method in case of getting error connection.
   * @param event The error details
   * @event
   */


  onError(event) {}
  /**
   * This is the callback method in case of getting success connection.
   * @param event
   * @event
   */


  onSuccess(event) {}
  /**
   * Sends the request
   * @private
   */


  connect() {
    this.sendRequest(null);
  }

}

/* harmony default export */ var dataconnector_Ajax = (Ajax_Ajax);
// CONCATENATED MODULE: /home/nevro/Progs/progs-local/git-repo/OSH/osh-js/source/osh/dataconnector/TopicConnector.js


class TopicConnector_TopicConnector extends dataconnector_DataConnector {
  /**
   *
   * @param properties -
   */
  constructor(properties) {
    super(properties);
    this.lastReceiveTime = -1;
    this.interval = -1;
    this.broadcastChannel = null;
  }
  /**
   * Connect to the broadcastChannel.
   */


  connect() {
    if (this.broadcastChannel === null) {
      //creates broadcastChannel
      this.broadcastChannel = new BroadcastChannel(this.getUrl());

      this.broadcastChannel.onmessage = event => {
        this.lastReceiveTime = Date.now(); //callback data on message received

        this.onMessage(event.data.data);
      }; // closes socket if any errors occur


      this.broadcastChannel.onerror = event => {
        console.error('BroadcastChannel stream error: ' + event);
        this.broadcastChannel.close();
        this.init = false;
        this.lastReceiveTime = -1;
      }; //init the reconnect handler


      if (this.interval === -1) {
        this.interval = setInterval(function () {
          let delta = Date.now() - this.lastReceiveTime; // -1 means the WS went in error

          if (this.lastReceiveTime === -1 || delta >= this.reconnectTimeout) {
            console.warn(`trying to reconnect after ${this.reconnectTimeout} ..`);
            this.reconnect();
          }
        }.bind(this), this.reconnectTimeout);
      }
    }
  }
  /**
   * Disconnects the websocket.
   */


  disconnect() {
    this.fullDisconnect(true);
  }
  /**
   * Fully disconnect the websocket connection by sending a close message to the webWorker.
   * @param {Boolean} removeInterval  - force removing the interval
   */


  fullDisconnect(removeInterval) {
    if (this.broadcastChannel != null) {
      this.broadcastChannel.close();
      this.broadcastChannel = null;
    }

    if (removeInterval) {
      clearInterval(this.interval);
    }
  }
  /**
   * Try to reconnect if the connexion if closed
   */


  reconnect() {
    this.onReconnect();

    if (this.init) {
      this.fullDisconnect(false);
    }

    this.connect();
  }
  /**
   * The onMessage method used by the websocket to callback the data
   * @param data the callback data
   * @event
   */


  onMessage(data) {}
  /**
   * Closes the webSocket.
   */


  close() {
    this.disconnect();
  }

}

/* harmony default export */ var dataconnector_TopicConnector = (TopicConnector_TopicConnector);
// CONCATENATED MODULE: /home/nevro/Progs/progs-local/git-repo/OSH/osh-js/source/osh/datareceiver/workers/DataSourceHandler.js





class DataSourceHandler_DataSourceHandler {
  constructor(parser) {
    this.parser = parser;
    this.connector = null;
    this.lastTimeStamp = null;
    this.lastStartTime = 'now';
    this.timeShift = 0;
    this.reconnectTimeout = 1000 * 10; // 10 secs

    this.connected = false;
  }

  createConnector(propertiesStr, topic, dataSourceId) {
    this.dataSourceId = dataSourceId; // check for existing connector

    if (this.connector !== null) {
      this.connector.disconnect();
      this.connector = null;
    }

    this.broadcastChannel = new BroadcastChannel(topic);
    const properties = JSON.parse(propertiesStr);

    if (isDefined(properties.timeShift)) {
      this.timeShift = properties.timeShift;
    }

    if (isDefined(properties.bufferingTime)) {
      this.bufferingTime = properties.bufferingTime;
    }

    if (isDefined(properties.timeOut)) {
      this.timeOut = properties.timeOut;
    }

    if (isDefined(properties.reconnectTimeout)) {
      this.reconnectTimeout = properties.reconnectTimeout;
    }

    this.properties = properties;
    this.createDataConnector(properties);
  }
  /**
   * @private
   */


  createDataConnector(properties) {
    const url = this.parser.buildUrl({ ...properties,
      timeShift: this.timeShift
    }); // checks if type is WebSocketConnector

    if (properties.protocol.startsWith('ws')) {
      this.connector = new dataconnector_WebSocketConnector(url); // connects the callback

      this.connector.onMessage = this.onMessage.bind(this); // set the reconnectTimeout

      this.connector.setReconnectTimeout(this.reconnectTimeout);
    } else if (properties.protocol.startsWith('http')) {
      this.connector = new dataconnector_Ajax(url);
      this.connector.responseType = 'arraybuffer'; // connects the callback

      this.connector.onMessage = this.onMessage.bind(this); // set the reconnectTimeout

      this.connector.setReconnectTimeout(this.reconnectTimeout);
    } else if (properties.protocol.startsWith('topic')) {
      this.connector = new dataconnector_TopicConnector(url); // connects the callback

      this.connector.onMessage = this.onMessage.bind(this); // set the reconnectTimeout

      this.connector.setReconnectTimeout(this.reconnectTimeout);
    }

    const lastStartTimeCst = this.parser.lastStartTime;

    if (this.connector !== null) {
      this.connector.onReconnect = () => {
        // if not real time, preserve last timestamp to reconnect at the last time received
        // for that, we update the URL with the new last time received
        if (lastStartTimeCst !== 'now') {
          this.connector.setUrl(this.parser.buildUrl({
            lastTimeStamp: new Date(this.lastTimeStamp).toISOString(),
            ...this.properties
          }));
        }
      };
    }
  }
  /**
   * Sets the current topic to listen
   * @param {String} topic - the topic to listen
   */


  setTopic(topic) {
    if (this.broadcastChannel !== null) {
      this.broadcastChannel.close();
    }

    this.broadcastChannel = new BroadcastChannel(topic);
    this.topic = topic;
  }

  connect() {
    if (this.connector !== null) {
      this.connector.connect();
    }
  }

  disconnect() {
    if (this.connector !== null) {
      this.connector.disconnect();
    }
  }

  onMessage(event) {
    const obj = {
      dataSourceId: this.dataSourceId,
      timeStamp: this.parser.parseTimeStamp(event) + this.timeShift,
      data: this.parser.parseData(event)
    };
    this.lastTimeStamp = obj.timeStamp;
    this.broadcastChannel.postMessage(obj);
  }

}

/* harmony default export */ var workers_DataSourceHandler = (DataSourceHandler_DataSourceHandler);
// CONCATENATED MODULE: /home/nevro/Progs/progs-local/git-repo/OSH/osh-js/source/osh/datareceiver/workers/Video.worker.js



const dataSourceHandler = new workers_DataSourceHandler(new Video_parser());

function onData(data) {
    self.postMessage(data);
}

self.onmessage = (event) => {
    if(event.data.message === 'init') {
        dataSourceHandler.createConnector(event.data.properties, event.data.topic, event.data.id);
        dataSourceHandler.onData = onData;
    } else if (event.data.message === 'connect') {
        dataSourceHandler.connect();
    } else if (event.data.message === 'disconnect') {
        dataSourceHandler.disconnect();
    } else if (event.data.message === 'topic') {
        dataSourceHandler.setTopic(event.data.topic);
    }
}




/***/ })
/******/ ]);