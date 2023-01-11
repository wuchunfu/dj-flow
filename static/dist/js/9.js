webpackJsonp([9],{C8xT:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("Dd8w"),n=i.n(a),o=i("Xxa5"),r=i.n(o),s=i("exGp"),l=i.n(s),c={props:{jobFrom:{type:Object,default:{}}},data:function(){return{formLoading:!1,form:{},disabled:!0,timeTypeList:[{value:"hours",label:"时"},{value:"minutes",label:"分"},{value:"seconds",label:"秒"}],reviewList:[{label:"正常运行",value:0},{label:"禁止运行",value:1}],scriptTypeList:[{key:1,label:"Shell(Linux)",value:"shell-linux-1"},{key:2,label:"Bat(Windows)",value:"bat-win-2"},{key:3,label:"perl",value:"perl-3"},{key:4,label:"Python(Linux)",value:"python-linux-4"},{key:5,label:"PowerShell(Windows)",value:"powershell-win-5"},{key:6,label:"HTTP",value:"HTTP"}]}},created:function(){this.form=this.jobFrom},methods:{checkFormValue:function(t){var e=t;return void 0!==t&&""!==t&&null!==t||(e="--"),e}}},d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"jobDialog"}},[i("bk-form",{ref:"form",attrs:{"label-width":144,model:t.form}},[i("bk-form-item",{attrs:{label:"节点名称:",required:!0,"error-display-type":"normal",property:"node_name"}},[i("bk-input",{staticStyle:{width:"350px","margin-right":"9px"},attrs:{type:"text",disabled:t.disabled},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),i("bk-form-item",{attrs:{label:"运行标志:",required:!0,"error-display-type":"normal",property:"run_mark"}},[i("bk-radio-group",{model:{value:t.form.run_mark,callback:function(e){t.$set(t.form,"run_mark",e)},expression:"form.run_mark"}},t._l(t.reviewList,function(e,a){return i("bk-radio",{key:a,staticStyle:{"margin-right":"24px"},attrs:{value:e.value,disabled:t.disabled}},[t._v("\n                    "+t._s(e.label)+"\n                ")])}),1)],1),t._v(" "),i("bk-form-item",{attrs:{label:"描述:"}},[i("bk-input",{staticStyle:{width:"350px","margin-right":"9px"},attrs:{type:"textarea",disabled:t.disabled,min:0},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),t._v(" "),i("bk-form-item",{attrs:{label:"失败重试次数:",required:!0,"error-display-type":"normal",property:"fail_retry_count"}},[i("bk-input",{staticStyle:{width:"350px","margin-right":"9px"},attrs:{type:"number",disabled:t.disabled,min:0},model:{value:t.form.fail_retry_count,callback:function(e){t.$set(t.form,"fail_retry_count",e)},expression:"form.fail_retry_count"}})],1),t._v(" "),i("bk-form-item",{attrs:{label:"失败重试间隔:"}},[i("bk-compose-form-item",[i("bk-input",{staticStyle:{width:"139px","margin-right":"9px"},attrs:{type:"number",disabled:t.disabled,min:0},model:{value:t.form.fail_offset,callback:function(e){t.$set(t.form,"fail_offset",e)},expression:"form.fail_offset"}}),t._v(" "),i("bk-select",{staticStyle:{"background-color":"#fff",width:"138px","margin-right":"14px"},attrs:{clearable:!0,placeholder:"请选择",disabled:t.disabled},model:{value:t.form.fail_offset_unit,callback:function(e){t.$set(t.form,"fail_offset_unit",e)},expression:"form.fail_offset_unit"}},t._l(t.timeTypeList,function(t,e){return i("bk-option",{key:e,attrs:{id:t.value,name:t.label}})}),1),t._v(" "),i("span",[t._v("产生重试")])],1)],1),t._v(" "),i("bk-form-item",{attrs:{label:"忽略失败:"}},[i("bk-switcher",{attrs:{disabled:t.disabled},model:{value:t.form.is_skip_fail,callback:function(e){t.$set(t.form,"is_skip_fail",e)},expression:"form.is_skip_fail"}})],1),t._v(" "),i("bk-form-item",{attrs:{label:"超时告警:"}},[i("bk-switcher",{attrs:{disabled:t.disabled},model:{value:t.form.is_timeout_alarm,callback:function(e){t.$set(t.form,"is_timeout_alarm",e)},expression:"form.is_timeout_alarm"}})],1),t._v(" "),i("bk-divider",{staticStyle:{width:"540px",position:"relative",right:"20px","border-color":"#dcdee5"}}),t._v(" "),i("p",{staticClass:"title"},[t._v("输入参数")]),t._v(" "),t._l(t.form.inputs_component,function(e,a){return i("bk-form-item",{key:a,attrs:{label:e.label}},["textarea"===e.type?i("div",[i("bk-input",{staticStyle:{width:"350px","margin-right":"9px"},attrs:{type:"textarea",disabled:t.disabled,min:0},model:{value:t.form.inputs[e.key],callback:function(i){t.$set(t.form.inputs,e.key,i)},expression:"form.inputs[item.key]"}})],1):"select"===e.type?i("div",[i("bk-select",{staticStyle:{"background-color":"#fff",width:"130px","margin-right":"14px"},attrs:{clearable:!0,placeholder:"请选择",disabled:t.disabled},model:{value:t.form.inputs[e.key],callback:function(i){t.$set(t.form.inputs,e.key,i)},expression:"form.inputs[item.key]"}},t._l(e.choices||[],function(t,e){return i("bk-option",{key:e,attrs:{id:t.value,name:t.label}})}),1)],1):"dict_map"===e.type?i("div",t._l(t.form.inputs[e.key],function(a,n){return i("div",{key:n,staticClass:"pre-commands",staticStyle:{"margin-bottom":"12px"}},[i("bk-compose-form-item",[i("bk-input",{staticStyle:{width:"130px","margin-right":"9px"},attrs:{type:"text",disabled:t.disabled,min:0},model:{value:a.key,callback:function(e){t.$set(a,"key",e)},expression:"item3.key"}}),t._v(" "),i("bk-input",{staticStyle:{width:"130px","margin-right":"9px"},attrs:{type:"text",disabled:t.disabled,min:0},model:{value:a.value,callback:function(e){t.$set(a,"value",e)},expression:"item3.value"}})],1),t._v(" "),!t.disabled&&t.form.inputs[e.key].length>1?i("i",{staticClass:"iconfont icon-changyongtubiao-chahao btn",staticStyle:{"margin-left":"8px"}}):t._e(),t._v(" "),t.disabled?t._e():i("i",{staticClass:"iconfont icon-changyongtubiao-jiahao btn"})],1)}),0):"number"===e.type?i("div",[i("bk-input",{staticStyle:{width:"350px","margin-right":"9px"},attrs:{type:"number",disabled:t.disabled,min:0},model:{value:t.form.inputs[e.key],callback:function(i){t.$set(t.form.inputs,e.key,i)},expression:"form.inputs[item.key]"}})],1):"text"===e.type?i("div",[i("bk-input",{staticStyle:{width:"350px","margin-right":"9px"},attrs:{type:"text",disabled:t.disabled,min:0},model:{value:t.form.inputs[e.key],callback:function(i){t.$set(t.form.inputs,e.key,i)},expression:"form.inputs[item.key]"}})],1):i("div",[i("div",{staticStyle:{color:"red"}},[t._v("ERROR:不支持的类型")])])])}),t._v(" "),i("bk-divider",{staticStyle:{width:"540px",position:"relative",right:"20px","border-color":"#dcdee5"}})],2)],1)},staticRenderFns:[]};var u={components:{jobDialog:i("VU/8")(c,d,!1,function(t){i("Sl67")},"data-v-3e847f92",null).exports},data:function(){var t=[{id:"name",label:"作业名",overflowTooltip:!0,sortable:!1},{id:"template_type",label:"模板类型",overflowTooltip:!0,sortable:!1},{id:"description",label:"作业描述",overflowTooltip:!0,sortable:!1}];return{maxTableHeight:"",auth:{},dialogKey:0,jobFrom:{},setting:{size:"small",fields:t,selectedFields:t.slice(0,8)},tableLoading:!1,tableList:[],runSysList:[{id:"0",name:"标准节点"},{id:"1",name:"自定义节点"},{id:"2",name:"节点模版"}],isDropdownShow:!1,searchFrom:{name:"",template_type:"",description:"",creator:""},pagination:{current:1,count:1,limit:10},selectionList:[],dialogShow:!1}},created:function(){this.handleLoad(),this.auth=this.hasPerm(this.$route.path),this.maxTableHeight=this.$store.state.common.defaultTableHeight-52},methods:{handCreate:function(){this.$router.push({path:"/newjob"})},handleJumpHistory:function(t){this.$store.commit("changeTabActive","jobviewhistory"),this.$router.push({path:"/jobviewhistory",query:{job_id:t.id}})},handleClone:function(t){this.$router.push({path:"/singlejob",query:{type:"clone",job_id:t.id}})},handleSettingChange:function(t){var e=t.fields,i=t.size;this.setting.size=i,this.setting.selectedFields=e},handleOpenDetail:function(t){this.dialogKey+=1,this.jobFrom=t,this.dialogShow=!0},handleSelectAll:function(t){var e=this;t.length>0?this.selectionList=this.selectionList.concat(t):this.tableList.forEach(function(t){e.selectionList=e.selectionList.filter(function(e){return e.id!==t.id})})},handleSelect:function(t,e){var i=this.selectionList.find(function(t){return t.id===e.id});i?this.selectionList=this.selectionList.filter(function(t){return t.id!==i.id}):this.selectionList.push(e)},handleExportFiles:function(){if(0===this.selectionList.length)return this.$cwMessage("至少选择一条数据！","warning");var t=[];this.selectionList.forEach(function(e){t.indexOf(e.id)<0&&t.push(e.id)}),window.open(window.siteUrl+"/export/content/?id="+t.join(","))},handleOpenUpdate:function(t){this.$router.push({path:"/singlejob",query:{type:"update",job_id:t.id}})},handleDelete:function(t){var e,i=this;this.$bkInfo({type:"primary",title:"确认要删除吗？",confirmLoading:!1,confirmFn:(e=l()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:i.tableLoading=!0,i.$api.content.delete(t.id).then(function(t){t.result?(i.$cwMessage("删除成功！","success"),1===i.tableList.length&&1!==i.pagination.current&&(i.pagination.current-=1),i.handleLoad()):i.$cwMessage(t.message,"error"),i.tableLoading=!1});case 2:case"end":return e.stop()}},e,i)})),function(){return e.apply(this,arguments)})})},getRunSysList:function(){var t=this;this.$api.category.list().then(function(e){e.result?t.runSysList=e.data.items:t.$cwMessage(e.message,"error")})},handleReset:function(){this.searchFrom={name:"",station_name:"",category:"",ip:"",process_name:"",creator:""},this.handleLoad()},handleOpenSeniorSearch:function(){this.isDropdownShow=!this.isDropdownShow},handlePageLimitChange:function(t){this.pagination.current=1,this.pagination.limit=t,this.handleLoad()},handleSearch:function(){this.pagination.current=1,this.handleLoad()},handlePageChange:function(t){this.pagination.current=t,this.handleLoad()},defaultCheck:function(){var t=this;this.$nextTick(function(){t.selectionList.forEach(function(e){t.tableList.forEach(function(i){e.id===i.id&&t.$refs.table.toggleRowSelection(i,!0)})})})},handleLoad:function(){var t=this;this.tableLoading=!0,this.$api.content.list(n()({},this.searchFrom,{page:this.pagination.current,page_size:this.pagination.limit})).then(function(e){e.result?(t.pagination.count=e.data.count,t.tableList=e.data.items,t.selectionList.length>0&&t.defaultCheck()):t.$cwMessage(e.message,"error"),t.tableLoading=!1})}}},p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"jobList"}},[i("div",{staticClass:"header"},[i("div",{staticClass:"search-box"},[i("div",{staticClass:"add-in"},[i("bk-button",{staticStyle:{width:"110px","margin-left":"20px"},attrs:{theme:"primary"},on:{click:t.handCreate}},[t._v("新建")])],1),t._v(" "),t.auth.search?i("div",{staticClass:"search-in"},[i("bk-input",{staticStyle:{width:"240px","margin-right":"8px"},attrs:{clearable:"",width:"240px",placeholder:"请输入作业名称","right-icon":"bk-icon icon-search"},on:{"right-icon-click":t.handleSearch,enter:t.handleSearch},model:{value:t.searchFrom.name,callback:function(e){t.$set(t.searchFrom,"name",e)},expression:"searchFrom.name"}}),t._v(" "),i("bk-button",{attrs:{slot:"dropdown-trigger",theme:!0===t.isDropdownShow?"primary":"default","icon-right":!0===t.isDropdownShow?"angle-double-up":"angle-double-down"},on:{click:t.handleOpenSeniorSearch},slot:"dropdown-trigger"},[t._v("高级搜索\n                ")])],1):t._e()]),t._v(" "),t.isDropdownShow?i("div",{staticClass:"senior-search-box"},[i("bk-container",{attrs:{margin:0}},[i("bk-form",{attrs:{"label-width":100}},[i("bk-row",[i("bk-col",{attrs:{span:6}},[i("bk-form-item",{attrs:{label:"作业名称:"}},[i("bk-input",{attrs:{placeholder:"请输入作业名称",clearable:""},model:{value:t.searchFrom.name,callback:function(e){t.$set(t.searchFrom,"name",e)},expression:"searchFrom.name"}})],1)],1),t._v(" "),i("bk-col",{attrs:{span:6}},[i("bk-form-item",{attrs:{label:"模版类型:"}},[i("bk-select",{staticClass:"header-select",staticStyle:{"background-color":"#fff"},attrs:{clearable:!0},model:{value:t.searchFrom.template_type,callback:function(e){t.$set(t.searchFrom,"template_type",e)},expression:"searchFrom.template_type"}},t._l(t.runSysList,function(t,e){return i("bk-option",{key:e,attrs:{id:t.id,name:t.name}})}),1)],1)],1),t._v(" "),i("bk-col",{attrs:{span:6}},[i("bk-form-item",{attrs:{label:"作业描述:"}},[i("bk-input",{attrs:{placeholder:"请输入作业描述",clearable:""},model:{value:t.searchFrom.description,callback:function(e){t.$set(t.searchFrom,"description",e)},expression:"searchFrom.description"}})],1)],1),t._v(" "),i("bk-col",{attrs:{span:6}},[i("bk-form-item",{attrs:{label:"创建人:"}},[i("bk-input",{attrs:{placeholder:"请输入创建人",clearable:""},model:{value:t.searchFrom.creator,callback:function(e){t.$set(t.searchFrom,"creator",e)},expression:"searchFrom.creator"}})],1)],1)],1),t._v(" "),i("bk-row",{staticStyle:{display:"flex","justify-content":"center","margin-top":"16px"}},[i("bk-button",{attrs:{theme:"primary"},on:{click:t.handleSearch}},[t._v("查询")]),t._v(" "),i("bk-button",{staticStyle:{"margin-left":"8px"},on:{click:t.handleReset}},[t._v("重置")]),t._v(" "),i("bk-button",{staticStyle:{"margin-left":"8px"},on:{click:t.handleOpenSeniorSearch}},[t._v("取消")])],1)],1)],1)],1):t._e()]),t._v(" "),i("div",{staticClass:"content"},[i("bk-table",{directives:[{name:"bkloading",rawName:"v-bkloading",value:{isLoading:t.tableLoading,zIndex:10},expression:"{ isLoading: tableLoading, zIndex: 10 }"}],ref:"table",attrs:{data:t.tableList,pagination:t.pagination,"ext-cls":"customTable",size:t.setting.size,"max-height":t.maxTableHeight},on:{"page-change":t.handlePageChange,"page-limit-change":t.handlePageLimitChange,"select-all":t.handleSelectAll,select:t.handleSelect}},[i("bk-table-column",{attrs:{type:"selection",width:"60"}}),t._v(" "),t._l(t.setting.selectedFields,function(e,a){return i("bk-table-column",{key:a,attrs:{label:e.label,prop:e.id,"show-overflow-tooltip":e.overflowTooltip,sortable:e.sortable},scopedSlots:t._u([{key:"default",fn:function(a){return["name"===e.id?i("span",{staticStyle:{color:"#3a84ff",cursor:"pointer"},on:{click:function(e){return t.handleOpenDetail(a.row)}}},[t._v(t._s(a.row[e.id]))]):"template_type"===e.id?i("span",["0"===a.row.template_type?i("span",[t._v("标准节点")]):"2"===a.row.template_type?i("span",[t._v("节点模版")]):"1"===a.row.template_type?i("span",[t._v("自定义节点")]):t._e()]):i("span",[t._v(t._s(""===a.row[e.id]||null===a.row[e.id]?"- -":a.row[e.id]))])]}}],null,!0)})}),t._v(" "),i("bk-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("div",{staticStyle:{display:"flex","align-items":"center"}},[t.auth.modify?i("bk-button",{staticClass:"mr10",attrs:{theme:"primary",text:""},on:{click:function(i){return t.handleOpenUpdate(e.row)}}},[t._v("修改\n                        ")]):t._e(),t._v(" "),t.auth.modify?i("bk-button",{staticClass:"mr10",attrs:{theme:"primary",text:""},on:{click:function(i){return t.handleClone(e.row)}}},[t._v("克隆\n                        ")]):t._e(),t._v(" "),"0"!==e.row.template_type?i("bk-button",{staticClass:"mr10",attrs:{theme:"primary",text:""},on:{click:function(i){return t.handleDelete(e.row)}}},[t._v("删除\n                        ")]):t._e()],1)]}}])}),t._v(" "),i("bk-table-column",{attrs:{type:"setting"}},[i("bk-table-setting-content",{attrs:{fields:t.setting.fields,selected:t.setting.selectedFields,size:t.setting.size},on:{"setting-change":t.handleSettingChange}})],1)],2)],1),t._v(" "),i("div",[i("bk-sideslider",{attrs:{"is-show":t.dialogShow,"quick-close":!0,title:"作业详情",width:500,"ext-cls":"custom-sidelider"},on:{"update:isShow":function(e){t.dialogShow=e},"update:is-show":function(e){t.dialogShow=e}}},[i("div",{staticStyle:{height:"100%"},attrs:{slot:"content"},slot:"content"},[i("job-dialog",{key:t.dialogKey,attrs:{"job-from":t.jobFrom}})],1)])],1)])},staticRenderFns:[]};var m=i("VU/8")(u,p,!1,function(t){i("Rf7H"),i("u3eY")},"data-v-93c67bfa",null);e.default=m.exports},Rf7H:function(t,e){},Sl67:function(t,e){},u3eY:function(t,e){}});