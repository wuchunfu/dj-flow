webpackJsonp([33],{"b4+P":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("Xxa5"),n=a.n(i),r=a("exGp"),s=a.n(r),o={data:function(){return{maxTableHeight:"",auth:{},selectionList:[],tableList:[],pagination:{current:1,count:1,limit:10},tableLoading:!1,searchForm:{name:"",create_time:["",""],creator:""},shortcuts:[{text:"最近一周",value:function(){var t=new Date,e=new Date;return e.setTime(e.getTime()-6048e5),[e,t]}},{text:"最近一个月",value:function(){var t=new Date,e=new Date;return e.setTime(e.getTime()-2592e6),[e,t]}},{text:"最近三个月",value:function(){var t=new Date,e=new Date;return e.setTime(e.getTime()-7776e6),[e,t]}}],form:{description:"",name:"",date:""}}},created:function(){this.handleLoad(),this.auth=this.hasPerm(this.$route.path),this.maxTableHeight=this.$store.state.common.defaultTableHeight-52},methods:{handleReset:function(){this.searchForm={name:"",create_time:["",""],creator:""}},calendarDetail:function(t){this.$router.push({path:"/addcalendarmgmt",query:{type:"detail",name:t.name}})},calendarUpdate:function(t){this.$router.push({path:"/addcalendarmgmt",query:{type:"update",id:t.id,name:t.name}})},calendarDel:function(t){var e,a=this;this.$bkInfo({type:"primary",title:"确认要删除吗？",confirmLoading:!1,confirmFn:(e=s()(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.$api.calendar.delete(t.id).then(function(t){t.result?(a.$bkMessage({message:"删除成功",theme:"success"}),1===a.tableList.length&&1!==a.pagination.current&&(a.pagination.current-=1),a.handleLoad()):a.$bkMessage({message:t.message,theme:"error"})});case 1:case"end":return e.stop()}},e,a)})),function(){return e.apply(this,arguments)})})},createCalendar:function(){this.$router.push({path:"/addcalendarmgmt",query:{type:"add"}})},handleCreateTimeChange:function(t){this.searchForm.create_time=t},handleExportFiles:function(){if(0===this.selectionList.length)return this.$cwMessage("至少选择一条数据！","warning");var t=[];this.selectionList.forEach(function(e){t.indexOf(e.id)<0&&t.push(e.id)}),window.open(window.siteUrl+"/export/calendar/?id="+t.join(","))},handleSelectAll:function(t){var e=this;t.length>0?this.selectionList=this.selectionList.concat(t):this.tableList.forEach(function(t){e.selectionList=e.selectionList.filter(function(e){return e.id!==t.id})})},handleSelect:function(t,e){var a=this.selectionList.find(function(t){return t.id===e.id});a?this.selectionList=this.selectionList.filter(function(t){return t.id!==a.id}):this.selectionList.push(e)},handleSearch:function(){this.pagination.current=1,this.handleLoad()},handlePageLimitChange:function(t){this.pagination.current=1,this.pagination.limit=t,this.handleLoad()},handlePageChange:function(t){this.pagination.current=t,this.handleLoad()},defaultCheck:function(){var t=this;this.$nextTick(function(){t.selectionList.forEach(function(e){t.tableList.forEach(function(a){e.id===a.id&&t.$refs.table.toggleRowSelection(a,!0)})})})},handleLoad:function(){var t=this;this.tableLoading=!0;var e={name:this.searchForm.name,creator:this.searchForm.creator,create_time_gte:this.searchForm.create_time[0],create_time_lte:this.searchForm.create_time[1],page:this.pagination.current,page_size:this.pagination.limit};this.$api.calendar.list(e).then(function(e){e.result?(t.tableList=e.data.items,t.pagination.count=e.data.count,t.selectionList.length>0&&t.defaultCheck()):t.$cwMessage(e.message,"error"),t.tableLoading=!1})}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"calendarMgmt"}},[a("div",{staticClass:"header",staticStyle:{display:"flex","justify-content":"space-between"}},[a("div",{staticStyle:{float:"left",width:"20%"}},[t.auth.create?a("bk-button",{staticStyle:{"margin-right":"8px"},attrs:{theme:"primary"},on:{click:t.createCalendar}},[t._v("新增日历")]):t._e(),t._v(" "),a("bk-button",{on:{click:t.handleExportFiles}},[t._v("导出")])],1),t._v(" "),t.auth.search?a("div",{staticStyle:{float:"right",display:"flex"}},[a("div",{staticClass:"search-item"},[a("span",{staticStyle:{display:"inline-block","flex-basis":"60px"}},[t._v("日历名称")]),t._v(" "),a("bk-input",{staticStyle:{flex:"1","margin-right":"16px"},attrs:{placeholder:"请输入日历名称",clearable:""},model:{value:t.searchForm.name,callback:function(e){t.$set(t.searchForm,"name",e)},expression:"searchForm.name"}})],1),t._v(" "),a("div",{staticClass:"search-item"},[a("span",{staticStyle:{display:"inline-block","flex-basis":"50px"}},[t._v("创建人")]),t._v(" "),a("bk-input",{staticStyle:{flex:"1","margin-right":"16px"},attrs:{placeholder:"请输入创建人",clearable:""},model:{value:t.searchForm.creator,callback:function(e){t.$set(t.searchForm,"creator",e)},expression:"searchForm.creator"}})],1),t._v(" "),a("div",{staticClass:"search-item"},[a("span",{staticStyle:{display:"inline-block","flex-basis":"60px"}},[t._v("创建时间")]),t._v(" "),a("bk-date-picker",{staticStyle:{flex:"1","margin-right":"16px"},attrs:{placeholder:"选择日期时间",type:"datetimerange",format:"yyyy-MM-dd HH:mm:ss",transfer:!0,shortcuts:t.shortcuts,value:t.searchForm.create_time,title:t.searchForm.create_time},on:{change:t.handleCreateTimeChange}})],1),t._v(" "),a("div",{staticClass:"search-item"},[a("bk-button",{staticStyle:{"margin-right":"8px"},attrs:{theme:"primary"},on:{click:t.handleSearch}},[t._v("搜索")]),t._v(" "),a("bk-button",{on:{click:t.handleReset}},[t._v("重置")])],1)]):t._e()]),t._v(" "),a("div",{staticStyle:{clear:"both"}}),t._v(" "),a("div",{staticClass:"content"},[a("bk-table",{directives:[{name:"bkloading",rawName:"v-bkloading",value:{isLoading:t.tableLoading,zIndex:10},expression:"{ isLoading: tableLoading, zIndex: 10 }"}],ref:"table",attrs:{data:t.tableList,pagination:t.pagination,"ext-cls":"customTable","max-height":t.maxTableHeight},on:{"page-change":t.handlePageChange,"page-limit-change":t.handlePageLimitChange,"select-all":t.handleSelectAll,select:t.handleSelect}},[a("bk-table-column",{attrs:{type:"selection",width:"60"}}),t._v(" "),a("bk-table-column",{attrs:{label:"日历名",prop:"name","show-overflow-tooltip":!0},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{color:"#3a84ff",cursor:"pointer"},on:{click:function(a){return t.calendarDetail(e.row)}}},[t._v(t._s(e.row.name))])]}}])}),t._v(" "),a("bk-table-column",{attrs:{label:"日历描述",prop:"description",sortable:""}}),t._v(" "),a("bk-table-column",{attrs:{label:"关联作业流数",prop:"total_process_num","show-overflow-tooltip":!0}}),t._v(" "),a("bk-table-column",{attrs:{label:"创建时间",prop:"create_time","show-overflow-tooltip":!0,sortable:""}}),t._v(" "),a("bk-table-column",{attrs:{label:"创建人",prop:"creator","show-overflow-tooltip":!0}}),t._v(" "),a("bk-table-column",{attrs:{label:"上次修改时间",prop:"edit_time","show-overflow-tooltip":!0,sortable:""}}),t._v(" "),a("bk-table-column",{attrs:{label:"修改人",prop:"editor","show-overflow-tooltip":!0},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(""!==e.row.editor&&null!==e.row.editor?e.row.editor:"- -"))])]}}])}),t._v(" "),a("bk-table-column",{attrs:{label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.auth.modify?a("bk-button",{staticClass:"mr10",attrs:{theme:"primary",text:""},on:{click:function(a){return t.calendarUpdate(e.row)}}},[t._v("修改")]):t._e(),t._v(" "),t.auth.del?a("bk-button",{staticClass:"mr10",attrs:{theme:"primary",text:""},on:{click:function(a){return t.calendarDel(e.row)}}},[t._v("删除")]):t._e()]}}])})],1)],1)])},staticRenderFns:[]};var c=a("VU/8")(o,l,!1,function(t){a("qDB3")},"data-v-3467ceba",null);e.default=c.exports},qDB3:function(t,e){}});