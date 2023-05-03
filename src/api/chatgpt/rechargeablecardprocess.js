import request from '@/utils/request'

// 查询充值卡详情列表
export function listRechargeablecardprocess(query) {
  return request({
    url: '/cricleai/rechargeablecardprocess/list',
    method: 'get',
    params: query
  })
}

// 查询充值卡详情详细
export function getRechargeablecardprocess(id) {
  return request({
    url: '/cricleai/rechargeablecardprocess/' + id,
    method: 'get'
  })
}

// 新增充值卡详情
export function addRechargeablecardprocess(data) {
  return request({
    url: '/cricleai/rechargeablecardprocess',
    method: 'post',
    data: data
  })
}

// 修改充值卡详情
export function updateRechargeablecardprocess(data) {
  return request({
    url: '/cricleai/rechargeablecardprocess',
    method: 'put',
    data: data
  })
}

// 删除充值卡详情
export function delRechargeablecardprocess(id) {
  return request({
    url: '/cricleai/rechargeablecardprocess/' + id,
    method: 'delete'
  })
}



// 查询充值卡详情列表
export function listRechargeablecardprocesssys(query) {
  return request({
    url: '/cricleai/rechargeablecardprocess/sys/list',
    method: 'get',
    params: query
  })
}

// 查询充值卡详情详细
export function getRechargeablecardprocesssys(id) {
  return request({
    url: '/cricleai/rechargeablecardprocess/sys/' + id,
    method: 'get'
  })
}

// 新增充值卡详情
export function addRechargeablecardprocesssys(data) {
  return request({
    url: '/cricleai/rechargeablecardprocess/sys/add',
    method: 'post',
    data: data
  })
}

// 修改充值卡详情
export function updateRechargeablecardprocesssys(data) {
  return request({
    url: '/cricleai/rechargeablecardprocess/sys',
    method: 'put',
    data: data
  })
}

// 删除充值卡详情
export function delRechargeablecardprocesssys(id) {
  return request({
    url: '/cricleai/rechargeablecardprocess/sys/' + id,
    method: 'delete'
  })
}


