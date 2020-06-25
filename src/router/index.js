import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import config from "./config";

Vue.use( VueRouter );



const router = new VueRouter( {
    ...config,
    routes
} );

router.beforeEach( ( to, from, next ) => {
    if ( to.meta ) {
        document.title = to.meta.title;
    }
    next();
} );

export default router;
