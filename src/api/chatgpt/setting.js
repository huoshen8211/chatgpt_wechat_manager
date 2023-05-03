import request from '@/utils/request'

//
export function updateSetting(data) {
  return request({
    url: '/yuan/ai/common/saveConfigInfo',
    method: 'post',
    data:data
  })
}

export function refreshList() {
  return request({
    url: '/yuan/ai/common/getConfigSys',
    method: 'get'
  })
}

//同步数据
export function sysnConfigData(data) {
  return request({
    url: '/yuan/ai/common/sysnConfigInfo',
    method: 'post',
    data:data
  })
}



//同步数据
export function wordNoticeIng(wordText) {
  return request({
    url: '/yuan/ai/w/stream/wordSay?content='+wordText,
    method: 'post'
  })
}

