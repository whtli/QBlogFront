import request from '@/utils/request'

export function getTagDetail() {
  return request({
    url: '/tag/getTagDetail',
    method: 'GET',
  })
}
