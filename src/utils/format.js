import moment from "moment";
moment.locale( "zh-cn" );
/**
 * 根据时间返回年月日 时分秒
 * format YYYY-MM-DD HH:mm:ss
 * **/

const formatDateHasS = ( date = new Date() ) => {
    return moment( date ).format( "YYYY-MM-DD HH:mm:ss" );
};

/**
 * 根据时间返回年月日
 * format YYYY-MM-DD HH:mm:ss
 * **/

const formatDate = ( date = new Date() ) => {
    return moment( date ).format( "YYYY-MM-DD" );
};

/**
 * 返回当前的星期几
 */

const formatWeekday = () => {
    const weeks = [ "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期七" ];
    return weeks[moment().weekday()];
};

/**
 * 返回时间+星期
 *
 */

const formatDateWidthWeekday = () => {
    return formatDate() + " " + formatWeekday();
};


export default {
    formatDate,
    formatWeekday,
    formatDateWidthWeekday
};
