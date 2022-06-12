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

import {
    assertArray,
    assertDefined,
    assertFunction,
    hasValue,
    isDefined,
    isFunction,
    randomUUID
} from "../../utils/Utils.js";

/**
 * This class is in charge of defining a Layer object.
 */
class Layer {
    /**
     *
     * @param {Object} properties - contains a list of properties
     * @param {string} properties.name - default name
     * @param {string} properties.description - default description
     * @param {string} properties.dataSourceId - default dataSourceId
     * @param {boolean} properties.visible - defines if the layer is visible
     * @param {Number} properties.timestamp - defines the timestamp of the data
     * @param {Function} properties.getTimestamp - function which defines the timestamp of the data
     */
    constructor(properties) {
        this.properties = properties;
        this.dataSourcesToFn = undefined;
        this.data = [];
        this.props = {};
        this.props.id = "layer-" + randomUUID();
        this.props.name = '';
        this.props.description = '';
        this.props.dataSourceId = '';
        this.props.visible = true;
        this.props.filter = true;
        this.props.timestamp = 0;

        if(isDefined(properties.name)) {
            this.props.name = properties.name;
        }
        if(isDefined(properties.description)) {
            this.props.description = properties.description;
        }

        if(isDefined(properties.dataSourceId)) {
            this.props.dataSourceId = properties.dataSourceId;
        }

        if(isDefined(properties.visible)) {
            this.props.visible = properties.visible;
        }

        if (isDefined(properties.timestamp)){
            this.props.timestamp = properties.timestamp;
        }

        this.initEvents();

        const that = this;

        if (this.checkFn("filter")) {
            let fn = function(rec,timestamp,options) {
                that.props.filter = that.getFunc('filter')(rec,timestamp,options);
            };
            this.addFn(that.getDataSourcesIdsByProperty('filter'),fn);
        } else {
            this.properties.filter = function(rec,timestamp,options) {
                return true;
            };

            let fn = async function (rec, timestamp, options) {
                that.props.filter = await that.getFunc('filter')(rec, timestamp, options);
            };

            this.addFn(that.getDataSourcesIdsByProperty('filter'),fn);
        }

        if (this.checkFn("getVisible")) {
            let fn = async function (rec, timestamp, options) {
                that.props.visible = await that.getFunc('getVisible')(rec, timestamp, options);
            };
            this.addFn(that.getDataSourcesIdsByProperty('getVisible'),fn);
        }

        if (this.checkFn("getTimestamp")) {
            let fn = async (rec) => {
                that.props.timestamp = await that.getFunc('getTimestamp')(rec);
            };
            this.addFn(that.getDataSourcesIdsByProperty('getTimestamp'), fn);
        }
    }

    saveState() {
        this.initialState = {...this.props};
    }

    restoreState() {
        this.props = {...this.initialState};
    }
    getFunc(funcName) {
        return this.properties[funcName].handler || this.properties[funcName];
    }

    /**
     * @private
     * @param funcName
     * @return {*}
     */
    checkFn(funcName) {
        let func = this.properties[funcName];
        if(isFunction(func)) {
            assertDefined(this.properties.dataSourceId, 'dataSourceId');
            return true;
        } else {
            let isSet = hasValue(func);
            if (isSet) {
                assertArray(func.dataSourceIds, funcName + ".dataSourceIds");
                assertFunction(func.handler, funcName + ".handler");
            }
            return isSet;
        }
    }

    /**
     * @private
     */
    initEvents() {
    }

    /**
     * Clear the layer.
     */
    clear() {
    }

    /**
     * Gets the layer id.
     * @return {String} the layer id
     */
    getId() {
        return this.id;
    }

    /**
     * Selects the datasource contained into the list
     * @param {Array} dataSourceIds the list of datasources
     */
    select(dataSourceIds) {
    }

    /**
     * Adds a function associated to a list of dataSource ids
     * @param {String[]} dataSourceIds - the list of datasources
     * @param {Function} fn - the function to add
     */
    addFn(dataSourceIds, fn) {
        if (!isDefined(this.dataSourcesToFn)) {
            this.dataSourcesToFn = {};
        }
        for (let i = 0; i < dataSourceIds.length; i++) {
            let dataSourceId = dataSourceIds[i];
            if (!isDefined(this.dataSourcesToFn[dataSourceId])) {
                this.dataSourcesToFn[dataSourceId] = [];
            }
            this.dataSourcesToFn[dataSourceId].push(fn);
        }
    }

    /**
     *
     * @param dataSourceId
     * @param {Object[]} records
     * @param options
     */
    async setData(dataSourceId, records, options={}) {
        // store data into data props
        this.data = [];
        options.dataSourceId = dataSourceId;
        if (isDefined(this.dataSourcesToFn)) {
            if (dataSourceId in this.dataSourcesToFn) {
                let fnArr = this.dataSourcesToFn[dataSourceId];
                for (let j = 0; j < records.length; j++) {
                    for (let i = 0; i < fnArr.length; i++) {
                        await fnArr[i](records[j].data, records[j].data.timestamp, options);
                        if (!this.props.filter) {
                            break;
                        }
                    }
                    if(this.props.filter) {
                        this.data.push({
                            ...this.props
                        });
                    }
                }
            }
        }
    }

    /**
     *
     * @return {String[]} The list of dataSource ids
     */
    getDataSourcesIds() {
        if(isDefined(this.dataSourcesToFn)) {
            let res = [];
            for (let i in this.dataSourcesToFn) {
                res.push(i);
            }
            return res;
        } else {
            assertDefined(this.properties.dataSourceId, 'dataSourceId must be defined');
            return [this.properties.dataSourceId];
        }
    }

    getDataSourcesIdsByProperty(name) {
        return this.properties[name].dataSourceIds ||  [this.properties.dataSourceId];
    }

    /**
     * Inits the layer.
     */
    init() {
    }

    /**
     * Clone current layer properties
     * @return {Object} a shallow copy of current properties
     */
    getProps() {
        return {
            type: this.type,
            values: this.data
        };
    }

    /**
     * Reset to default Layer values
     */
    reset() {
        this.restoreState();
    }
}

export default Layer;