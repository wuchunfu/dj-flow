webpackJsonp([28],{"38eg":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"jobHistory"}},[a("bk-tab",{attrs:{active:t.$store.state.history.tabActive,type:"card"},on:{"update:active":function(e){return t.$set(t.$store.state.history,"tabActive",e)},"tab-change":t.handleTabChange}},t._l(t.panels,function(e,i){return a("bk-tab-panel",t._b({key:i},"bk-tab-panel",e,!1),[e.name===t.$store.state.history.tabActive?a("router-view"):t._e()],1)}),1),t._v(" "),a("div",{staticStyle:{height:"20px"}})],1)},staticRenderFns:[]};var o=a("VU/8")({data:function(){return{panels:[{name:"jobflowviewhistory",label:"作业流视图"},{name:"jobviewhistory",label:"作业视图"}]}},created:function(){"JobViewHistory"===this.$route.name&&this.$store.commit("changeTabActive","jobviewhistory")},methods:{handleTabChange:function(t){this.$store.commit("changeTabActive",t),this.$store.commit("getJobFlowHistorySearch",{}),this.$store.commit("getJobHistorySearch",{}),this.$router.push({path:"/"+t})}}},i,!1,function(t){a("cJug")},"data-v-50cf4ff3",null);e.default=o.exports},cJug:function(t,e){}});