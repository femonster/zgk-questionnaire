import Login from './views/Login.vue'
import Register from './views/Register.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Page1 from './views/nav1/Page1.vue'
import Page5 from './views/nav2/Page5.vue'
import Page6 from './views/nav3/Page6.vue'
import echarts from './views/charts/echarts.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/register',
        component: Register,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    // { path: '/', component: Main },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-file',//图标样式class
        leaf: true,
        children: [
            { path: '/table', component: Page1, name: '新建问卷' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-cog',
        leaf: true,
        children: [
            { path: '/page5', component: Page5, name: '管理问卷' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-trash',
        leaf: true,//只有一个节点
        children: [
            { path: '/page6', component: Page6, name: '回收站' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-bar-chart',
        leaf: true,
        children: [
            { path: '/echarts', component: echarts, name: '数据统计' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;