import request from '@/utils/request'

// 查询模型建设列表
export function listUsermodel(query) {
  return request({
    url: '/cricleai/usermodel/list',
    method: 'get',
    params: query
  })
}

// 查询模型建设详细
export function getUsermodel(id) {
  return request({
    url: '/cricleai/usermodel/' + id,
    method: 'get'
  })
}

// 新增模型建设
export function addUsermodel(data) {
  return request({
    url: '/cricleai/usermodel',
    method: 'post',
    data: data
  })
}

// 修改模型建设
export function updateUsermodel(data) {
  return request({
    url: '/cricleai/usermodel',
    method: 'put',
    data: data
  })
}

// 删除模型建设
export function delUsermodel(id) {
  return request({
    url: '/cricleai/usermodel/' + id,
    method: 'delete'
  })
}



// 查询模型建设列表
export function listUsermodelsys(query) {
  return request({
    url: '/cricleai/usermodel/sys/list',
    method: 'get',
    params: query
  })
}

// 查询模型建设详细
export function getUsermodelsys(id) {
  return request({
    url: '/cricleai/usermodel/sys/' + id,
    method: 'get'
  })
}

// 新增模型建设
export function addUsermodelsys(data) {
  return request({
    url: '/cricleai/usermodel/sys',
    method: 'post',
    data: data
  })
}

// 修改模型建设
export function updateUsermodelsys(data) {
  return request({
    url: '/cricleai/usermodel/sys',
    method: 'put',
    data: data
  })
}

// 删除模型建设
export function delUsermodelsys(id) {
  return request({
    url: '/cricleai/usermodel/sys/' + id,
    method: 'delete'
  })
}


// 查询模型建设详细
export function getModelAddress() {
  return request({
    url: '/cricleai/usermodel/getModelAddress',
    method: 'get'
  })
}
