import router from './router'
import store from '@/vuex/index'

const Home = () => import('@/views/home/home')
const AgentList = () => import('@/views/agent_mgmt/agent_list')
const AgentMonitor = () => import('@/views/agent_mgmt/agent_monitor')
const CalendarMgmt = () => import('@/views/job_flow_mgmt/calendar_mgmt')
const JobFlowList = () => import('@/views/job_flow_mgmt/job_flow_list')

const NewJobFlow = () => import('@/views/job_flow_mgmt/new_job_flow')

const VariableMgmt = () => import('@/views/job_flow_mgmt/variable_mgmt')

const JobList = () => import('@/views/job_mgmt/job_list')

const NewJob = () => import('@/views/job_mgmt/new_job')

const ScanFile = () => import('@/views/job_mgmt/scan_file')

const SingleJob = () => import('@/views/job_mgmt/single_job')

const JobViewHistory = () => import('@/views/job_monitor/history/job_view_history')

const JobFlowViewHistory = () => import('@/views/job_monitor/history/job_flow_view_history')

const MultipleJob = () => import('@/views/job_mgmt/multiple_job')

const JobHistory = () => import('@/views/job_monitor/history/job_history')

const JobMonitor = () => import('@/views/job_monitor/monitor/job_monitor')

const SysSetup = () => import('@/views/system/sys_setup')

const UserAndPermissions = () => import('@/views/system/user_and_permissions')

const AlarmList = () => import('@/views/alarm_center/alarm_list')

const JobView = () => import('@/views/job_monitor/monitor/job_view')

const JobFlowView = () => import('@/views/job_monitor/monitor/job_flow_view')

const ViewDetail = () => import('@/views/job_monitor/monitor/view_detail')

const SingleJobFlow = () => import('@/views/job_flow_mgmt/single_job_flow')

const MultipleJobFlow = () => import('@/views/job_flow_mgmt/multiple_job_flow')

const ImportFile = () => import('@/views/job_flow_mgmt/import_file')

const JobDetail = () => import('@/views/job_monitor/monitor/job_detail')

const Log = () => import('@/views/system/log')

const LogMange = () => import('@/views/system/log_mange')

const Report = () => import('@/views/report/report')

const SystemClassManage = () => import('@/views/system/system_class_manage')

const JobFlowDetail = () => import('@/views/job_monitor/history/job_flow_detail')

const JobViewDetail = () => import('@/views/job_monitor/history/job_view_detail')

const variableChange = () => import('@/views/job_flow_mgmt/variable_change')

const AddCalendarMgmt = () => import('@/views/job_flow_mgmt/add_calendar_mgmt')

const LargeScreen = () => import('@/views/job_monitor_large_screen/large_screen')

const TaskList = () => import('@/views/task_mgmt/task_list')

const TaskCreate = () => import('@/views/task_mgmt/task_create')
const Login = () => import('@/views/login/login')

// const _import = require('./router/_import_' + process.env.NODE_ENV) // 获取组件的方法

let getRouter // 用来获取后台拿到的路由
// let getMenuList // 用来获取后台拿到的菜单
let getButton // 用来获取后台拿到的按钮权限
saveObjArr('router', '')

