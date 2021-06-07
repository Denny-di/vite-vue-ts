import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const Login = () => import(/* webpackChunkName: "login" */ "../views/login");
const Layout = () => import(/* webpackChunkName: "layout" */ "../views/layout");
const Home = () => import(/* webpackChunkName: "home" */ "../views/home");
const NotFound = () =>
    import(/* webpackChunkName: "NotFound" */ "../views/error/404");

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        redirect: "/login",
        meta: {},
        component: Layout,
        children: [
            {
                name: "home",
                path: "home",
                meta: {
                    title: "首页",
                },
                component: Home,
            },
            {
                // 匹配 /home/xxx
                path: "/home:afterUser(.*)",
                component: NotFound,
            },
        ],
    },
    {
        name: "login",
        path: "/login",
        component: Login,
        meta: {
            title: "登录",
        },
    },
    {
        // 匹配 /xxx
        path: "/:pathMatch(.*)",
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to) => {
    if (to.meta.title) {
        document.title = `${to.meta.title}`;
    }
});
export default router;
