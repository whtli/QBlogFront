import request from '@/utils/request'

export function getCategoryDetail() {
  return request({
    url: '/category/getCategoryDetail',
    method: 'GET',
  })
}
