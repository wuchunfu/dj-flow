webpackJsonp([44],{R38C:function(e,t,a){"use strict";t.a={props:{mode:{type:String,default:"DESIGN"},required:{type:Boolean,default:!1}},data:function(){return{}},computed:{_value:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}}},cvku:function(e,t){},vbfG:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={name:"textarea-input",components:{},mixins:[a("R38C").a],props:{value:{type:String,default:null},placeholder:{type:String,default:"请输入内容"}},data:function(){return{}},computed:{_value:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},methods:{}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",["DESIGN"===e.mode?a("div",[a("bk-input",{attrs:{disabled:!0,placeholder:e.placeholder,rows:2,type:"textarea"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1):a("div",[a("bk-input",{attrs:{clearable:"",maxlength:255,placeholder:e.placeholder,rows:3,type:"textarea"},model:{value:e._value,callback:function(t){e._value=t},expression:"_value"}})],1)])},staticRenderFns:[]};var l=a("VU/8")(n,u,!1,function(e){a("cvku")},"data-v-35207bda",null);t.default=l.exports}});