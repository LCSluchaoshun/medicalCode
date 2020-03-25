const Home = () => import('@/views/home');
 const StomachNav = () =>import('@/views/stomachNav')
 const POEM = () =>import('@/views/POEM')
 const POEMNav = () =>import('@/views/POEMNav')
 const KnowPOEM = () =>import('@/views/KnowPOEM')
 const BeforePOEM = () =>import('@/views/BeforePOEM')
 const AfterPOEM = () =>import('@/views/afterPOEM')
 const POEMLeave = () =>import('@/views/POEMLeave')
 const ERCP = () =>import('@/views/ERCP')
 const ERCPNav = () =>import('@/views/ERCPNav')
 const BeforeERCP = () =>import('@/views/BeforeERCP')
 const Consultation = () =>import('@/views/consultation')
 const ERCPLeave = () =>import('@/views/ERCPLeave')
 const AfterERCP = () =>import('@/views/afterERCP')
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
    },
    {
        path: '/consultation',
        name: 'consultation',
        component: Consultation
    }, {
        path: '/poem-nav',
        name: 'POEMNav',
        component: POEMNav
    }, {
        path: '/know-poem',
        name: 'KnowPOEM',
        component: KnowPOEM
    }, {
        path: '/before-poem',
        name: 'BeforePOEM',
        component: BeforePOEM
    },
    {
        path: '/after-poem',
        name: 'AfterPOEM',
        component: AfterPOEM
    },
    {
        path: '/poem-leave',
        name: 'POEMLeave',
        component: POEMLeave
    },
    {
        path: '/ercp',
        name: 'ERCP',
        component: ERCP
    },
    {
        path: '/ercp-nav',
        name: 'ERCPNav',
        component: ERCPNav
    },
    {
        path: '/before-ercp',
        name: 'BeforeERCP',
        component: BeforeERCP
    },
    {
        path: '/ercp-leave',
        name: 'ERCPLeave',
        component: ERCPLeave
    },
    {
        path: '/after-ercp',
        name: 'AfterERCP',
        component: AfterERCP
    }
];
