import request from '@/utils/request'

export function getPerformanceInfo() {
    return request({
        url: '/configCenterApi/zztest/originalPerformance/getPerformanceInfo',
        method: 'get',
    })
}

export function saveVersionData(msg){
  return request({
    url: 'configCenterApi/zztest/stashPerformance/saveVersionData',
    method: 'post',
    params: msg
  })
}
