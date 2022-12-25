import request from '@/utils/request'

export function loadComment(blogId) {
  return request({
    url: '/loadComment',
    method: 'get',
    params: { blogId }
  })
}

export function saveComment(commentForm) {
  return request({
    url: '/saveComment',
    method: 'post',
    data: commentForm
  })
}

export function deleteCommentById(id) {
  return request({
    url: '/deleteCommentById',
    method: 'delete',
    params: { id }
  })
}

