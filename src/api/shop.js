import request from './request';

function getList(data){
   return request.get('https://m.gstzy.cn/apic/cgi.gstyun.cn/cgi-bin/mix/queryshop', data).then((res)=>{
     return res;
   })
}

export default {
  getList
}