router.beforeEach((to, from, next) => {
    if (!getRouter) { // 不加这个判断，路由会陷入死循环
        if (!getObjArr('router')) {
            getRouter = [
                {
                    'path': '/',
                    'name': 'home',
                    'component': 'Home',
                    'meta': {
                        'title': '首页'
                    }
                },
                {
                    'path': '/log',
                    'name': 'Log',
                    'component': 'Log',
                    'meta': {
                        'title': '操作审计'
                    }
                },
                {
                    'path': '/addcalendarmgmt',
                    'name': 'AddCalendarMgmt',
                    'component': 'AddCalendarMgmt',
                    'meta': {
                        'title': '操作日历',
                        'back': 'true',
                        'fatherName': 'CalendarMgmt'
                    }
                },
                {
                    'path': '/variablechange',
                    'name': 'variableChange',
                    'component': 'variableChange',
                    'meta': {
                        'title': '变量表',
                        'back': 'true',
                        'fatherName': 'JobFlowList'
                    }
                },
                {
                    'path': '/singlejob',
                    'name': 'SingleJob',
                    'component': 'SingleJob',
                    'meta': {
                        'title': '单个作业',
                        'back': 'true',
                        'fatherName': 'JobList'
                    }
                },
                {
                    'path': '/singleJobdetail',
                    'name': 'singleJobDetail',
                    'component': 'SingleJob',
                    'meta': {
                        'title': '作业管理 > 修改作业 > 单个作业'
                    }
                },
                {
                    'path': '/viewdetail',
                    'name': 'ViewDetail',
                    'component': 'ViewDetail',
                    'meta': {
                        'title': '作业流视图详情',
                        'back': 'true',
                        'fatherName': 'JobMonitor'
                    }
                },
                {
                    'path': '/jobflowdetail',
                    'name': 'JobFlowDetail',
                    'component': 'JobFlowDetail',
                    'meta': {
                        'title': '作业流视图历史详情',
                        'back': 'true',
                        'fatherName': 'JobHistory'
                    }
                },
                {
                    'path': '/jobviewdetail',
                    'name': 'JobViewDetail',
                    'component': 'JobViewDetail',
                    'meta': {
                        'title': '作业视图历史详情',
                        'back': 'true',
                        'fatherName': 'JobHistory'
                    }
                },
                {
                    'path': '/multiplejob',
                    'name': 'MultipleJob',
                    'component': 'MultipleJob',
                    'meta': {
                        'title': '批量作业导入',
                        'back': 'true',
                        'fatherName': 'NewJob'
                    }
                },
                {
                    'path': '/scanfile',
                    'name': 'ScanFile',
                    'component': 'ScanFile',
                    'meta': {
                        'title': '导入详情',
                        'back': 'true',
                        'fatherName': 'NewJob'
                    }
                },
                {
                    'path': '/home',
                    'name': 'home',
                    'component': 'Home',
                    'meta': {
                        'title': '首页'
                    }
                },
                {
                    'path': '/agentlist',
                    'name': 'AgentList',
                    'component': 'AgentList',
                    'meta': {
                        'title': 'Agent列表'
                    }
                },
                {
                    'path': '/agentmonitor',
                    'name': 'AgentMonitor',
                    'component': 'AgentMonitor',
                    'meta': {
                        'title': 'Agent监视'
                    }
                },
                {
                    'path': '/calendarmgmt',
                    'name': 'CalendarMgmt',
                    'component': 'CalendarMgmt',
                    'meta': {
                        'title': '日历管理'
                    }
                },
                {
                    'path': '/jobflowlist',
                    'name': 'JobFlowList',
                    'component': 'JobFlowList',
                    'meta': {
                        'title': '作业流列表'
                    }
                },
                {
                    'path': '/newjobflow',
                    'name': 'NewJobFlow',
                    'component': 'NewJobFlow',
                    'meta': {
                        'title': '新建作业流',
                        'fatherName': 'JobFlowList',
                        'back': 'true'
                    }
                },

                {
                    'path': '/singlejobflow',
                    'name': 'SingleJobFlow',
                    'component': 'SingleJobFlow',
                    'meta': {
                        'title': '单个作业流',
                        'back': 'true',
                        'fatherName': 'JobFlowList'
                    }
                },
                {
                    'path': '/multiplejobflow',
                    'name': 'MultipleJobFlow',
                    'component': 'MultipleJobFlow',
                    'meta': {
                        'title': '批量导入',
                        'back': 'true',
                        'fatherName': 'NewJobFlow'
                    }
                },
                {
                    'path': '/importfile',
                    'name': 'importFile',
                    'component': 'ImportFile',
                    'meta': {
                        'title': '导入详情',
                        'back': 'true',
                        'fatherName': 'NewJobFlow'
                    }
                },
                {
                    'path': '/variablemgmt',
                    'name': 'VariableMgmt',
                    'component': 'VariableMgmt',
                    'meta': {
                        'title': '变量管理',
                        'fatherName': 'JobFlowList'
                    }
                },
                {
                    'path': '/joblist',
                    'name': 'JobList',
                    'component': 'JobList',
                    'meta': {
                        'title': '作业列表'
                    }
                },
                {
                    'path': '/newjob',
                    'name': 'NewJob',
                    'component': 'NewJob',
                    'meta': {
                        'title': '新建作业',
                        'fatherName': 'JobList',
                        'back': 'true'
                    }
                },
                {
                    'path': '/jobhistory',
                    'name': 'JobHistory',
                    'component': 'JobHistory',
                    'meta': {
                        'title': '作业历史'
                    },
                    'children': [
                        {
                            'path': '/jobflowviewhistory',
                            'name': 'JobFlowViewHistory',
                            'component': 'JobFlowViewHistory',
                            'meta': {
                                'title': '作业历史',
                                'fatherName': 'JobHistory'
                            }
                        },
                        {
                            'path': '/jobviewhistory',
                            'name': 'JobViewHistory',
                            'component': 'JobViewHistory',
                            'meta': {
                                'title': '作业历史',
                                'fatherName': 'JobHistory'
                            }
                        }
                    ]
                },
                {
                    'path': '/report',
                    'name': 'Report',
                    'component': 'Report',
                    'meta': {
                        'title': '报表分析'
                    }
                },
                {
                    'path': '/largescreen',
                    'name': 'LargeScreen',
                    'component': 'LargeScreen',
                    'meta': {
                        'title': '作业监视大屏'
                    }
                },
                {
                    'path': '/jobmonitor',
                    'name': 'JobMonitor',
                    'component': 'JobMonitor',
                    'meta': {
                        'title': '作业监视'
                    },
                    'children': [
                        {
                            'path': '/jobview',
                            'name': 'JobView',
                            'component': 'JobView',
                            'meta': {
                                'title': '作业监视',
                                'fatherName': 'JobFlowView'
                            }
                        },
                        {
                            'path': '/jobflowview',
                            'name': 'JobFlowView',
                            'component': 'JobFlowView',
                            'meta': {
                                'title': '作业监视',
                                'fatherName': 'JobFlowView'
                            }
                        }
                    ]
                },
                {
                    'path': '/jobdetail',
                    'name': 'jobDetail',
                    'component': 'JobDetail',
                    'meta': {
                        'title': '作业视图详情',
                        'back': 'true',
                        'fatherName': 'JobMonitor'
                    }
                },
                {
                    'path': '/syssetup',
                    'name': 'SysSetup',
                    'component': 'SysSetup',
                    'meta': {
                        'title': '系统设置'
                    }
                },
                {
                    'path': '/userandpermissions',
                    'name': 'UserAndPermissions',
                    'component': 'UserAndPermissions',
                    'meta': {
                        'title': '用户与权限'
                    }
                },
                {
                    'path': '/systemclassmanage',
                    'name': 'SystemClassManage',
                    'component': 'SystemClassManage',
                    'meta': {
                        'title': '系统类别管理'
                    }
                },
                {
                    'path': '/logmange',
                    'name': 'LogMange',
                    'component': 'LogMange',
                    'meta': {
                        'title': '日志管理'
                    }
                },
                {
                    'path': '/alarmlist',
                    'name': 'AlarmList',
                    'component': 'AlarmList',
                    'meta': {
                        'title': '告警中心'
                    }
                },
                {
                    'path': '/taskList',
                    'name': 'TaskList',
                    'component': 'TaskList',
                    'meta': {
                        'title': '任务管理'
                    }
                },
                {
                    'path': '/taskCreate',
                    'name': 'taskCreate',
                    'component': 'TaskCreate',
                    'meta': {
                        'title': '新建任务',
                        'fatherName': 'TaskList',
                        'back': 'true'
                    }
                },
                {
                    'path': '/login',
                    'name': 'login',
                    'component': 'Login',
                    'meta': {
                        'title': '登录'
                    }
                }
            ]
            getButton = [
                {
                    'url': '/agentlist',
                    'auth': {
                        'search': true,
                        'create': true,
                        'modify': true,
                        'del': true
                    }
                },
                {
                    'url': '/agentmonitor',
                    'auth': {
                        'search': true
                    }
                },
                {
                    'url': '/newjob',
                    'auth': {
                        'create': true
                    }
                },
                {
                    'url': '/joblist',
                    'auth': {
                        'search': true,
                        'operate': true,
                        'modify': true,
                        'del': true
                    }
                },
                {
                    'url': '/newjobflow',
                    'auth': {
                        'create': true
                    }
                },
                {
                    'url': '/jobflowlist',
                    'auth': {
                        'search': true,
                        'operate': true,
                        'modify': true,
                        'del': true
                    }
                },
                {
                    'url': '/calendarmgmt',
                    'auth': {
                        'search': true,
                        'create': true,
                        'modify': true,
                        'del': true
                    }
                },
                {
                    'url': '/variablemgmt',
                    'auth': {
                        'search': true,
                        'create': true,
                        'modify': true,
                        'del': true
                    }
                },
                {
                    'url': '/jobflowview',
                    'auth': {
                        'search': true,
                        'operate': true
                    }
                },
                {
                    'url': '/jobflowviewhistory',
                    'auth': {
                        'search': true
                    }
                },
                {
                    'url': '/jobview',
                    'auth': {
                        'search': true,
                        'operate': true
                    }
                },
                {
                    'url': '/jobviewhistory',
                    'auth': {
                        'search': true
                    }
                },
                {
                    'url': '/alarmlist',
                    'auth': {
                        'search': true
                    }
                },
                {
                    'url': '/syssetup',
                    'auth': {
                        'operate': true,
                        'modify': true
                    }
                },
                {
                    'url': '/userandpermissions',
                    'auth': {
                        'search': true,
                        'create': true
                    }
                },
                {
                    'url': '/systemclassmanage',
                    'auth': {
                        'search': true,
                        'create': true,
                        'modify': true,
                        'del': true
                    }
                },
                {
                    'url': '/log',
                    'auth': {
                        'search': true
                    }
                },
                {
                    'url': '/viewdetail',
                    'auth': {
                        'search': true,
                        'operate': true
                    }
                },
                {
                    'url': '/taskList',
                    'auth': {
                        'search': true,
                        'operate': true
                    }
                },
                {
                    'url': '/taskCreate',
                    'auth': {
                        'search': true,
                        'operate': true
                    }
                }
            ]
            saveObjArr('router', getRouter) // 存储路由到localStorage
            routerGo(to, next) // 执行路由跳转方法
        } else { // 从localStorage拿到了路由
            getRouter = getObjArr('router') // 拿到路由
            routerGo(to, next)
        }
    } else {
        next()
    }
})

