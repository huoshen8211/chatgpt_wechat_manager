import request from '@/utils/request'

// 查询次数消耗日志列表
export function listFrequentcylog(query) {
  return request({
    url: '/cricleai/frequentcylog/list',
    method: 'get',
    params: query
  })
}

// 查询次数消耗日志详细
export function getFrequentcylog(id) {
  return request({
    url: '/cricleai/frequentcylog/' + id,
    method: 'get'
  })
}

// 新增次数消耗日志
export function addFrequentcylog(data) {
  return request({
    url: '/cricleai/frequentcylog',
    method: 'post',
    data: data
  })
}

// 修改次数消耗日志
export function updateFrequentcylog(data) {
  return request({
    url: '/cricleai/frequentcylog',
    method: 'put',
    data: data
  })
}

// 删除次数消耗日志
export function delFrequentcylog(id) {
  return request({
    url: '/cricleai/frequentcylog/' + id,
    method: 'delete'
  })
}



// 查询次数消耗日志列表
export function listFrequentcylogsys(query) {
  return request({
    url: '/cricleai/frequentcylog/sys/list',
    method: 'get',
    params: query
  })
}

// 查询次数消耗日志详细
export function getFrequentcylogsys(id) {
  return request({
    url: '/cricleai/frequentcylog/sys/' + id,
    method: 'get'
  })
}

// 新增次数消耗日志
export function addFrequentcylogsys(data) {
  return request({
    url: '/cricleai/frequentcylog/sys',
    method: 'post',
    data: data
  })
}

// 修改次数消耗日志
export function updateFrequentcylogsys(data) {
  return request({
    url: '/cricleai/frequentcylog/sys',
    method: 'put',
    data: data
  })
}

// 删除次数消耗日志
export function delFrequentcylogsys(id) {
  return request({
    url: '/cricleai/frequentcylog/sys/' + id,
    method: 'delete'
  })
}


