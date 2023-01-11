webpackJsonp([16],{O5Vl:function(t,e){},Wp9t:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("NYxO"),r={data:function(){return{maxTableHeight:"",auth:{},tableLoading:!1,tableList:[],isDropdownShow:!1,searchFrom:{name:"",executor:"",state:""},stateList:[{id:5,name:"success",label:"成功"},{id:7,name:"cancel",label:"取消"}],pagination:{current:1,count:1,limit:10}}},computed:Object(o.b)(["jobHistorySearchForm"]),created:function(){this.auth=this.hasPerm(this.$route.path),this.maxTableHeight=this.$store.state.common.defaultTableHeight-143,this.initSearch(),this.handleLoad()},methods:{handleCheckDetail:function(t){this.$router.push({path:"/jobviewdetail",query:{id:t.id}})},handlePageLimitChange:function(t){this.pagination.current=1,this.pagination.limit=t,this.handleLoad()},handlePageChange:function(t){this.pagination.current=t,this.handleLoad()},handleReset:function(){this.searchFrom={name:"",executor:"",state:""}},initSearch:function(){var t=this.jobHistorySearchForm;t.hasOwnProperty("name")&&(this.searchFrom.name=t.name),t.hasOwnProperty("executor")&&(this.searchFrom.executor=t.executor),t.hasOwnProperty("state")&&(this.searchFrom.state=t.state)},handleLoad:function(){var t=this;this.tableLoading=!0;var e={name:this.searchFrom.name,executor:this.searchFrom.executor,state:this.searchFrom.state,content_id:this.$route.query.hasOwnProperty("job_id")?this.$route.query.job_id:"",page:this.pagination.current,page_size:this.pagination.limit};this.$route.query.job_flow_id&&(e.process_history=this.$route.query.job_flow_id),this.$api.nodeHistory.list(e).then(function(e){e.result?(t.pagination.count=e.data.count,t.tableList=e.data.items):t.$cwMessage(e.message,"error"),t.tableLoading=!1})},handleOpenSeniorSearch:function(){this.isDropdownShow=!this.isDropdownShow},handleSearch:function(){this.$store.commit("getJobHistorySearch",this.searchFrom),this.pagination.current=1,this.handleLoad()}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"jobViewHistory"}},[t.auth.search?a("div",{staticClass:"header"},[a("div",{staticStyle:{float:"left"}},[a("bk-input",{staticStyle:{width:"240px","margin-right":"8px"},attrs:{clearable:"",width:"240px",placeholder:"请输入作业名称","right-icon":"bk-icon icon-search"},on:{"right-icon-click":t.handleSearch,enter:t.handleSearch},model:{value:t.searchFrom.name,callback:function(e){t.$set(t.searchFrom,"name",e)},expression:"searchFrom.name"}}),t._v(" "),a("bk-button",{attrs:{slot:"dropdown-trigger",theme:!0===t.isDropdownShow?"primary":"default","icon-right":!0===t.isDropdownShow?"angle-double-up":"angle-double-down"},on:{click:t.handleOpenSeniorSearch},slot:"dropdown-trigger"},[t._v("高级搜索")])],1),t._v(" "),t.isDropdownShow?a("div",{staticClass:"senior-search-box"},[a("bk-container",{attrs:{margin:0}},[a("bk-form",{attrs:{"label-width":100}},[a("bk-row",[a("bk-col",{attrs:{span:6}},[a("bk-form-item",{attrs:{label:"作业名:"}},[a("bk-input",{attrs:{placeholder:"请输入作业名称",clearable:""},model:{value:t.searchFrom.name,callback:function(e){t.$set(t.searchFrom,"name",e)},expression:"searchFrom.name"}})],1)],1),t._v(" "),a("bk-col",{attrs:{span:6}},[a("bk-form-item",{attrs:{label:"执行者:"}},[a("bk-input",{attrs:{placeholder:"请输入执行者",clearable:""},model:{value:t.searchFrom.executor,callback:function(e){t.$set(t.searchFrom,"executor",e)},expression:"searchFrom.executor"}})],1)],1),t._v(" "),a("bk-col",{attrs:{span:6}},[a("bk-form-item",{attrs:{label:"状态:"}},[a("bk-select",{staticClass:"header-select",staticStyle:{"background-color":"#fff"},attrs:{clearable:!0},model:{value:t.searchFrom.state,callback:function(e){t.$set(t.searchFrom,"state",e)},expression:"searchFrom.state"}},t._l(t.stateList,function(t,e){return a("bk-option",{key:e,attrs:{id:t.name,name:t.label}})}),1)],1)],1)],1),t._v(" "),a("bk-row",{staticStyle:{display:"flex","justify-content":"center","margin-top":"16px"}},[a("bk-button",{attrs:{theme:"primary"},on:{click:t.handleSearch}},[t._v("查询")]),t._v(" "),a("bk-button",{staticStyle:{"margin-left":"8px"},on:{click:t.handleReset}},[t._v("重置")]),t._v(" "),a("bk-button",{staticStyle:{"margin-left":"8px"},on:{click:t.handleOpenSeniorSearch}},[t._v("取消")])],1)],1)],1)],1):t._e()]):t._e(),t._v(" "),a("div",{staticStyle:{clear:"both"}}),t._v(" "),a("div",{staticClass:"content"},[a("bk-table",{directives:[{name:"bkloading",rawName:"v-bkloading",value:{isLoading:t.tableLoading,zIndex:10},expression:"{ isLoading: tableLoading, zIndex: 10 }"}],ref:"table",attrs:{data:t.tableList,pagination:t.pagination,"ext-cls":"customTable","max-height":t.maxTableHeight},on:{"page-change":t.handlePageChange,"page-limit-change":t.handlePageLimitChange}},[a("bk-table-column",{attrs:{label:"作业名",prop:"name","show-overflow-tooltip":!0},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{color:"#3a84ff",cursor:"pointer"},on:{click:function(a){return t.handleCheckDetail(e.row)}}},[t._v(t._s(e.row.name))])]}}])}),t._v(" "),a("bk-table-column",{attrs:{label:"所属作业流名",prop:"process","show-overflow-tooltip":!0}}),t._v(" "),a("bk-table-column",{attrs:{label:"状态",prop:"state"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t.stateList[t.stateList.findIndex(function(t){return t.name===e.row.state})].label))])]}}])}),t._v(" "),a("bk-table-column",{attrs:{label:"Agent",prop:"station","show-overflow-tooltip":!0}}),t._v(" "),a("bk-table-column",{attrs:{label:"计划开始时间",prop:"eta","show-overflow-tooltip":!0,sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(""===e.row.eta?"- -":e.row.eta))])]}}])}),t._v(" "),a("bk-table-column",{attrs:{label:"执行者",prop:"executor","show-overflow-tooltip":!0}}),t._v(" "),a("bk-table-column",{attrs:{label:"实际开始时间",prop:"start_time","show-overflow-tooltip":!0,sortable:""}}),t._v(" "),a("bk-table-column",{attrs:{label:"完成时间",prop:"end_time","show-overflow-tooltip":!0,sortable:""}})],1)],1)])},staticRenderFns:[]};var i=a("VU/8")(r,n,!1,function(t){a("O5Vl")},"data-v-f4328fb2",null);e.default=i.exports}});