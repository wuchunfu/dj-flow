webpackJsonp([24],{EEeE:function(e,t){},X10b:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("Dd8w"),n=a.n(i),o=a("Xxa5"),s=a.n(o),r=a("exGp"),l=a.n(r),c=a("s0MJ"),d=a("NYxO"),h={data:function(){var e=[{id:"name",label:"作业流名",overflowTooltip:!0,sortable:!1},{id:"run_type",label:"调度方式",overflowTooltip:!1,sortable:!1},{id:"state",label:"状态",overflowTooltip:!1,sortable:!1},{id:"create_time",label:"创建时间",overflowTooltip:!1,sortable:!0},{id:"total_not_execute_job_count",label:"未执行作业数",overflowTooltip:!1,sortable:!1},{id:"is_release_dependency",label:"是否释放依赖",overflowTooltip:!0,sortable:!0},{id:"eta",label:"计划开始时间",overflowTooltip:!0,sortable:!0},{id:"start_time",label:"实际开始时间",overflowTooltip:!1,sortable:!0},{id:"end_time",label:"完成时间",overflowTooltip:!0,sortable:!0}];return{searchData:[{name:"作业流名称",id:"name",multiable:!1,children:[]},{name:"执行方式",id:"run_type",multiable:!0,children:[{id:"hand",name:"单次"},{id:"time",name:"定时"},{id:"cycle",name:"周期"},{id:"cron",name:"自定义"}]},{name:"任务状态",id:"state",multiable:!0,children:[{id:1,value:"wait",name:"等待"},{id:2,value:"run",name:"正在执行"},{id:3,value:"fail",name:"失败"},{id:4,value:"error",name:"错误"},{id:5,value:"success",name:"成功"},{id:6,value:"pause",name:"挂起"},{id:7,value:"cancel",name:"取消"},{id:8,value:"positive",name:"就绪"},{id:9,value:"stop",name:"终止"},{id:10,value:"need_confirm",name:"待审核"},{id:11,value:"ignore",name:"忽略"}]}],demo1:{value:[]},maxTableHeight:"",setting:{size:"small",fields:e,selectedFields:e.slice(0,4)},opreateFlag:!1,midSearchForm:{},searchFrom:{},auth:{},timer:null,selectionList:[],tableList:[],pagination:{current:1,count:1,limit:10},tableLoading:!1,runSysList:[],searchForm:{name:"",run_type:"",state:"",eta:["",""],total_job_count:"",total_not_execute_job_count:"",is_release_dependency:"",start_time:["",""],end_time:["",""],category:""},runTypeList:[{id:"hand",name:"单次"},{id:"time",name:"定时"},{id:"cycle",name:"周期"},{id:"cron",name:"自定义"}],isDropdownShow:!1,replyList:[{id:1,value:"false",label:"否"},{id:2,value:"true",label:"是"}],stateList:[{id:1,name:"wait",label:"等待"},{id:2,name:"run",label:"正在执行"},{id:3,name:"fail",label:"失败"},{id:4,name:"error",label:"错误"},{id:5,name:"success",label:"成功"},{id:6,name:"pause",label:"挂起"},{id:7,name:"cancel",label:"取消"},{id:8,name:"positive",label:"就绪"},{id:9,name:"stop",label:"终止"},{id:10,name:"need_confirm",label:"待审核"},{id:11,name:"ignore",label:"忽略"}]}},computed:Object(d.b)(["jobFlowViewSearchForm"]),created:function(){var e=this;this.auth=this.hasPerm(this.$route.path),this.maxTableHeight=this.$store.state.common.defaultTableHeight-143,this.initSearch(),this.handleLoad(!0),this.getRunSysList(),this.timer=setInterval(function(){e.handleLoad(!1)},5e3)},beforeDestroy:function(){clearInterval(this.timer)},methods:{handleSettingChange:function(e){var t=e.fields,a=e.size;this.setting.size=a,this.setting.selectedFields=t},handleEtaChange:function(e){this.searchForm.eta=e},handleStartTimeChange:function(e){this.searchForm.start_time=e},handleEndTimeChange:function(e){this.searchForm.end_time=e},handleCheckDetail:function(e){this.$router.push({path:"/viewdetail",query:{id:e.id}})},handleCheckJob:function(e){this.$store.commit("changeTabActive","jobview"),this.$router.push({path:"/jobview",query:{job_flow_id:e.id}})},handleSelectAll:function(e){var t=this;e.length>0?this.selectionList=this.selectionList.concat(e):this.tableList.forEach(function(e){t.selectionList=t.selectionList.filter(function(t){return t.id!==e.id})})},handleSelect:function(e,t){var a=this.selectionList.find(function(e){return e.id===t.id});a?this.selectionList=this.selectionList.filter(function(e){return e.id!==a.id}):this.selectionList.push(t)},handlePageLimitChange:function(e){this.pagination.current=1,this.pagination.limit=e,this.handleLoad(!1)},handlePageChange:function(e){this.pagination.current=e,this.handleLoad(!1)},handleOperation:function(e){var t=this;if(0===this.selectionList.length)return this.$cwMessage("至少选择一条数据","warning");var a=[];this.selectionList.forEach(function(e){a.indexOf(e.id)<0&&a.push(e.id)});var i,n={pause:{preState:"等待、进行中",content:"作业流暂停执行，不会继续后面的执行。属于该作业流的正在执行的作业会继续完成，完成后后续作业不会继续",width:850},resume:{preState:"挂起",content:"恢复挂起作业流",width:400},cancel:{preState:"除了正在执行",content:"将作业流状态置为取消，不可继续往下执行。将内部所有作业状态置为取消状态",width:650},replay:{preState:"成功、错误、失败、取消",content:"重新创建并实例化作业流，然后执行",width:500},release:{preState:"未执行",content:"强制执行，包括时间依赖（作业流如果为日历调度也需要定义时间）和前置依赖（释放作业流层面的依赖，不影响作业的依赖",width:900}};this.$bkInfo({type:"primary",title:"执行前状态："+n[e].preState,subTitle:"功能说明："+n[e].content,width:n[e].width,confirmLoading:!1,confirmFn:(i=l()(s.a.mark(function i(){return s.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:t.tableLoading=!0,t.opreateFlag=!0,t.$api.processRun.control({event:e,ids:a}).then(function(e){e.result?((t.jobFlowViewSearchForm.state||t.jobFlowViewSearchForm.is_release_dependency)&&(t.selectionList=[]),t.opreateFlag=!1,t.$cwMessage("操作成功！","success"),t.handleLoad(!0)):(t.opreateFlag=!1,t.handleLoad(!0),t.$cwMessage(e.message,"error")),t.tableLoading=!1});case 3:case"end":return i.stop()}},i,t)})),function(){return i.apply(this,arguments)})})},handleReset:function(){this.searchForm={name:"",state:"",eta:["",""],total_job_count:"",total_not_execute_job_count:"",is_release_dependency:"",start_time:["",""],end_time:["",""],category:""}},handleSearch:function(e){var t={};for(var a in e.forEach(function(e){t[e.id]?t[e.id]=t[e.id].concat(e.values.map(function(e){return e.value||e.id})):t[e.id]=e.values.map(function(e){return e.value||e.id})}),t)t[a]=t[a].join(",");this.pagination.current=1,this.searchFrom=t,this.handleLoad(!0)},getRunSysList:function(){this.runSysList=[]},handleOpenSeniorSearch:function(){this.isDropdownShow=!this.isDropdownShow},defaultCheck:function(){var e=this;this.tableLoading=!0,this.$nextTick(function(){e.selectionList.forEach(function(t){e.tableList.forEach(function(a){t.id===a.id&&e.$refs.table.toggleRowSelection(a,!0)})}),e.tableLoading=!1})},initSearch:function(){var e=this.jobFlowViewSearchForm;e.hasOwnProperty("name")&&(this.searchForm.name=e.name),e.hasOwnProperty("eta")&&(this.searchForm.eta[0]=e.eta[0],this.searchForm.eta[1]=e.eta[1]),e.hasOwnProperty("start_time")&&(this.searchForm.start_time[0]=e.start_time[0],this.searchForm.start_time[1]=e.start_time[1]),e.hasOwnProperty("end_time")&&(this.searchForm.end_time[0]=e.end_time[0],this.searchForm.end_time[1]=e.end_time[1]),e.hasOwnProperty("total_job_count")&&(this.searchForm.total_job_count=e.total_job_count),e.hasOwnProperty("total_not_execute_job_count")&&(this.searchForm.total_not_execute_job_count=e.total_not_execute_job_count),e.hasOwnProperty("category")&&(this.searchForm.category=e.category),e.hasOwnProperty("is_release_dependency")&&(this.searchForm.is_release_dependency=e.is_release_dependency),e.hasOwnProperty("state")&&(this.searchForm.state=e.state),this.midSearchForm=Object(c.a)(this.searchForm)},handleLoad:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.opreateFlag)return!1;t&&(this.tableLoading=!0),this.$api.processRun.list(n()({},this.searchFrom,{page:this.pagination.current,page_size:this.pagination.limit,task_id:this.$route.query.task_id})).then(function(t){t.result?(e.tableList=t.data.items,e.pagination.count=t.data.count,e.selectionList.length&&e.defaultCheck(),e.tableLoading=!1):(e.$cwMessage(t.message,"error"),e.tableLoading=!1)})}}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"bk-slide-fade-down"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:!e.tableLoading,expression:"!tableLoading"}],attrs:{id:"jobFlowView"}},[e.auth.operate||e.auth.search?a("div",{staticClass:"header"},[e.auth.operate?a("div",{staticStyle:{float:"left"}},[a("bk-button",{staticClass:"operationBtn",on:{click:function(t){return e.handleOperation("pause")}}},[e._v("暂停")]),e._v(" "),a("bk-button",{staticClass:"operationBtn",on:{click:function(t){return e.handleOperation("resume")}}},[e._v("恢复")]),e._v(" "),a("bk-button",{staticClass:"operationBtn",on:{click:function(t){return e.handleOperation("cancel")}}},[e._v("终止")])],1):e._e(),e._v(" "),e.auth.search?a("div",{staticStyle:{float:"right"}},[a("bk-search-select",{attrs:{"show-popover-tag-change":!0,data:e.searchData,"show-condition":!1,placeholder:"请输入过滤条件"},on:{change:e.handleSearch},model:{value:e.demo1.value,callback:function(t){e.$set(e.demo1,"value",t)},expression:"demo1.value"}})],1):e._e()]):e._e(),e._v(" "),a("div",{staticStyle:{clear:"both"}}),e._v(" "),a("div",{staticClass:"content"},[a("bk-table",{directives:[{name:"bkloading",rawName:"v-bkloading",value:{isLoading:e.tableLoading,zIndex:10},expression:"{ isLoading: tableLoading, zIndex: 10 }"}],ref:"table",attrs:{data:e.tableList,pagination:e.pagination,"ext-cls":"customTable",size:e.setting.size,"max-height":e.maxTableHeight},on:{"page-change":e.handlePageChange,"page-limit-change":e.handlePageLimitChange,select:e.handleSelect,"select-all":e.handleSelectAll}},[a("bk-table-column",{attrs:{type:"selection",width:"60"}}),e._v(" "),e._l(e.setting.selectedFields,function(t,i){return a("bk-table-column",{key:i,attrs:{label:t.label,prop:t.id,"show-overflow-tooltip":t.overflowTooltip,sortable:t.sortable},scopedSlots:e._u([{key:"default",fn:function(i){return["name"===t.id?a("div",{staticStyle:{color:"#052150",cursor:"pointer","font-weight":"400","text-decoration":"underline"},on:{click:function(t){return e.handleCheckDetail(i.row)}}},[e._v(e._s(i.row.name)+"\n                        ")]):"state"===t.id?a("div",[a("bk-tag",{class:i.row.state},[e._v("\n                                "+e._s(e.stateList[e.stateList.findIndex(function(e){return e.name===i.row.state})].label)+"\n                            ")])],1):"run_type"===t.id?a("div",["hand"===i.row.run_type?a("span",[a("bk-tag",{attrs:{radius:"5px"}},[e._v("单次")])],1):"time"===i.row.run_type?a("span",[a("bk-tag",{attrs:{radius:"5px"}},[e._v("定时")])],1):"cycle"===i.row.run_type?a("span",[a("bk-tag",{attrs:{radius:"5px"}},[e._v("周期")])],1):"calendar"===i.row.run_type?a("span",[a("bk-tag",{attrs:{radius:"5px"}},[e._v("日历")])],1):e._e()]):a("div",[a("span",[e._v("\n                                "+e._s(""===i.row[t.id]||null===i.row[t.id]?"- -":i.row[t.id])+"\n                            ")])])]}}],null,!0)})}),e._v(" "),a("bk-table-column",{attrs:{label:"子作业流",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.has_sub?a("bk-button",{staticClass:"btn-color",attrs:{theme:"primary",text:""},on:{click:function(a){return e.handleCheckJob(t.row)}}},[e._v("查看\n                        ")]):a("div",[e._v("--")])]}}])}),e._v(" "),a("bk-table-column",{attrs:{type:"setting"}},[a("bk-table-setting-content",{attrs:{fields:e.setting.fields,selected:e.setting.selectedFields,size:e.setting.size},on:{"setting-change":e.handleSettingChange}})],1)],2)],1)])])},staticRenderFns:[]};var m=a("VU/8")(h,u,!1,function(e){a("EEeE")},"data-v-65b93208",null);t.default=m.exports}});