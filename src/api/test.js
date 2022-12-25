import request from '@/utils/request'

export function testConn(name) {
    return request({
            url: '/add',
            method: 'GET',
            params: {name}
        }
    )
}
