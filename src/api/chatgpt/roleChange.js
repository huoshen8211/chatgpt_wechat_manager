import request from '@/utils/request'

// 查询角色管理列表
export function listRoleChange(query) {
  return request({
    url: '/cricleai/roleChange/list',
    method: 'get',
    params: query
  })
}

// 查询角色管理详细
export function getRoleChange(id) {
  return request({
    url: '/cricleai/roleChange/' + id,
    method: 'get'
  })
}

// 新增角色管理
export function addRoleChange(data) {
  return request({
    url: '/cricleai/roleChange',
    method: 'post',
    data: data
  })
}

// 修改角色管理
export function updateRoleChange(data) {
  return request({
    url: '/cricleai/roleChange',
    method: 'put',
    data: data
  })
}

// 删除角色管理
export function delRoleChange(id) {
  return request({
    url: '/cricleai/roleChange/' + id,
    method: 'delete'
  })
}



// 查询角色管理列表
export function listRoleChangesys(query) {
  return request({
    url: '/cricleai/roleChange/sys/list',
    method: 'get',
    params: query
  })
}

// 查询角色管理详细
export function getRoleChangesys(id) {
  return request({
    url: '/cricleai/roleChange/sys/' + id,
    method: 'get'
  })
}

// 新增角色管理
export function addRoleChangesys(data) {
  return request({
    url: '/cricleai/roleChange/sys',
    method: 'post',
    data: data
  })
}

// 修改角色管理
export function updateRoleChangesys(data) {
  return request({
    url: '/cricleai/roleChange/sys',
    method: 'put',
    data: data
  })
}

// 删除角色管理
export function delRoleChangesys(id) {
  return request({
    url: '/cricleai/roleChange/sys/' + id,
    method: 'delete'
  })
}


