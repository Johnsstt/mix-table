import request  from '@/utils/request';

export function getTableInfo(params) {
  return request(`http://www.mocky.io/v2/5be3ced42f00006d00d9f13b`,{
    method: 'GET',   
    data: params
  });
}
