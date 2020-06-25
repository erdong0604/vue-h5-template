import md5 from "js-md5";
import qs from "qs";

const encryptAppKey = ( sign ) => {
    // echo  $this->assemble ( $params ) ."<br /><br /><br /><br /><br />";
    const sign_token = "NKzWRdh2bTKO7AdRr@NAsD7RDxriIF4u";
    sign = md5( sign ).toUpperCase() + sign_token;
    sign = md5( sign ).toUpperCase();
    return sign;
};
// 根据首字母排序
const objKeySort = ( obj ) => { // 排序的函数
    const newkey = Object.keys( obj ).sort();
    // 先用Object内置类的keys方法获取要排序对象的属性名，再利用Array原型上的sort方法对获取的属性名进行排序，newkey是一个数组
    const newObj = {};// 创建一个新的对象，用于存放排好序的键值对
    for ( let i = 0; i < newkey.length; i++ ) { // 遍历newkey数组
        newObj[newkey[i]] = obj[newkey[i]];// 向新创建的对象中按照排好的顺序依次增加键值对
    }
    return newObj;// 返回排好序的新对象
};

const encryParams = ( data ) => {
    let signList = {}; let signSrc = "";
    let param = data || {};
    const time = new Date().getTime();
    const w = md5( time + "" );
    param.w = w;
    for ( const i in param ) {
        if ( typeof param[i] === "object" ) {
            param[i] = JSON.stringify( param[i] );
        }
    }
    signList = objKeySort( param );
    for ( const i in signList ) {
        if ( signList[i] !== undefined && signList[i] !== null ) {
            signSrc += i + signList[i];
        }
    }
    const son = encryptAppKey( signSrc );
    param.o = son;
    param = qs.stringify( param );
    return param;
};

export default encryParams;
