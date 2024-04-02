import { request } from '@/utils';

export const loginApi = (data) => {
  return request({
    url: '/authorizations',
    method: 'post',
    data,
  })
}