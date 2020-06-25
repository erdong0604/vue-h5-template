import { service, errorHandler, showLoading, hideLoading, myAlert } from "./config";
import router from "./../router";

/**
 * @description post 请求
 * @url 请求url
 * @params 请求参数
 * @isloading 是否显示loading状态
 */
const postRequest = ( { url, params = {}, isloading = true } ) => {
    isloading && showLoading();
    return new Promise( ( resolve, reject ) => {
        service.post( url, params ).then( res => {
            if ( res.data.ret === 200 ) {
                errorHandler( res.data, resolve, reject );
            } else {
                myAlert( res.data.msg );
            }
        }, err => {
            myAlert( "网络连接失败,请稍后重试" );
            reject( err );
        } ).finally( _ => {
            hideLoading();
        } );
    } );
};


/**
 * @description get 请求
 * @url 请求url
 * @params 请求参数
 * @isloading 是否显示loading状态
 */
const getRequest = ( { url, params = {}, isloading = true } ) => {
    return new Promise( ( resolve, reject ) => {
        service.get( url, {
            params,
            headers: { "Content-Type": "multipart/form-data" }
        } ).then( res => {
            if ( res.data.code === 200 ) {
                resolve( res.data );
            } else {
                errorHandler( res.data.code, res, resolve, reject );
            }
        }, err => {
            reject( err );
        } ).finally( _ => {
            hideLoading();
        } );
    } );
};


export {
    postRequest,
    getRequest
};
