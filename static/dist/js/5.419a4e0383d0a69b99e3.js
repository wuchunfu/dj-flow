webpackJsonp([5],{"+1cx":function(t,e,n){"use strict";var i="_erd";function o(t){return t[i]}t.exports={initState:function(t){return t[i]={},o(t)},getState:o,cleanState:function(t){delete t[i]}}},"601f":function(t,e,n){"use strict";t.exports=function(t){var e=t.idGenerator,n=t.stateHandler.getState;return{get:function(t){var e=n(t);return e&&void 0!==e.id?e.id:null},set:function(t){var i=n(t);if(!i)throw new Error("setId required the element to have a resize detection state.");var o=e.generate();return i.id=o,o}}}},CGCf:function(t,e,n){"use strict";t.exports=function(){var t=1;return{generate:function(){return t++}}}},GpqH:function(t,e,n){"use strict";var i=n("LBxF");function o(){var t={},e=0,n=0,i=0;return{add:function(o,a){a||(a=o,o=0),o>n?n=o:o<i&&(i=o),t[o]||(t[o]=[]),t[o].push(a),e++},process:function(){for(var e=i;e<=n;e++)for(var o=t[e],a=0;a<o.length;a++)(0,o[a])()},size:function(){return e}}}t.exports=function(t){var e=(t=t||{}).reporter,n=i.getOption(t,"async",!0),a=i.getOption(t,"auto",!0);a&&!n&&(e&&e.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true."),n=!0);var r,s=o(),l=!1;function d(){for(l=!0;s.size();){var t=s;s=o(),t.process()}l=!1}function c(){var t;t=d,r=setTimeout(t,0)}return{add:function(t,e){!l&&a&&n&&0===s.size()&&c(),s.add(t,e)},force:function(t){l||(void 0===t&&(t=n),r&&(clearTimeout(r),r=null),t?c():d())}}}},LBxF:function(t,e,n){"use strict";(t.exports={}).getOption=function(t,e,n){var i=t[e];if((void 0===i||null===i)&&void 0!==n)return n;return i}},Og1S:function(t,e,n){"use strict";t.exports=function(t){function e(){}var n={log:e,warn:e,error:e};if(!t&&window.console){var i=function(t,e){t[e]=function(){var t=console[e];if(t.apply)t.apply(console,arguments);else for(var n=0;n<arguments.length;n++)t(arguments[n])}};i(n,"log"),i(n,"warn"),i(n,"error")}return n}},S1QW:function(t,e,n){"use strict";var i=n("dbB1").forEach;t.exports=function(t){var e=(t=t||{}).reporter,n=t.batchProcessor,o=t.stateHandler.getState,a=(t.stateHandler.hasState,t.idHandler);if(!n)throw new Error("Missing required dependency: batchProcessor");if(!e)throw new Error("Missing required dependency: reporter.");var r=function(){var t=document.createElement("div");t.style.cssText=c(["position: absolute","width: 1000px","height: 1000px","visibility: hidden","margin: 0","padding: 0"]);var e=document.createElement("div");e.style.cssText=c(["position: absolute","width: 500px","height: 500px","overflow: scroll","visibility: none","top: -1500px","left: -1500px","visibility: hidden","margin: 0","padding: 0"]),e.appendChild(t),document.body.insertBefore(e,document.body.firstChild);var n=500-e.clientWidth,i=500-e.clientHeight;return document.body.removeChild(e),{width:n,height:i}}(),s="erd_scroll_detection_scrollbar_style",l="erd_scroll_detection_container";function d(t){!function(t,e,n){if(!t.getElementById(e)){var i=n+"_animation",o=n+"_animation_active",a="/* Created by the element-resize-detector library. */\n";a+="."+n+" > div::-webkit-scrollbar { "+c(["display: none"])+" }\n\n",a+="."+o+" { "+c(["-webkit-animation-duration: 0.1s","animation-duration: 0.1s","-webkit-animation-name: "+i,"animation-name: "+i])+" }\n",a+="@-webkit-keyframes "+i+" { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n",function(n,i){i=i||function(e){t.head.appendChild(e)};var o=t.createElement("style");o.innerHTML=n,o.id=e,i(o)}(a+="@keyframes "+i+" { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }")}}(t,s,l)}function c(e){var n=t.important?" !important; ":"; ";return(e.join(n)+n).trim()}function u(t,n,i){if(t.addEventListener)t.addEventListener(n,i);else{if(!t.attachEvent)return e.error("[scroll] Don't know how to add event listeners.");t.attachEvent("on"+n,i)}}function h(t,n,i){if(t.removeEventListener)t.removeEventListener(n,i);else{if(!t.detachEvent)return e.error("[scroll] Don't know how to remove event listeners.");t.detachEvent("on"+n,i)}}function f(t){return o(t).container.childNodes[0].childNodes[0].childNodes[0]}function g(t){return o(t).container.childNodes[0].childNodes[0].childNodes[1]}return d(window.document),{makeDetectable:function(t,s,d){function h(){if(t.debug){var n=Array.prototype.slice.call(arguments);if(n.unshift(a.get(s),"Scroll: "),e.log.apply)e.log.apply(null,n);else for(var i=0;i<n.length;i++)e.log(n[i])}}function b(t){var e=o(t).container.childNodes[0],n=window.getComputedStyle(e);return!n.width||-1===n.width.indexOf("px")}function m(){var t=window.getComputedStyle(s),e={};return e.position=t.position,e.width=s.offsetWidth,e.height=s.offsetHeight,e.top=t.top,e.right=t.right,e.bottom=t.bottom,e.left=t.left,e.widthCSS=t.width,e.heightCSS=t.height,e}function v(){if(h("storeStyle invoked."),o(s)){var t=m();o(s).style=t}else h("Aborting because element has been uninstalled")}function p(t,e,n){o(t).lastWidth=e,o(t).lastHeight=n}function y(){return 2*r.width+1}function w(){return 2*r.height+1}function x(t){return t+10+y()}function _(t){return t+10+w()}function k(t,e,n){var i=f(t),o=g(t),a=x(e),r=_(n),s=function(t){return 2*t+y()}(e),l=function(t){return 2*t+w()}(n);i.scrollLeft=a,i.scrollTop=r,o.scrollLeft=s,o.scrollTop=l}function C(){var t=o(s).container;if(!t){(t=document.createElement("div")).className=l,t.style.cssText=c(["visibility: hidden","display: inline","width: 0px","height: 0px","z-index: -1","overflow: hidden","margin: 0","padding: 0"]),o(s).container=t,function(t){t.className+=" "+l+"_animation_active"}(t),s.appendChild(t);var e=function(){o(s).onRendered&&o(s).onRendered()};u(t,"animationstart",e),o(s).onAnimationStart=e}return t}function S(){if(h("Injecting elements"),o(s)){!function(){var n=o(s).style;if("static"===n.position){s.style.setProperty("position","relative",t.important?"important":"");var i=function(t,e,n,i){var o=n[i];"auto"!==o&&"0"!==function(t){return t.replace(/[^-\d\.]/g,"")}(o)&&(t.warn("An element that is positioned static has style."+i+"="+o+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+i+" will be set to 0. Element: ",e),e.style[i]=0)};i(e,s,n,"top"),i(e,s,n,"right"),i(e,s,n,"bottom"),i(e,s,n,"left")}}();var n=o(s).container;n||(n=C());var i,a,d,f,g=r.width,b=r.height,m=c(["position: absolute","flex: none","overflow: hidden","z-index: -1","visibility: hidden","width: 100%","height: 100%","left: 0px","top: 0px"]),v=c(["position: absolute","flex: none","overflow: hidden","z-index: -1","visibility: hidden"].concat((a=-(1+b),d=-b,f=-g,i=(i=-(1+g))?i+"px":"0",a=a?a+"px":"0",d=d?d+"px":"0",["left: "+i,"top: "+a,"right: "+(f=f?f+"px":"0"),"bottom: "+d]))),p=c(["position: absolute","flex: none","overflow: scroll","z-index: -1","visibility: hidden","width: 100%","height: 100%"]),y=c(["position: absolute","flex: none","overflow: scroll","z-index: -1","visibility: hidden","width: 100%","height: 100%"]),w=c(["position: absolute","left: 0","top: 0"]),x=c(["position: absolute","width: 200%","height: 200%"]),_=document.createElement("div"),k=document.createElement("div"),S=document.createElement("div"),A=document.createElement("div"),L=document.createElement("div"),E=document.createElement("div");_.dir="ltr",_.style.cssText=m,_.className=l,k.className=l,k.style.cssText=v,S.style.cssText=p,A.style.cssText=w,L.style.cssText=y,E.style.cssText=x,S.appendChild(A),L.appendChild(E),k.appendChild(S),k.appendChild(L),_.appendChild(k),n.appendChild(_),u(S,"scroll",I),u(L,"scroll",j),o(s).onExpandScroll=I,o(s).onShrinkScroll=j}else h("Aborting because element has been uninstalled");function I(){var t=o(s);t&&t.onExpand?t.onExpand():h("Aborting expand scroll handler: element has been uninstalled")}function j(){var t=o(s);t&&t.onShrink?t.onShrink():h("Aborting shrink scroll handler: element has been uninstalled")}}function A(){function r(e,n,i){var o=function(t){return f(t).childNodes[0]}(e),a=x(n),r=_(i);o.style.setProperty("width",a+"px",t.important?"important":""),o.style.setProperty("height",r+"px",t.important?"important":"")}function l(i){var l=s.offsetWidth,c=s.offsetHeight,u=l!==o(s).lastWidth||c!==o(s).lastHeight;h("Storing current size",l,c),p(s,l,c),n.add(0,function(){if(u)if(o(s))if(d()){if(t.debug){var n=s.offsetWidth,i=s.offsetHeight;n===l&&i===c||e.warn(a.get(s),"Scroll: Size changed before updating detector elements.")}r(s,l,c)}else h("Aborting because element container has not been initialized");else h("Aborting because element has been uninstalled")}),n.add(1,function(){o(s)?d()?k(s,l,c):h("Aborting because element container has not been initialized"):h("Aborting because element has been uninstalled")}),u&&i&&n.add(2,function(){o(s)?d()?i():h("Aborting because element container has not been initialized"):h("Aborting because element has been uninstalled")})}function d(){return!!o(s).container}function c(){h("notifyListenersIfNeeded invoked");var t=o(s);return void 0===o(s).lastNotifiedWidth&&t.lastWidth===t.startSize.width&&t.lastHeight===t.startSize.height?h("Not notifying: Size is the same as the start size, and there has been no notification yet."):t.lastWidth===t.lastNotifiedWidth&&t.lastHeight===t.lastNotifiedHeight?h("Not notifying: Size already notified"):(h("Current size not notified, notifying..."),t.lastNotifiedWidth=t.lastWidth,t.lastNotifiedHeight=t.lastHeight,void i(o(s).listeners,function(t){t(s)}))}function u(){h("Scroll detected."),b(s)?h("Scroll event fired while unrendered. Ignoring..."):l(c)}if(h("registerListenersAndPositionElements invoked."),o(s)){o(s).onRendered=function(){if(h("startanimation triggered."),b(s))h("Ignoring since element is still unrendered...");else{h("Element rendered.");var t=f(s),e=g(s);0!==t.scrollLeft&&0!==t.scrollTop&&0!==e.scrollLeft&&0!==e.scrollTop||(h("Scrollbars out of sync. Updating detector elements..."),l(c))}},o(s).onExpand=u,o(s).onShrink=u;var m=o(s).style;r(s,m.width,m.height)}else h("Aborting because element has been uninstalled")}function L(){if(h("finalizeDomMutation invoked."),o(s)){var t=o(s).style;p(s,t.width,t.height),k(s,t.width,t.height)}else h("Aborting because element has been uninstalled")}function E(){d(s)}function I(){var t;h("Installing..."),o(s).listeners=[],t=m(),o(s).startSize={width:t.width,height:t.height},h("Element start size",o(s).startSize),n.add(0,v),n.add(1,S),n.add(2,A),n.add(3,L),n.add(4,E)}d||(d=s,s=t,t=null),t=t||{},h("Making detectable..."),function(t){return!function(t){var e=t.getRootNode&&t.getRootNode().contains(t);return t===t.ownerDocument.body||t.ownerDocument.body.contains(t)||e}(t)||null===window.getComputedStyle(t)}(s)?(h("Element is detached"),C(),h("Waiting until element is attached..."),o(s).onRendered=function(){h("Element is now attached"),I()}):I()},addListener:function(t,e){if(!o(t).listeners.push)throw new Error("Cannot add listener to an element that is not detectable.");o(t).listeners.push(e)},uninstall:function(t){var e=o(t);e&&(e.onExpandScroll&&h(f(t),"scroll",e.onExpandScroll),e.onShrinkScroll&&h(g(t),"scroll",e.onShrinkScroll),e.onAnimationStart&&h(e.container,"animationstart",e.onAnimationStart),e.container&&t.removeChild(e.container))},initDocument:d}}},SKY5:function(t,e,n){"use strict";var i=n("Saiw");t.exports=function(t){var e=(t=t||{}).reporter,n=t.batchProcessor,o=t.stateHandler.getState;if(!e)throw new Error("Missing required dependency: reporter.");function a(e){var n=t.important?" !important; ":"; ";return(e.join(n)+n).trim()}function r(t){return o(t).object}return{makeDetectable:function(t,r,s){s||(s=r,r=t,t=null),(t=t||{}).debug,i.isIE(8)?s(r):function(r,s){var l=a(["display: block","position: absolute","top: 0","left: 0","width: 100%","height: 100%","border: none","padding: 0","margin: 0","opacity: 0","z-index: -1000","pointer-events: none"]),d=!1,c=window.getComputedStyle(r),u=r.offsetWidth,h=r.offsetHeight;function f(){function n(){if("static"===c.position){r.style.setProperty("position","relative",t.important?"important":"");var n=function(e,n,i,o){var a=i[o];"auto"!==a&&"0"!==function(t){return t.replace(/[^-\d\.]/g,"")}(a)&&(e.warn("An element that is positioned static has style."+o+"="+a+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+o+" will be set to 0. Element: ",n),n.style.setProperty(o,"0",t.important?"important":""))};n(e,r,c,"top"),n(e,r,c,"right"),n(e,r,c,"bottom"),n(e,r,c,"left")}}""!==c.position&&(n(),d=!0);var a=document.createElement("object");a.style.cssText=l,a.tabIndex=-1,a.type="text/html",a.setAttribute("aria-hidden","true"),a.onload=function(){d||n(),function t(e,n){if(!e.contentDocument){var i=o(e);return i.checkForObjectDocumentTimeoutId&&window.clearTimeout(i.checkForObjectDocumentTimeoutId),void(i.checkForObjectDocumentTimeoutId=setTimeout(function(){i.checkForObjectDocumentTimeoutId=0,t(e,n)},100))}n(e.contentDocument)}(this,function(t){s(r)})},i.isIE()||(a.data="about:blank"),o(r)&&(r.appendChild(a),o(r).object=a,i.isIE()&&(a.data="about:blank"))}o(r).startSize={width:u,height:h},n?n.add(f):f()}(r,s)},addListener:function(t,e){function n(){e(t)}if(i.isIE(8))o(t).object={proxy:n},t.attachEvent("onresize",n);else{var a=r(t);if(!a)throw new Error("Element is not detectable by this strategy.");a.contentDocument.defaultView.addEventListener("resize",n)}},uninstall:function(t){if(o(t)){var e=r(t);e&&(i.isIE(8)?t.detachEvent("onresize",e.proxy):t.removeChild(e),o(t).checkForObjectDocumentTimeoutId&&window.clearTimeout(o(t).checkForObjectDocumentTimeoutId),delete o(t).object)}}}}},Saiw:function(t,e,n){"use strict";var i=t.exports={};i.isIE=function(t){return(-1!==(e=navigator.userAgent.toLowerCase()).indexOf("msie")||-1!==e.indexOf("trident")||-1!==e.indexOf(" edge/"))&&(!t||t===function(){var t=3,e=document.createElement("div"),n=e.getElementsByTagName("i");do{e.innerHTML="\x3c!--[if gt IE "+ ++t+"]><i></i><![endif]--\x3e"}while(n[0]);return t>4?t:void 0}());var e},i.isLegacyOpera=function(){return!!window.opera}},dUh9:function(t,e,n){"use strict";t.exports=function(t){var e={};function n(n){var i=t.get(n);return void 0===i?[]:e[i]||[]}return{get:n,add:function(n,i){var o=t.get(n);e[o]||(e[o]=[]),e[o].push(i)},removeListener:function(t,e){for(var i=n(t),o=0,a=i.length;o<a;++o)if(i[o]===e){i.splice(o,1);break}},removeAllListeners:function(t){var e=n(t);e&&(e.length=0)}}}},dbB1:function(t,e,n){"use strict";(t.exports={}).forEach=function(t,e){for(var n=0;n<t.length;n++){var i=e(t[n]);if(i)return i}}},ovF8:function(t,e){},p1oW:function(t,e,n){"use strict";t.exports=function(t){var e=t.stateHandler.getState;return{isDetectable:function(t){var n=e(t);return n&&!!n.isDetectable},markAsDetectable:function(t){e(t).isDetectable=!0},isBusy:function(t){return!!e(t).busy},markBusy:function(t,n){e(t).busy=!!n}}}},uk2G:function(t,e,n){"use strict";var i=n("dbB1").forEach,o=n("p1oW"),a=n("dUh9"),r=n("CGCf"),s=n("601f"),l=n("Og1S"),d=n("Saiw"),c=n("GpqH"),u=n("+1cx"),h=n("SKY5"),f=n("S1QW");function g(t){return Array.isArray(t)||void 0!==t.length}function b(t){if(Array.isArray(t))return t;var e=[];return i(t,function(t){e.push(t)}),e}function m(t){return t&&1===t.nodeType}function v(t,e,n){var i=t[e];return void 0!==i&&null!==i||void 0===n?i:n}t.exports=function(t){var e;if((t=t||{}).idHandler)e={get:function(e){return t.idHandler.get(e,!0)},set:t.idHandler.set};else{var n=r(),p=s({idGenerator:n,stateHandler:u});e=p}var y=t.reporter;y||(y=l(!1===y));var w=v(t,"batchProcessor",c({reporter:y})),x={};x.callOnAdd=!!v(t,"callOnAdd",!0),x.debug=!!v(t,"debug",!1);var _,k=a(e),C=o({stateHandler:u}),S=v(t,"strategy","object"),A=v(t,"important",!1),L={reporter:y,batchProcessor:w,stateHandler:u,idHandler:e,important:A};if("scroll"===S&&(d.isLegacyOpera()?(y.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy."),S="object"):d.isIE(9)&&(y.warn("Scroll strategy is not supported on IE9. Changing to object strategy."),S="object")),"scroll"===S)_=f(L);else{if("object"!==S)throw new Error("Invalid strategy name: "+S);_=h(L)}var E={};return{listenTo:function(t,n,o){function a(t){var e=k.get(t);i(e,function(e){e(t)})}function r(t,e,n){k.add(e,n),t&&n(e)}if(o||(o=n,n=t,t={}),!n)throw new Error("At least one element required.");if(!o)throw new Error("Listener required.");if(m(n))n=[n];else{if(!g(n))return y.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");n=b(n)}var s=0,l=v(t,"callOnAdd",x.callOnAdd),d=v(t,"onReady",function(){}),c=v(t,"debug",x.debug);i(n,function(t){u.getState(t)||(u.initState(t),e.set(t));var h=e.get(t);if(c&&y.log("Attaching listener to element",h,t),!C.isDetectable(t))return c&&y.log(h,"Not detectable."),C.isBusy(t)?(c&&y.log(h,"System busy making it detectable"),r(l,t,o),E[h]=E[h]||[],void E[h].push(function(){++s===n.length&&d()})):(c&&y.log(h,"Making detectable..."),C.markBusy(t,!0),_.makeDetectable({debug:c,important:A},t,function(t){if(c&&y.log(h,"onElementDetectable"),u.getState(t)){C.markAsDetectable(t),C.markBusy(t,!1),_.addListener(t,a),r(l,t,o);var e=u.getState(t);if(e&&e.startSize){var f=t.offsetWidth,g=t.offsetHeight;e.startSize.width===f&&e.startSize.height===g||a(t)}E[h]&&i(E[h],function(t){t()})}else c&&y.log(h,"Element uninstalled before being detectable.");delete E[h],++s===n.length&&d()}));c&&y.log(h,"Already detecable, adding listener."),r(l,t,o),s++}),s===n.length&&d()},removeListener:k.removeListener,removeAllListeners:k.removeAllListeners,uninstall:function(t){if(!t)return y.error("At least one element is required.");if(m(t))t=[t];else{if(!g(t))return y.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");t=b(t)}i(t,function(t){k.removeAllListeners(t),_.uninstall(t),u.cleanState(t)})},initDocument:function(t){_.initDocument&&_.initDocument(t)}}}},zKIK:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("s0MJ"),o={data:function(){return{statusList1:[{tag:"pony审批通过，并附“同意”",content:'<span class="timeline-update-time">2020-03-06 11:23</span>',color:"green",filled:!0},{tag:"tony审批通过，并附“同意”",content:'<span class="timeline-update-time">2020-03-07 10:20</span>',color:"green",filled:!0},{tag:"allen正在审批",color:"green",filled:!0,content:'<span class="timeline-update-time">2020-03-06 11:23</span>'},{tag:"等待mark审批",color:"green",filled:!0,content:'<span class="timeline-update-time">2020-03-06 11:23</span>'},{tag:"等待mark审批",color:"green",filled:!0,content:'<span class="timeline-update-time">2020-03-06 11:23</span>'}],overViewLoading:!1,todayJobLoading:!1,top5AgentLoading:!1,weeklyJobLoading:!1,jobDynamicLoading:!1,jobDynamicState:[],weeklyJobChart:null,top5AgentChart:null,todayJobChart:null,weeklyJob:{weekly_time:[],weekly_job_num:[],weekly_error_job_num:[]},todayJob:{finished_job_num:[],error_job_num:[],unfinished_job_num:[],time_line:[]},top5Agent:{top5_agent_name:[],top5_agent_num:[]},overview_data:{today_wait_job_num:0,today_job_num:0,today_job_flow_num:0,today_error_job_num:0,jobDynamicState:[]},eventSource:null}},computed:{weeklyJobId:function(){return"weeklyJobId"+this._uid},top5AgentId:function(){return"top5AgentId"+this._uid},top5AgentId2:function(){return"top5AgentId2"+this._uid},top5AgentId3:function(){return"top5AgentId3"+this._uid},todayJobId:function(){return"todayJobId"+this._uid}},mounted:function(){this.getWeeklyJob(),this.getTop5Agent(),this.getTodayJob(),this.getJobtTrend();var t=this,e=n("uk2G")();this.$nextTick(function(){e.listenTo(document.getElementById("home"),function(e){t.weeklyJobChart.resize(),t.top5AgentChart.resize(),t.top5AgentChart2.resize(),t.top5AgentChart3.resize(),t.todayJobChart.resize()})})},created:function(){this.getOverViewData()},beforeDestroy:function(){this.eventSource&&(this.eventSource.close(),this.eventSource=null)},methods:{handleCheckMore:function(){this.$router.push({path:"/log",query:{object_repr:"作业",log:"fromHome"}})},getOverViewData:function(){var t=this;this.overViewLoading=!0,this.$api.home.overview().then(function(e){e.result?t.overview_data=e.data:t.$cwMessage(e.message,"error"),t.overViewLoading=!1})},getWeeklyJob:function(){var t=this;this.weeklyJobLoading=!0,this.weeklyJobChart=this.$echarts.init(document.getElementById(this.weeklyJobId));var e={color:["#0b254f","#FF5656"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},title:{text:"近七天作业执行情况"},legend:{x:"15",y:"top",top:"13%",data:["作业总数","异常作业数"],textStyle:{color:"rgba(0, 0, 0, 0.45)"}},grid:{height:210,width:"98%",left:"20px",right:"0px",bottom:"40px",containLabel:!0},toolbox:{feature:{saveAsImage:{show:!0,emphasis:{iconStyle:{textFill:"#fff"}}}}},calculable:!0,xAxis:[{type:"category",axisTick:{show:!1},axisLine:{lineStyle:{color:"#DCDEE5"}},axisLabel:{color:"rgba(0, 0, 0, 0.45)"},data:this.weeklyJob.weekly_time}],yAxis:[{type:"value",axisLine:{show:!1},axisTick:{show:!1},splitLine:{lineStyle:{color:"#F0F1F5"}},min:0,minInterval:1,axisLabel:{formatter:"{value}",color:"rgba(0, 0, 0, 0.45)"}}],series:[{name:"作业总数",type:"bar",barWidth:24,label:"1222",data:this.weeklyJob.weekly_job_num},{name:"异常作业数",type:"bar",barGap:"20%",barWidth:24,label:"2333",data:this.weeklyJob.weekly_error_job_num}]};this.$api.home.weekly_job().then(function(n){n.result?(t.weeklyJob=n.data,e.xAxis[0].data=t.weeklyJob.weekly_time,e.series[0].data=t.weeklyJob.weekly_job_num,e.series[1].data=t.weeklyJob.weekly_error_job_num,t.drawline(t.weeklyJobChart,e)):(t.$cwMessage(n.message,"error"),t.drawline(t.weeklyJobChart,e)),t.weeklyJobLoading=!1})},getTop5Agent:function(){var t=this;this.top5AgentChart=this.$echarts.init(document.getElementById(this.top5AgentId)),this.top5AgentChart2=this.$echarts.init(document.getElementById(this.top5AgentId2)),this.top5AgentChart3=this.$echarts.init(document.getElementById(this.top5AgentId3));var e={series:[{type:"gauge",progress:{show:!0,width:10,itemStyle:{color:"#0b254f"}},axisLine:{lineStyle:{width:10}},axisTick:{show:!1},splitLine:{length:10,lineStyle:{width:2,color:"#999"}},axisLabel:{distance:25,color:"#999",fontSize:12},anchor:{show:!0,showAbove:!0,size:13,itemStyle:{borderWidth:6}},title:{show:!0},detail:{valueAnimation:!0,fontSize:40,offsetCenter:[0,"70%"]},pointer:{itemStyle:{}},data:[{value:66,name:"CPU占用率"}]}]},n=Object(i.a)(e),o=Object(i.a)(e),a=Object(i.a)(e);if(n.series[0].data=[{value:0,name:"CPU占用率"}],o.series[0].data=[{value:0,name:"内存占用率"}],a.series[0].data=[{value:0,name:"磁盘占用率"}],t.top5AgentChart.setOption(n),t.top5AgentChart2.setOption(o),t.top5AgentChart3.setOption(a),"undefined"!=typeof EventSource){var r=new EventSource("http://127.0.0.1:8001/stream/");this.eventSource=r,r.onmessage=function(e){console.log(e.data.split(","));var n=e.data.split(",");t.top5AgentChart.setOption({series:{data:[{name:"CPU占用率",value:n[0]}]}}),t.top5AgentChart2.setOption({series:{data:[{name:"内存占用率",value:n[1]}]}}),t.top5AgentChart3.setOption({series:{data:[{name:"磁盘占用率",value:n[2]}]}})}}else console.log("error")},getTodayJob:function(){var t=this;this.todayJobLoading=!0,this.todayJobChart=this.$echarts.init(document.getElementById(this.todayJobId));var e={color:["#0b254f","#8ba9c9","#163c6b"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},title:{text:"当日作业执行情况"},grid:{height:190,width:"100%",left:"40px",bottom:"60px"},toolbox:{feature:{saveAsImage:{show:!0,emphasis:{iconStyle:{textFill:"#fff"}}}}},legend:{x:"10",y:"top",top:"15%",data:["已完成的作业总数","待完成的作业总数","异常作业总数"],textStyle:{color:"rgba(0, 0, 0, 0.45)"}},xAxis:[{type:"category",axisTick:{show:!1},axisLine:{lineStyle:{color:"#DCDEE5"}},axisLabel:{color:"rgba(0, 0, 0, 0.45)"},data:this.todayJob.time_line}],yAxis:[{type:"value",axisLine:{show:!1},axisTick:{show:!1},splitLine:{lineStyle:{color:"#F0F1F5"}},min:0,axisLabel:{formatter:"{value}",color:"rgba(0, 0, 0, 0.45)"}}],series:[{name:"已完成的作业总数",type:"line",data:this.todayJob.finished_job_num},{name:"待完成的作业总数",type:"line",barWidth:30,data:this.todayJob.unfinished_job_num},{name:"异常作业总数",type:"line",data:this.todayJob.error_job_num}]};this.$api.home.today_job().then(function(n){n.result?(t.todayJob.finished_job_num=n.data.finished_job_num,t.todayJob.error_job_num=n.data.error_job_num,t.todayJob.unfinished_job_num=n.data.unfinished_job_num,t.todayJob.time_line=n.data.time_line,e.series[0].data=t.todayJob.finished_job_num,e.series[1].data=t.todayJob.unfinished_job_num,e.series[2].data=t.todayJob.error_job_num,e.xAxis[0].data=t.todayJob.time_line,t.drawline(t.todayJobChart,e)):(t.$cwMessage(n.message,"error"),t.drawline(t.todayJobChart,e)),t.todayJobLoading=!1})},getJobtTrend:function(){var t=this;this.jobDynamicLoading=!0,this.$api.home.job_dynamic().then(function(e){if(e.result){var n=e.data.slice(0,4);t.jobDynamicState=n.map(function(t){return{tag:t.condition,color:"green",filled:!0,content:'<span class="timeline-update-time">'+t.finish_time+"</span>"}})}else t.$cwMessage(e.message,"error");t.jobDynamicLoading=!1})},drawline:function(t,e){t.setOption(e)}}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("div",{attrs:{id:"result"}}),t._v(" "),n("bk-container",{attrs:{margin:0}},[n("bk-row",{directives:[{name:"bkloading",rawName:"v-bkloading",value:{isLoading:t.overViewLoading,zIndex:10},expression:"{ isLoading: overViewLoading, zIndex: 10 }"}],staticClass:"first-line"},[n("bk-col",{attrs:{span:6}},[n("div",{staticClass:"first-line-box"},[n("div",{staticClass:"first-line-box-left"},[n("div",{staticClass:"num"},[t._v(t._s(t.overview_data.today_error_job_num))]),t._v(" "),n("div",{staticClass:"text"},[t._v("当日异常作业数")])]),t._v(" "),n("div",{staticClass:"first-line-box-right"},[n("div",{staticClass:"circle",staticStyle:{"background-color":"#052150",color:"#fff"}},[n("i",{staticClass:"iconfont icon-mianxingtubiao-shijianzhongxin"})])])])]),t._v(" "),n("bk-col",{attrs:{span:6}},[n("div",{staticClass:"first-line-box"},[n("div",{staticClass:"first-line-box-left"},[n("div",{staticClass:"num"},[t._v(t._s(t.overview_data.today_job_num))]),t._v(" "),n("div",{staticClass:"text"},[t._v("当日作业数")])]),t._v(" "),n("div",{staticClass:"first-line-box-right"},[n("div",{staticClass:"circle",staticStyle:{"background-color":"#07386d",color:"#fff"}},[n("i",{staticClass:"iconfont icon-mianxingtubiao-dangrizuoyezongshu"})])])])]),t._v(" "),n("bk-col",{attrs:{span:6}},[n("div",{staticClass:"first-line-box"},[n("div",{staticClass:"first-line-box-left"},[n("div",{staticClass:"num"},[t._v(t._s(t.overview_data.today_wait_job_num))]),t._v(" "),n("div",{staticClass:"text"},[t._v("当日未执行作业数")])]),t._v(" "),n("div",{staticClass:"first-line-box-right"},[n("div",{staticClass:"circle",staticStyle:{"background-color":"#83a7ca",color:"#fff"}},[n("i",{staticClass:"iconfont icon-mianxingtubiao-zuoyelishi"})])])])]),t._v(" "),n("bk-col",{attrs:{span:6}},[n("div",{staticClass:"first-line-box"},[n("div",{staticClass:"first-line-box-left"},[n("div",{staticClass:"num"},[t._v(t._s(t.overview_data.today_job_flow_num))]),t._v(" "),n("div",{staticClass:"text"},[t._v("当日作业流数")])]),t._v(" "),n("div",{staticClass:"first-line-box-right"},[n("div",{staticClass:"circle",staticStyle:{"background-color":"#0797d4",color:"#fff"}},[n("i",{staticClass:"iconfont icon-mianxingtubiao-dangrizuoyeliushu"})])])])])],1),t._v(" "),n("bk-row",{staticClass:"third-line"},[n("bk-col",{attrs:{span:8}},[n("div",{directives:[{name:"bkloading",rawName:"v-bkloading",value:{isLoading:t.top5AgentLoading,zIndex:10},expression:"{ isLoading: top5AgentLoading, zIndex: 10 }"}],staticClass:"third-line-box"},[n("div",{staticClass:"content"},[n("div",{staticStyle:{height:"100%",width:"100%"},attrs:{id:t.top5AgentId}})])])]),t._v(" "),n("bk-col",{attrs:{span:8}},[n("div",{directives:[{name:"bkloading",rawName:"v-bkloading",value:{isLoading:t.top5AgentLoading,zIndex:10},expression:"{ isLoading: top5AgentLoading, zIndex: 10 }"}],staticClass:"third-line-box"},[n("div",{staticClass:"content"},[n("div",{staticStyle:{height:"100%",width:"100%"},attrs:{id:t.top5AgentId2}})])])]),t._v(" "),n("bk-col",{attrs:{span:8}},[n("div",{directives:[{name:"bkloading",rawName:"v-bkloading",value:{isLoading:t.top5AgentLoading,zIndex:10},expression:"{ isLoading: top5AgentLoading, zIndex: 10 }"}],staticClass:"third-line-box"},[n("div",{staticClass:"content"},[n("div",{staticStyle:{height:"100%",width:"100%"},attrs:{id:t.top5AgentId3}})])])])],1),t._v(" "),n("bk-row",{staticClass:"second-line"},[n("bk-col",{attrs:{span:12}},[n("div",{directives:[{name:"bkloading",rawName:"v-bkloading",value:{isLoading:t.todayJobLoading,zIndex:10},expression:"{ isLoading: todayJobLoading, zIndex: 10 }"}],staticClass:"second-line-box"},[n("div",{staticClass:"content"},[n("div",{staticStyle:{height:"100%",width:"100%"},attrs:{id:t.todayJobId}})])])]),t._v(" "),n("bk-col",{attrs:{span:12}},[n("div",{directives:[{name:"bkloading",rawName:"v-bkloading",value:{isLoading:t.weeklyJobLoading,zIndex:10},expression:"{ isLoading: weeklyJobLoading, zIndex: 10 }"}],staticClass:"second-line-box"},[n("div",{staticClass:"content"},[n("div",{staticStyle:{height:"100%",width:"100%"},attrs:{id:t.weeklyJobId}})])])])],1)],1)],1)},staticRenderFns:[]};var r=n("VU/8")(o,a,!1,function(t){n("ovF8")},"data-v-b0f874d6",null);e.default=r.exports}});