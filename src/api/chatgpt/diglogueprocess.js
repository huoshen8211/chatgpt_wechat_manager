import request from '@/utils/request'

// 查询充值卡-从列表
export function listDiglogueprocess(query) {
  return request({
    url: '/cricleai/diglogueprocess/list',
    method: 'get',
    params: query
  })
}

// 查询充值卡-从详细
export function getDiglogueprocess(id) {
  return request({
    url: '/cricleai/diglogueprocess/' + id,
    method: 'get'
  })
}

// 新增充值卡-从
export function addDiglogueprocess(data) {
  return request({
    url: '/cricleai/diglogueprocess',
    method: 'post',
    data: data
  })
}

// 修改充值卡-从
export function updateDiglogueprocess(data) {
  return request({
    url: '/cricleai/diglogueprocess',
    method: 'put',
    data: data
  })
}

// 删除充值卡-从
export function delDiglogueprocess(id) {
  return request({
    url: '/cricleai/diglogueprocess/' + id,
    method: 'delete'
  })
}



// 查询充值卡-从列表
export function listDiglogueprocesssys(query) {
  return request({
    url: '/cricleai/diglogueprocess/sys/list',
    method: 'get',
    params: query
  })
}

// 查询充值卡-从详细
export function getDiglogueprocesssys(id) {
  return request({
    url: '/cricleai/diglogueprocess/sys/' + id,
    method: 'get'
  })
}

// 新增充值卡-从
export function addDiglogueprocesssys(data) {
  return request({
    url: '/cricleai/diglogueprocess/sys',
    method: 'post',
    data: data
  })
}

// 修改充值卡-从
export function updateDiglogueprocesssys(data) {
  return request({
    url: '/cricleai/diglogueprocess/sys',
    method: 'put',
    data: data
  })
}

// 删除充值卡-从
export function delDiglogueprocesssys(id) {
  return request({
    url: '/cricleai/diglogueprocess/sys/' + id,
    method: 'delete'
  })
}


