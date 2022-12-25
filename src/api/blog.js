import request from '@/utils/request'

export function getBlogList(queryInfo) {
  return request({
    url: '/blog/getBlogList',
    method: 'get',
    params: { ...queryInfo }
  })
}
export function getBlogInfoById(blogId) {
  return request({
    url: '/blog/getBlogInfoById',
    method: 'GET',
    params: { blogId }
  })
}

export function getCategoryAndTag() {
  return request({
    url: '/blog/getCategoryAndTag',
    method: 'GET'
  })
}

export function getBlogByCategoryId(categoryId) {
  return request({
    url: '/blog/getBlogByCategoryId',
    method: 'GET',
    params: { categoryId }
  })
}

export function getBlogByTagId(tagId) {
  return request({
    url: '/blog/getBlogByTagId',
    method: 'GET',
    params: { tagId }
  })
}

