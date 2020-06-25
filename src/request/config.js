import axios from "axios";
import router from "./../router";
import { apiBaseUrl } from "./../utils/domain";
import encryParams from "./encryParams";
import { Toast, Notify } from "vant";

const service = axios.create( {
    baseURL: process.env.NODE_ENV === "production" ? apiBaseUrl : "/",
    timeout: 3000,
    withCredentials: true
} );


// 请求前拦截
service.interceptors.request.use(

    config => {
        config.data = encryParams( config.data );
        return config;
    },
    err => {
        return Promise.reject( err );
    }
);



// 返回后拦截
service.interceptors.response.use(
    response => {
        return Promise.resolve( response );
    },
    err => {
        return Promise.reject( err );
    }
);



/*
 * @description: 错误处理
 * @param :
 * @return:
 */
const errorHandler = ( data, resolve, reject ) => {
    switch ( data.code ) {
    case 0:
        resolve( data );
        break;
    default:
        reject( data );
        break;
    }
};

/**
 * @description show loading
 *
 */
const showLoading = () => {
    Toast.loading( {
        message: "加载中...",
        forbidClick: true,
        duration: 0
    } );
};

/**
 * @description hide loading
 *
 */

const hideLoading = () => {
    Toast.clear( false );
};


/**
 * 请求错误提示
 * 便于以后修改UI框架之后不用再修改index.js
 */
const myAlert = ( msg ) => {
    Notify( { type: "danger", message: msg } );
};

export {
    service,
    errorHandler,
    showLoading,
    hideLoading,
    myAlert
};
