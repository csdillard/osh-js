(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{414:function(t,a,e){"use strict";e.r(a);var s=e(9),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"general"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#general"}},[t._v("#")]),t._v(" General")]),t._v(" "),e("p",[t._v("The DataSource is the entry point defining some properties about the kind of data you want to display and how to connect to it.")]),t._v(" "),e("p",[t._v("There are properties to control the playback stream, server version, protocols, buffering, and some other network options.")]),t._v(" "),e("p",[e("strong",[t._v("osh-js")]),t._v(" comes with built-in datasource types:")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/guide/datasources/sos/swejson.html"}},[t._v("SosGetResultJson")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/guide/datasources/sos/video.html"}},[t._v("Video")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/guide/datasources/sos/videoroll.html"}},[t._v("VideoWithRoll")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/guide/datasources/sos/sosgetfois.html"}},[t._v("SosGetFois")])],1)]),t._v(" "),e("h2",{attrs:{id:"data-parsing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-parsing"}},[t._v("#")]),t._v(" Data parsing")]),t._v(" "),e("p",[t._v("The second role of the DataSource is to provide a way to parse the data depending on the kind of DataSource we invoke.\nEach DataSource provides an inner parser which defines how to parse the data.")]),t._v(" "),e("p",[t._v("The DataSource uses a DataConnector which instantiates a WebSocket or HTTP connection to get results from the server.\nIn case of GetResult request, it is preferable to use a WebSocket because it will keep a persistent connection between the client and the server.")]),t._v(" "),e("p",[t._v("For the case of using a WebSocket connector, the data is in the form of an "),e("strong",[t._v("arrayBuffer")]),t._v(" as defined into the\n"),e("a",{attrs:{href:"https://html.spec.whatwg.org/multipage/web-sockets.html#network",target:"_blank",rel:"noopener noreferrer"}},[t._v("WebSocket Specification"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("The DataSource parses the binary array to read the original content such as Text, Json, other binary data(video frames) etc.")]),t._v(" "),e("p",[t._v("Several types of DataSource exist. For the moment, they are divided into "),e("code",[t._v("TimeSeriesDataSource")]),t._v(" and "),e("code",[t._v("DataSource")]),t._v(".")]),t._v(" "),e("p",[e("code",[t._v("TimeSeriesDataSource")]),t._v(" inherits directly from "),e("code",[t._v("DataSource")]),t._v(" and adds the notion of time.\nIndeed, it mainly concerns the "),e("code",[t._v("GetResult")]),t._v(" request.")]),t._v(" "),e("h2",{attrs:{id:"data-after-parsing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-after-parsing"}},[t._v("#")]),t._v(" Data after parsing")]),t._v(" "),e("p",[t._v("The data are mapped into internal Object. Each DataSource defines the properties of this object but some are common to\nevery DataSource.")]),t._v(" "),e("p",[t._v("For the time being, two kind of message are supported: "),e("code",[t._v("message")]),t._v(" and "),e("code",[t._v("data")]),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"datasource"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#datasource"}},[t._v("#")]),t._v(" DataSource")]),t._v(" "),e("h3",{attrs:{id:"common-properties"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#common-properties"}},[t._v("#")]),t._v(" Common properties")]),t._v(" "),e("p",[t._v("Some properties are common to all DataSources. These are the DataSourceId, and the message type.")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  type"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"message"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  dataSourceId"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123-456-4569-4545"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"data-type-message"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-type-message"}},[t._v("#")]),t._v(" Data type "),e("code",[t._v("message")])]),t._v(" "),e("p",[t._v("The data type message are useful to send some message from the DataSource to the endpoint. For example, if the connector\ndisconnects, then the dataSources can alert the view that the status of the connection has been changed.")]),t._v(" "),e("p",[t._v("The structure of such a message is:")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  type"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"message"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  dataSourceId"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123-456-4569-4545"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  status"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Status.DISCONNECTED\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),e("h3",{attrs:{id:"data-type-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-type-data"}},[t._v("#")]),t._v(" Data type "),e("code",[t._v("data")])]),t._v(" "),e("p",[t._v("These are the data messages. These objects are the result of parsing the source object received by the server\nto the internal object of the Toolkit.\nEach message contains a set of values, which in turn contains a timeStamp and an associated data.")]),t._v(" "),e("p",[t._v("The choice to pass an array rather than a single object is due to the fact that the "),e("em",[t._v("batch")]),t._v(" property of the DataSource can be used.\nThis property allows to receive a group of data rather than a single data item("),e("RouterLink",{attrs:{to:"/guide/datasources/sos/batch.html"}},[t._v("see batch section")]),t._v(").\nFor example, if you want to display a Graph,\nit is often preferable to initialize it with all the data at once (for archive data) rather than updating it data by data.")],1),t._v(" "),e("p",[t._v("The structure of such a message is:")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    type"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    dataSourceId"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123-456-4569-4545"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    values"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      data"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        lat"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("45.2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        lon"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("45")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),e("h3",{attrs:{id:"global-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#global-configuration"}},[t._v("#")]),t._v(" Global configuration")]),t._v(" "),e("p",[t._v("There are global properties common to every datasource owned by the DataSource Object.")]),t._v(" "),e("DocumentationLoad",{attrs:{path:"/guide/api/DataSource.html"}}),t._v(" "),e("p",[t._v("The "),e("strong",[t._v("customUrlParams")]),t._v(" are properties that are automatically appended to the URL as they are provided.")]),t._v(" "),e("p",[t._v("Example:")]),t._v(" "),e("div",{staticClass:"language-jsx extra-class"},[e("pre",{pre:!0,attrs:{class:"language-jsx"}},[e("code",[t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" dataSource "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    customUrlParams"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'someParams'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'value1'")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("   \n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("This will give the following result URL:")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[t._v("http://some-url?..&customUrlParams=value1\n")])])]),e("p",[t._v("The "),e("strong",[t._v("batchSize")]),t._v(" property allows to receive a group of data rather than a single data item.\nFor example, if you want to display a Graph, it is often preferable to initialize it with all the data at once\n(for archive data) rather than updating it data by data. "),e("RouterLink",{attrs:{to:"/guide/datasources/sos/batch_replayspeed.html"}},[t._v("see batch section")])],1),t._v(" "),e("p",[t._v("The "),e("strong",[t._v("reconnectTimeout")]),t._v(" allows you to set the time before the connector tries to reconnect after being disconnected.")]),t._v(" "),e("h3",{attrs:{id:"properties-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#properties-configuration"}},[t._v("#")]),t._v(" Properties configuration")]),t._v(" "),e("p",[t._v("The general datasource properties allows to define the parameters of the data you want to fetch.\nMoreover, it is possible de get more control on the reconnection process and/or the synchronization algorithm when it is\nassociated with a DataSynchronizer.")]),t._v(" "),e("p",[e("em",[t._v("batchsize")]),t._v(" is useful if you want to process data in batches and display them all at once rather than displaying them one by one. For example, in the case of static data that one would like to display in a block.")]),t._v(" "),e("p",[t._v("To create a new datasource type, see the "),e("RouterLink",{attrs:{to:"/guide/advanced/developers/datasources.html"}},[t._v("developer docs")]),t._v(".")],1),t._v(" "),e("h2",{attrs:{id:"timeseriesdatasource"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#timeseriesdatasource"}},[t._v("#")]),t._v(" TimeSeriesDataSource")]),t._v(" "),e("p",[t._v("This datasource allows to request the server with the notion of time. The temporal synchronization of the data is then possible for all DataSources inheriting it.")]),t._v(" "),e("p",[t._v("After the parsing, the data can be synchronized using "),e("RouterLink",{attrs:{to:"/guide/timesync/general.html"}},[t._v("the DataSynchronizer")]),t._v(" or/and displayed\ninto a "),e("a",{attrs:{href:"../../views/index"}},[t._v("View")]),t._v(".")],1),t._v(" "),e("h3",{attrs:{id:"data-type-data-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-type-data-2"}},[t._v("#")]),t._v(" Data type "),e("em",[t._v("data")])]),t._v(" "),e("p",[t._v("The structure is similar to a DataSource but with a `timestamp' field allowing to add temporality to the data.")]),t._v(" "),e("p",[t._v("The structure of such a message is:")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    type"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    dataSourceId"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123-456-4569-4545"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    values"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      timeStamp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1231545456")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      data"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        lat"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("45.2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        lon"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("45")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),e("h3",{attrs:{id:"global-configuration-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#global-configuration-2"}},[t._v("#")]),t._v(" Global configuration")]),t._v(" "),e("p",[t._v("There are global properties common to every datasource owned by the TimeSeriesDataSource Object.")]),t._v(" "),e("DocumentationLoad",{attrs:{path:"/guide/api/TimeSeriesDataSource.html"}}),t._v(" "),e("p",[t._v("Example:")]),t._v(" "),e("div",{staticClass:"language-jsx extra-class"},[e("pre",{pre:!0,attrs:{class:"language-jsx"}},[e("code",[t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" timeSeriesDataSource "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    timeShift"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'someParams'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'value1'")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    timeOut"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    bufferingTime"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    replaySpeed"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.5")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("The "),e("strong",[t._v("timeOut")]),t._v(" and "),e("strong",[t._v("bufferingTime")]),t._v(" are useful only for "),e("RouterLink",{attrs:{to:"/guide/timesync/general.html"}},[t._v("data synchronization")]),t._v(".")],1),t._v(" "),e("p",[t._v("The "),e("strong",[t._v("replaySpeed")]),t._v(" property allows to modify the same frequency of reception of archive data compared to their\noriginal frequency.")]),t._v(" "),e("h3",{attrs:{id:"properties-configuration-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#properties-configuration-2"}},[t._v("#")]),t._v(" Properties configuration")]),t._v(" "),e("p",[t._v("The general datasource properties allows to define the parameters of the data you want to fetch.\nMoreover, it is possible de get more control on the reconnection process and/or the synchronization algorithm when it is\nassociated with a DataSynchronizer.")])],1)}),[],!1,null,null,null);a.default=r.exports}}]);