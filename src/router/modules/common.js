const Home = () => import('@/views/home');
 const StomachNav = () =>import('@/views/stomachNav')
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
    }, {
        path: '/stomach-nav',
        name: 'StomachNav',
        component: StomachNav,
    }
];
