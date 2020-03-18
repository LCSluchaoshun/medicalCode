const Home = () => import('@/views/home');

export default [
    {
        path: '/',
        redirect: '/home',
        linkActiveClass: 'active'
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        meta: {
            keepAlive: true,
            tab: true
        }
    }
];
