import request from '@/utils/request'

// 查询充值卡-主列表
export function listRechargeablecardmain(query) {
  return request({
    url: '/cricleai/rechargeablecardmain/list',
    method: 'get',
    params: query
  })
}

// 查询充值卡-主详细
export function getRechargeablecardmain(id) {
  return request({
    url: '/cricleai/rechargeablecardmain/' + id,
    method: 'get'
  })
}

// 新增充值卡-主
export function addRechargeablecardmain(data) {
  return request({
    url: '/cricleai/rechargeablecardmain',
    method: 'post',
    data: data
  })
}

// 修改充值卡-主
export function updateRechargeablecardmain(data) {
  return request({
    url: '/cricleai/rechargeablecardmain',
    method: 'put',
    data: data
  })
}

// 删除充值卡-主
export function delRechargeablecardmain(id) {
  return request({
    url: '/cricleai/rechargeablecardmain/' + id,
    method: 'delete'
  })
}



// 查询充值卡-主列表
export function listRechargeablecardmainsys(query) {
  return request({
    url: '/cricleai/rechargeablecardmain/sys/list',
    method: 'get',
    params: query
  })
}

// 查询充值卡-主详细
export function getRechargeablecardmainsys(id) {
  return request({
    url: '/cricleai/rechargeablecardmain/sys/' + id,
    method: 'get'
  })
}

// 新增充值卡-主
export function addRechargeablecardmainsys(data) {
  return request({
    url: '/cricleai/rechargeablecardmain/sys',
    method: 'post',
    data: data
  })
}

// 修改充值卡-主
export function updateRechargeablecardmainsys(data) {
  return request({
    url: '/cricleai/rechargeablecardmain/sys',
    method: 'put',
    data: data
  })
}

// 删除充值卡-主
export function delRechargeablecardmainsys(id) {
  return request({
    url: '/cricleai/rechargeablecardmain/sys/' + id,
    method: 'delete'
  })
}


// 删除充值卡-主
export function deleteTbRechargeableCardMainByBathIdsys(id) {
  return request({
    url: '/cricleai/rechargeablecardmain/sys/bathId/' + id,
    method: 'delete'
  })
}


