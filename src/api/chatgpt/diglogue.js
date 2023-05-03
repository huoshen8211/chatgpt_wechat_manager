import request from '@/utils/request'

// 查询对话列-主列表
export function listDiglogue(query) {
  return request({
    url: '/cricleai/diglogue/list',
    method: 'get',
    params: query
  })
}

// 查询对话列-主详细
export function getDiglogue(id) {
  return request({
    url: '/cricleai/diglogue/' + id,
    method: 'get'
  })
}

// 新增对话列-主
export function addDiglogue(data) {
  return request({
    url: '/cricleai/diglogue',
    method: 'post',
    data: data
  })
}

// 修改对话列-主
export function updateDiglogue(data) {
  return request({
    url: '/cricleai/diglogue',
    method: 'put',
    data: data
  })
}

// 删除对话列-主
export function delDiglogue(id) {
  return request({
    url: '/cricleai/diglogue/' + id,
    method: 'delete'
  })
}



// 查询对话列-主列表
export function listDigloguesys(query) {
  return request({
    url: '/cricleai/diglogue/sys/list',
    method: 'get',
    params: query
  })
}

// 查询对话列-主详细
export function getDigloguesys(id) {
  return request({
    url: '/cricleai/diglogue/sys/' + id,
    method: 'get'
  })
}

// 新增对话列-主
export function addDigloguesys(data) {
  return request({
    url: '/cricleai/diglogue/sys',
    method: 'post',
    data: data
  })
}

// 修改对话列-主
export function updateDigloguesys(data) {
  return request({
    url: '/cricleai/diglogue/sys',
    method: 'put',
    data: data
  })
}

// 删除对话列-主
export function delDigloguesys(id) {
  return request({
    url: '/cricleai/diglogue/sys/' + id,
    method: 'delete'
  })
}


