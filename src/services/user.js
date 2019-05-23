import request from '../utils/request';
import {
  UserUrl,
} from './UrlConfig';
//验证用户
export async function queryUser(params) {
    const payload = JSON.stringify(params.payload);
    return request(UserUrl, {
        //请求头
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        //方式
        method:'post',
        //接受的参数 这里是个对象
        body:  payload
    });
}


