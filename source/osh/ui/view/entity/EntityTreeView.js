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

import View from "../View.js";
import {isDefined} from "../../../utils/Utils.js";
import {createTree} from "../../../../../libs/tree/tree.js";
import "../../../../../libs/tree/tree.css";

/**
 * This class is in charge of displaying the entities in a tree structure.
 * @extends View
 * @example
 let entityTreeView = new id,
     [{
        entity : androidEntity,
        path: "Sensors/Toulouse",
        treeIcon : "images/android_icon.png"
     }],
     {
         css: "tree-container"
     }
 );
 */
class EntityTreeView extends View {
    /**
     * Create a View.
     * @param {String} parentElementDivId - The div element to attach to
     * @param {Object[]} entityItems - The initial view items to add
     * @param {Object} options - the properties of the view
     *
     */
    constructor(parentElementDivId,entityItems,options) {
        super(parentElementDivId,[],options);
        this.entityItems = entityItems;
        this.initTree(options);
    }

    /**
     * @private
     */
    initTree(options) {
        this.tree = createTree(this.divId,'white',null);

        // iterates over entities to create treeNode
        for(let i = 0;i < this.entityItems.length;i++) {
            let currentItem = this.entityItems[i];
            let entity = currentItem.entity;
            let path = currentItem.path;
            let treeIcon = currentItem.treeIcon;

            if(path.endsWith("/")) {
                path = path.substring(0,path.length-1);
            }

            // create intermediary folders or append to them as needed
            let folder = path.split("/");
            let nbNodes = folder.length;
            let currentNode = this.tree;
            let pos = 0;
            while(nbNodes > 0) {
                let existingChildNode = null;

                // scan child nodes to see if folder already exists
                for (let n=0; n<currentNode.childNodes.length; n++) {
                    let node = currentNode.childNodes[n];
                    if (node.text === folder[pos]) {
                        existingChildNode = node;
                        break;
                    }
                }

                // if folder already exists, just use it as parent in next iteration
                // otherwise create a new node to use as new parent
                if (existingChildNode == null) {
                    if (currentNode === this.tree) {
                        currentNode = this.tree.createNode(folder[pos], false, '', this.tree, null, null);
                    } else {
                        currentNode = currentNode.createChildNode(folder[pos], false, '', null, null);
                    }
                } else {
                    currentNode = existingChildNode;
                }

                pos++;
                nbNodes--;
            }

            let entityNode;
            if(currentNode === this.tree) {
                entityNode = this.tree.createNode(entity.name,false,treeIcon,this.tree);
            } else {
                entityNode = currentNode.createChildNode(entity.name,false,treeIcon,entity);
            }
            currentItem.node = entityNode;
        }

        //Rendering the tree
        this.tree.drawTree();
    }

    selectDataView(dataSourcesIds, entityId) {

        // when an entity is selected we find the corresponding node in the tree
        // we expand all its ancestors and we mark it as selected
        if (isDefined(entityId)) {
            for(let i = 0;i < this.entityItems.length;i++) {
                let currentItem = this.entityItems[i];
                if (currentItem.entity.id === entityId) {
                    this.tree.selectNode(currentItem.node, false);
                    let node = currentItem.node.parent;
                    while (node !== this.tree) {
                        this.tree.expandNode(node);
                        node = node.parent;
                    }
                    currentItem.node.elementLi.scrollIntoViewIfNeeded(true);
                }

            }
        }
    }
}
export default  EntityTreeView;
