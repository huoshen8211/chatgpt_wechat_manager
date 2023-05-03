import request from '@/utils/request'

// 查询在线更新列表
export function listOnline(query) {
  return request({
    url: '/cricleai/online/list',
    method: 'get',
    params: query
  })
}

// 查询在线更新详细
export function getOnline(id) {
  return request({
    url: '/cricleai/online/' + id,
    method: 'get'
  })
}

// 新增在线更新
export function addOnline(data) {
  return request({
    url: '/cricleai/online',
    method: 'post',
    data: data
  })
}

// 修改在线更新
export function updateOnline(data) {
  return request({
    url: '/cricleai/online',
    method: 'put',
    data: data
  })
}

// 删除在线更新
export function delOnline(id) {
  return request({
    url: '/cricleai/online/' + id,
    method: 'delete'
  })
}



// 查询在线更新列表
export function listOnlinesys(query) {
  return request({
    url: '/cricleai/online/sys/list',
    method: 'get',
    params: query
  })
}

// 查询在线更新详细
export function getOnlinesys(id) {
  return request({
    url: '/cricleai/online/sys/' + id,
    method: 'get'
  })
}

// 新增在线更新
export function addOnlinesys(data) {
  return request({
    url: '/cricleai/online/sys',
    method: 'post',
    data: data
  })
}

// 修改在线更新
export function updateOnlinesys(data) {
  return request({
    url: '/cricleai/online/sys',
    method: 'put',
    data: data
  })
}

// 删除在线更新
export function delOnlinesys(id) {
  return request({
    url: '/cricleai/online/sys/' + id,
    method: 'delete'
  })
}


