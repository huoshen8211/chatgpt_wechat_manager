import request from '@/utils/request'

// 查询key管理列表
export function listManager(query) {
  return request({
    url: '/cricleai/manager/list',
    method: 'get',
    params: query
  })
}

// 查询key管理详细
export function getManager(id) {
  return request({
    url: '/cricleai/manager/' + id,
    method: 'get'
  })
}

// 新增key管理
export function addManager(data) {
  return request({
    url: '/cricleai/manager',
    method: 'post',
    data: data
  })
}

// 修改key管理
export function updateManager(data) {
  return request({
    url: '/cricleai/manager',
    method: 'put',
    data: data
  })
}

// 删除key管理
export function delManager(id) {
  return request({
    url: '/cricleai/manager/' + id,
    method: 'delete'
  })
}



// 查询key管理列表
export function listManagersys(query) {
  return request({
    url: '/cricleai/manager/sys/list',
    method: 'get',
    params: query
  })
}

// 查询key管理详细
export function getManagersys(id) {
  return request({
    url: '/cricleai/manager/sys/' + id,
    method: 'get'
  })
}

// 新增key管理
export function addManagersys(data) {
  return request({
    url: '/cricleai/manager/sys',
    method: 'post',
    data: data
  })
}

// 修改key管理
export function updateManagersys(data) {
  return request({
    url: '/cricleai/manager/sys',
    method: 'put',
    data: data
  })
}

// 删除key管理
export function delManagersys(id) {
  return request({
    url: '/cricleai/manager/sys/' + id,
    method: 'delete'
  })
}


