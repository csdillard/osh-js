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

import Styler from "./Styler";
import { isDefined } from "../../utils/Utils";

/**
 * @extends Styler
 * @example
 * let polylineStyler = new Polyline({
		locationFunc : {
			dataSourceIds : [datasource.getId()],
			handler : function(rec) {
				return {
					x : rec.lon,
					y : rec.lat,
					z : rec.alt
				};
			}
		},
		color : 'rgba(0,0,255,0.5)',
		weight : 10,
		opacity : .5,
		smoothFactor : 1,
		maxPoints : 200
	});
 */
class Polyline extends Styler {
	/**
		* Creates the Polyline
		* @param {Object} properties
		* @param {Object[]} properties.locations - [lat, lon]
		* @param {String} [properties.color='red']
		* @param {Number} [properties.weight=1]
		* @param {Number} [properties.opacity=1]
		* @param {Number} [properties.smoothFactor=1]
		* @param {Number} [properties.maxPoints=10]
		* @param {Function} properties.locationFunc -
		* @param {Function} properties.colorFunc -
		* @param {Function} properties.weightFunc -
		* @param {Function} properties.opacityFunc -
		* @param {Function} properties.smoothFactorFunc -
		*/
	constructor(properties) {
		super(properties);
		this.properties = properties;
		this.locations = [];
		this.color = 'red';
		this.weight = 1;
		this.opacity = 1;
		this.smoothFactor = 1;
		this.maxPoints = 10;

		if(isDefined(properties.color)){
			this.color = properties.color;
		}

		if(isDefined(properties.weight)){
			this.weight = properties.weight;
		}

		if(isDefined(properties.opacity)){
			this.opacity = properties.opacity;
		}

		if(isDefined(properties.smoothFactor)){
			this.smoothFactor = properties.smoothFactor;
		}

		if(isDefined(properties.maxPoints)){
			this.maxPoints = properties.maxPoints;
		}

		let that = this;
		if(isDefined(properties.locationFunc)) {
			let fn = function(rec) {
				let loc = properties.locationFunc.handler(rec);
				that.locations.push(loc);
				if(that.locations.length > this.maxPoints) {
					that.locations.shift();
				}
			};
			this.addFn(properties.locationFunc.dataSourceIds,fn);
		}

		if(isDefined(properties.colorFunc)) {
			let fn = function(rec) {
				that.color = properties.colorFunc.handler(rec);
			};
			this.addFn(properties.colorFunc.dataSourceIds,fn);
		}

		if(isDefined(properties.weightFunc)) {
			let fn = function(rec) {
				that.weight = properties.weightFunc.handler(rec);
			};
			this.addFn(properties.weightFunc.dataSourceIds,fn);
		}

		if(isDefined(properties.opacityFunc)) {
			let fn = function(rec) {
				that.opacity = properties.opacityFunc.handler(rec);
			};
			this.addFn(properties.opacityFunc.dataSourceIds,fn);
		}

		if(isDefined(properties.smoothFactorFunc)) {
			let fn = function(rec) {
				that.smoothFactor = properties.smoothFactorFunc.handler(rec);
			};
			this.addFn(properties.smoothFactorFunc.dataSourceIds,fn);
		}
	}

	setData(dataSourceId,rec,view,options) {
		if(super.setData(dataSourceId,rec,view,options)) {
			if(isDefined(view) && typeof view.updatePolyline === 'function'){
				view.updatePolyline(this);
				return true;
			}
		}
		return false;
	}

	clear() {
		this.locations = [];
	}
}

export default Polyline;