function routerGo(to, next) {
    getRouter = filterAsyncRouter(getRouter) // 过滤路由
    router.addRoutes(getRouter) // 动态添加路由
    store.state.antRouter = getRouter // 将路由数据传递给全局变量
    // store.state.displayMenu = getMenuList //将菜单数据传递给全局变量，做侧边栏菜单渲染工作
    // store.state.displayButton = getButton // 将按钮权限数据传递给全局变量，做页面按钮权限渲染工作
    store.commit('changeBtnPermission', getButton)
    next({
        ...to,
        replace: true
    })
}

function saveObjArr(name, data) { // localStorage 存储数组对象的方法
    localStorage.setItem(name, JSON.stringify(data))
}

function getObjArr(name) { // localStorage 获取数组对象的方法
    return JSON.parse(window.localStorage.getItem(name))
}

const ROUTER_MAP = {
    'Home': Home,
    'AgentList': AgentList,
    'AgentMonitor': AgentMonitor,
    'CalendarMgmt': CalendarMgmt,
    'JobFlowList': JobFlowList,
    'NewJobFlow': NewJobFlow,
    'VariableMgmt': VariableMgmt,
    'JobList': JobList,
    'NewJob': NewJob,
    'AddCalendarMgmt': AddCalendarMgmt,
    'variableChange': variableChange,
    'ScanFile': ScanFile,
    'SingleJob': SingleJob,
    'SingleJobDetail': SingleJob,
    'JobViewHistory': JobViewHistory,
    'JobFlowViewHistory': JobFlowViewHistory,
    'MultipleJob': MultipleJob,
    'JobHistory': JobHistory,
    'JobMonitor': JobMonitor,
    'SysSetup': SysSetup,
    'UserAndPermissions': UserAndPermissions,
    'AlarmList': AlarmList,
    'JobView': JobView,
    'JobFlowView': JobFlowView,
    'ViewDetail': ViewDetail,
    'SingleJobFlow': SingleJobFlow,
    'MultipleJobFlow': MultipleJobFlow,
    'ImportFile': ImportFile,
    'JobDetail': JobDetail,
    'Log': Log,
    'LogMange': LogMange,
    'Report': Report,
    'SystemClassManage': SystemClassManage,
    'JobFlowDetail': JobFlowDetail,
    'JobViewDetail': JobViewDetail,
    'LargeScreen': LargeScreen,
    'TaskList': TaskList,
    'TaskCreate': TaskCreate,
    'Login': Login
}

function filterAsyncRouter(asyncRouterMap) { // 遍历后台传来的路由字符串，转换为组件对象
    const accessedRouters = asyncRouterMap.filter(route => {
        if (route.component) {
            route.component = ROUTER_MAP[route.component]
            // if (route.component === 'Layout') { //Layout组件特殊处理
            //     route.component = Layout
            // } else {
            //     route.component = _import(route.component)
            // }
        }
        if (route.children && route.children.length) {
            route.children = filterAsyncRouter(route.children)
        }
        return true
    })
    return accessedRouters
}

// 用来控制按钮的显示与否
export function hasPermission(permission) {
    const myBtns = store.state.permission.btnPermission
    for (let i = 0; i < myBtns.length; i++) {
        if (myBtns[i].url === permission) {
            return myBtns[i].auth
        }
    }
}
