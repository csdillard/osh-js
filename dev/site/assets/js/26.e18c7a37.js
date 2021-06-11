(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{424:function(e,t,a){"use strict";a.r(t);var s=a(9),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#file"}},[e._v("#")]),e._v(" File")]),e._v(" "),a("p",[e._v("The File DataSource can be used to read the content of a file.")]),e._v(" "),a("p",[e._v("It uses loaders.gl, which makes it possible to support the reading of a large number of file types.")]),e._v(" "),a("p",[e._v("It is very useful to read external data that you would like to aggregate in your application.")]),e._v(" "),a("p",[e._v("The loaders.gl parser is used and automatically detects the type of file according to several criteria: its extension,\nits content, its mime-type  "),a("a",{attrs:{href:"https://loaders.gl/modules/core/docs/api-reference/select-loader",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://loaders.gl/modules/core/docs/api-reference/select-loader"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"parser"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parser"}},[e._v("#")]),e._v(" Parser")]),e._v(" "),a("p",[e._v("By default, this DataSource does not parse the timestamp or the data. This implies that the data is returned in the\nstate in which it is read. This implies that it is not compatible with the DataSynchronizer for the moment.")]),e._v(" "),a("p",[e._v("It uses a File connector that creates a ReadableStream which is then passed to the loaders.gl parser:\n"),a("a",{attrs:{href:"https://loaders.gl/modules/core/docs/api-reference/parse#parsedata-response--arraybuffer--string-loaders-object--object-options-object--promiseany",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://loaders.gl/modules/core/docs/api-reference/parse#parsedata-response--arraybuffer--string-loaders-object--object-options-object--promiseany"),a("OutboundLink")],1)]),e._v(" "),a("DocumentationLoad",{attrs:{path:"/guide/api/File.html"}}),e._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" File "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'osh-js/core/datasource/File'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("File")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Example'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Example'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  paths"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'http://opensensorhub.github.io/osh-js/dev/demos/earthquakes/data/earthquakes.1.csv'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("p",[a("em",[e._v("Note: By default, the DataSource File object defines the 'file' protocol.\nIt is therefore not necessary to define it in its properties.")])])],1)}),[],!1,null,null,null);t.default=r.exports}}]);