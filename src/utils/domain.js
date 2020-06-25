
/**
 *
 * @proApiBaseUrl 生产环境api请求地址
 */

const proApiBaseUrl = "https://api.jiafuyun.com/mwxt/?service=";

/**
 *
 * @devApiBaseUrl
 */

const devApiBaseUrl = "http://192.168.100.37/jiafuyun_api";

module.exports = {
    apiBaseUrl: process.env.NODE_ENV === "development" ? devApiBaseUrl : proApiBaseUrl
};
