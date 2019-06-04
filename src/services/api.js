import request from '../utils/request';
import { HeadPort } from '../services/UrlConfig';


//获取echarts
export function queryPost(url,params) {
  const payload = JSON.stringify(params);
  // const formdata = new FormData();
  // formdata.append("tjrq", "2019-03-21")
  // formdata.append("tjrq1", "2019-03-21")
  // for (const item of payload) {
  //   formdata.append(item, payload[item])
  // }
  const queryPostUrl = HeadPort + url;
  return request(queryPostUrl, {
    //请求头
    headers: {
      // "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
      // "Content-type": 'application/x-www-form-urlencoded'
       'Content-Type': 'application/json;charset=utf-8',
    },
    mode: 'cors',
    //方式
    method: 'POST',
    //接受的参数 这里是个对象
    body: payload
  });
}
