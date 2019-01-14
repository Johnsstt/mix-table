import fetch from 'dva/fetch';


function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}
/** 
 * @param {*} obj 
 * @description js ASCII 排序
 */
function sort_ASCII(obj){
  var arr = new Array();
  var num = 0;
  for (var i in obj) {
    arr[num] = i;
    num++;
  }
  var sortArr = arr.sort();
  var sortObj = {};
  for (var i in sortArr) {
    sortObj[sortArr[i]] = obj[sortArr[i]];
  }
  return sortObj;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */

export default async function request(url, options) {
  // let paramsArray = [];
  // let tempObj, md5Str, key, value, tempStr='';
  // let timestamp=new Date().getTime();
  // let headerObj = {};
  // let bdToken;

  // if(JSON.stringify(options.data) == "{}") return;  
  // tempObj = sort_ASCII(options.data);
  // for(var k in tempObj){
  //   key = k;
  //   value = tempObj[k];
  //   tempStr += (key + value)  
  // }    

  // md5Str = md5Hex(timestamp+md5Hex(tempStr)+timestamp);
  // let params = {
  //   key: 'token'
  // }
  
  
  // bridge.call('async.getStorage', {key: 'token'}, (res)=>{
  //   bdToken = res;
  // });

  // headerObj['sigin'] = md5Str;
  // headerObj['duozheng_client'] = 5;
  
  // headerObj['token'] = bdToken || '';
  // headerObj['Content-Type'] = 'application/json; charset=utf-8';

  // options['credentials'] = 'include';
  // options['headers'] = headerObj;

  // if(options.method === 'GET') {
  //   Object.keys(options.data).forEach(key=>{
  //     paramsArray.push(key +'='+ (options.data)[key]);
  //   })
    
  //   if(url.search(/\?/) === -1) {
  //     url += '?'+ paramsArray.join('&');
  //   }else{
  //     url += '&'+ paramsArray.join('&');
  //   }
  // }

  // let response = await fetch(url, options);  
  let response = await fetch(url, options);  
  checkStatus(response);
  const data = await response.json();  
  return data;
 }


