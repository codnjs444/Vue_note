// 📂 stores/api/menuApi.js
// ====================================================================================
// 📌 Menu API 호출 함수
// - 서버에서 사용자별 메뉴 리스트를 가져오는 함수입니다.
// - `menuTree.json` 파일에 접근하여 메뉴 데이터를 반환합니다.
// ====================================================================================

import request from '@/utils/request'

/**
 * 🔍 menuByUserList
 * - 사용자별 메뉴 리스트를 불러옵니다.
 * - `menuTree.json` 파일을 통해 메뉴 트리 구조 데이터를 제공합니다.
 *
 * @returns {Promise} 메뉴 트리 데이터를 포함한 Promise 객체
 */
export function menuByUserList() {
  return request.get('/menuTree.json') // 📂 public 폴더에 위치한 menuTree.json에 접근
}
