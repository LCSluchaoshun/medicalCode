const Home = () => import('@/views/home');
 const StomachNav = () =>import('@/views/stomachNav')
 const POEM = () =>import('@/views/POEM')
 const Consultation = () =>import('@/views/consultation')
export default [
    {
        path: '/',
        redirect: '/home',
        linkActiveClass: 'active'
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    }, {
        path: '/stomach-nav',
        name: 'StomachNav',
        component: StomachNav
    } ,{
        path: '/POEM',
        name: 'POEM',
        component: POEM
    },{
        path: '/consultation',
        name: 'consultation',
        component: Consultation
    }
];
