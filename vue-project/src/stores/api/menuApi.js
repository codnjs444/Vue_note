// stores/api/menuApi.js
import request from '@/utils/request'

export function menuByUserList() {
  return request.get('/menuTree.json') // public 폴더에 있는 menuTree.json에 접근
}
