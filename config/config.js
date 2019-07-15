export default {
    plugins:[
        ['umi-plugin-react',{
            antd: true,
            dva: true
        }]
    ],
    routes: [
    {
        path: '/',
        component: './index',
        routes:[
            {
                path:'',
                component:'./list/list'
            }
        ]
    },
    {
        path: '/event',
        component: './demo/event',
    },{
        path: '/tabs',
        component: './demo/tab'
    },{
        path: '/tree',
        component: './demo/tree'
    },{
        path:'/list',
        component: './list/shoppingList'
    }]
}