import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Logout from "../pages/Logout/Logout";
import Register from "../pages/Register/Register";
import Welcome from "../pages/Welcome/Welcome";

const basicRouter = [
    {
        path: "/",
        component: Welcome,
        exact: 1

    },
    {
        path:"/home",
        component: Home,
        exact: 1
    },{
        path:"/login",
        component: Login,
        exact: 1
    }, {
        path:"/logout",
        component: Logout,
        exact: 1
    }, {
        path:"/register",
        component: Register,
        exact: 1
    },
    {
        redirect: true,
        from : '/',
        to : '/'
    }

];

export default basicRouter;