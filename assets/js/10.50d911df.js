(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{320:function(t,a,s){s(321),t.exports=function(t,a,s){return a in t?Object.defineProperty(t,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[a]=s,t},t.exports.default=t.exports,t.exports.__esModule=!0},321:function(t,a,s){var e=s(0),n=s(7);e({target:"Object",stat:!0,forced:!n,sham:!n},{defineProperty:s(8).f})},322:function(t,a,s){"use strict";s.d(a,"a",(function(){return r}));var e=s(320);function n(t,a){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),s.push.apply(s,e)}return s}function r(t){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?n(Object(s),!0).forEach((function(a){e(t,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(s,a))}))}return t}},387:function(t,a,s){"use strict";s.r(a);var e=s(322),n={name:"component-doc",components:{"render-demo-0":Object(e.a)({render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("v-frappe-chart",{attrs:{type:"axis-mixed",labels:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"],data:[{name:"Dataset 1",chartType:"bar",values:[18,40,30,35,8,52,17,-4]},{name:"Dataset 2",chartType:"line",values:[30,50,-10,15,18,32,27,14]}]}})],1)},staticRenderFns:[]},{}),"render-demo-1":Object(e.a)({render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("v-frappe-chart",{attrs:{type:"bar",labels:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"],data:[{name:"Dataset 1",values:[18,40,30,35,8,52,17,-4]},{name:"Dataset 2",values:[30,50,-10,15,18,32,27,14]}],barOptions:{stacked:1}}})],1)},staticRenderFns:[]},{})}},r=s(24),p=Object(r.a)(n,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"mixed-bar-and-line-chart"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mixed-bar-and-line-chart"}},[t._v("#")]),t._v(" Mixed Bar and Line Chart")]),t._v(" "),s("p",[t._v("As we have seen, chart can have multiple datasets. Each dataset can also have a different "),s("code",[t._v("chartType")]),t._v(", which if specified, should accompany the "),s("code",[t._v("type")]),t._v(" property set to "),s("code",[t._v("axis-mixed")]),t._v(".")]),t._v(" "),s("demo-block",{attrs:{options:JSON.parse(decodeURI("%7B%7D"))}},[s("template",{slot:"demo"},[[s("render-demo-0")]],2),t._v(" "),s("template",{slot:"source"},[s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("v-frappe-chart")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("axis-mixed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":labels")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("["),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("Sun"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("Mon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("Tue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("Wed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("Thu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("Fri"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("Sat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("Sun"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("]"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":data")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("[\n        { name: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("Dataset 1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", chartType: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("bar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", values: [18, 40, 30, 35, 8, 52, 17, -4] },\n        { name: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("Dataset 2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", chartType: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("line"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", values: [30, 50, -10, 15, 18, 32, 27, 14] }\n    ]"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])])])],2),s("p",[t._v("All the "),s("code",[t._v("lineOptions")]),t._v(" and "),s("code",[t._v("barOptions")]),t._v(" apply to mix and match datasets as well.")]),t._v(" "),s("h3",{attrs:{id:"stacked-bar-chart"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stacked-bar-chart"}},[t._v("#")]),t._v(" Stacked Bar Chart")]),t._v(" "),s("p",[t._v("Unlike lines, bars have two ways to show multiple data point values: adjacent or stacked bars. Stacked bar charts are similar to area charts, being useful for comparisions of similar trends. The property stacked in barOptions renders a stacked bar chart instead of the default adjacent bars:")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[t._v(':barOptions="{\n  stacked: 1    // default 0, i.e. adjacent\n}"\n')])])]),s("demo-block",{attrs:{options:JSON.parse(decodeURI("%7B%7D"))}},[s("template",{slot:"demo"},[[s("render-demo-1")]],2),t._v(" "),s("template",{slot:"source"},[s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("v-frappe-chart")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":labels")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("["),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("Sun"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("Mon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("Tue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("Wed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("Thu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("Fri"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("Sat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("Sun"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("]"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":data")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("[\n        { name: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("Dataset 1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", values: [18, 40, 30, 35, 8, 52, 17, -4] },\n        { name: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("Dataset 2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", values: [30, 50, -10, 15, 18, 32, 27, 14] }\n    ]"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":barOptions")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{\n      stacked: 1    // default 0, i.e. adjacent\n    }"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])])])],2),s("p",[t._v("In Aggregate Charts however, instead of being rendered individually, each data point in aggregated accross every dataset. We'll cover those next.")])],1)}),[],!1,null,null,null);a.default=p.exports}}]);