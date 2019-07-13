export default {
    plugins:[
        ['umi-plugin-react',{
            antd: true
        }]
    ],
    routes: [{
        path: '/',
        component: './index',
        routes:[
            {
                path:'event',
                component:'./demo/event'
            }
        ]
    },{
        path: '/event',
        component: './demo/event',
    },{
        path: '/tabs',
        component: './demo/tab'
    },{
        path: '/tree',
        component: './demo/tree'
    }]
}