webpackJsonp([47],{JVWK:function(e,t){},"O+R/":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={name:"dict-map",components:{},mixins:[a("R38C").a],props:{value:{type:Array,default:function(){return[]}},placeholder:{type:String,default:"请输入内容"}},data:function(){return{}},methods:{}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",["DESIGN"===e.mode?a("div",e._l(e.value,function(t,i){return a("div",{key:i},[a("div",{staticClass:"dict-map"},[a("bk-input",{staticStyle:{"margin-right":"20px"},attrs:{disabled:""},model:{value:t.key,callback:function(a){e.$set(t,"key",a)},expression:"item.key"}},[a("template",{slot:"prepend"},[a("div",{staticClass:"group-text"},[e._v("Key")])])],2),e._v(" "),a("bk-input",{attrs:{disabled:""},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"item.value"}},[a("template",{slot:"prepend"},[a("div",{staticClass:"group-text"},[e._v("Value")])])],2)],1)])}),0):a("div",e._l(e.value,function(t,i){return a("div",{key:i},[a("div",{staticClass:"dict-map"},[a("bk-input",{staticStyle:{"margin-right":"20px"},model:{value:t.key,callback:function(a){e.$set(t,"key",a)},expression:"item.key"}},[a("template",{slot:"prepend"},[a("div",{staticClass:"group-text"},[e._v("Key")])])],2),e._v(" "),a("bk-input",{model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"item.value"}},[a("template",{slot:"prepend"},[a("div",{staticClass:"group-text"},[e._v("Value")])])],2)],1)])}),0)])},staticRenderFns:[]};var l=a("VU/8")(i,n,!1,function(e){a("JVWK")},"data-v-04edff4f",null);t.default=l.exports},R38C:function(e,t,a){"use strict";t.a={props:{mode:{type:String,default:"DESIGN"},required:{type:Boolean,default:!1}},data:function(){return{}},computed:{_value:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}}}});