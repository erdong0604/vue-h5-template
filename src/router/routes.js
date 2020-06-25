
const Home = () => import( /* webpackChunkName: "home" */ "@view/home" );


const routes = [
    {
        path: "/",
        component: Home,
        meta: {
            title: "首页"
        }
    }
];

export default routes;
